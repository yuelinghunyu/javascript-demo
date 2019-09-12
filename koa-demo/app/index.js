const Koa = require("Koa")
const app = new Koa()

app.use(async(ctx, next) => {
  console.log(1)
  await next()
  console.log(2)
  ctx.body = "这是第一个中间件"
}).use(async(ctx, next) => {
  console.log(3)
  await next()
  console.log(4)
  ctx.body = "这是第二个中间件"
})
app.listen(4001, () => { console.log("koa server is starting") })