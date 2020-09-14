## Implementación

La aplicación se construyó utilizando `create-react-app`, una librería que entrega todo lo necesario para trabajar en un proyecto basado en React.js. Se utilizan estilos definidos SASS y también algunos componentes de bootstrap.

Se utiliza Travis para manejar el despliegue automático de la aplicación en un bucket de S3 una vez los cambios se encuentren en la rama master y la ejecución de pruebas y el build se hayan realizado de forma exitosa.

De igual forma, la aplicación cuenta con las configuraciones bases para ser una PWA. Pero en el dominio asociado no se cuenta con el certificado ssl necesario para la correcta instalación de la misma. 

# Despliegue

1) Instala Node JS en caso de que no lo tengas
2) Instala las dependencias del proyecto usando el comando `npm i`
3) Crear un archivo llamado `.env` en la raíz de la carpeta del back con los valores de las variables que quieres utilizar a partir del archivo `.env.example`
4) Ejecuta la aplicación con el comando `npm run start`

# Pruebas

Se realizaron pruebas unitarias por cada componente/contenedor utilizando Jest y Enzyme. Para ejecutar las pruebas es necesario correr el comando `npm run test`

