import { Component, OnInit, ViewChild} from '@angular/core';
import { Table_Reportes } from "../mock-opciones";
import { MatTableDataSource, MatPaginator } from '@angular/material';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  cont = 1;
  show: boolean = true;
  Reportes = Table_Reportes;
  displayedColumns: string[] = ['Consecutivo', 'Solicitud', 'Vendimos', 'Garantia','Actions'];
  dataSource = new MatTableDataSource(Table_Reportes);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  ngOnInit(){
    this.dataSource.paginator = this.paginator;
  }

  Quitarvent(){
    for (let index = 0; index < this.displayedColumns.length; index++) {
      console.log(this.displayedColumns[index]);
      if (this.displayedColumns[index] == "Vendimos") {
        this.displayedColumns.splice(index, 1);
      }else{

      }
    }
    console.log(this.displayedColumns);
  }

  Addevent(){
    for (let index = 0; index < this.displayedColumns.length; index++) {
      console.log(this.displayedColumns[index]);
      if (this.displayedColumns[index] == "Actions") {
        this.displayedColumns.splice(index, 1);
      } else {

      }
    }
    this.displayedColumns.push('Vendimos', 'Actions')
  }

  showColumn() {
    this.cont = this.cont +1;
    console.log(this.cont % 2)
    if (this.cont%2 == 0) {
     
      for(let index = 0; index < this.displayedColumns.length; index++) {
        console.log(this.displayedColumns[index]);
        if (this.displayedColumns[index] == "id") {
          this.displayedColumns.splice(index, 1);
        } else {

        }
    }
    }else{
      this.displayedColumns.unshift('id')
    }
  }

  Prueba(x){
    console.log(x);
  }
  
  
}

