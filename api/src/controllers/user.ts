import { Request, Response } from 'express';
import { User } from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signupUser = async (req: Request, res: Response) => {
    console.log("signupUser");

    const { username, password, mobile, image, admin, active } = req.body;
    console.log(username);
    console.log(password);
    console.log("mobile");
    console.log(mobile);
    // We validate if the user exists in the database
    const user = await User.findOne({ where: { username: username } });

    if (user) {
        return res.status(400).json({
            msg: `A user with the name ${username} already exists`
        })
    }

    const hashed = await bcrypt.hash(password, 10);
    //console.log(hashedPassword);
    try {
        // We create the user in the database
        await User.create({
            username: username,
            password: hashed,
            mobile: mobile,
            image: image,
            admin: admin,
            active: active

        })
        console.log("signupUser-create");
        res.json({
            msg: `user ${username} created successfully`

        })
    } catch (error) {
        res.status(400).json({
            msg: 'Error registering user',
            error
        })
    }
}
export const signinUser = async (req: Request, res: Response) => {
    console.log("signinUser");
    const { username, password } = req.body;
    console.log("signinUser-username");
    console.log(username);
    console.log("signinUser-password");
    console.log(password);
    // We validate if the user exists in the database
    const user: any = await User.findOne({ where: { username: username } });

    console.log("user-signinUser");
    console.log(user);

    if (!user) {
        return res.status(400).json({
            msg: `There is no user with the name ${username} in the database`
        })
    }
    // We validate that the passwords are the same
    const passwordValid = await bcrypt.compare(password, user.password)
    console.log("signinUser-password");
    console.log(password);
    console.log("signinUser-user.password");
    console.log(user.password);
    if (!passwordValid) {
        return res.status(400).json({
            msg: `Password Incorrecta`
        })
    }
    // We generate token
    const token = jwt.sign({ username: username }, process.env.SECRET_KEY || 'pipo123');
    res.json(token);

}