import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoEnterPageRoutingModule } from './produto-enter-routing.module';

import { ProdutoEnterPage } from './produto-enter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoEnterPageRoutingModule
  ],
  declarations: [ProdutoEnterPage]
})
export class ProdutoEnterPageModule {}
