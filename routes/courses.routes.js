const { Router } = require ('express');
const {check} = require ('express-validator');
const router = Router();
const { postCourses, getCourses, createInscription, getInscriptions } = require('../controllers/courses.controllers');


router.get('/inscription',[
], getInscriptions);  

router.get('/',[
], getCourses);  

router.post('/inscription',[
], createInscription);  

router.post('/',[
], postCourses);  



module.exports= router;
