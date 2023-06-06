import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosformPage } from './produtosform.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutosformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosformPageRoutingModule {}
