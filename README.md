# Prueba Técnica Fullstack + DevOps

Este proyecto está dividido en dos partes:

- **Frontend** (React)
- **Backend** (Node.js + MongoDB)

## 🔧 Requisitos previos

- Node.js (v16+ recomendado)
- MongoDB (local o Docker)
- Docker y Docker Compose (opcional para despliegue)
- Git

---

## 📁 Estructura del proyecto


- `/backend`
- `/frontend`

---

## ⚙️ Configuración de Entorno

### 🔙 Backend

Crea un archivo `.env` dentro del directorio `backend` con el siguiente contenido:

```env
PORT=3001
MONGO_URI=mongodb://localhost:27017/PruebaTecnicaNebulae
MONGO_DB=admin
```
---

### 🔜 Frontend

Crea un archivo .env dentro del directorio frontend con el siguiente contenido:

```env
REACT_APP_API_URL_BASE=http://localhost:3001
REACT_APP_API_URL_API=/api
```
