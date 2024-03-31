package com.classified.letterboxd;

import com.classified.letterboxd.utils.AppLogging;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StartServer implements AppLogging {

	public static void main(String[] args) {
		String dbHost = System.getenv("MYSQL_DATABASE_HOST");
		if (dbHost == null) System.setProperty("MYSQL_DATABASE_HOST", "localhost");
		SpringApplication.run(StartServer.class, args);
	}

	//todo: handle errors for responses
}
