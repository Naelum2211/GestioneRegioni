import { Component, OnInit } from '@angular/core';
import { regioni } from 'src/models/regioni';

@Component({
  selector: 'app-view-dati',
  templateUrl: './view-dati.component.html',
  styleUrls: ['./view-dati.component.css']
})
export class ViewDatiComponent implements OnInit {

  regioni = regioni;
  constructor() { }

  ngOnInit(): void {
  }

}
