package com.mantenedor.comentarios.controlador;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mantenedor.comentarios.modelo.Comentario;
import com.mantenedor.comentarios.repositorio.ComentarioRepositorio;
import com.mantenedor.comentarios.excepciones.*;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200/")
public class ComentarioControlador {

	@Autowired
	private ComentarioRepositorio repositorio;

	// METODO PARA LISTAR COMENTARIOS
	@GetMapping("/comentarios")
	public List<Comentario> listarTodosLosComentarios() {
		return repositorio.findAll();
	}

	// METODO PARA GUARDAR COMENTARIO
	@PostMapping("/comentarios")
	public Comentario guardarComentario(@RequestBody Comentario comentario) {
		return repositorio.save(comentario);
	}

	// METODO PARA BUSCAR COMENTARIO POR ID
	@GetMapping("/comentarios/{id}")
	public ResponseEntity<Comentario> obtenerComentarioPorId(@PathVariable Long id) {
		Comentario comentario = repositorio.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException(("No existe el comentario con el ID : " + id)));
		return ResponseEntity.ok(comentario);
	}
	
	
	// METODO PARA ACTUALIZAR COMENTARIOS
	@PutMapping("/comentarios/{id}")
	public ResponseEntity<Comentario> editarComentarioPorId(@PathVariable Long id,@RequestBody Comentario detalleComentario) {
		Comentario comentario = repositorio.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException(("No existe el comentario con el ID : " + id)));
		
		comentario.setEmail(detalleComentario.getEmail());
		comentario.setRegion(detalleComentario.getRegion());
		comentario.setComentario(detalleComentario.getComentario());
		
		Comentario comentarioActualizado = repositorio.save(comentario);
		return ResponseEntity.ok(comentarioActualizado);
	}
	
	//METODO PARA ELIMINAR COMENTARIOS
	@DeleteMapping("/comentarios/{id}")
	public ResponseEntity<Map<String,Boolean>> eliminarComentario(@PathVariable Long id){
		Comentario comentario = repositorio.findById(id)
				            .orElseThrow(() -> new ResourceNotFoundException("No existe el comentario con el ID : " + id));
		
		repositorio.delete(comentario);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar",Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
    }

}
