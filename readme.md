# URL SHORTNER

Idk why I created it but I was bored during online class and decided to create something useless.

# How to use

1. Run `yarn install` or `npm install` to install all the dependencies.
2. Run `yarn run build` or `npm run build` to make a build.
3. Last but not least, run `yarn run start` or `npm run start`.

Make sure to have a `.env` file, you can find the template below:

```
DB_URL= <your mongoose db url>
PORT= <port to run the server on, default 3000, not required>
ORIGIN= <the main part of the url, default is http://localhost:PORT>
```

Make sure you don't have spaces in your `.env` file, it can break the system. Also remove the comments!
