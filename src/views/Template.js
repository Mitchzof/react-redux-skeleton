import React from 'react';

const Template = function (body, state) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" href="css/bootstrap.css">
      <script>
        window.REDUX_DATA = ${JSON.stringify(state)}
      </script>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body>
      <div id="app">${body}</div>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
      <script type="text/javascript" src="/js/scripts.min.js"></script>
      <script src="/client.js"></script>
    </body>
  </html>
`;
}

export default Template;
