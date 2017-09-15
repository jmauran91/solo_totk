import ReactOnRails from 'react-on-rails';

import ReleaseIndexContainer from '../bundles/containers/ReleaseIndexContainer';
import ReviewContainer from '../bundles/containers/ReviewContainer';
import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';


// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  ReleaseIndexContainer, ReviewContainer, HelloWorld
});
