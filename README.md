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

 - Sobre el proyecto

    - Instalacion y despliegue

    - Tecnologias utilizadas

    - Origen

    - Objetivos

    - Concepto e inspiración

- [Documentacion de API](#documentacion-de-api)

    - [Usuarios](#usuarios)

    - Pedidos

    - Productos

    - Categorias

    - Sets

    - Opiniones

- Retos presentados

    - Tablas muchos a muchos

    - Columnas adicionales en tablas intermedias

- Agradecimientos

- En el tintero

- Autores


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




<!-- REVISAR -->

## Cerrar sesión

## ¡¡¡DA ERROR!!!






----------------------

<!-- REVISAR -->

## Modificar datos de usuario

**(Registrado) PUT** - `http://localhost:8080/users/id/:id`

Endpoint que sirve para para modificar los datos de usuarios, para su funcionamiento es necesario que se le pase en el body los datos a modificar y en el header el token activo

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