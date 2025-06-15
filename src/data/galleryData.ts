
import { categories } from "./gallery/categories";
import { studioItems } from "./gallery/studioItems";
import { familyItems } from "./gallery/familyItems";
import { fashionItems } from "./gallery/fashionItems";
import { kidsItems } from "./gallery/kidsItems";
import { weddingItems } from "./gallery/weddingItems";
import { productItems } from "./gallery/productItems";
import { traditionalItems } from "./gallery/traditionalItems";
import { creativeItems } from "./gallery/creativeItems";
import { videoItems } from "./gallery/videoItems";
import { brandingItems } from "./gallery/brandingItems";
import { webItems } from "./gallery/webItems";

export { categories };

export const galleryItems = [
  ...studioItems,
  ...familyItems,
  ...fashionItems,
  ...kidsItems,
  ...weddingItems,
  ...productItems,
  ...traditionalItems,
  ...creativeItems,
  ...videoItems,
  ...brandingItems,
  ...webItems,
];
