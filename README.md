# Lucky Password

Lucky password is a password manager app that created based on mern stack

## Installation

1- Clone the repo

```bash
git clone https://github.com/ogulcankarayel5/password-manager.git
```

2- In the root directory

```bash
npm install
```

3- In the root directory, you must create .env file that keeps environment variables


```bash
PORT=5000
NODE_ENV=development

MONGODB_URI=<your_mongodb_uri>

#Json web token
JWT_SECRET_KEY=<your_secret_key>
JWT_EXPIRE=<your_expire_time>

#password
clientID=<your google client id>
clientSecret=<your google client secret>

#cookie
JWT_COOKIE=<second for expiring cookie>
```

4- Go to the client directory
```bash
npm install
```

5-Finally, in the root directory,run script
```bash
npm run dev
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
