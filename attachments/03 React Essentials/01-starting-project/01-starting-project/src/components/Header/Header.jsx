import reactImg from "../../assets/react-core-concepts.png"
// import componentImg from './assets/components.png'

// Header css Import
import './Header.css'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

// 그냥 export만 추가해도 되지만 보통 'export default'
export default function Header() {
    const description = reactDescriptions[genRandomInt(2)]
  
    // 괄호 써야 하는데 vscode에서 문서 정렬 단축키(Format Document) 누르면 automatically
    return (<header>
      <img src={ reactImg } alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        { description } React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
    )
  }