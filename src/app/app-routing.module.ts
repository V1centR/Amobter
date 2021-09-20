import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//application routers
import { RegisterProfessionalComponent } from './register-professional/register-professional.component';

import {HomeComponent} from './home/home.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {path: 'register-professional',component: RegisterProfessionalComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
