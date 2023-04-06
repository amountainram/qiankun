import {SandBoxType} from '../../../../interfaces';
import { noop } from 'lodash';
import {patchStrictSandbox} from '../forStrictSandbox';

jest.mock('import-html-entry', () => ({
  execScripts: jest.fn(),
}));

describe('dunno', () => {
  it('should', () => {
    let patchedDocument: Document | undefined;
    const appName = 'test-app';
    const wrapper = document.createElement('div');
    const sandbox = {
      name: appName,
      type: SandBoxType.Proxy,
      proxy: window,
      sandboxRunning: true,
      latestSetProp: null,
      patchDocument: (patched: Document) => {patchedDocument = patched;},
      active: noop,
      inactive: noop
    };
    patchStrictSandbox(
      appName,
      () => wrapper,
      sandbox,
      true,
      false,
      undefined,
      true
    );

    expect(patchedDocument).toBeDefined();
    expect(() => patchedDocument?.createNodeIterator(patchedDocument)).not.toThrow();
  });
});