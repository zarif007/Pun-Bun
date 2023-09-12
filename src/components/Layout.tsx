import * as elements from 'typed-html'
import Pun from './Pun'


const Layout = ({children}: elements.Children) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
    <title>Pun Bun</title>
  </head>
  <body>
    <!-- Content Goes here -->
    hiiiddddsad
    ${children}
  </body>
</html>`

export default Layout