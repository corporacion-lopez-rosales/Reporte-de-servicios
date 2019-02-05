import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Form1Component } from './form1/form1.component';
import { SolicitudservicioComponent } from './solicitudservicio/solicitudservicio.component';
import { CostosyfacturasComponent } from './costosyfacturas/costosyfacturas.component';
import { ModolutecnicoComponent } from './modolutecnico/modolutecnico.component';
import { ModulocostoyfacturaComponent } from './modulocostoyfactura/modulocostoyfactura.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatNativeDateModule, MatDatepickerModule, MatInputModule, MatSelectModule, MatOptionModule, MatRadioModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Form1Component,
    SolicitudservicioComponent,
    CostosyfacturasComponent,
    ModolutecnicoComponent,
    ModulocostoyfacturaComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
