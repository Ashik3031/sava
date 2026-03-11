export const serviceCategories = [
  {
    id: "signatures",
    title: "SAVÁ LASH COLLECTION",
    description:
      "A curated lash extension menu designed to create everything from timeless elegance to bold, dramatic volume with flawless precision.",
    items: [
      { name: "Classic", price: "250 AED", duration: "2 hr" },
      { name: "2D Soft Volume", price: "275 AED", duration: "2 hr" },
      { name: "3D Volume", price: "325 AED", duration: "2 hr" },
      { name: "4D Glam Volume", price: "375 AED", duration: "2 hr" },
      { name: "Mega Volume (5D–6D)", price: "425 AED", duration: "3 hr" }
    ]
  },
  {
    id: "essentials",
    title: "LASH STYLING EFFECTS",
    description:
      "Enhance any lash set with signature styling add-ons that refine the shape, texture, and overall finish of your final look.",
    items: [
      { name: "Wet Effect", price: "+35 AED" },
      { name: "Cat Eye", price: "+30 AED" },
      { name: "Doll Eye", price: "+30 AED" },
      { name: "Kim K Signature Effect", price: "+50 AED" },
      { name: "Brown Lashes", price: "+35 AED" },
      { name: "L or M Curl", price: "+35 AED" }
    ]
  },
  {
    id: "naturals",
    title: "LASH MAINTENANCE",
    description:
      "Maintain fullness, balance, and freshness with refill and removal services tailored to keep your lash extensions looking seamless.",
    items: [
      { name: "Refill (up to 2 weeks)", price: "190 AED", duration: "1.5 hr" },
      { name: "Refill (up to 3 weeks)", price: "230 AED", duration: "1.5 hr" },
      { name: "Lash Removal", price: "40 AED", duration: "30 min" }
    ]
  },
  {
    id: "enhancements",
    title: "LASH ENHANCEMENT",
    description:
      "Natural lash enhancement services that lift and define your lashes beautifully for a polished everyday finish.",
    items: [
      { name: "Eyelash Lamination", price: "250 AED", duration: "1 hr" },
      { name: "Eyelash Tint", price: "50 AED", duration: "30 min" }
    ]
  },
  {
    id: "medical-grade",
    title: "MEDICAL-GRADE TREATMENTS (ELIM)",
    description:
      "Discover the intersection of beauty and science with our advanced dermatological solutions for hands and feet. Utilizing clinical-grade formulations to target specific concerns like calluses and dehydration, promoting genuine skin renewal and restorative healing.",
    items: [
      { name: "ELIM Pedicure", price: "315 AED" },
      { name: "ELIM Manicure", price: "305 AED" },
      { name: "ELIM MediHeel", price: "105 AED" },
      { name: "ELIM MediHand", price: "55 AED" },
      { name: "ELIM Duo", price: "590 AED" }
    ]
  },
  {
    id: "add-ons",
    title: "SAVÁ NAILS",
    description:
      "A refined nail menu crafted for modern elegance, offering precise manicure techniques and polished finishes with lasting beauty.",
    items: [
      { name: "Manicure", price: "90 AED", duration: "40 min" },
      { name: "Regular Polish Manicure", price: "120 AED", duration: "60 min" },
      { name: "Russian Manicure With Gel Overlay", price: "220 AED", duration: "1.5 hr" },
      { name: "Russian Manicure Acrylgel", price: "280 AED", duration: "2 hr" }
    ]
  },
  {
    id: "brows-lashes",
    title: "BROWS & LASHES",
    description:
      "Expert brow and lash services designed to define, lift, and perfect your features with elegant precision.",
    items: [
      {
        subtitle: "Brow Maintenance",
        items: [
          { name: "Brow Shape", price: "45 AED", duration: "15 min" },
          { name: "Brow Tint", price: "45 AED", duration: "15 min" },
          { name: "Brow Bleach", price: "45 AED", duration: "15 min" }
        ]
      },
      {
        subtitle: "Brow Enhancement",
        items: [
          { name: "Brow Shape + Tint", price: "80 AED", duration: "15 min" }
        ]
      },
      {
        subtitle: "Brow Signature Service",
        items: [
          { name: "Brow Lamination", price: "250 AED", duration: "50 min" },
          { name: "Brow Lamination + Shape + Tint", price: "290 AED", duration: "1 hr" }
        ]
      }
    ]
  },
  {
    id: "beauty",
    title: "BEAUTY SERVICES",
    description:
      "Complete your self-care ritual with our refined beauty menu, offering a sanitary and soothing approach to maintenance. From gentle, precision waxing to relaxing massages, every service is performed with the utmost care to ensure your total serenity and satisfaction.",
    items: [
      {
        subtitle: "Wax Lab",
        items: [
          { name: "Upper Lip", price: "40 AED" },
          { name: "Eyebrows", price: "55 AED" },
          { name: "Full Face", price: "135 AED" },
          { name: "Half Arms", price: "65 AED" },
          { name: "Full Arms", price: "85 AED" },
          { name: "Underarms", price: "55 AED" },
          { name: "Half Legs", price: "85 AED" },
          { name: "Full Legs", price: "120 AED" },
          { name: "Bikini Line", price: "55 AED" },
          { name: "Full Brazilian", price: "140 AED" },
          { name: "Full Body (No Bikini)", price: "350 AED" },
          { name: "Full Body (With Bikini)", price: "410 AED" }
        ]
      },
      {
        subtitle: "Massage",
        items: [
          { name: "Relaxing Full Body (60 mins)", price: "250 AED" },
          { name: "Relaxing Full Body (90 mins)", price: "300 AED" },
          { name: "Head, Neck & Shoulder (30 mins)", price: "85 AED" }
        ]
      },
      {
        subtitle: "Facials",
        items: [{ name: "Facials", price: "Coming Soon" }]
      }
    ]
  }
];

// backward compatibility
export const nailsServices =
  serviceCategories.find((c) => c.id === "add-ons")?.items || [];

export const lashesServices =
  serviceCategories.find((c) => c.id === "signatures")?.items || [];

export const comingSoonServices =
  serviceCategories.find((c) => c.id === "beauty")?.items[2]?.items || [];