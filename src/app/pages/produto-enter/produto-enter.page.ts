import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-enter',
  templateUrl: './produto-enter.page.html',
  styleUrls: ['./produto-enter.page.scss'],
})
export class ProdutoEnterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  email: string = "";
  senha: string = "";

  enter() { }

}
