import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.service';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  cargada = false;
  info: any = {};
  equipo: any[] = [];

  constructor( private http: HttpClient ) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    // console.log('Servicio info-pagina cargado');
    this.http.get('assets/data/data-pagina.json').subscribe(
      (resp: InfoPagina) => {
        // console.log(resp);
        this.cargada = true;
        this.info = resp;
        // console.log(resp['twitter']);
      }
    );
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-e3d3e.firebaseio.com/equipo.json').subscribe(
      (resp: any[]) => {
        this.equipo = resp;
        // console.log(resp);
      }
    );
  }

}
