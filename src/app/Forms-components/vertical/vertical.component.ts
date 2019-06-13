import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss']
})
export class VerticalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dpdf(){
    const doc = new jsPDF();
    doc.text("hola xd", 10, 10);
    doc.save('prueba.pdf');
  }

}
