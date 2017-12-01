import Koa from 'koa'

import routers from './router'

const app = new Koa();

routers.forEach(router => {
  app.use(router.routes())
})

app.listen(3000);

/**
 * Roadmap:
 *
 *    1. mongoose
 *    2. valid
 *    3. RESTful
 *    4. Authorization
 *    5. custom response
 *    6. logger
 *    7. roles
 *    8. autofavorite
 *    9. form
 *
 */