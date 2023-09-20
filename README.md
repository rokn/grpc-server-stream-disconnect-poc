# GRPC server stream disconnect POC

## How to run

```bash
npm install
npm run start
```

## What will happen

A bunch of data will be received from the server
Then if the internet connection is stopped, nothing will be emitted

## What should be happening

I'm expecting some sort of error from the library so I know there was a problem.
