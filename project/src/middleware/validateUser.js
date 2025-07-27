const validateUser=(req,res,next)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({message:"Email and password are required"});
    }
    else if(!email.includes("@")){
        return res.status(400).json({message:"Email must have @"});
    }
    else if(password.length<8){
        return res.status(400).json({message:"Password must be at least 8 characters"});
    }
    next();
}

export default validateUser