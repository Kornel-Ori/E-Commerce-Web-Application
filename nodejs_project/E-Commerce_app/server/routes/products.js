const router = require(`express`).Router()
//TODO
// Get all products
// Get single product
// Create product (admin)
// Update product (admin)
// Delete product (admin)

let products = [
    {_id: 0, name: "Eco Fridge", category: "Fridge", energyRating: "A++", price: 900},
    {_id: 1, name: "Smart Washer", category: "Washing Machine", energyRating: "A+++", price: 650},
    {_id: 2, name: "Eco Dishwasher", category: "Dishwasher", energyRating: "A++", price: 700}
]

let uniqueId = products.length

// GET all products
router.get('/products', (req, res) => {
    res.json(products)
})

// ADD a product
router.post('/add/:name/:category/:energyRating/:price', (req, res) => {
    let newProduct = {
        _id: uniqueId,
        name: req.params.name,
        category: req.params.category,
        energyRating: req.params.energyRating,
        price: req.params.price
    }

    products.push(newProduct)
    uniqueId++

    res.json(newProduct)
})

module.exports = router
