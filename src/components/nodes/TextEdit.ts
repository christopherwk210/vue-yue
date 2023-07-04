import { gui } from '../../interop';
import { VYNode } from '../VYNode';

export const TextEdit = (): VYNode<ReturnType<typeof gui.TextEdit.create>> => {
  const element = gui.TextEdit.create();

  return {
    type: 'TextEdit',
    element,
    insertChild() { throw new Error('TextEdit does not support children'); },
    removeChild() { throw new Error('TextEdit does not support children'); },
    insertBefore() { throw new Error('TextEdit does not support children'); },
    getNextSibling() { throw new Error('TextEdit does not support children'); }
  }
};