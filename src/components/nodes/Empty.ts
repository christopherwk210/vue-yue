import { VYNode } from '../VYNode';

export const Empty = (): VYNode<any> => {
  return {
    type: 'Empty',
    insertChild() { throw new Error('Empty does not support children'); },
    removeChild() { throw new Error('Empty does not support children'); },
    insertBefore() { throw new Error('Empty does not support children'); },
    getNextSibling() { throw new Error('Empty does not support children'); }
  } as any;
};