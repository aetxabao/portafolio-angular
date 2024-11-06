import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {

  constructor(public productosService: ProductosService) { 
  }

}
