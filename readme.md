use rspack to pack and compile code, let it can run on both server side and browser side
use `pnpm i` to install, and use `pnpm run server` to start the local server, then visit it at localhost:8080

stage-2:
In this stage, we add the client part, to hydrate and make the web page interactive
Additionally, to make it run successfully, I also import Rspack as a bundler

stage-3:
I try to return different components according to the path
And the router system draw lessons from Next.js's App router

Try to dynamically import the component(page) at both the client and server side
Still there's a lot to do
For example, I need to filter the req properly(I had to use './app' instead of '*', to avoid static resources being processed by the router)
Luckily, the hydrate stage works well

I try to dynamically add a router for all the 'page.jsx(tsx)' in 'app' directory
Still again, there's a lot to do