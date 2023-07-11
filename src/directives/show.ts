import { Directive } from '@vue/runtime-core';
import { VYNode } from '../components';

export const showDirective = (el: VYNode<any>, binding) => {
  console.log("HIT")
  el.element.setVisible(!!binding.value);
};
