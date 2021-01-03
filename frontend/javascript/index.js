import "../styles/index.css"
const feather = require('feather-icons')

window.onload = () => feather.replace()

import Sidebar from "./components/Sidebar"
import Menu from "./components/Menu"
import Modal from "./components/Modal"

window.Sidebar = Sidebar
window.Menu = Menu
window.Modal = Modal
