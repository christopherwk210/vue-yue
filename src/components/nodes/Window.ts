import { gui } from '../../interop';
import { VYWindow } from '../VYNode';

export const Window = (): VYWindow => {
  const window = gui.Window.create({});
  const defaultChild = window.getContentView();

  return {
    type: 'Window',
    element: window,
    insertChild(child) {
      window.setContentView(child.element || defaultChild);
    },
    removeChild() {
      window.setContentView(defaultChild);
    },
    insertBefore(child) {
      window.setContentView(child.element || defaultChild);
    },
    getNextSibling: () => null
  }
};