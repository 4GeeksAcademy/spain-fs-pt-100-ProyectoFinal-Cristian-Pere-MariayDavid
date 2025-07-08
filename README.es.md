💪 D – M – P – C
D – Discipline: La base de todo cambio. Sin disciplina, no hay resultados.
M – Muscles: Para los que buscan transformar su físico.
P – Progress: Cada día cuenta. Cada repetición suma.
C – Consistency: El verdadero secreto del éxito: constancia día tras día.

🧠 ¿Qué es D – M – P – C?
D – M – P – C es una plataforma web creada para ayudarte a mejorar tu salud de forma integral, combinando nutrición personalizada, rutinas de entrenamiento, seguimiento de progreso y contenido educativo.

Desarrollada con React.js en el frontend y Flask en el backend, la aplicación guía a los usuarios en su camino hacia un estilo de vida más saludable.

🚀 Funcionalidades principales
Registro e inicio de sesión de usuarios.

Perfil personalizado con datos como IMC, objetivos y evolución.

Sugerencias de ejercicios diarios según tu requerimiento calórico.

Rutinas organizadas por niveles y objetivos (ganancia muscular, pérdida de grasa, etc.).

Blog con artículos y consejos sobre entrenamiento, salud y alimentación.

🛠 Tecnologías utilizadas
🔹 Front-End
HTML, CSS

React.js

Bootstrap

Context API

🔹 Back-End
Python

Flask

SQLAlchemy

Autenticación con JWT

🔹 Base de Datos
PostgreSQL (mediante SQLAlchemy)

🔹 DevOps y despliegue
Pipenv

Variables de entorno con .env

Despliegue en Render

⚙️ Instalación del proyecto
Backend
bash
Copiar
Editar
git clone https://github.com/tu-usuario/fitlife-app.git
cd fitlife-app
pipenv install
cp .env.example .env
Configura tu base de datos en .env:

bash
Copiar
Editar
DATABASE_URL=postgres://usuario:contraseña@localhost:5432/fitlife_db
Aplica las migraciones:

bash
Copiar
Editar
pipenv run migrate
pipenv run upgrade
pipenv run start
Frontend
bash
Copiar
Editar
cd frontend
npm install
npm run start
Datos de prueba
Puedes cargar datos de ejemplo con:

bash
Copiar
Editar
pipenv run insert-test-users

🗂 Estructura del Proyecto
bash
Copiar
Editar
/fitlife-app
│
├── /frontend         # Aplicación React
│   └── /src
│
├── /api
├── /routes           # Endpoints Flask
├── /models           # Modelos SQLAlchemy
├── /utils            # Funciones auxiliares
│
├── .env              # Variables de entorno
├── commands.py       # Población de datos
└── README.md



👥 Autores
David Vivar
https://www.linkedin.com/in/david-vivar-martinez/ | https://github.com/DavidVivarMartinez

Maria Fernanda Galvis
LinkedIn | GitHub

Pere Pau Carrasco
LinkedIn | GitHub

Cristian Cerezo
LinkedIn | GitHub

