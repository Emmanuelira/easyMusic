import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'homePage' } },
  { path: 'lista', component: ListaComponent, data: { animation: 'listaPage' } },
  { path: '**', component: NotFoundComponent, data: { animation: 'notFoundPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
