import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';

@Component({
  selector: 'caelumpic-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new Foto();

  constructor() { }

  ngOnInit() {}

  salvar(){
    console.log(this.foto)
  }

}
