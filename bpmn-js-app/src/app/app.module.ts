import { BrowserModule } from "@angular/platform-browser";
import { DiagramComponent } from "./diagram/diagram.component";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SidebarService } from "./services/showSidebar.service";
@NgModule({
  declarations: [
    AppComponent,
    DiagramComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [SidebarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
