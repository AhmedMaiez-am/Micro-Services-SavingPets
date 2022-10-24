package esprit;

import java.util.stream.Stream;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

import esprit.entities.Animaux;
import esprit.repositories.IAnimauxRepository;


@SpringBootApplication
@EnableEurekaClient
public class AnimauxApplication {

	public static void main(String[] args) {
		SpringApplication.run(AnimauxApplication.class, args);
	}

	@Bean
	ApplicationRunner app(IAnimauxRepository rep)
	{
		return args -> {
			Stream.of("animaux1","animaux2","animaux3").forEach(n ->{
				rep.save(new Animaux(n,1,"race","type"));
			});
		rep.findAll().forEach(System.out::println);
		};
	}
}
