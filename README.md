☕Coffee-Shop – Aplicación Full Stack de una cafeteria.

ver proyecto: https://precious-begonia-f30aa1.netlify.app

¡Bienvenido a Coffee-Shop!  Una aplicación web de un modelo de una cafeteria construida con el stack MERN (MongoDB, Express.js, React.js, Node.js) e integrada con Stripe para pagos seguros. Este proyecto es Ideal para aprender desarrollo web completo.

Características Principales:
```
-Frontend: Interfaz de usuario moderna y responsiva utilizando React.js y Vite.
-Backend: API RESTful construida con Node.js y Express.js.
-Base de Datos: MongoDB para almacenamiento de datos.
-Autenticación: Registro e inicio de sesión de usuarios.
-Carrito de Compras: Añadir, eliminar y gestionar productos en el carrito.
-Pasarela de Pago: Integración con Stripe para pagos seguros.
-Panel de Administración: Gestión de productos, pedidos y usuarios.
-Despliegue: Aplicación desplegada en Netlify para acceso público.
```

Tecnologías Utilizadas
```
-Frontend: React.js, Vite, CSS
-Backend: Node.js, Express.js
-Base de Datos: MongoDB
-Pasarela de Pago: Stripe
-Despliegue: Netlify
```

 Estructura del Proyecto
```
coffee-shop/
├── admin/          # Panel de administración (React.js)
├── backend/        # Servidor y API (Node.js, Express.js)
├── frontend/       # Aplicación cliente (React.js)
├── README.md
└── .gitignore
```

Instalación y Configuración
1. Clonar el Repositorio
```
git clone https://github.com/Dessie2/coffee-shop.git
cd coffee-shoop
```

3. Configurar el Backend
```
cd backend
npm install
```
Crear un archivo .env con las siguientes variables:
```
MONGO_URI=tu_uri_de_mongodb
STRIPE_SECRET_KEY=tu_clave_secreta_de_stripe
```
Iniciar el servidor:
```
npm start
```
3. Configurar el Frontend
```
cd frontend
npm install
npm run dev
```
Accede a la aplicación en http://localhost:5173

4. Configurar el Panel de Administración
```
cd admin
npm install
npm run dev
```
Accede al panel en http://localhost:5174

¡Gracias por visitar este proyecto! Si te ha sido útil, no dudes en darle una estrella ⭐ en el repositorio y compartirlo con otros desarrolladores.




