import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ReporteServicio } from "./opciones";
@Injectable({
  providedIn: 'root'
})
export class NavService {
  private serviceUrl = 'https://servitek.clrswap.com/proy-servicios/index.php/Controlador/';
  public url='https://servitek.clrswap.com/proy-servicios/index.php/Controlador/'; // disponer url de su servidor que tiene las páginas PHP

  public urlactualizar='https://servitek.clrswap.com/proy-servicios/index.php/Controlador2/';
  public urleliminar='https://servitek.clrswap.com/proy-servicios/index.php/Controlador3/';

  public urlautocomplete='https://servitek.clrswap.com/proy-servicios/index.php/Controlador4/';

  constructor(private http: HttpClient) { }
  flag;
  Rep;
  mostrar() {
    return this.http.get(`${this.url}mostrar.php`);
  }
  create_user(informacion) {
    console.log("hola 22222222");
    return this.http.post(`${this.url}create_user.php`, JSON.stringify(informacion));    
  }
  getUser(): Observable<ReporteServicio[]> {
    return this.http.get<ReporteServicio[]>(this.serviceUrl)
  }
  getDatos(x){
     this.flag = x;
    console.log(x);
    return x;
  }
  getForm(Reporte){
    this.Rep = Reporte;
  }
   showDatos(){
     return this.flag;
   }
  showDatos2() {
    return this.Rep;
  }
  actualizar(informacion) {
    return this.http.post(`${this.urlactualizar}actualizar.php`, JSON.stringify(informacion));    
  } 
  eliminar(id: number){
    return this.http.get(`${this.urleliminar}eliminar.php?id=${id}`);
  }

  autocomplete(){
    return this.http.get(`${this.urlautocomplete}autocomplete.php`);
  }



  

}
