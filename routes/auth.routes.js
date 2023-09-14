const { Router } = require ('express');
const {check} = require ('express-validator');
const router = Router();
const { googleSignIn } = require('../controllers/auth.controllers');
const { checkFields} = require('../middlewares/check-fields')


router.post('/google',[
    check('idToken','el id_token es necesario').not().isEmpty(),
    checkFields
], googleSignIn);  

module.exports= router;
