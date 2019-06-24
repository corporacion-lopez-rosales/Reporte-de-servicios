import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import 'jspdf-autoTable';
import { DOCUMENT } from '@angular/common';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import html2canvas from 'html2canvas'; 
import {MatCardModule} from '@angular/material/card'; 
import {NavService} from '../../nav.service';
import { Router } from '@angular/router';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { borderRightWidth } from 'html2canvas/dist/types/css/property-descriptors/border-width';

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss']
})
export class VerticalComponent implements OnInit {
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
    pagado_tecnico: null,
    status: null
  }
  constructor(private navServicio: NavService, private router: Router) { }
  flag: boolean;
  x;
  show:boolean = true;
  show1:boolean = false;
  selectedOpcion: string;
  title = 'prueba90';
  tipo_s = prompt("Tipo de solicitud de servicio", "Instalacion");
  ngOnInit() {
    
  

    

     //this.total1();
     this.x = this.navServicio.showDatos2();
     console.log(this.x);
    this.flag = this.navServicio.showDatos();
    
    if(this.flag){
      this.show = false;
      this.show1 = true;
    }

    
    
    console.log(this.flag);
    if(this.flag){
      console.log("entro xd 666");
      this.art = {
        id: this.x.id,
        nombre_cliente: this.x.nombre_cliente,
        contacto: this.x.contacto,
        telefono: this.x.telefono,
        direccion: this.x.direccion,
        correo: this.x.correo,
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
        precio_venta: this.x.precio_venta,
        link_serv: this.x.link_serv,
        reporte_fis: this.x.reporte_fis,
        fact_rem: this.x.fact_rem,
        link_fact: this.x.link_fact,
        pagado_cliente: this.x.pagado_cliente,
        pagado_tecnico: this.x.pagado_tecnico,
        status: this.x.status
      }
      console.log(this.art.diagnostico)
    }

    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 265;    
      //var imgHeight = canvas.height * imgWidth / canvas.width;  
      //var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png');  
      let pdf = new jsPDF('Portrait', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, pageHeight)  
      //pdf.save('MYPdf.pdf'); // Generated PDF   
      //window.open(pdf.output('bloburl'), '_blank');//esta funciona sirve para abrir el pdf en una nueva pestaña, sino funciona, osea que lo abre y cierra rapidamente es porque tiene un boqueador de ventanas o anuncios
    });
  
    //this.router.navigate(['']);
  }

  public captureScreen()  
  {  

    
    
    console.log("boton del pdf xd");

  }  
}

