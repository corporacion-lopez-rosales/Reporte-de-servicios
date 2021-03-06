import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {NavService} from '../../nav.service';
import { Cliente } from "../../mock-opciones";
import {Tecnicos} from "../../mock-opciones";
import {Vendedores} from "../../mock-opciones";
import {fact_remision} from "../../mock-opciones";
import {levanta_rep} from "../../mock-opciones";
import {status} from "../../mock-opciones";

import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nuevo2',
  templateUrl: './nuevo2.component.html',
  styleUrls: ['./nuevo2.component.scss']
})
export class Nuevo2Component implements OnInit {

 

  dateDay = new Date();



  longitud;
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  nombre_cliente_: string[] = [];
  telefono_: string[] = [];
  direccion_: string[] = [];
  correo_: string[] = [];

  opcion = null;

  name;
  opc = Cliente;
  opc_tecnicos= Tecnicos;
  opc_vendedores= Vendedores;
  opc_fact_r=fact_remision;
  opc_levanta = levanta_rep;
  opc_status = status;

  informacion=null;
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
    fecha_report: this.dateDay,
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
    status: null,
    link_drive: null
  }
  constructor(private navServicio: NavService, private router: Router) { }
  flag: boolean;
  x;
  show:boolean = true;
  show1:boolean = false;
  selectedOpcion: string;
 
  create_user(){

    console.log("hola akjsbdosajdb");
    this.navServicio.create_user(this.art).subscribe(datos => {

    });
    alert("Se guardo correctamente");
    this.router.navigate(['']);
  }
  
  total_cliente(){
    //this.art.costo_cobrar_cli=this.art.costo_client;
    //console.log("xd");
    this.art.costo_client;
    console.log(this.art.costo_client);
    this.art.costo_cobrar_cli = this.art.costo_client + this.art.costo_ref;
    console.log(this.art.costo_cobrar_cli);
  }

  total_precio(){
    this.art.precio_venta = this.art.costo_cobrar_cli / this.art.utilidad;
    console.log(this.art.precio_venta);
    var xxxx=this.art.precio_venta.toFixed(2);
    this.art.precio_venta=xxxx;
  }

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
   
    this.navServicio.autocomplete().subscribe(datos=>{
      
      console.log(datos);
      this.opcion=Array(datos);
     this.longitud = this.opcion[0].length;
      console.log(this.longitud);
      console.log(datos[0]['nombre_comercial']);
      console.log("xd");       

      for(var i=0; i<this.longitud; i++){
        //console.log(datos[i]['nombre']);
        this.correo_[i]=datos[i]['correo'];
        this.nombre_cliente_[i]=datos[i]['nombre'];
        this.telefono_[i]=datos[i]['telefono'];
        this.direccion_[i]=datos[i]['direccion'];
        //console.log(datos[i]['nombre_comercial']);
        //console.log(datos[i]['razon_social']);
        if(datos[i]['razon_social']!=null){
          this.options[i]=datos[i]['razon_social'];  
          //console.log(this.options[i]);
          //console.log(i);      
         

        }
        if(datos[i]['nombre_comercial']!=null){
          this.options[i]=datos[i]['nombre_comercial'];  
          //console.log(this.options[i]);
          //console.log(i);        
        }
        

      }
      
    });       
    
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      
      startWith(''),
      map(value => this._filter(value))
      
    );

    this.xdd();


}


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
  actualizar() {
    
    this.navServicio.actualizar(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
      }
    });
    alert("Se edito correctamente");
    this.router.navigate(['']);    
  }

  xdd(){
    console.log("hola mundo");
    console.log(this.options);
    var uno=$("#contacto_1").val();
    console.log(uno);
    
    for(var i=0; i<this.longitud; i++){
      if(uno==this.options[i] ){
        console.log();
        this.art.nombre_cliente= this.nombre_cliente_[i];
        this.art.telefono= this.telefono_[i];
        this.art.direccion = this.direccion_[i];
        this.art.correo = this.correo_[i];
        
      }
    }

  }

 NuevoRegistro(){
   this.art=null;
 }


  hayRegistros() {
    return true;
  }


}
