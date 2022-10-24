package esprit.controllers;

import java.util.List;

import org.apache.logging.log4j.message.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import esprit.entities.Candidature;
import esprit.repositories.ICandidatureRepository;


@RestController 
@RequestMapping("/candidatures")
public class CandidatureController {
	@Autowired
	ICandidatureRepository repo ;
	
	@PostMapping("/add")
	public Candidature addCandidate(@RequestBody Candidature v) {
		return repo.save(v);
	}
	@PutMapping(value = "/put/{id}")
	public Candidature updateCandidate(@PathVariable("id") int id , @RequestBody Candidature candi) {
		try {
			Candidature v = repo.findById(id).get();
			v.setNom(candi.getNom());
			v.setPrenom(candi.getPrenom());
			v.setDescription(candi.getDescription());
			return repo.save(v);	
		}catch(Exception e){
			return null  ;
		}
	}
	@GetMapping("/getByName")
	public List<Candidature> getVaccinationByName(@RequestParam String name ){
		return repo.findCandidatureByName(name);
	}
	
	@GetMapping("/get")
	public List<Candidature> getAllVaccinations(){
		return repo.findAll();
	}
	@DeleteMapping("/delete/{id}")
	public String deleteVaccination(@PathVariable("id") int id) {
		System.out.println("id :"+id);
		try {
			System.out.println("id :"+id);
			repo.deleteById(id);
			return "Candidature with id : "+id+" was deleted successfully !";
		}
		catch(Exception e){
			return e.getMessage();
		}
	}
}
