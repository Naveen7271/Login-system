import UserModel from '../models/User.js'
class UserController {
    static home =(req, res) =>{
        res.render("index")
    }
        //for admin 
    static adminreg =(req, res) =>{
        res.render("adminreg")
    }
       // for user 
    static registration =(req, res) =>{
        res.render("registration")
    }
    static smereg =(req, res) =>{
        res.render("smereg")
    }




    static createUserDoc= async (req,res) =>{
    try{
        // creating new doc using modal
        const doc = new UserModel({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            number:req.body.number,
        })
        await doc.save()
        res.redirect('/login')

    } catch(error){ 
        console.log(error)

    }
}
    static login =(req, res) =>{
        res.render("login")
    }
    static verifyLogin = async (req, res) =>{
        try{
            const {email, password} = req.body
            // database 
            const result = await UserModel.findOne({email:email})
            if(result !=null){
                if(result.email == email && result.password == password){
                    // res.send(`<h1>Dashboard ----${result}</h1>`)// res.send("<h1>Login sucess</h1>")
                    res.redirect('/login')
                }else{
                res.send("<h1>Email or Password is not vaild</h1>")
            }
            }else{
                res.send("<h1>You are not a Registered User</h1>")
            }
        }catch(error){
            console.log(error)
        }
    }
    static logout =(req, res) =>{
        res.render("logout")
    }
}

export default UserController