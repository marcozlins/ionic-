import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.page.html',
  styleUrls: ['./produto-list.page.scss'],
})
export class produtoListPage implements OnInit {

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  produto: Produto[] = [];

  ngOnInit() {
    this.getList();
  }

  getList() {
    // this.userService.list().subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.users = <User[]>res;
    //   })
    this.produtoService.list().then((res: Produto[]) => {
      console.log(r)
      this.produto = const r;
    })
  }

  editUser(_id: string) {
    this.router.navigate(['/tabs/proForm', _id],)
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event?.target?.complete();
    }, 2000);
  }



}
