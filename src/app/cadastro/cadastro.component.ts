import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { FotoService } from '../servicos/foto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'caelumpic-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new Foto();

  constructor(private fotoService: FotoService
              , private roteador: Router) {}

  ngOnInit() {}

  salvar(){
    this
      .fotoService
      .cadastrar(this.foto)
      .subscribe(
        (respostaApi) => {
          console.log(this.foto);
          console.log(respostaApi);
          this.roteador.navigate(['']);
        }
        ,
        erro => console.log(erro)
        ,
        () => console.log('Completou :)')
      )
  }
}
