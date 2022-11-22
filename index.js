import express from 'express';
import path from 'path';
import {foo} from './node_modules/function.js'
const app = express();
const port = 3000;
app.use(foo)

app.get('/', (req, res) => {
    res.send(foo(req, res));
});

//

app.listen(port, () => {
    console.log('Server is running on port 3000');
});