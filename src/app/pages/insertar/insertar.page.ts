import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.page.html',
  styleUrls: ['./insertar.page.scss'],
})
export class InsertarPage implements OnInit {
  id: string = "";
  nombre: string = "";
  apellido: string = "";
  
  constructor() { }

  ngOnInit() {
  }

  onClick() {

    // Insertar
  }

}
