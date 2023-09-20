import { Elysia, t } from "elysia";
import dbSetup from "./lib/db";
import { swagger } from "@elysiajs/swagger";
import html from "@elysiajs/html";
import Layout from "./components/Layout";
import Puns from "./components/Puns";
import * as elements from "typed-html";
import { punServices } from "./services/pun.services";
import fetchPuns from "./utils/fetchPuns";

const app = new Elysia()
  // Pages
  .use(html)
  .get("/", async ({ html }) => {
    const puns = await fetchPuns();
    return html(
      <Layout>
        <img
          src="https://i.ibb.co/gS4CrCt/logo.png"
          class="mx-auto h-72 w-72"
          alt="Logo"
        />
        <div class="flex justify-end my-2">
          <a
            href="/create"
            class="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded"
          >
            Create
          </a>
        </div>
        <Puns puns={puns} />
      </Layout>
    );
  })
  .get("/create", async ({ html }) => {})

  // Swagger for checking api endpoints
  .use(
    swagger({
      path: "/swagger/v1",
    })
  )

  // Api endPoints
  .group("/api/v1", (app) => {
    return (
      app
        .use(dbSetup)
        .get("/puns", async ({ db }) => await punServices.getPuns(db))
        // Grouping -> /pun/*
        .group("/pun", (app) => {
          return app
            .get(
              "/",
              async ({ query, db }) =>
                await punServices.getPunsBySearchTerm(query.searchTerm, db),
              // Query schema Validation
              {
                query: t.Object({
                  searchTerm: t.String(),
                }),
              }
            )
            .post(
              "/",
              async ({ db, body }) => await punServices.createPun(body, db),
              // Pun payload schema Validation
              {
                body: t.Object({
                  author: t.String(),
                  pun: t.String(),
                }),
              }
            )
            .get(
              "/:id",
              async ({ params, db }) =>
                await punServices.getPunById(params.id || 1, db),
              // params Validation
              {
                params: t.Object({
                  id: t.Numeric(),
                }),
              }
            )
            .post(
              "/upVote/:id",
              async ({ params, db }) =>
                await punServices.upVotePun(params.id, db),
              // params Validation
              {
                params: t.Object({
                  id: t.Numeric(),
                }),
              }
            )
            .post(
              "/downVote/:id",
              async ({ params, db }) =>
                await punServices.downVotePun(params.id, db),
              // params Validation
              {
                params: t.Object({
                  id: t.Numeric(),
                }),
              }
            );
        })
    );
  })

  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
