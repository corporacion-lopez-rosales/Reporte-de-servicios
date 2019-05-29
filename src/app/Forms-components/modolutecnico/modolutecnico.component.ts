import { Component, OnInit } from '@angular/core';

import { Cliente } from "../../mock-opciones";

@Component({
  selector: 'app-modolutecnico',
  templateUrl: './modolutecnico.component.html',
  styleUrls: ['./modolutecnico.component.scss']
})
export class ModolutecnicoComponent implements OnInit {
  selectedOpcion: string;
  opc = Cliente;
  constructor() { }

  ngOnInit() {
  }

}
