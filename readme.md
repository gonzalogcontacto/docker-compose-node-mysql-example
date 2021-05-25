# 1º -> Using docker-compose 
## Create images and run container


- ```docker compose build/up```

Just with this command you should get this output:


![Container/environment is running!](./containerRunnnig.png?raw=true)


## Stop container
Stop containers, but if dont have any volumes you will lose data and need remove the images to reflect new changes from code in the container!
Also if have volumes you can delete the volumes too with flag -v (docker compose down -v) ¡¡¡ YOU WILL LOSE DATA !!!

- ```docker compose down ```
- ```docker compose down -v ```
  
## List of containers and the related images
-``` docker ps [-a]```
  * -a show you stopped containers

## Remove image
-``` docker image rm [idImage]```

# Persistence of data in Docker
There are four possible options to mount any volume

- Relative Path
- Absolute Path
- Docker Volume Default Path
- Docker Volume with Absolute Path
  
Here is the example for above:
```
version: '3'
services:
    sample:
        image: sample
        volumes:
            - ./relative-path-volume:/var/data-two
            - /home/ubuntu/absolute-path-volume:/var/data-one
            - docker-volume-default-path-volume:/var/data-three
            - docker-volume-absolute-path-volume:/var/data-four
volumes:
  docker-volume-default-path-volume: {}
  docker-volume-absolute-path-volume:
    driver: local
    driver_opts:
      o: bind
      type: none
      device: /home/path/of/your/folder

```

**Relative Path:** ./relative-path-volume:/var/data-two

**Absolute Path:** /home/ubuntu/absolute-path-volume:/var/data-one

**Docker Volume Default Path:** docker-volume-default-path-volume:/var/data-three

**Docker Volume with Absolute Path:** docker-volume-absolute-path-volume:/var/data-four

*This works for any server as we folder and customize the volume device property to respective directory path.*


# 2º -> Mode manually up the containers

## Build the image

- ```docker-build -t [yourImageName] [dockerfileFolder]```

  

## Run your image

- ```docker run -p [externalPort]:80 [yourImageName]```

(-p: Expose the port 80 from host and point to 80 port of container to make allowed from external applications)

  

## Access bash/shell of a container

```docker exec -it [containerName] bash/sh```

  

## Creating container with persistence/sync source code with your computer

This makes posible you dont need re-build image each code changes. Also you dont need run the container, changes will be applied on the application.
  

- ```docker run -v [sourceCodeFolder]:[containerSyncFolder] -p 8000:80 [dockerImage]```
