package esprit.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import esprit.entities.Association;

public interface IAssociationRepository extends JpaRepository<Association, Integer> {
	@Query(value = "select a from Association a where a.Name = :name")
	public List<Association> findAssociationByName(@Param("name")String Name);
}
