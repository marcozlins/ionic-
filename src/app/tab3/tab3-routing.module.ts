import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3PageModule } from './tab3.module';
import { User } from '../model/user';

const routes: Routes = [
  {
    path: '',
    component: Tab3PageModule,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}