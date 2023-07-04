import type { VYComponents, VYNode } from './VYNode';
import { TextEdit } from './nodes/TextEdit';
import { Window } from './nodes/Window';

export const componentMap: Record<VYComponents, () => VYNode<any>> = {
  Window,
  TextEdit,
  Container: TextEdit
};

export function isValidComponent(component: VYComponents): component is VYComponents {
  const validComponent = component in componentMap;
  return validComponent;
}