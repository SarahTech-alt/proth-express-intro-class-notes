console.log('client.js');

$(readyNow);

function readyNow() {
    console.log('DOM ready.');
    // Set up click handler for a button

    // GET THE TRAINS
    getTheTrains();
}

// function getTheTrains() {
//     // Make a request to the server for the trains
//     $.ajax({
//         method: 'GET',
//         url: '/trains',
//     }).then(function(response) {
//         console.log('Success!', response);
        
//     });
//     console.log('After ajax');
    
// }

// function handleSuccess(response) {
//     // response = trains;
//     console.log('success', response);
//     // append the data to the DOM
    
// }