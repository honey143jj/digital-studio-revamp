import { ArrowLeft, Camera, Video, Palette, Globe } from "lucide-react";

export const categories = [
  { id: "all", name: "All Work", icon: Camera },
  { id: "studio", name: "Studio", icon: Camera },
  { id: "family", name: "Family Photography", icon: Camera },
  { id: "fashion", name: "Fashion Photography", icon: Camera },
  { id: "kids", name: "Kids Photography", icon: Camera },
  { id: "wedding", name: "Wedding Photography", icon: Camera },
  { id: "product", name: "Product Photography", icon: Camera },
  { id: "traditional", name: "Traditional Photography", icon: Camera },
  { id: "creative", name: "Creative Photography", icon: Camera },
  { id: "video", name: "Video Production", icon: Video },
  { id: "branding", name: "Branding", icon: Palette },
  { id: "web", name: "Web Design", icon: Globe },
];

export const galleryItems = [
  // Studio Images (Original KGMI studio images)
  {
    id: 1,
    image: "/lovable-uploads/ba1c2ab9-a23c-4f2d-8d44-2b3a8cddb82d.png",
    title: "KGMI Studio - Main Area",
    category: "studio",
    description: "Professional studio space with green screen and professional lighting setup"
  },
  {
    id: 2,
    image: "/lovable-uploads/198574a8-eb11-47b9-8c3b-263efbecf2f7.png",
    title: "KGMI Studio - Recording Setup",
    category: "studio",
    description: "Studio recording area with branded backdrop and professional equipment"
  },
  {
    id: 3,
    image: "/lovable-uploads/0eaf578d-58fe-4add-a7a4-46080ee7dce8.png",
    title: "KGMI Digital Studio Reception",
    category: "studio",
    description: "Studio reception area with KGMI branding and client displays"
  },
  {
    id: 4,
    image: "/lovable-uploads/4262f254-f9fb-40bf-86cc-27b0808ff238.png",
    title: "KGMI Studio - Production Area",
    category: "studio",
    description: "Professional production space with branded displays and equipment"
  },
  {
    id: 5,
    image: "/lovable-uploads/aa4e3c8f-1d1e-4941-8b77-6b64a60640c8.png",
    title: "KGMI Studio - Green Screen Setup",
    category: "studio",
    description: "Advanced green screen studio with Godox professional lighting equipment"
  },
  {
    id: 6,
    image: "/lovable-uploads/bbaac003-12b7-44b8-a848-1ef8d609d724.png",
    title: "KGMI Studio - Client Area",
    category: "studio",
    description: "Comfortable client viewing area with studio workspace"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Professional Photography Studio",
    category: "studio",
    description: "Modern photography studio with professional lighting equipment"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Video Production Studio",
    category: "studio",
    description: "State-of-the-art video production facility"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Recording Studio Setup",
    category: "studio",
    description: "Professional audio and video recording environment"
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Creative Studio Space",
    category: "studio",
    description: "Versatile creative workspace for various projects"
  },

  // Family Photography (10 images)
  {
    id: 11,
    image: "/lovable-uploads/a671f0e3-f7e4-4969-8175-bdac75ce1958.png",
    title: "Beautiful Family Moments",
    category: "family",
    description: "Heartwarming family photography capturing love and togetherness"
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Happy Family Portrait",
    category: "family",
    description: "Beautiful outdoor family portrait session"
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Family Fun Time",
    category: "family",
    description: "Candid family moments filled with joy and laughter"
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Generational Portrait",
    category: "family",
    description: "Three generations captured in a timeless portrait"
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1566454544243-de0a88b36923?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Family Beach Session",
    category: "family",
    description: "Natural family photography at the beach"
  },
  {
    id: 16,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Loving Family Embrace",
    category: "family",
    description: "Tender moments between family members"
  },
  {
    id: 17,
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Family Adventure",
    category: "family",
    description: "Active family enjoying outdoor adventures together"
  },
  {
    id: 18,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Cozy Family Moment",
    category: "family",
    description: "Intimate family portrait in a cozy setting"
  },
  {
    id: 19,
    image: "https://images.unsplash.com/photo-1609902726285-00668009f004?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Family Celebration",
    category: "family",
    description: "Special family celebration moments captured"
  },
  {
    id: 20,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Family Heritage",
    category: "family",
    description: "Traditional family portrait with cultural elements"
  },

  // Fashion Photography (10 images)
  {
    id: 21,
    image: "/lovable-uploads/74f1d783-5fc2-4dda-aa4c-99f724cbf40f.png",
    title: "Fashion & Portrait Excellence",
    category: "fashion",
    description: "Professional fashion photography with stunning lighting and composition"
  },
  {
    id: 22,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "High Fashion Portrait",
    category: "fashion",
    description: "Elegant high fashion photography with dramatic lighting"
  },
  {
    id: 23,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Street Fashion Style",
    category: "fashion",
    description: "Urban fashion photography with contemporary styling"
  },
  {
    id: 24,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Fashion Model Portfolio",
    category: "fashion",
    description: "Professional model portfolio photography"
  },
  {
    id: 25,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Editorial Fashion Shoot",
    category: "fashion",
    description: "Magazine-style editorial fashion photography"
  },
  {
    id: 26,
    image: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Studio Fashion Portrait",
    category: "fashion",
    description: "Controlled studio fashion photography session"
  },
  {
    id: 27,
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Luxury Fashion Style",
    category: "fashion",
    description: "High-end luxury fashion photography"
  },
  {
    id: 28,
    image: "https://images.unsplash.com/photo-1506629905607-21e4b7e9d800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Fashion Accessories",
    category: "fashion",
    description: "Stylish fashion accessories photography"
  },
  {
    id: 29,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Creative Fashion Art",
    category: "fashion",
    description: "Artistic fashion photography with creative elements"
  },
  {
    id: 30,
    image: "https://images.unsplash.com/photo-1465145498025-928c7a71cab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Fashion Beauty Portrait",
    category: "fashion",
    description: "Beauty and fashion portrait combination"
  },

  // Kids Photography (ALL uploaded images combined)
  {
    id: 31,
    image: "/lovable-uploads/f2f96339-1c79-4df5-862d-2c017a551f94.png",
    title: "Adorable Kids Portrait 1",
    category: "kids",
    description: "Beautiful children's portrait with natural lighting"
  },
  {
    id: 32,
    image: "/lovable-uploads/201207ed-f838-48ff-940a-c308152bff0d.png",
    title: "Adorable Kids Portrait 2",
    category: "kids",
    description: "Charming children's photography session"
  },
  {
    id: 33,
    image: "/lovable-uploads/50da58b0-718f-46c1-8ea1-4cb7cae77d26.png",
    title: "Adorable Kids Portrait 3",
    category: "kids",
    description: "Playful kids photography with vibrant colors"
  },
  {
    id: 34,
    image: "/lovable-uploads/cad449d0-121f-440a-8bb2-b54aad73c20c.png",
    title: "Adorable Kids Portrait 4",
    category: "kids",
    description: "Sweet children's portrait in studio setting"
  },
  {
    id: 35,
    image: "/lovable-uploads/541b1193-3536-44ab-871e-ba90225a9108.png",
    title: "Adorable Kids Portrait 5",
    category: "kids",
    description: "Creative kids photography with artistic flair"
  },
  {
    id: 36,
    image: "/lovable-uploads/f5dd6434-18a9-44d1-afd1-083a16b34c8d.png",
    title: "Adorable Kids Portrait 6",
    category: "kids",
    description: "Joyful children's photography capturing genuine smiles"
  },
  {
    id: 37,
    image: "/lovable-uploads/2ee66751-28c8-491e-86bd-43954bd5c0b9.png",
    title: "Adorable Kids Portrait 7",
    category: "kids",
    description: "Professional kids portrait with beautiful composition"
  },
  {
    id: 38,
    image: "/lovable-uploads/83bdb818-2b09-4da1-8e7e-6327514577db.png",
    title: "Stylish Kids Fashion Portrait",
    category: "kids",
    description: "Adorable child in fashionable outfit with pink hat and sunglasses"
  },
  {
    id: 39,
    image: "/lovable-uploads/248559cf-a96d-4806-8f63-46534a58fec2.png",
    title: "Cool Kids Portrait Session",
    category: "kids",
    description: "Cute child in trendy outfit with stylish sunglasses and pink accessories"
  },
  {
    id: 40,
    image: "/lovable-uploads/58c5bba7-827f-496b-b3ec-54ba6020b763.png",
    title: "Little Musician Portrait",
    category: "kids",
    description: "Young child with guitar wearing adorable blue beret"
  },
  {
    id: 41,
    image: "/lovable-uploads/df1b5911-4a99-4c02-98ed-5d215b123ef3.png",
    title: "Formal Kids Portrait",
    category: "kids",
    description: "Professional portrait of child in formal striped suit with hat"
  },
  {
    id: 42,
    image: "/lovable-uploads/98088193-59a5-492c-a7a3-0a08e5f901c7.png",
    title: "Kids Fashion Shoot",
    category: "kids",
    description: "Dynamic kids fashion photography with pinstriped suit"
  },
  {
    id: 43,
    image: "/lovable-uploads/3c99a26f-dd7f-4b36-86e3-48c914e10d9c.png",
    title: "Dapper Young Gentleman",
    category: "kids",
    description: "Elegant young boy in formal attire walking with confidence"
  },
  {
    id: 44,
    image: "/lovable-uploads/65c95eab-69df-4f98-b716-0d7c6f296be2.png",
    title: "Traditional Kids Portrait",
    category: "kids",
    description: "Beautiful child in traditional pink attire sitting in decorative chair"
  },
  {
    id: 45,
    image: "/lovable-uploads/0c9701e0-2b17-49e9-be4b-ee482aa4bd13.png",
    title: "Expressive Kids Portrait",
    category: "kids",
    description: "Joyful child in traditional pink outfit with sunglasses and animated pose"
  },
  {
    id: 46,
    image: "/lovable-uploads/2ff51acd-e8fd-4db2-a8ea-d3e336db2f00.png",
    title: "Young Musician Session",
    category: "kids",
    description: "Happy child playing ukulele in casual white attire"
  },

  // Wedding Photography (10 images)
  {
    id: 47,
    image: "/lovable-uploads/f83f37fd-a872-4d9c-8795-2f3b59498396.png",
    title: "Elegant Wedding Photography",
    category: "wedding",
    description: "Beautiful wedding photography capturing special moments and traditions"
  },
  {
    id: 48,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Wedding Ceremony",
    category: "wedding",
    description: "Sacred wedding ceremony moments captured"
  },
  {
    id: 49,
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Bridal Portrait",
    category: "wedding",
    description: "Stunning bridal portrait photography"
  },
  {
    id: 50,
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Wedding Reception",
    category: "wedding",
    description: "Joyful wedding reception celebrations"
  },
  {
    id: 51,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Couple's First Dance",
    category: "wedding",
    description: "Romantic first dance photography"
  },
  {
    id: 52,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Wedding Details",
    category: "wedding",
    description: "Beautiful wedding detail photography"
  },
  {
    id: 53,
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Outdoor Wedding",
    category: "wedding",
    description: "Beautiful outdoor wedding ceremony"
  },
  {
    id: 54,
    image: "https://images.unsplash.com/photo-1589990183450-10d4e2a5902f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Wedding Party",
    category: "wedding",
    description: "Fun wedding party group photography"
  },
  {
    id: 55,
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Traditional Wedding",
    category: "wedding",
    description: "Traditional wedding ceremony photography"
  },
  {
    id: 56,
    image: "https://images.unsplash.com/photo-1511900683039-c820d4a4d74d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Wedding Rings",
    category: "wedding",
    description: "Close-up wedding ring photography"
  },

  // Product Photography (10 images)
  {
    id: 57,
    image: "/lovable-uploads/9a9b9252-78b7-43f1-8851-9560324c9b48.png",
    title: "Premium Product Photography",
    category: "product",
    description: "High-end jewelry and product photography with professional lighting"
  },
  {
    id: 58,
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Corporate Product Showcase",
    category: "product",
    description: "Professional product showcase for luxury brand"
  },
  {
    id: 59,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Tech Product Photography",
    category: "product",
    description: "Modern technology product photography"
  },
  {
    id: 60,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Fashion Product Shoot",
    category: "product",
    description: "Stylish fashion products and accessories"
  },
  {
    id: 61,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Food Product Photography",
    category: "product",
    description: "Delicious food and beverage product photography"
  },
  {
    id: 62,
    image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Beauty Product Shoot",
    category: "product",
    description: "Elegant beauty and cosmetic product photography"
  },
  {
    id: 63,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Home Decor Products",
    category: "product",
    description: "Stylish home decoration product photography"
  },
  {
    id: 64,
    image: "https://images.unsplash.com/photo-1585633434967-a0f5b3c87ce9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Lifestyle Product Shoot",
    category: "product",
    description: "Products in lifestyle and usage contexts"
  },
  {
    id: 65,
    image: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Luxury Product Line",
    category: "product",
    description: "High-end luxury product photography"
  },
  {
    id: 66,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "E-commerce Products",
    category: "product",
    description: "Clean e-commerce product photography"
  },

  // Traditional Photography
  {
    id: 67,
    image: "/lovable-uploads/6fc71aee-bbc7-41ee-86e3-5dd6b37ad67f.png",
    title: "Traditional Dance Photography",
    category: "traditional",
    description: "Capturing the grace and beauty of traditional dance performances"
  },
  {
    id: 68,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Cultural Heritage",
    category: "traditional",
    description: "Traditional cultural ceremonies and rituals"
  },
  {
    id: 69,
    image: "https://images.unsplash.com/photo-1516981879613-95e2890a0a63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Traditional Costume",
    category: "traditional",
    description: "Beautiful traditional costume photography"
  },
  {
    id: 70,
    image: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Festival Photography",
    category: "traditional",
    description: "Vibrant traditional festival celebrations"
  },
  {
    id: 71,
    image: "https://images.unsplash.com/photo-1544967919-d8b57d974e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Traditional Music",
    category: "traditional",
    description: "Traditional music and instrument photography"
  },
  {
    id: 72,
    image: "https://images.unsplash.com/photo-1601292793517-526f0ac83ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Cultural Events",
    category: "traditional",
    description: "Important cultural event documentation"
  },
  {
    id: 73,
    image: "https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Traditional Art",
    category: "traditional",
    description: "Traditional art and craft photography"
  },
  {
    id: 74,
    image: "https://images.unsplash.com/photo-1504575188573-e7a93bd1ecf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Heritage Buildings",
    category: "traditional",
    description: "Traditional architecture and heritage sites"
  },
  {
    id: 75,
    image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Traditional Ceremonies",
    category: "traditional",
    description: "Sacred traditional ceremony photography"
  },
  {
    id: 76,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Cultural Portraits",
    category: "traditional",
    description: "Traditional cultural portrait photography"
  },

  // Creative Photography
  {
    id: 77,
    image: "/lovable-uploads/4ed5767b-7d1b-4431-ab25-eaf92509c011.png",
    title: "Artistic Portrait with Natural Light",
    category: "creative",
    description: "Beautiful portrait photography using natural lighting techniques"
  },
  {
    id: 78,
    image: "/lovable-uploads/fbc6ad72-6095-42e0-8ecf-397399ddfb15.png",
    title: "Creative Visual Effects",
    category: "creative",
    description: "Innovative photography with special effects and creative lighting"
  },
  {
    id: 79,
    image: "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Abstract Photography",
    category: "creative",
    description: "Abstract and conceptual photography art"
  },
  {
    id: 80,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Creative Portraits",
    category: "creative",
    description: "Artistic and creative portrait photography"
  },
  {
    id: 81,
    image: "https://images.unsplash.com/photo-1556855810-d6a26d5e4dd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Light Painting Art",
    category: "creative",
    description: "Creative light painting photography techniques"
  },
  {
    id: 82,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Surreal Photography",
    category: "creative",
    description: "Surreal and fantasy photography compositions"
  },
  {
    id: 83,
    image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Double Exposure Art",
    category: "creative",
    description: "Creative double exposure photography techniques"
  },
  {
    id: 84,
    image: "https://images.unsplash.com/photo-1526657782461-9fe13402a841?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Conceptual Photography",
    category: "creative",
    description: "Thought-provoking conceptual photography"
  },
  {
    id: 85,
    image: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Creative Composition",
    category: "creative",
    description: "Innovative composition and framing techniques"
  },
  {
    id: 86,
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Artistic Vision",
    category: "creative",
    description: "Unique artistic vision and creative expression"
  },

  // Video Production
  {
    id: 87,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Corporate Video Production",
    category: "video",
    description: "Brand story video for tech startup"
  },
  {
    id: 88,
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Film Production Set",
    category: "video",
    description: "Professional film production behind the scenes"
  },
  {
    id: 89,
    image: "https://images.unsplash.com/photo-1489599749250-9ac7dcac9099?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Music Video Production",
    category: "video",
    description: "Creative music video filming and production"
  },
  {
    id: 90,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Documentary Filming",
    category: "video",
    description: "Documentary style video production"
  },
  {
    id: 91,
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Commercial Video Shoot",
    category: "video",
    description: "High-quality commercial video production"
  },
  {
    id: 92,
    image: "https://images.unsplash.com/photo-1559603278-ad960509d3fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Event Video Coverage",
    category: "video",
    description: "Professional event videography services"
  },
  {
    id: 93,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Studio Video Production",
    category: "video",
    description: "Controlled studio environment video filming"
  },
  {
    id: 94,
    image: "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Live Streaming Setup",
    category: "video",
    description: "Professional live streaming and broadcast setup"
  },
  {
    id: 95,
    image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Video Post Production",
    category: "video",
    description: "Professional video editing and post-production"
  },
  {
    id: 96,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Cinematic Video Art",
    category: "video",
    description: "Cinematic style video production and storytelling"
  },

  // Branding
  {
    id: 97,
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Brand Identity Design",
    category: "branding",
    description: "Complete brand package for restaurant chain"
  },
  {
    id: 98,
    image: "https://images.unsplash.com/photo-1586953409045-d95a2f7e2a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Logo Design Concepts",
    category: "branding",
    description: "Creative logo design and brand identity development"
  },
  {
    id: 99,
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Brand Collateral Design",
    category: "branding",
    description: "Professional brand collateral and marketing materials"
  },
  {
    id: 100,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Corporate Branding",
    category: "branding",
    description: "Corporate brand identity and visual systems"
  },
  {
    id: 101,
    image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Brand Style Guide",
    category: "branding",
    description: "Comprehensive brand style guide development"
  },
  {
    id: 102,
    image: "https://images.unsplash.com/photo-1553032787-c8029c6e1228?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Packaging Design",
    category: "branding",
    description: "Creative product packaging and brand design"
  },
  {
    id: 103,
    image: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Brand Photography",
    category: "branding",
    description: "Professional brand photography and visual content"
  },
  {
    id: 104,
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Visual Brand Elements",
    category: "branding",
    description: "Creative visual brand elements and graphics"
  },
  {
    id: 105,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Brand Marketing Campaign",
    category: "branding",
    description: "Integrated brand marketing campaign design"
  },
  {
    id: 106,
    image: "https://images.unsplash.com/photo-1553884080-6d4b2b0c8b29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Digital Brand Experience",
    category: "branding",
    description: "Digital brand experience and online presence"
  },

  // Web Design
  {
    id: 107,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "E-commerce Website",
    category: "web",
    description: "Modern online store with seamless UX"
  },
  {
    id: 108,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Corporate Website Design",
    category: "web",
    description: "Professional corporate website development"
  },
  {
    id: 109,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Mobile App Interface",
    category: "web",
    description: "Responsive mobile application design"
  },
  {
    id: 110,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Web Development Process",
    category: "web",
    description: "Professional web development and coding"
  },
  {
    id: 111,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "UI/UX Design",
    category: "web",
    description: "User interface and experience design"
  },
  {
    id: 112,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Website Development",
    category: "web",
    description: "Full-stack website development services"
  },
  {
    id: 113,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Web Application Development",
    category: "web",
    description: "Custom web application development"
  },
  {
    id: 114,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Frontend Development",
    category: "web",
    description: "Modern frontend development and frameworks"
  },
  {
    id: 115,
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Responsive Web Design",
    category: "web",
    description: "Mobile-first responsive website design"
  },
  {
    id: 116,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Web Portfolio Showcase",
    category: "web",
    description: "Professional web portfolio and showcase sites"
  },
];
