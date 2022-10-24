package esprit.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import esprit.entities.Animaux;

public interface IAnimauxRepository extends JpaRepository<Animaux, Integer> {
	@Query(value = "select v from Animaux v where v.ref = :ref")
	public List<Animaux> findAnimauxByRef(@Param("ref")String ref);
}
