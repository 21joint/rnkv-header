// /**
//  * Application entry point
//  */

// if (process.env.NODE_ENV === 'dev') {

// }
import $ from 'jquery';
import './externals';
import './assets/styles/index.scss';

$('body').on('click', '.rnkv-btn--search', () => {
  $('.rnkv-header').toggleClass('search_open');
});
