const groupColors = [
  "#FFF500",
  "#FF9BCB",
  "#B9DFFF",
  "#BFE6AE",
  "#FFC18C",
  "#CDBBFA"
];

const objectCategories = [
  "wearables", "rituals", "paper", "keychains", "found", "others"
];

const fortuneNote = {
  name: "Fortune Note",
  image: "images/fortune-note.jpg",
  symbol: "✉"
};

const clover = {
  name: "Four-Leaf Clover",
  image: "images/four-leaf-clover.jpg",
  symbol: "✳"
};

const watchPlaceholder = {
  name: "watch",
  image: "images/four-leaf-clover.jpg",
  symbol: "▣",
  color: "#a6ada3"
};

const objects = [
  {
    id: 1,
    name: "Jade Heart Necklace",
    image: "images/jade-heart-necklace.png",
    color: "#b6aa97",
    category: "wearables",
    description: "Chloe C",
    backText: "Every summer, Chloe’s mom would buy her a jade necklace. Over time, it became their tradition. Chloe wore hers every day, wherever she went. She believed the jade brought her luck and protection, and it felt especially meaningful because it came from her mom. When the jade chipped and its green color faded, Chloe felt as though some of its luck had faded with it. Her mom bought her another necklace, and Chloe has kept it for years. By now, it holds memories of her mom and all the time she’s spent wearing it. If she ever lost it, she’d do everything she could to find it again."
  },
  {
    id: 2,
    name: "Scorpio Necklace",
    image: "images/Yellow GOld Scorpio Necklace.png",
    color: "#bd7770",
    category: "wearables",
    description: "Coby",
    backText: "Coby got it at a crystal shop in Hawaii a few years ago. It’s been with Coby for so long that it’s come to feel lucky. “It’s like a child to me,” Coby says. It’s something Coby plans to keep forever."
  },
  {
    id: 3,
    name: "Polished Wooden Bead Bracelet",
    image: "images/polished-wooden-bead-bracelet.png",
    symbol: "▣",
    color: "#a6ada3",
    category: "wearables",
    description: "Dad",
    purchaseLabel: "Visit website"
  },
  {
    id: 4,
    name: "Golden Bead Bracelet",
    image: "images/golden-bead-bracelet.png",
    symbol: "✳",
    color: "#b9bd96",
    category: "wearables",
    description: "Mom"
  },
  {
    id: 5,
    name: "Red Twisted Cord with Gold Charm",
    image: "images/red-twisted-cord.png",
    symbol: "◌",
    color: "#b9b9b5",
    category: "wearables",
    description: "Anne L",
    backText: "My mom gave me this gold Winnie the Pooh necklace for my sixth birthday. In Chinese culture, giving someone gold can be a way of wishing them good luck. I’ve had this necklace for so long that it holds memories from different parts of my life. When I wear it, I feel like I’m carrying a little of that luck with me, along with a reminder of my mom’s love."
  },
  {
    id: 6,
    name: "Watch",
    image: "images/watch.jpeg",
    symbol: "⚿",
    color: "#b4a389",
    category: "wearables",
    description: "Faizul Rahman",
    backText: "I think I started thinking of my watch as lucky in 2023, when I wore it to an accounting exam. I hadn’t studied much, so I went in nervous and just hoping to pass. I ended up with a decent grade, and that gave me a little more confidence. Ever since, this is the watch I reach for when I have something important coming up."
  },
  {
    id: 7,
    name: "Black Beaded Necklace with Carved Pendant",
    image: "images/black-beaded-necklace.png",
    symbol: "●",
    color: "#a5aaa9",
    category: "wearables",
    description: "Terry W"
  },
  {
    id: 8,
    name: "Silver Chain",
    image: "images/silver-chain.png",
    symbol: "◇",
    color: "#c5b4a4",
    category: "wearables",
    description: "William Z",
    backText: "I got my first necklace when I was so young that I barely remember what my dad said about it. I remember him telling me to keep it on, so I did. I wore it day and night, taking it off only for things like X-rays. When I got older, I asked him what it meant. He told me it was supposed to bring me luck, protect me, and keep me in good health. As I got older, I started noticing how rarely I got sick, even when I was stressed and barely sleeping. The necklace had gotten me this far, I figured. Why take it off and find out? When I outgrew the first one, my parents gave me a new one. That’s why there are two necklaces. I wear a different one now, but it means the same thing to me."
  },
  {
    id: 9,
    name: "Amethyst Cathedral",
    image: "images/Amethyst-cathedral.png",
    symbol: "◎",
    color: "#b9a5a1",
    category: "rituals"
  },
  {
    id: 10,
    name: "Framed Chinese Amber Ornament",
    image: "images/Framed-Chinese-Amber-Ornament.png",
    symbol: "✦",
    color: "#c7b69b",
    category: "rituals"
  },
  {
    id: 11,
    name: "Shell",
    image: "images/shell.jpg",
    symbol: "◔",
    color: "#a6b9b7",
    category: "rituals"
  },
  { ...fortuneNote, id: 12, category: "rituals" },
  { ...fortuneNote, id: 13, category: "rituals" },
  { ...fortuneNote, id: 14, category: "rituals" },
  { ...fortuneNote, id: 15, category: "rituals", color: "#b9bd96" },
  { ...fortuneNote, id: 16, category: "rituals", color: "#c7b69b" },
  {
    id: 17,
    name: "Red Pocket",
    image: "images/Red.png",
    symbol: "✉",
    color: "#a5aaa9",
    category: "paper",
    description: "Virgil L"
  },
  { ...fortuneNote, id: 18, category: "paper", color: "#b9b9b5" },
  {
    id: 19,
    name: "Yellow Tailsman",
    image: "images/yellow-tailsman.png",
    symbol: "✉",
    category: "paper",
    description: "Nathan J"
  },
  { ...fortuneNote, id: 20, category: "paper", color: "#b9bd96" },
  { ...watchPlaceholder, id: 21, category: "paper", purchaseLabel: "Visit website" },
  { ...clover, id: 22, category: "paper", color: "#b9bd96" },
  { ...watchPlaceholder, id: 23, category: "paper" },
  { ...clover, id: 24, category: "paper", color: "#b9bd96" },
  {
    id: 25,
    name: "Eggplant Keychain",
    image: "images/Eggplant-Keychain.png",
    symbol: "▣",
    color: "#a6ada3",
    category: "keychains",
    purchaseLabel: "Visit website"
  },
  {
    id: 26,
    name: "Pink Plush Bunny Keychain",
    image: "images/Pink-plush-keychain.png",
    symbol: "✳",
    color: "#b9bd96",
    category: "keychains"
  },
  {
    id: 27,
    name: "Red Underwear",
    image: "images/Red-Underwear.jpg",
    symbol: "▣",
    color: "#b9bd96",
    category: "keychains",
    purchaseLabel: "Visit website"
  },
  { ...clover, id: 28, category: "keychains", color: "#b9bd96" },
  { ...watchPlaceholder, id: 29, category: "keychains", purchaseLabel: "Visit website" },
  { ...clover, id: 30, category: "keychains", color: "#a6b9b7" },
  { ...clover, id: 31, category: "keychains", color: "#a6b9b7" },
  { ...clover, id: 32, category: "keychains", color: "#a6b9b7" },
  {
    id: 33,
    name: "Lysol Disinfectant Spray",
    image: "images/Lysol.png",
    symbol: "✳",
    color: "#a6b9b7",
    category: "found"
  },
  {
    id: 34,
    name: "Light Aqua Blue Helmet",
    image: "images/Light-aqua-blue-helmet.png",
    symbol: "✳",
    color: "#b9bd96",
    category: "found"
  },
  {
    id: 35,
    name: "Yellow Pencil with its Full Eraser",
    image: "images/yellow-pencil.png",
    symbol: "▣",
    color: "#a6ada3",
    category: "found",
    purchaseLabel: "Visit website"
  },
  { ...clover, id: 36, category: "found", color: "#b9bd96" },
  { ...watchPlaceholder, id: 37, category: "found", purchaseLabel: "Visit website" },
  { ...clover, id: 38, category: "found", color: "#b9bd96" },
  { ...watchPlaceholder, id: 39, category: "found" },
  { ...clover, id: 40, category: "found", color: "#b9bd96" },
  {
    id: 41,
    name: "Lysol Disinfectant Spray",
    image: "images/Lysol.png",
    symbol: "▣",
    color: "#a6ada3",
    category: "others",
    purchaseLabel: "Visit website"
  },
  {
    id: 42,
    name: "Big Blue Helmet",
    image: "images/Light-aqua-blue-helmet.png",
    symbol: "✳",
    color: "#b9bd96",
    category: "others"
  },
  {
    id: 43,
    name: "Tetronica Pencil with its Full Eraser",
    image: "images/yellow-pencil.png",
    symbol: "▣",
    color: "#a6ada3",
    category: "others",
    purchaseLabel: "Visit website"
  },
  { ...clover, id: 44, category: "others", color: "#b9bd96" },
  { ...watchPlaceholder, id: 45, category: "others", purchaseLabel: "Visit website" },
  { ...clover, id: 49, category: "others", color: "#b9bd96" },
  { ...watchPlaceholder, id: 46, category: "others" },
  { ...clover, id: 47, category: "others", color: "#b9bd96" },
  { ...watchPlaceholder, id: 48, category: "others", purchaseLabel: "Visit website" }
].map(object => ({
  color: "#d0c4aa",
  backText: "Personal story",
  purchaseUrl: "",
  purchaseLabel: "Shop this object",
  ...object
}));

function getObjectCategory(object) {
  const key = String(object.category ?? "").trim().toLowerCase();
  return key === "found objects" ? "found" : key;
}

function getObjectSectionColor(object) {
  const index = objectCategories.indexOf(getObjectCategory(object));
  return groupColors[index] ?? groupColors[0];
}