package com.jkthings.myListsOfStuff.controllers;

/*created by JK 08-08-19*/
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jkthings.myListsOfStuff.entities.User;
import com.jkthings.myListsOfStuff.repositories.UserRepository;

@RestController
@RequestMapping("/api")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/users")
	public List<User> getUsers(){
		return userRepository.findAll();
	}
//	@GetMapping("/user/{id}")
//	public User getUser(@PathVariable Long id){
//		//return userRepository.findOne(id);
//		return userRepository.findById(id);
//	}
	@DeleteMapping("/user/{id}")
	public boolean deleteUser(@PathVariable Long id){
		//userRepository.delete(id);
		userRepository.deleteById(id);
		return true;
	}
	@PutMapping("/user")
	public User updateUser(User user){
		return userRepository.save(user);
	}
	@PostMapping("/user")
	public User createUser(User user){
		return userRepository.save(user);
	}
	
}
