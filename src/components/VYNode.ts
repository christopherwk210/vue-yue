import { gui } from '../interop';

export type View =
  ReturnType<typeof gui.TextEdit.create> |
  ReturnType<typeof gui.Container.create>;

export type VYComponents =
  'Window' |
  'TextEdit' |
  'Container';

export interface VYWindow {
  type: 'Window';
  element: ReturnType<typeof gui.Window.create>;
  insertChild(child: VYNode<any>): void;
  removeChild(child: VYNode<any>): void;
  insertBefore(child: VYNode<any>, before: VYNode<any>): void;
  getNextSibling(child: VYNode<any>): VYNode<any> | null;
}

export interface VYNode<T extends View> {
  type: VYComponents;
  element: T;
  insertChild(child: VYNode<any>): void;
  removeChild(child: VYNode<any>): void;
  insertBefore(child: VYNode<any>, before: VYNode<any>): void;
  getNextSibling(child: VYNode<any>): VYNode<any> | null;
}