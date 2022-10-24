package esprit;

import java.util.stream.Stream;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

import esprit.entities.Vaccination;
import esprit.repositories.IVaccincationRepository;


@SpringBootApplication
@EnableEurekaClient
public class VaccinationApplication {

	public static void main(String[] args) {
		SpringApplication.run(VaccinationApplication.class, args);
	}

	@Bean
	ApplicationRunner app(IVaccincationRepository rep)
	{
		return args -> {
			Stream.of("Vaccin1","Vaccin2","Vaccin3").forEach(n ->{
				rep.save(new Vaccination(n,"TypeVaccin","DescriptionVaccin"));
			});
		rep.findAll().forEach(System.out::println);
		};
	}
}
