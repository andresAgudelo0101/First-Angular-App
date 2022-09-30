import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/home/index/index.component';
import { GetRandomUserComponent } from './components/random-user/get-random-user/get-random-user.component';

const routes: Routes = [
  {
    path:'about',
    component:IndexComponent
  },
  {
    path:'',
    component:GetRandomUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
