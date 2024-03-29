import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary} from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name: 'manikandanb',
    api_key: '311227581414689',
    api_secret: 'k8OwYuRcavcRrRuvz78xlHbxFck'
})


router.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const { name, prompt, photo } = req.body;
        const photoURL = await cloudinary.uploader.upload(photo);
        console.log({photoURL});
        const newPost = await Post.create({
            name,
            prompt,
            photo: photoURL.url
        })

    res.status(201).json({ success : true, data: newPost })

    } catch(err) {
        console.log({err});
        res.status(201).json({ success : false, data: err })
    }
    


})


router.get('/', async (req, res, next) => {
    try {
        console.log('checking');
    const post = await Post.find();
    res.status(200).json({
        success: true,
        data: post
    })
    } catch(err) {
        console.log(err);
        res.status(200).json({
            success: false,
            data: err
        })
    }

})


export default router;