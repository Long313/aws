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
export async function GET(req, { params }) {
    const { id } = params;

    // Dữ liệu mẫu
    const data = [
        {
            id: 1,
            type: "appointment",
            name: "LUNCH & LEARN",
            from: "2025-02-22T09:30:35Z",
            to: "2025-02-22T11:00:35Z",
            location: "Park Hyatt Saigon",
            ticketPrice: 50,
            host: "Vietnam Private Capital Agency (VPCA)",
            followers: 29,
            description: "Dig deep into God's Word to grow in faith and knowledge. Embrace the journey as we bloom into who He calls us to be.",
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
            name: "She Is Women's Conference 2025 - BLOOM",
            from: "2025-02-27T09:30:35Z",
            to: "2025-02-27T09:45:35Z",
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
            image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
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
            from: "2024-12-25T07:00:35Z",
            to: "2024-12-25T07:30:35Z",
            location: "Park Hyatt Saigon",
            ticketPrice: 0,
            host: "Vietnam Private Capital Agency (VPCA)",
            followers: 29,
            description: "Dig deep into God's Word to grow in faith and knowledge. Embrace the journey as we bloom into who He calls us to be.",
            image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
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
            from: "2025-02-25T09:30:35Z",
            to: "2025-02-25T10:30:35Z",
            location: "Park Hyatt Saigon",
            ticketPrice: 10,
            host: "Vietnam Private Capital Agency (VPCA)",
            followers: 29,
            description: "Dig deep into God's Word to grow in faith and knowledge. Embrace the journey as we bloom into who He calls us to be.",
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
            name: "Webinar: How to cope with trauma in profressional life",
            from: "2025-02-23T09:30:35Z",
            to: "2025-02-23T11:00:35Z",
            location: "Park Hyatt Saigon",
            ticketPrice: 0,
            host: "Vietnam Private Capital Agency (VPCA)",
            followers: 29,
            description: "Dig deep into God's Word to grow in faith and knowledge. Embrace the journey as we bloom into who He calls us to be.",
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
            type: "appointment",
            name: "First Session with Alex Stan",
            from: "2025-02-22T2:30:35Z",
            to: "2025-02-22T3:30:35Z",
            location: "Park Hyatt Saigon",
            ticketPrice: 20,
            host: "Vietnam Private Capital Agency (VPCA)",
            followers: 29,
            description: "Dig deep into God's Word to grow in faith and knowledge. Embrace the journey as we bloom into who He calls us to be.",
            image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
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
            from: "2025-02-22T09:30:35Z",
            to: "2025-02-22T11:00:35Z",
            location: "Park Hyatt Saigon",
            ticketPrice: 50,
            host: "Vietnam Private Capital Agency (VPCA)",
            followers: 29,
            description: "Dig deep into God's Word to grow in faith and knowledge. Embrace the journey as we bloom into who He calls us to be.",
            image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
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
            from: "2025-02-22T09:30:35Z",
            to: "2025-02-22T09:45:35Z",
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
        {
            id: 10,
            type: "appointment",
            name: "2025 EB-5 & Global Immigration Expo Vietnam",
            from: "2025-02-23T09:30:35Z",
            to: "2025-02-23T11:00:35Z",
            location: "The Reverie Saigon",
            ticketPrice: 3405.8,
            host: "Uglobal Immigration Magazine/EB5 Investors Magazine",
            followers: 100,
            description: "Dig deep into God's Word to grow in faith and knowledge. Embrace the journey as we bloom into who He calls us to be.",
            image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
            client: {
                avatar: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                name: "Nguyen Van A",
                age: 29,
                address: "District 7, Ho Chi Minh city"
            }
        },
        {
            id: 11,
            type: "event",
            name: "LUNCH & LEARN",
            from: "2024-12-22T07:00:35Z",
            to: "2024-12-22T07:30:35Z",
            location: "Park Hyatt Saigon",
            ticketPrice: 0,
            host: "Vietnam Private Capital Agency (VPCA)",
            followers: 29,
            description: "Dig deep into God's Word to grow in faith and knowledge. Embrace the journey as we bloom into who He calls us to be.",
            image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
            client: {
                avatar: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                name: "Nguyen Van A",
                age: 29,
                address: "District 7, Ho Chi Minh city"
            }
        },
        {
            id: 12,
            type: "appointment",
            name: "First Session with Alex Stan",
            from: "2025-02-22T09:30:35Z",
            to: "2025-02-22T10:30:35Z",
            location: "Park Hyatt Saigon",
            ticketPrice: 10,
            host: "Vietnam Private Capital Agency (VPCA)",
            followers: 29,
            description: "Dig deep into God's Word to grow in faith and knowledge. Embrace the journey as we bloom into who He calls us to be.",
            image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
            client: {
                avatar: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                name: "Nguyen Van A",
                age: 29,
                address: "District 7, Ho Chi Minh city"
            }
        },
        {
            id: 13,
            type: "event",
            name: "Webinar: How to cope with trauma in profressional life",
            from: "2025-02-26T09:30:35Z",
            to: "2025-02-26T11:00:35Z",
            location: "Park Hyatt Saigon",
            ticketPrice: 0,
            host: "Vietnam Private Capital Agency (VPCA)",
            followers: 29,
            description: "Dig deep into God's Word to grow in faith and knowledge. Embrace the journey as we bloom into who He calls us to be.",
            image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
            client: {
                avatar: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                name: "Nguyen Van A",
                age: 29,
                address: "District 7, Ho Chi Minh city"
            }
        },
    ]

    // Tìm item theo id
    const item = data.find(event => event.id === Number(id));

    // Kiểm tra nếu không tìm thấy dữ liệu
    if (!item) {
        return new Response(JSON.stringify({ error: "Event not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" }
        });
    }

    return new Response(JSON.stringify(item), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
    });
}