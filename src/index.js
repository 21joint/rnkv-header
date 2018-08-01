// /**
//  * Application entry point
//  */

// if (process.env.NODE_ENV === 'dev') {

// }
import $ from 'jquery';
import './partials/header/header';
import './externals';
import './assets/styles/index.scss';

$('body').on('click', '.rnkv-btn--search', () => {
  $('.rnkv-header').toggleClass('search_open');
});
