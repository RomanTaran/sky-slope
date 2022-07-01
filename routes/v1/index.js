const express = require('express');
const transactionsRoute = require('./transactions.route');
const templatesRoute = require('./templates.route');
const formsRoute = require('./forms.route');
const mlsRoute = require('./mls.route');
const contactsRoute = require('./contacts.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');


const router = express.Router();

const defaultRoutes = [
  {
    path: '/transactions',
    route: transactionsRoute,
  },
  {
    path: '/templates',
    route: templatesRoute,
  },
  {
    path: '/forms',
    route: formsRoute,
  },
  {
    path: '/mls',
    route: mlsRoute,
  },
  {
    path: '/contacts',
    route: contactsRoute,
  }
];

const devRoutes = [
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
