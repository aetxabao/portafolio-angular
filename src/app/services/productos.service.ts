import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  productos: Producto[] = [];

  constructor(private fs: Firestore) { 
    // console.log('Servicio de productos listo');
    this.cargarProductos().subscribe( (resp: Producto[]) => {
      console.log(resp);
      this.productos = resp;
      this.cargando = false;
      // setTimeout(() => {
      //   this.cargando = false;
      // }, 2000);
    });
    // this.getProductos().subscribe( (resp: any) => {
    //   console.log(resp);
    // });
  }

  private cargarProductos() { 
      let productosCollection = collection(this.fs, 'productos_idx');
      return collectionData(productosCollection);
  }


  // getProductos() {
  //   // return this.fs.collection('productos').valueChanges();
  //   let productosCollection = collection(this.fs, 'productos');
  //   return collectionData(productosCollection);
  // }

  // addProducto(producto: any) {
  //   return this.fs.collection('productos').add(producto);
  // }

  // deleteProducto(id: string) {
  //   return this.fs.collection('productos').doc(id).delete();
  // }
}
