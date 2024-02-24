const sampleListings = [
  {
    title: "Mountain Chalet Retreat",
    description: "Escape to a cozy chalet surrounded by majestic mountains.",
    image: {
      filename: "mountain-chalet-image",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
       },
    
    price: 1200,
    location: "Banff",
    country: "Canada",
    reviews: [],
    owner: "65d1e21a6242f0a530b9f7c1", 
    geometry: {
      type: "Point",
      coordinates: [-115.5704, 51.1784],
    },
    category: [
      "Amazing Pools",
      "Arctic",
      "Farms",
      "Camping"],
},

{
    title: "Historic Castle Experience",
    description: "Live like royalty in a beautifully restored historic castle.",
    image: {
      filename: "castle-image",
       url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"},
    price: 3000,
    location: "Edinburgh",
    country: "United Kingdom",
    reviews: [],
    owner: "65d1e21a6242f0a530b9f7c1", // Updated with the specified owner ID
    geometry: {
      type: "Point",
      coordinates: [-3.1883, 55.9533],
    },
    category: [
      "Farms",
      "Camping"],
 }, 
{
    title: "Beachfront Paradise",
    description: "Relax and unwind with the sound of the ocean in this beachfront paradise.",
    image: {
      filename: "beachfront-image",
      url:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"},
   
    price: 1800,
    location: "Maui",
    country: "United States",
    reviews: [],
    owner: "65d1e21a6242f0a530b9f7c1", // Updated with the specified owner ID
    geometry: {
      type: "Point",
      coordinates: [-156.2403, 20.7984],
    },
    category: [
      "Trending",
      "Rooms",
      
      "Camping"],
  },

  {
    title: "Arctic Adventure Cabin",
    description: "Experience the beauty of the Arctic in a cozy cabin surrounded by snow and ice.",
    image: {
      filename: "arctic-cabin-image",
    url:"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"},
      
    price: 1500,
    location: "Nuuk",
    country: "Greenland",
    reviews: [],
    owner: "65d1e21a6242f0a530b9f7c1", // Updated with the specified owner ID
    geometry: {
      type: "Point",
      coordinates: [-51.7216, 64.1836],
    },
    category: [
      "Trending",
      "Arctic",
      "Farms",
      "Camping"],
  },
 {
    title: "City View Loft",
    description: "Enjoy the city lights in this modern loft with breathtaking views.",
    image: {
      filename: "city-view-loft-image",
      url:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"},
     
    price: 1200,
    location: "Tokyo",
    country: "Japan",
    reviews: [],
    owner: "65d1e21a6242f0a530b9f7c1",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895],
    },
    category: [
      
      "Mountains",
      "Castles",
      "Amazing Pools",
     ],
  },
  // Add more listings as needed
  {
    title: "Rustic Mountain Cabin",
    description: "Escape to the mountains in this charming cabin surrounded by nature.",
    image: {
      filename: "mountain-cabin-image",
       url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"},
     
    price: 1100,
    location: "Banff",
    country: "Canada",
    reviews: [],
    owner: "65d1e21a6242f0a530b9f7c1",
    geometry: {
      type: "Point",
      coordinates: [-115.5675, 51.1784],
    },
    category: [
      "Trending",
     ,
      "Castles",
      "Amazing Pools",
      "Arctic",
      "Farms",
      "Camping"],
  },
{
    title: "Lakeview Cabin Retreat",
    description: "Escape to this cozy cabin by the lake surrounded by serene nature.",
    image: {
      filename: "lakeview-cabin-image",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"},
      
    price: 1200,
    location: "Lake Tahoe",
    country: "United States",
    reviews: [],
    owner: "65d1e21a6242f0a530b9f7c1",
    geometry: {
      type: "Point",
      coordinates: [-120.0324, 39.0968],
    },
    category: [
      "Trending",
      
      "Amazing Pools",
      "Arctic",
      "Farms",
      "Camping"],
  },
  // Add more listings as needed
  {
    title: "Northern Lights Cabin",
    description: "Witness the magic of the Northern Lights in this remote cabin in Lapland.",
    image: {
      filename: "northern-lights-cabin-image",
     url:"https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"},
      
    price: 2500,
    location: "Rovaniemi",
    country: "Finland",
    reviews: [],
    owner: "65d1e21a6242f0a530b9f7c1",
    geometry: {
      type: "Point",
      coordinates: [25.0136, 66.4976],
    },
    category: [
      "Trending",
     
      "Amazing Pools",
      "Arctic",
      "Farms",
      "Camping"],
  },{
    title: "Luxury Beachfront Villa",
    description: "Indulge in the luxury of this stunning beachfront villa with panoramic ocean views.",
    image: {
      filename: "beachfront-villa-image",
     url:"https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"},
   
    price: 3500,
    location: "Maui",
    country: "United States",
    reviews: [],
    owner: "65d1e21a6242f0a530b9f7c1",
    geometry: {
      type: "Point",
      coordinates: [-156.3319, 20.7984],
    },
    category: [
      "Trending",
      "Rooms",
      "Iconic Cities",
      "Mountains",
      "Castles",
      "Amazing Pools",
      ],
  },
  // Add more listings as needed
  {
    title: "Rustic Mountain Lodge",
    description: "Experience the rustic charm of this mountain lodge nestled in the heart of the Rockies.",
    image: {
      filename: "mountain-lodge-image",
       url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"},
   
    price: 1800,
    location: "Banff",
    country: "Canada",
    reviews: [],
    owner: "65d1e21a6242f0a530b9f7c1",
    geometry: {
      type: "Point",
      coordinates: [-115.5695, 51.1784],
    },
    category: [
      
      "Iconic Cities",
      "Mountains",
      "Castles",
      "Amazing Pools",
      "Arctic",
      "Farms",
      "Camping"],
  },
{
    title: "Urban Loft in Downtown",
    description: "Live in style with this modern urban loft located in the bustling heart of the city.",
    image: {
      filename: "urban-loft-image",
       url:  "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"},
    
    price: 2000,
    location: "San Francisco",
    country: "United States",
    reviews: [],
    owner: "65d1e21a6242f0a530b9f7c1",
    geometry: {
      type: "Point",
      coordinates: [-122.4194, 37.7749],
    },
    category: [
      "Trending",
      "Rooms",
      "Iconic Cities",
      
      "Amazing Pools",
      "Arctic",
      "Farms",
      "Camping"],
  },
  // Add more listings as needed
  {
    title: "Enchanting Forest Cabin",
    description: "Escape to the tranquility of this enchanting forest cabin surrounded by lush greenery.",
    image: {
      filename: "forest-cabin-image",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"},
    
    price: 1200,
    location: "Black Forest",
    country: "Germany",
    reviews: [],
    owner: "65d1e21a6242f0a530b9f7c1",
    geometry: {
      type: "Point",
      coordinates: [8.2275, 48.4156],
    },
    category: [
      "Trending",
      "Rooms",
      "Iconic Cities",
      "Mountains",
    
      "Arctic",
      "Farms",
      "Camping"],
  },
{
    title: "Luxury Villa with Ocean Views",
    description: "Indulge in the opulence of this stunning luxury villa offering breathtaking ocean views.",
    image: {
      filename: "luxury-villa-image",
      url:"https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"},

     
    price: 3000,
    location: "Ibiza",
    country: "Spain",
    reviews: [],
    owner: "65d1e21a6242f0a530b9f7c1",
    geometry: {
      type: "Point",
      coordinates: [1.4216, 38.9066],
    },
    category:[
      "Trending",
      "Rooms",
      "Iconic Cities",
      "Mountains",
      "Castles",
      "Amazing Pools",
      "Arctic",
      "Farms",
      "Camping"],
  },
  // Add more listings as needed
  {
    title: "Historic Castle in Scotland",
    description: "Experience the charm of this historic castle nestled in the picturesque landscapes of Scotland.",
    image: {
      filename: "castle-image",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"},
    
    price: 1800,
    location: "Edinburgh",
    country: "United Kingdom",
    reviews: [],
    owner: "65d1e21a6242f0a530b9f7c1",
    geometry: {
      type: "Point",
      coordinates: [-3.1883, 55.9533],
    },
    category: ["Castles", "Amazing Pools",
    "Arctic",
    "Farms",],
  },
  ];
  
  module.exports = { data: sampleListings };
 
