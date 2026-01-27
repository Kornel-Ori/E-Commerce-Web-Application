const router = require(`express`).Router()

let cars = [{_id:0, model:"A", colour:"Red", year:2020, price:30000},
            {_id:1, model:"Yaris", colour:"Green", year:2010, price:2000},
            {_id:2, model:"Corolla", colour:"Red", year:2019, price:20000},
            {_id:3, model:"Avensis", colour:"Silver", year:2018, price:20000},
            {_id:4, model:"Camry", colour:"White", year:2020, price:50000}]

let uniqueId = cars.length

router.get(`/cars`, (req, res) => 
    {   
        res.json(cars)
    })

    router.post(`/add/:model/:colour/:year/:price`, (req, res) => 
    {
        cars.push({_id:uniqueId,
                    model:req.params.model,
                    colour:req.params.colour,
                    year:req.params.year,
                    price:req.params.price,
                    })
       uniqueId++
                    res.json({_id:uniqueId,
                        model:req.params.model,
                        colour:req.params.colour,
                        year:req.params.year,
                        price:req.params.price,
                        })
    })
module.exports = router