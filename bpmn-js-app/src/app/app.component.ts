import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "bpmn-js-angular";
  diagramUrl = "assets/diagram.bpmn";
  importError?: Error;

  handleImported(event) {
    const { type, error, warnings } = event;

    if (type === "error") {
      console.error("Failed to render diagram", error);
    }

    this.importError = error;
  }
}
