import { createRenderer, CreateAppFunction } from '@vue/runtime-core';
import { nodeOps } from './node-ops';
import { gui, guiLoop } from '../interop';
import { Window, isValidComponent } from '../components';

const renderer = createRenderer(nodeOps);

export const createApp: CreateAppFunction<any> = (...args) => {
  const app = renderer.createApp(...args);

  Object.defineProperty(app.config, 'isNativeTag', { value: isValidComponent, writable: false });

  const { mount } = app;
  app.mount = () => {
    const window = Window();
    window.element.setResizable(false);
    window.element.setContentSize({ width: 1360, height: 768 });
    window.element.onClose = () => gui.MessageLoop.quit();

    window.element.center();
    window.element.activate();

    // @ts-ignore
    global.win = window.element;

    return mount(window);
  };

  app.mount('');

  guiLoop();

  return app;
};