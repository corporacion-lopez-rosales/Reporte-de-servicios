import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {NavService} from '../../nav.service';
import { Cliente } from "../../mock-opciones";


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
   name;
  opc = Cliente;
  informacion=null;
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
  constructor(private navServicio: NavService) { }
  flag: boolean;
  x;
  show:boolean = true;
  show1:boolean = false;
  selectedOpcion: string;
 
  create_user(){
    console.log("hola akjsbdosajdb");
    this.navServicio.create_user(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
      } 
    });
  }
  ngOnInit() {
     this.x = this.navServicio.showDatos2();
     console.log(this.x);
    this.flag = this.navServicio.showDatos();
    if(this.flag){
      this.show = false;
      this.show1 = true;
    }
    console.log(this.flag);
    if(this.flag){
      this.art = {
        id: this.x.id,
        nombre_cliente: this.x.nombre_cliente,
        contacto: this.x.contacto,
        telefono: this.x.telefono,
        direccion: this.x.direccion,
        report_ant: this.x.report_ant,
        revisiones: this.x.revisiones,
        vendedor: this.x.vendedor,
        consecutivo: this.x.consecutivo,
        venta_equipo: this.x.venta_equipo,
        instalacion: this.x.instalacion,
        garantia: this.x.garantia,
        nivel_molestia: this.x.nivel_molestia,
        marca: this.x.marca,
        serie: this.x.serie,
        modelo: this.x.modelo,
        desc_equipo: this.x.desc_equipo,
        levanta_report: this.x.levanta_report,
        falla: this.x.falla,
        requisitos: this.x.requisitos,
        fecha_promesa: this.x.fecha_promesa,
        fecha_report: this.x.fecha_report,
        obs: this.x.obs,
        nombre_prov: this.x.nombre_prov,
        satisf_client: this.x.satisf_client,
        descripcion: this.x.descripcion,
        diagnostico: this.x.diagnostico,
        costo_client: this.x.costo_client,
        costo_ref: this.x.costo_ref,
        costo_cobrar_cli: this.x.costo_cobrar_cli,
        utilidad: this.x.utilidad,
        precio_venta: this.x.precio_venta
      }
    }
  }
  
  actualizar() {
    this.navServicio.actualizar(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
      }
    });    
  }

  hayRegistros() {
    return true;
  }
  

}
