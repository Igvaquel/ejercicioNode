const express = require('express');
const app = express();

const { initializeDB } = require("./config/db-config");
const PORT = 9050;

const { bookRouter, libraryRouter, authRouter } = require("./routes");




app.use(express.json()); 


app.use('/library', libraryRouter);
app.use('/book', bookRouter);
app.use('/login', authRouter );





app.listen(PORT , async() => {
    await initializeDB();
    console.log(`Server running in ${PORT}`);
});
 