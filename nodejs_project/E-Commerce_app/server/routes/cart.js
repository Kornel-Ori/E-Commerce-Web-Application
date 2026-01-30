//TODO
// Add item to cart
// Remove item
// Update quantity
const express = require('express')
const router = express.Router()

// Initialize empty cart
let cart = []

// GET cart
router.get('/cart', (req, res) => {
    res.json(cart)
})

// ADD to cart
router.post('/cart/add/:productId', (req, res) => {
    const productId = parseInt(req.params.productId)
    // You'll need to get the product details from your products array
    // This is a simplified version
    const existingItem = cart.find(item => item._id === productId)
    
    if (existingItem) {
        existingItem.quantity += 1
    } else {
        // Add product to cart (you need to pass full product details)
        cart.push({ _id: productId, quantity: 1 })
    }
    
    res.json(cart)
})

// UPDATE cart quantity
router.put('/cart/update/:productId/:quantity', (req, res) => {
    const productId = parseInt(req.params.productId)
    const quantity = parseInt(req.params.quantity)
    
    if (quantity <= 0) {
        cart = cart.filter(item => item._id !== productId)
    } else {
        const item = cart.find(item => item._id === productId)
        if (item) {
            item.quantity = quantity
        }
    }
    
    res.json(cart)
})

// REMOVE from cart
router.delete('/cart/remove/:productId', (req, res) => {
    const productId = parseInt(req.params.productId)
    cart = cart.filter(item => item._id !== productId)
    res.json(cart)
})

module.exports = router