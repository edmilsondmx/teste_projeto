import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { TreinamentoComponent } from './treinamento/treinamento.component';

const routes: Routes = [
  {
    path:'home', 
    component:PerfilComponent
  },
  {
    path:'treinamentos',
    component:TreinamentoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
