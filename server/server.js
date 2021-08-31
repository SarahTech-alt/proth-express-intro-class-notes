// Require express - gives us a function
const express = require('express');

// Call the function express();
const app = express();
const PORT = 5000;

// app.use helps us redirect traffic.
// express.static 'serves' our files
app.use(express.static('server/public'));

// () => {} arrow function
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});