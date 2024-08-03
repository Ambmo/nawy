# NawyApp README
Nawy Real Estate
---

## Overview

This project is composed of three layers:
- **Backend (BE)**: A Node.js application.
- **Frontend (FE)**: A Next.js application.
- **Database (DB)**: A PostgreSQL database.

## Project Structure

```plaintext
project-root/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── app.js
│   └── ... (other backend files)
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── app
│   ├── next.config.js
│   └── ... (other frontend files)
├── db/
│   ├── your_database.backup
│   └── ... (other database files)
└── docker-compose.yml
```

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Setup and Configuration

1. ## Create a new folder on your host machine
   Go to your desired location and create a "<repository-directory>" to contain the project
   
2. **Clone the Repository**

   ```bash
   git clone https://github.com/Ambmo/nawy.git
   cd <repository-directory>
   ```

3. **Build and Start Containers**

   Use Docker Compose to build and start all containers:

   ```bash
   docker-compose up --build
   ```

   This command will:
   - Build Docker images for the backend and frontend.
   - Start containers for the backend, frontend, and database.
   - Create and configure the necessary network and volumes.

### Development Mode

1. **Start Containers in Development Mode**

   By default, `docker-compose up` will start the containers. For development purposes, you can run:

   ```bash
   docker-compose up --build
   ```

2. **Access the Applications**

   - **Frontend**: Visit `http://localhost:3000` in your browser.
   - **Backend**: The backend will be accessible via API calls (usually at `http://localhost:5000`).

   You can view logs from the frontend and backend by using:

   ```bash
   docker-compose logs -f
   ```

3. **Development Commands**

   - **Frontend**: In the frontend container, the application will automatically run in development mode. You can use the following command in the `frontend` container to start the development server:

     ```bash
     npm run dev
     ```

   - **Backend**: The backend will run in development mode automatically. You can manually run the server with:

     ```bash
     node app.js
     ```

### Production Mode

1. **Start Containers in Production Mode**

   For production mode, you can build and start the containers with:

   ```bash
   docker-compose -f docker-compose.prod.yml up --build
   ```

   You should create a `docker-compose.prod.yml` file if you have specific production configurations. The production file might look similar but usually has different environment variables and configurations for optimized performance.

2. **Build the Frontend Application**

   In production mode, you need to build the frontend application. The `Dockerfile` for the frontend should handle this automatically. If you need to manually build, run:

   ```bash
   npm run build
   ```

3. **Access the Applications**

   - **Frontend**: Visit `http://localhost:3000` in your browser.
   - **Backend**: The backend will be accessible via API calls (usually at `http://localhost:5000`).

### Docker Entrypoint Scripts

You can use entrypoint scripts to automate tasks on container startup. For example, you might have scripts to seed the database or run migrations. Ensure the scripts are executable:

```bash
chmod +x backend/entrypoint.sh
chmod +x frontend/entrypoint.sh
```

**For Windows:**

- To make scripts executable, you may need to use WSL (Windows Subsystem for Linux) or Git Bash.

### Environment Variables

Ensure your `.env` files are correctly set up in the backend directory. Example `.env`:

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=admin
DB_PASS=admin
DB_NAME=ApartmentsDB
```

**For Docker Compose**, you might also use a `.env` file for Docker Compose variables. Create a `.env` file at the project root if needed.

### Troubleshooting

- **Internal Server Error**: Ensure all services are correctly defined and running. Check Docker logs for errors.
- **API Version Issues**: Ensure Docker and Docker Compose are up-to-date

## Next Steps
This basic project will be added on Docker Hub as well, soon.

## Contribution

Feel free to open issues or submit pull requests if you have suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This `README.md` provides clear instructions on setting up, running, and troubleshooting the project, as well as handling Docker and Docker Compose commands for both development and production environments. Adjust paths and commands as needed based on your actual setup and project structure.
