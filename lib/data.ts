export const business = {
  name: "Bubble Tea Magic",
  address: "1201 N Main St #300, Euless, TX 76039",
  phone: "(817) 555-0123",
  email: "info.bubbleteamagic@gmail.com",
  doorDashUrl: "https://www.doordash.com",
  instagramUrl: "https://www.instagram.com/bubbleteamagic/?hl=en",
  mapsEmbed:
    "https://www.google.com/maps?q=1201+N+Main+St+%23300,+Euless,+TX+76039&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=1201+N+Main+St+%23300,+Euless,+TX+76039",
  hours: [
    { day: "Monday – Thursday", time: "11:00 AM – 9:00 PM" },
    { day: "Friday – Saturday", time: "11:00 AM – 10:00 PM" },
    { day: "Sunday", time: "11:00 PM – 9:00 PM" },
  ],
  serviceArea: ["Euless", "Near from Bedford", "Irving", "Hurst", "DFW Airport"],
};

export const menuCategories = [
  {
    emoji: "🧋",
    title: "Milk Tea",
    desc: "Dirty Boba, Taro, Thai, Classic, Matcha, Caramel, Lavender, Vanilla, Mocha & more.",
  },
  {
    emoji: "🥭",
    title: "Fruit Tea",
    desc: "Blueberry, peach, honeydew, passion, ginger, kiwi, green apple, pomegranate & mango.",
  },
  {
    emoji: "🍹",
    title: "Slushy",
    desc: "Cherry, Lychee, Strawberry, Pineapple & Mango — icy and refreshing.",
  },
  {
    emoji: "🍧",
    title: "Shaved Ice",
    desc: "Pina Colada, Tiger's Blood, Raspberry, Strawberry, Mango & Grape.",
  },
  {
    emoji: "☕",
    title: "Coffee & Vietnamese Coffee",
    desc: "Iced Latte, Caramel Latte, Americano, Espresso, Masala Chai, Iced Matcha & Vietnamese Iced Coffee.",
  },
  {
    emoji: "🧇",
    title: "Bubble Waffles",
    desc: "Classic, Oreo, Strawberry & Banana — loaded with ice cream and drizzle.",
  },
  {
    emoji: "🥤",
    title: "Fresh Juices",
    desc: "Cold-pressed daily — nothing from concentrate, ever.",
  },
  {
    emoji: "🍦",
    title: "Ice Blend & Smoothies",
    desc: "Mocha, Taro, Matcha, Avocado, Strawberry Banana & more, blended fresh.",
  },
  {
    emoji: "🥟",
    title: "Himalayan Momo",
    desc: "Chicken, veg, or pork steamed dumplings served with house sauce.",
  },
  {
    emoji: "🍜",
    title: "Ramen",
    desc: "Spicy Chicken Buldak, Kimchi, NeoGuri, Shin Gold/Green/Red/Black.",
  },
  {
    emoji: "🍓",
    title: "Chocolate Dipped",
    desc: "Strawberries or bananas, dipped in white or milk chocolate.",
  },
];

export const freshJuices = [
  { name: "Orange Bliss", price: "$6.99" },
  { name: "Sugarcane Juice", price: "$6.99" },
  { name: "Pomegranate Juice", price: "$8.99" },
  { name: "Fresh Coconut Essence", price: "$5.99" },
  { name: "Green Revive", price: "$6.99" },
  { name: "Lemonade Dream", price: "$4.99" },
  { name: "Ruby Boost", price: "$6.99" },
  { name: "Nature's Fuel", price: "$6.99" },
  { name: "Golden Glow", price: "$6.99" },
];

export const milkTeaFlavors = [
  "Dirty Boba", "Honeydew", "Taro", "Coconut", "Thai", "Blueberry",
  "Classic", "Pistachio", "Matcha", "Cappuccino", "Caramel", "Peach",
  "Lavender", "Banana", "Vanilla", "Chocolate", "Mocha", "Mango", "Strawberry",
];

export const fruitTeaFlavors = [
  "Blueberry", "Peach", "Honeydew", "Passion", "Ginger", "Kiwi", "Green Apple", "Pomegranate", "Mango",
];

export const slushyFlavors = ["Cherry", "Lychee", "Strawberry", "Pineapple", "Mango"];

export const iceBlendFlavors = [
  "Mocha", "Taro", "Vanilla", "Matcha", "Coconut", "Avocado", "Banana",
  "Peach", "Mango", "Strawberry", "Cappuccino", "Cookies & Cream", "Blueberry", "Pistachio",
];

