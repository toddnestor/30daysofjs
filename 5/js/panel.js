class Panel {
  constructor(words, image, gallery) {
    this.el = this.generateElement(words, image);
    this.gallery = gallery;
    this.gallery.push(this);
  }

  activate(e) {
    if (e.propertyName.includes('flex')) {
      this.el.classList.toggle('open-active');
    }
  }

  open() {
    this.gallery.panels.forEach( panel => panel == this ? null : panel.close() );
    this.el.classList.add('open');
  }

  close() {
    this.el.classList.remove('open');
  }

  generateElement(words, image) {
    const el = document.createElement('div');
    el.classList.add('panel');
    el.style.backgroundImage = `url(${image})`;

    const wordsList = words.split(' ').slice(0, 2);
    wordsList.push(words.split(' ').slice(2).join(' '));

    wordsList.forEach(word => {
      const p = document.createElement('p');
      p.innerText = word;
      el.appendChild(p);
    });

    el.addEventListener('transitionend', this.activate.bind(this));
    el.addEventListener('click', this.open.bind(this));

    return el;
  }
}

export default Panel;
