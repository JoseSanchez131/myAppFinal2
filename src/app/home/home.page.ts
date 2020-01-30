import { Component } from '@angular/core';
import { IProducto, ITecnologia, IMotor, IInmobiliaria } from '../interfaces';
import { ToastController } from '@ionic/angular';
import { ProductoService } from '../services/producto.service';
import { registerLocaleData } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

categoria: string;
nombre: string;
descripcion: string;
precio: number;
metros: number;
banios:number;
habitaciones:number;
localidad: string;
km: number;
anio: number;
vehiculo: string;
estado:string;

productos: (IProducto|ITecnologia|IInmobiliaria| IMotor) [] = [] ;

  constructor( private _toastCtrl : ToastController, private _productosService :ProductoService) {}

  ngOnInit(){
    let ref = this._productosService.getProductos();
    
    ref.on("value", snapshot => {
      snapshot.forEach(child =>{
        let value = child.val();
        this.productos.push(value);
        console.log("he encontrado: " +child.val().nombre)
      })
    })
  }

  async presentToast() {
    const toast = await this._toastCtrl.create({
      message: 'Producto añadido correctamente ',
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }

  buscar(){
    this._productosService.buscar('n9NDsnNsUMf9yp0RI1GIFRAoP8t2');
  }

  eliminar()
  {
    this._productosService.eliminar();
  }


}