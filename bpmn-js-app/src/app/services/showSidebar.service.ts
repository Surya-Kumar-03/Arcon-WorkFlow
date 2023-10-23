import { Injectable } from "@angular/core";

@Injectable()
export class SidebarService {
  currentElementId: string | null;
  isSidebarVisible: boolean = false;

  toggleSidebar(
    currentState: boolean | null, // Send Null if you want to do the opposite of the current state
    currentElementId?: string | null
  ) {
    this.currentElementId = currentElementId;
    this.isSidebarVisible = currentState ?? !this.isSidebarVisible;
  }
}
