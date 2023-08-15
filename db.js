import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

async function dbClose() {
    await mongoose.connection.close()
    console.log('dbClosed')
}

mongoose.connect(process.env.ATLAS_DB_URL)
//.then(m => console.log(m.connection.readyState === 1 ? 'Mongoose connected!' : 'Mongoose did not connect'))
.catch(err => console.log(err))

const entrySchema = new mongoose.Schema({
   category : {type : mongoose.ObjectId, ref:'Category'}, 
   content : {type : String, required : true}
})

const categorySchema = new mongoose.Schema({
    name : {type:String, required : true, unique : true},
    //entries : [entrySchema]
})

const CategoryModel = mongoose.model('Category', categorySchema)    

const EntryModel = mongoose.model('Entry',entrySchema)

export {CategoryModel, EntryModel, dbClose} 