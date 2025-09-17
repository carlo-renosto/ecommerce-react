# Ecommerce React

Aplicación web frontend de un e-commerce creada con React + Vite y utilizando Firestore como base de datos.

---

## Requisitos
- Node.js >= 22.18.0 (Versión LTS recomendada)
- npm (Node Package Manager)

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/carlo-renosto/ecommerce-react.git
```

2. Navegar hasta la carpeta del repositorio:

```bash
cd ecommerce-react
```

3. Ejecutar el siguiente comando: 

```bash
npm install
```

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

---

## Configuración de Firebase

1. Crear un proyecto nuevo en Firebase Console

2. En la sección Configuración del proyecto > Tus apps > Configuración del SDK, copiar las credenciales de la aplicación web.

3. Crear un archivo .env en la carpeta raíz del proyecto y agregar las siguientes variables (usando las credenciales):

```bash
VITE_APP_ID=your_vite_app_id 
VITE_PROJECT_ID=your_vite_project_id 
VITE_API_KEY=your_vite_api_key 
VITE_AUTH_DOMAIN=your_vite_auth_domain 
VITE_STORAGE_BUCKET=your_vite_storage_bucket 
VITE_MESSAGING_SENDER_ID=your_vite_messaging_sender_id
```