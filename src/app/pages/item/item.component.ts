import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  producto: ProductoDescripcion | undefined;
  id: string | undefined;

  constructor(private route: ActivatedRoute,
              public productosService: ProductosService) 
  {
    route.params.
    subscribe(params => {
      console.log('-----------------');  
      console.log(params['id']);  
      // console.log(this.productosService.getProducto(params['id']));  
      this.productosService.getProducto(params['id'])
      // .subscribe( (resp: any) => {
      .subscribe( (producto: ProductoDescripcion) => {
        console.log(producto);
        this.id = params['id'];
        this.producto = producto;
      });
    });
  }

}
