import { Component, OnInit } from '@angular/core';
import { IProducto, ITecnologia, IInmobiliaria, IMotor } from '../interfaces';
import { ToastController } from '@ionic/angular';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.page.html',
  styleUrls: ['./mis-productos.page.scss'],
})
export class MisProductosPage implements OnInit {

  productos: (IProducto|ITecnologia|IInmobiliaria| IMotor) [] = [] ;

  constructor( private _toastCtrl : ToastController, private _productosService :ProductoService) {}

  ngOnInit() {

    let ref = this._productosService.getProductos();

        ref.orderByChild('usuario').equalTo('n9NDsnNsUMf9yp0RI1GIFRAoP8t2').once("value", snapshot =>{

            snapshot.forEach(child =>{
                this.productos.push(child.val());
                console.log("he encontrado: " +child.val().nombre);
            })
        });
    
  }

}
