# MiniappAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0. Para
arrancar el proyecto ejecutar `ng serve`. Navegar a `http://localhost:4200/`.

## Documentación del proyecto

### Toolbar

El toolbar consta de:

- **Titulo**. Siempre visible.
- **Nombre de usuario**. Únicamente es visible cuando el usuario ha iniciado sesión.
- **Botón de Logout**. Cerrará la sesión, borrando la persistencia guardada en el local storage y
  redirigiendo a la página de _login_.

### Footer

Es siempre visible al final de la página.

### Menú público
Inicialmente aparecerá el menu público, que consta de las siguientes entradas: 

- **About**. Página de información sobre el proyecto: documentación, ayuda, y fechas.
- **Home**. Página de bienvenida a la apliación con un enlace a esta documentación para dar soporte al usuario.
- **Login**. Desde está entrada se puede iniciar sesión, una vez iniciada, la 
sesión se almacena en el local storage para añadir persistencia a la aplicación. Consta de dos campos:

  - **Usuario**. Sus validaciones son: 
    1. No puede estar vacío.
    2. Su dominio debe ser @lemoncode.net
    
  - **Password**. Sus validaciones son: 
    1. Debe tener al menos 8 carácteres.
    2. Solo admite caracteres numéricos.
    
    Para inciar sesión, el usuario/contraseña admitido es:

```
usuario: master8@lemoncode.net
password: 12345678
```

### Menú privado

Una vez iniciada sesión,el menu cambiará a un menu privado.

Entradas del menu privado:

- **Dashboard**. Entrada vacía.
- **Gallery**. Galería de fotos, consta de una serie de controles:
  - **Botón de Siguiente**. Pasar a la siguiente foto de la galería.
  - **Botón de Anterior**. Pasar a la foto anterior de la galería.
  - **Botón de Aumentar**. Aumentar el tamaño de la foto seleccionada.
  - **Botón de Disminuir**. Disminuir el tamaño de la foto seleccionada.
  - **Botón de Play**. Activa el carrusel de fotografía cambiando la foto seleccionada cada 2 segundos, una vez pulsado cambiará
  por un **botón de Stop** para parar el carrusel.
- **CRUD**. Entrada vacía.
- **Profile**. Entrada de perfil de usuario, contiene:
  - **Botón de Logout**. Para cerrar sesión desde la página de perfil.
  - **Usuario**. Información sobre el usuario con el que se ha iniciado sesión.
- **Rotate**. Ejercicio de la directiva Rotate, consta de una única imágen y de un campo step: 
  - **Imagen**. Inicialmente aparecerá con una rotación de 45 grados. Al hacer click sobre ella, rotará en el _sentido de las agujas del reloj_. Al
  hacer click sobre ella mientras se mantiene pulsado la tecla Shift, la imagen rotará en _sentido contrario a las agujas del reloj_.
  - **Campo step**. Su valor por defecto será de 10. Sólo admite _números entre 0 y 360_. Permite configurar los grados en los que rotará la imagen.
  

