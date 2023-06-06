import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutosformPageRoutingModule } from './produtosform-routing.module';

import { ProdutosformPage } from './produtosform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosformPageRoutingModule
  ],
  declarations: [ProdutosformPage]
})
export class ProdutosformPageModule {}
