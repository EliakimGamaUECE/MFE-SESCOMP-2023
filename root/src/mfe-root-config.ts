import { registerApplication, start, LifeCycles } from "single-spa";

//registerApplication({
  //name: "@single-spa/welcome",
  //app: () =>
   // System.import<LifeCycles>(
     // "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
   // ),
 // activeWhen: ["/"],
//});

registerApplication({
  name: "@mfe/navbar",
  app: () =>
    System.import<LifeCycles>(
      "@mfe/navbar"
    ),
  activeWhen: () => true,
});

registerApplication({
  name: "@mfe/footer",
  app: () =>
    System.import<LifeCycles>(
      "@mfe/footer"
    ),
  activeWhen: () => true,
});

registerApplication({
  name: "@mfe/app1",
  app: () =>
    System.import<LifeCycles>(
      "@mfe/app1"
    ),
  activeWhen: ["/app1"],
});

registerApplication({
  name: "@mfe/app2",
  app: () =>
    System.import<LifeCycles>(
      "@mfe/app2"
    ),
  activeWhen: ["/app2"],
});


// registerApplication({
//   name: "@mfe/navbar",
//   app: () => System.import("@mfe/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
