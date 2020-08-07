import { 
  composeBundles,
  createUrlBundle,
  createCacheBundle,
  debugBundle
} from 'redux-bundler';
import cache from '../utils/cache'

import routesBundle from './routes-bundle';

export default composeBundles(
  debugBundle,
  routesBundle,
  createUrlBundle(),
  createCacheBundle(cache.set)
);