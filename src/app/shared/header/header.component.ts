import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public _servicio: InfoPaginaService,
              private router: Router) { } 

  buscarProducto(termino: string) {
    if (termino.length < 1) {
      return;
    }
    // console.log(termino);
    this.router.navigate(['/search', termino]);
  }
}
