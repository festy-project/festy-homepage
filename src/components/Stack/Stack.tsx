'use client';

import type { ComponentPropsWithRef, CSSProperties, ElementType, ReactElement } from 'react';
import React, { forwardRef } from 'react';

import { StyledStack } from './Stack.styled';

import type { ColorToken } from '@/styles';

export type StringElementType = ElementType & string;

type AsProp = {
  as?: StringElementType;
};

export type StackGenericProps<T extends StringElementType = 'div'> = StackProps &
  ComponentPropsWithRef<T>;

export type StackComponentType = <T extends StringElementType = 'div'>(
  props: StackGenericProps<T> & Pick<ComponentPropsWithRef<T>, 'ref'>,
) => ReactElement;

export interface StackProps extends StackOptionProps, AsProp {}
export interface StackOptionProps {
  children?: React.ReactNode;
  align?: CSSProperties['alignItems'];

  justify?: CSSProperties['justifyContent'];

  direction?: CSSProperties['flexDirection'];

  spacing?: number;

  flexWrap?: CSSProperties['flexWrap'];

  width?: CSSProperties['width'];
  minWidth?: CSSProperties['minWidth'];

  height?: CSSProperties['height'];
  minHeight?: CSSProperties['minHeight'];

  flex?: CSSProperties['flex'];

  background?: ColorToken;

  radius?: number;
}
const createStackComponent = (stackOption?: StackProps): StackComponentType =>
  // @ts-ignore
  forwardRef(function Stack<T extends StringElementType>(
    {
      as = 'div',
      spacing = stackOption?.spacing ?? 12,
      direction = stackOption?.direction ?? 'column',
      align = stackOption?.align ?? 'flex-start',
      justify = stackOption?.justify ?? 'flex-start',
      width = stackOption?.width ?? 'initial',
      height = stackOption?.height ?? 'initial',
      flexWrap = stackOption?.flexWrap ?? 'initial',
      flex = stackOption?.flex ?? 'initial',
      radius = stackOption?.radius ?? 0,
      background = stackOption?.background,
      ...rest
    }: StackGenericProps<T>,
    ref: ComponentPropsWithRef<T>['ref'],
  ) {
    return (
      <StyledStack
        as={as}
        spacing={spacing}
        ref={ref}
        direction={direction}
        align={align}
        justify={justify}
        width={width}
        height={height}
        flexWrap={flexWrap}
        flex={flex}
        background={background}
        radius={radius}
        {...rest}
      >
        {rest.children}
      </StyledStack>
    );
  });

interface StackType extends StackComponentType {
  Vertical: StackComponentType;
  Horizontal: StackComponentType;
}

export const Stack = createStackComponent() as StackType;
Stack.Vertical = createStackComponent({ direction: 'column' });
Stack.Horizontal = createStackComponent({ direction: 'row' });

export default Stack;
