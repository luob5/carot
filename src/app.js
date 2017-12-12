import Koa from 'koa'

import routers from './router'

const app = new Koa();

routers.forEach(router => {
  app.use(router.routes())
})
