import {Router} from 'express'
import {CategoryModel} from '../db.js'

const router = Router()

router.get('/categories', async (req, res) => res.send(await CategoryModel.find()))

router.post('/categories', async (req, res) => {
    try
    {
        const newCat = await CategoryModel.create({name : req.body.name})
        if(newCat)
        {
            res.status(201).send(newCat)
        }
        else
        {
            res.status(400).send({error : 'Error creating Category'})
        }
    }
    catch (err)
    {
        res.status(500).send({error:err.message})
    }

})

router.put('/categories', async (req, res) => {})

router.delete('/categories', async (req, res) => {})

export default router