const PRODUCT_ICONS: Record<string, string> = {
  Vegetables: '🥕',
  Fruit: '🍓',
  Mushrooms: '🍄',
  Herbs: '🌿',
  Flowers: '🌻',
  Eggs: '🥚',
  'CSA Shares': '🧺',
  'Grass-Fed Beef': '🐄',
  'Pastured Pork': '🐖',
  'Pastured Chicken': '🐔',
  Beef: '🐄',
  Honey: '🍯',
  Cider: '🧃',
  Bakery: '🥐',
  Apples: '🍎',
  'U-Pick Fruit': '🍒',
  Cherries: '🍒',
  Pumpkins: '🎃',
  'Produce Box': '📦',
  'Meat Subscription': '🥩',
  'Flower Subscription': '💐',
  'Local Groceries': '🛒',
  Dairy: '🥛',
  'Beeswax Candles': '🕯️',
};

export function productIcon(product: string): string {
  return PRODUCT_ICONS[product] ?? '🌾';
}

export function farmIcon(products: string[]): string {
  for (const p of products) {
    if (PRODUCT_ICONS[p]) return PRODUCT_ICONS[p];
  }
  return '🌾';
}
