import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  constructor( private route: ActivatedRoute,
               public productosService: ProductosService ) { 
    this.route.params.subscribe( params => {
      console.log(params['termino']);
      this.productosService.buscarProductos(params['termino']);
    });
  }

}
