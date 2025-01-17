# Challenge Frontend Sr - PinApp

![Logo de PinApp](https://media.licdn.com/dms/image/v2/C4D0BAQE4Zs_z2J3VVg/company-logo_200_200/company-logo_200_200/0/1660681834521/pinapp_development_logo?e=2147483647&v=beta&t=say4axwNYApYllR5m3jiOrk7uEDnyIitOPhLA57eVhM)

Este repositorio contiene la solución al challenge propuesto por **PinApp** para un desarrollador frontend senior. El proyecto fue desarrollado utilizando **Next.js** y se encuentra estructurado en tres carpetas principales: `api`, `client` y `pinapp-zip`.

---

## 🚀 Instalación y Configuración

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/usuario/pinapp-challenge.git
2. Accede a la carpeta client del proyecto:
   ```bash
   cd client
3. Instala las dependencias necesarias:
   ```bash
   npm install
4. Inicia el proyecto:
    ```bash
    npm run dev

Esto levantará la aplicación en el puerto **3000**. Puedes acceder a ella navegando a `http://localhost:3000` en tu navegador.

## 📂 Estructura del Proyecto

### `/client`
Contiene el código principal de la aplicación frontend desarrollada con Next.js. Aquí se encuentran las vistas principales, los componentes reutilizables y toda la lógica de negocio implementada.

### `/api`
Incluye pruebas realizadas con `json-server` para simular un backend simple. Este servidor corre por defecto en el puerto `3001`.

**Nota**: No es necesario levantar esta carpeta, ya que se utilizó únicamente como soporte para pruebas durante el desarrollo.

### `/pinapp-zip`
Contiene los recursos brindados por la empresa para orientar al desarrollo de esta prueba técnica.


## 🛠️ Tecnologías Utilizadas

El proyecto utiliza las siguientes tecnologías y herramientas:

- **React con Next.js**: Para la construcción de la aplicación web y el enrutamiento de las páginas.
- **TailwindCSS**: Para el diseño y los estilos de los componentes.
- **TypeScript**: Para el tipado estático, aumentando la fiabilidad del código.
- **JSON Server**: Para simular un backend y realizar pruebas de la aplicación.
- **Vercel**: Para el despliegue y hosting del proyecto.

## 📋 Descripción de las Vistas

### 🏠 **Vista de Inicio**
- Muestra un listado de productos disponibles.
- Cada tarjeta de producto contiene información como:
  - Nombre
  - SKU
  - Categoría
  - Marca
  - Precio
- Cada tarjeta incluye un botón para ver el detalle del producto.

### 📄 **Vista de Detalle de Producto**
- Presenta información detallada de un producto seleccionado, incluyendo:
  - Imagen
  - Nombre
  - SKU
  - Descripción
  - Categoría
  - Marca
  - Precio
  - Unidades disponibles
- Estilo mejorado con gradientes y bordes para resaltar la tarjeta del producto.

### 🔄 **Estados de Error**
- Se diseñaron componentes reutilizables para manejar errores como:
  - Producto no encontrado (404).
  - Errores internos del servidor (500).
- Los mensajes de error son estilizados con íconos y fondos destacados.

## 🚀 Despliegue

El proyecto ha sido desplegado en **Vercel**. Puedes acceder a la aplicación en el siguiente enlace:

🔗 [Demo en Vercel](#)

## 🙏 Agradecimientos

Quiero agradecerles especialmente a todo el equipo RRHH y IT de PinApp por el tiempo dedicado a revisar este proyecto y por brindarme la oportunidad de participar en este desafío. Ha sido una experiencia muy enriquecedora que me permitió aplicar y demostrar mis habilidades técnicas.

Desarrollado con ♥ por **[Lucas Ruiz](https://github.com/lucasruiz12/)**