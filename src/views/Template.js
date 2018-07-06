import React from 'react';

const Template = function (body, state) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <script>
        window.REDUX_DATA = ${JSON.stringify(state)}
      </script>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body>
      <div id="app">
        ${body}
      </div>
      <script src="/client.js"></script>
    </body>
  </html>
`;
}

export default Template;
