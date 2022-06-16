import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPickerComponent } from './item-picker/item-picker.component';
import { ViewDatiComponent } from './view-dati/view-dati.component';

const routes: Routes = [
  { path: '', component: ItemPickerComponent },
  { path: 'products', component: ViewDatiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
