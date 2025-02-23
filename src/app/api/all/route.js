export async function OPTIONS() {
    return new Response(null, {
        status: 204, 
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Max-Age": "86400"
        }
    });
}

export async function GET() {
    return new Response(JSON.stringify({
        data:  [
            {
                id: 1,
                type: "appointment",
                name: "LUNCH & LEARN",
                from: "2025-02-24T09:30:35Z",
                to: "2025-02-24T11:00:35Z",
                location: "Park Hyatt Saigon",
                ticketPrice: 50,
                host: "Vietnam Private Capital Agency (VPCA)",
                followers: 29,
                description: "Dig deep into God's Word to grow in faith and knowledge. Embrace the journey as we bloom into who He calls us to be.",
               image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F937385493%2F1929007668353%2F1%2Foriginal.20250116-152548?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1600%2C800&s=b75e5f0660e4bc0cdc9e25bcdd1d4a20",
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
                name: "She Is Women's Conference 2025 - BLOOM",
                from: "2025-02-24T09:30:35Z",
                to: "2025-02-24T09:45:35Z",
                location: "River Church",
                ticketPrice: 16,
                host: "River Church",
                followers: 56,
                description: "Dig deep into God's Word to grow in faith and knowledge. Embrace the journey as we bloom into who He calls us to be.",
                image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F957754873%2F125907090069%2F1%2Foriginal.20250211-065310?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C58%2C3174%2C1587&s=d0d963b85621903414a819fd0bb15e52",
                client: {
                    image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F937385493%2F1929007668353%2F1%2Foriginal.20250116-152548?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1600%2C800&s=b75e5f0660e4bc0cdc9e25bcdd1d4a20",
                    name: "Nguyen Van A",
                    age: 29,
                    address: "District 7, Ho Chi Minh city"
                }
            },
            {
                id: 3,
                type: "appointment",
                name: "2025 EB-5 & Global Immigration Expo Vietnam",
                from: "2025-02-24T09:30:35Z",
                to: "2025-02-24T11:00:35Z",
                location: "The Reverie Saigon",
                ticketPrice: 3405.8,
                host: "Uglobal Immigration Magazine/EB5 Investors Magazine",
                followers: 100,
                description: "Dig deep into God's Word to grow in faith and knowledge. Embrace the journey as we bloom into who He calls us to be.",
                image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F948712803%2F1270446424833%2F1%2Foriginal.20250130-174429?crop=focalpoint&fit=crop&w=600&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=ca3fb40ab6f42375cac3788f637d41d2",
                client: {
                    avatar: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                    name: "Nguyen Van A",
                    age: 29,
                    address: "District 7, Ho Chi Minh city"
                }
            },
            {
                id: 4,
                type: "event",
                name: "LUNCH & LEARN",
                from: "2024-12-23T07:00:35Z",
                to: "2024-12-23T07:30:35Z",
                location: "Park Hyatt Saigon",
                ticketPrice: 0,
                host: "Vietnam Private Capital Agency (VPCA)",
                followers: 29,
                description: "Dig deep into God's Word to grow in faith and knowledge. Embrace the journey as we bloom into who He calls us to be.",
               image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F937385493%2F1929007668353%2F1%2Foriginal.20250116-152548?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1600%2C800&s=b75e5f0660e4bc0cdc9e25bcdd1d4a20",
                client: {
                    avatar: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                    name: "Nguyen Van A",
                    age: 29,
                    address: "District 7, Ho Chi Minh city"
                }
            },
            {
                id: 5,
                type: "appointment",
                name: "First Session with Alex Stan",
                from: "2025-02-23T09:30:35Z",
                to: "2025-02-23T10:30:35Z",
                location: "Park Hyatt Saigon",
                ticketPrice: 10,
                host: "Vietnam Private Capital Agency (VPCA)",
                followers: 29,
                description: "Dig deep into God's Word to grow in faith and knowledge. Embrace the journey as we bloom into who He calls us to be.",
               image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F787959789%2F178938166142%2F1%2Foriginal.20240612-032233?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C102%2C1920%2C960&s=99a18f87e5c33dd397423dcde1dc2203",
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
                name: "Webinar: How to cope with trauma in profressional life",
                from: "2025-02-23T09:30:35Z",
                to: "2025-02-23T11:00:35Z",
                location: "Park Hyatt Saigon",
                ticketPrice: 0,
                host: "Vietnam Private Capital Agency (VPCA)",
                followers: 29,
                description: "Dig deep into God's Word to grow in faith and knowledge. Embrace the journey as we bloom into who He calls us to be.",
               image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F937385493%2F1929007668353%2F1%2Foriginal.20250116-152548?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1600%2C800&s=b75e5f0660e4bc0cdc9e25bcdd1d4a20",
                client: {
                    avatar: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                    name: "Nguyen Van A",
                    age: 29,
                    address: "District 7, Ho Chi Minh city"
                }
            },
            {
                id: 7,
                type: "appointment",
                name: "First Session with Alex Stan",
                from: "2025-02-24T2:30:35Z",
                to: "2025-02-24T3:30:35Z",
                location: "Park Hyatt Saigon",
                ticketPrice: 20,
                host: "Vietnam Private Capital Agency (VPCA)",
                followers: 29,
                description: "Dig deep into God's Word to grow in faith and knowledge. Embrace the journey as we bloom into who He calls us to be.",
               image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F937385493%2F1929007668353%2F1%2Foriginal.20250116-152548?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1600%2C800&s=b75e5f0660e4bc0cdc9e25bcdd1d4a20",
                client: {
                    avatar: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                    name: "Nguyen Van A",
                    age: 29,
                    address: "District 7, Ho Chi Minh city"
                }
            },
            {
                id: 8,
                type: "appointment",
                name: "LUNCH & LEARN",
                from: "2025-02-24T09:30:35Z",
                to: "2025-02-24T11:00:35Z",
                location: "Park Hyatt Saigon",
                ticketPrice: 50,
                host: "Vietnam Private Capital Agency (VPCA)",
                followers: 29,
                description: "Dig deep into God's Word to grow in faith and knowledge. Embrace the journey as we bloom into who He calls us to be.",
                image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F955279463%2F2273927443193%2F1%2Foriginal.20250207-142109?crop=focalpoint&fit=crop&w=600&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.110038610039&fp-y=0.44387755102&s=62c50562638f14f740558af2840f89c1",
                client: {
                    avatar: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                    name: "Nguyen Van A",
                    age: 29,
                    address: "District 7, Ho Chi Minh city"
                }
            },
            {
                id: 9,
                type: "event",
                name: "She Is Women's Conference 2025 - BLOOM",
                from: "2025-02-24T09:30:35Z",
                to: "2025-02-24T09:45:35Z",
                location: "River Church",
                ticketPrice: 16,
                host: "River Church",
                followers: 56,
                description: "Dig deep into God's Word to grow in faith and knowledge. Embrace the journey as we bloom into who He calls us to be.",
                image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F937385493%2F1929007668353%2F1%2Foriginal.20250116-152548?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1600%2C800&s=b75e5f0660e4bc0cdc9e25bcdd1d4a20",
                client: {
                    image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F937385493%2F1929007668353%2F1%2Foriginal.20250116-152548?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1600%2C800&s=b75e5f0660e4bc0cdc9e25bcdd1d4a20",
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
