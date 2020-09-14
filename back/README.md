## Implementación

El API se realizó haciendo uso de Node JS y express junto con algunas librerías que aportan seguridad y manejo de logs a la aplicación. 

El despliegue se realiza en AWS por lo que para esto se utiliza "claudia.js" junto con Travis para automatizarlo.

En caso de querer de igual forma realizar el despliegue, es necesario contar con esta librería global, la cual se puedes instalar con el comando `npm i -g claudia` y las credenciales de AWS correctamente configuradas en el ambiente

# Despliegue

1) Instala Node JS en caso de que no lo tengas
2) Instala las dependencias del proyecto usando el comando `npm i`
3) Crear un archivo llamado `.env` en la raíz de la carpeta del back con los valores de las variables que quieres utilizar a partir del archivo `.env.example`
4) Ejecuta la aplicación con el comando `npm run start`