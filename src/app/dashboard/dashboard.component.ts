import { Component, OnInit, ViewChild } from '@angular/core';
import { Table_Reportes } from "../mock-opciones";
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { NavService } from "../nav.service";
import { Observable } from "rxjs";
import { DataSource } from "@angular/cdk/collections";
import { ReporteServicio } from '../opciones'
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
informacion: null;
  dataSource = new UserDataSource(this.navService);
  displayedColums = ['consecutivo', 'report_ant', 'fecha_report', 'nombre_cliente', 'falla', 'levanta_report', 'garantia', 'modelo', 'marca', 'Actions'];
  art={
    id: null,
    nombre_cliente: null,
    contacto: null,
    telefono: null,
    direccion: null,
    report_ant: null,
    revisiones: null,
    vendedor: null,
    consecutivo: null,
    venta_equipo: null,
    instalacion: null,
    garantia: null,
    nivel_molestia: null,
    marca: null,
    serie: null, 
    modelo: null,
    desc_equipo: null,
    levanta_report: null,
    falla: null,
    requisitos: null,
    fecha_promesa: null,
    fecha_report: null,
    obs: null,
    nombre_prov: null,
    satisf_client: null,
    descripcion: null,
    diagnostico: null,
    costo_client: null,
    costo_ref: null,
    costo_cobrar_cli: null,
    utilidad: null,
    precio_venta: null
  }
  constructor(private navService: NavService) { }
  
  ngOnInit() {

  }
  pruebas(rep) {
    var x = true
    this.navService.getDatos(x);
    this.navService.getForm(rep);
    console.log(x);
  }

  log(z){
    console.log(z);
  }

  eliminar(rep){
    this.dataSource = new UserDataSource(this.navService); //refresh
    console.log(rep.id);
    this.navService.eliminar(rep.id).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        
      }
      
    });
    
  }

}





export class UserDataSource extends DataSource<any> {
  constructor(private navService: NavService) {
    super();
  }
  connect(): Observable<ReporteServicio[]> {
    console.log("hola xd");
    return this.navService.getUser();
  }

  disconnect() {

  }
}

