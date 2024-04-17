const express = require("express");
const app = express();
const port = 5005
const fs = require("fs")


const productRoute = require("./Routes/productRoute")



const homepage = fs.readFileSync("./pages/index.html", "utf-8")
// const aboutpage = fs.readFileSync("./pages/about.html", "utf-8")
// const contactpage = fs.readFileSync("./pages/contact.html", "utf-8")
// const testimonialpage = fs.readFileSync("./pages/testimonial.html", "utf-8")

app.get('/', (req, res) =>{
    res.send(homepage)
})

// app.get('/about', (req, res) =>{
//     res.send(aboutpage)
// })

// app.get('/contact', (req, res) =>{
//     res.send(contactpage)
// })

// app.get('/testimonial', (req, res) =>{
//     res. send(testimonialpage)
// })

// using product route
app.use(productRoute)

// server will now handle json
app.use(express.json())


app.listen(port, () => {
    console.log(`server started successfully. click http://localhost:${port} to open website`)
})