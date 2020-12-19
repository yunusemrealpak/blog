/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    test: function(req, res) {
        res.send('Users endpoint is ready to use')
    },
    create: function(req, res) {
        let user = req.body;
        console.log(user);
        Users.create(user).exec(function(err) {
            if(err){
                res.send('Kayıt sırasında hata oluştu')
            }

            res.status(200).send(user).end();
        })
    }
};

