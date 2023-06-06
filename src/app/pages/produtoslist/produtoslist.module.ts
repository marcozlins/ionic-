import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoslistPageRoutingModule } from './produtoslist-routing.module';

import { ProdutoslistPage } from './produtoslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoslistPageRoutingModule
  ],
  declarations: [ProdutoslistPage]
})
export class ProdutoslistPageModule {}
