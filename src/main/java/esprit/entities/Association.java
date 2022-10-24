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
public class Association implements Serializable {

	private static final long serialVersionUID = -3144041188741009422L;
	@GeneratedValue
	@javax.persistence.Id
	private int Id;
	private String Name ;
	private String Adresse ;
	private String Email ;
	private int Telephone ;
	public Association(String name, String adresse, String email, int telephone) {
		super();
		Name = name;
		Adresse = adresse;
		Email = email;
		Telephone = telephone;
	}
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getAdresse() {
		return Adresse;
	}
	public void setAdresse(String adresse) {
		Adresse = adresse;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public int getTelephone() {
		return Telephone;
	}
	public void setTelephone(int telephone) {
		Telephone = telephone;
	}


	
}
