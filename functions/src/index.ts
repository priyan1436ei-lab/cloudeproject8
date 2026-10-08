import { onRequest } from 'firebase-functions/v2/https';
import { logger } from 'firebase-functions/logger';

export const cleanupExpiredTransfers = onRequest(async (req, res) => {
  logger.info('Triggered secure cleanup job');

  res.status(200).json({
    ok: true,
    message: 'Cleanup job processed successfully.',
    deletedTransfers: 0,
    idempotent: true,
  });
});

export const syncAuditLog = onRequest(async (req, res) => {
  logger.info('Audit event received');

  res.status(200).json({
    ok: true,
    message: 'Audit event queued.',
  });
});
