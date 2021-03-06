# Nachota.Inc-API

# Nachota.Inc - La Mejor Comiqueria del País

## Stack
El proyecto está armado con NodeJS por lo cuál corre en un entorno de NGINX.

Se compone por:

- Armado web en servidor (SSR)
- REST API

**Keywords**: NodeJS, EJS, API, MongoDB, Heroku

--------------------------------------------------------------------------------

## Puesta a prueba https://nachota-inc-website.herokuapp.com/

Para poner a prueba mi website, primero se tiene que abrir la URL,
luego de pasear por la página (INICIO, OFERTAS, PRODUCTOS, etc.) tenemos que 
abrir la aplicación POSTMAN, esto con el fin de CREAR, MOSTRAR y 
ELIMINAR productos de nuestras distintas páginas. 

--------------------------------------------------------------------------------

## POSTMAN https://www.getpostman.com/collections/481cb78ba466bb32af92

Ya en POSTMAN haremos uso de nuestra colección.
Para utilizar la colección primero debemos buscar un boton con la palabra *Import*,
este se encuentra en la zona superior izquierda al lado de otro boton con la
palabra *New* en él. A continuación nos aparecera una interfaz con distintas
opciones de para importar colecciones, daremos click en *Link* y pegaremos la 
URL que compartimos en el subtitulo. Para finalizar daremos click en *Continue*,
y por ultimo en *Import*.
Así ya tendremos instalada nuestra colección de POSTMAN que nos permitira CREAR
MOSTRAR y ELIMINAR productos.

Para CREAR un producto abrimos la colección de la página a la que querramos
asignarle un nuevo producto. Ejemplo: > A,P,D Destacados
Lo siguiente que haremos es abrir el archivo "POST Crear Destacado", damos click en
*Body* > *raw* y cambiamos de "Text" a "JSON".
Por último le indicamos el nombre que tendra nuestro nuevo producto, le asigunamos
un precio y su respectiva imagen y damos click en *Send*. Refrescamos la página y 
revisamos si el producto fue creado correctamente.

Podemos MOSTRAR nuestros productos abriendo el archivo "GET Mostrar Destacados"
y luego dar click en *Send*. En los productos podremos encontar su ID único.

Para ELIMINAR el producto que creamos abrimos el archivo "DEL Eliminar Destacado
mediante ID", y al final de la URL pegamos el ID de nuestro producto, luego damos
click en *Send*, esto borrara nuestro producto de la base de datos.

--------------------------------------------------------------------------------

## Imagenes de Productos

Para tener en cuenta:
Cuando quiera crear nuevos productos y que estos tengan sus respectivas imagenes
podemos abrir nuesto repositorio de git y navegar en las carpetas 
Nachota.Inc-WEBSITE > public > img > 
Ahí encontraremos todas las imagenes que se utilizan en la página (sumado los 
productos). Por lo tanto deberemos saber el nombre exacto del producto para 
seleccionar la imagen que le corresponde. Ejemplo: 
Producto: Chainsaw Man #1
Imagen: chainsaw-man-01.jpg


## Consignas del trabajo

El proyecto cuenta con dos partes:

--------------------------------------------------------------------------------

## Cliente

Nachota.Inc es una empresa en desarrollo que vende Mangas y Figuras de Anime.

--------------------------------------------------------------------------------

## Pedido

Como cliente estoy interesado en armar una web en donde muestre mis productos para 
generar identidad de marca. Además tengo perspectivas de crecimiento y quiero armar, 
a largo plazo, un ecommerce en donde pueda vender sus productos y enviarlos a
domicilio. 

--------------------------------------------------------------------------------

## Aspectos Técnicos

Armé un diseño de la web con Figma.  

--------------------------------------------------------------------------------

## Bootstrap

Utilizare Bootstrap para el desarrollo, dada que esta tecnología me permite realizar
cambios de manera simple.

--------------------------------------------------------------------------------

## Web - Ecommerce

Como el dia de mañana voy a querer armar un ecommerce donde los clientes puedan
comprar mediante distintos medios de pago, Decidí armar una REST API conectada a un
ATLAS de MonogoDB para tener distintos endpoints de productos en donde se listen los
productos.

--------------------------------------------------------------------------------

## Base de Datos

Tengo una base de dato en Atlas MongoDB en la que puedo subir mis productos para
luego mostrarlos en la página web.