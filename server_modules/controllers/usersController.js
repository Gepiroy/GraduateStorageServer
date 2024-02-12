import passport from 'passport'

const Actions = {}

Actions.login = [passport.authenticate('local', {
    failureMessage: true
}), (req, res) => { res.send(req.user) }]

Actions.register = function(req, res){

}
Actions.set = function(req, res){

}
Actions.delete = function(req, res){

}

export default Actions