# Frontend Challenge

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

I focused on improving responsiveness for mobile devices and highlighted the importance of designing a backend and database that support all the necessary features for a functional calendar in a production environment.

### Improvements

- Design the backend and database to store and access event data efficiently.
- Implement multiple calendars or categories that are shown jointly or independently.
- Develop views to add and edit events according to user roles and privileges, including a flow to delete events.



# Frontend Challenge

----------------

## Overview

En este reto de frontend el objetivo es completar tres pruebas independientes: un formulario de registro, una vista de perfil de datos de usuario y un calendario. Cada una de las pruebas esta enfocada en un aspecto específico, por lo cual, las describiré de manera independiente. 

Teniendo eso en cuenta, a nivel de diseño he intentado mantener un estilo de interfaz consistente entre todas las vistas y en cuanto al tema visual en general, manteniendo el minimalismo y la limpieza visual como punto principal a la hora de presentar la información. En cuanto a UX, he abarcado los tamaños de pantallas mas comunes actualmente, utilizando como referencia base el tamaño de pantalla del iPhone SE, el iPad Air y una versión de escritorio que cumpla con el estandar de usabilidad.

----------------

## Formulario de registro

En la vista de registro el objetivo era implementar una serie de validaciones en el navegador para los campos requeridos por el formulario, especificados en la documentación de la prueba. La utilización de las librerías comunes para realización de este tipo de vistas en Vue no estaba permitida. 

Adicionalmente, he realizado un set de tests unitarios que verifiquen el comportamiento de las validaciones realizadas.

### Mejoras 

- Al producirse la integración de esta vista dentro del flujo de la web, es importante brindar al usuario opciones básicas al registro en esta vista, como acceso al login o recuperar la contraseña, que puedan ser accesibles en todo el tiempo de uso.
- Segun las necesidades del desarrollo, es importante contemplar la integracion con un sistema de autenticación externo que gestione los parámetros de creación de las cuentas, para maximizar la seguridad del proceso de registro y login de los usuarios.

----------------


## User Dashboard

Para desarrollar la vista de dashboard de usuario, la prueba proporcionaba un mockup de un objeto en json que contenía una serie de datos que deberían renderizarse, despues de considerar la naturaleza de los mismos y así poder estructurar la información de forma efectiva tanto a nivel de usabilidad como a nivel de seguridad.

La primera tarea fundamental a la hora de desarrollar esta vista es segmentar la información de acuerdo a su naturaleza, para lo cual realicé una serie de clases para gestionar la información de cada bloque de forma independiente. 

Para mantener la reusabilidad del código he creado un componente que gestiona la información recibida y detectar el tipo de maquetación acorde a los datos (en esta prueba hay bloques que poseen solo información en texto, con imagenes o con un mapa integrado, segun el caso), a forma de ejemplificar la forma de presentar al usuario la información bajo la misma estructura visual, pero teniendo la posibilidad de plasmar el tipo de datos que se considere relevantes. Este componente contempla un modo edición "en caliente" que permite enviar cualquier actualización de datos a través de una petición al endpoint encargado (por temas de tiempo y por estar fuera del scope de la prueba, no he realizado la implementación de interacción con la API, pero se muestra visualmente el comportamiento de la actualización de los datos en pantalla)

Adicionalmente he creado tres componentes mas que renderizan los diferentes tipos de datos que se muestran en pantalla, uno para imagenes, uno para mapas (con una integración con leaflet) y uno para inputs (que según el tipo de dato puede enseñar la información de forma completa, parcial u oculta. Esto permite controlar de forma independiente la información que se enseña en pantalla según su nivel de confidencialidad).

Al no tener implementado un sistema de roles o de login para acceder a esta vista, he optado por no permitir la edición de los campos bloqueados. 

### Mejoras 

- Para implementar de forma efectiva y segura este formulario es necesario definir el scope en base al cual se utilizará en producción, para poder integrarla a los roles de usuario establecidos en el desarrollo y asi poder presentar la información de esta vista de acuerdo a los privilegios que tenga el usuario que la consulte. Sobre todo teniendo en cuenta la sensibilidad que tienen algunos de los datos que aqui se enseñan.

- Dependiendo de los casos de uso de la vista, podrían implementarse mas componentes para renderizar la información, como por ejemplo campos de carga de archivos, multiples direcciónes o métodos de pago, etc.

- En caso de que la información de la página se vea incrementada, es importante contemplar la división de los datos con algun método que permita ocultar temporalmente parte de la informacíon (como tabs, collapses, etc.) para manetener una claridad en la información y mejorar la navegabilidad del perfil.


----------------

## Calendario

En el calendario el objetivo era identificar algunos errores en el codigo que impedian el renderizado de la vista. Como objetivo adicional, tambien he incluido los recordatorios de eventos que se encontraban en un objeto json (agregué alguno mas para poder enseñar los eventos ordenados de acuerdo a su horario en cada día). \

También me parecío interesante hacer que esta vista tuviera una responsividad inicial para ajustarse a moviles, ya que no funcionaba en pantallas pequeñas. Aqui me parece importante destacar que la forma en la que estan manejando los datos en esta vista no es optima, y que de cara a una implementación para un entorno de producción es indispensable contar con varios endpoints que proporcionen la información específica para cada acción de la vista de manera individulizada, ya que hay muchas funcionalidades que pueden desplegarse a partir de estos eventos siempre y cuando los datos a consumir por esta vista sean proporcionados de forma efectiva.

### Mejoras

- Inicialmente es esencial diseñar una el backend y la base de datos que contemplen todas las características tanto de los eventos, como de los usuarios y todas las asociaciones que sean relevantes para el calendario. Es indispensable que los datos de los eventos sean almacenables y accesibles en base a filtros por rangos de fecha, tipos de evento, privilegios del usuario, etc. 
- Según las necesidades del desarrollo, podrían implementarse multiples calendarios o multiples categorias que se enseñen de forma conjunta o independiente. 
- De igual forma es necesaria la implementación de una vista para agregar y editar eventos en el calendario, de acuerdo a los roles y privilegios que tenga el usuario al acceder a la información. Igualmente es necesario un flujo para eliminar los eventos, de acuerdo a sus características.

----------------

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
