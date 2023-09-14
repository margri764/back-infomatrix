const { Router } = require ('express');
const { emailContact } = require('../controllers/contact');
const { emailRegister } = require('../controllers/register');
const { emailFeint } = require('../controllers/email-feint');
const { emailNotifications } = require('../controllers/notifications');
const router = Router();




router.post('/feint',[
], emailFeint); 

router.post('/contacto',[
], emailContact); 

router.post('/register',[
], emailRegister); 

router.post('/custom-notifications',[
], emailNotifications); 








module.exports= router;