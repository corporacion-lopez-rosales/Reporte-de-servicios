import { Opcion, ReporteServicio } from "./opciones";
import { NgModel } from '@angular/forms';
import { ArrayType } from '@angular/compiler';
import { DashboardComponent } from "./dashboard/dashboard.component";


export const opciones: Opcion[] =[
    { id: 1, name: 'Instalacion' },
    { id: 2, name: 'Revision y diagnostico para cotizar' },
    { id: 3, name: 'Mantenimiento' },
    { id: 4, name: 'Reparacion' },
    { id: 5, name: 'Revision, Diagnostico si procede garantia reparar, si no procede cotizar' }
]

export const Cliente: Opcion[] = [
    {id:0, name: '--------'},
    { id: 1, name: 'Mala' },
    { id: 2, name: 'Buena' },
    { id: 3, name: 'Exelente' }
]

//console.log(DashboardComponent);

export const Table_Reportes: ReporteServicio[] = [
    { id: 0, Consecutivo: 'RS0216', Num_reportes: 'Instalacion', Cliente: 'Si', falla: 'H', levanta_report: 'Luis', Nombre_prov: 'H', Modelo: 'Luis', Marca: 'Luis', Fecha_report: 12/12/2018 }
];

