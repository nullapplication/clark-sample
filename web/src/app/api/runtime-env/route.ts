export async function GET() {
    return Response.json({
        NEXT_PUBLIC_API_URL: process.env.API_URL || 'undefined',
    });
}
