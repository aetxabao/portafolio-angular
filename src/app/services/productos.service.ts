import { Injectable } from '@angular/core';
import { collection, collectionData, docData, doc, Firestore, getDoc } from '@angular/fire/firestore';
import { Producto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  productos: Producto[] = [];

  productosFiltrado: Producto[] = [];

  constructor(private fs: Firestore) { 
    // console.log('Servicio de productos listo');
    this.cargarProductos().subscribe( (resp: Producto[]) => {
      // console.log(resp);
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
      return collectionData(productosCollection) as Observable<Producto[]>;
  }

  public getProducto(id: string) {    
    return  docData(doc(this.fs, `productos/${id}`), {idField:  'id'}) as Observable<ProductoDescripcion>;
  }

  public buscarProductos(termino: string) {
    console.log('Buscando producto');
    // this.productosFiltrado =
    // this.productos.filter( producto => {
    //   return true;
    // });
    if (this.productos.length === 0) {
      // cargar productos
      this.cargarProductos().subscribe( () => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {
    this.productosFiltrado = []; 
    this.productos.forEach( prod => {
      if (prod.categoria.indexOf(termino) >= 0 || 
          prod.titulo.toLowerCase().indexOf(termino.toLowerCase()) >= 0) {
        this.productosFiltrado.push(prod);
      }
    });
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
