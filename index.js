import * as Constants from './src/constants';
import * as lib from './src/lib';

import modes from './src/modes/index';
import runSetup from './src/setup';
import setupAPI from './src/api';
import setupOptions from './src/options';

const setupDraw = function (options, api) {
  options = setupOptions(options);

  const ctx = {
    options,
  };

  api = setupAPI(ctx, api);
  ctx.api = api;

  const setup = runSetup(ctx);

  api.onAdd = setup.onAdd;
  api.onRemove = setup.onRemove;
  api.types = Constants.types;
  api.options = options;

  return api;
};

function MapboxDraw(options) {
  setupDraw(options, this);
}

MapboxDraw.modes = modes;
MapboxDraw.constants = Constants;
MapboxDraw.lib = lib;

export default MapboxDraw;
