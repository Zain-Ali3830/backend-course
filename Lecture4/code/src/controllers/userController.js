export const getUsers=(req,res)=>{
    res.json([{id:1,name:"John"},{id:2,name:"Jane"}])
}

export const createUser=(req,res)=>{
    const userData=req.body;
    res.send(`User ${userData.name} added!`);
}