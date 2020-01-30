import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { IProducto } from '../interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  
  nombre: string;
  descripcion: string;
  categoria:string;
  precio: number;
  

  constructor(private _activatedRoute: ActivatedRoute, private _productoService: ProductoService) { }

  ngOnInit() {
    this.nombre = this._activatedRoute.snapshot.paramMap.get('id');
    console.log("He recibido: " +this.nombre)
    //this._productoService.getProductos();

   /* let res1=this._productoService.getProducto(this.nombre)
    this.precio=+this._productoService.getProducto(this.nombre)
    this.precio=res1.precio
    console.log("El precio es: "+ res1.precio)
    this.descripcion = res1.descripcion
    console.log("Descripcion: "+ this.descripcion)
    this.categoria = res1.categoria
    console.log("Categoria: "+ this.categoria)
    
  */
  }

}