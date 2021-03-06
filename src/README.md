# Markdown Links

## Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## Introducción

[Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).
Esto nos va a permitir ejecuta JavaScript en el entorno del sistema operativo,
ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder interac
tuar con el sistema operativo, sistema de archivos, redes, ...


## Objetivos

El objetivo práctico de este proyecto es crear una
**librería** (o biblioteca - _library_) en JavaScript.


## Consideraciones generales

Librería implementada en JavaScript para ser ejecutada con
Node.js.


Tópicos:

- [Node.js](https://nodejs.org/en/)
- [Node.js y npm](https://www.genbeta.com/desarrollo/node-js-y-npm)
- [Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?](http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175)
- [Módulos(CommonJS)](https://nodejs.org/docs/latest-v0.10.x/api/modules.html)
- [Semver](https://semver.org/)
- [Path](https://nodejs.org/api/path.html)
- [File System](https://nodejs.org/api/fs.html)
- [marked](https://github.com/markedjs/marked)
- [Asíncronía en js](https://carlosazaustre.com/manejando-la-asincronia-en-javascript/)


## Instalación

## Previamente

Para utilizar md-links, debes tener instalado previamente en tu equipo node.js y seguir las siguientes indicaciones:

* Debes instalar el módulo fetch de node.
* De esta manera:

~~~

$ npm install node-fetch --save

~~~

### Integración de md-links a tu trabajo

* Instala la librería con el siguiente comando con la terminal situada en el directorio de tu proyecto
~~~
$npm install md-links
~~~

* Para analizar un directorio que contenga archivos .md, ejecuta el siguiente comando:
~~~
$md-links <ruta_directorio>
~~~

* Para analizar un archivo específico .md, ejecuta el siguiente comando:
~~~
$md-links <ruta_archivo>
~~~

* En ambos casos, si deseas validar funcionalidad de los links contenidos en los archivos .md, sólo debes agregar un espacio, seguido del comando "--validate". El siguiente ejemplo muestra como se efecturía la operación, situándonos en la carpeta contenedora del archivo "ejemplo_archivo_md1.md". Si estás afuera del nivel de tu archivo a analizar, simplemente entrega la ruta relativa a tu ubicación actual.
~~~
$md-links ejemplo_archivo_md1.md --validate
~~~


### Librería

Al ser ejecutados los comandos correctamente, la libería mostrará en la terminal los links funcionales y caídos del documento que previamente fue asignado para escanear, identificando la ruta al archivo, el link propiamente tal, la línea en que está contenido en el archivo y según si deseas validar el link o no, mostrará la respuesta respectiva al hacer una petición http.

### Planificación

La planificación fue realizada con la herramienta [GitHub projects](https://github.com/brenduchiz/cdmx-2018-01-FE-markdown/projects).

### Versiones
**Versión 1.0.0**

**Versión 1.0.2** 

**Versión 1.0.3** 

**Versión 1.0.4** 

### Link Proyecto en npm
[md-status]()

___


### Desarrollado por 

Brenda Morales 









