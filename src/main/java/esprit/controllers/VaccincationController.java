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

import esprit.entities.Vaccination;
import esprit.repositories.IVaccincationRepository;


@RestController 
@RequestMapping("/vaccinations")
public class VaccincationController {
	@Autowired
	IVaccincationRepository repo ;
	
	@PostMapping("/add")
	public Vaccination addCandidate(@RequestBody Vaccination v) {
		return repo.save(v);
	}
	@PutMapping(value = "/put/{id}")
	public Vaccination updateCandidate(@PathVariable("id") int id , @RequestBody Vaccination vaccin) {
		try {
			Vaccination v = repo.findById(id).get();
			v.setName(vaccin.getName());
			v.setType(vaccin.getType());
			v.setDescription(vaccin.getDescription());
			return repo.save(v);	
		}catch(Exception e){
			return null  ;
		}
	}
	@GetMapping("/getByName")
	public List<Vaccination> getVaccinationByName(@RequestParam String name ){
		return repo.findVaccinationByName(name);
	}
	
	@GetMapping("/get")
	public List<Vaccination> getAllVaccinations(){
		return repo.findAll();
	}
	@DeleteMapping("/delete/{id}")
	public String deleteVaccination(@PathVariable("id") int id) {
		System.out.println("id :"+id);
		try {
			System.out.println("id :"+id);
			repo.deleteById(id);
			return "Vaccination with id : "+id+" was deleted successfully !";
		}
		catch(Exception e){
			return e.getMessage();
		}
	}
}
