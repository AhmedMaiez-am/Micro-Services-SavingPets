package esprit.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import esprit.entities.Vaccination;

public interface IVaccincationRepository extends JpaRepository<Vaccination, Integer> {
	@Query(value = "select v from Vaccination v where v.Name = :name")
	public List<Vaccination> findVaccinationByName(@Param("name")String Name);
}
