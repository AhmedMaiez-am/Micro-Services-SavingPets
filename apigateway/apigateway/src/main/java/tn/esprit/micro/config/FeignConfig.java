package tn.esprit.micro.config;


import feign.auth.BasicAuthRequestInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class FeignConfig {
		 @Bean
		 public BasicAuthRequestInterceptor mBasicAuthInterceptor() {
			 return new BasicAuthRequestInterceptor("user", "user");
		 }
}
