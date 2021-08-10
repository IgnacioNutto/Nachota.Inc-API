const mongoose = require('mongoose');
const uri = "mongodb+srv://ignacionutto:12345abcde@cluster0.wb1zm.mongodb.net/nachotainc?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});