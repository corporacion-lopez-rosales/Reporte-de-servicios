import { Opcion, ReporteServicio } from "./opciones";


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

export const Table_Reportes: ReporteServicio[] = [
    { id: 0, Consecutivo: 'RS0216', Solicitud: 'Instalacion', Vendimos: 'Si', Garantia: 'H', Contacto: 'Luis' },
    { id: 1, Consecutivo: 'RS0216', Solicitud: 'Reparacion', Vendimos: 'Si', Garantia: 'He', Contacto: 'Luis' },
    { id: 2, Consecutivo: 'RS0216', Solicitud: 'Instalacion', Vendimos: 'Si', Garantia: 'Li', Contacto: 'Luis' },
    { id: 3, Consecutivo: 'RS0216', Solicitud: 'Instalacion', Vendimos: 'Si', Garantia: 'Be', Contacto: 'Luis' },
    { id: 4, Consecutivo: 'RS0216', Solicitud: 'Reparacion', Vendimos: 'Si', Garantia: 'B', Contacto: 'Luis' },
    { id: 5, Consecutivo: 'RS0216', Solicitud: 'Mantenimiento', Vendimos: 'No', Garantia: 'C', Contacto: 'Luis' },
    { id: 6, Consecutivo: 'RS0216', Solicitud: 'Mantenimiento', Vendimos: 'Si', Garantia: 'N', Contacto: 'Luis' },
    { id: 7, Consecutivo: 'RS0216', Solicitud: 'Mantenimiento', Vendimos: 'No', Garantia: 'O', Contacto: 'Luis' },
    { id: 8, Consecutivo: 'RS0216', Solicitud: 'Reparacion', Vendimos: 'Si', Garantia: 'F', Contacto: 'Luis' },
    { id: 9, Consecutivo: 'RS0216', Solicitud: 'Reparacion', Vendimos: 'No', Garantia: 'Ne', Contacto: 'Luis' },
    { id: 0, Consecutivo: 'RS0216', Solicitud: 'Instalacion', Vendimos: 'Si', Garantia: 'H', Contacto: 'Luis' },
    { id: 1, Consecutivo: 'RS0216', Solicitud: 'Reparacion', Vendimos: 'Si', Garantia: 'He', Contacto: 'Luis' },
    { id: 2, Consecutivo: 'RS0216', Solicitud: 'Instalacion', Vendimos: 'Si', Garantia: 'Li', Contacto: 'Luis' },
    { id: 3, Consecutivo: 'RS0216', Solicitud: 'Instalacion', Vendimos: 'Si', Garantia: 'Be', Contacto: 'Luis' },
    { id: 4, Consecutivo: 'RS0216', Solicitud: 'Reparacion', Vendimos: 'Si', Garantia: 'B', Contacto: 'Luis' },
    { id: 5, Consecutivo: 'RS0216', Solicitud: 'Mantenimiento', Vendimos: 'No', Garantia: 'C', Contacto: 'Luis' },
    { id: 6, Consecutivo: 'RS0216', Solicitud: 'Mantenimiento', Vendimos: 'Si', Garantia: 'N', Contacto: 'Luis' },
    { id: 7, Consecutivo: 'RS0216', Solicitud: 'Mantenimiento', Vendimos: 'No', Garantia: 'O', Contacto: 'Luis' },
    { id: 8, Consecutivo: 'RS0216', Solicitud: 'Reparacion', Vendimos: 'Si', Garantia: 'F', Contacto: 'Luis' },
    { id: 9, Consecutivo: 'RS0216', Solicitud: 'Reparacion', Vendimos: 'No', Garantia: 'Ne', Contacto: 'Luis' },
];