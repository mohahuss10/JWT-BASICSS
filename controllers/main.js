const { JsonWebTokenError } = require("jsonwebtoken")
const jwt = require('jsonwebtoken')
const CustomApiError = require('../errors/custom-error')
 const login = async(req,res)=>{
   const {username,password} = req.body
   if(!username || !password){
      throw new CustomApiError('please provide email and password',404)
   }

   const id  = new Date().getDate()

   const token = jwt.sign({id,username},process.env.JWT_SECRET,{
      expiresIn:'30d'})
      res.status(200).json({msg:'user created',token})
 }

 const dashboard = async( req,res)=>{

      const authHeader = req.headers.authorization
      
      if(!authHeader || !authHeader.startsWith('Bearer')){
         throw new CustomApiError('please provide email and password',404)

      }
      const token = authHeader.split(' ')[1]
      try {
         const decoded = jwt.verify(token,process.env.JWT_SECRET)
         
      } catch (error) {
         
         throw CustomApiError = ('not authorized to access this route',401)
      }
         
    const luckyNumber  = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello jhon doe,sec`,secret:`Here is your lucky number
        ${luckyNumber}
        `}
    )

 }

 module.exports = {
    login,
    dashboard
 }