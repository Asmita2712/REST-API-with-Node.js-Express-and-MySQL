var dbConn = require('../../config/db.config')

var User = function(user){
    this.uid = user.uid;
    this.name   = user.name;
    this.gender = user.gender;
    this.email  = user.email;
}

//get all users
User.getAllUsers = (result) =>{
    dbConn.query('SELECT * FROM user', (err, res)=>{
        if(err){
            console.log('Error while fetching users', err);
            result(null,err);
        }else{
            console.log('User fetched successfully');
            result(null,res);
        }
    })
}


//get user by ID from DB
User.getUserByID = (id, result)=>{
    dbConn.query('SELECT * FROM user WHERE id=?',id,(err, res)=>{
        if(err){
            console.log('Error while fetching user by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

//create new user
User.createUser = (userReqData, result)=>{
    dbConn.query('INSERT INTO user SET ? ', userReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('User created successfully');
            result(null, res);
        }
    })
}

module.exports = User;