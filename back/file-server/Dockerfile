FROM azul/zulu-openjdk:17-latest

WORKDIR /app

COPY ./.mvn/ ./.mvn
COPY ./mvnw pom.xml ./
RUN ./mvnw dependency:go-offline

RUN mkdir /files
RUN chmod 755 /files
COPY film-backgrounds/ /files/film-backgrounds
COPY film-covers/ /files/film-covers
COPY profile-backgrounds /files/profile-backgrounds
COPY article-covers /files/article-covers

COPY src ./src

CMD ["./mvnw", "spring-boot:run"]
