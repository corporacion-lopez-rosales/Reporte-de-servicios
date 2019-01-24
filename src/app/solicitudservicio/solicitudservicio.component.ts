import { Component, OnInit } from '@angular/core';


import { opciones } from "../mock-opciones";
import { Opcion } from '../opciones';

@Component({
  selector: 'app-solicitudservicio',
  templateUrl: './solicitudservicio.component.html',
  styleUrls: ['./solicitudservicio.component.scss']
})
export class SolicitudservicioComponent implements OnInit {
  selectedOpcion: string;
  constructor() { }
  opc = opciones;
  ngOnInit() {
    console.log(this.opc);
  }

}
