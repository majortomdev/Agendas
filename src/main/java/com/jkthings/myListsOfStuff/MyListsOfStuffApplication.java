package com.jkthings.myListsOfStuff;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.jkthings.myListsOfStuff.entities.User;
import com.jkthings.myListsOfStuff.repositories.UserRepository;

@SpringBootApplication
public class MyListsOfStuffApplication implements CommandLineRunner{
	
	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(MyListsOfStuffApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		userRepository.save(new User("Bob","Hope"));
		userRepository.save(new User("Vic","Reeves"));
		userRepository.save(new User("Des","Bishop"));
		
	}

}
