# Insurance Risk Wizard - Frontend

Wizard for insurance risk level calculation

## 🌟 Highlights

- 🌙 Dark mode with system preference awareness
- ✨ Clean and simple
- 📱Responsive design for mobile and desktop

## 💻 Technologies used

- <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/TypeScript.svg" width=24/> **Typescript** for the programming language
- <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/React-Light.svg" width=24/> **React** for the UI framework
- <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/MaterialUI-Light.svg" width=24/> **MaterialUI** for the React component library
- <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Vite-Light.svg" width=24/> **Vite** for the build system
- 📋 **React Hook Forms** for the form validation
- <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Jenkins-Light.svg" width=24/> **Jenkins** for CI/CD
- <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Docker.svg" width=24/> **Docker** for CI/CD
- <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/GithubActions-Light.svg" width=24/> **GitHub Actions** for automatic linting with eslint and code formatting with prettier (CI/CD)
- <img src="https://odocs-zod.vercel.app/assets/logo.E2LRXKhl.svg" width=24/> **Zod** for form validation

## 👉 Try it!

Self hosted here: [irw.mysliwczykrafal.pl](https://irw.mysliwczykrafal.pl)

## 📥 Deployment

For the API url in .env, you can use my api: https://irw-api.mysliwczykrafal.pl
If you'd like to create your own. Check the API docs here [https://irw-api.mysliwczykrafal.pl/docs](https://irw-api.mysliwczykrafal.pl/docs)
If you wish to deploy the app yourself follow these steps:

- Install [Docker](https://docs.docker.com/engine/install/) or [Podman](https://podman.io/docs/installation). If you use Podman, replace `docker` command with `podman` in the following steps.
- `git clone` the repository or download and extract the .zip with the source code.
- `cd /directory/with/the/sourcecode`
- `mv .env.example .env`
- Make sure to edit the default variables values in .env
- `docker build -t "irw-frontend" .`
- `docker run -d --rm --name "irw-frontend" -p 8000:8000 "irw-frontend"`
- Visit `http://127.0.0.1:8000` to access main page

## 📝 Project details

Description of work organization and demo deployment details

No AI was used for the code or documentation of this project. I'm not opposed to using AI tools in the right context, but for the purpose of my personal portfolio projects I've decided not to use them.

### Tools and resources

#### Project management

- <img src="https://raw.githubusercontent.com/LelouchFR/skill-icons/refs/heads/main/assets/git-auto.svg" width=24/> **Git** for version control
- <img src="https://raw.githubusercontent.com/LelouchFR/skill-icons/refs/heads/main/assets/uml-auto.svg" width=24/> **UML** for Use case diagram
- <img src="https://raw.githubusercontent.com/LelouchFR/skill-icons/refs/heads/main/assets/jira-auto.svg" width=24/> **Jira** for tracking tasks

#### Deployment

- <img src="https://raw.githubusercontent.com/LelouchFR/skill-icons/refs/heads/main/assets/linux-auto.svg" width=24/> Local homelab server running **Debian Linux**
- 🌎 **Dynamic DNS** with [Dynu](https://www.dynu.com) for hosting with dynamic IP
- <img src="https://github.com/LelouchFR/skill-icons/blob/main/assets/nginx.svg" width=24/> **NGINX** for reverse proxy
- <img src="https://raw.githubusercontent.com/LelouchFR/skill-icons/refs/heads/main/assets/github-auto.svg" width=24/> **GitHub webhook** for triggering Jenkins build and deployment
- 🌐 **HTTPS** with certbot and Let's Encrypt

## 📸 Screenshots

<img src="public/screenshot1.png" width=1024 alt="Light mode"/>  
<img src="public/screenshot2.png" width=1024 alt="Dark mode"/>
<img src="public/screenshot3.png" width=1024 alt="Summary"/>
