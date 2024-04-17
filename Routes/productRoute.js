const express = require("express")

const router = express.Router()

// get all product
router.get("/products", (req, res) =>{
    res.status(300)
    res.json([
        {
            productName : "iphone 13",
            productPrice : "$1200"
        },

        {
            productName : "iphone 14",
            productPrice : "$1300"
        },

        {
            productName : "iphone 15",
            productPrice : "$1400"
        }
    ])
})

// get a single product
router.get('products/:id', (req, res) =>{
    res.status(200)
    res.json([
        {
            productName : "iphone 15",
            productPrice : "$1400"
        }
    ])
})

// create a product
router.post("/products", (req, res) =>{
    res.status(200)
    res.json({
        message : "product added successfully"
    })
})

// updating a product
router.put("/products/:id", (req, res) =>{
    res.status(200)
    res.json({
      mressage : "product updated successfully"
    })
})

// delete a product
router.delete("/products/:id", (req, res) =>{
    res.status(200)
    res.json({
        message : "product have been deleted successfully"
    })
})



module.exports = router