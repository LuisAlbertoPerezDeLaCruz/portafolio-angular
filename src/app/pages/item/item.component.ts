import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion';
import { InfoPagina } from '../../interfaces/info-pagina.service';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;
  infoPagina: InfoPagina;

  constructor( private route: ActivatedRoute, public productoService: ProductosService, public infoPaginaService: InfoPaginaService) { }

    ngOnInit() {

      this.route.params
        .subscribe(parametros => {

          this.productoService.getProducto(parametros['id'])
          .subscribe( (producto: ProductoDescripcion) => {
            this.id =  parametros['id'];
            this.producto = producto;
          });

        });

        this.infoPagina = this.infoPaginaService.info;
    }

}
