import Router from 'koa-router'

const router = new Router()

router.get('/hello', async (ctx, next) => {
  console.log(`hello world`)
  await next()
})

export default router
