# ejercicioNode
En el Primer commit descargamos las dependencias, creamos el archivo main llamado app.js y la preparamos la arquitectura para los demas archivos

En el Segundo commit generamos una instancia de la clase Sequelize, hacemos la configuracion de la DB y creamos las clases dentro de la carpeta models con la relacion que tiene entre ellas

En el Tercer commit definimos las rutas 

En el cuarto commit saltamos directamente a la carpeta provider que es la forma que tengo de conectar la entidad que va recibir mi DB con el modelo de negocio

En el quinto commit tomamos lo que devuelve el provider y para aplicarlo en el service, (toma la logica para devolver un producto o entidad que se acerca mas a lo que busca el cliente) 

En el sexto commit vamos con los controllers donde vamos a recibir los datos para crear nuestras entidades y donde despues devolveremos una response con lo que devuelva el service. Y se los asiganmos a las routes