
const UserModel = require('../models/user.model');

// get all user list
exports.getUserList = (req, res)=> {
   // console.log('here all user list')
   UserModel.getAllUsers((err, user)=>{
       console.log('We are here');
       if(err)
       res.send(err);
       console.log('User',user);
       res.send(user)
   })
}

//get user by ID
exports.getUserByID = (req, res)=>{
   // console.log('get emp by id');
   UserModel.getUserByID(req.params.id, (err, user)=>{
       if(err)
       res.send(err);
       console.log('single user data', user);
       res.send(user);
   })
}

//create new user
exports.createNewUser = (req, res)=>{
    const userReqData = req.body;
    console.log('userReqData', userReqData);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.createUser(userReqData, (err, user)=>{
            if(err)
                res.send(err);
                res.json({status: true, message: 'User Created Successfully', data: user})
        })
    }
}