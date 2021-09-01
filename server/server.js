// Require express - gives us a function
const express = require('express');

// Call the function express();
const app = express();
const PORT = 5000;

// Process our POST information
app.use(express.urlencoded({ extended: true}));

// app.use helps us redirect traffic.
// express.static 'serves' our files
app.use(express.static('server/public'));

// Usually name the same as get
    // just be sure to match what is already there with postman 
    // (i.e. key:value pairs)
app.post('/addIngredient', (req,res) => {
    // req.body is the data sent from Postman / client.js
    console.log('in add ingredient:', req.body);
    // Can send more than one bit of information at a time
        // const newIngredients = req.body;
        // ingredientsToUse.push(newIngredients);
            // server side validation would happen here
    ingredientsToUse.push(req.body.food);
    // Send back an acknowledgement
    res.send('Success!');
    // Postman

});

// Each req type makes it clear what the user is trying to do so that when other people look at our code they see 'post' and know 'this must be adding something'

// request has to match type and url

const ingredientsToUse = [
    'Tapioca Flour',
    'Flax Seeds',
    'Honey',
    'Chocolate Chips',
    'Eggs',
    'Quick Oats',
    'Protein Powder',
    'Butter',
    'Flour',
    'Love',
];

// To see something we use GET
// Can use anything as long as it's unique
// You may send back ONE response for request
app.get('/ingredients', (req, res) => {
    console.log('A request was made for ingredients');

    // Sends a response to the client
    res.send(ingredientsToUse);
    console.log('After send');
    // DO NOT SEND TWICE
    // res.send('This will throw an error!')
});

app.get('/greet', (req, res) => {
    res.send('Hello');
});

app.get('/answer', (req,res) => {
    // Valid responses are objects, arrays, strings, boolean, NOT numbers
    // NOT numbers by themselves (e.g. res.send(42))
    res.send({answer: 42});
});

// () => {} arrow function
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});