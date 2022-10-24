package esprit;

import java.util.stream.Stream;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

import esprit.entities.Association;
import esprit.repositories.IAssociationRepository;


@SpringBootApplication
@EnableEurekaClient
public class AssociationApplication {

	public static void main(String[] args) {
		SpringApplication.run(AssociationApplication.class, args);
	}

	@Bean
	ApplicationRunner app(IAssociationRepository rep)
	{
		return args -> {
			Stream.of("association1","association2","association3").forEach(n ->{
				rep.save(new Association(n,"tunis","maryem@gmail.com",123456));
			});
		rep.findAll().forEach(System.out::println);
		};
	}
}
