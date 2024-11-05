import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  // info: any = {};
  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = []; 

  constructor(private http: HttpClient) {
    console.log('Servicio de infoPagina listo');
    // Leer el archivo JSON
    // this.http.get('assets/data/data-pagina.json')
    //   // .subscribe( (resp: any) => {
    //   .subscribe( (resp: InfoPagina) => {
    //     this.cargada = true;
    //     this.info = resp;
    //     console.log(resp);
    //     // console.log(resp.twitter);
    //   });
    this.cargarInfo();
    this.cargarEquipo();
   }

  private cargarInfo() {
      // Leer el archivo JSON
      this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: InfoPagina) => {
          this.cargada = true;
          this.info = resp;
          //console.log(resp);
          // console.log(resp.twitter);
        });
  }

  private cargarEquipo() {  
    // Leer el archivo JSON
    // this.http.get('https://angular-html-91210.firebaseio.com/equipo.json')
    this.http.get('assets/data/equipo.json')
      .subscribe( (resp: any) => {
        this.equipo = resp;
        console.log(resp);
        // console.log(resp.twitter);
      });
  }
   
}
