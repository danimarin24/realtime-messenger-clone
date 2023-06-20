
# Real-Time Messenger Clone: Next.js 13, React, Tailwind, Prisma, MongoDB, NextAuth, Pusher (2023)


Este proyecto, simula la clonación de la aplicación tan famosa de mensajería de Facebook, messenger. Es un proyecto hecho desde 0, con ayuda de un vídeotutorial de youtube.

Gracías ha este proyecto he podido aprender diversas funcionalidades del Framework React, que desconocía, y además me he adentrado un poco de lleno en el lenguaje TypeScript, al cual le veo mucho potencial.
## Ejecutar localmente en modo de desarrollo

Para empezar, simplemente clona el repositorio y ejecuta `npm install && npm run dev`:

    git clone https://github.com/danimarin24/realtime-messenger-clone.git

## Instalar los paquetes necesarios
    npm install

## Configurar el archivo .env

    DATABASE_URL=
    NEXTAUTH_SECRET=

    NEXT_PUBLIC_PUSHER_APP_KEY=
    PUSHER_APP_ID=
    PUSHER_SECRET=

    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

    GITHUB_ID=
    GITHUB_SECRET=

    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=

## Configurar Prisma

    npx prisma db push

## Iniciar la Aplicación

    npm run dev

Si desea ejecutar este sitio en producción, debe instalar los módulos y luego construir el sitio con npm run build y ejecutarlo con npm start:

    npm install
    npm run build
    npm start

Debe ejecutar `npm run build` de nuevo cada vez que realice cambios en el sitio.

Nota: Si ya está ejecutando un servidor web en el puerto 80 (por ejemplo, los Mac suelen tener el servidor web Apache ejecutándose en el puerto 80) todavía puede iniciar el ejemplo en modo de producción pasando un puerto diferente como una variable de entorno al iniciar (por ejemplo, `PORT=3000 npm start`).

## Authors

- [@danimarin24](https://github.com/danimarin24)
VideoTutorial:
- [@AntonioErdeljac](https://github.com/AntonioErdeljac/)
- [Video Link](https://www.youtube.com/watch?v=PGPGcKBpAk8)

