import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";
import { AboutComponent } from "./pages/about/about.component";
import { ItemComponent } from "./pages/item/item.component";
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';
import { SearchComponent } from './pages/search/search.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    PortafolioComponent, 
    AboutComponent, 
    ItemComponent,
    SearchComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';

  // Inyección de dependencias
  constructor( public infoPaginaService: InfoPaginaService,
               public productosService: ProductosService) {
    //console.log('AppComponent constructor');

  }

}
