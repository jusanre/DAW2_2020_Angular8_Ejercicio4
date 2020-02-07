import { Component, OnInit } from '@angular/core';
import { Gato } from '../gato';
import { GatoService } from '../gato.service';

@Component({
  selector: 'app-lista-gatos',
  templateUrl: './lista-gatos.component.html',
  styleUrls: ['./lista-gatos.component.css']
})
export class ListaGatosComponent implements OnInit {

  gatos:Gato[];

  constructor(private gatoService:GatoService) { } // Inyección de dependencia

  ngOnInit() {
    //this.gatos = this.gatoService.getGatos(); // LLamada al método getGatos del servicio
    this.getGatos();
  }

  /*getGatos(){
    this.gatos = this.gatoService.getGatos();
  }*/

  getGatos(): void { // Se suscribe al método observable del servicio
    this.gatoService.getGatos()
        .subscribe(data => this.gatos = data);
  }
}
