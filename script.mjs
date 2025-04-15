import express from 'express'
import postRouter from './routers/posts.mjs';
import sortRouter from './routers/sort.mjs';
import filterRouter from './routers/filter.mjs';
import searchRouter from './routers/search.mjs';
import postDateFilter from './routers/postDateFilter.mjs';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

let text = '';
function middleware(req, res, next) {
  console.log('Middleware')
  text = 'First Text'
  next()
}

app.use(middleware);

app.get('/first', (req, res, next) => {
  res.send(text)

})
app.get('/second', (req, res) => {
  res.send('Second')
})

app.use('/api/v1', postRouter);
app.use('/api/v1', searchRouter);
app.use('/api/v1', sortRouter);
app.use('/api/v1', filterRouter);
app.use('/api/v1', postDateFilter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})