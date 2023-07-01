const express = require('express');
const app = express();

const { initializeDB } = require("./config/db-config");
const PORT = 9050;

const { bookRouter, libraryRouter, authRouter, userRouter } = require("./routes");
const { loggin } = require("./middleware");




app.use(express.json()); 

app.use( loggin.logginMdw );


app.use('/library', libraryRouter);
app.use('/book', bookRouter);
app.use('/login', authRouter );
//app.use('/user', userRouter); Ruta para instanciar usuarios 





app.listen(PORT , async() => {
    await initializeDB();
    console.log(`Server running in ${PORT}`);
});
 