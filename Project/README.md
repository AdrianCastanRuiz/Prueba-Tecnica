### Resumen 

Almacenar los logs del fichero json en una colección de MongoDB.
Crear una API para poder acceder y trabajar con los datos, crear un front para poder visualizar e interactuar con los datos, utilizando la API como intermediario entre el front y la base de datos


### Como abordar y presentar la prueba

-   **Clona** este repositorio, no hagas fork.  `https://github.com/Trustyfy/Prueba-Tecnica.git`
-   Crea las carpetas `./server` y `./front` y en ellas crea dos proyectos de node **diferentes**.
-   Cada proyecto debe instalar las dependencias necesarias para funcionar con el comando:
	`npm install`
-   Si utilizas archivos de tipo `.env` incluyelos en el repositorio.
-   Sube el repositorio a tu Github y comparte el enlace, no hagas un pull request. 

### Detalles tecnicos
La prueba consta en tres partes, las cuales tendrán que funcionar correctamente y en su conjunto.

1.  **Base de Datos con MongoDB**
2.  **ServerSide con Node.js**
3.  **Frontend con React**

A continuación, se detallan los objetivos y recomendaciones para cada sección.
Front y back funcionaran en localhost.

### 1. Popular la Base de Datos, MongoDB:

**Objetivo:**

-   Conectarse e interactuar con MongoDB.
-   Crear un script para la importación de objetos a MongoDB.
-	Popular la base da datos al ejecutar `npm run populate` 

**Explicación:**

Se tiene un archivo  `logs.json`  con múltiples registros de servicios, cada uno como un objeto **JSON por líneas separadas**. Los requerimientos son:

1.  Formatear los registros extrayendo únicamente "dt", "message" y "host".
2.  Importar los registros formateados a una nueva colección en MongoDB, tratando cada objeto log como un documento distinto.

No modificar manualmente el archivo  `./logs`. Este script es para uso inicial para precargar la base de datos y no tiene que integrarse con el backend o frontend.

**Recomendaciones:**

-   Utilizar librerías npm como  `mongodb`  o  `mongoose`.
-   Desarrollo en un entorno Node.js.

### 2. ServerSide, Node.js:

**Objetivo:**

-   Conexión e interacción con MongoDB.
-   Creación de endpoints de API para manejar y responder peticiones POST & GET.
-   Ejecutar consultas en MongoDB en respuesta a peticiones válidas.
-   Realizar **búsquedas  por substring** en MongoDB.
- 	Ejecutar el server con el comando `npm run start`

**Explicación:**

El backend, utilizando Node.js, debe establecer conexión con MongoDB e implementar un API endpoint accesible. Las peticiones realizadas al endpoint deben traducirse en consultas por subcadena en MongoDB, devolviendo los resultados en un formato interpretable por el frontend.

**Recomendaciones:**

-   Emplear librerías npm como  `mongodb`  o  `mongoose`  y  `express`  o similares para la creación del servidor.
- 	**No** returnes toda la db y filtres la respuesta en front.

### 3. Frontend, React:

**Objetivo:**

-   Construcción de un frontend utilizando **React**.
-   Diseño de una interfaz con campo de entrada (input) y botón de búsqueda.
-   Enviar peticiones al backend y mostrar las respuestas recibidas.
- 	Que no sea necesario recargar la pagina para hacer otra busqueda.
-   Aplicación de estilos a los elementos de la interfaz.
-	Ejecutar el frontend con el comando `npm run start`.


#### Ejemplos orientativos de paginas terminadas: 	

Ejemplo1:
![Ejemplo1](img/example1.png)

Ejemplo2:
![example3](img/example3.png)