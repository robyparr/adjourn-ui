export default class Modal {
  constructor({ el, closeButtonEl = '.close-modal' }) {
    this.el = document.querySelector(el)
    this.closeButtonEl = this.el.querySelector(closeButtonEl)
  }

  open() {
    this.insertOverlay()
    this.el.classList.add('block')
    setTimeout(() => {
      this.el.classList.add('opened')
      this.autofocusEl()
    }, 0)

    this.setupCloseListener()
  }

  close() {
    this.el.classList.remove('opened')
    setTimeout(() => this.el.classList.remove('block'), 250)

    this.overlay.remove()
    this.overlay = null

    this.removeCloseListener()
  }

  insertOverlay() {
    this.overlay = document.createElement('div')
    this.overlay.classList.add('modal-overlay')
    this.el.parentNode.insertBefore(this.overlay, this.el)
  }

  autofocusEl() {
    const autofocusEl = this.el.querySelector('[autofocus]')
    autofocusEl?.autofocusEl()
  }

  closeModalevent = () => this.close()

  setupCloseListener() {
    if (!this.closeButtonEl) return

    this.closeButtonEl.addEventListener('click', this.closeModalevent)
  }

  removeCloseListener() {
    if (!this.closeButtonEl) return

    this.closeButtonEl.removeEventListener('click', this.closeModalevent)
  }
}
