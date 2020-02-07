import { Injectable } from '@angular/core';
import { GATOS } from 'src/assets/GATOS';
import { Observable, of } from 'rxjs'; // Importamos lo necesario de rxjs
import { Gato } from '../app/gato';

@Injectable({
  providedIn: 'root'
})
export class GatoService {

  gatos = GATOS; 

  /*getGatos(){
    return this.gatos;
  }*/

  // Modificamos el método para hacerlo observable
  getGatos(): Observable<Gato[]> { // Observable para poder suscribirse
    return of(this.gatos);
  }

}
