const mongoose= require('mongoose');
const URI = '';
mongoose.set('userNewUrlParser',true);
mongoose.set('userFindAndModify',false);
mongoose.set('userCreateIndex',true);
mongoose.set('userUnifiedTopology',true);

mongoose.connect(URI).
then(()=> console.log('DB is Up!'))
.catch(()=>console.log(err));