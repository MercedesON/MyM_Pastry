import { Request, Response } from 'express';
import { Cake } from '../models/cake';

export const getCakes = async (req: Request, res: Response) => {
    const listCakes = await Cake.findAll();

    res.json({
        msg: "Get Cakes"
    })
}