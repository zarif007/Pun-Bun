import * as elements from 'typed-html'

const Layout = ({children}: elements.Children) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <script src="https://unpkg.com/htmx.org@1.9.5"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
    <title>Pun Bun</title>
  </head>
  <body>
    <!-- Content Goes here -->
    <main class="mx-auto w-full max-w-5xl my-24 mx-4">
      ${children}
    </main>
  </body>
</html>`

export default Layout