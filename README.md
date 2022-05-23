# PROJECT_BACKEND

- [X] Registro de usuarios usando Bcrypt.
- [X] Login de usuarios + token + middleware.
- [X] Que sea capaz de crear un CRUD.
- [X] Al menos una relación Many to Many y otra One to Many.
- [X] Utilización de seeders

Requisitos imprescindibles del proyecto:
- [X] Uso de ramas con git, cuando se termine el proyecto deberán quedar dos ramas la master o main y la develop.
- [ ] Presentación de README excelente.

## 1.1.Endpoints
  - _Productos_
- [X] *CRUD productos*
- [X] El endpoint de traer productos debe mostrarse junto a la categoría o categorías que pertenece
- [X] Endpoint que traiga un producto por su id
- [X] Filtro para buscar producto por nombre
- [/] Filtro para buscar producto por precio
- [X] Filtro que ordene los productos de mayor a menor precio
- [ ] Implementa validación a la hora de crear un producto para que se rellene todos los campos y si no se hace que devuelva un mensaje
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
- [ ] Investiga que es el middleware multer e implementalo para poder adjuntar imágenes al crear o actualizar productos.
- [X] Reviews
    - CRUD reviews
    - El endpoint de traer reviews debe mostrarlas junto al usuario que hizo esa review
    - Actualizar el endpoint de traer todos productos y que ahora muestre los productos junto a sus categorías y sus reviews
    - Actualizar el endpoint de traer producto por id y que ahora muestre los productos junto a sus categorías y sus reviews


