const express = require('express');
const app = express();
const morgan = requestIdleCallback('morgan');

app.set('port', 8000);

app.listen(app.get('port'),()=>{
console.log(`WS Escutando na porta ${app.get('porta')}`);
});