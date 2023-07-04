import { gui } from '../../interop';
import { VYWindow } from '../VYNode';

export const Window = (): VYWindow => {
  const window = gui.Window.create({});

  return {
    type: 'Window',
    element: window,
    insertChild(child) {
      window.setContentView(child.element);
    },
    removeChild(child) {
      window.setContentView(null);
    },
    insertBefore() { throw new Error(''); },
    getNextSibling: () => null
  }
};