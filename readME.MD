# Proyecto: Servidor Básico con Express y Node.js

Este es un proyecto básico de un servidor HTTP creado con Node.js y Express. Este proyecto demuestra cómo configurar un servidor básico que responde a solicitudes en diferentes rutas.

## Descripción

El servidor responde a las peticiones HTTP en dos rutas específicas:
- Ruta de inicio (`/`): Responde con un mensaje "Ruta INICIO".
- Ruta de contacto (`/contacto`): Responde con un mensaje "Ruta CONTACTO".

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalación

1. Clona el repositorio o descarga los archivos del proyecto.
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    ```
2. Navega al directorio del proyecto.
    ```sh
    cd nombre-del-directorio
    ```
3. Instala las dependencias necesarias.
    ```sh
    npm install
    ```

## Uso

1. Inicia el servidor.
    ```sh
    node app.js
    ```
2. Abre tu navegador y navega a `http://localhost:3000` para ver la ruta de inicio.
3. Navega a `http://localhost:3000/contacto` para ver la ruta de contacto.