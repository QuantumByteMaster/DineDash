export const toCurrency = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

// Calculate appropriate price based on dish type and complexity
export const calculatePrice = (recipe) => {
  const basePrices = {
    // Appetizers and Starters
    salad: 8.99,
    soup: 6.99,
    appetizer: 9.99,
    starter: 10.99,

    // Main Courses
    pasta: 16.99,
    pizza: 18.99,
    burger: 14.99,
    steak: 24.99,
    chicken: 19.99,
    fish: 22.99,
    seafood: 26.99,
    lamb: 23.99,
    beef: 21.99,
    pork: 20.99,

    // Ethnic Cuisines
    curry: 17.99,
    "stir-fry": 16.99,
    kebab: 15.99,
    tacos: 13.99,
    sushi: 25.99,
    ramen: 14.99,
    "pad-thai": 16.99,
    biryani: 18.99,
    paella: 23.99,

    // Desserts
    dessert: 8.99,
    cake: 9.99,
    "ice-cream": 6.99,
    pie: 7.99,

    // Beverages
    smoothie: 6.99,
    juice: 4.99,
    coffee: 3.99,
    tea: 3.49,
  };

  // Check recipe name and tags for price calculation
  const recipeName = recipe.name?.toLowerCase() || "";
  const recipeTags = recipe.tags?.map((tag) => tag.toLowerCase()) || [];
  const recipeCuisine = recipe.cuisine?.toLowerCase() || "";

  // Combine all text for analysis
  const allText = `${recipeName} ${recipeTags.join(" ")} ${recipeCuisine}`;

  // Find matching price category
  for (const [category, price] of Object.entries(basePrices)) {
    if (allText.includes(category)) {
      return price;
    }
  }

  // Default pricing based on cuisine type
  const cuisinePricing = {
    italian: 18.99,
    mexican: 15.99,
    chinese: 16.99,
    japanese: 22.99,
    indian: 17.99,
    thai: 16.99,
    mediterranean: 19.99,
    american: 16.99,
    french: 23.99,
    greek: 18.99,
    turkish: 17.99,
    moroccan: 19.99,
    korean: 18.99,
    vietnamese: 15.99,
    spanish: 20.99,
  };

  for (const [cuisine, price] of Object.entries(cuisinePricing)) {
    if (allText.includes(cuisine)) {
      return price;
    }
  }

  // Fallback price based on preparation time (more time = more expensive)
  const prepTime = recipe.prepTimeMinutes || 30;
  if (prepTime < 15) return 12.99;
  if (prepTime < 30) return 16.99;
  if (prepTime < 60) return 19.99;
  return 24.99;
};
