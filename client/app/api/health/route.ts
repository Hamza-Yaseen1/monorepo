import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/health:
 *   get:
 *     description: Health check endpoint
 *     responses:
 *       200:
 *         description: API is healthy
 */
export async function GET() {
    return NextResponse.json({
        status: 'UP',
        timestamp: new Date().toISOString(),
        services: {
            database: 'Connected', // Placeholder for actual DB status
            blockchain: 'Operational', // Placeholder for actual blockchain status
        },
    });
}
