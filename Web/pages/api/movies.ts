import type { NextApiRequest, NextApiResponse } from 'next'
import {connectToDatabase} from '../../lib/mongodb'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const { db } = await connectToDatabase();

    const movies = await db
        .collection("movies")
        .find({})
        .sort({ metacritic: -1 })
        .limit(10)
        .toArray();
    res.status(200).json(movies)
}

