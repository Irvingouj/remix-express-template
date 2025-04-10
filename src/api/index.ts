import express from 'express';
import { authMiddleware } from './middleware/auth.js';
import errorHandler from './middleware/error.js';
const router = express.Router();

router.use(authMiddleware);

// Health check endpoint
router.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Error handler must be last
router.use(errorHandler);

export default router; 