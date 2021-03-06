# Example Sequelize with Express

Example Sequelize with Express.

---

## Stack

- Node.js
- Express
- Sequelize
- PostgreSQL

---

## Installation

### Install dependencies

```
yarn
```

### Install global `sequelize-cli` package

```
npm install --global sequelize-cli
```

```
yarn global add sequelize-cli
```

---

## Setup

### Run setup.sh

```sh
./setup.sh
```

### Setup environment variables

Edit the `.env` file according to your database configuration.

```
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
DB_HOST=
DB_DIALECT=
```

Becomes like this:

```
DB_USERNAME=username
DB_PASSWORD=secret_password
DB_DATABASE=database_name
DB_HOST=localhost
DB_DIALECT=postgres
```

### Create database with PostgreSQL

```sh
$ createdb database_name
```

### Run migrations and seeders

```sh
yarn migrate
# it will run
# sequelize db:migrate
```

```sh
yarn seed
# it will run
# sequelize db:seed:all
```

---

## Development

### Run Express app in development

```sh
yarn dev
```

### Run Express app in production

```sh
yarn start
```

```sh
pm2 start index.js --name example-sequelize-express
```

---

## Production

Copy and paste all environment variables.

```sh
heroku run npm install -g yarn -a app-name
heroku run yarn -a app-name
heroku run yarn migrate -a app-name
heroku run yarn seed -a app-name
```

---

## License

MIT
