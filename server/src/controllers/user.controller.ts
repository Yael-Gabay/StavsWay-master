import { Handler } from "express"
import { UserModel } from "../model/user.model"

export const postNewUser: Handler = async (req, res) => {
    try {
        console.log(`attempt to create user`)
        const body = req.body
        const user = new UserModel({...body, date: new Date()})
        await user.save()
      
        res.send("created")
    } catch (error) {
        res.send({error})
    }
  }


export const GetUser: Handler = async (req, res) => {
    try {
        const id =req.params.id
        const userJson=await UserModel.findById(id)
       res.json(userJson)
      
    } catch (error) {
        res.send({error})
    }
  }
 export const GetUserByEmailAndPassword: Handler = async (req, res) => {
    try {
        if (req.method === 'POST') {
            // For POST requests, extract email and password from the request body
            const { email, password } = req.body;
            console.log(email);
            
            // Find the user by email and password
            const user = await UserModel.findOne({ email, password });
            console.log(user)
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.json(user);
       
        } else {
            // Handle other HTTP methods if needed
            res.status(405).json({ error: 'Method Not Allowed' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


  

//   export const GetAllDonationsOfUser: Handler = async (req, res) => {
//     try {
//         const id =req.params.id
//         const userJson=await UserModel.find
//        res.json(userJson)
      
//     } catch (error) {
//         res.send({error})
//     }
//   }
  