export async function OPTIONS() {
    return new Response(null, {
        status: 204, // No Content
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Max-Age": "86400" // Cache preflight request
        }
    });
}

export async function GET() {
    return new Response(JSON.stringify({
        data: [
            {
                id: 1,
                type: "appointment",
                name: "First Session with Alex Stan",
                from: "2024-12-20T09:30:35Z",
                to: "2024-12-20T10:30:35Z",
                location: "Park Hyatt Saigon",
                ticketPrice: 10,
                host: "Vietnam Private Capital Agency (VPCA)",
                followers: 29,
                image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd"
            }
        ]
    }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
    });
}
