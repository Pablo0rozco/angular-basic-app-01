import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',  
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Thor', 'Hulk', 'Superman', 'Capitan America'];
  heroeBorrado: string = ''; 
  
  borrarHeroe() {    
    this.heroeBorrado = this.heroes.shift() || '';

  }

}
