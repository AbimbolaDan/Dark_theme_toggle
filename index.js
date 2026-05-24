(function () {
  // 1. Inject the Webixon Brand-Tailored Dark Theme CSS
  const styleElement = document.createElement("style");
  styleElement.textContent = `
    /* Root Containers & Global Layout Wrappers - Sophisticated Midnight Navy */
    html.dark-theme,
    html.dark-theme body,
    html.dark-theme #all-content,
    html.dark-theme main,
    html.dark-theme #main-content,
    html.dark-theme [id*="wrapper"],
    html.dark-theme [class*="wrapper"],
    html.dark-theme [class*="section"],
    html.dark-theme section,
    html.dark-theme header,
    html.dark-theme footer,
    html.dark-theme nav,
    html.dark-theme .navPages {
      background-color: #0B111E !important; /* Premium Dark Navy Slate */
      background-image: none !important;
      border-color: #1E293B !important; /* Soft border matching slate tone */
    }

    /* Secondary Layout Blocks, Cards, and Dropdown Menus */
    html.dark-theme .card,
    html.dark-theme .box,
    html.dark-theme [class*="card"],
    html.dark-theme [class*="box"],
    html.dark-theme .thumbnail,
    html.dark-theme .items-container .item,
    html.dark-theme [class*="container"] > div:not([class*="btn"]) {
      background-color: #151F32 !important; /* Lighter Midnight tone for elevation/contrast */
      border-color: #24334C !important;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3) !important;
    }

    /* Universal Text Overrides - Ice Blue White to prevent harsh eye strain */
    html.dark-theme h1, html.dark-theme h2, html.dark-theme h3, 
    html.dark-theme h4, html.dark-theme h5, html.dark-theme h6,
    html.dark-theme strong, html.dark-theme b {
      color: #F8FAFC !important; /* Crisp white for structural headers */
    }
    
    html.dark-theme p, html.dark-theme span, html.dark-theme li,
    html.dark-theme td, html.dark-theme th, html.dark-theme i, 
    html.dark-theme em, html.dark-theme label {
      color: #CBD5E1 !important; /* Soft ice-blue grey for readable body text */
    }

    /* Interactive Inputs & Fields */
    html.dark-theme input,
    html.dark-theme textarea,
    html.dark-theme select {
      background-color: #1E293B !important;
      color: #ffffff !important;
      border: 1px solid #334155 !important;
    }

    /* Keep Brand Blue Accent Consistent on Hyperlinks */
    html.dark-theme a:not([class*="btn"]):not([class*="button"]) {
      color: #38BDF8 !important; /* Luminous sky-blue variant for dark mode visibility */
    }
    html.dark-theme a:not([class*="btn"]):not([class*="button"]):hover {
      color: #7DD3FC !important;
    }

    /* PREMIUM WIDGET UI DESIGNED TO MATCH WEBIXON CORES */
    .custom-dark-toggle-btn {
      position: fixed;
      bottom: 25px;
      right: 25px;
      z-index: 2147483647;
      background-color: #0F172A;
      color: #F8FAFC;
      border: 2px solid #0052FF; /* Webixon brand accent border accentuation */
      padding: 0;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0, 82, 255, 0.25);
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      outline: none;
    }

    .custom-dark-toggle-btn:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 6px 24px rgba(0, 82, 255, 0.45);
    }

    html.dark-theme .custom-dark-toggle-btn {
      background-color: #FFFFFF;
      color: #0F172A;
      border-color: #E2E8F0;
      box-shadow: 0 4px 20px rgba(255, 255, 255, 0.15);
    }
  `;
  document.head.appendChild(styleElement);

  // 2. Immediate preference checking logic
  const savedTheme = localStorage.getItem("site123_theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add("dark-theme");
  }

  // 3. UI Widget Loader 
  function initToggleWidget() {
    if (document.querySelector(".custom-dark-toggle-btn")) return;

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "custom-dark-toggle-btn";
    toggleBtn.setAttribute("aria-label", "Toggle theme configuration");
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