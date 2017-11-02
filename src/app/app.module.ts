import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {SectionsModule, routs} from "./sections/index";
import { MenuComponent } from './menu/menu.component';
import {MatIconModule, MatButtonModule} from "@angular/material";
import {HttpModule} from "@angular/http";
import {PricelistService} from "./sections/pricelist/pricelist.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    RouterModule.forRoot(routs),
    BrowserModule,
    BrowserAnimationsModule,
    SectionsModule,
    MatIconModule,
    MatButtonModule,
    HttpModule
  ],
  providers: [PricelistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
