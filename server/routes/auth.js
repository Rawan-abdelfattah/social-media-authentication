const passport = require('passport')
const router = require('express').Router()
const CLIENT_URL = 'http://localhost:3000'


router.get('/login/failed',(req,res)=>{
    res.status(401).send({
        success:false,
        message:'Login failed'
    })
})

router.get('/login/success',(req,res)=>{
    if(req.user){
         res.status(200).send({
        success:true,
        message:'Login success',
        user:req.user
    })
    }
   
})

router.get('/logout',(req,res)=>{
    req.logout() 
    res.redirect(CLIENT_URL)
})

router.get('/google',passport.authenticate('google' , {scope:['profile']}))

router.get('/google/callback',passport.authenticate('google',{
    successRedirect: '/login/success',
    failureRedirect: '/login/failed'

}))

router.get('/github',passport.authenticate('github' , {scope:['profile']}))

router.get('/github/callback',passport.authenticate('github',{
    successRedirect: '/login/success',
    failureRedirect: '/login/failed'

}))


router.get('/facebook',passport.authenticate('facebook' , {scope:['profile']}))

router.get('/facebook/callback',passport.authenticate('facebook',{
    successRedirect: '/login/success',
    failureRedirect: '/login/failed'

}))



module.exports =  router 