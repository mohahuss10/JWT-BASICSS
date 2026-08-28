const authenticationMiddleware = async (req,res,next)=>{
    console.log(req.headers.authentorization)
    next()
}
module.exports = authenticationMiddleware