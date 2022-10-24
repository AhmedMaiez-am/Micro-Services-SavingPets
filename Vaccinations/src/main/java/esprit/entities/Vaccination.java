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
public class Vaccination implements Serializable {

	private static final long serialVersionUID = -3144041188741009422L;
	@GeneratedValue
	@javax.persistence.Id
	private int Id;
	private String Name ;
	private String Type ;
	private String Description ;
	public Vaccination(String Name, String Type, String Description) {
		super();
		this.Name = Name;
		this.Type = Type;
		this.Description = Description;
	}
	
	
}
