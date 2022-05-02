const express = require('express');

const app = express();

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin',"*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

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
