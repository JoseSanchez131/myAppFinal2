import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../services/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  uid:string;

  constructor(private _activatedRoute: ActivatedRoute, private _usuarioService : UsuarioService) { }

  ngOnInit() {
    let username = this._activatedRoute.snapshot.paramMap.get("username");
    let ref = this._usuarioService.getUsuarios();
    ref.orderByChild("usuarios").equalTo(username);
    ref.once("value", snapshot=>{
      snapshot.forEach(child => {

        console.log(username);

        if(child.val().nombre == username){
          this.uid = child.val().id;
          console.log(this.uid);
        }
          });
        });
  }

}