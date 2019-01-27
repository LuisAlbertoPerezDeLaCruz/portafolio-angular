import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  anio: number;
  constructor( public _servicio: InfoPaginaService ) {
    this.anio = new Date().getFullYear();
   }

  ngOnInit() {
  }

}
