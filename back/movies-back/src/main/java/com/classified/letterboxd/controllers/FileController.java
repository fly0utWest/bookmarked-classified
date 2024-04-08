package com.classified.letterboxd.controllers;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
public class FileController {

    @GetMapping("/files/{filePath}/{fileName:.+}")
    public ResponseEntity<Resource> serveFile(@PathVariable String filePath, @PathVariable String fileName) throws IOException {
        // Define the directory where files are stored
        String directory = "/files/" + filePath + "/";

        // Load file as Resource
        Path file = Paths.get(directory).resolve(fileName).normalize();
        Resource resource = new UrlResource(file.toUri());

        // Check if the file exists and is readable
        if (!resource.exists() || !resource.isReadable()) {
            return ResponseEntity.notFound().build();
        }

        // Set headers to force download
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);
        headers.setContentDisposition(ContentDisposition.builder("inline").filename(fileName).build());
//        headers.setContentDispositionFormData(fileName, fileName);
//        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + fileName);

        return ResponseEntity.ok()
                .headers(headers)
                .body(resource);
    }

    @PostMapping("/files/{filePath}/{fileName:.+}")
    public String uploadPicture(@PathVariable String filePath, @RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return "Please select a file to upload.";
        }
        String base = "/files/";
        String directory = base + filePath + "/";
        try {
            Files.createDirectories(Paths.get(directory));
            // Save the file to a specific path
            String fileFullPath = directory + file.getOriginalFilename();
            File dest = new File(fileFullPath);
            file.transferTo(dest);
            return "File uploaded successfully!";
        } catch (IOException e) {
            e.printStackTrace();
            return "Failed to upload file.";
        }
    }
}
