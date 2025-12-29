import express from 'express';
import {
    getAllContacts,
    getChatsPatrners,
    getMessagesByUserId,
    sendMessage,
} from '../controllers/message.controller';
import { protectRoute } from '../middleware/auth.middleware';
import { arcjetProtection } from '../middleware/arcjet.meddleware.js';

const router = express.Router();

router.use(arcjetProtection, protectRoute);

router.get('/contacts', getAllContacts);
router.get('/chats', getChatsPatrners);
router.get('/:id', getMessagesByUserId);
router.post('/send:id', sendMessage);

export default router;
