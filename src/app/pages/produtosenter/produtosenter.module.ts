import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutosenterPageRoutingModule } from './produtosenter-routing.module';

import { ProdutosenterPage } from './produtosenter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosenterPageRoutingModule
  ],
  declarations: [ProdutosenterPage]
})
export class ProdutosenterPageModule {}
