# System Architecture

This documentation continues the discussion from the readme and expands some topics with hints and instructions for a better understanding of the project. In the following, we will go into the general adjustments in the frontend and backend to convert the applications to the production environment. After that, we try to highlight the advantages of Docker in the section on Docker. Finally, there is an architecture overview that we were able to create with the help of the services from aws.

## Production

The adjustments to the code for production are basically quite small. For one thing, care must be taken that no secret data is published. For this reason, we work with environment variables, which we enter manually via the Docker containers if necessary. On the other hand, a mechanism was built into the frontend that automatically no longer searches for the backend on the local host in production mode, but uses a specific internet address from the backend to access the data. 

## Docker

Docker offers a lot of flexibility because the Docker Deamon takes care of certain dependencies and we can only collect new updates via the Docker Service. In the backend, we also use a Dockerfile that is started with docker compose. Many environment variables are stored in the Dockerfile and the settings of the application are defined. This means that when changes are made, only the Dockerfile has to be adapted, not the entire application.

```
  backend:
    image: 'maximilianmilz/measuring-station-backend:latest'
    build:
      context: .
    container_name: spring-boot-app
    ports:
    - '8080:8080'
    environment:
      - SPRING_DATASOURCE_URL=<data_source_url>
      - SPRING_DATASOURCE_USERNAME=<datasource_username>
      - SPRING_DATASOURCE_PASSWORD=<datasource_password>
      - SCHEDULING=false
```

For the Frontend Application we do not use a dockerfile. In this case we have just one command to start the container with port 80:

```
sudo docker run -d -p 80:80 --name measuring-stations-app jannikolairue/measuring-stations-app:latest
```


## Architecture

With this project we primarily dealt with the ec2 instances of aws. There are certainly many other ways to implement this project with aws. However, we decided to run the frontend and the backend on two different ec2 instances. Docker is installed on both instances. The backend is connected to the RDS data service of aws and uses MySql to store the data. The two ec2 instances belong to the same VPC in order to protect access from outside, but to keep working with the two instances with authorisation as simple as possible. The frontend protects the Security Group (SG) launch-wizard-2 and the backend protects the SG launch-wizard-1. The SGs are relevant to prevent unauthorised access to the database. Only the frontend has access to the backend and can also change data. SGs have secure ssh access to make adjustments to the ec2.

![ms_architecture](https://user-images.githubusercontent.com/31436472/150522739-0912664d-4d1b-4518-8f0c-4d407f100c6d.png)

## Addendum

We use logos of the companies Amazon Web Services, Inc. and Docker for the figure above.

