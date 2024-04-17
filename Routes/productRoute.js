const express = require("express")
const { getAllProducts, getSingleProduct } = require("./controllers/productController")
const router = express.Router()

// get all product
router.get("/products",getAllProducts )

// get a single product
router.get('products/:id', getSingleProduct)
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