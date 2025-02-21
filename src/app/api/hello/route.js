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
                from: "2025-02-22T09:30:35Z",
                to: "2025-02-22T10:30:35Z",
                location: "Park Hyatt Saigon",
                ticketPrice: 10,
                host: "Vietnam Private Capital Agency (VPCA)",
                followers: 29,
                image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                client: {
                    avatar: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                    name: "Nguyen Van A",
                    age: 29,
                    address: "District 7, Ho Chi Minh city"
                }
            },
            {
                id: 2,
                type: "event",
                name: "Webinar: How to cope with trauma in profressional life",
                from: "2025-02-22T09:30:35Z",
                to: "2025-02-22T11:00:35Z",
                location: "Park Hyatt Saigon",
                ticketPrice: 0,
                host: "Vietnam Private Capital Agency (VPCA)",
                followers: 29,
                image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                client: {
                    avatar: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                    name: "Nguyen Van A",
                    age: 29,
                    address: "District 7, Ho Chi Minh city"
                }            },
            // {
            //     id: 3,
            //     type: "appointment",
            //     name: "First Session with Alex Stan",
            //     from: "2025-2-24T2:30:35Z",
            //     to: "2025-2-24T3:30:35Z",
            //     location: "Park Hyatt Saigon",
            //     ticketPrice: 20,
            //     host: "Vietnam Private Capital Agency (VPCA)",
            //     followers: 29,
            //     image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
            //     client: {
            //         avatar: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
            //         name: "Nguyen Van A",
            //         age: 29,
            //         address: "District 7, Ho Chi Minh city"
            //     }            },
            {
                id: 4,
                type: "event",
                name: "LUNCH & LEARN",
                from: "2025-02-22T18:29:35Z",
                to: "2025-02-22T18:50:35Z",
                location: "Park Hyatt Saigon",
                ticketPrice: 50,
                host: "Vietnam Private Capital Agency (VPCA)",
                followers: 29,
                image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                client: {
                    avatar: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                    name: "Nguyen Van A",
                    age: 29,
                    address: "District 7, Ho Chi Minh city"
                }            },
            {
                id: 5,
                type: "event",
                name: "She Is Women's Conference 2025 - BLOOM",
                time: "2025-02-22T03:00:46Z",
                time: "2025-02-22T4:00:46Z",
                location: "River Church",
                ticketPrice: 16,
                host: "River Church",
                followers: 56,
                image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                client: {
                    avatar: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                    name: "Nguyen Van A",
                    age: 29,
                    address: "District 7, Ho Chi Minh city"
                }
            },
            {
                id: 6,
                type: "event",
                name: "2025 EB-5 & Global Immigration Expo Vietnam",
                from: "2024-11-22T19:30:50Z",
                to: "2024-11-22T20:00:50Z",
                location: "The Reverie Saigon",
                ticketPrice: 3405.8,
                host: "Uglobal Immigration Magazine/EB5 Investors Magazine",
                followers: 1000,
                image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                client: {
                    avatar: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                    name: "Nguyen Van A",
                    age: 29,
                    address: "District 7, Ho Chi Minh city"
                }
            },
            {
                id: 7,
                type: "event",
                name: "LUNCH & LEARN",
                from: "2024-12-23T07:00:35Z",
                to: "2024-12-23T07:30:35Z",
                location: "Park Hyatt Saigon",
                ticketPrice: 0,
                host: "Vietnam Private Capital Agency (VPCA)",
                followers: 29,
                image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                client: {
                    avatar: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                    name: "Nguyen Van A",
                    age: 29,
                    address: "District 7, Ho Chi Minh city"
                }
            },
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
