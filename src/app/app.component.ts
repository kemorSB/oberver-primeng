import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

interface Elemento {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  elementos: Elemento[] = [];
  elementos$: Observable<Elemento[]> | undefined;
  detalleElemento: Elemento | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.elementos$ = new Observable(observer => {
      setTimeout(() => {
        const data: Elemento[] = [
          { id: 1, nombre: 'Elemento 1' },
          { id: 2, nombre: 'Elemento 2' },
          { id: 3, nombre: 'Elemento 3' }
        ];
        observer.next(data);
        observer.complete();
      }, 1000);
    });

    this.elementos$.subscribe(data => {
      this.elementos = data;
    });
  }

  /* 
  ngOnDestroy(): void {
    this.suscription.unsubscribe();  
  */
  
  mostrarDetalle(elemento: Elemento) {
    this.detalleElemento = elemento;
  }

  cerrarDetalle() {
    this.detalleElemento = null;
  }

  navegarATechcamp() {
    this.router.navigate(['/techcamp']);
  }
}
