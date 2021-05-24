import express from 'express'
import { Products, User, Orders } from './models/index.js';

const app = express();

app.post('/users', async (req, res) => {
    res.json(await User.create(req.body))
});

app.get('/test', async (req, res) => {
    res.json({message:"Hola!! GON"})
});

app.get('/users', async (req, res) => {
    
    const users = await User.findAll({
        include: [
            {
                model: Orders,
                include: [
                    {model: Products}
                ],
                attributes: ['totalPrice']
            }    
        ]
    })
    const orders = await Orders.findAll(
        {
            include: [
                { model: User },
                { model: Products}
            ]
        }
    )

    res.json({users, orders });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
