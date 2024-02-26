
import mongoose from "mongoose";

main()
  .then(() => console.log('Connected!'))
  .catch((err)=>{
    console.log(err)
  });


async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/College')
  }

const schema = new mongoose.Schema({ 
    name : String,
    status : String
 });

const students = mongoose.model('students',  schema);

export default students
