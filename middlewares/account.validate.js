const Account = require('../models/account');

module.exports ={
    getAccount: async (req, res, next) => {
        let account;
        try {
            account = await Account.findById(req.params.id)
            if(account == null){
                return res.status(404).json({message:"Can not find id"})
            }
        } catch (error) {   
            return res.status(500).json({message:error.message})
        }
        res.account = account;
        next();
    },
    checkValidAccountInformationToCreate: (req, res, next) => {
        let errors = []
        if(req.body.username.length<6){
            errors.push('Username is required and it must have at least 6 characters')
        }
        if(req.body.password.length < 6){
            errors.push('Password is required and it must have at least 6 characters')
        }
        if(errors.length){
            return res.json(400, {
                error: errors,
                message: "Got Errors with Username/Password"
            })
        }
        next();
    }
}

