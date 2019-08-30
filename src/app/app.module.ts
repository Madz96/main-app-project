import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MyLibModule } from "my-lib";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [MyLibModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
