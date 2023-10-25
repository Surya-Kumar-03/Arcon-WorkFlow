import { Component } from "@angular/core";
import { SidebarService } from "./services/showSidebar.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  constructor(public sidebarService: SidebarService) {}

  // For deciding whether to show the form
  get isSidebarVisible() {
    return this.sidebarService.isSidebarVisible;
  }

  title = "bpmn-js-angular";
  diagramUrl = "../assets/diagram.bpmn";
  importError?: Error;

  handleImported(event) {
    const { type, error, warnings } = event;

    // removes seperator
    const seperator = document.querySelector(".separator");
    if (seperator) {
      seperator.remove();
    }

    if (type === "error") {
      console.error("Failed to render diagram", error);
    }

    this.importError = error;
  }
}
