class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="sidebar">
      <ul class="menu bg-base-300 rounded-box w-56 m-8">
        <li><a href="/" onclick="route()">Home</a></li>
        <li><a href="#latexSetup" onclick="route()">LaTeX Setup</a></li>
        <li><a href="#terminalSetup" onclick="route()">Terminal Setup</a></li>
      </ul>
    </nav>
    `;
  }
}
customElements.define('nav-bar', NavBar);
