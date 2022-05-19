# PROJECT_BACKEND

- [ ] Registro de usuarios usando Bcrypt.
- [ ] Login de usuarios + token + middleware.
- [ ] Que sea capaz de crear un CRUD.
- [ ] Al menos una relación Many to Many y otra One to Many.
- [ ] Utilización de seeders

Requisitos imprescindibles del proyecto:
- [ ] Uso de ramas con git, cuando se termine el proyecto deberán quedar dos ramas la master o main y la develop.
- [ ] Presentación de README excelente.

## 1.1.Endpoints
  - _Productos_
- [ ] *CRUD productos*
- [ ] El endpoint de traer productos debe mostrarse junto a la categoría o categorías que pertenece
- [ ] Endpoint que traiga un producto por su id
- [ ] Filtro para buscar producto por nombre
- [ ] Filtro para buscar producto por precio
- [ ] Filtro que ordene los productos de mayor a menor precio
- [ ] Implementa validación a la hora de crear un producto para que se rellene todos los campos y si no se hace que devuelva un mensaje
- [ ] Solo podrás crear, actualizar y eliminar productos si estás autenticado.



  - _Categorías_
- [ ] *CRUD Categorías*
- [ ] El endpoint para ver todas las categorías junto a los productos que tienen
- [ ] Crea un endpoint que devuelva una categoría por id
- [ ] Filtro para buscar categoría por nombre



  - _Pedidos_
- [ ] Crea un endpoint para ver los pedidos junto a los productos que tienen 
- [ ] Crea un endpoint para crear pedidos




 - _Usuarios_
- [ ] Endpoint para registrar un usuario utilizando bcrypt
- [ ] Endpoint para login(utilizando bcrypt +JWT)
- [ ] Endpoint que nos traiga la información del usuario conectado junto a los pedidos que tiene y los productos que contiene cada pedido
- [ ] Endpoint para el logout
- [ ] Implementa validación a la hora de crear un usuario para que se rellene todos los campos y si no se hace que devuelva un mensaje



 - _Seeders_
- [ ] Crea 5 productos con un seeder

## 1.2. Extra		
- [ ] Implementación de roles:
    - Crear un rol Admin y que solo los usuarios con ese rol puedan crear, actualizar y eliminar productos.
- [ ] Investiga que es el middleware multer e implementalo para poder adjuntar imágenes al crear o actualizar productos.
- [ ] Reviews
    - CRUD reviews
    - El endpoint de traer reviews debe mostrarlas junto al usuario que hizo esa review
    - Actualizar el endpoint de traer todos productos y que ahora muestre los productos junto a sus categorías y sus reviews
    - Actualizar el endpoint de traer producto por id y que ahora muestre los productos junto a sus categorías y sus reviews


