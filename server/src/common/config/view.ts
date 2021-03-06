/// <reference path="../../../typings/thinkjs/think.d.ts" />

'use strict';
/**
 * template config
 */
export default {
  type: 'ejs',
  content_type: 'text/html',
  file_ext: '.html',
  file_depr: '/',
  root_path: think.ROOT_PATH + '/view',
  adapter: {
    ejs: {}
  }
};
