import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosenterPage } from './produtosenter.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutosenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosenterPageRoutingModule {}
