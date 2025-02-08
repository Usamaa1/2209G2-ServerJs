console.log("Hello World");

// const express = require('express')
import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/profile', (req, res) => {
  res.send('My Profile !!!!!!')
})
app.get('/movies', (req, res) => {
  res.send('My Movies List')
})
app.get('/company', (req, res) => {
  res.send('My Company Page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





