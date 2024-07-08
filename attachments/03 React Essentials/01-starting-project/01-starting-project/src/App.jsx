import reactImg from "./assets/react-core-concepts.png"

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
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

// Header()
// React 라이브러리가 내부에서 실행시켜 화면에 나와야 하는 것이 무엇인지 인지 --> 함수 호출하는 JS 방식으로 함수 실행X

function App() {
  return (
    <div>
      {/* <Header></Header> */}
      {/* 자동 닫힘 문법 */}
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App; 

