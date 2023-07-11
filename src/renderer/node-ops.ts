import { RendererOptions } from '@vue/runtime-core';
import { Empty, componentMap } from '../components';
import type { VYNode, VYWindow, VYComponents } from '../components';

function noop(fn: string): any {
  throw Error(`no-op: ${fn}`);
}

export const nodeOps: RendererOptions<VYNode<any>, VYWindow> = {
  patchProp(el, key, prevVal, nextVal) {
    console.log('patchProp', { el, key, prevVal, nextVal });
  },

  insert(child, parent, anchor) {
    console.log('insert', { child, parent, anchor })
    if (anchor) {
      parent.insertBefore(child, anchor);
    } else {
      parent.insertChild(child);
    }
  },

  createElement(tag: VYComponents): any {
    const generator = componentMap[tag];
    if (!generator) throw new Error(`Invalid component: ${tag}`);
    return generator();
  },

  createText(text) {
    console.log(`createText: ${text}`);
    return Empty();
  },

  parentNode(node) {
    console.log('parentNode');
    return null;
  },

  createComment(text) {
    console.log(`createComment ${text}`)
    return Empty();
  },

  setText: () => noop('setText'),
  setElementText: () => noop('setElementText'),
  nextSibling: () => noop('nextSibling'),
  querySelector: () => noop('querySelector'),
  setScopeId: () => noop('setScopeId'), 
  cloneNode: () => noop('cloneNode'),
  insertStaticContent: () => noop('insertStaticContent'),
  remove: () => noop('remove')
};