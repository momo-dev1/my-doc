'use strict';

/**
 * tailwind router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tailwind.tailwind');
