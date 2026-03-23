# M.MIND | Cantautor Independiente

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![React 19](https://img.shields.io/badge/React-19.2.4-61dafb.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.4.1-646cff.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38b2ac.svg)](https://tailwindcss.com/)

Sitio web oficial para músico cantautor independiente. Una experiencia visual inmersiva con animaciones suaves y diseño minimalista.

## 🎨 Características

- **Diseño Responsivo** - Compatible con dispositivos móviles, tablets y escritorio
- **Animaciones GSAP** - Efectos suaves con ScrollTrigger al navegar
- **Navegación Intuitiva** - Menú fijo con transiciones elegantes
- **Secciones Interactivas**:
  - 🏠 **Inicio** - Presentación del artista con hero section impactante
  - 💿 **Nuevo Disco** - "Ecos del Tiempo": lista de canciones, extractos y notas de composición
  - 🎸 **Tour** - Fechas de presentación, lugares, precios y disponibilidad de entradas
  - 📸 **Media** - Galería de fotos y videos profesionales en blanco y negro
  - 💬 **Zona de Fans** - Comentarios y preguntas sobre canciones y presentaciones
  - 🛍️ **Merch** - Tienda de merchandising (remeras, posters, ilustraciones, vinilos)

## 🎭 Estilo Visual

- Fondo oscuro (azul profundo)
- Diseño minimalista y moderno
- Fotografías en blanco y negro
- Acentos con efecto glow
- Tipografía limpia y legible
- Animaciones sutiles con GSAP

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| React | 19.2.4 | Biblioteca UI |
| Vite | 6.4.1 | Build tool |
| TailwindCSS | 3.4.17 | Framework CSS |
| GSAP | 3.14.2 | Animaciones |
| Lucide React | 1.0.1 | Iconos |

## 📦 Instalación

### Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/lautxon/m.mind.git

# Navegar al directorio del proyecto
cd m.mind

# Instalar dependencias
npm install
```

## 🚀 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa del build
npm run preview
```

## 📁 Estructura del Proyecto

```
m.mind/
├── public/
│   └── icon.svg
├── src/
│   ├── components/
│   │   ├── FanZone.jsx       # Sección de comentarios de fans
│   │   ├── Footer.jsx        # Pie de página
│   │   ├── Hero.jsx          # Sección principal
│   │   ├── Media.jsx         # Galería multimedia
│   │   ├── Merchandise.jsx   # Tienda de merchandising
│   │   ├── NewAlbum.jsx      # Nuevo álbum "Ecos del Tiempo"
│   │   └── Tour.jsx          # Fechas del tour
│   ├── App.jsx               # Componente principal
│   ├── index.css             # Estilos globales
│   └── main.jsx              # Punto de entrada
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Personalización

### Colores del Tema

Los colores están definidos en `tailwind.config.js`:

- `deep-blue-900`: Fondo principal
- `deep-blue-800`: Fondos secundarios
- `accent-glow`: Color de acento con efecto glow

### Modificar Contenido

Cada sección del sitio está encapsulada en su propio componente dentro de `src/components/`. Edita el archivo correspondiente para actualizar el contenido.

## 📱 Capturas

> Agrega aquí capturas de pantalla de las diferentes secciones del sitio.

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia ISC.

## 👤 Autor

**lautxon**

- GitHub: [@lautxon](https://github.com/lautxon)

## 🙏 Agradecimientos

- [GSAP](https://greensock.com/gsap/) por las increíbles animaciones
- [TailwindCSS](https://tailwindcss.com/) por el framework CSS
- [Lucide Icons](https://lucide.dev/) por los iconos
- [Vite](https://vitejs.dev/) por la herramienta de build

---

<div align="center">

**M.MIND** | Cantautor Independiente

Hecho con ❤️ y música

</div>
