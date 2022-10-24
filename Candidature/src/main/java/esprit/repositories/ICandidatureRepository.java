package esprit.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import esprit.entities.Candidature;

public interface ICandidatureRepository extends JpaRepository<Candidature, Integer> {
	@Query(value = "select v from Candidature v where v.nom = :nom")
	public List<Candidature> findCandidatureByName(@Param("nom")String nom);
}
