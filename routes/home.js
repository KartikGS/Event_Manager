const express=require('express')
const router=express.Router();
const event=require('../modules/events')

router.get('/',async (req,res)=>{
    var top3 =await event.find().sort({start:1})
    var top3GSDC =await event.find({club:"GSDC"}).sort({start:1})
    var top3COC =await event.find({club:"COC"}).sort({start:1})
    var top3ECELL =await event.find({club:"E-CELL"}).sort({start:1})
    var e={top3:top3,top3GSDC:top3GSDC,top3COC:top3COC,top3ECELL:top3ECELL}
    res.render('index',{e:e})
})

module.exports=router