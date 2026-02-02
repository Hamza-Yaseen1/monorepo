import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api:
 *   get:
 *     description: Returns the root API response
 *     responses:
 *       200:
 *         description: Hello Message
 */
export async function GET() {
  return NextResponse.json({
    message: 'Welcome to the Decentralized Social Media API',
    version: '1.0.0',
    status: 'Running',
  });
}
