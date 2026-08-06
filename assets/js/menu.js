export function menu() {
  class MobileNavbar {
    constructor(mobileMenu, navList, navLinks, navLinks2) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.navLinks2 = document.querySelectorAll(navLinks2);
      this.activeClass = "active";
      this.handleClick = this.handleClick.bind(this);
      this.handleKeydown = this.handleKeydown.bind(this);
    }

    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
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
      const isOpen = this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass, isOpen);
      this.mobileMenu.setAttribute("aria-expanded", String(isOpen));
      this.mobileMenu.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
      );
      document.body.classList.toggle("nav-open", isOpen);
      this.animateLinks();
    }

    handleKeydown(event) {
      if (event.key === "Escape") {
        this.closeMenu();
        this.mobileMenu.focus();
      }
    }

    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
      this.navLinks2.forEach((item) => {
        item.addEventListener("click", () => this.closeMenu());
      });
      document.addEventListener("keydown", this.handleKeydown);
    }

    init() {
      if (this.mobileMenu && this.navList) {
        this.addClickEvent();
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
