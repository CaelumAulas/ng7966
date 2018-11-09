import { Component, OnInit } from '@angular/core';
import { FotoService } from '../servicos/foto.service';
import { Foto } from '../foto/foto';
import { runInThisContext } from 'vm';

@Component({
  selector: 'caelumpic-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  title = 'ng7966';
  listaFotos: Foto[] = [];

  constructor(private fotoService: FotoService){

    this.fotoService
      .listar()
      .subscribe(
        (fotosApi) => {
          this.listaFotos = fotosApi 
        },
        (erro) => console.log(erro)
        
      )
  }

  ngOnInit() {}

  excluir(fotoApagada: Foto){

    this.fotoService
      .deletar(fotoApagada)
      .subscribe(
        () => {
          //versão didática :)
          /* this.listaFotos = this.listaFotos
                              .filter(
                                (foto) => {
                                  if(foto != fotoApagada){
                                    return foto
                                  }
                                }
                              ) */
          
          this.listaFotos = this.listaFotos.filter( foto => foto != fotoApagada)
          
          console.log(`Apagou ${fotoApagada.titulo}`)
        }
      )
  }

}
