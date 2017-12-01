import Router from 'koa-router'

const router = new Router()

router.get('/message', async (ctx, next) => {
  console.log(`GET ${ctx.path}`)
  await next()
})

export default router
