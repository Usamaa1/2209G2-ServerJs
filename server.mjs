import express from 'express'
import path from 'path';  
import { commentRouterV1 } from './Routers/comments/v1/commentsAPI.mjs';
import commentRouterV2 from './Routers/comments/v2/commentsAPI.mjs';
import userRouterV1 from './Routers/users/v1/usersAPI.mjs';
import postRouter from './Routers/posts/v1/postAPI.mjs';
const app = express()
const port = 3000

const __dirname = path.resolve();

app.use(express.json());


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.get('/image',(req,res)=>{
  res.sendFile(path.join(__dirname,'public/images/1.jpg'));
})

app.get('/doc',(req,res)=>{
  res.download(path.join(__dirname,'public/docs/dummy.pdf'));
})

app.get('/vscode',(req,res)=>{
  res.download(path.join(__dirname,'public/downloads/VSCodeUserSetup-x64-1.97.2.exe'));
})
console.log(__dirname);

app.use('/',express.static(path.join(__dirname,'public')))
app.use('/post',express.static(path.join(__dirname,'public/post.html')))



app.use('/api/v1',commentRouterV1);
app.use('/api/v2',commentRouterV2);
app.use('/api/v1',userRouterV1);


app.use('/api/v1',postRouter);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});








 





// comments API

// get-> /api/v1/comments
// get-> /comment
// post-> /comment
// put-> /comment
// delete-> /comment



