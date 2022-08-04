import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../comentario';
import { ComentarioService } from '../comentario.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-lista-comentarios',
  templateUrl: './lista-comentarios.component.html',
  styleUrls: ['./lista-comentarios.component.css']
})
export class ListaComentariosComponent implements OnInit {

  comentarios:Comentario[];
        
  
  constructor(private comentarioServicio:ComentarioService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerComentarios();
  }

  private obtenerComentarios(){
    this.comentarioServicio.obtenerListaDeComentarios().subscribe(dato => {
      this.comentarios = dato;
    })
  }

  editarComentario(id:number){
   this.router.navigate(['editar-comentario',id]);

  }

  eliminarComentario(id:number){
    //CONFIGURACION PARA ELIMINACION DE COMENTARIO
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el comentario",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.comentarioServicio.eliminarComentario(id).subscribe(dato => {
          console.log(dato);
          this.obtenerComentarios();
          swal(
            'Comentario eliminado',
            'El comentario ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

}

