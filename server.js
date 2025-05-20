const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Our pipeline is working and application builds properly \n');
});

app.listen(3000, () => {
    console.log('Server is up on 3000');
})
