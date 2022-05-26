<!-- # PROJECT_BACKEND

- [X] Registro de usuarios usando Bcrypt.
- [X] Login de usuarios + token + middleware.
- [X] Que sea capaz de crear un CRUD.
- [X] Al menos una relación Many to Many y otra One to Many.
- [X] Utilización de seeders

Requisitos imprescindibles del proyecto:
- [X] Uso de ramas con git, cuando se termine el proyecto deberán quedar dos ramas la master o main y la develop.
- [X] Presentación de README excelente.

## 1.1.Endpoints
  - _Productos_
- [X] *CRUD productos*
- [X] El endpoint de traer productos debe mostrarse junto a la categoría o categorías que pertenece
- [X] Endpoint que traiga un producto por su id
- [X] Filtro para buscar producto por nombre
- [/] Filtro para buscar producto por precio
- [X] Filtro que ordene los productos de mayor a menor precio
- [X] Implementa validación a la hora de crear un producto para que se rellene todos los campos y si no se hace que devuelva un mensaje
- [X] Solo podrás crear, actualizar y eliminar productos si estás autenticado.



  - _Categorías_
- [X] *CRUD Categorías*
- [X] El endpoint para ver todas las categorías junto a los productos que tienen
- [X] Crea un endpoint que devuelva una categoría por id
- [X] Filtro para buscar categoría por nombre



  - _Pedidos_
- [X] Crea un endpoint para ver los pedidos junto a los productos que tienen 
- [X] Crea un endpoint para crear pedidos




 - _Usuarios_
- [X] Endpoint para registrar un usuario utilizando bcrypt
- [X] Endpoint para login(utilizando bcrypt +JWT)
- [X] Endpoint que nos traiga la información del usuario conectado junto a los pedidos que tiene y los productos que contiene cada pedido
- [X] Endpoint para el logout
- [/] Implementa validación a la hora de crear un usuario para que se rellene todos los campos y si no se hace que devuelva un mensaje



 - _Seeders_
- [X] Crea 5 productos con un seeder

## 1.2. Extra		
- [X] Implementación de roles:
    - Crear un rol Admin y que solo los usuarios con ese rol puedan crear, actualizar y eliminar productos.
