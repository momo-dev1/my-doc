'use strict';

/**
 * tailwind service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tailwind.tailwind');
