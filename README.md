# ¡Che, Qué Clima! <img src="./img/globe.gif" alt="Che, Qué Clima" style="width: 30px; height: auto;">

Esta aplicación web "¡Che, Qué Clima!" permite a los usuarios buscar el clima actual y detalles meteorológicos de una ciudad específica. Utiliza la API de OpenWeatherMap para obtener datos en tiempo real y ofrece una interfaz interactiva para mostrar la información de manera clara y visualmente atractiva.

## Funcionalidades

- **Búsqueda por Ciudad:** Los usuarios pueden escribir el nombre de una ciudad en el campo de entrada y obtener sugerencias de ciudades correspondientes a medida que escriben.
- **Visualización del Clima:** Después de seleccionar una ciudad de las sugerencias o hacer clic en el botón de búsqueda, se muestra información detallada sobre el clima actual en la ciudad seleccionada.
- **Modo Oscuro (En Construcción):** Se ha implementado un botón para activar el modo oscuro, que está actualmente en construcción para la próxima entrega.

## Tecnologías Utilizadas

- **HTML/CSS/JavaScript:** La aplicación está desarrollada utilizando las tecnologías estándar del lado del cliente para la web.
- **OpenWeatherMap API:** Se utiliza la API de OpenWeatherMap para obtener datos meteorológicos en tiempo real.
- **Bootstrap (CDN):** Se ha utilizado Bootstrap para el diseño y los estilos responsivos.
- **Iconos:** Todos los iconos utilizados fueron descargados de [Weather Icons by Bas Milius](https://github.com/basmilius/weather-icons). [Web: Meteocons.com](https://bas.dev/work/meteocons)

## Instrucciones de Uso

1. Clonar el repositorio o descargar los archivos.
2. Abrir `index.html` en un navegador web compatible.
3. Ingresar el nombre de una ciudad en el campo de búsqueda.
4. Seleccionar una ciudad de las sugerencias o presionar Enter/buscar.
5. Se mostrará la información del clima actual para la ciudad seleccionada.

## Estructura del Código

- **`index.html`:** Contiene la estructura HTML de la aplicación, incluyendo los campos de entrada, botones y contenedores para mostrar la información del clima.
- **`style.css`:** Archivo CSS para estilos personalizados de la aplicación.
- **`script.js`:** Archivo JavaScript principal que controla la lógica de la aplicación.
  - **Funciones Principales:**
    - `fetchData()`: Realiza la solicitud a la API de OpenWeatherMap y muestra los datos del clima.
    - `displayWeatherData(data)`: Formatea y muestra los datos del clima en la interfaz de usuario.
  - **Event Listeners:**
    - `searchButton`: Busca el clima al hacer clic en el botón de búsqueda.
    - `cityInput`: Detecta la entrada del usuario y muestra sugerencias de ciudades.
    - `suggestionContainer`: Maneja la selección de sugerencias de ciudad.
    - `modoOscuroButton`: Botón para activar el modo oscuro (en construcción).
- **`country_names.js`:** Archivo con nombres de países para mostrar en la interfaz de usuario.

## CoderHouse

Este proyecto forma parte de la Segunda Pre-entrega del curso de JavaScript, Comisión #53965.

- **[Profe]** Matias Coletta
- **[Tutor]** Milton Salazar

## Autor

Lucas Ponzoni  
Av. Bordabehere 4893  
Rosario, República Argentina  
Correo electrónico: lucasponzoni@gmail.com.ar

