// /**
//  * Application entry point
//  */

// if (process.env.NODE_ENV === 'dev') {
  
// }

import './externals';
import './assets/styles/index.scss';


$('body').on('click', '.rnkv-btn--search', function () {
    $('.rnkv-header').toggleClass('search_open')
});