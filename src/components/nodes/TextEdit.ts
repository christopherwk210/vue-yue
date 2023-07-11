import { gui } from '../../interop';
import { VYNode } from '../VYNode';

export const TextEdit = (): VYNode<ReturnType<typeof gui.TextEdit.create>> => {
  const noop = () => { throw new Error('TextEdit does not support children'); };
  const element = gui.TextEdit.create();

  return {
    type: 'TextEdit',
    element,
    insertChild: noop,
    removeChild: noop,
    insertBefore: noop,
    getNextSibling: noop
  }
};