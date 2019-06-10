import { Component, OnInit, ViewChild } from '@angular/core';
import { Table_Reportes } from "../mock-opciones";
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { NavService } from "../nav.service";
import { Observable } from "rxjs";
import { DataSource } from "@angular/cdk/collections";
import { ReporteServicio } from '../opciones'
import * as $ from 'jquery';
import { AppModule } from '../app.module';
import { visitDslNode } from '@angular/animations/browser/src/util';
import { Router } from '@angular/router';
import {Form1Component} from '../Forms-components/form1/form1.component';
import { NullTemplateVisitor } from '@angular/compiler';
import { NullViewportScroller } from '@angular/common/src/viewport_scroller';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

@ViewChild(Form1Component) Prueba:Form1Component;
  

informacion: null;
  dataSource = new UserDataSource(this.navService);
  displayedColums = ['consecutivo', 'report_ant', 'fecha_report', 'nombre_cliente', 'falla', 'levanta_report', 'garantia', 'modelo', 'marca', 'Actions'];
  art={
    id: null,
    nombre_cliente: null,
    contacto: null,
    telefono: null,
    direccion: null,
    correo: null,
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
    precio_venta: null,
    link_serv: null,
    reporte_fis: null,
    fact_rem: null,
    link_fact: null,
    pagado_cliente: null,
    pagado_tecnico: null
  }
  constructor(private navService: NavService, private router: Router) { }
  
  ngOnInit() {

  }
  pruebas(rep) {
    var x = true
    this.navService.getDatos(x);
    this.navService.getForm(rep);
    console.log(x);
  }
/*

nuevo(){
  console.log("hola mundo");
  this.art ={
    id: null,
    nombre_cliente: null,
    contacto: null,
    telefono: null,
    direccion: null,
    correo: null,
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
}*/

  log(z){
    console.log(z);
  }

  nuevo(){
    console.log("el famosisimo reset");
    /*let variable:string = "true";
    localStorage.setItem("variable", variable);*/
    
    //this.router.navigate(['/home']);
    //http://localhost:4200/home
    location.replace("http://servitek.clrswap.com/home");
  }

  eliminar(rep){
    this.dataSource = new UserDataSource(this.navService); //refresh
    console.log(rep.id);
    this.navService.eliminar(rep.id).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        
      }
      
    });
    alert("Se elimino correctamente");
    this.router.navigate(['']);
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

