# Frontend Challenge

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


## Overview

In this frontend challenge, the goal is to complete three independent tests: a registration form, a user data profile view, and a calendar. Each test focuses on a specific aspect, which I will describe independently.

I have attempted to maintain a consistent interface style across all views and a general visual theme focused on minimalism and visual cleanliness as the main point when presenting information. Regarding user experience (UX), I have considered the most common screen sizes, using the screen size of the iPhone SE, the iPad Air, and a desktop version that meets usability standards as a base reference.

## Registration Form

The objective of the registration view was to implement a series of browser validations for the form fields required, as specified in the test documentation. The use of common Vue libraries for these types of views was not allowed.

Additionally, I conducted a set of unit tests to verify the behavior of the validations performed.

### Improvements

- Integrate basic registration options, such as access to login or password recovery, accessible at all times.
- Consider integration with external authentication systems to maximize the security of the registration and login process.

## User Dashboard

For the user dashboard view, a mockup of a json object containing a series of data that should be rendered was provided. The first task was to segment the information according to its nature, using classes to manage the information of each block independently.

I created a component to manage the received information and determine the type of layout according to the data, which can include text only, images, or an integrated map. This component allows an "on-the-fly" editing mode to send any data updates through a request to the designated endpoint.

Furthermore, I created three more components to render different types of data: images, maps (with Leaflet integration), and inputs, thus controlling the information displayed according to its confidentiality level.

### Improvements

- Define the production use scope to integrate it with established user roles and present the information according to user privileges.
- Implement more components to render information as needed, such as file upload fields or multiple addresses.
- Consider dividing the data with methods that allow temporarily hiding part of the information to maintain clarity and improve navigability (such as tabs or collapsed elements).

## Calendar

The goal with the calendar was to identify errors in the code that prevented proper rendering and to add event reminders from a json object, thus improving the display of events ordered by schedule.

I also focused on improving responsiveness to correctly render on all types of devices, some of the decisions I made to render the content on mobile should be replaced once the backend that feeds this view is implemented.

### Improvements

- Design the backend and database to store and access event data efficiently.
- Implement multiple calendars or categories that are shown jointly or independently.
- Develop views to add and edit events according to user roles and privileges, including a flow to delete events.





## Descripción

En este reto de frontend, el objetivo es completar tres pruebas independientes: un formulario de registro, una vista de perfil de datos de usuario y un calendario. Cada prueba está enfocada en un aspecto específico, que describiré de manera independiente.

He intentado mantener un estilo de interfaz consistente entre todas las vistas y un tema visual general enfocado en el minimalismo y la limpieza visual como punto principal al presentar la información. Respecto a la experiencia de usuario (UX), he considerado los tamaños de pantallas más comunes, utilizando como referencia base el tamaño de pantalla del iPhone SE, el iPad Air y una versión de escritorio que cumpla con el estándar de usabilidad.

## Formulario de Registro

El objetivo de la vista de registro era implementar una serie de validaciones en el navegador para los campos requeridos por el formulario, especificados en la documentación de la prueba. No estaba permitida la utilización de librerías comunes de Vue en este formulario.

Adicionalmente, realicé un set de tests unitarios que verifican el comportamiento de las validaciones realizadas.

### Mejoras

- Integrar opciones básicas al registro, como acceso al login o recuperación de contraseña, accesibles en todo momento.
- Contemplar la integración con sistemas de autenticación externos para maximizar la seguridad del proceso de registro y login.

## User Dashboard

Para la vista de dashboard de usuario, se proporcionó un mockup de un objeto en json con datos que deberían renderizarse. La primera tarea fue segmentar la información de acuerdo a su naturaleza, utilizando clases para gestionar la información de cada bloque de forma independiente.

Creé un componente para manejar la información recibida y determinar el tipo de maquetación según los datos, que pueden incluir solo texto, imágenes o un mapa integrado. Este componente permite un modo edición "en caliente" para enviar actualizaciones de datos a través de una petición al endpoint correspondiente.

Además, creé tres componentes más para renderizar diferentes tipos de datos: imágenes, mapas (con integración de Leaflet) y inputs, el cual controla la información mostrada según su nivel de confidencialidad.

### Mejoras

- Definir el scope de uso en producción para integrarla a los roles de usuario establecidos y presentar la información según los privilegios del usuario.
- Implementar más componentes para renderizar la información según sea necesario, como campos de carga de archivos o múltiples direcciones / métodos de pago.
- Considerar la división de los datos con métodos que permitan ocultar temporalmente parte de la información para mantener la claridad y mejorar la navegabilidad.

## Calendario

El objetivo con el calendario era identificar errores en el código que impedían su renderizado adecuado y mostrar recordatorios de eventos desde un objeto json.

Me enfoqué también en mejorar la responsividad para poder renderizar correctamente en todo tipo de dispositivos, algunas de las decisiones que tomé para renderizar el contenido en mobile deben sustituirse una vez que el backend que alimente a esta vista esté implementado.

### Mejoras

- Diseñar el backend y la base de datos para almacenar y acceder a los datos de los eventos de manera eficiente.
- Implementar múltiples calendarios o categorías que se muestren de forma conjunta o independiente.
- Desarrollar vistas para agregar y editar eventos según los roles y privilegios del usuario, incluyendo un flujo para eliminar eventos.