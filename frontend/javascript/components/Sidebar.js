class Sidebar {
  constructor(options = {}) {
    ({
      sidebarSelector = '.sidebar',
      sidebarOverlaySelector = '.sidebar-overlay',
      collapseButtonSelector = '.collapse-button',
      mainContentSelector = 'main',
    } = options)

    this.sidebar = document.querySelector(sidebarSelector)
    this.sidebarOverlay = document.querySelector(sidebarOverlaySelector)
    this.collapseButton = this.sidebar.querySelector(collapseButtonSelector)
    this.mainContent = document.querySelector(mainContentSelector)

    this.setupListeners()

    if (this.isHidden()) this.hide()
  }

  isHidden() {
    return this.sidebar.classList.contains('sidebar-hidden')
  }

  isCollapsed() {
    return this.sidebar.classList.contains('collapsed')
  }

  collapse() {
    this.expandedWidth = `${this.sidebar.offsetWidth}px`
    this.expandedMinWidth = `${this.sidebar.style.minWidth}px`

    this.sidebar.style.width = '75px'
    this.sidebar.style.minWidth = '75px'

    this.sidebar.classList.add('collapsed')
  }

  expand() {
    this.sidebar.style.width = this.expandedWidth
    this.sidebar.style.minWidth = this.expandedWidth

    this.sidebar.classList.remove('collapsed')
  }

  show() {
    this.sidebar.style.marginLeft = ''
    this.sidebar.classList.remove('sidebar-hidden')
    if (this.sidebarOverlay) this.sidebarOverlay.style.display = 'block'
  }

  hide() {
    let sidebarWidth = this.sidebar.offsetWidth
    this.sidebar.style.marginLeft = `-${sidebarWidth}px`
    this.sidebar.classList.add('sidebar-hidden')
    if (this.sidebarOverlay) this.sidebarOverlay.style.display = 'none'
  }

  setupListeners() {
    if (this.collapseButton) this.setupCollapseButtonListener()
    if (this.sidebarOverlay) this.setupOverlayListener()
  }

  setupCollapseButtonListener() {
    this.collapseButton.addEventListener('click', () => {
      if (this.isCollapsed()) {
        this.expand()
      } else {
        this.collapse()
      }
    })
  }

  setupOverlayListener() {
    this.sidebarOverlay.addEventListener('click', () => this.hide())
  }
}

module.exports = Sidebar
