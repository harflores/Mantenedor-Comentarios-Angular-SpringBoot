import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComentarioService } from '../comentario.service';
import { Comentario } from '../comentario';
import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import swal from 'sweetalert2';



@Component({
  selector: 'app-agregar-comentario',
  templateUrl: './agregar-comentario.component.html',
  styleUrls: ['./agregar-comentario.component.css']
})
export class AgregarComentarioComponent implements OnInit {

  comentario: Comentario = new Comentario();
  regiones:string[]=["Arica y Parinacota","Tarapacá","Antofagasta","Atacama","Coquimbo","Valparaíso","Región del Libertador Gral. Bernardo O’Higgins","Región del Maule","Región de Ñuble","Región del Biobío","Región de la Araucanía","Región de Los Ríos","Región de Los Lagos","Región Aisén del Gral. Carlos Ibáñez del Campo","Región de Magallanes y de la Antártica Chilena","Región Metropolitana de Santiago",];

  constructor(private comentarioServicio: ComentarioService, private router: Router) { }

  ngOnInit(): void {

  }

  guardarComentario() {
    this.comentarioServicio.agregarComentario(this.comentario).subscribe(dato => {
      console.log(dato);
      this.irAListaComentarios();

    }, error => console.log(error));
  }

  irAListaComentarios(){
    this.router.navigate(['/comentarios'])
    swal('Comentario guardado',`El comentario de  ${this.comentario.email} ha sido guardado con exito`,`success`);
  }
  onSubmit() {
    this.guardarComentario();
  }

}
