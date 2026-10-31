import { Request, Response } from 'express';
import {cronJobs} from "./index.js";


export const cronVercel = async (req: Request, res: Response) => {
    // Verify request is from Vercel Cron (prevent public abuse)
    const authHeader = req.headers.authorization;
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return res.status(401).json({error: 'Unauthorized'});
    }

    // Execute your scheduled tasks
    await cronJobs();

    res.json({success: true})
}
