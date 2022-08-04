package com.mantenedor.comentarios.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mantenedor.comentarios.modelo.Comentario;

@Repository
public interface ComentarioRepositorio extends JpaRepository<Comentario, Long> {

	List<Comentario> findAll();

}
