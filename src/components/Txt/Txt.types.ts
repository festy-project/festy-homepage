import type { ColorToken, FontSizeToken, FontWeightToken } from '@/styles';
import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from 'react';

export interface RenderConfigProps {
  /**
   * @see https://styled-components.com/docs/api#as-polymorphic-prop
   */
  as?: ElementType;

  /**
   * The test id attribute compatible with `@testing-library/react`.
   */
  testId?: string;
}
export interface ChildrenProps {
  /**
   * The children to render.
   */
  children?: ReactNode;
}

export interface TextOptionProps {
  as?: ElementType;
  color?: ColorToken;
  fontSize?: FontSizeToken;
  fontWeight?: FontWeightToken;
  textTransform?: CSSProperties['textTransform'];
  textDecoration?: CSSProperties['textDecoration'];
  textAlign?: CSSProperties['textAlign'];
  textOverflow?: CSSProperties['textOverflow'];
  whiteSpace?: CSSProperties['whiteSpace'];
  wordBreak?: CSSProperties['wordBreak'];
  line?: number;
  userSelect?: CSSProperties['userSelect'];
  onClick?: HTMLAttributes<HTMLDivElement>['onClick'];
  cursor?: CSSProperties['cursor'];
}

export interface TextProps extends TextOptionProps, RenderConfigProps, ChildrenProps {
  isRequired?: boolean;
}
