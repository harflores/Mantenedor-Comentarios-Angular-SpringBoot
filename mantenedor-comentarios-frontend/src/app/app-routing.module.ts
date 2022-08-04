import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComentarioComponent } from './agregar-comentario/agregar-comentario.component';
import { EditarComentarioComponent } from './editar-comentario/editar-comentario.component';
import { ListaComentariosComponent } from './lista-comentarios/lista-comentarios.component';

const routes: Routes = [
  { path: 'comentarios', component: ListaComentariosComponent },
  { path: '', redirectTo: 'comentarios', pathMatch: 'full' },
  { path: 'agregar-comentario', component: AgregarComentarioComponent },
  { path: 'editar-comentario/:id', component : EditarComentarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
