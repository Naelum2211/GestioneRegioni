import { Component, OnInit } from '@angular/core';
import { regioni } from "../../models/regioni";
import { comuni } from "../../models/comuni";
import { province, Provincia } from "../../models/province";
@Component({
  selector: 'app-item-picker',
  templateUrl: './item-picker.component.html',
  styleUrls: ['./item-picker.component.css']
})
export class ItemPickerComponent implements OnInit {

  regione = regioni;
  province = province;
  comuni = comuni;

  provSelected = province;
  comSelected = comuni;
  isVisibleLink = false;

  constructor() { }

  ngOnInit(): void {
    this.provSelected = [];
    this.comSelected = [];
  }

  changeRegione(event: any): void {
    let idRegione = event.target.value;
    let result = province.filter(p => p.IdRegione === Number(idRegione))
    this.provSelected = result;
  }

  changeProvincia(event: any): void {
    let idProvincia = event.target.value;
    let result = comuni.filter(p => p.IdProvincia === Number(idProvincia))
    this.comSelected = result;
  }

  changeComune(event: any): void {
    if (event.target.value > 0)
      this.isVisibleLink = true;
    else
      this.isVisibleLink = false;
  }

}
