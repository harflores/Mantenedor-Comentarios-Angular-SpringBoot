import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComentariosComponent } from './lista-comentarios/lista-comentarios.component';
import { HttpClientModule } from '@angular/common/http';
import { AgregarComentarioComponent } from './agregar-comentario/agregar-comentario.component';
import { FormsModule } from '@angular/forms';
import { EditarComentarioComponent } from './editar-comentario/editar-comentario.component';
import { ComentarioDetallesComponent } from './comentario-detalles/comentario-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComentariosComponent,
    AgregarComentarioComponent,
    EditarComentarioComponent,
    ComentarioDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