- [X] Investiga que es el middleware multer e implementalo para poder adjuntar imágenes al crear o actualizar productos.
- [X] Reviews
    - CRUD reviews
    - El endpoint de traer reviews debe mostrarlas junto al usuario que hizo esa review
    - Actualizar el endpoint de traer todos productos y que ahora muestre los productos junto a sus categorías y sus reviews
    - Actualizar el endpoint de traer producto por id y que ahora muestre los productos junto a sus categorías y sus reviews

 -->

 # <center>Frikishop</center>

 ## Indice

 - [Sobre el proyecto](#sobre-el-proyecto)

    - [Instalacion y despliegue](#instalacion-y-despliegue)

    - [Tecnologias utilizadas](#tecnologias-utilizadas)

    - [Origen](#origen)

    - [Objetivos](#objetivos)

    - [Concepto e inspiración](#concepto-e-inspiración)

- [Documentacion de API](#documentacion-de-api)

    - [Usuarios](#usuarios)

    - [Pedidos](#pedidos)

    - [Productos](#productos)

    - [Categorias](#categorias)

    - [Sets](#sets)

    - [Opiniones](#opiniones)

- [Retos presentados](#retos-presentados)

    - [Tablas muchos a muchos](#tablas-muchos-a-muchos)

    - [Columnas adicionales en tablas intermedias](#columnas-adicionales-en-tablas-intermedias)

- [Agradecimientos](#agradecimientos)

- [En el tintero](#en-el-tintero)

- [Autores](#autores)

# Sobre el proyecto

## Instalacion y despliegue

## Tecnologias utilizadas

## Origen

## Objetivos

## Concepto e inspiración

# Documentacion de API

# Usuarios

## Registrarse

**(Publico) POST** - `http://localhost:8080/users/` 

Endopoint que sirve para introducir un usuario en la BBDD, automaticamente se le asigna el rol de usuario, la contraseña se guarda codificada para que no sea accesible y el usuario queda pendiente de confirmacion via mail. Este procedimiento anida diversas verificaciones para que se introduzcan datos correctos. Los parametros de entrada son via Body.

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

Endpoint que sirve para iniciar sesión, esto genera un token de sesión, las credenciales se introducen via Body.

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

Endpoint que sirve para cerrar sesión de un usuario activo

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

Endpoint que sirve para para modificar los datos de usuarios, para su funcionamiento es necesario que se le pase en el body los datos a modificar y en el header el token activo.

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

Endpoint con el que se obtiene a todos los usuarios con sus pedidos, solo es necesario un token en el header con rol de Admin

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

Endpoint que sirve para hacer la creacion de un pedido, acepta un array para que se puedan añadir diversos productos al mismo pedido, es necesario usar un token en el header para identificar el dueño del pedido y un body con los detalles del pedido (id del producto a introducir y la cantidad del mismo). Por defecto el pedido se genera con `"paid": "false"` ya que inicialmente no ha sido pagado.

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
Esto nos permite usar el midleware Multer para poder adjuntar una imagen con cada producto. Este endpoint que sirve para crear un producto nuevo, es necesario disponer de un token de admin y adjuntarlo en el head. Al usar Multer, es necesario poner la información dentro del Body, pero en form-data:

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
# Filtrar producto por nombre
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

# Ordenar productos por precio

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
# Filtrar productos entre un rango de precio determinado
**(Público) GET** - `http://localhost:8080/products/filter/pricemin/1/pricemax/5`
Este endpoint te permite, de manera pública, acceder a los productos junto con su categoría y el set al que pertenecen filtrados según un mínimo y máximo de precio que estipulas en la url.

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
# Ver producto por Id
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

Aquí además, en la ruta debemos añadir:
`````
upload.single('upload'), 
`````
Esto nos permite usar el midleware Multer para poder adjuntar una imagen con cada producto, al igual que en Crear. Este endpoint, que sirve para actualizar un producto existente, necesita disponer de un token de admin y adjuntarlo en el head. Al usar Multer, es necesario poner la información dentro del Body, pero en form-data:

Header:

| KEY | VALUE |
| --- | --- |
| authorization | Token |

Body:
```| KEY | VALUE |
| --- | --- |
| CategorieId | 3 |
| SetId | 6 |
| name | cambiado |
| description | cambiado description |
| price| 19.99 |
| stock| 2 |
| upload| 03-pirata-empotrador.jpg |

```

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
        "img": "1653566248315-03-pirata-empotrador.jpg",
        "createdAt": "2022-05-25T14:53:01.000Z",
        "updatedAt": "2022-05-26T11:57:28.000Z"
    }
}
```

-------------------------------
## Modificar producto
**(Admin) POST** - `http://localhost:8080/products/id/3` 
Aquí además, en la ruta debemos añadir:
`````
upload.single('upload'), 
`````
Esto nos permite usar el midleware Multer para poder adjuntar una imagen con cada producto. Este endpoint que sirve para modificar un producto, es necesario disponer de un token de admin y adjuntarlo en el head. Al usar Multer, es necesario poner la información dentro del Body, pero en form-data:

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

Este endpoint nos permite crear diferentes categorías, siempre que tengas el rango de autorización requerido.

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

 Este endpoint que sirve para modificar una categoría, es necesario disponer de un token de admin y adjuntarlo en el head. 

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

Endpoint para borrar categoría por Id. Necesitas tener permisos, por lo que debes rellenar el header con lo siguiente:

Header:

| KEY | VALUE |
| --- | --- |
| authorization | Token |

Body:
```| KEY | VALUE |
| --- | --- |
| CategorieId | 3 |
| SetId | 6 |
| name | cambiado |
| description | cambiado description |
| price| 19.99 |
| stock| 2 |
| upload| 03-pirata-empotrador.jpg |

```

Respuesta:
```JSON
Se ha borrado la categoria con id: 2
```
---------------
# Sets

# Opiniones

# Retos presentados

## Tablas muchos a muchos

## Columnas adicionales en tablas intermedias

# Agradecimientos

# En el tintero

# Autores