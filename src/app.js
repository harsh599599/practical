const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
require("./routes/users");

const port = process.env.PORT || 3000;
//app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', require('./routes/users'))
    // app.get('/add', function(req, res, next) {
    //     res.render('add-form');
    // });
app.listen(port, () => {
    console.log(`server running at ${port}`);
})