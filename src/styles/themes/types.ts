//  assetColors

import type { fontWeights } from './fontWeight';
import type { fontSizes } from './fontSizes';
import type { assetColors } from './colors';
//
// const ColorGroupNames = ['cosmos', 'lilac', 'lavender', 'grey'] as const;
//
// export type ColorGroup = (typeof ColorGroupNames)[number];
//
// export function isColorGroup(str: string): str is ColorGroup {
//   return ColorGroupNames.includes(str as ColorGroup);
// }
//
// type MakeColorTokenSet<
//   TokenName extends ColorGroup,
//   TokenNumber extends number[] | string[],
// > = `${TokenName}${TokenNumber[number]}`;
//
// export type ColorToken =
//   | 'white'
//   | MakeColorTokenSet<'grey', [100, 200, 300, 400, 500, 600, 700, 800, 900]>
//   // | MakeColorTokenSet<'lilac', [100, 200, 300, 400, 500, 600, 700, 900]>
//   | MakeColorTokenSet<'lavender', [100, 200, 300, 400, 500, 600, 900]>;
//
// export type ColorScheme = Record<ColorToken, string>;
//
// //  fontSizes/types.ts
//
// const FontGroupNames = ['title', 'text', 'label'] as const;
// const TitleSizeNames = ['Xl', 'L', 'M', 'S'] as const;
// const TextSizeNames = ['M', 'S'] as const;
// const LabelSizeNames = ['M', 'S'] as const;
//
// export type FontGroup = (typeof FontGroupNames)[number];
// export type TitleSizeGroup = (typeof TitleSizeNames)[number];
// export type TextSizeGroup = (typeof TextSizeNames)[number];
// export type LabelSizeGroup = (typeof LabelSizeNames)[number];
//
// type MakeFontTokenSet<
//   TokenName extends FontGroup,
//   Size extends TitleSizeGroup | TextSizeGroup | LabelSizeGroup,
// > = `${TokenName}${Size[number]}`;
//
// export type FontSizeToken =
//   | MakeFontTokenSet<'title', TitleSizeGroup>
//   | MakeFontTokenSet<'text', TextSizeGroup>
//   | MakeFontTokenSet<'label', LabelSizeGroup>;
//
// export type FontScheme = Record<FontSizeToken, string>;
export type FontWeightToken = keyof typeof fontWeights;
export type FontSizeToken = keyof typeof fontSizes;
export type ColorToken = keyof typeof assetColors;
