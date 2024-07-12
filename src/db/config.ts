import mongoose from 'mongoose';
const uri = process.env.DB_URL; 

main().catch(err => console.log(">>> ERROR OCCURRED WHILE CONNECTING WITH DB : ", err));

export default async function main() {
  await mongoose.connect(uri);
  console.log(">>> CONNECTED TO DB AT : ", uri)
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
