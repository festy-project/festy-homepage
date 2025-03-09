import { type ReactNode } from 'react';
import { formatOrReturn } from './formatOrReturn';

interface Props<T, V> {
  value: T;
  formatter: (value: NonNullable<T>) => V;
  defaultValue?: ReactNode;
}
function FormattedValue<T, V extends ReactNode>({
  value,
  formatter,
  defaultValue,
}: Props<T, V>): ReactNode {
  return formatOrReturn(value, formatter) ?? defaultValue;
}

export default FormattedValue;
