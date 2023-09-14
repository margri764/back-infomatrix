const User = require ('../models/user');
const { generateToken } = require("../helpers/tokenManajer");

const googleSignIn = async ( req, res) => {

    const { idToken, 
            name,
            firstName,
            lastName,
            email,
            photoUrl,
            phone } = req.body;   
    
    try {
        
        let user = await User.findOne( {email} );

        if(!user){
            
            const tempUser={
                        name,
                        firstName,
                        lastName,
                        email,
                        photoUrl,
                        phone,
                        google: true
        };
            user = new User (tempUser)
            await user.save()
        }else{
            
        }

        res.status(200).json({
                    success: true,
                    name,
                    firstName,
                    lastName,
                    email,
                    photoUrl,
                    phone,
                    google: true               
        });
        
    } catch (error) {
       console.log('Error desde googleSignIn: ', error);
        res.status(500).json({
            success: false,
            msg: 'Token de Google no es válido'
        })
    }
}

module.exports =  {googleSignIn }
