

 #  <center>:video_game: :space_invader: Frikishop :space_invader: :video_game: </center> 

 ## :bookmark: Indice 

 - [Sobre el proyecto](#sobre-el-proyecto)

    - [Instalación y despliegue](#instalacion-y-despliegue)

    - [Tecnologías utilizadas](#tecnologias-utilizadas)

    - [Origen](#origen)

    - [Objetivos](#objetivos)

    - [Concepto e inspiración](#concepto-e-inspiración)

- [Documentacion de API](#documentacion-de-api)

    - [Usuarios](#usuarios)

    - [Pedidos](#pedidos)

    - [Productos](#productos)

    - [Categorias](#categorias)

    - [Sets](#sets)

    - [Reseñas](#reseñas)

- [Retos presentados](#retos-presentados)

    - [Tablas muchos a muchos](#tablas-muchos-a-muchos)

    - [Columnas adicionales en tablas intermedias](#columnas-adicionales-en-tablas-intermedias)

- [Agradecimientos](#agradecimientos)

- [En el tintero](#en-el-tintero)

- [Autores](#autores)

# :clipboard: Sobre el proyecto 



## :bar_chart: Instalación y despliegue 
Para el desarrollo de esta API utilizaremos mysql con Sequelize y express mediante Node.
El proyecto se subirá a un repositorio público de GitHub.
Para instalar este proyecto debes hacer lo siguiente: primero acceder desde github al repositorio y proceder a clonártelo con el siguiente comando:

git clone https://github.com/vaneebg/PROJECT_BACKEND

Una vez clonado el respositorio es muy importante que en tu consola instales todos los npm que necesita el proyecto con el siguiente comando: 
````
npm i
````
Además, si no tienes instalado Sequelize de forma global, deberás hacerlo con el siguiente comando:
````
npm install sequelize-cli -g
````

Seguidamente, dentro de la carpeta config, debes crearte un archivo llamado "config.json" con la siguiente información:
```JSON
{
    "development": {
        "username": "Your user", // Aquí introducir tu usuario de mysql 
        "password": "Your pass", //Introducir tu contraseña de mysql
        "database": "Your db", // Nombre de tu base de datos
        "host": "Your host", //Tu host
        "dialect": "mysql",
        "jwt_secret": "YourJWTPass", //La firma para verificar que el remitente del JWT es quien dice ser
        "auth": {
            "user": "yourMail@gmail.com", //Nombre de la dirección de email con la que quieras enviar el correo de confirmación para registrarte
            "pass": "YourPass" //Contraseña de esa cuenta de email
        }
    },
    ...
}
```

Una vez configurada la base de datos hay que crearla con sus seeds (Relleno de prueba). Para ello ejecuta las siguientes lineas de comandos en la raíz del proyecto:

```
sequelize db:create

sequelize db:migrate

sequelize db:seed:all
```

Por último, procede a levantar el servidor con este comando:
```
npm start
```

## :nut_and_bolt: Tecnologias/packages utilizados 
- Javascript
- Mysql
- Node
- Express
- Sequelize
- Nodemailer
- Bcrypt
- Jsonwebtoken
- Multer
- Postman

## :dart: Origen 
Es un proyecto de backend de la academia The Brigde para asentar conocimientos en todo el terreno de base de datos mysql conjuntamente con Node+Express y Sequelize. Ha consistido en desarrollar una tienda que, en nuestro caso, posee una temática friki, de forma que tenemos tanto Categorías físicas por un lado, como Sets dentro de esas categorías pertenecientes a diversos videojuegos, animes, etc.


Además de la utilización de estas tecnologías, hemos trabajo en equipo mediante el uso de diversas ramas de Git. Primeramente se ha creado la rama develop y desde ahí hemos ido diversificando en varias subramas según qué finalidad tuviese cada nueva aportación. El objetivo final es trabajar conjuntamente desde develop, mergeando ramas según se avance y teniendo en cuenta el trabajo del compañero. Finalmente, cuando se prueba el proyecto entero desde develop, se comprueba que todo funciona y. si es el caso, se acaba añadiendo a la rama main.


Este es el diagrama que hemos confeccionado para realizar nuestra base de datos de la tienda:
![foto](/toReadme/schema_png.png)

Para organizar el trabajo, hemos hecho uso de Trello para dividir las tareas y tener un planteamiento más tangible de las diferentes fases del proyecto:
![foto](/toReadme/trello.png)

 
## :checkered_flag: Objetivos 


- [X] Registro de usuarios usando Bcrypt.
- [X] Login de usuarios + token + middleware.
- [X] Que sea capaz de crear un CRUD.
- [X] Al menos una relación Many to Many y otra One to Many.
- [X] Utilización de seeders

Requisitos imprescindibles del proyecto:
- [X] Uso de ramas con git, cuando se termine el proyecto deberán quedar dos ramas la master o main y la develop.
- [X] Presentación de README excelente.

## 1.1. Endpoints

  - _**Productos**_
    
- [X] CRUD productos
- [X] El endpoint de traer productos debe mostrarse junto a la categoría o categorías que pertenece
- [X] Endpoint que traiga un producto por su id
- [X] Filtro para buscar producto por nombre
- [X] Filtro para buscar producto por precio
- [X] Filtro que ordene los productos de mayor a menor precio
- [X] Implementa validación a la hora de crear un producto para que se rellene todos los campos y si no se hace que devuelva un mensaje
- [X] Solo podrás crear, actualizar y eliminar productos si estás autenticado.



  - _**Categorías**_
- [X] CRUD Categorías
- [X] El endpoint para ver todas las categorías junto a los productos que tienen
- [X] Crea un endpoint que devuelva una categoría por id
- [X] Filtro para buscar categoría por nombre



  - _**Pedidos**_
- [X] Crea un endpoint para ver los pedidos junto a los productos que tienen 
- [X] Crea un endpoint para crear pedidos




    - _**Usuarios**_
- [X] Endpoint para registrar un usuario utilizando bcrypt
- [X] Endpoint para login(utilizando bcrypt +JWT)
- [X] Endpoint que nos traiga la información del usuario conectado junto a los pedidos que tiene y los productos que contiene cada pedido
- [X] Endpoint para el logout
- [X] Implementa validación a la hora de crear un usuario para que se rellene todos los campos y si no se hace que devuelva un mensaje



    - _**Seeders**_
- [X] Crea 5 productos con un seeder

## 1.2. Extra		
- [X] **Implementación de roles:**
    - Crear un rol Admin y que solo los usuarios con ese rol puedan crear, actualizar y eliminar productos.
- [X] **Investiga que es el middleware multer** e implementalo para poder adjuntar imágenes al crear o actualizar productos.
- [X] **Reviews**
    - CRUD reviews
    - El endpoint de traer reviews debe mostrarlas junto al usuario que hizo esa review
    - Actualizar el endpoint de traer todos productos y que ahora muestre los productos junto a sus categorías y sus reviews
    - Actualizar el endpoint de traer producto por id y que ahora muestre los productos junto a sus categorías y sus reviews


## :heart_decoration: Concepto e inspiración 
La idea inicial de este proyecto surge cuando dos par de frikis se juntan para realizar un backend. Cada uno de nosotros, uno enamorado de Valorant y otro amante de los animes, vimos claro que nuestro proyecto de backend debía pertenecer a nuestro campo. De ahí surgió la estructura inicial de nuestra tienda friki, en la que podremos encontrar cosas que nos apasionan a ambos.

# :books: Documentacion de API 
Hemos utilizado Postman para ir probando cada uno de los endpoints creados para diversas funciones.
![foto](/toReadme/postman.png)
# Usuarios

## Registrarse

**(Publico) POST** - `http://localhost:8080/users/` 

Endopoint que sirve para introducir un usuario en la BBDD, automáticamente se le asigna el rol de usuario, la contraseña se guarda codificada para que no sea accesible y el usuario queda pendiente de confirmación via mail. Este procedimiento anida diversas verificaciones para que se introduzcan datos correctos. Los parámetros de entrada son vía Body.

Body:
```JSON
{
    "username": "Usuario",
    "password": "Contraseña",
    "email": "direccion@dominio.com",
    "adress": "Tu direccion"
}
```

Respuesta:
```JSON
{
    "message": "Se ha creado un usuario",
    "user": {
        "id": 27,
        "username": "Usuario",
        "password": "$2a$10$974eQv5GkVrOgR/uSPWux.0enpx31EihQBJiNz79y7q18VWVl8IiC",
        "email": "direccion@dominio.com",
        "adress": "Tu direccion",
        "role": "user",
        "confirmed": false,
        "updatedAt": "2022-05-25T20:23:27.251Z",
        "createdAt": "2022-05-25T20:23:27.251Z"
    }
}
```

-------------------------------

## Inicio de sesión

**(Registrado) GET** - `http://localhost:8080/users/login` 

Endpoint que sirve para iniciar sesión, esto genera un token de sesión, las credenciales se introducen vía Body.

Body:
```JSON
{
    "email": "ElJefeInfiltrado@gmail.com",
    "password": "ElFuckingGuau"
}
```

Respuesta:
```JSON
{
    "message": "Eres un crack, fiera, mastodonte",
    "user": {
        "id": 7,
        "username": "El Perro",
        "email": "ElJefeInfiltrado@gmail.com",
        "password": "$2a$10$qOvg/S8Xbk97/X33UxXyq.orbnzLZdtyHwJybC8.dbtz1i8z.xFSm",
        "adress": "En el cesped de calle molona",
        "role": "SuperAdmin",
        "confirmed": true,
        "createdAt": "2022-05-25T13:31:25.000Z",
        "updatedAt": "2022-05-25T13:31:25.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjUzNTExMDc0fQ.HtM8iUFxyAOPw1FFv75M5jP_ZScHOeZ7SfJZxcxy7B0"
}
```

------------------------

## Cerrar sesión

**(Registrado) DELETE** - `http://localhost:8080/users/logout` 

Endpoint que sirve para cerrar sesión de un usuario activo.

Header:

| KEY | VALUE |
| --- | --- |
| authorization | Token |

Respuesta:
```JSON
{
    "message": "Desconectado con éxito"
}
```

----------------------

## Modificar datos de usuario

**(Registrado) PUT** - `http://localhost:8080/users/`

Endpoint que sirve para para modificar los datos de usuarios. Para su funcionamiento es necesario que se le pase en el body los datos a modificar y en el header el token activo.

Body:
```JSON
{
    "username": "NewUsername"
}
```

Header:

| KEY | VALUE |
| --- | --- |
| authorization | Token |

Resultado:

```JSON
{
    "message": "Usuario con id 2 actualizado con éxito",
    "userUpdated": {
        "id": 2,
        "username": "Juliana",
        "email": "Maria@gmail.com",
        "password": "$2a$10$hHWBihs6AC6ogIPX9nCZp..II4pLdnZmEDzGL/adz3JUwO4y6bCge",
        "adress": "Calle Molona 85",
        "role": "user",
        "confirmed": true,
        "createdAt": "2022-05-25T13:31:25.000Z",
        "updatedAt": "2022-05-25T21:10:29.000Z"
    }
}
```

-------------------------------

## Obtener todos los usuarios con sus pedidos

**(Admin) GET** - `http://localhost:8080/users/`

Endpoint con el que se obtiene a todos los usuarios con sus pedidos, solo es necesario un token en el header con rol de Admin.

Header:

| KEY | VALUE |
| --- | --- |
| authorization | Token |

Respuesta:

```JSON
[
    {
        "id": 1,
        "username": "Paquito Molina",
        "email": "Paqito@gmail.com",
        "password": "$2a$10$EF0vS7yxuG.xAzE6uMSIfuJKbc9gR6pRoKgnMKxI04nG15fJQ0IOS",
        "adress": "Calle Molona 69",
        "role": "user",
        "confirmed": true,
        "createdAt": "2022-05-25T13:31:25.000Z",
        "updatedAt": "2022-05-25T13:31:25.000Z",
        "Orders": [
            {
                "id": 1,
                "paid": false,
                "UserId": 1,
                "createdAt": "2022-05-25T13:31:25.000Z",
                "updatedAt": "2022-05-25T13:31:25.000Z",
                "Products": [
                    {
                        "id": 7,
                        "name": "Vegeta",
                        "description": "Vegeta super saiyajin 3",
                        "price": 27.5,
                        "stock": 3049,
                        "CategorieId": 1,
                        "SetId": 7,
                        "img": "07-choni-de-mercadillo.jpg",
                        "createdAt": "2022-05-25T13:31:25.000Z",
                        "updatedAt": "2022-05-25T13:31:25.000Z",
                        "ProductOrders": {
                            "amount": 5,
                            "ProductId": 7,
                            "OrderId": 1,
                            "createdAt": "2022-05-25T13:31:25.000Z",
                            "updatedAt": "2022-05-25T13:31:25.000Z"
                        }
                    },
                    {
                        "id": 8,
                        "name": "Aragorn",
                        "description": "Aragorn conquistando las tierras medias",
                        "price": 17.65,
                        "stock": 23495,
                        "CategorieId": 4,
                        "SetId": 6,
                        "img": "08-coletas-medieval.jpg",
                        "createdAt": "2022-05-25T13:31:25.000Z",
                        "updatedAt": "2022-05-25T13:31:25.000Z",
                        "ProductOrders": {
                            "amount": 1,
                            "ProductId": 8,
                            "OrderId": 1,
                            "createdAt": "2022-05-25T13:31:25.000Z",
                            "updatedAt": "2022-05-25T13:31:25.000Z"
                        }
                    }
                ]
            }
        ]
    },{
      ...
      ...
      ...
    }
]
```

--------------------------

## Obtener todas las sesiones iniciadas

**(Admin) GET** - `http://localhost:8080/users/currentTokens`

Endpoint que devuelve todos los usuarios conectados junto a sus tokens, solo es necesario poner en el header un token con rol de Admin.

Header:

| KEY | VALUE |
| --- | --- |
| authorization | Token |

Respuesta:
```JSON
[
    {
        "id": 1,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjUzNTExMDc0fQ.HtM8iUFxyAOPw1FFv75M5jP_ZScHOeZ7SfJZxcxy7B0",
        "UserId": 7,
        "createdAt": "2022-05-25T20:37:54.000Z",
        "updatedAt": "2022-05-25T20:37:54.000Z",
        "User": {
            "id": 7,
            "username": "El Perro",
            "email": "ElJefeInfiltrado@gmail.com",
            "password": "$2a$10$qOvg/S8Xbk97/X33UxXyq.orbnzLZdtyHwJybC8.dbtz1i8z.xFSm",
            "adress": "En el cesped de calle molona",
            "role": "SuperAdmin",
            "confirmed": true,
            "createdAt": "2022-05-25T13:31:25.000Z",
            "updatedAt": "2022-05-25T13:31:25.000Z"
        }
    },{
      ...
      ...
      ...
    }
]
```

--------------------

## Borrar usuario por id

**(Admin) DELETE** - `http://localhost:8080/users/id/:id`

Endpoint que sirve para eliminar a un usuario por su id, es necesario disponer de un token de admin y adjuntarlo en el head. Tambien se eliminan sus reviews y pedidos.

Header:

| KEY | VALUE |
| --- | --- |
| authorization | Token |

Resultado:
```JSON
El usuario con id 2 (junto con su order y su review) ha sido eliminado con éxito
```

-----------------------

# Pedidos

## Crear un pedido

**(Registrado) POST** - `http://localhost:8080/orders`

Endpoint que sirve para hacer la creación de un pedido, acepta un array para que se puedan añadir diversos productos al mismo pedido. Es necesario usar un token en el header para identificar el dueño del pedido y un body con los detalles (id del producto a introducir y la cantidad del mismo). Por defecto el pedido se genera con `"paid": "false"` ya que inicialmente no ha sido pagado.

```JSON
[
    {
        "ProductId":2,
        "amount":101
    },
    {
        "ProductId":4,
        "amount":201
    },
    {
        "ProductId":3,
        "amount":406
    }
]
```

Header:

| KEY | VALUE |
| --- | --- |
| authorization | Token |

Resultado:
```JSON
Se ha creado el pedido correctamente
```

----------------------------------

## Obtener todos los pedidos

**(Admin) GET** - `http://localhost:8080/orders`

Endpoint que devuelve todos los pedidos junto a su contenido, incluyendo la cantidad solicitada de cada uno. Solo es necesario un token de admin en la solicitud.

Header:

| KEY | VALUE |
| --- | --- |
| authorization | Token |

```JSON
[
    {
        "id": 1,
        "paid": false,
        "UserId": 1,
        "createdAt": "2022-05-25T13:31:25.000Z",
        "updatedAt": "2022-05-25T13:31:25.000Z",
        "Products": [
            {
                "id": 7,
                "name": "Vegeta",
                "description": "Vegeta super saiyajin 3",
                "price": 27.5,
                "stock": 3049,
                "CategorieId": 1,
                "SetId": 7,
                "img": "07-choni-de-mercadillo.jpg",
                "createdAt": "2022-05-25T13:31:25.000Z",
                "updatedAt": "2022-05-25T13:31:25.000Z",
                "ProductOrders": {
                    "amount": 5
                }
            },
            {
                "id": 8,
                "name": "Aragorn",
                "description": "Aragorn conquistando las tierras medias",
                "price": 17.65,
                "stock": 23495,
                "CategorieId": 4,
                "SetId": 6,
                "img": "08-coletas-medieval.jpg",
                "createdAt": "2022-05-25T13:31:25.000Z",
                "updatedAt": "2022-05-25T13:31:25.000Z",
                "ProductOrders": {
                    "amount": 1
                }
            }
        ]
    },{
        ...
        ...
        ...
    }
]
```

--------------------------------------

## Mostrar pedido por id

**(Admin) GET** - `http://localhost:8080/orders/id/:id`

Endpoint que sirve para extraer el contenido de un pedido con cierto id, este id se tiene que enviar en la URL de la solicitud en `:id`, para ello es necesario un token de admin.

Header:

| KEY | VALUE |
| --- | --- |
| authorization | Token |

Respuesta:
```JSON
{
    "id": 1,
    "paid": false,
    "UserId": 1,
    "createdAt": "2022-05-25T13:31:25.000Z",
    "updatedAt": "2022-05-25T13:31:25.000Z",
    "Products": [
        {
            "id": 7,
            "name": "Vegeta",
            "description": "Vegeta super saiyajin 3",
            "price": 27.5,
            "stock": 3049,
            "CategorieId": 1,
            "SetId": 7,
            "img": "07-choni-de-mercadillo.jpg",
            "createdAt": "2022-05-25T13:31:25.000Z",
            "updatedAt": "2022-05-25T13:31:25.000Z",
            "ProductOrders": {
                "amount": 5
            }
        },
        {
            "id": 8,
            "name": "Aragorn",
            "description": "Aragorn conquistando las tierras medias",
            "price": 17.65,
            "stock": 23495,
            "CategorieId": 4,
            "SetId": 6,
            "img": "08-coletas-medieval.jpg",
            "createdAt": "2022-05-25T13:31:25.000Z",
            "updatedAt": "2022-05-25T13:31:25.000Z",
            "ProductOrders": {
                "amount": 1
            }
        }
    ]
}
```

# Productos

## Crear
**(Admin) POST** - `http://localhost:8080/products` 
Aquí además, en la ruta debemos añadir:
`````
upload.single('upload'), 
`````
de forma que en este caso se quedaría así:
```
router.post('/', authentication, isAdmin, upload.single('upload'), ProductController.create)
````
Esto nos permite usar el midleware Multer para poder adjuntar una imagen con cada producto. En este endpoint que sirve para crear un producto nuevo, es necesario disponer de un token de admin y adjuntarlo en el head. Al usar Multer, es necesario poner la información dentro del Body, pero en form-data:

Header:

| KEY | VALUE |
| --- | --- |
| authorization | Token |

Body:
| KEY | VALUE |
| --- | --- |
| CategorieId | 1 |
| SetId | 2 |
| name | Gagaa |
| description | Un juego de dos maravillosos aguacates únicos |
| price| 1.5 |
| stock| 30 |
| upload| 03.jpg |



Respuesta:
```JSON
{
    "message": "Se ha añadido el producto correctamente",
    "newProduct": {
        "id": 10,
        "CategorieId": "1",
        "SetId": "2",
        "name": "gagaa",
        "description": "Un juego de dos maravillosos aguacates únicos",
        "price": "1.5",
        "stock": "30",
        "img": "1653564364859-06-fontaneros-para-todo-uwu.jpg",
        "updatedAt": "2022-05-26T11:26:04.916Z",
        "createdAt": "2022-05-26T11:26:04.916Z"
    }
}
```
--------------------------------
## Mostrar todos los productos
**(Público) GET** - `http://localhost:8080/products`
Este endpoint te permite, de manera pública, acceder a los productos junto con su categoría y el set al que pertenecen.

Respuesta:

```JSON
[
    {
        "id": 1,
        "name": "Figura Kratos",
        "description": "Una maravillosa figura de Kratos en su última aventura en las tierras nórdicas",
        "price": 10,
        "stock": 2495,
        "CategorieId": 1,
        "SetId": 2,
        "img": "01-leñador-empotrador.jpg",
        "createdAt": "2022-05-25T14:53:01.000Z",
        "updatedAt": "2022-05-25T14:53:01.000Z",
        "Categorie": {
            "id": 1,
            "name": "Figuras",
            "createdAt": "2022-05-25T14:53:00.000Z",
            "updatedAt": "2022-05-25T14:53:00.000Z"
        }
    },
    {
        "id": 2,
        "name": "Torreta de Killjoy",
        "description": "Torreta en tamaño real, dispara, te va a quitar el MVP",
        "price": 5.6,
        "stock": 295,
        "CategorieId": 1,
        "SetId": 1,
        "img": "02-torretmvp.jpg",
        "createdAt": "2022-05-25T14:53:01.000Z",
        "updatedAt": "2022-05-25T14:53:01.000Z",
        "Categorie": {
            "id": 1,
            "name": "Figuras",
            "createdAt": "2022-05-25T14:53:00.000Z",
            "updatedAt": "2022-05-25T14:53:00.000Z"
        }
    },
    {
        "id": 3,
        "name": "Edward",
        "description": "Una taza que se calienta y muestra a nuestro pirata de AC ",
        "price": 15.43,
        "stock": 25,
        "CategorieId": 2,
        "SetId": 3,
        "img": "03-pirata-empotrador.jpg",
        "createdAt": "2022-05-25T14:53:01.000Z",
        "updatedAt": "2022-05-25T14:53:01.000Z",
        "Categorie": {
            "id": 2,
            "name": "Tazas",
            "createdAt": "2022-05-25T14:53:00.000Z",
            "updatedAt": "2022-05-25T14:53:00.000Z"
        }
    },{
      ...
      ...
      ...
    }
]
```

-------------------------------
## Filtrar producto por nombre
**(Público) GET** - `http://localhost:8080/products/name/ezi`
Este endpoint te permite, de manera pública, acceder a los productos junto con su categoría y el set al que pertenecen filtrando por nombre asociado al producto.

Respuesta:

```JSON
[
    {
        "id": 4,
        "name": "Ezio Auditore",
        "description": "Una fantástica camiseta de AC para que luzcas esta primavera",
        "price": 25.43,
        "stock": 25,
        "CategorieId": 3,
        "SetId": 2,
        "img": "04-elezio.jpeg",
        "createdAt": "2022-05-25T14:53:01.000Z",
        "updatedAt": "2022-05-25T14:53:01.000Z",
        "Categorie": {
            "id": 3,
            "name": "Camisetas",
            "createdAt": "2022-05-25T14:53:00.000Z",
            "updatedAt": "2022-05-25T14:53:00.000Z"
        }
    }
]
````
---------------------

## Ordenar productos por precio

**(Público) GET** - `http://localhost:8080/products/order`
Este endpoint te permite, de manera pública, acceder a los productos junto con su categoría y el set al que pertenecen pero esta vez mostrará los productos ordenados de mayor a menor precio.

Respuesta:

```JSON
[
    {
        "id": 5,
        "name": "Levi Ackerman",
        "description": "Figurita del mejor lider del equipo de exploración en Shingeki no Kyojin",
        "price": 35.43,
        "stock": 25,
        "CategorieId": 1,
        "SetId": 4,
        "img": "05-cazatitanes.jpg",
        "createdAt": "2022-05-25T14:53:01.000Z",
        "updatedAt": "2022-05-25T14:53:01.000Z"
    },
    {
        "id": 7,
        "name": "Vegeta",
        "description": "Vegeta super saiyajin 3",
        "price": 27.5,
        "stock": 3049,
        "CategorieId": 1,
        "SetId": 7,
        "img": "07-choni-de-mercadillo.jpg",
        "createdAt": "2022-05-25T14:53:01.000Z",
        "updatedAt": "2022-05-25T14:53:01.000Z"
    },
    {
        "id": 4,
        "name": "Ezio Auditore",
        "description": "Una fantástica camiseta de AC para que luzcas esta primavera",
        "price": 25.43,
        "stock": 25,
        "CategorieId": 3,
        "SetId": 2,
        "img": "04-elezio.jpeg",
        "createdAt": "2022-05-25T14:53:01.000Z",
        "updatedAt": "2022-05-25T14:53:01.000Z"
    },
    { ...
      ...
      ...
    }
]
```
--------------------------
## Filtrar productos entre un rango de precio determinado
**(Público) GET** - `http://localhost:8080/products/filter/pricemin/1/pricemax/5`
Este endpoint te permite, de manera pública, acceder a los productos junto con su categoría y el set al que pertenecen filtrados según un mínimo y máximo de precio que estipulas en la url, recogidos mediante dos parámetros :min y :max.

Respuesta:

```JSON
[
    {
        "id": 9,
        "name": "Goku y sus amigos",
        "description": "Todo el team de dragon ball listo para pelear contigo",
        "price": 3.6,
        "stock": 295,
        "CategorieId": 4,
        "SetId": 7,
        "img": "09-mucha-gente.jpg",
        "createdAt": "2022-05-25T14:53:01.000Z",
        "updatedAt": "2022-05-25T14:53:01.000Z",
        "Categorie": {
            "id": 4,
            "name": "Posters",
            "createdAt": "2022-05-25T14:53:00.000Z",
            "updatedAt": "2022-05-25T14:53:00.000Z"
        }
    },
    {
        "id": 10,
        "name": "gagaa",
        "description": "Un juego de dos maravillosos aguacates únicos",
        "price": 1.5,
        "stock": 30,
        "CategorieId": 1,
        "SetId": 2,
        "img": "1653564364859-06-fontaneros-para-todo-uwu.jpg",
        "createdAt": "2022-05-26T11:26:04.000Z",
        "updatedAt": "2022-05-26T11:26:04.000Z",
        "Categorie": {
            "id": 1,
            "name": "Figuras",
            "createdAt": "2022-05-25T14:53:00.000Z",
            "updatedAt": "2022-05-25T14:53:00.000Z"
        }
    }
]
```
-------------------------
## Ver producto por Id
**(Público) GET** - `http://localhost:8080/products/id/1`
Este endpoint te permite, de manera pública, acceder a al producto perteneciente a la Id con su categoría y el set al que pertenecen.

Respuesta:

```JSON
{
    "id": 1,
    "name": "Figura Kratos",
    "description": "Una maravillosa figura de Kratos en su última aventura en las tierras nórdicas",
    "price": 10,
    "stock": 2495,
    "CategorieId": 1,
    "SetId": 2,
    "img": "01-leñador-empotrador.jpg",
    "createdAt": "2022-05-25T14:53:01.000Z",
    "updatedAt": "2022-05-25T14:53:01.000Z",
    "Categorie": {
        "id": 1,
        "name": "Figuras",
        "createdAt": "2022-05-25T14:53:00.000Z",
        "updatedAt": "2022-05-25T14:53:00.000Z"
    }
}
````
-----------------------

## Borrar productos

**(Admin) DELETE** - `http://localhost:8080/products/id/2` 

Endpoint que sirve para borrar un determinado producto. Para ello, se necesitan los permisos de administrador:

Header:

| KEY | VALUE |
| --- | --- |
| authorization | Token |



Respuesta:
```JSON
El producto con id 2 junto con su review ha sido eliminado con éxito
```

-------------------------------
## Modificar producto

**(Admin) POST** - `http://localhost:8080/products/id/3` 
Aquí además, en la ruta debemos añadir:
`````
upload.single('upload'), 
`````
de forma que se nos quedaría así:
````
router.put('/id/:id', authentication, isAdmin, upload.single('upload'), ProductController.update)
````
Esto nos permite usar el midleware Multer para poder adjuntar una imagen con cada producto. En este endpoint que sirve para modificar un producto, es necesario disponer de un token de admin y adjuntarlo en el head. Al usar Multer, es necesario poner la información dentro del Body, pero en form-data, al igual que cuando creábamos un producto:

Header:

| KEY | VALUE |
| --- | --- |
| authorization | Token |

Body:
| KEY | VALUE |
| --- | --- |
| CategorieId | 3 |
| SetId | 6 |
| name | cambiado |
| description | cambiado descripcion |
| price| 19.99 |
| stock| 2 |
| upload| 03-pirata-empotrador.jpg |



Respuesta:
```JSON
{
    "message": "Producto con id 3 actualizado con éxito",
    "productUpdated": {
        "id": 3,
        "name": "cambiado",
        "description": "cambiado description",
        "price": 19.99,
        "stock": 2,
        "CategorieId": 3,
        "SetId": 6,
        "img": "1653571031796-03-pirata-empotrador.jpg",
        "createdAt": "2022-05-25T14:53:01.000Z",
        "updatedAt": "2022-05-26T13:17:11.000Z"
    }
}
```
--------------------------------
# Categorias

## Crear

**(Admin) POST** - `http://localhost:8080/categories` 

Este endpoint nos permite crear diferentes categorías, siempre que tengas el rango de autorización requerido (admin).

Header:

| KEY | VALUE |
| --- | --- |
| authorization | Token |



Respuesta:
```
Se ha añadido batas a categorias
```
--------------------------------
## Mostrar todos las categorías

**(Público) GET** - `http://localhost:8080/categories`
Este endpoint te permite, de manera pública, acceder a todas las categorías de la base de datos. Además te trae los productos que pertenecen a esa categoría, con sus correspondientes datos.

Respuesta:

```JSON
[
    {
        "id": 1,
        "name": "Figuras",
        "createdAt": "2022-05-25T14:53:00.000Z",
        "updatedAt": "2022-05-25T14:53:00.000Z",
        "Products": [
            {
                "id": 10,
                "name": "gagaa",
                "description": "Un juego de dos maravillosos aguacates únicos",
                "price": 1.5,
                "stock": 30,
                "CategorieId": 1,
                "SetId": 2,
                "img": "1653564364859-06-fontaneros-para-todo-uwu.jpg",
                "createdAt": "2022-05-26T11:26:04.000Z",
                "updatedAt": "2022-05-26T11:26:04.000Z"
            },
            {
                "id": 7,
                "name": "Vegeta",
                "description": "Vegeta super saiyajin 3",
                "price": 27.5,
                "stock": 3049,
                "CategorieId": 1,
                "SetId": 7,
                "img": "07-choni-de-mercadillo.jpg",
                "createdAt": "2022-05-25T14:53:01.000Z",
                "updatedAt": "2022-05-25T14:53:01.000Z"
            },
            {
                "id": 6,
                "name": "Mario y Luigi",
                "description": "El dúo dinámico preparado para su próximo juego",
                "price": 16.5,
                "stock": 3049,
                "CategorieId": 1,
                "SetId": 5,
                "img": "06-fontaneros-para-todo-uwu.jpg",
                "createdAt": "2022-05-25T14:53:01.000Z",
                "updatedAt": "2022-05-25T14:53:01.000Z"
            },
            {
                "id": 5,
                "name": "Levi Ackerman",
                "description": "Figurita del mejor lider del equipo de exploración en Shingeki no Kyojin",
                "price": 35.43,
                "stock": 25,
                "CategorieId": 1,
                "SetId": 4,
                "img": "05-cazatitanes.jpg",
                "createdAt": "2022-05-25T14:53:01.000Z",
                "updatedAt": "2022-05-25T14:53:01.000Z"
            },
            {
                "id": 1,
                "name": "Figura Kratos",
                "description": "Una maravillosa figura de Kratos en su última aventura en las tierras nórdicas",
                "price": 10,
                "stock": 2495,
                "CategorieId": 1,
                "SetId": 2,
                "img": "01-leñador-empotrador.jpg",
                "createdAt": "2022-05-25T14:53:01.000Z",
                "updatedAt": "2022-05-25T14:53:01.000Z"
            }
        ]
    },
    {
        "id": 2,
        "name": "Tazas",
        "createdAt": "2022-05-25T14:53:00.000Z",
        "updatedAt": "2022-05-25T14:53:00.000Z",
        "Products": []
    },
    {
        "id": 3,
        "name": "Camisetas",
        "createdAt": "2022-05-25T14:53:00.000Z",
        "updatedAt": "2022-05-25T14:53:00.000Z",
        "Products": [
            {
                "id": 4,
                "name": "Ezio Auditore",
                "description": "Una fantástica camiseta de AC para que luzcas esta primavera",
                "price": 25.43,
                "stock": 25,
                "CategorieId": 3,
                "SetId": 2,
                "img": "04-elezio.jpeg",
                "createdAt": "2022-05-25T14:53:01.000Z",
                "updatedAt": "2022-05-25T14:53:01.000Z"
            },
      ...
      ...
      ...
    }
]
```
----------------------
## Mostrar categoría por id

**(Público) GET** - `http://localhost:8080/categories/id/4`
Este endpoint te permite, de manera pública, acceder a la categoría filtrando previamente por su Id. Además te trae los productos que pertenecen a esa categoría, con sus correspondientes datos.

Respuesta:

```JSON
{
    "id": 4,
    "name": "Posters",
    "createdAt": "2022-05-25T14:53:00.000Z",
    "updatedAt": "2022-05-25T14:53:00.000Z",
    "Products": [
        {
            "id": 8,
            "name": "Aragorn",
            "description": "Aragorn conquistando las tierras medias",
            "price": 17.65,
            "stock": 23495,
            "CategorieId": 4,
            "SetId": 6,
            "img": "08-coletas-medieval.jpg",
            "createdAt": "2022-05-25T14:53:01.000Z",
            "updatedAt": "2022-05-25T14:53:01.000Z"
        },
        {
            "id": 9,
            "name": "Goku y sus amigos",
            "description": "Todo el team de dragon ball listo para pelear contigo",
            "price": 3.6,
            "stock": 295,
            "CategorieId": 4,
            "SetId": 7,
            "img": "09-mucha-gente.jpg",
            "createdAt": "2022-05-25T14:53:01.000Z",
            "updatedAt": "2022-05-25T14:53:01.000Z"
        }
    ]
}
```
---------------------------

## Filtrar categoría por nombre

**(Público) GET** - `http://localhost:8080/categories/search/pos`
Este endpoint te permite, de manera pública, acceder a la categoría filtrando previamente por su nombre. 

Respuesta:

```JSON
[
    {
        "id": 4,
        "name": "Posters",
        "createdAt": "2022-05-25T14:53:00.000Z",
        "updatedAt": "2022-05-25T14:53:00.000Z"
    }
]
```
----------------------

## Modificar categoria

**(Admin) POST** - `http://localhost:8080/categories/id/2` 

 En este endpoint que sirve para modificar una categoría, es necesario disponer de un token de admin y adjuntarlo en el head. 

Header:

| KEY | VALUE |
| --- | --- |
| authorization | Token |

Body:
````
{
    "name": "Accion"
}
````
Respuesta:
```JSON
{
    "message": "Se ha modificado la categoria 2",
    "updatedCategorie": {
        "id": 2,
        "name": "Accion",
        "createdAt": "2022-05-25T14:53:00.000Z",
        "updatedAt": "2022-05-26T13:19:20.000Z"
    }
}
```
-------------------

## Borrar categoria

**(Admin) DELETE** - `http://localhost:8080/categories/id/2` 

Endpoint para borrar categoría por Id. Necesitas tener permisos admin, por lo que debes rellenar el header con lo siguiente:

Header:

| KEY | VALUE |
| --- | --- |
| authorization | Token |



```

Respuesta:
```JSON
Se ha borrado la categoria con id: 2
```
---------------

# Sets
## Crear set

**(Admin) POST** - `http://localhost:8080/sets2` 

Endpoint para crear un set nuevo. Necesitas tener permisos, por lo que debes rellenar el header con:

Header:

| KEY | VALUE |
| --- | --- |
| authorization | Token |

Body:
````
{
    "name":"the last of us"
}
````    

```

Respuesta:
```JSON
{
    "message": "Se ha añadido el Set correctamente",
    "newSet": {
        "id": 8,
        "name": "the last of us",
        "updatedAt": "2022-05-26T13:30:48.596Z",
        "createdAt": "2022-05-26T13:30:48.596Z"
    }
}
```
---------------
## Modificar set

**(Admin) PUT** - `http://localhost:8080/sets/id/8` 

Endpoint para modificar un set existente. Necesitas tener permisos, por lo que debes rellenar el header con lo siguiente:

Header:

| KEY | VALUE |
| --- | --- |
| authorization | Token |

Body:
````
{
    "name":"PUBG modificado"
}
````    

```

Respuesta:
```JSON
{
    "message": "Set con id 8 actualizado con éxito",
    "SetUpdated": {
        "id": 8,
        "name": "PUBG modificado",
        "createdAt": "2022-05-26T13:30:48.000Z",
        "updatedAt": "2022-05-26T13:32:39.000Z"
    }
}
```
------------------------
## Borrar set

**(Admin) DELETE** - `http://localhost:8080/sets/id/8` 

Endpoint para borrar un set existente. Necesitas tener permisos, por lo que debes rellenar el header con lo siguiente:

Header:

| KEY | VALUE |
| --- | --- |
| authorization | Token |



Respuesta:
```JSON
El Set con id 8 ha sido eliminado con éxito

```
----------------------
## Filtrar set por nombre
**(Público) GET** - `http://localhost:8080/sets/name/god`
Este endpoint te permite, de manera pública, acceder al set filtrando previamente por su nombre. 

Respuesta:

```JSON
[
    {
        "id": 2,
        "name": "Set God of War",
        "createdAt": "2022-05-25T14:52:59.000Z",
        "updatedAt": "2022-05-25T14:52:59.000Z"
    }
]
```
----------------------

# Reseñas

## Filtrar producto por id con categoria y reseñas

**(Publico) POST** - `http://localhost:8080/reviews/review_product/id/:id` 

Endpoint que te devuelve un producto concreto junto a su categoría y las reseñas que tienen. Para usar este endpoint solo es necesario pasar por la URL el id del producto del que quieres obtener la información.

```JSON
{
    "id": 1,
    "name": "Figura Kratos",
    "description": "Una maravillosa figura de Kratos en su última aventura en las tierras nórdicas",
    "price": 10,
    "stock": 2495,
    "CategorieId": 1,
    "SetId": 2,
    "img": "01-leñador-empotrador.jpg",
    "createdAt": "2022-05-25T13:31:25.000Z",
    "updatedAt": "2022-05-25T13:31:25.000Z",
    "Categorie": {
        "id": 1,
        "name": "Figuras",
        "createdAt": "2022-05-25T13:31:25.000Z",
        "updatedAt": "2022-05-25T13:31:25.000Z"
    },
    "Reviews": [
        {
            "id": 1,
            "title": "Guauuu",
            "body": "Tanto Mike como Vanesa prestan una atención maravillosa en la tienda, mi figura es increíble",
            "score": 10,
            "UserId": 1,
            "ProductId": 1,
            "createdAt": "2022-05-25T13:31:25.000Z",
            "updatedAt": "2022-05-25T13:31:25.000Z"
        }
    ]
}
```

----------------

## Crear una reseña 

**(Registrado) POST** - `http://localhost:8080/reviews` 

Endpoint que consiste en la publicación de una reseña, esto acepta un parámetro por el header que es el token del usuario que va a generar la reseña, y por el body el resto de parámetros.

Header:
| KEY | VALUE |
| --- | --- |
| authorization | Token |

Body:
```JSON
{
    "ProductId":2,
    "title": "Me fascinaron",
    "body": "Me llegaron los pedidos super rápido, muy buena calidad",
    "score": 8
}
```

Respuesta:
```JSON
{
    "message": "Se ha añadido correctamente",
    "newReview": {
        "id": 20,
        "ProductId": 2,
        "title": "Me fascinaron",
        "body": "Me llegaron los pedidos super rápido, muy buena calidad",
        "score": 8,
        "UserId": 5,
        "updatedAt": "2022-05-26T13:33:47.678Z",
        "createdAt": "2022-05-26T13:33:47.678Z"
    }
}
```
---------------------

## Modificar una reseña 

**(Registrado) PUT** - `http://localhost:8080/reviews/id/:id` 

Endpoint que sirve para modificar una reseña. Para su ejecución, es necesario pasar por le URL el id de la reseña, hay que incluir en el header el token del dueño de la reseña a modificar, por último dentro del body hay que introducir los campos que queramos modificar.

Header:
| KEY | VALUE |
| --- | --- |
| authorization | Token |

Body:
```JSON
{
    "title": "La he cambiado",
    "body": "¡Los productos son geniales!",
    "score": 2
}
```

Respuesta:
```JSON
{
    "message": "Se han modificado:",
    "updateds": [
        1
    ]
}
```

----------------------------

## Eliminar una reseña por su id 
        
**(Registrado) DELETE** - `http://localhost:8080/reviews/id/:id` 

Endpoint que sirve para eliminar una reseña, para ello necesitas pasar el id de la reseña via URL y por el header tienes que pasar el token vinculado al usuario que generó la reseña.

Header:
| KEY | VALUE |
| --- | --- |
| authorization | Token |

Resultado:
```JSON
La review con id 6 ha sido eliminada con éxito
```

-------------------

## Obtener todas las reseñas junto a sus creadores 

**(Admin) GET** - `http://localhost:8080/reviews` 

Endpoint encargado de devolver todas las reseñas junto a sus creadores, para ellos simplemente hay que hacer la solicitud con una key de administrador en el header.

Respuesta:
```JSON
[
    {
        "id": 1,
        "title": "Guauuu",
        "body": "Tanto Mike como Vanesa prestan una atención maravillosa en la tienda, mi figura es increíble",
        "score": 10,
        "UserId": 1,
        "ProductId": 1,
        "createdAt": "2022-05-25T13:31:25.000Z",
        "updatedAt": "2022-05-25T13:31:25.000Z",
        "User": {
            "id": 1,
            "username": "Paquito Molina",
            "email": "Paqito@gmail.com",
            "password": "$2a$10$EF0vS7yxuG.xAzE6uMSIfuJKbc9gR6pRoKgnMKxI04nG15fJQ0IOS",
            "adress": "Calle Molona 69",
            "role": "user",
            "confirmed": true,
            "createdAt": "2022-05-25T13:31:25.000Z",
            "updatedAt": "2022-05-25T13:31:25.000Z"
        }
    },{
        ...
        ...
        ...
    }
]
```

-------------------------

## Mostrar todos product junto con categ. y review

**(Admin) GET** - `http://localhost:8080/reviews/review_product` 

Endpoint donde se obtiene todos los productos junto a sus categorias y sus reviews, solo es necesario un token de administrador.

Header:
| KEY | VALUE |
| --- | --- |
| authorization | Token |

Respuesta:
```JSON
[
    {
        "id": 1,
        "name": "Figura Kratos",
        "description": "Una maravillosa figura de Kratos en su última aventura en las tierras nórdicas",
        "price": 10,
        "stock": 2495,
        "CategorieId": 1,
        "SetId": 2,
        "img": "01-leñador-empotrador.jpg",
        "createdAt": "2022-05-25T13:31:25.000Z",
        "updatedAt": "2022-05-25T13:31:25.000Z",
        "Categorie": {
            "id": 1,
            "name": "Figuras",
            "createdAt": "2022-05-25T13:31:25.000Z",
            "updatedAt": "2022-05-25T13:31:25.000Z"
        },
        "Reviews": [
            {
                "id": 1,
                "title": "Guauuu",
                "body": "Tanto Mike como Vanesa prestan una atención maravillosa en la tienda, mi figura es increíble",
                "score": 10,
                "UserId": 1,
                "ProductId": 1,
                "createdAt": "2022-05-25T13:31:25.000Z",
                "updatedAt": "2022-05-25T13:31:25.000Z"
            }
        ]
    },{
        ...
        ...
    }
]
```
--------------------

# :bangbang: Retos presentados 

## Tablas muchos a muchos
Para poder relacionar correctamente la tabla de pedidos y productos era necesaria una tabla intermedia, ya que era una relación de muchos a muchos.


Esta tabla tuvo una dificultad añadida ya que la documentación de Sequelize indicaba que la tabla se creaba automáticamente y no logramos hacerlo así. Tras este obstáculo, decidimos crear el modelo manualmente con las dos claves foráneas, añadiéndole además el apartado de amount.

## Columnas adicionales en tablas intermedias
A la hora de intentar introducir los datos en la tabla intermedia mediante el método `addXXX` de Sequelize, no nos permitía introducir este valor extra. Esto lo solucionamos generando un bucle que recorriese la solicitud, la cual entraba en forma de array. Esto creaba filas individualmente por cada elemento, con su propio atributo amount.
# :purple_heart: Agradecimientos 
A la lead instructor [Sofía](https://github.com/SofiaPinilla), y al TA [Germán](https://github.com/GeerDev) por ayudarnos en algunos momentos de crisis con algún que otro endpoint que se nos atravesó, además de algún crasheo inesperado.
# :black_nib: En el tintero 

- [ ] Implementación de frontend
- [ ] Añadir validaciones extra, por ejemplo, validación de password con RegEx
- [ ] Sistema de testing con Jest
- [ ] Implementación de sistema de stock de productos
- [ ] Implementación del sistema "cesta" previo al pedido
- [ ] Añadir endpoints
    - [ ] Endpoint en el que el usuario pueda autoeliminarse.
    - [ ] Endpoint en el que el usuario pueda recibir los datos de su propia sesión
  
# :couple: Autores 

- :mushroom: [Mike](https://github.com/MrSetOne) 



- :smiling_imp: [Vanesa](https://github.com/vaneebg)
