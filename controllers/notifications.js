const nodemailer = require('nodemailer');

const mail = {
  user: process.env.USER_REVIMACK,
  pass: process.env.PASSWORD_REVIMACK
}

const emailNotifications  = async( req, res, next) => {  
   
    const { name, email, options } = req.body;
  
    console.log(options);

    const subscriptions = [];
    options.forEach(element => {
       if(element.value === true){
            subscriptions.push(` ${element.name}`)
       } 
      
      
    });
  
    const contentHtml=`
    
    <h1 style="font-family"> Notificaciones personalizadas </h1>
    <ul>
        <li>Nombre: ${name} </li>
        <li>Email: ${email} </li>
        <li>Tipo de notificaciones: ${subscriptions} </li>
    </ul>
    `

async function sendMail(){

  // res.status(200).json("true")

    try {

        
        let transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com",
            greetingTimeout : 1000 * (60), // try adding greetingTimeout property 
            port: 465,
            tls: {
                 rejectUnauthorized: false
            },
            secure: true, // true for 465, false for other ports
            auth: {
              user: mail.user, // generated ethereal user
              pass: mail.pass, // generated ethereal password
            },
          });

          const mailOptions = {
            from: "Revimack Agro <contacto@revimackagro.com>",
            to: mail.user,
            subject: "Contacto - Notificaciones",
            text:"Notificaciones personalizadas",
            html: contentHtml,
        };
        
        const result = await transporter.sendMail(mailOptions);     
        res.status(200).json("true")
      
        return result


    } catch (error) {
        next(error)
   }
}

sendMail()
.then (result => res.status(200))
.catch(error =>  next(error))

}
  
  module.exports =  { 
                        emailNotifications
                    }

