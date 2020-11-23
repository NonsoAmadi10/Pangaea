const express = require('express');
const app = express();
const redis = require('redis')
// connect to redis

const pub = redis.createClient();
const sub = redis.createClient();

pub.on("connect", (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connected to redis')
    }
});

sub.on("connect", (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connected to redis')
    }
});

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get('/', (req, res) => {
    return res.json({
        message: "Welcome to Pangaea Backend Challenge"
    })
})

// publish 

app.post('/publish/:topic', (req, res) => {
    const { message } = req.body;
    const { topic } = req.params
    sub.on("subscribe", (channel, count) => {
        pub.publish(topic, message)
        console.log(count, channel)
    });

    return res.send({
        message: "message published",
        subscriptionChannel: topic
    })

});



// Initialize express
app.listen(8000, () => console.info('Server is running on Port 8080'))