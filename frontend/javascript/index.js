import "../styles/index.css"
const feather = require('feather-icons')

window.onload = () => feather.replace()

import Sidebar from "./components/Sidebar"
import Menu from "./components/Menu"

window.Sidebar = Sidebar
window.Menu = Menu
