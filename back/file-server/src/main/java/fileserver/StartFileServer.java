package fileserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StartFileServer {

	public static void main(String[] args) {
		SpringApplication.run(fileserver.StartFileServer.class, args);
	}
}
