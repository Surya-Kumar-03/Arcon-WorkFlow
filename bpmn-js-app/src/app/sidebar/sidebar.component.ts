import { Component, ChangeDetectorRef } from "@angular/core";
import { SidebarService } from "../services/showSidebar.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent {
  constructor(private sidebarService: SidebarService, private cdr: ChangeDetectorRef) {}

  get currentInfo(): string {
    return this.sidebarService.currentElementId || "Main Menu";
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar(false);
  }

  // Whenever you want to trigger change detection manually, call this method
  detectChanges() {
    this.cdr.detectChanges();
  }
}
