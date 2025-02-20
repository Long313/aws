export default function handler(req : any, res : any) {
    res.status(200).send({
        "articles": {},
        "current_user_id": null,
        "profile_search": {},
        "article_search": {},
        "profiles": {},
        "events": {
            "pagination": {
                "object_count": 82,
                "page_size": 30,
                "continuation": "eyJwYWdlIjoyfQ"
            },
            "results": [
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": "#605d95",
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F948712803%2F1270446424833%2F1%2Foriginal.20250130-174429?crop=focalpoint&fit=crop&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=a8ccc3d1a005e66037abe6e080956dad",
                        "id": "948712803",
                        "crop_mask": null,
                        "aspect_ratio": "1.905",
                        "focal_point": {
                            "y": 0.5,
                            "x": 0.5
                        },
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F948712803%2F1270446424833%2F1%2Foriginal.20250130-174429?auto=format%2Ccompress&q=75&sharp=10&s=5e2c714795993e86231ebfff0637faeb",
                            "width": 1668,
                            "height": 876
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2024-09-05T01:00:00",
                            "utc": "2024-09-04T18:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-03-14T17:30:00",
                            "utc": "2025-03-14T10:30:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "USD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "1097459172929",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=1097459172929",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "26833242005",
                    "dedup": {
                        "count": 1,
                        "hash": "b89a6d4e74dff42b37574a75029d291b"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-03-13",
                    "end_time": "17:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "USD",
                            "major_value": "3405.80",
                            "value": 340580,
                            "display": "3405.80 USD"
                        },
                        "minimum_ticket_price": {
                            "currency": "USD",
                            "major_value": "3405.80",
                            "value": 340580,
                            "display": "3405.80 USD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-03-14",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1001",
                            "display_name": "Startups & Small Business"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/1",
                            "display_name": "Conference"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Investment",
                            "display_name": "Investment",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Passport",
                            "display_name": "Passport",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Citizenshipbyinvestment",
                            "display_name": "Citizenshipbyinvestment",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Residencybyinvestment",
                            "display_name": "Residencybyinvestment",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "1097459172929",
                    "start_time": "09:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "The Reverie Saigon",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Hồ Chí Minh",
                            "country": "VN",
                            "region": "",
                            "longitude": "106.704549",
                            "localized_address_display": "22-36 Nguyễn Huệ, Hồ Chí Minh, 700000",
                            "postal_code": "700000",
                            "address_1": "22-36 Nguyễn Huệ",
                            "address_2": "",
                            "latitude": "10.7737397",
                            "localized_multi_line_address_display": [
                                "22-36 Nguyễn Huệ",
                                "Hồ Chí Minh, 700000"
                            ],
                            "localized_area_display": "Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "244319633"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Uglobal Immigration Magazine/EB5 Investors Magazine",
                        "profile_type": "organizer",
                        "num_followers": 1032,
                        "url": "https://www.eventbrite.com/o/uglobal-immigration-magazineeb5-investors-magazine-26833242005",
                        "twitter": null,
                        "summary": "EB5 Investors Magazine and Uglobal Immigration Magazine provide professionals involved with the EB-5 visa program and global CBI/RBI programs with the most comprehensive and credible sources of inform...",
                        "num_saves": null,
                        "image_id": null,
                        "followed_by_you": false,
                        "facebook": null,
                        "num_collections": null,
                        "id": "26833242005",
                        "website_url": null,
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "948712803",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "244319633",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "2025 EB-5 & Global Immigration Expo Vietnam",
                    "language": "en-us",
                    "url": "https://www.eventbrite.com/e/2025-eb-5-global-immigration-expo-vietnam-tickets-1097459172929",
                    "hide_start_date": false,
                    "summary": "2025 EB-5 and Global Immigration Expo Vietnam",
                    "is_online_event": false,
                    "eid": "1097459172929",
                    "published": "2024-11-27T18:29:50Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": "#060606",
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F955279463%2F2273927443193%2F1%2Foriginal.20250207-142109?crop=focalpoint&fit=crop&w=156&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.110038610039&fp-y=0.44387755102&s=84a1046097cb0e94ae459c2ed004fd79",
                        "id": "955279463",
                        "crop_mask": null,
                        "aspect_ratio": "1.335",
                        "focal_point": {
                            "y": 0.44387755102,
                            "x": 0.110038610039
                        },
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F955279463%2F2273927443193%2F1%2Foriginal.20250207-142109?auto=format%2Ccompress&q=75&sharp=10&s=f814762c063077814b516e7a47091324",
                            "width": 1141,
                            "height": 854
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2024-12-23T00:00:00",
                            "utc": "2024-12-22T17:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-02-26T12:00:00",
                            "utc": "2025-02-26T05:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "USD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "1123111178769",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=1123111178769",
                    "urgency_signals": {
                        "messages": [
                            "fewTickets"
                        ],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "90144061073",
                    "dedup": {
                        "count": 1,
                        "hash": "ef0147b31de2a9ae3ee7671bf411876a"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-02-26",
                    "end_time": "14:30",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "USD",
                            "major_value": "150.00",
                            "value": 15000,
                            "display": "150.00 USD"
                        },
                        "minimum_ticket_price": {
                            "currency": "USD",
                            "major_value": "0.00",
                            "value": 0,
                            "display": "0.00 USD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-02-26",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1011",
                            "display_name": "Investment"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/9",
                            "display_name": "Class, Training, or Workshop"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Networking",
                            "display_name": "Networking",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Knowledge",
                            "display_name": "Knowledge",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Professionaldevelopment",
                            "display_name": "Professionaldevelopment",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Lunchtime",
                            "display_name": "Lunchtime",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/lunch_learn",
                            "display_name": "lunch_learn",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "1123111178769",
                    "start_time": "12:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Park Hyatt Saigon",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Ho Chi Minh City",
                            "country": "VN",
                            "region": "Hồ Chí Minh",
                            "longitude": "106.7033802",
                            "localized_address_display": "2 Công trường Lam Sơn, Ho Chi Minh City, Hồ Chí Minh 700000",
                            "postal_code": "700000",
                            "address_1": "2 Công trường Lam Sơn",
                            "address_2": "",
                            "latitude": "10.7777514",
                            "localized_multi_line_address_display": [
                                "2 Công trường Lam Sơn",
                                "Ho Chi Minh City, Hồ Chí Minh 700000"
                            ],
                            "localized_area_display": "Ho Chi Minh City, Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "247489243"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Vietnam Private Capital Agency (VPCA)",
                        "profile_type": "organizer",
                        "num_followers": 29,
                        "url": "https://www.eventbrite.com/o/vietnam-private-capital-agency-vpca-90144061073",
                        "twitter": null,
                        "summary": "Founded by Vietnam and Southeast Asia's top investors, VPCA aims to foster entrepreneurship in Vietnam through venture capital and private equity, strengthening the region's dynamic capital ecosystem....",
                        "num_saves": null,
                        "image_id": "827482389",
                        "followed_by_you": false,
                        "facebook": null,
                        "num_collections": null,
                        "id": "90144061073",
                        "website_url": "https://www.vpca.vn/",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "955279463",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "247489243",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "LUNCH & LEARN",
                    "language": "en-us",
                    "url": "https://www.eventbrite.com/e/lunch-learn-tickets-1123111178769",
                    "hide_start_date": false,
                    "summary": "Lunch & Learn - a quarterly event exclusively for members of the Vietnam Private Capital Association (VPCA).",
                    "is_online_event": false,
                    "eid": "1123111178769",
                    "published": "2024-12-23T18:29:35Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": "#989884",
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F787959789%2F178938166142%2F1%2Foriginal.20240612-032233?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C102%2C1920%2C960&s=791ba8631dd02c15a2a7ba489bad3065",
                        "id": "787959789",
                        "crop_mask": {
                            "width": 1920,
                            "height": 960,
                            "top_left": {
                                "y": 102,
                                "x": 0
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F787959789%2F178938166142%2F1%2Foriginal.20240612-032233?auto=format%2Ccompress&q=75&sharp=10&s=7e5b71ca0260f0f34428a8a3d749e848",
                            "width": 1920,
                            "height": 1080
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2022-12-01T23:55:00",
                            "utc": "2022-12-01T16:55:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-03-22T11:00:00",
                            "utc": "2025-03-22T04:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "USD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "1108945538959",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=1108945538959",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "8085735703",
                    "dedup": {
                        "count": 1,
                        "hash": "ab26d2f6e15c2f2d6a9df320653ee989"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-03-20",
                    "end_time": "22:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "USD",
                            "major_value": "79.00",
                            "value": 7900,
                            "display": "79.00 USD"
                        },
                        "minimum_ticket_price": {
                            "currency": "USD",
                            "major_value": "25.64",
                            "value": 2564,
                            "display": "25.64 USD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-03-22",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1001",
                            "display_name": "Startups & Small Business"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/9",
                            "display_name": "Class, Training, or Workshop"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Business",
                            "display_name": "Business",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Dtsgc",
                            "display_name": "Dtsgc",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/business_networking",
                            "display_name": "business_networking",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/kinh_doanh",
                            "display_name": "kinh_doanh",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/bán_hàng",
                            "display_name": "bán_hàng",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/doanh_nhân",
                            "display_name": "doanh_nhân",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/kỹ_năng",
                            "display_name": "kỹ_năng",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/phát_triển_bản_thân",
                            "display_name": "phát_triển_bản_thân",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/pham_thanh_long",
                            "display_name": "pham_thanh_long",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/đánh_thức_sự_giàu_có",
                            "display_name": "đánh_thức_sự_giàu_có",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "1108945538959",
                    "start_time": "08:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Grand Palace Wedding And Convention",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Tân Bình",
                            "country": "VN",
                            "region": "Thành phố Hồ Chí Minh",
                            "longitude": "106.6559084",
                            "localized_address_display": "142/18 Đường Cộng Hòa, Tân Bình, Thành phố Hồ Chí Minh",
                            "address_1": "142/18 Đường Cộng Hòa",
                            "address_2": "",
                            "latitude": "10.8037608",
                            "localized_multi_line_address_display": [
                                "142/18 Đường Cộng Hòa",
                                "Tân Bình, Thành phố Hồ Chí Minh"
                            ],
                            "localized_area_display": "Tân Bình, Thành phố Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "245721113"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Luật sư PHẠM THÀNH LONG",
                        "profile_type": "organizer",
                        "num_followers": 8015,
                        "url": "https://www.eventbrite.com/o/luat-su-pham-thanh-long-8085735703",
                        "twitter": "longpt",
                        "summary": "Luật sưPhạm Thành Longlà người sáng lập Công ty Luật Gia Phạm. Với gần 20 năm kinh nghiệm trong chuyên ngành luật Kinh doanh và Luật Sở hữu trí tuệ, ông đã giúp đỡ hơn 34.000 lượt doanh nhân phát triể...",
                        "num_saves": null,
                        "image_id": "36172116",
                        "followed_by_you": false,
                        "facebook": "longguru",
                        "num_collections": null,
                        "id": "8085735703",
                        "website_url": null,
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "787959789",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "245721113",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "ĐÁNH THỨC SỰ GIÀU CÓ 69-  Tp.HCM  (20,21,22/03/2025)",
                    "language": "en-us",
                    "url": "https://www.eventbrite.com/e/anh-thuc-su-giau-co-69-tphcm-202122032025-tickets-1108945538959",
                    "hide_start_date": false,
                    "summary": "Công ty TNHH Đào Tạo Doanh Nhân phối hợp cùng Diễn giả/Luật sư Phạm Thành Long",
                    "is_online_event": false,
                    "eid": "1108945538959",
                    "published": "2024-12-09T06:03:41Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": "#eca6a6",
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F937385493%2F1929007668353%2F1%2Foriginal.20250116-152548?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1600%2C800&s=13e2658c1ae7768bea25c4888aa5cbb1",
                        "id": "937385493",
                        "crop_mask": {
                            "width": 1600,
                            "height": 800,
                            "top_left": {
                                "y": 0,
                                "x": 0
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F937385493%2F1929007668353%2F1%2Foriginal.20250116-152548?auto=format%2Ccompress&q=75&sharp=10&s=101fd05ce1d21de2d1fa90194bcf0087",
                            "width": 1600,
                            "height": 800
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2024-12-03T00:00:00",
                            "utc": "2024-12-02T17:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-03-06T23:30:00",
                            "utc": "2025-03-06T16:30:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "USD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "1105385861869",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=1105385861869",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "77240584613",
                    "dedup": {
                        "count": 1,
                        "hash": "0542a225d4b4b7add5409f78f802e171"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-03-07",
                    "end_time": "15:30",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "USD",
                            "major_value": "20.00",
                            "value": 2000,
                            "display": "20.00 USD"
                        },
                        "minimum_ticket_price": {
                            "currency": "USD",
                            "major_value": "16.00",
                            "value": 1600,
                            "display": "16.00 USD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": false,
                        "is_sold_out": true
                    },
                    "end_date": "2025-03-08",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/13999",
                            "display_name": "Other"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/113",
                            "display_name": "Community & Culture",
                            "localized": {
                                "display_name": "Community & Culture"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/1",
                            "display_name": "Conference"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Christian",
                            "display_name": "Christian",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Empowerment",
                            "display_name": "Empowerment",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Women",
                            "display_name": "Women",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Vietnam",
                            "display_name": "Vietnam",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Bloom",
                            "display_name": "Bloom",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/2025",
                            "display_name": "2025",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Christianwomen",
                            "display_name": "Christianwomen",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/women_empowerment",
                            "display_name": "women_empowerment",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/womens_conference",
                            "display_name": "womens_conference",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/church_event",
                            "display_name": "church_event",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "1105385861869",
                    "start_time": "19:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "River Church",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Ho Chi Minh City",
                            "country": "VN",
                            "region": "",
                            "longitude": "106.6995488",
                            "localized_address_display": "11 Nguyễn Thị Thập Khu đô thị Him Lam, Quận 7, Ho Chi Minh City, 00000",
                            "postal_code": "00000",
                            "address_1": "11 Nguyễn Thị Thập",
                            "address_2": "Khu đô thị Him Lam, Quận 7",
                            "latitude": "10.7406376",
                            "localized_multi_line_address_display": [
                                "11 Nguyễn Thị Thập",
                                "Khu đô thị Him Lam, Quận 7",
                                "Ho Chi Minh City, 00000"
                            ],
                            "localized_area_display": "Ho Chi Minh City"
                        },
                        "venue_profile_url": "",
                        "id": "191727979"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "River Church",
                        "profile_type": "organizer",
                        "num_followers": 56,
                        "url": "https://www.eventbrite.com/o/river-church-77240584613",
                        "twitter": null,
                        "summary": "We are an International Church for the English speaking community in Ho Chi Minh City, Vietnam. When you are on our campus, we want you to experience uplifting music, encouraging messages, friendly pe...",
                        "num_saves": null,
                        "image_id": "671334299",
                        "followed_by_you": false,
                        "facebook": "riverchurchvietnam",
                        "num_collections": null,
                        "id": "77240584613",
                        "website_url": "https://riverchurchvietnam.com/",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "937385493",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "191727979",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "She Is Women's Conference 2025 - BLOOM",
                    "language": "en-us",
                    "url": "https://www.eventbrite.com/e/she-is-womens-conference-2025-bloom-tickets-1105385861869",
                    "hide_start_date": false,
                    "summary": "Dig deep into God's Word to grow in faith and knowledge. Embrace the journey as we bloom into who He calls us to be.",
                    "is_online_event": false,
                    "eid": "1105385861869",
                    "published": "2024-12-04T12:58:46Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": "#3a342c",
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?w=400&auto=format%2Ccompress&q=75&sharp=10&s=38c457d0fbd2274456bf4688975ff7cd",
                        "id": "918826313",
                        "crop_mask": null,
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826313%2F188149727845%2F1%2Foriginal.20241217-123211?auto=format%2Ccompress&q=75&sharp=10&s=fd1604f4d11232f987222b8c81fbe7e9",
                            "width": 2160,
                            "height": 1080
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "1970-01-01T00:00:00",
                            "utc": "1969-12-31T16:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-02-21T22:00:00",
                            "utc": "2025-02-21T15:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "AUD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "1116482141139",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=1116482141139",
                    "urgency_signals": {
                        "messages": [
                            "salesEndSoon"
                        ],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "104664652651",
                    "dedup": {
                        "count": 1,
                        "hash": "d6cdd9060a6e617e8baad2e6b4f51f44"
                    },
                    "num_children": 44,
                    "debug_info": {},
                    "parent_url": "https://www.eventbrite.com.au/e/young-it-professionals-in-ho-chi-minh-city-social-tickets-1116482040839",
                    "hide_end_date": false,
                    "start_date": "2025-02-21",
                    "end_time": "22:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "AUD",
                            "major_value": "6.61",
                            "value": 661,
                            "display": "6.61 AUD"
                        },
                        "minimum_ticket_price": {
                            "currency": "AUD",
                            "major_value": "6.61",
                            "value": 661,
                            "display": "6.61 AUD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-02-21",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/2004",
                            "display_name": "High Tech"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/102",
                            "display_name": "Science & Technology",
                            "localized": {
                                "display_name": "Science & Technology"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/10",
                            "display_name": "Meeting or Networking Event"
                        }
                    ],
                    "eventbrite_event_id": "1116482141139",
                    "start_time": "17:30",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "In SaiGong",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Ho Chi Minh City",
                            "country": "VN",
                            "region": "Ho Chi Minh City",
                            "longitude": "106.701555",
                            "localized_address_display": "29 Đ. Huỳnh Thúc Kháng, Street, Quận 1, Ho Chi Minh City, Ho Chi Minh City 02108",
                            "postal_code": "02108",
                            "address_1": "29 Đ. Huỳnh Thúc Kháng, Street, Quận 1",
                            "address_2": "",
                            "latitude": "10.768692",
                            "localized_multi_line_address_display": [
                                "29 Đ. Huỳnh Thúc Kháng, Street, Quận 1",
                                "Ho Chi Minh City, Ho Chi Minh City 02108"
                            ],
                            "localized_area_display": "Ho Chi Minh City, Ho Chi Minh City"
                        },
                        "venue_profile_url": "",
                        "id": "246784513"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "IT Social Ho Chi Minh City",
                        "profile_type": "organizer",
                        "num_followers": 8,
                        "url": "https://www.eventbrite.com.au/o/it-social-ho-chi-minh-city-104664652651",
                        "twitter": null,
                        "summary": "IT Social Ho Chi Minh City, is the FIRST regular after-work social event.\n\nIt is for anyone interested in technology such as professionals, students and job seekers.\nIt is also for those interested in...",
                        "num_saves": null,
                        "image_id": "918825943",
                        "followed_by_you": false,
                        "facebook": "IT.Social.Sydney",
                        "num_collections": null,
                        "id": "104664652651",
                        "website_url": "https://itsocial.com.au",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "918826313",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "246784513",
                    "checkout_flow": "widget",
                    "series_id": "1116482040839",
                    "name": "Young IT Professionals in Ho Chi Minh City Social",
                    "language": "en-us",
                    "url": "https://www.eventbrite.com.au/e/young-it-professionals-in-ho-chi-minh-city-social-tickets-1116482141139",
                    "hide_start_date": false,
                    "summary": "Social event to connect with other 20s and 30s young professionals in the IT field.\n\nCome and meet your peers in a fun, casual atmosphere. No matter if you are senior/management or junior/student, you will feel welcome.\n\nJOIN on the website for FREE entry offers: https://itsocial.com.au/\nJoin the WhatsApp group on the website above to meet people and for directions if lost!\n\nSocialise, share your knowledge and make friends!\n\n\n\ntechnology tech professional",
                    "is_online_event": false,
                    "eid": "1116482141139",
                    "published": "2024-12-17T12:32:29Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": "#61574a",
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826113%2F188149727845%2F1%2Foriginal.20241217-123150?w=400&auto=format%2Ccompress&q=75&sharp=10&s=d1a7106902aea6443f83ff1416ca04b8",
                        "id": "918826113",
                        "crop_mask": null,
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826113%2F188149727845%2F1%2Foriginal.20241217-123150?auto=format%2Ccompress&q=75&sharp=10&s=706171d0d1036ce0215884639d0c39c1",
                            "width": 2160,
                            "height": 1080
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "1970-01-01T00:00:00",
                            "utc": "1969-12-31T16:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-02-21T22:00:00",
                            "utc": "2025-02-21T15:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "AUD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "1116481479159",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=1116481479159",
                    "urgency_signals": {
                        "messages": [
                            "salesEndSoon"
                        ],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "104664652651",
                    "dedup": {
                        "count": 1,
                        "hash": "effe9b97714b73ee9ec3eb8e135f1ee4"
                    },
                    "num_children": 44,
                    "debug_info": {},
                    "parent_url": "https://www.eventbrite.com.au/e/data-science-analytics-meetup-and-chat-ho-chi-minh-city-tickets-1116481378859",
                    "hide_end_date": false,
                    "start_date": "2025-02-21",
                    "end_time": "22:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "AUD",
                            "major_value": "6.61",
                            "value": 661,
                            "display": "6.61 AUD"
                        },
                        "minimum_ticket_price": {
                            "currency": "AUD",
                            "major_value": "6.61",
                            "value": 661,
                            "display": "6.61 AUD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-02-21",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/2004",
                            "display_name": "High Tech"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/102",
                            "display_name": "Science & Technology",
                            "localized": {
                                "display_name": "Science & Technology"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/10",
                            "display_name": "Meeting or Networking Event"
                        }
                    ],
                    "eventbrite_event_id": "1116481479159",
                    "start_time": "17:30",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Craft Beer - East West Brewing Co. - Sai Gon",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Ho Chi Minh City",
                            "country": "VN",
                            "region": "Ho Chi Minh City",
                            "longitude": "106.693547",
                            "localized_address_display": "181 Lý Tự Trọng, Phường Bến Thành, Quận 1, Ho Chi Minh City, Ho Chi Minh City 717000",
                            "postal_code": "717000",
                            "address_1": "181 Lý Tự Trọng, Phường Bến Thành, Quận 1",
                            "address_2": "",
                            "latitude": "10.773056",
                            "localized_multi_line_address_display": [
                                "181 Lý Tự Trọng, Phường Bến Thành, Quận 1",
                                "Ho Chi Minh City, Ho Chi Minh City 717000"
                            ],
                            "localized_area_display": "Ho Chi Minh City, Ho Chi Minh City"
                        },
                        "venue_profile_url": "",
                        "id": "251975053"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "IT Social Ho Chi Minh City",
                        "profile_type": "organizer",
                        "num_followers": 8,
                        "url": "https://www.eventbrite.com.au/o/it-social-ho-chi-minh-city-104664652651",
                        "twitter": null,
                        "summary": "IT Social Ho Chi Minh City, is the FIRST regular after-work social event.\n\nIt is for anyone interested in technology such as professionals, students and job seekers.\nIt is also for those interested in...",
                        "num_saves": null,
                        "image_id": "918825943",
                        "followed_by_you": false,
                        "facebook": "IT.Social.Sydney",
                        "num_collections": null,
                        "id": "104664652651",
                        "website_url": "https://itsocial.com.au",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "918826113",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "251975053",
                    "checkout_flow": "widget",
                    "series_id": "1116481378859",
                    "name": "Data Science & Analytics meetup and chat Ho Chi Minh City",
                    "language": "en-us",
                    "url": "https://www.eventbrite.com.au/e/data-science-analytics-meetup-and-chat-ho-chi-minh-city-tickets-1116481479159",
                    "hide_start_date": false,
                    "summary": "Meet other people in the data field!\n  \n  socialise, connect, share knowledge\n  relax after work\n  \n  \n  Cost Online: Just a 90000 VND online donation to participate. If you don't buy online, entry costs 180000 VND at door.\n  JOIN on the website for FREE entry offers: https://itsocial.com.au/\n  Join the WhatsApp group on the website above to meet people and for directions if lost!\n  \n  \n  \n  data science data engineering data analysis data analytics data visualisation machine learning ml ai arti",
                    "is_online_event": false,
                    "eid": "1116481479159",
                    "published": "2024-12-17T12:32:08Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": "#dce3db",
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918851883%2F188149727845%2F1%2Foriginal.20241217-132534?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=0f537f3980cb922789cf47561ae3b86c",
                        "id": "918851883",
                        "crop_mask": {
                            "width": 2160,
                            "height": 1080,
                            "top_left": {
                                "y": 0,
                                "x": 0
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918851883%2F188149727845%2F1%2Foriginal.20241217-132534?auto=format%2Ccompress&q=75&sharp=10&s=d15dbdc1d4f47f5156c8a855d80e1364",
                            "width": 2160,
                            "height": 1080
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "1970-01-01T00:00:00",
                            "utc": "1969-12-31T16:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-02-21T22:00:00",
                            "utc": "2025-02-21T15:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "AUD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "1116520686429",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=1116520686429",
                    "urgency_signals": {
                        "messages": [
                            "salesEndSoon"
                        ],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "104666012101",
                    "dedup": {
                        "count": 1,
                        "hash": "8d0e1fb15acebf211c3cab144a06845b"
                    },
                    "num_children": 44,
                    "debug_info": {},
                    "parent_url": "https://www.eventbrite.com.au/e/meet-people-social-ho-chi-minh-city-travellers-locals-mingle-tickets-1116520576099",
                    "hide_end_date": false,
                    "start_date": "2025-02-21",
                    "end_time": "22:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "AUD",
                            "major_value": "6.61",
                            "value": 661,
                            "display": "6.61 AUD"
                        },
                        "minimum_ticket_price": {
                            "currency": "AUD",
                            "major_value": "6.61",
                            "value": 661,
                            "display": "6.61 AUD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-02-21",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/13009",
                            "display_name": "Language"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/113",
                            "display_name": "Community & Culture",
                            "localized": {
                                "display_name": "Community & Culture"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/11",
                            "display_name": "Party or Social Gathering"
                        }
                    ],
                    "eventbrite_event_id": "1116520686429",
                    "start_time": "17:30",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "In SaiGong",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Ho Chi Minh City",
                            "country": "VN",
                            "region": "Ho Chi Minh City",
                            "longitude": "106.701555",
                            "localized_address_display": "29 Đ. Huỳnh Thúc Kháng, Street, Quận 1, Ho Chi Minh City, Ho Chi Minh City 02108",
                            "postal_code": "02108",
                            "address_1": "29 Đ. Huỳnh Thúc Kháng, Street, Quận 1",
                            "address_2": "",
                            "latitude": "10.768692",
                            "localized_multi_line_address_display": [
                                "29 Đ. Huỳnh Thúc Kháng, Street, Quận 1",
                                "Ho Chi Minh City, Ho Chi Minh City 02108"
                            ],
                            "localized_area_display": "Ho Chi Minh City, Ho Chi Minh City"
                        },
                        "venue_profile_url": "",
                        "id": "246789753"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Meet People Social Ho Chi Minh City",
                        "profile_type": "organizer",
                        "num_followers": 11,
                        "url": "https://www.eventbrite.com.au/o/meet-people-social-ho-chi-minh-city-104666012101",
                        "twitter": null,
                        "summary": "Meet People Social Ho Chi Minh City, is a regular social event where you can socialise and meet new people.\n\nTravelling? Local and want to expand your circle? Looking for some work?\n\nJoin us for frien...",
                        "num_saves": null,
                        "image_id": "918851793",
                        "followed_by_you": false,
                        "facebook": "asobu.sydney",
                        "num_collections": null,
                        "id": "104666012101",
                        "website_url": "https://meetpeoplesocial.com",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "918851883",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "246789753",
                    "checkout_flow": "widget",
                    "series_id": "1116520576099",
                    "name": "Meet People Social Ho Chi Minh City | Travellers & Locals Mingle",
                    "language": "en-us",
                    "url": "https://www.eventbrite.com.au/e/meet-people-social-ho-chi-minh-city-travellers-locals-mingle-tickets-1116520686429",
                    "hide_start_date": false,
                    "summary": "Drink specials.\nWhat: Friends, Music, Drinks, Games, Prizes!\nWhen: 5:30pm every Friday\nWhere: In SaiGong. Downstairs Level.\nCost Online: Just a 90000 VND online donation to participate. If you don't buy online, entry costs 180000 VND at door.\n\nJOIN on the website for FREE entry offers: https://meetpeoplesocial.com/\nJoin the WhatsApp group on the website above to meet people and for directions if lost!\n\nMeet People Social Ho Chi Minh City, is a regular social event where you can socialise and mee",
                    "is_online_event": false,
                    "eid": "1116520686429",
                    "published": "2024-12-17T13:25:50Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": "#796351",
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918852023%2F188149727845%2F1%2Foriginal.20241217-132552?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=7fb335b3c5e503037c2d66d033ed1921",
                        "id": "918852023",
                        "crop_mask": {
                            "width": 2160,
                            "height": 1080,
                            "top_left": {
                                "y": 0,
                                "x": 0
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918852023%2F188149727845%2F1%2Foriginal.20241217-132552?auto=format%2Ccompress&q=75&sharp=10&s=8414b62c638f37c571d2479189ba5888",
                            "width": 2160,
                            "height": 1080
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "1970-01-01T00:00:00",
                            "utc": "1969-12-31T16:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-02-21T22:00:00",
                            "utc": "2025-02-21T15:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "AUD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "1116521388529",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=1116521388529",
                    "urgency_signals": {
                        "messages": [
                            "salesEndSoon"
                        ],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "104666012101",
                    "dedup": {
                        "count": 1,
                        "hash": "9c7ff34441ff731daef9ef8b5168cb53"
                    },
                    "num_children": 44,
                    "debug_info": {},
                    "parent_url": "https://www.eventbrite.com.au/e/ho-chi-minh-city-language-exchange-make-friends-learn-languages-culture-tickets-1116521258139",
                    "hide_end_date": false,
                    "start_date": "2025-02-21",
                    "end_time": "22:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "AUD",
                            "major_value": "6.61",
                            "value": 661,
                            "display": "6.61 AUD"
                        },
                        "minimum_ticket_price": {
                            "currency": "AUD",
                            "major_value": "6.61",
                            "value": 661,
                            "display": "6.61 AUD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-02-21",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/13009",
                            "display_name": "Language"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/113",
                            "display_name": "Community & Culture",
                            "localized": {
                                "display_name": "Community & Culture"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/11",
                            "display_name": "Party or Social Gathering"
                        }
                    ],
                    "eventbrite_event_id": "1116521388529",
                    "start_time": "17:30",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Craft Beer - East West Brewing Co. - Sai Gon",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Ho Chi Minh City",
                            "country": "VN",
                            "region": "Ho Chi Minh City",
                            "longitude": "106.693547",
                            "localized_address_display": "181 Lý Tự Trọng, Phường Bến Thành, Quận 1, Ho Chi Minh City, Ho Chi Minh City 717000",
                            "postal_code": "717000",
                            "address_1": "181 Lý Tự Trọng, Phường Bến Thành, Quận 1",
                            "address_2": "",
                            "latitude": "10.773056",
                            "localized_multi_line_address_display": [
                                "181 Lý Tự Trọng, Phường Bến Thành, Quận 1",
                                "Ho Chi Minh City, Ho Chi Minh City 717000"
                            ],
                            "localized_area_display": "Ho Chi Minh City, Ho Chi Minh City"
                        },
                        "venue_profile_url": "",
                        "id": "251989383"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Meet People Social Ho Chi Minh City",
                        "profile_type": "organizer",
                        "num_followers": 11,
                        "url": "https://www.eventbrite.com.au/o/meet-people-social-ho-chi-minh-city-104666012101",
                        "twitter": null,
                        "summary": "Meet People Social Ho Chi Minh City, is a regular social event where you can socialise and meet new people.\n\nTravelling? Local and want to expand your circle? Looking for some work?\n\nJoin us for frien...",
                        "num_saves": null,
                        "image_id": "918851793",
                        "followed_by_you": false,
                        "facebook": "asobu.sydney",
                        "num_collections": null,
                        "id": "104666012101",
                        "website_url": "https://meetpeoplesocial.com",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "918852023",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "251989383",
                    "checkout_flow": "widget",
                    "series_id": "1116521258139",
                    "name": "Ho Chi Minh City Language Exchange | Make Friends, Learn Languages & Culture",
                    "language": "en-us",
                    "url": "https://www.eventbrite.com.au/e/ho-chi-minh-city-language-exchange-make-friends-learn-languages-culture-tickets-1116521388529",
                    "hide_start_date": false,
                    "summary": "Learn a new language at this language exchange event!\n  Come and make new friends in a fun, casual atmosphere. No matter which country or background, you will feel welcome.\n  Socialise, share your knowledge or get new ideas on where to meet people or places to go in Ho Chi Minh City.\n  \n  Cost Online: Just a 90000 VND online donation to participate. If you don't buy online, entry costs 180000 VND at door.\n  JOIN on the website for FREE entry offers: https://meetpeoplesocial.com/\n  Join the Whats",
                    "is_online_event": false,
                    "eid": "1116521388529",
                    "published": "2024-12-17T13:26:08Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": "#f6eee6",
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826013%2F188149727845%2F1%2Foriginal.20241217-123130?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=b123d9c82fba712e2801a4ef4dc8167a",
                        "id": "918826013",
                        "crop_mask": {
                            "width": 2160,
                            "height": 1080,
                            "top_left": {
                                "y": 0,
                                "x": 0
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F918826013%2F188149727845%2F1%2Foriginal.20241217-123130?auto=format%2Ccompress&q=75&sharp=10&s=8f960c76bff3bf897cb21daaefcb5973",
                            "width": 2160,
                            "height": 1080
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "1970-01-01T00:00:00",
                            "utc": "1969-12-31T16:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-02-21T22:00:00",
                            "utc": "2025-02-21T15:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "AUD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "1116480877359",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=1116480877359",
                    "urgency_signals": {
                        "messages": [
                            "salesEndSoon"
                        ],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "104664652651",
                    "dedup": {
                        "count": 1,
                        "hash": "0a611daf0926933f28c508ea5cec4726"
                    },
                    "num_children": 44,
                    "debug_info": {},
                    "parent_url": "https://www.eventbrite.com.au/e/it-social-ho-chi-minh-city-data-technology-cybersecurity-it-tickets-1116480636639",
                    "hide_end_date": false,
                    "start_date": "2025-02-21",
                    "end_time": "22:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "AUD",
                            "major_value": "6.61",
                            "value": 661,
                            "display": "6.61 AUD"
                        },
                        "minimum_ticket_price": {
                            "currency": "AUD",
                            "major_value": "6.61",
                            "value": 661,
                            "display": "6.61 AUD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-02-21",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/2004",
                            "display_name": "High Tech"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/102",
                            "display_name": "Science & Technology",
                            "localized": {
                                "display_name": "Science & Technology"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/10",
                            "display_name": "Meeting or Networking Event"
                        }
                    ],
                    "eventbrite_event_id": "1116480877359",
                    "start_time": "17:30",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "In SaiGong",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Ho Chi Minh City",
                            "country": "VN",
                            "region": "Ho Chi Minh City",
                            "longitude": "106.701555",
                            "localized_address_display": "29 Đ. Huỳnh Thúc Kháng, Street, Quận 1, Ho Chi Minh City, Ho Chi Minh City 02108",
                            "postal_code": "02108",
                            "address_1": "29 Đ. Huỳnh Thúc Kháng, Street, Quận 1",
                            "address_2": "",
                            "latitude": "10.768692",
                            "localized_multi_line_address_display": [
                                "29 Đ. Huỳnh Thúc Kháng, Street, Quận 1",
                                "Ho Chi Minh City, Ho Chi Minh City 02108"
                            ],
                            "localized_area_display": "Ho Chi Minh City, Ho Chi Minh City"
                        },
                        "venue_profile_url": "",
                        "id": "246784513"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "IT Social Ho Chi Minh City",
                        "profile_type": "organizer",
                        "num_followers": 8,
                        "url": "https://www.eventbrite.com.au/o/it-social-ho-chi-minh-city-104664652651",
                        "twitter": null,
                        "summary": "IT Social Ho Chi Minh City, is the FIRST regular after-work social event.\n\nIt is for anyone interested in technology such as professionals, students and job seekers.\nIt is also for those interested in...",
                        "num_saves": null,
                        "image_id": "918825943",
                        "followed_by_you": false,
                        "facebook": "IT.Social.Sydney",
                        "num_collections": null,
                        "id": "104664652651",
                        "website_url": "https://itsocial.com.au",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "918826013",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "246784513",
                    "checkout_flow": "widget",
                    "series_id": "1116480636639",
                    "name": "IT Social Ho Chi Minh City | Data, Technology, Cybersecurity, IT",
                    "language": "en-us",
                    "url": "https://www.eventbrite.com.au/e/it-social-ho-chi-minh-city-data-technology-cybersecurity-it-tickets-1116480877359",
                    "hide_start_date": false,
                    "summary": "Drink specials.\nWhat: Friends, Music, Drinks, Games, Prizes!\nWhen: 5:30pm every Friday\nWhere: In SaiGong. Downstairs Level.\nCost Online: Just a 90000 VND online donation to participate. If you don't buy online, entry costs 180000 VND at door.\n\nJOIN on the website for FREE entry offers: https://itsocial.com.au/\nJoin the WhatsApp group on the website above to meet people and for directions if lost!\n\nIT Social Ho Chi Minh City, is the FIRST regular after-work social event.\nIt is for anyone interest",
                    "is_online_event": false,
                    "eid": "1116480877359",
                    "published": "2024-12-17T12:31:48Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": null,
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F792374599%2F220572363630%2F1%2Foriginal.20220613-094922?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=56%2C0%2C1000%2C500&s=a36ddd932a4786c2212b5ad7f549b83c",
                        "id": "792374599",
                        "crop_mask": {
                            "width": 1000,
                            "height": 500,
                            "top_left": {
                                "y": 0,
                                "x": 56
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F792374599%2F220572363630%2F1%2Foriginal.20220613-094922?auto=format%2Ccompress&q=75&sharp=10&s=34f7978849cb865cf7b4e5c299b63812",
                            "width": 1113,
                            "height": 500
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2024-06-19T00:00:00",
                            "utc": "2024-06-18T17:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-02-23T18:00:00",
                            "utc": "2025-02-23T11:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "SGD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "928377621457",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=928377621457",
                    "urgency_signals": {
                        "messages": [
                            "salesEndSoon"
                        ],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "14657133729",
                    "dedup": {
                        "count": 3,
                        "hash": "a9db1e8407189a1a0e7fa745e9e83f67"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-02-24",
                    "end_time": "17:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2773.63",
                            "value": 277363,
                            "display": "2773.63 SGD"
                        },
                        "minimum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2773.63",
                            "value": 277363,
                            "display": "2773.63 SGD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-02-26",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1002",
                            "display_name": "Finance"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/9",
                            "display_name": "Class, Training, or Workshop"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/risk_management",
                            "display_name": "risk_management",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/corporate_training",
                            "display_name": "corporate_training",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/training_course",
                            "display_name": "training_course",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/corporate_finance",
                            "display_name": "corporate_finance",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/corporate_treasury",
                            "display_name": "corporate_treasury",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/treasury_risk",
                            "display_name": "treasury_risk",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "928377621457",
                    "start_time": "09:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Pullman Saigon Centre",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Singapore",
                            "country": "VN",
                            "region": "Thành phố Hồ Chí Minh",
                            "longitude": "106.691666",
                            "localized_address_display": "148 Đường Trần Hưng Đạo, Singapore, Thành phố Hồ Chí Minh 070000",
                            "postal_code": "070000",
                            "address_1": "148 Đường Trần Hưng Đạo",
                            "address_2": "",
                            "latitude": "10.7643345",
                            "localized_multi_line_address_display": [
                                "148 Đường Trần Hưng Đạo",
                                "Singapore, Thành phố Hồ Chí Minh 070000"
                            ],
                            "localized_area_display": "Singapore, Thành phố Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "219452799"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Riverstone Training Pte Ltd",
                        "profile_type": "organizer",
                        "num_followers": 2405,
                        "url": "https://www.eventbrite.sg/o/riverstone-training-pte-ltd-14657133729",
                        "twitter": null,
                        "summary": "Riverstone Training is a leading provider of financial training solutions for individuals and corporate clients. We offer pre-structured as well as customized training courses to help you enhance your...",
                        "num_saves": null,
                        "image_id": null,
                        "followed_by_you": false,
                        "facebook": "riverstonetraining/riverstone",
                        "num_collections": null,
                        "id": "14657133729",
                        "website_url": "http://www.riverstonetraining.com.sg/",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "792374599",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "219452799",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "Managing Corporate Treasury Risks",
                    "language": "en-gb",
                    "url": "https://www.eventbrite.sg/e/managing-corporate-treasury-risks-tickets-928377621457",
                    "hide_start_date": false,
                    "summary": "This interactive workshop course is apt for participants working in and with corporate treasuries and need to keep pace with developments in",
                    "is_online_event": false,
                    "eid": "928377621457",
                    "published": "2024-06-19T08:31:21Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": null,
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F953082233%2F294438457005%2F1%2Foriginal.20250205-062924?crop=focalpoint&fit=crop&w=512&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=0e68a3c93c9e1f7a85678d840f1ea4b7",
                        "id": "953082233",
                        "crop_mask": null,
                        "aspect_ratio": "1.91",
                        "focal_point": {
                            "y": 0.5,
                            "x": 0.5
                        },
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F953082233%2F294438457005%2F1%2Foriginal.20250205-062924?auto=format%2Ccompress&q=75&sharp=10&s=3d711390d48bf7d702d031f91d556223",
                            "width": 2048,
                            "height": 1073
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-02-05T00:00:00",
                            "utc": "2025-02-04T17:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-02-21T23:30:00",
                            "utc": "2025-02-21T16:30:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "GBP",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "1235395383849",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=1235395383849",
                    "urgency_signals": {
                        "messages": [
                            "salesEndSoon"
                        ],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "19050207481",
                    "dedup": {
                        "count": 1,
                        "hash": "c93cd43e79734b5328bc23813d4ea339"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-02-21",
                    "end_time": "23:30",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "GBP",
                            "major_value": "14.79",
                            "value": 1479,
                            "display": "14.79 GBP"
                        },
                        "minimum_ticket_price": {
                            "currency": "GBP",
                            "major_value": "14.79",
                            "value": 1479,
                            "display": "14.79 GBP"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-02-21",
                    "tags": [
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/103",
                            "display_name": "Music",
                            "localized": {
                                "display_name": "Music"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/6",
                            "display_name": "Concert or Performance"
                        }
                    ],
                    "eventbrite_event_id": "1235395383849",
                    "start_time": "21:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Bardo Cocktails & Arts",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Ho Chi Minh City",
                            "country": "VN",
                            "region": "Hồ Chí Minh",
                            "longitude": "106.7458326",
                            "localized_address_display": "14 Đường Số 11, Ho Chi Minh City, Hồ Chí Minh 70000",
                            "postal_code": "70000",
                            "address_1": "14 Đường Số 11",
                            "address_2": "",
                            "latitude": "10.8051097",
                            "localized_multi_line_address_display": [
                                "14 Đường Số 11",
                                "Ho Chi Minh City, Hồ Chí Minh 70000"
                            ],
                            "localized_area_display": "Ho Chi Minh City, Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "254021863"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Scientific Sound Asia",
                        "profile_type": "organizer",
                        "num_followers": 90,
                        "url": "https://www.eventbrite.com/o/scientific-sound-asia-19050207481",
                        "twitter": "@SaigonSound",
                        "summary": "Scientific Sound Asia is a Vietnam based DJ Agency, Radio Station, Promotions and Event Management Company. We aim to bring the finest International DJ's and Acts to Asia. Our Company is well connecte...",
                        "num_saves": null,
                        "image_id": "57365660",
                        "followed_by_you": false,
                        "facebook": "ScientificSoundContact/",
                        "num_collections": null,
                        "id": "19050207481",
                        "website_url": "http://www.scientificsound.asia",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "953082233",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "254021863",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "UK DJ & Producer Chelsea Singh – Live with Scientific Sound Asia",
                    "language": "en-us",
                    "url": "https://www.eventbrite.com/e/uk-dj-producer-chelsea-singh-live-with-scientific-sound-asia-tickets-1235395383849",
                    "hide_start_date": false,
                    "summary": "Get ready for an electrifying night as Scientific Sound Asia teams up with Hidden Events London to present the legendary Chelsea Singh.",
                    "is_online_event": false,
                    "eid": "1235395383849",
                    "published": "2025-02-05T06:35:05Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": null,
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F792414239%2F220572363630%2F1%2Foriginal.jpg?w=156&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C113%2C156%2C78&s=14b202bda321e335e8bb8c114b2674e8",
                        "id": "792414239",
                        "crop_mask": {
                            "width": 156,
                            "height": 78,
                            "top_left": {
                                "y": 113,
                                "x": 0
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F792414239%2F220572363630%2F1%2Foriginal.jpg?auto=format%2Ccompress&q=75&sharp=10&s=be9987aa221731fcfd20fc10b7433ff2",
                            "width": 156,
                            "height": 289
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2024-06-19T09:00:00",
                            "utc": "2024-06-19T02:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-03-05T18:00:00",
                            "utc": "2025-03-05T11:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "SGD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "928411081537",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=928411081537",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "14657133729",
                    "dedup": {
                        "count": 3,
                        "hash": "6a921ca21d9043d14a3c1bb1f7fc56e2"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-03-06",
                    "end_time": "17:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2054.56",
                            "value": 205456,
                            "display": "2054.56 SGD"
                        },
                        "minimum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2054.56",
                            "value": 205456,
                            "display": "2054.56 SGD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-03-07",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1002",
                            "display_name": "Finance"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/9",
                            "display_name": "Class, Training, or Workshop"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Finance",
                            "display_name": "Finance",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/financial_management",
                            "display_name": "financial_management",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/finance_training",
                            "display_name": "finance_training",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/working_capital",
                            "display_name": "working_capital",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/financial_statements",
                            "display_name": "financial_statements",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/project_finance",
                            "display_name": "project_finance",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/finance_manager",
                            "display_name": "finance_manager",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "928411081537",
                    "start_time": "09:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Pullman Saigon Centre",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Singapore",
                            "country": "VN",
                            "region": "Thành phố Hồ Chí Minh",
                            "longitude": "106.691666",
                            "localized_address_display": "148 Đường Trần Hưng Đạo, Singapore, Thành phố Hồ Chí Minh 070000",
                            "postal_code": "070000",
                            "address_1": "148 Đường Trần Hưng Đạo",
                            "address_2": "",
                            "latitude": "10.7643345",
                            "localized_multi_line_address_display": [
                                "148 Đường Trần Hưng Đạo",
                                "Singapore, Thành phố Hồ Chí Minh 070000"
                            ],
                            "localized_area_display": "Singapore, Thành phố Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "219464129"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Riverstone Training Pte Ltd",
                        "profile_type": "organizer",
                        "num_followers": 2405,
                        "url": "https://www.eventbrite.sg/o/riverstone-training-pte-ltd-14657133729",
                        "twitter": null,
                        "summary": "Riverstone Training is a leading provider of financial training solutions for individuals and corporate clients. We offer pre-structured as well as customized training courses to help you enhance your...",
                        "num_saves": null,
                        "image_id": null,
                        "followed_by_you": false,
                        "facebook": "riverstonetraining/riverstone",
                        "num_collections": null,
                        "id": "14657133729",
                        "website_url": "http://www.riverstonetraining.com.sg/",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "792414239",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "219464129",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "Finance for Non-Finance Managers",
                    "language": "en-us",
                    "url": "https://www.eventbrite.sg/e/finance-for-non-finance-managers-tickets-928411081537",
                    "hide_start_date": false,
                    "summary": "Finance for non-finance managers course is for participants who do not have any finance background or knowledge.",
                    "is_online_event": false,
                    "eid": "928411081537",
                    "published": "2024-06-19T10:04:24Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": null,
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F792365979%2F220572363630%2F1%2Foriginal.jpg?w=156&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C114%2C156%2C78&s=28880d9e99f1227323d9043aebbe1924",
                        "id": "792365979",
                        "crop_mask": {
                            "width": 156,
                            "height": 78,
                            "top_left": {
                                "y": 114,
                                "x": 0
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F792365979%2F220572363630%2F1%2Foriginal.jpg?auto=format%2Ccompress&q=75&sharp=10&s=f89fd654087da354781ae431826b4e4c",
                            "width": 156,
                            "height": 289
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2024-06-19T00:00:00",
                            "utc": "2024-06-18T17:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-02-25T18:00:00",
                            "utc": "2025-02-25T11:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "SGD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "928368213317",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=928368213317",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "14657133729",
                    "dedup": {
                        "count": 2,
                        "hash": "df3fa3aeaed28164edaee9c34ac70835"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-02-26",
                    "end_time": "17:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2773.63",
                            "value": 277363,
                            "display": "2773.63 SGD"
                        },
                        "minimum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2773.63",
                            "value": 277363,
                            "display": "2773.63 SGD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-02-28",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1002",
                            "display_name": "Finance"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/9",
                            "display_name": "Class, Training, or Workshop"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Management",
                            "display_name": "Management",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Riskmanagement",
                            "display_name": "Riskmanagement",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Liquidity",
                            "display_name": "Liquidity",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Managementtraining",
                            "display_name": "Managementtraining",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/risk_management",
                            "display_name": "risk_management",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/management_training",
                            "display_name": "management_training",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/effective_management",
                            "display_name": "effective_management",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "928368213317",
                    "start_time": "09:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Pullman Saigon Centre",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Singapore",
                            "country": "VN",
                            "region": "Thành phố Hồ Chí Minh",
                            "longitude": "106.691666",
                            "localized_address_display": "148 Đường Trần Hưng Đạo, Singapore, Thành phố Hồ Chí Minh 070000",
                            "postal_code": "070000",
                            "address_1": "148 Đường Trần Hưng Đạo",
                            "address_2": "",
                            "latitude": "10.7643345",
                            "localized_multi_line_address_display": [
                                "148 Đường Trần Hưng Đạo",
                                "Singapore, Thành phố Hồ Chí Minh 070000"
                            ],
                            "localized_area_display": "Singapore, Thành phố Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "219450399"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Riverstone Training Pte Ltd",
                        "profile_type": "organizer",
                        "num_followers": 2405,
                        "url": "https://www.eventbrite.sg/o/riverstone-training-pte-ltd-14657133729",
                        "twitter": null,
                        "summary": "Riverstone Training is a leading provider of financial training solutions for individuals and corporate clients. We offer pre-structured as well as customized training courses to help you enhance your...",
                        "num_saves": null,
                        "image_id": null,
                        "followed_by_you": false,
                        "facebook": "riverstonetraining/riverstone",
                        "num_collections": null,
                        "id": "14657133729",
                        "website_url": "http://www.riverstonetraining.com.sg/",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "792365979",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "219450399",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "Effective Liquidity Risk Management",
                    "language": "en-us",
                    "url": "https://www.eventbrite.sg/e/effective-liquidity-risk-management-tickets-928368213317",
                    "hide_start_date": false,
                    "summary": "This interactive workshop course is apt for participants already engaged in or in support of liquidity risk management, either within a give",
                    "is_online_event": false,
                    "eid": "928368213317",
                    "published": "2024-06-19T08:09:15Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": null,
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F792418309%2F220572363630%2F1%2Foriginal.jpg?w=156&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C114%2C156%2C78&s=83774d7c161aa6dcb16c088365069eea",
                        "id": "792418309",
                        "crop_mask": {
                            "width": 156,
                            "height": 78,
                            "top_left": {
                                "y": 114,
                                "x": 0
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F792418309%2F220572363630%2F1%2Foriginal.jpg?auto=format%2Ccompress&q=75&sharp=10&s=c9c5266ea284adac671b1cc3c5acacd0",
                            "width": 156,
                            "height": 289
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2024-06-19T00:00:00",
                            "utc": "2024-06-18T17:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-03-09T18:00:00",
                            "utc": "2025-03-09T11:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "SGD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "928416056417",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=928416056417",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "14657133729",
                    "dedup": {
                        "count": 3,
                        "hash": "34967dfb436a8d3b1a8be217a24f2c12"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-03-10",
                    "end_time": "17:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2773.63",
                            "value": 277363,
                            "display": "2773.63 SGD"
                        },
                        "minimum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2773.63",
                            "value": 277363,
                            "display": "2773.63 SGD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-03-12",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1002",
                            "display_name": "Finance"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/9",
                            "display_name": "Class, Training, or Workshop"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Business",
                            "display_name": "Business",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Investment",
                            "display_name": "Investment",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Strategy",
                            "display_name": "Strategy",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Corporate",
                            "display_name": "Corporate",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Market",
                            "display_name": "Market",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Companies",
                            "display_name": "Companies",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/due_diligence",
                            "display_name": "due_diligence",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/mergers_and_acquisitions",
                            "display_name": "mergers_and_acquisitions",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "928416056417",
                    "start_time": "09:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Pullman Saigon Centre",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Singapore",
                            "country": "VN",
                            "region": "Thành phố Hồ Chí Minh",
                            "longitude": "106.691666",
                            "localized_address_display": "148 Đường Trần Hưng Đạo, Singapore, Thành phố Hồ Chí Minh 070000",
                            "postal_code": "070000",
                            "address_1": "148 Đường Trần Hưng Đạo",
                            "address_2": "",
                            "latitude": "10.7643345",
                            "localized_multi_line_address_display": [
                                "148 Đường Trần Hưng Đạo",
                                "Singapore, Thành phố Hồ Chí Minh 070000"
                            ],
                            "localized_area_display": "Singapore, Thành phố Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "219465379"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Riverstone Training Pte Ltd",
                        "profile_type": "organizer",
                        "num_followers": 2405,
                        "url": "https://www.eventbrite.sg/o/riverstone-training-pte-ltd-14657133729",
                        "twitter": null,
                        "summary": "Riverstone Training is a leading provider of financial training solutions for individuals and corporate clients. We offer pre-structured as well as customized training courses to help you enhance your...",
                        "num_saves": null,
                        "image_id": null,
                        "followed_by_you": false,
                        "facebook": "riverstonetraining/riverstone",
                        "num_collections": null,
                        "id": "14657133729",
                        "website_url": "http://www.riverstonetraining.com.sg/",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "792418309",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "219465379",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "Mergers & Acquisition Masterclass",
                    "language": "en-us",
                    "url": "https://www.eventbrite.sg/e/mergers-acquisition-masterclass-tickets-928416056417",
                    "hide_start_date": false,
                    "summary": "The objective of this program is to provide knowledge, and detailed understanding of equity investments followed in the private equity ind",
                    "is_online_event": false,
                    "eid": "928416056417",
                    "published": "2024-06-19T10:12:55Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": "#ffffff",
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F792407599%2F220572363630%2F1%2Foriginal.20220323-074549?w=216&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C23%2C216%2C108&s=9810eb6ad4a3d73da88a6381c4a8d19a",
                        "id": "792407599",
                        "crop_mask": {
                            "width": 216,
                            "height": 108,
                            "top_left": {
                                "y": 23,
                                "x": 0
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F792407599%2F220572363630%2F1%2Foriginal.20220323-074549?auto=format%2Ccompress&q=75&sharp=10&s=d98bf11db78e8c29935c0140201e5fc5",
                            "width": 216,
                            "height": 154
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2024-06-19T00:00:00",
                            "utc": "2024-06-18T17:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-03-11T18:00:00",
                            "utc": "2025-03-11T11:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "SGD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "928405454707",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=928405454707",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "14657133729",
                    "dedup": {
                        "count": 3,
                        "hash": "772873f7715f57b8275b58cc6f25db8f"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-03-12",
                    "end_time": "17:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2773.63",
                            "value": 277363,
                            "display": "2773.63 SGD"
                        },
                        "minimum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2773.63",
                            "value": 277363,
                            "display": "2773.63 SGD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-03-14",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1002",
                            "display_name": "Finance"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/9",
                            "display_name": "Class, Training, or Workshop"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Business",
                            "display_name": "Business",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Financial",
                            "display_name": "Financial",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Corporate",
                            "display_name": "Corporate",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Fundraising",
                            "display_name": "Fundraising",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Capital",
                            "display_name": "Capital",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/corporate_training",
                            "display_name": "corporate_training",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/corporate_fund",
                            "display_name": "corporate_fund",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "928405454707",
                    "start_time": "09:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Pullman Saigon Centre",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Singapore",
                            "country": "VN",
                            "region": "Thành phố Hồ Chí Minh",
                            "longitude": "106.691666",
                            "localized_address_display": "148 Đường Trần Hưng Đạo, Singapore, Thành phố Hồ Chí Minh 070000",
                            "postal_code": "070000",
                            "address_1": "148 Đường Trần Hưng Đạo",
                            "address_2": "",
                            "latitude": "10.7643345",
                            "localized_multi_line_address_display": [
                                "148 Đường Trần Hưng Đạo",
                                "Singapore, Thành phố Hồ Chí Minh 070000"
                            ],
                            "localized_area_display": "Singapore, Thành phố Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "219462119"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Riverstone Training Pte Ltd",
                        "profile_type": "organizer",
                        "num_followers": 2405,
                        "url": "https://www.eventbrite.sg/o/riverstone-training-pte-ltd-14657133729",
                        "twitter": null,
                        "summary": "Riverstone Training is a leading provider of financial training solutions for individuals and corporate clients. We offer pre-structured as well as customized training courses to help you enhance your...",
                        "num_saves": null,
                        "image_id": null,
                        "followed_by_you": false,
                        "facebook": "riverstonetraining/riverstone",
                        "num_collections": null,
                        "id": "14657133729",
                        "website_url": "http://www.riverstonetraining.com.sg/",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "792407599",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "219462119",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "Corporate Fundraising Masterclass",
                    "language": "en-gb",
                    "url": "https://www.eventbrite.sg/e/corporate-fundraising-masterclass-tickets-928405454707",
                    "hide_start_date": false,
                    "summary": "The course equips you with a comprehension of the various industry standards, strategies, and practices in corporate fundraising. Our course",
                    "is_online_event": false,
                    "eid": "928405454707",
                    "published": "2024-06-19T09:49:38Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": "#d3cad2",
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F922919333%2F178160637274%2F1%2Foriginal.20241224-082833?crop=focalpoint&fit=crop&w=512&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=2cfc71e54a459d823a61c5fb25d8ffbe",
                        "id": "922919333",
                        "crop_mask": null,
                        "aspect_ratio": "1.75",
                        "focal_point": {
                            "y": 0.5,
                            "x": 0.5
                        },
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F922919333%2F178160637274%2F1%2Foriginal.20241224-082833?auto=format%2Ccompress&q=75&sharp=10&s=c410265ab2b345ade0c4a1e552e61fd9",
                            "width": 1393,
                            "height": 798
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "default_message": "Unavailable",
                        "sales_status": "unavailable",
                        "currency": "USD",
                        "message_code": "tickets_unavailable",
                        "message": "Unavailable",
                        "message_type": "default"
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "1123432048499",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=1123432048499",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "10864427335",
                    "dedup": {
                        "count": 1,
                        "hash": "a53605193555f90c44bc9fd00855ec76"
                    },
                    "num_children": 10,
                    "debug_info": {},
                    "parent_url": "https://www.eventbrite.com/e/vietnam-aero-summit-2025-tickets-1123431276189",
                    "hide_end_date": false,
                    "start_date": "2025-03-12",
                    "end_time": "18:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": null,
                        "minimum_ticket_price": null,
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": false,
                        "is_sold_out": false
                    },
                    "end_date": "2025-03-12",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/18004",
                            "display_name": "Air"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/118",
                            "display_name": "Auto, Boat & Air",
                            "localized": {
                                "display_name": "Auto, Boat & Air"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/1",
                            "display_name": "Conference"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Vietnam",
                            "display_name": "Vietnam",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Aviation",
                            "display_name": "Aviation",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Airline",
                            "display_name": "Airline",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Airport",
                            "display_name": "Airport",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Mro",
                            "display_name": "Mro",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/aviation_maintenance",
                            "display_name": "aviation_maintenance",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/aviation_industry",
                            "display_name": "aviation_industry",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/aviation_training",
                            "display_name": "aviation_training",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/aviation_education",
                            "display_name": "aviation_education",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/vietnam_aero_summit_2025",
                            "display_name": "vietnam_aero_summit_2025",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "1123432048499",
                    "start_time": "08:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Equatorial Ho Chi Minh City",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Hồ Chí Minh",
                            "country": "VN",
                            "region": "Hồ Chí Minh",
                            "longitude": "106.6791469",
                            "localized_address_display": "242 Đường Trần Bình Trọng, Hồ Chí Minh, Hồ Chí Minh 70000",
                            "postal_code": "70000",
                            "address_1": "242 Đường Trần Bình Trọng",
                            "address_2": "",
                            "latitude": "10.763075",
                            "localized_multi_line_address_display": [
                                "242 Đường Trần Bình Trọng",
                                "Hồ Chí Minh, Hồ Chí Minh 70000"
                            ],
                            "localized_area_display": "Hồ Chí Minh, Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "247544483"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Innowinn Group",
                        "profile_type": "organizer",
                        "num_followers": 22,
                        "url": "https://www.eventbrite.com/o/innowinn-group-10864427335",
                        "twitter": null,
                        "summary": "Innowinn Group, a well established global consulting business, is an innovative solutions provider for win-win partnership building between its clients. We deliver true value to our customers through ...",
                        "num_saves": null,
                        "image_id": null,
                        "followed_by_you": false,
                        "facebook": null,
                        "num_collections": null,
                        "id": "10864427335",
                        "website_url": null,
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "922919333",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "247544483",
                    "checkout_flow": "widget",
                    "series_id": "1123431276189",
                    "name": "Vietnam Aero Summit 2025",
                    "language": "en-us",
                    "url": "https://www.eventbrite.com/e/vietnam-aero-summit-2025-tickets-1123432048499",
                    "hide_start_date": false,
                    "summary": "Coming to the 3rd annual edition, VAS has been thriving and pioneering as the premier annual aviation show in Vietnam",
                    "is_online_event": false,
                    "eid": "1123432048499",
                    "published": "2024-12-24T08:43:48Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": "#4f37b8",
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F903650773%2F251895722970%2F1%2Foriginal.20241121-070421?crop=focalpoint&fit=crop&w=400&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.0397727272727&fp-y=0.294019933555&s=85e812cf628df5088f7bc4c61135caf9",
                        "id": "903650773",
                        "crop_mask": null,
                        "aspect_ratio": "1.775",
                        "focal_point": {
                            "y": 0.294019933555,
                            "x": 0.0397727272727
                        },
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F903650773%2F251895722970%2F1%2Foriginal.20241121-070421?auto=format%2Ccompress&q=75&sharp=10&s=7bf9e6b9b15fc8f08e93ef71efabeb11",
                            "width": 1920,
                            "height": 1080
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2024-11-21T00:00:00",
                            "utc": "2024-11-20T17:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-03-13T09:00:00",
                            "utc": "2025-03-13T02:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "USD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "1090929652959",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=1090929652959",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "20056267950",
                    "dedup": {
                        "count": 1,
                        "hash": "ee9f9c119ab5752d3799238c58fac23a"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-03-17",
                    "end_time": "17:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "USD",
                            "major_value": "1500.00",
                            "value": 150000,
                            "display": "1500.00 USD"
                        },
                        "minimum_ticket_price": {
                            "currency": "USD",
                            "major_value": "1000.00",
                            "value": 100000,
                            "display": "1000.00 USD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-03-18",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1007",
                            "display_name": "Sales & Marketing"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/1",
                            "display_name": "Conference"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Vietnam",
                            "display_name": "Vietnam",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Leather",
                            "display_name": "Leather",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Shoes",
                            "display_name": "Shoes",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Footwear",
                            "display_name": "Footwear",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Asean",
                            "display_name": "Asean",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/footwearmanufacturing",
                            "display_name": "footwearmanufacturing",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "1090929652959",
                    "start_time": "09:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "胡志明市",
                        "venue_profile_id": null,
                        "address": {
                            "city": "胡志明市",
                            "country": "VN",
                            "region": "胡志明区",
                            "longitude": "106.6296638",
                            "localized_address_display": "Ho Chi Minh City · Vietnam, 胡志明市, 胡志明区 Ho Chi Minh City · Vietnam",
                            "postal_code": "Ho Chi Minh City · Vietnam",
                            "address_1": "Ho Chi Minh City · Vietnam",
                            "address_2": "",
                            "latitude": "10.8230989",
                            "localized_multi_line_address_display": [
                                "Ho Chi Minh City · Vietnam",
                                "胡志明市, 胡志明区 Ho Chi Minh City · Vietnam"
                            ],
                            "localized_area_display": "胡志明市, 胡志明区"
                        },
                        "venue_profile_url": "",
                        "id": "243462733"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "BAO ZUN",
                        "profile_type": "organizer",
                        "num_followers": 7,
                        "url": "https://www.eventbrite.ca/o/bao-zun-20056267950",
                        "twitter": null,
                        "summary": "We are the leading brand E-commerce solutions provider in China, our integrated capabilities encompass all aspects of the E-commerce value chain covering IT solutions, store operations, digital market...",
                        "num_saves": null,
                        "image_id": null,
                        "followed_by_you": false,
                        "facebook": null,
                        "num_collections": null,
                        "id": "20056267950",
                        "website_url": null,
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "903650773",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "243462733",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "Vietnam and Asean Footwear Summit 2025",
                    "language": "en-us",
                    "url": "https://www.eventbrite.ca/e/vietnam-and-asean-footwear-summit-2025-tickets-1090929652959",
                    "hide_start_date": false,
                    "summary": "It aims to provide a platform for experts, manufacturers, brands and government representatives in the industry to gather together to...",
                    "is_online_event": false,
                    "eid": "1090929652959",
                    "published": "2024-11-21T07:56:26Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": null,
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F799153849%2F220572363630%2F1%2Foriginal.jpg?w=156&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C111%2C156%2C78&s=bc5fe041cc121bf03fed25d62f51f89b",
                        "id": "799153849",
                        "crop_mask": {
                            "width": 156,
                            "height": 78,
                            "top_left": {
                                "y": 111,
                                "x": 0
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F799153849%2F220572363630%2F1%2Foriginal.jpg?auto=format%2Ccompress&q=75&sharp=10&s=a6cc1a14b0bf32beda96b036c5442a7b",
                            "width": 156,
                            "height": 289
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2024-01-01T03:00:00",
                            "utc": "2023-12-31T20:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-03-31T02:00:00",
                            "utc": "2025-03-30T19:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "SGD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "938087654427",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=938087654427",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "14657133729",
                    "dedup": {
                        "count": 3,
                        "hash": "03fae00e9f1e51fc2aac51da1f0fd3a6"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-04-01",
                    "end_time": "17:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2054.56",
                            "value": 205456,
                            "display": "2054.56 SGD"
                        },
                        "minimum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2054.56",
                            "value": 205456,
                            "display": "2054.56 SGD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-04-02",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1002",
                            "display_name": "Finance"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/9",
                            "display_name": "Class, Training, or Workshop"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Financial",
                            "display_name": "Financial",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Management",
                            "display_name": "Management",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Analysis",
                            "display_name": "Analysis",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/training_online",
                            "display_name": "training_online",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/training_course",
                            "display_name": "training_course",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/excel_course",
                            "display_name": "excel_course",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/excel_training",
                            "display_name": "excel_training",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "938087654427",
                    "start_time": "09:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Pullman Saigon Centre",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Singapore",
                            "country": "VN",
                            "region": "Thành phố Hồ Chí Minh",
                            "longitude": "106.691666",
                            "localized_address_display": "148 Đường Trần Hưng Đạo, Singapore, Thành phố Hồ Chí Minh 070000",
                            "postal_code": "070000",
                            "address_1": "148 Đường Trần Hưng Đạo",
                            "address_2": "",
                            "latitude": "10.7643345",
                            "localized_multi_line_address_display": [
                                "148 Đường Trần Hưng Đạo",
                                "Singapore, Thành phố Hồ Chí Minh 070000"
                            ],
                            "localized_area_display": "Singapore, Thành phố Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "221017999"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Riverstone Training Pte Ltd",
                        "profile_type": "organizer",
                        "num_followers": 2405,
                        "url": "https://www.eventbrite.sg/o/riverstone-training-pte-ltd-14657133729",
                        "twitter": null,
                        "summary": "Riverstone Training is a leading provider of financial training solutions for individuals and corporate clients. We offer pre-structured as well as customized training courses to help you enhance your...",
                        "num_saves": null,
                        "image_id": null,
                        "followed_by_you": false,
                        "facebook": "riverstonetraining/riverstone",
                        "num_collections": null,
                        "id": "14657133729",
                        "website_url": "http://www.riverstonetraining.com.sg/",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "799153849",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "221017999",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "Basic Excel Training",
                    "language": "en-us",
                    "url": "https://www.eventbrite.sg/e/basic-excel-training-tickets-938087654427",
                    "hide_start_date": false,
                    "summary": "The Excel introductory training course is a complete beginner’s course that includes all the basic concepts in Microsoft Excel. It enables y",
                    "is_online_event": false,
                    "eid": "938087654427",
                    "published": "2024-07-01T02:53:13Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": null,
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F799185769%2F220572363630%2F1%2Foriginal.20220613-090512?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=56%2C0%2C1000%2C500&s=33fbc5c4dd5bfde74b6200c7022a4a80",
                        "id": "799185769",
                        "crop_mask": {
                            "width": 1000,
                            "height": 500,
                            "top_left": {
                                "y": 0,
                                "x": 56
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F799185769%2F220572363630%2F1%2Foriginal.20220613-090512?auto=format%2Ccompress&q=75&sharp=10&s=946848ea30ec383d4d8d2ac85f48fbbe",
                            "width": 1113,
                            "height": 500
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2024-07-01T00:00:00",
                            "utc": "2024-06-30T17:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-03-31T18:00:00",
                            "utc": "2025-03-31T11:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "SGD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "938118145627",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=938118145627",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "14657133729",
                    "dedup": {
                        "count": 4,
                        "hash": "d2760cc1f2d7e373f7e06914580f84a0"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-04-01",
                    "end_time": "17:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2773.63",
                            "value": 277363,
                            "display": "2773.63 SGD"
                        },
                        "minimum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2773.63",
                            "value": 277363,
                            "display": "2773.63 SGD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-04-03",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1011",
                            "display_name": "Investment"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/9",
                            "display_name": "Class, Training, or Workshop"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Venturecapital",
                            "display_name": "Venturecapital",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Venture_capital",
                            "display_name": "Venture_capital",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Venturefunding",
                            "display_name": "Venturefunding",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/training_course",
                            "display_name": "training_course",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/venture_capital_events",
                            "display_name": "venture_capital_events",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "938118145627",
                    "start_time": "09:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Pullman Saigon Centre",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Singapore",
                            "country": "VN",
                            "region": "Thành phố Hồ Chí Minh",
                            "longitude": "106.691666",
                            "localized_address_display": "148 Đường Trần Hưng Đạo, Singapore, Thành phố Hồ Chí Minh 070000",
                            "postal_code": "070000",
                            "address_1": "148 Đường Trần Hưng Đạo",
                            "address_2": "",
                            "latitude": "10.7643345",
                            "localized_multi_line_address_display": [
                                "148 Đường Trần Hưng Đạo",
                                "Singapore, Thành phố Hồ Chí Minh 070000"
                            ],
                            "localized_area_display": "Singapore, Thành phố Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "221025999"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Riverstone Training Pte Ltd",
                        "profile_type": "organizer",
                        "num_followers": 2405,
                        "url": "https://www.eventbrite.sg/o/riverstone-training-pte-ltd-14657133729",
                        "twitter": null,
                        "summary": "Riverstone Training is a leading provider of financial training solutions for individuals and corporate clients. We offer pre-structured as well as customized training courses to help you enhance your...",
                        "num_saves": null,
                        "image_id": null,
                        "followed_by_you": false,
                        "facebook": "riverstonetraining/riverstone",
                        "num_collections": null,
                        "id": "14657133729",
                        "website_url": "http://www.riverstonetraining.com.sg/",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "799185769",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "221025999",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "Venture Capital Investing Masterclass",
                    "language": "en-gb",
                    "url": "https://www.eventbrite.sg/e/venture-capital-investing-masterclass-tickets-938118145627",
                    "hide_start_date": false,
                    "summary": "The course equips you with a comprehension on venture capital both from the viewpoints of industrialists and investors. It also gives you an",
                    "is_online_event": false,
                    "eid": "938118145627",
                    "published": "2024-07-01T04:30:46Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": null,
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F900618313%2F2500311258201%2F1%2Foriginal.20241117-073239?w=405&auto=format%2Ccompress&q=75&sharp=10&s=35fc855db4b430c6a4118e8e9427a21c",
                        "id": "900618313",
                        "crop_mask": null,
                        "aspect_ratio": "2.025",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F900618313%2F2500311258201%2F1%2Foriginal.20241117-073239?auto=format%2Ccompress&q=75&sharp=10&s=0c88978550b1935d28a27846c3f7bc20",
                            "width": 1202,
                            "height": 594
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2024-12-13T23:38:00",
                            "utc": "2024-12-13T16:38:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-03-27T09:00:00",
                            "utc": "2025-03-27T02:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "SGD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "1249791894199",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=1249791894199",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "103320106251",
                    "dedup": {
                        "count": 1,
                        "hash": "f7dbd7cccc26fd2adf9315d6fa0a1e31"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-03-27",
                    "end_time": "12:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "158.27",
                            "value": 15827,
                            "display": "158.27 SGD"
                        },
                        "minimum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "158.27",
                            "value": 15827,
                            "display": "158.27 SGD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-03-27",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1003",
                            "display_name": "Environment & Sustainability"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/9",
                            "display_name": "Class, Training, or Workshop"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Training",
                            "display_name": "Training",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Workshop",
                            "display_name": "Workshop",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Esg",
                            "display_name": "Esg",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Sustainable",
                            "display_name": "Sustainable",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Sustainability",
                            "display_name": "Sustainability",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Ceo",
                            "display_name": "Ceo",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Courses",
                            "display_name": "Courses",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Achievement",
                            "display_name": "Achievement",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/training_course",
                            "display_name": "training_course",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "1249791894199",
                    "start_time": "10:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Saigon Exhibition and Convention Center (SECC)",
                        "venue_profile_id": null,
                        "address": {
                            "city": "vietnam",
                            "country": "VN",
                            "region": "Hồ Chí Minh",
                            "longitude": "106.7213436",
                            "localized_address_display": "799 Đường Nguyễn Văn Linh, vietnam, Hồ Chí Minh 700000",
                            "postal_code": "700000",
                            "address_1": "799 Đường Nguyễn Văn Linh",
                            "address_2": "",
                            "latitude": "10.7306572",
                            "localized_multi_line_address_display": [
                                "799 Đường Nguyễn Văn Linh",
                                "vietnam, Hồ Chí Minh 700000"
                            ],
                            "localized_area_display": "vietnam, Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "255797963"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "International Alliance Certification Network",
                        "profile_type": "organizer",
                        "num_followers": 23,
                        "url": "https://www.eventbrite.sg/o/international-alliance-certification-network-103320106251",
                        "twitter": null,
                        "summary": "TheInternational Alliance Certification Network(iACN) provides globally recognized certifications, connecting professionals worldwide to create and enhance certification programs. We support training ...",
                        "num_saves": null,
                        "image_id": "900583643",
                        "followed_by_you": false,
                        "facebook": null,
                        "num_collections": null,
                        "id": "103320106251",
                        "website_url": "https://www.iacnetwork.org/",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "900618313",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "255797963",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "Certified Sustainability Practitioner - Self Study",
                    "language": "en-us",
                    "url": "https://www.eventbrite.sg/e/certified-sustainability-practitioner-self-study-tickets-1249791894199",
                    "hide_start_date": false,
                    "summary": "Earn a prestigious and respected Sustainability certification course. Self-study at your own pace and submit the assignment.",
                    "is_online_event": false,
                    "eid": "1249791894199",
                    "published": "2025-02-15T01:43:04Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": null,
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F799180799%2F220572363630%2F1%2Foriginal.jpg?w=156&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C114%2C156%2C78&s=9c9ba1c49937d747414251f219ebda3d",
                        "id": "799180799",
                        "crop_mask": {
                            "width": 156,
                            "height": 78,
                            "top_left": {
                                "y": 114,
                                "x": 0
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F799180799%2F220572363630%2F1%2Foriginal.jpg?auto=format%2Ccompress&q=75&sharp=10&s=0cf6a155290e9b85ff5cd838faaf786d",
                            "width": 156,
                            "height": 289
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2024-07-01T00:00:00",
                            "utc": "2024-06-30T17:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-04-13T18:00:00",
                            "utc": "2025-04-13T11:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "SGD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "938110954117",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=938110954117",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "14657133729",
                    "dedup": {
                        "count": 2,
                        "hash": "02a89d9ac9b6b3225d7832ef9066782e"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-04-14",
                    "end_time": "17:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2773.63",
                            "value": 277363,
                            "display": "2773.63 SGD"
                        },
                        "minimum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2773.63",
                            "value": 277363,
                            "display": "2773.63 SGD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-04-16",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1002",
                            "display_name": "Finance"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/9",
                            "display_name": "Class, Training, or Workshop"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Finance",
                            "display_name": "Finance",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Investment",
                            "display_name": "Investment",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Companies",
                            "display_name": "Companies",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Venture_capital",
                            "display_name": "Venture_capital",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/private_equity",
                            "display_name": "private_equity",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/financial_growth",
                            "display_name": "financial_growth",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/company_financial",
                            "display_name": "company_financial",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "938110954117",
                    "start_time": "09:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Pullman Saigon Centre",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Singapore",
                            "country": "VN",
                            "region": "Thành phố Hồ Chí Minh",
                            "longitude": "106.691666",
                            "localized_address_display": "148 Đường Trần Hưng Đạo, Singapore, Thành phố Hồ Chí Minh 070000",
                            "postal_code": "070000",
                            "address_1": "148 Đường Trần Hưng Đạo",
                            "address_2": "",
                            "latitude": "10.7643345",
                            "localized_multi_line_address_display": [
                                "148 Đường Trần Hưng Đạo",
                                "Singapore, Thành phố Hồ Chí Minh 070000"
                            ],
                            "localized_area_display": "Singapore, Thành phố Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "221024539"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Riverstone Training Pte Ltd",
                        "profile_type": "organizer",
                        "num_followers": 2405,
                        "url": "https://www.eventbrite.sg/o/riverstone-training-pte-ltd-14657133729",
                        "twitter": null,
                        "summary": "Riverstone Training is a leading provider of financial training solutions for individuals and corporate clients. We offer pre-structured as well as customized training courses to help you enhance your...",
                        "num_saves": null,
                        "image_id": null,
                        "followed_by_you": false,
                        "facebook": "riverstonetraining/riverstone",
                        "num_collections": null,
                        "id": "14657133729",
                        "website_url": "http://www.riverstonetraining.com.sg/",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "799180799",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "221024539",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "Private Equity Masterclass",
                    "language": "en-us",
                    "url": "https://www.eventbrite.sg/e/private-equity-masterclass-tickets-938110954117",
                    "hide_start_date": false,
                    "summary": "The objective of this program is to provide knowledge, and detailed understanding of equity investments followed in the private equity ind",
                    "is_online_event": false,
                    "eid": "938110954117",
                    "published": "2024-07-01T04:16:02Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": null,
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F799176819%2F220572363630%2F1%2Foriginal.20190401-184354?w=156&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C115%2C156%2C78&s=2ec3f09699c5bb034c6506698f38e55a",
                        "id": "799176819",
                        "crop_mask": {
                            "width": 156,
                            "height": 78,
                            "top_left": {
                                "y": 115,
                                "x": 0
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F799176819%2F220572363630%2F1%2Foriginal.20190401-184354?auto=format%2Ccompress&q=75&sharp=10&s=0a0d3ef5a6b60ac89141b865cc03722c",
                            "width": 156,
                            "height": 289
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2024-07-01T00:00:00",
                            "utc": "2024-06-30T17:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-04-20T18:00:00",
                            "utc": "2025-04-20T11:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "SGD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "938105096597",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=938105096597",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "14657133729",
                    "dedup": {
                        "count": 3,
                        "hash": "15c4f52b25cada3f8d3845a2d00d0d78"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-04-21",
                    "end_time": "17:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2829.10",
                            "value": 282910,
                            "display": "2829.10 SGD"
                        },
                        "minimum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2829.10",
                            "value": 282910,
                            "display": "2829.10 SGD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-04-23",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1002",
                            "display_name": "Finance"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/9",
                            "display_name": "Class, Training, or Workshop"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Enterprise",
                            "display_name": "Enterprise",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Riskmanagement",
                            "display_name": "Riskmanagement",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/risk_management",
                            "display_name": "risk_management",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/training_course",
                            "display_name": "training_course",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "938105096597",
                    "start_time": "09:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Pullman Saigon Centre",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Singapore",
                            "country": "VN",
                            "region": "Thành phố Hồ Chí Minh",
                            "longitude": "106.691666",
                            "localized_address_display": "148 Đường Trần Hưng Đạo, Singapore, Thành phố Hồ Chí Minh 070000",
                            "postal_code": "070000",
                            "address_1": "148 Đường Trần Hưng Đạo",
                            "address_2": "",
                            "latitude": "10.7643345",
                            "localized_multi_line_address_display": [
                                "148 Đường Trần Hưng Đạo",
                                "Singapore, Thành phố Hồ Chí Minh 070000"
                            ],
                            "localized_area_display": "Singapore, Thành phố Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "221023259"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Riverstone Training Pte Ltd",
                        "profile_type": "organizer",
                        "num_followers": 2405,
                        "url": "https://www.eventbrite.sg/o/riverstone-training-pte-ltd-14657133729",
                        "twitter": null,
                        "summary": "Riverstone Training is a leading provider of financial training solutions for individuals and corporate clients. We offer pre-structured as well as customized training courses to help you enhance your...",
                        "num_saves": null,
                        "image_id": null,
                        "followed_by_you": false,
                        "facebook": "riverstonetraining/riverstone",
                        "num_collections": null,
                        "id": "14657133729",
                        "website_url": "http://www.riverstonetraining.com.sg/",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "799176819",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "221023259",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "Enterprise Risk Management",
                    "language": "en-us",
                    "url": "https://www.eventbrite.sg/e/enterprise-risk-management-tickets-938105096597",
                    "hide_start_date": false,
                    "summary": "This interactive workshop course is apt for participants already engaged in or in the process of exploring the institution of Enterprise Ris",
                    "is_online_event": false,
                    "eid": "938105096597",
                    "published": "2024-07-01T04:02:17Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": null,
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F799180499%2F220572363630%2F1%2Foriginal.jpg?w=156&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C115%2C156%2C78&s=a3f24161226c21887e096f68869c3e0b",
                        "id": "799180499",
                        "crop_mask": {
                            "width": 156,
                            "height": 78,
                            "top_left": {
                                "y": 115,
                                "x": 0
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F799180499%2F220572363630%2F1%2Foriginal.jpg?auto=format%2Ccompress&q=75&sharp=10&s=244801cda0d0d8073ed77a1b521757e1",
                            "width": 156,
                            "height": 289
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2024-07-01T01:00:00",
                            "utc": "2024-06-30T18:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-04-27T00:00:00",
                            "utc": "2025-04-26T17:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "SGD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "938109750517",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=938109750517",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "14657133729",
                    "dedup": {
                        "count": 2,
                        "hash": "893077116754b4030bb58b8b88cb16fc"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-04-28",
                    "end_time": "17:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2054.56",
                            "value": 205456,
                            "display": "2054.56 SGD"
                        },
                        "minimum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2054.56",
                            "value": 205456,
                            "display": "2054.56 SGD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-04-29",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1002",
                            "display_name": "Finance"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/9",
                            "display_name": "Class, Training, or Workshop"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Courses",
                            "display_name": "Courses",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Financialmodelling",
                            "display_name": "Financialmodelling",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/professional_development",
                            "display_name": "professional_development",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/finance_training",
                            "display_name": "finance_training",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/excel_course",
                            "display_name": "excel_course",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/excel_training",
                            "display_name": "excel_training",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/financial_modelling",
                            "display_name": "financial_modelling",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "938109750517",
                    "start_time": "09:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Pullman Saigon Centre",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Singapore",
                            "country": "VN",
                            "region": "Thành phố Hồ Chí Minh",
                            "longitude": "106.691666",
                            "localized_address_display": "148 Đường Trần Hưng Đạo, Singapore, Thành phố Hồ Chí Minh 070000",
                            "postal_code": "070000",
                            "address_1": "148 Đường Trần Hưng Đạo",
                            "address_2": "",
                            "latitude": "10.7643345",
                            "localized_multi_line_address_display": [
                                "148 Đường Trần Hưng Đạo",
                                "Singapore, Thành phố Hồ Chí Minh 070000"
                            ],
                            "localized_area_display": "Singapore, Thành phố Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "221024429"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Riverstone Training Pte Ltd",
                        "profile_type": "organizer",
                        "num_followers": 2405,
                        "url": "https://www.eventbrite.sg/o/riverstone-training-pte-ltd-14657133729",
                        "twitter": null,
                        "summary": "Riverstone Training is a leading provider of financial training solutions for individuals and corporate clients. We offer pre-structured as well as customized training courses to help you enhance your...",
                        "num_saves": null,
                        "image_id": null,
                        "followed_by_you": false,
                        "facebook": "riverstonetraining/riverstone",
                        "num_collections": null,
                        "id": "14657133729",
                        "website_url": "http://www.riverstonetraining.com.sg/",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "799180499",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "221024429",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "Financial Modeling in Excel",
                    "language": "en-us",
                    "url": "https://www.eventbrite.sg/e/financial-modeling-in-excel-tickets-938109750517",
                    "hide_start_date": false,
                    "summary": "The objective of this program is to provide knowledge and practical experience about the creation of comprehensive and flexible financial m",
                    "is_online_event": false,
                    "eid": "938109750517",
                    "published": "2024-07-01T04:15:51Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": null,
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F881290253%2F220572363630%2F1%2Foriginal.jpg?w=156&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C115%2C156%2C78&s=fdd8758b6c2da816ea644f069994a0e1",
                        "id": "881290253",
                        "crop_mask": {
                            "width": 156,
                            "height": 78,
                            "top_left": {
                                "y": 115,
                                "x": 0
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F881290253%2F220572363630%2F1%2Foriginal.jpg?auto=format%2Ccompress&q=75&sharp=10&s=d76f8836ba2f0adafef80b807bf54b8e",
                            "width": 156,
                            "height": 289
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2024-10-07T00:00:00",
                            "utc": "2024-10-06T17:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-05-04T18:00:00",
                            "utc": "2025-05-04T11:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "SGD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "1056370024179",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=1056370024179",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "14657133729",
                    "dedup": {
                        "count": 2,
                        "hash": "628e162082cfd579ca42d48f2ed2f6d4"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-05-05",
                    "end_time": "17:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2773.63",
                            "value": 277363,
                            "display": "2773.63 SGD"
                        },
                        "minimum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2773.63",
                            "value": 277363,
                            "display": "2773.63 SGD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-05-07",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1002",
                            "display_name": "Finance"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/9",
                            "display_name": "Class, Training, or Workshop"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Finance",
                            "display_name": "Finance",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Projectfinance",
                            "display_name": "Projectfinance",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/business_analysis",
                            "display_name": "business_analysis",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/financial_modeling",
                            "display_name": "financial_modeling",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/business_tools",
                            "display_name": "business_tools",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/corporate_finance",
                            "display_name": "corporate_finance",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "1056370024179",
                    "start_time": "09:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Pullman Saigon Centre",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Singapore",
                            "country": "VN",
                            "region": "Thành phố Hồ Chí Minh",
                            "longitude": "106.691666",
                            "localized_address_display": "148 Đường Trần Hưng Đạo, Singapore, Thành phố Hồ Chí Minh 070000",
                            "postal_code": "070000",
                            "address_1": "148 Đường Trần Hưng Đạo",
                            "address_2": "",
                            "latitude": "10.7643345",
                            "localized_multi_line_address_display": [
                                "148 Đường Trần Hưng Đạo",
                                "Singapore, Thành phố Hồ Chí Minh 070000"
                            ],
                            "localized_area_display": "Singapore, Thành phố Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "239181173"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Riverstone Training Pte Ltd",
                        "profile_type": "organizer",
                        "num_followers": 2405,
                        "url": "https://www.eventbrite.sg/o/riverstone-training-pte-ltd-14657133729",
                        "twitter": null,
                        "summary": "Riverstone Training is a leading provider of financial training solutions for individuals and corporate clients. We offer pre-structured as well as customized training courses to help you enhance your...",
                        "num_saves": null,
                        "image_id": null,
                        "followed_by_you": false,
                        "facebook": "riverstonetraining/riverstone",
                        "num_collections": null,
                        "id": "14657133729",
                        "website_url": "http://www.riverstonetraining.com.sg/",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "881290253",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "239181173",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "Project Finance Modeling Training",
                    "language": "en-us",
                    "url": "https://www.eventbrite.sg/e/project-finance-modeling-training-tickets-1056370024179",
                    "hide_start_date": false,
                    "summary": "The objective of this program is to provide knowledge and practical experience about the creation of comprehensive and flexible project fina",
                    "is_online_event": false,
                    "eid": "1056370024179",
                    "published": "2024-10-23T05:06:11Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": null,
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F880293333%2F220572363630%2F1%2Foriginal.jpg?w=156&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C111%2C156%2C78&s=d370a2da3d91bfc85921ec266eb0fafd",
                        "id": "880293333",
                        "crop_mask": {
                            "width": 156,
                            "height": 78,
                            "top_left": {
                                "y": 111,
                                "x": 0
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F880293333%2F220572363630%2F1%2Foriginal.jpg?auto=format%2Ccompress&q=75&sharp=10&s=63b743b05ae5438ff30c4bed5798c0d7",
                            "width": 156,
                            "height": 289
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2024-10-10T00:00:00",
                            "utc": "2024-10-09T17:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-05-12T18:00:00",
                            "utc": "2025-05-12T11:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "SGD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "1054580672179",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=1054580672179",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "14657133729",
                    "dedup": {
                        "count": 2,
                        "hash": "1070dcc4f349a714f997730e6851dd25"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-05-13",
                    "end_time": "17:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2773.63",
                            "value": 277363,
                            "display": "2773.63 SGD"
                        },
                        "minimum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2773.63",
                            "value": 277363,
                            "display": "2773.63 SGD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-05-15",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1002",
                            "display_name": "Finance"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/9",
                            "display_name": "Class, Training, or Workshop"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Corporate",
                            "display_name": "Corporate",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/corporate_training",
                            "display_name": "corporate_training",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/business_risk",
                            "display_name": "business_risk",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/company_analysis",
                            "display_name": "company_analysis",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/corporate_analysis",
                            "display_name": "corporate_analysis",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/credit_analyst",
                            "display_name": "credit_analyst",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/credit_evaluation",
                            "display_name": "credit_evaluation",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "1054580672179",
                    "start_time": "09:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Pullman Saigon Centre",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Singapore",
                            "country": "VN",
                            "region": "Thành phố Hồ Chí Minh",
                            "longitude": "106.691666",
                            "localized_address_display": "148 Đường Trần Hưng Đạo, Singapore, Thành phố Hồ Chí Minh 070000",
                            "postal_code": "070000",
                            "address_1": "148 Đường Trần Hưng Đạo",
                            "address_2": "",
                            "latitude": "10.7643345",
                            "localized_multi_line_address_display": [
                                "148 Đường Trần Hưng Đạo",
                                "Singapore, Thành phố Hồ Chí Minh 070000"
                            ],
                            "localized_area_display": "Singapore, Thành phố Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "238978383"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Riverstone Training Pte Ltd",
                        "profile_type": "organizer",
                        "num_followers": 2405,
                        "url": "https://www.eventbrite.sg/o/riverstone-training-pte-ltd-14657133729",
                        "twitter": null,
                        "summary": "Riverstone Training is a leading provider of financial training solutions for individuals and corporate clients. We offer pre-structured as well as customized training courses to help you enhance your...",
                        "num_saves": null,
                        "image_id": null,
                        "followed_by_you": false,
                        "facebook": "riverstonetraining/riverstone",
                        "num_collections": null,
                        "id": "14657133729",
                        "website_url": "http://www.riverstonetraining.com.sg/",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "880293333",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "238978383",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "Corporate Credit Analysis Master Class",
                    "language": "en-us",
                    "url": "https://www.eventbrite.sg/e/corporate-credit-analysis-master-class-tickets-1054580672179",
                    "hide_start_date": false,
                    "summary": "The course equips you with a comprehension of the various concepts in credit analysis, which will enable you to make decisions in crucial c",
                    "is_online_event": false,
                    "eid": "1054580672179",
                    "published": "2024-10-22T04:28:41Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": "#ff1717",
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F351880149%2F262347974128%2F1%2Foriginal.20220601-172845?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C60%2C1920%2C960&s=8e458a1a7f6e7631f85f8c0f78891202",
                        "id": "351880149",
                        "crop_mask": {
                            "width": 1920,
                            "height": 960,
                            "top_left": {
                                "y": 60,
                                "x": 0
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F351880149%2F262347974128%2F1%2Foriginal.20220601-172845?auto=format%2Ccompress&q=75&sharp=10&s=f1a3529cb8f09cfc33e2b856c2c1f00b",
                            "width": 1920,
                            "height": 1080
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "1970-01-01T00:00:00",
                            "utc": "1969-12-31T16:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-02-23T18:00:00",
                            "utc": "2025-02-23T11:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "USD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "417309121817",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=417309121817",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "17526467445",
                    "dedup": {
                        "count": 1,
                        "hash": "3719e2d3a0806164a43d273ea7173d4d"
                    },
                    "num_children": 72,
                    "debug_info": {},
                    "parent_url": "https://www.eventbrite.com/e/mindshoptm-become-an-efficient-product-owner-tickets-417306824947",
                    "hide_end_date": false,
                    "start_date": "2025-02-23",
                    "end_time": "22:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "USD",
                            "major_value": "49.77",
                            "value": 4977,
                            "display": "49.77 USD"
                        },
                        "minimum_ticket_price": {
                            "currency": "USD",
                            "major_value": "49.77",
                            "value": 4977,
                            "display": "49.77 USD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-02-23",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1001",
                            "display_name": "Startups & Small Business"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/9",
                            "display_name": "Class, Training, or Workshop"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Project_management",
                            "display_name": "Project_management",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/product_management",
                            "display_name": "product_management",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "417309121817",
                    "start_time": "19:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Online",
                        "venue_profile_id": null,
                        "address": {
                            "city": "HO CHI MINH CITY",
                            "country": "VN",
                            "region": "MA",
                            "longitude": "106.6296638",
                            "localized_address_display": ". ., HO CHI MINH CITY, MA 00000",
                            "postal_code": "00000",
                            "address_1": ".",
                            "address_2": ".",
                            "latitude": "10.8230989",
                            "localized_multi_line_address_display": [
                                ".",
                                ".",
                                "HO CHI MINH CITY, MA 00000"
                            ],
                            "localized_area_display": "HO CHI MINH CITY, MA"
                        },
                        "venue_profile_url": "",
                        "id": "113892699"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Kat Usop, MSHI",
                        "profile_type": "organizer",
                        "num_followers": 19055,
                        "url": "https://www.eventbrite.com/o/kat-usop-mshi-17526467445",
                        "twitter": "itskatusop",
                        "summary": "Hi! I am a nomad Eng'r in Health & AI space (NYIT, ex-Duke, ex-Mizzou). I create  & share knowledge from real-world experiences. I build sustainable ventures while traveling long-term. PS If min. seat...",
                        "num_saves": null,
                        "image_id": "62097997",
                        "followed_by_you": false,
                        "facebook": null,
                        "num_collections": null,
                        "id": "17526467445",
                        "website_url": "http://katusop.com",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "351880149",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "113892699",
                    "checkout_flow": "widget",
                    "series_id": "417306824947",
                    "name": "MINDSHOP™| Become an Efficient Product Owner",
                    "language": "en-us",
                    "url": "https://www.eventbrite.com/e/mindshoptm-become-an-efficient-product-owner-tickets-417309121817",
                    "hide_start_date": false,
                    "summary": "“Be stubborn on vision but flexible on details.”– Jeff Bezos, Amazon",
                    "is_online_event": false,
                    "eid": "417309121817",
                    "published": "2022-09-10T20:34:01Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": "#d8c8b7",
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F355766219%2F572555648333%2F1%2Foriginal.20220916-141857?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=1ef029dec7c52b264770fb2f12eecfc9",
                        "id": "355766219",
                        "crop_mask": {
                            "width": 2160,
                            "height": 1080,
                            "top_left": {
                                "y": 0,
                                "x": 0
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F355766219%2F572555648333%2F1%2Foriginal.20220916-141857?auto=format%2Ccompress&q=75&sharp=10&s=50de299541d6ad358ba323b90f3abf3e",
                            "width": 2160,
                            "height": 1080
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "1970-01-01T00:00:00",
                            "utc": "1969-12-31T16:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-02-26T08:30:00",
                            "utc": "2025-02-26T01:30:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "USD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "1046897276937",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=1046897276937",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "34346634153",
                    "dedup": {
                        "count": 1,
                        "hash": "727b0fba7833d0f4a81a5581a6a9f9c7"
                    },
                    "num_children": 2,
                    "debug_info": {},
                    "parent_url": "https://www.eventbrite.com/e/free-career-empowerment-meditation-class-ho-chi-minh-city-tickets-258469468137",
                    "hide_end_date": false,
                    "start_date": "2025-02-26",
                    "end_time": "09:30",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "USD",
                            "major_value": "0.00",
                            "value": 0,
                            "display": "0.00 USD"
                        },
                        "minimum_ticket_price": {
                            "currency": "USD",
                            "major_value": "0.00",
                            "value": 0,
                            "display": "0.00 USD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-02-26",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1010",
                            "display_name": "Career"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/9",
                            "display_name": "Class, Training, or Workshop"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Career",
                            "display_name": "Career",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Business",
                            "display_name": "Business",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Free",
                            "display_name": "Free",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Professional",
                            "display_name": "Professional",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Meditation",
                            "display_name": "Meditation",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Success",
                            "display_name": "Success",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Mindfulness",
                            "display_name": "Mindfulness",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Balance",
                            "display_name": "Balance",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Power",
                            "display_name": "Power",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/meditation_for_business",
                            "display_name": "meditation_for_business",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "1046897276937",
                    "start_time": "08:30",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Online via Zoom",
                        "venue_profile_id": null,
                        "address": {
                            "city": "HCM",
                            "country": "VN",
                            "region": "Thành phố Hồ Chí Minh",
                            "longitude": "106.6296638",
                            "localized_address_display": "See Confirmation Email for Zoom Link, HCM, Thành phố Hồ Chí Minh 71100",
                            "postal_code": "71100",
                            "address_1": "See Confirmation Email for Zoom Link",
                            "address_2": "",
                            "latitude": "10.8230989",
                            "localized_multi_line_address_display": [
                                "See Confirmation Email for Zoom Link",
                                "HCM, Thành phố Hồ Chí Minh 71100"
                            ],
                            "localized_area_display": "HCM, Thành phố Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "114871689"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Career Bliss Academy",
                        "profile_type": "organizer",
                        "num_followers": 6787,
                        "url": "https://www.eventbrite.com/o/career-bliss-academy-34346634153",
                        "twitter": null,
                        "summary": "ABOUT US:Career Bliss Academy is an organization whose mission is to introduce people to meditation and career empowerment. Career Bliss Academy focuses on the practice of Meditation, Mindfulness, and...",
                        "num_saves": null,
                        "image_id": "706088659",
                        "followed_by_you": false,
                        "facebook": "129689069273052",
                        "num_collections": null,
                        "id": "34346634153",
                        "website_url": "https://careerbliss.academy",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "355766219",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "114871689",
                    "checkout_flow": "widget",
                    "series_id": "258469468137",
                    "name": "Free Career Empowerment & Meditation Class - Ho Chi Minh City",
                    "language": "en-us",
                    "url": "https://www.eventbrite.com/e/free-career-empowerment-meditation-class-ho-chi-minh-city-tickets-1046897276937",
                    "hide_start_date": false,
                    "summary": "Meditation makes everything in life better, especially career!",
                    "is_online_event": false,
                    "eid": "1046897276937",
                    "published": "2022-01-29T07:23:46Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": "#5c80ab",
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F824655259%2F1625886368953%2F1%2Foriginal.20240811-072910?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1920%2C960&s=e6065b10f0c025fbfe2e52dc3bf2000c",
                        "id": "824655259",
                        "crop_mask": {
                            "width": 1920,
                            "height": 960,
                            "top_left": {
                                "y": 0,
                                "x": 0
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F824655259%2F1625886368953%2F1%2Foriginal.20240811-072910?auto=format%2Ccompress&q=75&sharp=10&s=55cd688a23d6d9aaf7631d06bc6f9e40",
                            "width": 1920,
                            "height": 1080
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-01-27T03:00:00",
                            "utc": "2025-01-26T20:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-05-27T09:00:00",
                            "utc": "2025-05-27T02:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "USD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "986482715357",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=986482715357",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "67767040783",
                    "dedup": {
                        "count": 1,
                        "hash": "8c474b488e00e8fe03791e7fae2e811e"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-05-27",
                    "end_time": "17:30",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "USD",
                            "major_value": "1763.65",
                            "value": 176365,
                            "display": "1763.65 USD"
                        },
                        "minimum_ticket_price": {
                            "currency": "USD",
                            "major_value": "1763.65",
                            "value": 176365,
                            "display": "1763.65 USD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-05-28",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1003",
                            "display_name": "Environment & Sustainability"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/1",
                            "display_name": "Conference"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Summit",
                            "display_name": "Summit",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Flexible",
                            "display_name": "Flexible",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Packaging",
                            "display_name": "Packaging",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Asean",
                            "display_name": "Asean",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/2025",
                            "display_name": "2025",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "986482715357",
                    "start_time": "09:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "西贡日航酒店",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Nguyễn Cư Trinh",
                            "country": "VN",
                            "region": "Hồ Chí Minh",
                            "longitude": "106.6829285",
                            "localized_address_display": "235 Đường Nguyễn Văn Cừ, Nguyễn Cư Trinh, Hồ Chí Minh 700000",
                            "postal_code": "700000",
                            "address_1": "235 Đường Nguyễn Văn Cừ",
                            "address_2": "",
                            "latitude": "10.7641288",
                            "localized_multi_line_address_display": [
                                "235 Đường Nguyễn Văn Cừ",
                                "Nguyễn Cư Trinh, Hồ Chí Minh 700000"
                            ],
                            "localized_area_display": "Nguyễn Cư Trinh, Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "227109249"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "APEX Events",
                        "profile_type": "organizer",
                        "num_followers": 28,
                        "url": "https://www.eventbrite.com/o/apex-events-67767040783",
                        "twitter": null,
                        "summary": null,
                        "num_saves": null,
                        "image_id": null,
                        "followed_by_you": false,
                        "facebook": null,
                        "num_collections": null,
                        "id": "67767040783",
                        "website_url": null,
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "824655259",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "227109249",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "5th ASEAN Flexible Packaging Summit 2025",
                    "language": "en-us",
                    "url": "https://www.eventbrite.com/e/5th-asean-flexible-packaging-summit-2025-tickets-986482715357",
                    "hide_start_date": false,
                    "summary": "A business platform that aims to bring together tremendous thought leaders, innovators, and advocates in circular flexible packaging.",
                    "is_online_event": false,
                    "eid": "986482715357",
                    "published": "2024-08-11T07:32:56Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": "#ffffff",
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F880297833%2F220572363630%2F1%2Foriginal.20210817-065117?w=240&auto=format%2Ccompress&q=75&sharp=10&rect=13%2C0%2C240%2C120&s=5aab597a92428e54714efb941b6a9a93",
                        "id": "880297833",
                        "crop_mask": {
                            "width": 240,
                            "height": 120,
                            "top_left": {
                                "y": 0,
                                "x": 13
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F880297833%2F220572363630%2F1%2Foriginal.20210817-065117?auto=format%2Ccompress&q=75&sharp=10&s=6256ebebe46de2e9236247806e1e9b43",
                            "width": 267,
                            "height": 120
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2024-09-30T09:00:00",
                            "utc": "2024-09-30T02:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-06-01T17:00:00",
                            "utc": "2025-06-01T10:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "SGD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "1054585968019",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=1054585968019",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "14657133729",
                    "dedup": {
                        "count": 2,
                        "hash": "41b64171373ac23a0f9f347157157873"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-06-02",
                    "end_time": "17:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2773.63",
                            "value": 277363,
                            "display": "2773.63 SGD"
                        },
                        "minimum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2773.63",
                            "value": 277363,
                            "display": "2773.63 SGD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-06-04",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1001",
                            "display_name": "Startups & Small Business"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/9",
                            "display_name": "Class, Training, or Workshop"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Business",
                            "display_name": "Business",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Corporate",
                            "display_name": "Corporate",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Analysis",
                            "display_name": "Analysis",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Values",
                            "display_name": "Values",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Manager",
                            "display_name": "Manager",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/corporate_training",
                            "display_name": "corporate_training",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/corporate_finance",
                            "display_name": "corporate_finance",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/capital_management",
                            "display_name": "capital_management",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "1054585968019",
                    "start_time": "09:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Pullman Saigon Centre",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Singapore",
                            "country": "VN",
                            "region": "Thành phố Hồ Chí Minh",
                            "longitude": "106.691666",
                            "localized_address_display": "148 Đường Trần Hưng Đạo, Singapore, Thành phố Hồ Chí Minh 070000",
                            "postal_code": "070000",
                            "address_1": "148 Đường Trần Hưng Đạo",
                            "address_2": "",
                            "latitude": "10.7643345",
                            "localized_multi_line_address_display": [
                                "148 Đường Trần Hưng Đạo",
                                "Singapore, Thành phố Hồ Chí Minh 070000"
                            ],
                            "localized_area_display": "Singapore, Thành phố Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "238979273"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Riverstone Training Pte Ltd",
                        "profile_type": "organizer",
                        "num_followers": 2405,
                        "url": "https://www.eventbrite.sg/o/riverstone-training-pte-ltd-14657133729",
                        "twitter": null,
                        "summary": "Riverstone Training is a leading provider of financial training solutions for individuals and corporate clients. We offer pre-structured as well as customized training courses to help you enhance your...",
                        "num_saves": null,
                        "image_id": null,
                        "followed_by_you": false,
                        "facebook": "riverstonetraining/riverstone",
                        "num_collections": null,
                        "id": "14657133729",
                        "website_url": "http://www.riverstonetraining.com.sg/",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "880297833",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "238979273",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "Corporate Finance Masterclass",
                    "language": "en-us",
                    "url": "https://www.eventbrite.sg/e/corporate-finance-masterclass-tickets-1054585968019",
                    "hide_start_date": false,
                    "summary": "The Course will cover how to analyze financial statements, interpretation of future business information, roles of earnings.",
                    "is_online_event": false,
                    "eid": "1054585968019",
                    "published": "2024-10-22T04:45:21Z"
                },
                {
                    "image": {
                        "edge_color_set": true,
                        "edge_color": null,
                        "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F881326033%2F220572363630%2F1%2Foriginal.jpg?w=156&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C114%2C156%2C78&s=d377ac9216406bb52d5da1c40e2a79d2",
                        "id": "881326033",
                        "crop_mask": {
                            "width": 156,
                            "height": 78,
                            "top_left": {
                                "y": 114,
                                "x": 0
                            }
                        },
                        "aspect_ratio": "2",
                        "focal_point": null,
                        "original": {
                            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F881326033%2F220572363630%2F1%2Foriginal.jpg?auto=format%2Ccompress&q=75&sharp=10&s=50ccbe31984d7b46c080f05d8470fb14",
                            "width": 156,
                            "height": 289
                        }
                    },
                    "saves": {
                        "saved_by_you": false
                    },
                    "event_sales_status": {
                        "start_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2024-10-16T00:00:00",
                            "utc": "2024-10-15T17:00:00Z"
                        },
                        "end_sales_date": {
                            "timezone": "Asia/Ho_Chi_Minh",
                            "local": "2025-06-03T18:00:00",
                            "utc": "2025-06-03T11:00:00Z"
                        },
                        "default_message": null,
                        "sales_status": "on_sale",
                        "currency": "SGD",
                        "message_code": null,
                        "message": null,
                        "message_type": null
                    },
                    "timezone": "Asia/Ho_Chi_Minh",
                    "id": "1056391057089",
                    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=1056391057089",
                    "urgency_signals": {
                        "messages": [],
                        "categories": []
                    },
                    "tickets_by": "Eventbrite",
                    "primary_organizer_id": "14657133729",
                    "dedup": {
                        "count": 2,
                        "hash": "62dd40e8a7f689be84d597e070c5fb69"
                    },
                    "num_children": 1,
                    "debug_info": {},
                    "parent_url": null,
                    "hide_end_date": false,
                    "start_date": "2025-06-04",
                    "end_time": "17:00",
                    "_type": "destination_event",
                    "public_collections": {
                        "creator_collections": {
                            "object_count": 0,
                            "collections": []
                        }
                    },
                    "ticket_availability": {
                        "maximum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2773.63",
                            "value": 277363,
                            "display": "2773.63 SGD"
                        },
                        "minimum_ticket_price": {
                            "currency": "SGD",
                            "major_value": "2773.63",
                            "value": 277363,
                            "display": "2773.63 SGD"
                        },
                        "is_free": false,
                        "has_bogo_tickets": false,
                        "has_available_tickets": true,
                        "is_sold_out": false
                    },
                    "end_date": "2025-06-06",
                    "tags": [
                        {
                            "prefix": "EventbriteSubCategory",
                            "tag": "EventbriteSubCategory/1002",
                            "display_name": "Finance"
                        },
                        {
                            "prefix": "EventbriteCategory",
                            "tag": "EventbriteCategory/101",
                            "display_name": "Business & Professional",
                            "localized": {
                                "display_name": "Business & Professional"
                            }
                        },
                        {
                            "prefix": "EventbriteFormat",
                            "tag": "EventbriteFormat/9",
                            "display_name": "Class, Training, or Workshop"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Business",
                            "display_name": "Business",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Investment",
                            "display_name": "Investment",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Strategy",
                            "display_name": "Strategy",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Realestate",
                            "display_name": "Realestate",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Market",
                            "display_name": "Market",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Companies",
                            "display_name": "Companies",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/Realestateinvesting",
                            "display_name": "Realestateinvesting",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/real_estate",
                            "display_name": "real_estate",
                            "prefix": "OrganizerTag"
                        },
                        {
                            "_type": "tag",
                            "tag": "OrganizerTag/real_estate_investing",
                            "display_name": "real_estate_investing",
                            "prefix": "OrganizerTag"
                        }
                    ],
                    "eventbrite_event_id": "1056391057089",
                    "start_time": "09:00",
                    "primary_venue": {
                        "_type": "destination_venue",
                        "name": "Pullman Saigon Centre",
                        "venue_profile_id": null,
                        "address": {
                            "city": "Singapore",
                            "country": "VN",
                            "region": "Thành phố Hồ Chí Minh",
                            "longitude": "106.691666",
                            "localized_address_display": "148 Đường Trần Hưng Đạo, Singapore, Thành phố Hồ Chí Minh 070000",
                            "postal_code": "070000",
                            "address_1": "148 Đường Trần Hưng Đạo",
                            "address_2": "",
                            "latitude": "10.7643345",
                            "localized_multi_line_address_display": [
                                "148 Đường Trần Hưng Đạo",
                                "Singapore, Thành phố Hồ Chí Minh 070000"
                            ],
                            "localized_area_display": "Singapore, Thành phố Hồ Chí Minh"
                        },
                        "venue_profile_url": "",
                        "id": "239187893"
                    },
                    "primary_organizer": {
                        "_type": "destination_profile",
                        "num_upcoming_events": null,
                        "name": "Riverstone Training Pte Ltd",
                        "profile_type": "organizer",
                        "num_followers": 2405,
                        "url": "https://www.eventbrite.sg/o/riverstone-training-pte-ltd-14657133729",
                        "twitter": null,
                        "summary": "Riverstone Training is a leading provider of financial training solutions for individuals and corporate clients. We offer pre-structured as well as customized training courses to help you enhance your...",
                        "num_saves": null,
                        "image_id": null,
                        "followed_by_you": false,
                        "facebook": "riverstonetraining/riverstone",
                        "num_collections": null,
                        "id": "14657133729",
                        "website_url": "http://www.riverstonetraining.com.sg/",
                        "num_following": null
                    },
                    "full_description": null,
                    "image_id": "881326033",
                    "is_protected_event": false,
                    "is_cancelled": null,
                    "primary_venue_id": "239187893",
                    "checkout_flow": "widget",
                    "series_id": null,
                    "name": "Real Estate Modeling and Analysis",
                    "language": "en-us",
                    "url": "https://www.eventbrite.sg/e/real-estate-modeling-and-analysis-tickets-1056391057089",
                    "hide_start_date": false,
                    "summary": "The course equips you with a comprehension on the various concepts and practices in the real estate sector. Our course also offers in-depth",
                    "is_online_event": false,
                    "eid": "1056391057089",
                    "published": "2024-10-23T07:27:51Z"
                }
            ],
            "aggs": {},
            "promoted_results": []
        },
        "is_staff": false,
        "suggested_categories": [
            {
                "type": "category",
                "name": "nightlife",
                "id": "Destination/nightlife"
            },
            {
                "type": "subcategory",
                "name": "new years eve",
                "id": "EventbriteSubCategory/16009"
            },
            {
                "type": "category",
                "name": "music",
                "id": "EventbriteCategory/103"
            },
            {
                "type": "category",
                "name": "food & drink",
                "id": "EventbriteCategory/110"
            },
            {
                "type": "category",
                "name": "film, media & entertainment",
                "id": "EventbriteCategory/104"
            },
            {
                "type": "category",
                "name": "performing & visual arts",
                "id": "EventbriteCategory/105"
            }
        ],
        "search_id": "80ad02ccef9a11ef8ff5f6488bca939e",
        "es": [],
        "event_search": {
            "places": [
                "85680809"
            ],
            "dates": [
                "current_future"
            ],
            "image": true,
            "page_size": 30,
            "dedup": true
        }
    });
  }
  