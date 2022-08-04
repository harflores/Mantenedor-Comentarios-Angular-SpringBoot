import { Component, OnInit } from '@angular/core';
import { Comentario } from '../comentario';
import { ActivatedRoute, Router } from '@angular/router';
import { ComentarioService } from '../comentario.service';
import swal from 'sweetalert2';



@Component({
  selector: 'app-editar-comentario',
  templateUrl: './editar-comentario.component.html',
  styleUrls: ['./editar-comentario.component.css']
})
export class EditarComentarioComponent implements OnInit {

  regiones:string[]=["Arica y Parinacota","Tarapacá","Antofagasta","Atacama","Coquimbo","Valparaíso","Región del Libertador Gral. Bernardo O’Higgins","Región del Maule","Región de Ñuble","Región del Biobío","Región de la Araucanía","Región de Los Ríos","Región de Los Lagos","Región Aisén del Gral. Carlos Ibáñez del Campo","Región de Magallanes y de la Antártica Chilena","Región Metropolitana de Santiago",];
  
  id:number;
  comentario: Comentario = new Comentario();

  
  constructor(private comentarioServicio:ComentarioService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.comentarioServicio.obtenerComentarioPorId(this.id).subscribe(dato =>{
      this.comentario = dato;
    },error => console.log(error));
    
  }

  irAlaListaDeComentarios(){
    this.router.navigate(['/comentarios']);
    swal('Comentario actualizado',`El comentario de  ${this.comentario.email} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.comentarioServicio.actualizarComentario(this.id,this.comentario).subscribe(dato => {
      this.irAlaListaDeComentarios();
    },error => console.log(error));
  }
}