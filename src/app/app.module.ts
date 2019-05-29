import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form1Component } from './Forms-components/form1/form1.component';
import { SolicitudservicioComponent } from './Forms-components/solicitudservicio/solicitudservicio.component';
import { ModolutecnicoComponent } from './Forms-components/modolutecnico/modolutecnico.component';
import { ModulocostoyfacturaComponent } from './Forms-components/modulocostoyfactura/modulocostoyfactura.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatMenuModule, MatPaginatorModule,MatIconModule, MatListModule, MatTableModule, MatNativeDateModule, MatDatepickerModule, MatInputModule, MatSelectModule, MatOptionModule, MatRadioModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {NavService} from './nav.service';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    SolicitudservicioComponent,
    ModolutecnicoComponent,
    ModulocostoyfacturaComponent,
    SideNavComponent,
    DashboardComponent
  ],
  imports: [
    MatPaginatorModule,
    MatMenuModule,
    MatTableModule,
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
    MatListModule,
    HttpClientModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
