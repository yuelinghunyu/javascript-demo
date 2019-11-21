import poster from "./static/img/poster.jpg"
import "./static/css/index.scss"
const div = document.createElement("div")
const img = new Image()
img.src = poster
img.classList.add("poster")

div.innerHTML = "我很累，但不能输，加油啊"
const app = document.getElementById("app")
app.append(img)
app.append(div)