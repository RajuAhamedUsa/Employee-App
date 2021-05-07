import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchPipe } from './searchs/search.pipe';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { AddEditComponent } from './components/add-edit/add-edit.component';

@NgModule({
  declarations: [
    AppComponent,HomePageComponent,SearchPipe, AddEditComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
