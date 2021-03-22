# enviame-test
## Ejercicio tenico enviame

Para ejercicio 1 mysql correr
```sh
cd mysql_docker
docker-compose up -d
```

Para el ejercicio 2 rest-api

```sh
cd rest-api
docker build -t api-rest-enviame .
docker run -it -p 3000:3000 api-rest-enviame
```

El resto de ejercicios en carpeta "Scripts", ejercicio 4 N/A

Para ejercicios en .js correr
```sh
cd scripts
node NOMBREARCHIVO.js 
```
