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

import esprit.entities.Association;
import esprit.repositories.IAssociationRepository;


@RestController 
@RequestMapping("/associations")
public class AssociationController {
	@Autowired
	IAssociationRepository repo ;
	
	@PostMapping("/add")
	public Association addAssociation(@RequestBody Association v) {
		return repo.save(v);
	}
	
	
	@PutMapping(value = "/put/{id}")
	public Association updateAssociation(@PathVariable("id") int id , @RequestBody Association assoc) {
		try {
			Association v = repo.findById(id).get();
			v.setName(assoc.getName());
			v.setAdresse(assoc.getAdresse());
			v.setEmail(assoc.getEmail());
			v.setTelephone(assoc.getTelephone());

			return repo.save(v);	
		}catch(Exception e){
			return null  ;
		}
	}
	@GetMapping("/getByName")
	public List<Association> getassociationByName(@RequestParam String name ){
		return repo.findAssociationByName(name);
	}
	
	@GetMapping("/get")
	public List<Association> getAllassociations(){
		return repo.findAll();
	}
	@DeleteMapping("/delete/{id}")
	public String deleteassociation(@PathVariable("id") int id) {
		System.out.println("id :"+id);
		try {
			System.out.println("id :"+id);
			repo.deleteById(id);
			return "Association with id : "+id+" was deleted successfully !";
		}
		catch(Exception e){
			return e.getMessage();
		}
	}
}
