'use strict';

const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();
const root = './';
const opts = {};

// logger

app.use(serve(root, opts));

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// // response
//
// app.use(async ctx => {
//   ctx.body = 'Hello World 2';
// });
//
app.listen(8000);