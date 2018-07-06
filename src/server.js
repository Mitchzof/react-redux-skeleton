//Dependencies
import {
  express, React, renderToString, StaticRouter, Template, routes, preload,
  reducer, createStore, Provider, matchPath, App, bodyParser, http, https
} from './imports';

//Server initialization
const server = express();

server.use(bodyParser.json());
server.use(express.static('dist/public'));

if (process.env.PRODUCTION) {
  server.use ((req, res, next) => {
    (req.secure) ? next() : res.redirect('https://' + req.headers.host + req.url);
  });
}

//Listen to all incoming get requests
server.get('*', (req, res) => {
  const promises = [];

  //Call preloading functions matched to the route
  routes.some(route => {
    const match = matchPath(req.path, route);
    if (match) {
      if (route.loadData) {
        promises.push(route.loadData());
      }
      else {
        const defaultPromise = new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve([]);
          }, 250);
        })
        promises.push(defaultPromise);
      }
    }
    return match;
  });

  Promise.all(promises).then(data => {
    let context = {};

    //Create store and set initial state/preloaded data
    let store = createStore(reducer);
    store.dispatch(preload(data));

    //Render page content
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    );

    const state = store.getState();

    res.send(
      Template(content, state)
    );
  });
});

var httpServer = http.createServer(server);
httpServer.listen(process.env.PORT || 3000);

if (process.env.PRODUCTION) {
  var httpsServer = https.createServer({
      key: privateKey,
      cert: certificate
  }, server);
  httpsServer.listen(443);
}
