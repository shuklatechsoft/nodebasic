const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
  res.json({'err':0,'mess':'helooo'})  ;

})
module.exports =router;