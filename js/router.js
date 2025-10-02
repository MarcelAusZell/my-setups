const pageTitle = "My Setups";

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  locationHandler();
}

const routes = {
  404: {
    page: "/pages/404.html",
    title:  pageTitle + " | 404",
  },
  "/": {
    page: "/pages/home.html",
    title: pageTitle + " | Home",
  },
  latexSetup: {
    page: "/pages/latex-setup.html",
    title: pageTitle + " | Latex Setup",
  },
  terminalSetup: {
    page: "/pages/terminal-setup.html",
    title: pageTitle + " | page2",
  }
}

const locationHandler = async () => {
  let location = window.location.hash.replace("#", "");
  if (location.length == 0) location = "/";
  const route = routes[location] || routes[404];
  const html = await fetch(route.page).then((response) => response.text());
  document.getElementById("main-page").innerHTML = html;
  document.title = route.title;
}

window.addEventListener("hashchange", locationHandler);
locationHandler();