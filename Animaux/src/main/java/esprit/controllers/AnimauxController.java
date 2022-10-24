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

import esprit.entities.Animaux;
import esprit.repositories.IAnimauxRepository;


@RestController 
@RequestMapping("/Animaux")
public class AnimauxController {
	@Autowired
	IAnimauxRepository repo ;
	
	@PostMapping("/add")
	public Animaux addAnimaux(@RequestBody Animaux v) {
		return repo.save(v);
	}
	@PutMapping(value = "/put/{id}")
	public Animaux updateAnimaux(@PathVariable("id") int id , @RequestBody Animaux animaux) {
		try {
			Animaux v = repo.findById(id).get();
			v.setRef(animaux.getRef());
			v.setRace(animaux.getRace());
			v.setAge(animaux.getAge());
			v.setType(animaux.getType());
			return repo.save(v);	
		}catch(Exception e){
			return null  ;
		}
	}
	@GetMapping("/getByRef")
	public List<Animaux> getAnimauxByRef(@RequestParam String ref ){
		return repo.findAnimauxByRef(ref);
	}
	
	@GetMapping("/get")
	public List<Animaux> getAllAnimaux(){
		return repo.findAll();
	}
	@DeleteMapping("/delete/{id}")
	public String deleteAnimaux(@PathVariable("id") int id) {
		System.out.println("id :"+id);
		try {
			System.out.println("id :"+id);
			repo.deleteById(id);
			return "Animaux with id : "+id+" was deleted successfully !";
		}
		catch(Exception e){
			return e.getMessage();
		}
	}
}
