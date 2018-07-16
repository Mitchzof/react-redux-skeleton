# React-Redux Skeleton
Skeleton built with react, redux, and express.

## Use Instructions
1. Make sure webpack and gulp are both installed globally
2. Install dev and production dependencies
3. Run gulp, and start the app!

The src/client/components directory will be where the ui is built, and src/store contains anything related to redux.

Preloading for routes is done within the routes file.  Just add a "loadData" element to the route that returns a promise.  Then promise will be handled by the server, and whatever pre-loaded data will be put in the store under "data".

## What This Is
This is really just a skeleton I'm using for my web projects, though I figured I'd share it for friends
and anyone else interested.

It comes setup for bootstrap, though that can be easily changed by editing the template & changing the contents
of the assets folder.

## What This Isn't
This is by no means for anyone to just use out of the box.  This is just a structure I'm using and improving upon for
my react-redux based SSR web projects.  That said it's here if anyone is interested.
