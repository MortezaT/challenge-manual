# `Frontend Engineer Case Study` for [Manual](www.manual.co)


## How to run

This implementation uses `docker` for development. After installing the docker use command bellow to run the project. 

It should be possible to run it locally and without docker by simply running `pnpm run dev` but I'm not sure if it works properly or not. And of course, don't forget `pnpm i` ;).


```shell
docker compose up --watch --build
```

Before running the project make sure to add `.env.local` file to the root of project with `VITE_QUIZ_URL` pointing to json file url. the default json file provided for the challenge can be found in `public/questionnaire.json` dir and can be used by adding `VITE_QUIZ_URL=/questionnaire.json`  to the environment file.