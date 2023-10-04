# Prime Numbers Median Generator

## Setup

To run the project you first need to make sure you have `npm` installed.
Clone the repository and then cd into it.

```
cd fullstack-project-1
```

Have two terminal windows open to the root directory `fullstack-project-1`.
In one window cd into `server` and run `npm install`. Afterwards run `npm run dev`
to start the server.

```
cd server
npm install
npm run dev
```

In the other window cd into `client` and run `npm install`. Afterwards run `npm run dev`
to start the server.

```
cd client
npm install
npm run dev
```

Open the browser to `http://localhost:5173` to see the application.

## Assumptions

I decided that because we were tasked with showing errors based on the user input I
allowed the user to input more than just numbers. If that wasn't one of the requirements
I'd probably just make it so the user is not able to enter anything in the input box
except numbers using RegEx.

The computation, using Sieve of Eratosthenes, begins to timeout the request above a
certain threshold so I set a limit at 10 million and display an error if the input is
larger than that.

I implemented some basic tests for the frontend and backend but if I had more time I
would do more thorough testing. For example, I didn't implement tests for the actual
express server. I would use something like Supertest to test it.
