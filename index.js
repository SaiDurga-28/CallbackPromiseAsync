//Http
// import http from 'http';
// const server = http.createServer((req,res)=>{
//     console.log(req.method);
//     if(req.url==="/users"){
//         res.writeHead(200, {"Content-Type":"application /json"});
//         res.end(JSON.stringify({NAME:"Sai Durga"}))
//     }
//     else{
//     res.writeHead(200,{"Content-Type":"text/plain"});
//     res.end("Hello this is from Backend")
//     }
// });

// //start server
// server.listen(7007,()=>{
//     console.log(`server running at port ${7007}`)
// });
//Express
// import express from 'express';
// const app = express();
// app.get('/users', (req, res) => {
//     res.send("hello this is from backend");
// })
// app.get('/get-users', (req, res) => {
//     res.send("hello this is from backend");
// })
// app.listen(7007, () => {
//     console.log(`server running at port ${7007}`);
// });
//Middleware
import express from 'express';
const app = express();
app.use(express.json());//Middleware
app.get('/get-users', (req, res) => {
    res.send("Api success");
})
app.put('/edit-users', (req, res) => {
    let mydata=req.body;
    console.log(mydata);//undefined if not using middleware
    //logic to add data into your database
    res.send("data edited");
})
app.post('/add-users', (req, res) => {
    let data=req.body;
    console.log(data);//undefined if not using middleware
    //logic to add data into your database
    res.send("data added");
})
app.delete('/delete-users',(req,res)=>{
    let data=req.body;
    console.log(data);//undefined if not using middleware
    //logic to add data into your database
    res.send("data deleted");
})
app.listen(7007, () => {
    console.log(`server running at port ${7007}`);
});