export const smoothieFlavors = ["Strawberry Banana", "Blueberry Banana", "Strawberry Blueberry"];

export const coffeeMenu = [
  { name: "Ice Latte", price: "$5.29 / $6.99" },
  { name: "Ice Caramel Latte", price: "$5.29 / $6.99" },
  { name: "Americano", price: "$3.99 (S)" },
  { name: "Masala Chai (Tea)", price: "$1.99" },
  { name: "Espresso Shot", price: "$2.59" },
  { name: "Iced Matcha Latte", price: "$4.99 / $5.99" },
  { name: "Vietnamese Iced Coffee", price: "$5.99" },
];

export const bubbleWaffles = [
  { name: "Bubble Waffle", desc: "Bubble waffle, butter, ice cream & syrup", price: "$4.99" },
  { name: "Oreo Bubble Waffle", desc: "Chocolate ice cream, Oreo & chocolate drizzle", price: "$4.99" },
  { name: "Strawberry Bubble Waffle", desc: "Vanilla ice cream, cream, strawberry & caramel drizzle", price: "$4.99" },
  { name: "Banana Bubble Waffle", desc: "Vanilla ice cream, cream, banana & caramel drizzle", price: "$4.99" },
];

export const momoAndRamen = {
  momo: [
    { name: "Chicken Steam Momo", price: "$9.99" },
    { name: "Veg Steam Momo", price: "$9.99" },
    { name: "Pork Steam Momo", price: "$9.99" },
  ],
  ramen: [
    { name: "Spicy Chicken Buldak", price: "$4.99" },
    { name: "Spicy Chicken Buldak with Carbonara", price: "$4.99" },
    { name: "2x Spicy Chicken Buldak", price: "$4.99" },
    { name: "Kimchi Ramen", price: "$4.99" },
    { name: "NeoGuri (Seafood)", price: "$4.99" },
    { name: "Shin Gold (Chicken)", price: "$4.99" },
    { name: "Shin Green (Veg)", price: "$4.99" },
    { name: "Shin Red (Original)", price: "$4.99" },
    { name: "Shin Black", price: "$4.99" },
  ],
};

export const chocolateDipped = [
  { name: "Chocolate Strawberry", price: "3pc / 6pc — $4.99 / $8.99" },
  { name: "Chocolate Banana", price: "3pc / 6pc — $4.99 / $8.99" },
];

export const specialtyDrinks = [
  { name: "Mango Nada", price: "$7.99" },
];

export const toppings = {
  poppings: "Variety of popping flavors",
  jelly: "Variety of jelly flavors",
  price: "$0.99 each",
};

export const sizesPricing = {
  milkTea: { medium: "$4.99", large: "$5.99" },
  fruitTea: { medium: "$4.99", large: "$5.99" },
  slushy: { medium: "$4.59", large: "$5.59" },
  iceBlend: { medium: "$5.99", large: "$6.99" },
  smoothie: { medium: "$5.99", large: "$6.99" },
};

export const whyChooseUs = [
  { title: "Fresh Ingredients", desc: "Real fruit, real tea, cut and brewed daily." },
  { title: "Premium Quality", desc: "Carefully sourced teas, milks, and toppings." },
  { title: "Made to Order", desc: "Every cup shaken fresh — never pre-batched." },
  { title: "Friendly Service", desc: "A warm welcome with every visit." },
  { title: "Large Menu Selection", desc: "Bubble tea, momo, ramen, waffles & more — something for everyone." },
  { title: "Convenient Location", desc: "Easy to reach from Euless, Bedford & Irving." },
  { title: "Local Favorite", desc: "Loved by regulars across the DFW area." },
];

export const testimonials = [
  {
    name: "Priya S.",
    location: "Euless, TX",
    quote:
      "The Ruby Boost juice is unreal — tastes like it was made five minutes ago, because it was. This is my go-to stop after work.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    location: "Bedford, TX",
    quote:
      "Best Vietnamese iced coffee in the DFW area, hands down. The bubble waffles are a close second favorite of mine.",
    rating: 5,
  },
  {
    name: "Linh N.",
    location: "Irving, TX",
    quote:
      "Happy Hour here is a steal. I bring the whole office over almost every Friday at noon. The chicken momo is a bonus!",
    rating: 5,
  },
];