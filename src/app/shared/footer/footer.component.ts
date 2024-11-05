import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

anio: number = new Date().getFullYear();

constructor(public _servicio: InfoPaginaService) { } 

}
