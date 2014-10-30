# Content Security Policy Level 2 - Demo

Demo utilizada en la charla de [GSickMinds - Galicia 2014](http://gsickminds.net).

## Enlaces

* Presentación:

    http://www.slideshare.net/caridy/gsickminds-final

* Especificaciones de CSP Level 2.0:

    http://www.w3.org/TR/CSP2/


## Instalación de requisitos

### nodejs

* nodejs@0.10.x (_latest stable version recommended_), you can check your current version by doing `node -v` in your terminal.
* To install nodejs, go to http://nodejs.org/, download node.js installer and follow instructions. Mac OS, Windows, and Linux are supported.

### Git

* windows & osx: http://git-scm.com/downloads
* linux: use apt-get, yum, etc.

## Instalación

Clonar e instalar la demo:

```bash
git clone https://github.com/caridy/csp.git
cd csp
npm install
npm start
```

Una vez ejecutado cada uno de esos comandos en la terminal, debemos recibir el siguiente mensaje:

```bash
applicación corriendo en: http://127.0.0.1:3000/secure
también puede visitar: http://127.0.0.1:3000/sloppy
```

Visite cualquiera de esas dos páginas. `/secure` implementa las directivas de CSP, mientras que `/sloppy` solo implementa el modo reporte.


## Stuck?

Feel free to hit me directly at [@caridy]

## License

MIT

[@caridy]: http://twitter.com/caridy
