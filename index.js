(function () {
  
  const styleElement = document.createElement("style");
  styleElement.textContent = `
    /* Root Containers & Global Backgrounds */
    html.dark-theme,
    html.dark-theme body,
    html.dark-theme #all-content,
    html.dark-theme main,
    html.dark-theme #main-content,
    html.dark-theme .site-wrapper,
    html.dark-theme .s123-page-section,
    html.dark-theme section,
    html.dark-theme header,
    html.dark-theme footer,
    html.dark-theme .navPages {
      background-color: #121212 !important;
      background-image: none !important;
      border-color: #2d2d2d !important;
    }

    /* Secondary Card/Box Components */
    html.dark-theme .card,
    html.dark-theme .box,
    html.dark-theme .thumbnail,
    html.dark-theme .s123-box,
    html.dark-theme .items-container .item {
      background-color: #1e1e1e !important;
      border-color: #333333 !important;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3) !important;
    }

    /* Universal Text Overrides */
    html.dark-theme h1, html.dark-theme h2, html.dark-theme h3, 
    html.dark-theme h4, html.dark-theme h5, html.dark-theme h6,
    html.dark-theme p, html.dark-theme span, html.dark-theme li,
    html.dark-theme td, html.dark-theme th, html.dark-theme strong,
    html.dark-theme b, html.dark-theme i, html.dark-theme em {
      color: #e5e7eb !important;
    }

    /* Form Elements & Inputs */
    html.dark-theme input,
    html.dark-theme textarea,
    html.dark-theme select {
      background-color: #262626 !important;
      color: #ffffff !important;
      border: 1px solid #404040 !important;
    }

    /* Anchor Links */
    html.dark-theme a:not([class*="btn"]):not([class*="button"]) {
      color: #3b82f6 !important;
    }
    html.dark-theme a:not([class*="btn"]):not([class*="button"]):hover {
      color: #60a5fa !important;
    }

    /* FLOATING TOGGLE UI WIDGET */
    .custom-dark-toggle-btn {
      position: fixed;
      bottom: 25px;
      right: 25px;
      z-index: 2147483647; /* Abs max z-index to stay over site builder components */
      background-color: #262626;
      color: #f5f5f7;
      border: 1px solid #404040;
      padding: 0;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      outline: none;
    }

    .custom-dark-toggle-btn:hover {
      transform: scale(1.08);
      background-color: #333333;
    }

    html.dark-theme .custom-dark-toggle-btn {
      background-color: #ffffff;
      color: #1c1c1e;
      border-color: #e5e5ea;
      box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
    }
  `;
  document.head.appendChild(styleElement);

  
  const savedTheme = localStorage.getItem("site123_theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add("dark-theme");
  }

  
  function initToggleWidget() {
   
    if (document.querySelector(".custom-dark-toggle-btn")) return;

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "custom-dark-toggle-btn";
    toggleBtn.setAttribute("aria-label", "Toggle dark configuration");
    toggleBtn.setAttribute("type", "button");

    const isDark = document.documentElement.classList.contains("dark-theme");
    toggleBtn.innerHTML = isDark ? "☀️" : "🌙";

    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", function () {
      const applyDark = document.documentElement.classList.toggle("dark-theme");

      if (applyDark) {
        toggleBtn.innerHTML = "☀️";
        localStorage.setItem("site123_theme", "dark");
      } else {
        toggleBtn.innerHTML = "🌙";
        localStorage.setItem("site123_theme", "light");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initToggleWidget);
  } else {
    initToggleWidget();
  }
})();