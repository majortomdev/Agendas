package com.jkthings.myListsOfStuff.repositories;

import com.jkthings.myListsOfStuff.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

//	User findOne(Long id);
//
//	void delete(Long id);

}
