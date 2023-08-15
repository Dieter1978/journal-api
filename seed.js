import {CategoryModel, EntryModel, dbClose} from './db.js'


const categories = [
    {name:'Food'},
    {name:'Gaming'},
    {name:'Coding'},
    {name:'Other'}
]


await CategoryModel.deleteMany()
const  cats = await CategoryModel.insertMany(categories)
console.log('inserted categories')

const entries = [  
    {category: cats[0], content: 'Food is yummy!'},
    {category: cats[2], content:'Coding is fun!'},
    {category: cats[1], content: 'Skyrim is for the Nords!'}]

await EntryModel.deleteMany()
await EntryModel.insertMany(entries)
console.log('inserted entries')



//testFunc()

dbClose()

