module.exports = ({ env }) => ({
  host: env('HOST', '192.168.1.110'),
  port: env.int('PORT', 1337),
  url: env('URL', 'http://localhost:1337'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '8d83021ec38bb95ed6d90dec2c481c41'),
    },
    host: env('ADMINHOST', '192.168.1.110'),
    port: env.int('ADMINPORT', 1338),
  },
  cron: {
    enabled: true
  },
});
