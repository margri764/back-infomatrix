
const Inscription = require ('../models/inscription');
const Course = require ('../models/course');

const postCourses= async ( req , res ) => {
  
  const { location, time, speaker, subject} = req.body;
  console.log(location, time, speaker, subject);

  try {
    let course = await Course.findOne({subject}) || null; 

    if( course ){
      return res.status(400).json({
        success: false,
        msg: "Existe un curso con ese nombre"
      })
    }

    const tempCourse = {
          location,
          time,
          speaker,
          subject
                       }

    course =  new Course (tempCourse);

    course.save()

    res.status(200).json({
      success: true,
      msg: "Charla creada correctamente"
    })

    
  } catch (error) {
    console.log('Error desde postCourses: ', error);
    let errorMessage = "Ups algo salió mal, hable con el administrador"
  
    return res.status(500).json({
      success: false,
      msg: errorMessage
    })
    
  }

  
}

const getCourses= async ( req , res ) => {

  
    try {
      const [total, courses] = await Promise.all([
        Course.countDocuments(),
        Course.find() ])
        // .populate([
        //     {
        //       path: 'user',
        //       model: "User",
        //     },         
        // ])

        //     ])
        
        res.json({ 
            total,
            courses
        })
        
    } catch (error) {
        console.log('desde getCourses: ', error);
        let errorMessage = 'Ups algo salió mal, hable con el administrador';

        return res.status(500).json ({
            success : false,
            msg : errorMessage
        })

    }

}

const getInscriptions= async ( req , res ) => {

  
  try {
    const [total, inscription] = await Promise.all([
      Inscription.countDocuments(),
      Inscription.find() 
      .populate([
          {
            path: 'inscription',
            model: "Course",
          },         
      ])

          ])
      
      res.json({ 
          total,
          inscription
      })
      
  } catch (error) {
      console.log('desde getInscriptions: ', error);
      let errorMessage = 'Ups algo salió mal, hable con el administrador';

      return res.status(500).json ({
          success : false,
          msg : errorMessage
      })

  }

}


const createInscription= async ( req , res ) => {
  
  const {firstName , lastName, student, teacher, inscription } = req.body;

  console.log(firstName , lastName, student, teacher, inscription );

  try {

    // let userInscription = await Inscription.findOne({ firstName, lastName}) || null; 

    // if( userInscription.inscription.includes(inscription) ){
    //   return res.status(400).json({
    //     success: false,
    //     msg: "Ya estas inscripto"
    //   })
    // }

    const tempInscription = {
          firstName,
          lastName,
          student,
          teacher,
          inscription
    }

    let user =  new Inscription(tempInscription);

    user.save()

    res.status(200).json({
      success: true,
      msg: "Inscripción creada correctamente"
    })

    
  } catch (error) {
    console.log('Error desde createInscription: ', error);
    let errorMessage = "Ups algo salió mal, hable con el administrador"
  
    return res.status(500).json({
      success: false,
      msg: errorMessage
    })
    
  }

  
}



module.exports = { getCourses, postCourses, createInscription, getInscriptions}