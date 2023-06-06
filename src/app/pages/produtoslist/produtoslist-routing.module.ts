import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoslistPage } from './produtoslist.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoslistPageRoutingModule {}
