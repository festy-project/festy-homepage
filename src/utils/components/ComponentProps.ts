import type React from 'react';
export interface RenderConfigProps {
  /**
   * @see https://styled-components.com/docs/api#as-polymorphic-prop
   */
  as?: React.ElementType;

  /**
   * The test id attribute compatible with `@testing-library/react`.
   */
  testId?: string;
}
export interface ChildrenProps {
  /**
   * The children to render.
   */
  children?: React.ReactNode;
}
