import { Elysia, t } from "elysia";
import dbSetup from "../utils/db";
import { swagger } from '@elysiajs/swagger'

const app = new Elysia()
  .use(
    swagger({
      path: "/swagger/v1"
    })
  )

  .group("/api/v1", (app) => {
    return app
      .use(dbSetup)
      .get("/", async ({ db }) => db.pun.findMany({}))
      .get('/puns', async ({ db }) => db.pun.findMany({}))
      .group('/pun', (app) => {
        return app
          .get("/", async ({ query, db }) => db.pun.findMany({
            where: {
              pun: {
                contains: query.searchTerm
              }
            }
          }), {
            query: t.Object({
              searchTerm: t.String()
            }),
          })
          // .post("/", async ({ body: any, db }) => body.pun, {
          //   body: t.Object({
          //     pun: t.String()
          //   }),
          // })
          .get('/:id', async ({ params, db }) =>
            db.pun.findUnique({ where: { id: parseInt(params.id) || 1 } }), {
            params: t.Object({
              id: t.String()
            }),
          })
      })
  })

  .listen(5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
