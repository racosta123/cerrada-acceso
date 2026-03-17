# Acceso Cerrada — PWA

App de control de acceso vehicular para cerrada residencial.

## Archivos
- `index.html` — App principal
- `manifest.json` — Configuración PWA
- `sw.js` — Service Worker (offline)
- `icon-192.png` — Icono app (192×192px) ← **debes agregar este archivo**
- `icon-512.png` — Icono app (512×512px) ← **debes agregar este archivo**

## Configuración antes de publicar

Edita estas líneas en `index.html`:

```js
deviceId:  "TU_DEVICE_ID_AQUI",   // ID del Shelly
adminPin:  "admin2024"             // Contraseña del administrador
```

## Publicar en GitHub Pages

1. Crear repositorio nuevo en github.com (público)
2. Subir todos los archivos
3. Ir a Settings → Pages → Branch: main → Save
4. Tu app estará en: `https://TU_USUARIO.github.io/NOMBRE_REPO`

## Instalar en celular

**Android (Chrome):**
- Abrir el link → menú ⋮ → "Añadir a pantalla de inicio"

**iPhone (Safari):**
- Abrir el link → botón compartir → "Añadir a pantalla de inicio"
