<h1 align="center">
    <img alt="Project Cover" src=".github/cover.png" />
</h1>

<br>

## 🧪 Tecnologies

This project was developed with the following technologies:

- [ReactJS](https://react.dev/)
- [NodeJS](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [Postgres](https://www.postgresql.org/)
- [Styled Components](https://styled-components.com/)

## 🚀 Running the project

Clone the repo

```bash
$ git clone https://github.com/daniilomello/mycontacts-app.git
```

To run the project, follow the steps below:

```bash
# Install the dependencies
$ cd mycontacts-app/server
$ yarn
```

Use Docker for the database - [Postgres](https://hub.docker.com/_/postgres)
```bash
# Download the image
$ docker pull postgres

# Create the container
$ docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres

# Check if the container is already running
$ docker ps

# If is not, start the container
$ docker start pg
```

Start the express server
```bash
$ yarn dev
# Server wil be running on http://localhost:3001
```

Start the React app
```bash
# Access the React app folder
$ cd mycontacts-app/web

# Install the React dependencies
$ yarn

# Run the application
$ yarn dev
# App will be running on http://localhost:3000
```

## 📝 License

This project is licensed under the MIT.

---

Build with 💜 by Danilo Mello 👋🏻
