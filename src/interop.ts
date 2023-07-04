import * as _gui from 'gui';
export const gui = ((_gui as any).default || _gui) as typeof _gui;

export const guiLoop = () => {
  if (!process.versions.yode) {
    gui.MessageLoop.run()
    process.exit(0)
  }
}