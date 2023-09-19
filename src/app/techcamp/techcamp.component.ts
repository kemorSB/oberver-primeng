import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface Item {
  id: number;
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-techcamp',
  templateUrl: './techcamp.component.html',
  styleUrls: ['./techcamp.component.css']
})
export class TechcampComponent {
  items: Item[] = [];
  itemSeleccionado: Item | null = null;
  mensaje: string | null = null;

  constructor(private router: Router) {
    console.log('TechcampComponent constructor');
    this.inicializarItems();
  }

  inicializarItems() {
    const data: Item[] = [
      { id: 1, nombre: 'Artículo 1', descripcion: 'Descripción del Artículo 1' },
      { id: 2, nombre: 'Artículo 2', descripcion: 'Descripción del Artículo 2' },
      { id: 3, nombre: 'Artículo 3', descripcion: 'Descripción del Artículo 3' }
    ];

    this.items = data;
  }

  seleccionarItem(item: Item | null) {
    this.itemSeleccionado = item;
    this.mostrarMensaje();
  }

  mostrarMensaje() {
    if (this.itemSeleccionado) {
      this.mensaje = `Has seleccionado: ${this.itemSeleccionado.nombre}`;
    } else {
      this.mensaje = 'No se ha seleccionado ningún elemento.';
    }
  }

  regresarAPrincipal() {
    this.router.navigate(['/']);
  }
}
