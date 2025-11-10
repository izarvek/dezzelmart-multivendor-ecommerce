import { recommendAssets, recommendEditorAssets, fashionTrendyAssets, } from "../../assets/fashion/assetsFashion.js";
import { menuAccessoriesAssets } from "../../assets/accessories/assetsAccessories.js";
import { electronicProducts,recomendedProducts,} from "../../assets/electronics/assetsElectronics.js";
import { groceryProductAssets } from "../../assets/groceries/assetsGrocery.js";
  
 export const allAssets = [
    // fashionAssets,
    ...(recommendAssets || []),
    ...(recommendEditorAssets || []),
    ...(fashionTrendyAssets || []),
    // Accerrosories
    ...(menuAccessoriesAssets || []),
    // electronicProducts,
    ...(recomendedProducts || []),
    ...(electronicProducts || []),
    // groceries
    ...(groceryProductAssets || []),
  ];