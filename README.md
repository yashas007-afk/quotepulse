# 🧠 QuotePulse

QuotePulse is a full-stack web application that delivers insightful quotes through an interactive interface. The project integrates modern DevOps practices like Dockerization and CI/CD pipelines to ensure robust development and seamless deployment.

## 🚀 Project Highlights

- 🔥 Full-stack app with separate **frontend (React)** and **backend (Node.js/Express)** services
- 📦 Fully **Dockerized** with multi-container support via `Docker Compose`
- ⚙️ **CI/CD pipeline ready** for automated build, test, and deploy (GitHub Actions compatible)
- 🌐 RESTful API architecture with modular structure
- 🧪 Ready for integration/unit testing

---

## 🐳 Docker Usage

### 🔨 Build & Run with Docker Compose

```bash
# From root folder
docker compose up --build

Access:
Frontend: http://localhost:4300

Backend API: http://localhost:8080
docker compose down
