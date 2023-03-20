import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';


dotenv.config();

const router = express.Router();


const configuration = new Configuration({
    apiKey: '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'
})

const openai = new OpenAIApi(configuration);


router.get('/', (req,res,next) => {
    res.send('HELLO FROM DELL-E')
})


router.post('/', async (req, res, next) => {
    console.log('body', req.body);
    const { prompt } = req.body;
    console.log({prompt});
    const apiResponse = await openai.createImage({
        prompt,
        n: 1,
        size: '1024x1024',
        response_format: 'b64_json',
    });
    console.log(apiResponse.data.data);
    const image = apiResponse.data.data[0].b64_json;

    res.status(200).json({
        photo: image
    })
})
export default router;