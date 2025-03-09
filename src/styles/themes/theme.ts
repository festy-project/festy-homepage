import { assetColors } from './colors';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeight';

export type CustomTheme = {
  colors: typeof assetColors;
  fontSizes: typeof fontSizes;
  fontWeights: typeof fontWeights;
};
export const theme: CustomTheme = {
  colors: assetColors,
  fontSizes: fontSizes,
  fontWeights: fontWeights,
};
