import { createRouteBundle } from 'redux-bundler';
import Auth from '../containers/auth';
import Map from '../containers/map/map-page';
import FourOhFour from '../containers/404';

export default createRouteBundle({
  '/Auth': Auth,
  '/': Map,
  '*': FourOhFour
})