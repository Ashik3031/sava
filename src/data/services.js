export const serviceCategories = [
    {
        id: 'signatures',
        title: 'SAVÁ SIGNATURES',
        description: 'Experience the pinnacle of nail care with our bespoke treatments, meticulously crafted to elevate your natural beauty. Our signature rituals go beyond the ordinary, designed to rejuvenate, perfect, and restore, ensuring lasting health and visible elegance in every detail.',
        items: [
            { name: 'SAVÁ MANICURE', price: '245 AED', description: 'Signature dry manicure with regular or TPO-free gel polish' },
            { name: 'SAVÁ PEDICURE', price: '245 AED', description: 'Signature dry pedicure with refined cuticle care' },
            { name: 'SAVÁ RITUAL', price: '470 AED', description: 'Manicure & Pedicure with complimentary add-on' }
        ]
    },
    {
        id: 'essentials',
        title: 'SAVÁ ESSENTIALS',
        description: 'Maintain your impeccable look with our everyday care routines, perfect for the modern lifestyle that demands excellence without compromise. These quick yet thorough treatments focus on precision and polish, keeping your nails perfectly groomed, healthy, and sophisticated at all times.',
        items: [
            { name: 'SAVÁ Essential Manicure', price: '130 AED' },
            { name: 'SAVÁ Essential Pedicure', price: '130 AED' },
            { name: 'SAVÁ Essential Duo', price: '240 AED' },
            { name: 'SAVÁ Builder Manicure', price: '255 AED' }
        ]
    },
    {
        id: 'naturals',
        title: 'SAVÁ NATURALS',
        description: 'Embrace the raw, authentic beauty of your natural nails with our specialized polish-free treatments. We focus entirely on deep nourishment, structural integrity, and holistic health, revealing a natural shine and strength that requires no embellishment.',
        items: [
            { name: 'SAVÁ Natural Manicure', price: '110 AED' },
            { name: 'SAVÁ Natural Pedicure', price: '110 AED' },
            { name: 'SAVÁ Natural Duo', price: '200 AED' }
        ]
    },
    {
        id: 'enhancements',
        title: 'ENHANCEMENT',
        description: 'Transform your nails with our expert sculpting services, giving you the freedom to achieve your dream length and shape. Using only premium materials, we create durable, natural-looking extensions that feel weightless and blend seamlessly with your natural nail architecture.',
        items: [
            { name: 'Full Set Extensions (Short)', price: '380 AED' },
            { name: 'Full Set Extensions (Long)', price: '430 AED' },
            { name: 'Extensions Refill (Short)', price: '325 AED' },
            { name: 'Extensions Refill (Long)', price: '365 AED' },
            { name: 'Extensions Removal', price: '75 AED' }
        ]
    },
    {
        id: 'medical-grade',
        title: 'MEDICAL-GRADE TREATMENTS (ELIM)',
        description: 'Discover the intersection of beauty and science with our advanced dermatological solutions for hands and feet. Utilizing clinical-grade formulations to target specific concerns like calluses and dehydration, promoting genuine skin renewal and restorative healing.',
        items: [
            { name: 'ELIM Pedicure', price: '315 AED' },
            { name: 'ELIM Manicure', price: '305 AED' },
            { name: 'ELIM MediHeel', price: '105 AED' },
            { name: 'ELIM MediHand', price: '55 AED' },
            { name: 'ELIM Duo', price: '590 AED' }
        ]
    },
    {
        id: 'add-ons',
        title: 'ADD-ONS',
        description: 'Customize your experience with our curated selection of artistic and restorative extras. Whether you desire a touch of French elegance, a modern chrome finish, or a targeted repair treatment, these finishing touches ensure your service is uniquely yours.',
        items: [
            { name: 'French Finish', price: '50 AED' },
            { name: 'Chrome Powder', price: '50 AED' },
            { name: 'Cat Eye', price: '50 AED' },
            { name: 'Nail Art', price: 'Consultation Based' },
            { name: 'Classic Polish Change', price: '45 AED' },
            { name: 'Nail Repair', price: '30 AED / nail' },
            { name: 'Gel Removal', price: '50 AED' }
        ]
    },
    {
        id: 'brows-lashes',
        title: 'BROWS & LASHES',
        description: 'Frame your face with precision-crafted brows and lashes that highlight your most expressive features. Our expert technicians enhance your natural beauty with bespoke tinting, shaping, and lifting techniques for a look that is effortlessly captivating.',
        items: [
            {
                subtitle: 'Brow Bar',
                items: [
                    { name: 'HD Brows', price: '165 AED' },
                    { name: 'HD Browsculpt (Lamination)', price: '285 AED' },
                    { name: 'HD Browstay Hybrid Tint', price: '65 AED' },
                    { name: 'Brow Shape (Threading)', price: '65 AED' }
                ]
            },
            {
                subtitle: 'Lash Bar',
                items: [
                    { name: 'Nouveau Lash Lift', price: '245 AED' },
                    { name: 'Lash Extensions', price: 'Coming Soon' }
                ]
            }
        ]
    },
    {
        id: 'beauty',
        title: 'BEAUTY SERVICES',
        description: 'Complete your self-care ritual with our refined beauty menu, offering a sanitary and soothing approach to maintenance. From gentle, precision waxing to relaxing massages, every service is performed with the utmost care to ensure your total serenity and satisfaction.',
        items: [
            {
                subtitle: 'Wax Lab',
                items: [
                    { name: 'Upper Lip', price: '40 AED' },
                    { name: 'Eyebrows', price: '55 AED' },
                    { name: 'Full Face', price: '135 AED' },
                    { name: 'Half Arms', price: '65 AED' },
                    { name: 'Full Arms', price: '85 AED' },
                    { name: 'Underarms', price: '55 AED' },
                    { name: 'Half Legs', price: '85 AED' },
                    { name: 'Full Legs', price: '120 AED' },
                    { name: 'Bikini Line', price: '55 AED' },
                    { name: 'Full Brazilian', price: '140 AED' },
                    { name: 'Full Body (No Bikini)', price: '350 AED' },
                    { name: 'Full Body (With Bikini)', price: '410 AED' }
                ]
            },
            {
                subtitle: 'Massage',
                items: [
                    { name: 'Relaxing Full Body (60 mins)', price: '250 AED' },
                    { name: 'Relaxing Full Body (90 mins)', price: '300 AED' },
                    { name: 'Head, Neck & Shoulder (30 mins)', price: '85 AED' }
                ]
            },
            {
                subtitle: 'Facials',
                items: [
                    { name: 'Facials', price: 'Coming Soon' }
                ]
            }
        ]
    }
];

// Exporting separate arrays for backward compatibility if needed, though mostly using categories now
export const nailsServices = serviceCategories.find(c => c.id === 'signatures').items;
export const lashesServices = serviceCategories.find(c => c.id === 'brows-lashes').items[1].items;
export const comingSoonServices = serviceCategories.find(c => c.id === 'beauty').items[2].items;
