import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  cargando = true;

  constructor( private http: HttpClient) {
    this.cargarProductos();
  }

  cargarProductos() {

    return new Promise( ( resolve, reject ) => {

      this.http.get('https://angular-html-e3d3e.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) => {
            this.productos = resp;
            this.cargando = false;
            resolve();
        }
      );

    } );


  }

  getProducto( id: string) {

    return this.http.get(`https://angular-html-e3d3e.firebaseio.com/productos/${id}.json`);

  }

  buscarProducto( termino: string) {

    if ( this.productos.length === 0 ) {
      // esperar a que esten cargados los productos
      this.cargarProductos().then( () => {
        // este codigo se va a ejecutar despues de tener los productos
        // aqui aplicar filtro
        this.filtrarProductos(termino);
      });
    } else {
      // aplicar filtro
      this.filtrarProductos(termino);
    }

  }


  filtrarProductos( termino: string) {
    termino = termino.toLocaleLowerCase();
    this.productosFiltrados = [];
    this.productos.forEach( (prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if ( prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0 ) {
        this.productosFiltrados.push(prod);
      }
    }));

  }


}
