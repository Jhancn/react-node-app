const express =require('express');
const app =express();

app.get('/names',(req,res) => {
  res.send("Jhansi")
});
app.listen(5000,() =>{
    console.log("Server is listening on port 5000");
});