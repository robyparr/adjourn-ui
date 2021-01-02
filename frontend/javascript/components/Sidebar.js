class Sidebar {
  constructor(options = {}) {
    ({
      sidebarSelector = '.sidebar',
      sidebarOverlaySelector = '.sidebar-overlay',
      collapseButtonSelector = '.collapse-button',
      mainContentSelector = 'main',
      hidden = false,
      hideOnMobile = true,
      mobileSize = 639,
    } = options)

    this.sidebar = document.querySelector(sidebarSelector)
    this.sidebarOverlay = document.querySelector(sidebarOverlaySelector)
    this.collapseButton = this.sidebar.querySelector(collapseButtonSelector)
    this.mainContent = document.querySelector(mainContentSelector)
    this.mobileSize = mobileSize

    this.setupListeners()

    if (hidden || (hideOnMobile && this.isMobile())) this.hide()
  }

  isMobile() {
    return window.innerWidth <= this.mobileSize
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

  shouldPushContent() {
    return this.sidebar.classList.contains('push-content')
  }

  show() {
    if (this.shouldPushContent()) {
      this.sidebar.style.marginLeft = ''
    } else {
      this.sidebar.classList.remove('-translate-x-full')
    }
    if (this.sidebarOverlay) this.sidebarOverlay.style.display = 'block'
  }

  hide() {
    if (this.shouldPushContent()) {
      let sidebarWidth = this.sidebar.offsetWidth
      this.sidebar.style.marginLeft = `-${sidebarWidth}px`
    } else {
      this.sidebar.classList.add('transform')
      this.sidebar.classList.add('-translate-x-full')
    }
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
