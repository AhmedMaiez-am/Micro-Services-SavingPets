package esprit.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Candidature implements Serializable {

	private static final long serialVersionUID = -3144041188741009422L;
	@GeneratedValue
	@javax.persistence.Id
	private int Id;
	private String nom ;
	private String prenom ;
	private String description ;
	private String  email;
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public Candidature(String nom, String date_acceptation, String description, String created_at, String phone, String status,String prenom,String position,String email) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.description = description;
		
		this.email = email;
	}
	public Candidature(String nom,    String prenom,String description, String email) {
		super();
		
		this.nom = nom;
		this.description = description;
		this.prenom = prenom;
		this.email = email;
		
	}

	
}
