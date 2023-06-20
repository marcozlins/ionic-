import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoEnterPage } from './produto-enter.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoEnterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoEnterPageRoutingModule {}
