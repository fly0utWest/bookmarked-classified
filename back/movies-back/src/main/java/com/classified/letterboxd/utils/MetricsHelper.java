package com.classified.letterboxd.utils;

import java.util.function.Supplier;

public class MetricsHelper implements AppLogging  {

    public static <T> T measured(Supplier<T> task, String operationName) {
        try {
            long startTime = System.currentTimeMillis();
            T result = task.get();
            double elapsedTime = (System.currentTimeMillis() - startTime) / 1000d;
            log.info("Elapsed Time for {}: {} seconds", operationName, elapsedTime);
            return result;
        } catch (Exception e) {
            throw e;
        }

    }

    public static <T> void measured(Runnable task, String operationName) {
        try {
            long startTime = System.currentTimeMillis();
            task.run();
            double elapsedTime = (System.currentTimeMillis() - startTime) / 1000d;
            log.info("Elapsed Time for {}: {} seconds", operationName, elapsedTime);
        } catch (Exception e) {
            throw e;
        }

    }
}
