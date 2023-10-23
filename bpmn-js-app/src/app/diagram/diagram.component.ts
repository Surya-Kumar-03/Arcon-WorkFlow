import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  SimpleChanges,
  EventEmitter,
} from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { map, switchMap } from "rxjs/operators";

import * as BpmnJS from "bpmn-js/dist/bpmn-modeler.production.min.js";

import { from, Observable, Subscription } from "rxjs";

@Component({
  selector: "app-diagram",
  templateUrl: "./diagram.component.html",
})
export class DiagramComponent
  implements AfterContentInit, OnChanges, OnDestroy, OnInit
{
  @ViewChild("ref", { static: true }) private el: ElementRef;
  @Input() private url?: string;
  @Output() private importDone: EventEmitter<any> = new EventEmitter();
  private bpmnJS: BpmnJS = new BpmnJS();

  constructor(private http: HttpClient) {
    this.bpmnJS.on("import.done", ({ error }) => {
      if (!error) {
        this.bpmnJS.get("canvas").zoom("fit-viewport");
      }
    });
  }

  ngAfterContentInit(): void {
    this.bpmnJS.attachTo(this.el.nativeElement);
  }

  ngOnInit(): void {
    if (this.url) {
      this.loadUrl(this.url);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.url) {
      this.loadUrl(changes.url.currentValue);
    }
  }

  ngOnDestroy(): void {
    this.bpmnJS.destroy();
  }

  loadUrl(url: string): Subscription {
    return this.http
      .get(url, { responseType: "text" })
      .pipe(
        switchMap((xml: string) => this.importDiagram(xml)),
        map((result) => result.warnings)
      )
      .subscribe(
        (warnings) => {
          this.importDone.emit({
            type: "success",
            warnings,
          });
        },
        (err) => {
          this.importDone.emit({
            type: "error",
            error: err,
          });
        }
      );
  }

  private importDiagram(xml: string): Observable<{ warnings: Array<any> }> {
    return from(
      this.bpmnJS.importXML(xml) as Promise<{ warnings: Array<any> }>
    );
  }
}
