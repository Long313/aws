// export async function OPTIONS() {
//     return new Response(null, {
//         status: 204, // No Content
//         headers: {
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
//             "Access-Control-Allow-Headers": "Content-Type, Authorization",
//             "Access-Control-Max-Age": "86400" // Cache preflight request
//         }
//     });
// }

// export async function GET() {
//     return new Response(JSON.stringify({}), {
//         status: 200,
//         headers: {
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
//             "Access-Control-Allow-Headers": "Content-Type, Authorization"
//         }
//     });
// }
