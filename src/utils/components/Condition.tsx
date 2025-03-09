import type { ReactElement, ReactNode } from 'react';
import { iif } from './iif';

interface Props {
  expression: boolean;
  then: ReactNode;
  else?: ReactNode;
}

export const Condition = ({ expression, then: thenNode, else: elseNode }: Props): ReactElement => {
  return iif(expression, thenNode, elseNode);
};
