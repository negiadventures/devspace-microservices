# Microservices Deployment using devspace

This project demonstrates deploying a set of microservices locally using **DevSpace**, **Helm**, and **Docker**. It includes service with the default Helm component chart:

- **Python Application**
- **Next.js Application**
- **NestJS Application**

## Prerequisites

### Install Dependencies

#### 1. Install Node.js and npm

- Download and install Node.js (includes npm): [Node.js Official Website](https://nodejs.org/)
- Verify installation:
  ```bash
  node --version
  npm --version
  ```

#### 2. Install Docker

- Download and install Docker: [Docker Official Website](https://www.docker.com/get-started)
- Verify installation:
  ```bash
  docker --version
  ```

#### 3. Install Kubernetes

- **Option 1**: Use Docker Desktop (recommended for Windows/macOS users). Enable Kubernetes in Docker settings.
- **Option 2**: Install Minikube for local Kubernetes clusters: [Minikube Installation Guide](https://minikube.sigs.k8s.io/docs/start/)
- Verify installation:
  ```bash
  kubectl version --client
  ```

#### 4. Install Helm

- Download and install Helm: [Helm Installation Guide](https://helm.sh/docs/intro/install/)
- Verify installation:
  ```bash
  helm version
  ```

#### 5. Install DevSpace CLI

- Install DevSpace globally using npm:
  ```bash
  npm install -g devspace
  ```
- Verify installation:
  ```bash
  devspace --version
  ```

### Start Local Docker Registry

Start a local Docker registry to store images:

```bash
docker run -d -p 5000:5000 --name registry registry:2
```

## How to Deploy

### 1. Build and Deploy Applications with DevSpace

From the root directory, run:

```bash
devspace purge
devspace build
devspace deploy
```

### 2. Access Applications

| Application | Port  | Description           |
| ----------- | ----- | --------------------- |
| Python App  | 30001 | Python microservice   |
| Next.js App | 30003 | Frontend application  |
| NestJS App  | 30005 | Backend scheduler app |

Access the applications at `http://localhost:<port>`.

---

### Additional commands
Check running pods
```bash
kubectl get pods -n development
```
Check running services
```bash
kubectl get services -n development
```
Check status of a particular pod
```bash
kubectl describe pod next-js-7979dd8787-xtjqm -n development
```
Check logs for a pod
```bash
kubectl logs next-js-7979dd8787-xtjqm -n development
```
NOTE: development is the namespace used for the project, if you want to rename it, create and use a new namespace :
```bash
devspace use namespace yournamespace --create
```
Also, make sure to update devspace.yaml file.