import { Opcion, ReporteServicio } from "./opciones";
import { NgModel } from '@angular/forms';
import { ArrayType } from '@angular/compiler';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { shiftInitState } from '@angular/core/src/view';


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

export const Vendedores: Opcion[] = [
    {id: 1, name: 'Jorge Luis Jimenez'},
    {id: 2, name: 'Rogelio Lopez'},
    {id: 3, name: 'Eduardo Perez'},
    {id: 4, name: 'Antonio Rojo'},
    {id: 5, name: 'Jesus Lopez'}
]

export const Tecnicos: Opcion[] = [
    {id: 1, name: 'Sergio Rodriguez'},
    {id: 2, name: 'Alejandro García'},
    {id: 3, name: 'Alejandro Vega'},
    {id: 4, name: 'Javier Torres'},
    {id: 5, name: 'Carlos Ferriño'}
]

export const fact_remision: Opcion[] = [
    {id: 1, name: 'Si'},
    {id: 2, name: 'No'},
    {id: 3, name: 'N/A'},
    {id: 4, name: 'A/G'},
    {id: 5, name: 'Remision'}
]

export const levanta_rep: Opcion[] = [
    {id: 1, name: 'Jesus Lopez'},
    {id: 2, name: 'Alejandro Marquez'},
    {id: 3, name: 'Antonio Rojo'},
    {id: 4, name: 'Eduardo Perez'}
]

export const status: Opcion[] = [
    {id: 1, name: 'PENDIENTE'},
    {id: 2, name: 'CERRADO'}
]
//console.log(DashboardComponent);

export const Table_Reportes: ReporteServicio[] = [
    { id: 0, Consecutivo: 'RS0216', Num_reportes: 'Instalacion', Cliente: 'Si', falla: 'H', levanta_report: 'Luis', Nombre_prov: 'H', Modelo: 'Luis', Marca: 'Luis', Fecha_report: 12/12/2018 }
];

