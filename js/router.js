const pageTitle = "My Setups";

const routes = {
  404: { page: "pages/404.html", title: pageTitle + " | 404" },
  "/": { page: "pages/home.html", title: pageTitle + " | Home" },
  latexSetup: { page: "pages/latex-setup.html", title: pageTitle + " | LaTeX Setup" },
  terminalSetup: { page: "pages/terminal-setup.html", title: pageTitle + " | Terminal Setup" },
};

const locationHandler = async () => {
  let path = location.hash.replace("#", "") || "/";
  const route = routes[path] || routes[404];
  const html = await fetch(route.page).then(res => res.text());
  document.getElementById("main-page").innerHTML = html;
  document.title = route.title;
};

addEventListener("hashchange", locationHandler);
addEventListener("load", locationHandler);