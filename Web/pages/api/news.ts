import type { NextApiRequest, NextApiResponse } from 'next'
import {connectToDatabase} from '../../lib/mongodb'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const { db } = await connectToDatabase();

    const news = await db
        .collection("news")
        .find({})
        .toArray();

    res.status(200).json(news)
}

