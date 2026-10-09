export function menu() {
  class MobileNavbar {
    constructor(mobileMenu, navList, navLinks, navLinks2) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.navLinks2 = document.querySelectorAll(navLinks2);
      this.activeClass = "active";
      this.lastNavigationFocus = null;
      this.mobileViewport = window.matchMedia("(max-width: 900px)");
      this.handleClick = this.handleClick.bind(this);
      this.handleKeydown = this.handleKeydown.bind(this);
      this.handleViewportChange = this.handleViewportChange.bind(this);
      this.handleOutsideFocus = this.handleOutsideFocus.bind(this);
    }

    closeMenu() {
      this.navList.classList.remove(this.activeClass);
      this.mobileMenu.classList.remove(this.activeClass);
      this.mobileMenu.setAttribute("aria-expanded", "false");
      this.mobileMenu.setAttribute("aria-label", "Abrir menu");
      document.body.classList.remove("nav-open");
      this.navLinks.forEach((link) => {
        link.style.animation = "";
      });
    }

    handleClick() {
      if (!this.mobileViewport.matches) {
        return;
      }
      const isOpen = this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass, isOpen);
      this.mobileMenu.setAttribute("aria-expanded", String(isOpen));
      this.mobileMenu.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
      );
      document.body.classList.toggle("nav-open", isOpen);
    }

    handleKeydown(event) {
      if (event.key === "Escape" && this.navList.classList.contains(this.activeClass)) {
        this.closeMenu();
        this.mobileMenu.focus();
      }
    }

    handleViewportChange() {
      if (!this.mobileViewport.matches) {
        const buttonHadFocus = document.activeElement === this.mobileMenu ||
          this.lastNavigationFocus === this.mobileMenu;
        this.closeMenu();
        if (buttonHadFocus) this.navLinks2[0]?.focus({ preventScroll: true });
      } else if (this.navList.contains(document.activeElement) ||
        this.navList.contains(this.lastNavigationFocus)) {
        this.mobileMenu.focus({ preventScroll: true });
      }
    }

    handleOutsideFocus(event) {
      if (!this.mobileMenu.parentElement.contains(event.target)) {
        this.lastNavigationFocus = null;
        this.closeMenu();
      } else if (event.type === "focusin") {
        this.lastNavigationFocus = event.target;
      }
    }

    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
      this.navLinks2.forEach((item) => {
        item.addEventListener("click", () => this.closeMenu());
      });
      document.addEventListener("keydown", this.handleKeydown);
      document.addEventListener("focusin", this.handleOutsideFocus);
      document.addEventListener("pointerdown", this.handleOutsideFocus);
      this.mobileViewport.addEventListener("change", this.handleViewportChange);
    }

    init() {
      if (this.mobileMenu && this.navList) {
        this.addClickEvent();
        this.mobileMenu.closest(".site-header").classList.add("nav-ready");
      }
      return this;
    }
  }
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
    ".nav-list li a"
  );
  mobileNavbar.init();
}
