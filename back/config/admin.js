module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'be958eed6392665d64ae98f7249983fc'),
  },
});
