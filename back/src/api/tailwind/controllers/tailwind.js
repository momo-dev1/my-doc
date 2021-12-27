'use strict';

/**
 *  tailwind controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tailwind.tailwind');
