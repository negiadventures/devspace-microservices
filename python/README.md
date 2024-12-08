# Python Application

This is a Python-based microservice deployed locally using a **custom Helm chart**.

## Directory Structure

```plaintext
python-app/
├── Dockerfile
├── src/
```

## Prerequisites

1. Install Python 3.x: [Python Installation Guide](https://www.python.org/downloads/)
2. Install Docker: [Docker Installation Guide](https://www.docker.com/get-started)

## How to Run

## How to Run independent without devspace

### 1. install dependencies

```bash
pip install -r requirements.txt
```

### 2. Start application

```bash
gunicorn --bind 0.0.0.0:8080 app:app
```

### 3. Access the Application

The Python application is available at:

```plaintext
http://localhost:8080
```
