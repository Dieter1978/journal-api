import app from '../app'
import request from 'supertest'

const validNames = ['Food','Gaming','Coding','Other']



describe('create a new entry',  ()=>{
    let res

    beforeAll(async () => {
        res = await request(app).post('/entries').send({category:'Food', content:'Ice cream rules!'})
        
    })
    
    test('Returns a JSON body with _id', ()=>{
        expect(res.status).toBe(201)
        expect(res.header['content-type']).toMatch('application/json')
        expect(res.body._id).toBeDefined()

    })
  
    test('Catgeory has _id and correct name', () => {
        expect(res.body.category._id).toBeDefined()
        expect(res.body.category.name).toBeDefined()
        expect(res.body.category.name).toBe('Food')
    })
    
    test('Content has correct values', () => {
        expect(res.body.content).toBeDefined()
        expect(res.body.content).toBe('Ice cream rules!')
        expect(res.body.category).toBeDefined()
    })



})

describe('GET /categories', ()=>{
    let res

    beforeEach(async () => {
        res = await request(app).get('/categories')
       
    })

    test('Returns JSON', async ()=>{
        expect(res.status).toBe(200)
        expect(res.header['content-type']).toMatch('application/json')
    })

    test('Returns an array of 4 elements', ()=>{
        expect(res.body).toBeInstanceOf(Array)
        expect(res.body).toHaveLength(4)
    })

    test("Each category has a 'name' and '_id'", () => {
        res.body.forEach(el => {
        expect(el._id).toBeDefined()
        expect(el.name).toBeDefined()
        expect(validNames).toContain(el.name)
        })
    })
})