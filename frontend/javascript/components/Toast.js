export default class Toast {
  constructor(type, message) {
    this.toastContainer = null
    this.type = type
    this.message = message
  }

  show() {
    this.getOrCreateToastContainer()
    this.createToast()
  }

  getOrCreateToastContainer() {
    if (this.toastContainer) return

    const existingContainer = document.querySelector('.toast-container')
    if (existingContainer) {
      this.toastContainer = existingContainer
      return
    }

    this.createToastContainer()
  }

  createToastContainer() {
    this.toastContainer = document.createElement('div')
    toastContainer.classList.add('toast-container')

    document.body.appendChild(this.toastContainer)
  }

  createToast() {
    const toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(this.type)
    toast.innerText = this.message

    this.toastContainer.appendChild(toast)
    setTimeout(() => toast.classList.toggle('visible', true), 0)

    setTimeout(() => this.removeToast(toast), 10000)

    toast.addEventListener('click', () => this.removeToast(toast))
  }

  removeToast(toast) {
    toast.classList.toggle('visible', false)
    setTimeout(() => toast.remove(), 500)
  };
}
