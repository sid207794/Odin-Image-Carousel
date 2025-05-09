class dropDown {
  constructor(menuButton, menu, transitionTime) {
    this.menuButton = document.querySelector(menuButton);
    this.menu = document.querySelector(menu);
    this.transitionTime = transitionTime;
  }

  open() {
    this.menuButton.addEventListener('click', () => {
      if (this.menu.classList.contains('hidden')) {
        this.menu.classList.remove('hidden');
        this.menu.style.display = 'block';
        requestAnimationFrame(() => {
          this.menu.style.opacity = '1';
          this.menu.style.transition = `opacity ${this.transitionTime}s ease-in-out`;
        });
      } else {
        this.menu.classList.add('hidden');
        this.menu.style.opacity = '0';
        this.menu.style.transition = `opacity ${this.transitionTime}s ease-in-out`;
        setTimeout(() => {
          this.menu.style.display = 'none';
        }, this.transitionTime * 1000);
      }
    });
  }
}
