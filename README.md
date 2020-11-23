# Pangaea
Backend Engineering Challenge for pangaea

## Challenge
- For this challenge we'll be recreating a pub / sub system using HTTP requests. Feel free to use whatever langauges or frameworks you wish.

    ### Publisher Server Requirements
    Setting up a subscription
 **POST /subscribe/{TOPIC}**
**BODY { url: "http://localhost:8000/event"}**
- The above code would create a subscription for all events of {TOPIC} and forward data to **http://localhost:8000/event**

Publishing an event
**POST /publish/{TOPIC}**
**BODY { "message": "hello"}**
- The above code would publish on whatever is passed in the body (as JSON) to the supplied topic in the URL. This endpoint should trigger a forwarding of the data in the body to all of the currently subscribed URL's for that topic.

- Testing it all out Publishing an event
**$ ./start-server.sh**

**$ curl -X POST -d '{ "url": "http://localhost:8000/event"}' http://localhost:8000/subscribe/topic1**

**$ curl -X POST -H "Content-Type: application/json" -d '{"message": "hello"}' http://localhost:8000/publish/topic1**
                
- The above code would set up a subscription between topic1 and http://localhost:8000/event. When the event is published in line 3, it would send both the topic and body as JSON to http://localhost:8000

The /event endpoint is just used to print the data and verify everything is working.

### Diagram

![model](https://pangaea-interviews.now.sh/_next/static/images/pubsub-diagram-15a833df7c2a0fd11cade0630fe8e8ba.png)


## Getting Started

### Prerequisites

- Node >=v10.0
- Redis
- Yarn package manager

### Instructions
- Clone this repo on your local machine with ` git clone ` on your terminal

- `cd ` into the cloned directory

- Install all dependencies with `yarn install `

- Run `./start-server.sh` to start the server

- Test all endpoints using curl according to challenge specifications

## Author

- Chinonso Amadi