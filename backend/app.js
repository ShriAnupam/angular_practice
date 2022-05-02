const express = require('express');

const app = express();

app.use('/api/posts',(req, res, next)=>{
  // res.send('Hello From Express!')
  const posts = [
    {
      id: 'aseff232234',
      title:'First Server SIde Post',
      content:'This is coming from the Server'
    },
    {
      id: 'gdgd25234',
      title:'Second Server SIde Post',
      content:'This is coming from the Server'
    }
  ];
  // res.json(posts);
  res.status(200).json({
    message:'Posts Fetched Successfully',
    posts:posts
  });
})

module.exports = app;
