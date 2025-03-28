# Instrucciones para subir el proyecto a GitHub

## Requisitos previos
- Tener una cuenta en GitHub (puedes crear una gratis en [github.com](https://github.com))
- Tener Git instalado en tu computadora (descarga desde [git-scm.com](https://git-scm.com/downloads))

## Pasos para subir el proyecto a GitHub

### 1. Crear un nuevo repositorio en GitHub
1. Inicia sesión en tu cuenta de GitHub
2. Haz clic en el botón "+" en la esquina superior derecha y selecciona "New repository"
3. Nombra tu repositorio (por ejemplo, "curso-alto-valyrio")
4. Opcionalmente, añade una descripción
5. Elige si quieres que el repositorio sea público o privado
6. No inicialices el repositorio con README, .gitignore o licencia
7. Haz clic en "Create repository"

### 2. Inicializar Git en tu proyecto local
Abre una terminal o línea de comandos y navega hasta la carpeta donde has guardado los archivos del proyecto (la carpeta que contiene el README.md y todos los archivos del sitio web). Luego ejecuta:

```bash
git init
```

### 3. Añadir los archivos al repositorio local
```bash
git add .
```

### 4. Hacer el primer commit
```bash
git commit -m "Versión inicial del Curso de Alto Valyrio"
```

### 5. Conectar tu repositorio local con GitHub
Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub y `NOMBRE_REPOSITORIO` con el nombre que le diste a tu repositorio:

```bash
git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPOSITORIO.git
```

### 6. Subir los archivos a GitHub
```bash
git push -u origin master
```
o si estás usando la rama principal como "main":
```bash
git push -u origin main
```

## Configurar GitHub Pages (opcional)
Si quieres que tu sitio web esté disponible online a través de GitHub Pages:

1. Ve a tu repositorio en GitHub
2. Haz clic en "Settings" (Configuración)
3. Desplázate hacia abajo hasta la sección "GitHub Pages"
4. En "Source", selecciona la rama principal (master o main)
5. Haz clic en "Save"
6. Después de unos minutos, tu sitio estará disponible en: `https://TU_USUARIO.github.io/NOMBRE_REPOSITORIO`

## Actualizar el sitio en el futuro
Cuando quieras hacer cambios en tu sitio:

1. Realiza los cambios en los archivos locales
2. Añade los cambios:
   ```bash
   git add .
   ```
3. Haz un commit con un mensaje descriptivo:
   ```bash
   git commit -m "Descripción de los cambios realizados"
   ```
4. Sube los cambios a GitHub:
   ```bash
   git push
   ```

## Solución de problemas comunes

### Error de autenticación al hacer push
Si recibes un error de autenticación, es posible que necesites configurar un token de acceso personal:
1. Ve a GitHub → Settings → Developer settings → Personal access tokens
2. Genera un nuevo token con los permisos de "repo"
3. Usa este token como contraseña cuando Git te lo solicite

### Conflictos de fusión
Si has hecho cambios tanto en GitHub como localmente, puedes encontrar conflictos. Usa:
```bash
git pull
```
Y luego resuelve los conflictos manualmente antes de hacer push nuevamente.

### Archivos grandes
GitHub tiene un límite de tamaño de archivo de 100 MB. Si tienes archivos más grandes, considera usar Git LFS o almacenarlos en otro lugar.
