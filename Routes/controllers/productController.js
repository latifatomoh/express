exports.getAllProducts = (req, res) =>{
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
}

exports.getSingleProduct = (req, res) =>{
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
}