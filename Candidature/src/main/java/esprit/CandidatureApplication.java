package esprit;

import java.util.stream.Stream;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

import esprit.entities.Candidature;
import esprit.repositories.ICandidatureRepository;


@SpringBootApplication
@EnableEurekaClient
public class CandidatureApplication {

	public static void main(String[] args) {
		SpringApplication.run(CandidatureApplication.class, args);
	}

	@Bean
	ApplicationRunner app(ICandidatureRepository rep)
	{
		return args -> {
			Stream.of("Candidat1","Candidat2","Candidat3").forEach(n ->{
				rep.save(new Candidature(n,"non","oui","email"));
			});
		rep.findAll().forEach(System.out::println);
		};
	}
}
