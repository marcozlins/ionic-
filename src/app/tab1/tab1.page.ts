import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
user: any;
  produtoService: any;

  constructor() {}

  ngOnInit() {
  }

id: string = "";
nome: String ="";
descricao : string = "";
quant: number = 0 ;
valor: number = 0 ;
fotos: string = "";
ativo: boolean= true ;

save(){
  
    this.produtoService.add(this.produto);
    this.presentAlert("aviso", "cadastro");
    console.log(this.produto);


}
  produto(produto: any) {
    throw new Error('Method not implemented.');
  }
  presentAlert(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
}
