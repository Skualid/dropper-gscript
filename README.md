# Introducción

Este dropper tiene 3 etapas que se ejecutan con una prioridad según se van nombrando:

## A) Comprobar si hay un killswitch activado. Si lo está, no debe hacer nada.

Este GScript solamente comprueba si existe una url y si contiene la palabra "OFF". En este caso se activará el killswitch.

## B) Intentar elevar privilegios con sudo para desactivar el firewall de Ubuntu.

Este GScript intenta desabilitar el firewall de Ubuntu ejecutando el comando **"sudo -n ufw disable"**. Si puede desabilitarlo o no, la siguiente etapa se ejecuta.

## C) Ejecutar un payload que es una puerta trasera TCP.

Este GScript coge un código en C que crea una puerta trasera sencilla en el puerto 12345.

# Instalación

Primero hay que instalar GScript (preferiblemente con Docker): 

```shell
docker pull gen0cide/gscript:v1
```

Creamos un directorio para intercambiar los ficheros con el contenedor y una vez dentro ejecutamos:

```shell
cd dropper
gscript compile --enable-logging -o $(pwd)/evil killswitch.gs fwdown.gs payload.gs
```

Y ya tendriamos nuestro dropper en un fichero llamado **evil**
