import { 
  composeBundles,
  createUrlBundle,
  createCacheBundle
} from 'redux-bundler';

import {
  createAuthBundle,
  createOlMapBundle,
  createOlBasemapBundle
} from '@corpsmap/corpsmap-bundles';

import cache from '../utils/cache'

import routesBundle from './routes-bundle';

import drawBundle from './draw-bundle';

export default composeBundles(
  routesBundle,
  createUrlBundle(),
  createCacheBundle(cache.set),
  createAuthBundle({
    appId: '17de6a86-32a9-47fc-9fa5-e98a400111b3',
    redirectOnLogout: '/'
  }),
  createOlMapBundle(),
  createOlBasemapBundle(),
  drawBundle
);