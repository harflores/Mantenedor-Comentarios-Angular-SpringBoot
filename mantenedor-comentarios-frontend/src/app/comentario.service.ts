import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from './comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  // Esta URL obtiene el listado de todos los comentarios en el backend
  private baseURL = "http://localhost:8080/api/v1/comentarios";

  constructor(private httpClient : HttpClient) { }

  // Este metodo obtiene los comentarios
  obtenerListaDeComentarios():Observable<Comentario[]>{
    return this.httpClient.get<Comentario[]>(`${this.baseURL}`);
  }

  //Este metodo agrega comentarios
  agregarComentario(comentario:Comentario):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,comentario)

  }
  //Este metodo elimina comentarios por id
  eliminarComentario(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }
// este metodo actualiza comentarios por id
  actualizarComentario(id:number, comentario:Comentario) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,comentario);
  }

   //este metodo sirve para obtener o buscar un empleado
   obtenerComentarioPorId(id:number):Observable<Comentario>{
    return this.httpClient.get<Comentario>(`${this.baseURL}/${id}`);
  }
  
}
