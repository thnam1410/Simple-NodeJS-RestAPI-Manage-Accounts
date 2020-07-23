const Account = require('../models/account');

module.exports = {

    getAll : async (req, res) => {
        try {
            const accounts = await Account.find();
            res.json(accounts); 
        } catch (error) {
            res.status(500).json({message:error.message});
        }
    },
    getOne :  (req, res) => {
        res.send(res.account);
    },

    createOne: async (req, res) => {
        const account = new Account({
            username: req.body.username,
            password: req.body.password,
        })
        try {
            const newAccount = await account.save();
            res.status(200).json(newAccount);
        } catch (error) {
            res.status(400).json({ message:error.message});
        }
    },
    updateOne: async (req, res) => {
        if(req.body.username != null){
            res.account.username = req.body.username;
        }
        if(req.body.password != null){
            res.account.password = req.body.password;
        }
        try {
            const updatedAccount = await res.account.save();
            res.json(updatedAccount);
        } catch (error) {
            res.status(400).json({message:error.message});
        }
    },
    deleteOne: async (req, res) => {
        try {
            await res.account.remove();
            res.json({message: "Deleted Account"});
        } catch (error) {
            res.status(500).json({message:error.message});
        }
    }

}