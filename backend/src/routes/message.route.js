import express from 'express';

const router = express.Router();

router.get('/send', (req, res) => {
    res.send('Send endpoit');
});

export default router;
