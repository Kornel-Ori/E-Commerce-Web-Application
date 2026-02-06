//TODO
// Add item to cart - ✅ DONE
// Remove item - ✅ DONE
// Update quantity - ✅ DONE
const express = require('express')
const router = express.Router()
const productsRouter = require('./products')
const products = productsRouter.products

// Initialize empty cart
let cart = []

// GET cart
router.get('/cart', (req, res) => {
    console.log("GET /cart - returning cart:", cart)
    res.json(cart)
})

// ADD to cart with quantity parameter
router.post('/cart/add/:productId/:quantity?', (req, res) => {
    const productId = parseInt(req.params.productId)
    const quantity = parseInt(req.params.quantity) || 1
    
    console.log("POST /cart/add - Product ID:", productId, "Quantity:", quantity)
    
    // Find the product from products array
    const product = products.find(p => p._id === productId)
    
    if (!product) {
        console.log("Product not found:", productId)
        return res.status(404).json({ error: "Product not found" })
    }
    
    // Check if product already exists in cart
    const existingItem = cart.find(item => item._id === productId)
    
    if (existingItem) {
        // Increase quantity if already in cart
        existingItem.quantity += quantity
        console.log("Updated quantity:", existingItem)
    } else {
        // Add new item to cart with all product details
        cart.push({ 
            _id: product._id,
            name: product.name,
            category: product.category,
            energyRating: product.energyRating,
            price: product.price,
            quantity: quantity 
        })
        console.log("Added new item to cart:", product)
    }
    
    console.log("Current cart:", cart)
    res.json(cart)
})

// UPDATE cart quantity
router.put('/cart/update/:productId/:quantity', (req, res) => {
    const productId = parseInt(req.params.productId)
    const quantity = parseInt(req.params.quantity)
    
    console.log("PUT /cart/update - Product ID:", productId, "Quantity:", quantity)
    
    if (quantity <= 0) {
        cart = cart.filter(item => item._id !== productId)
        console.log("Removed item from cart")
    } else {
        const item = cart.find(item => item._id === productId)
        if (item) {
            item.quantity = quantity
            console.log("Updated quantity:", item)
        }
    }
    
    console.log("Current cart:", cart)
    res.json(cart)
})

// REMOVE from cart
router.delete('/cart/remove/:productId', (req, res) => {
    const productId = parseInt(req.params.productId)
    console.log("DELETE /cart/remove - Product ID:", productId)
    
    cart = cart.filter(item => item._id !== productId)
    console.log("Removed from cart, new cart:", cart)
    res.json(cart)
})

// CLEAR entire cart (optional - useful for checkout)
router.delete('/cart/clear', (req, res) => {
    cart = []
    console.log("Cart cleared")
    res.json(cart)
})

module.exports = router