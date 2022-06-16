import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemPickerComponent } from './item-picker/item-picker.component';
import { ViewDatiComponent } from './view-dati/view-dati.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemPickerComponent,
    ViewDatiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
