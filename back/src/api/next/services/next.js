'use strict';

/**
 * next service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::next.next');
