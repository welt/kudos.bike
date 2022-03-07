module.exports = function navPrimary() {
  return `
    <header id="header-primary" class="header-primary">
        <nav class="nav-primary">
            <a href="/">Home</a>
            <a href="/series-rules/">Rules</a>
            <a href="/past-winners/">Past winners</a>
            <a href="/sponsors/">Sponsors</a>
            <a href="#contact">Contact</a>
        </nav>
        <x-toggle aria-label="Toggle dark mode" role="checkbox" tabindex="0"></x-toggle>
    </header>
    `;
};
