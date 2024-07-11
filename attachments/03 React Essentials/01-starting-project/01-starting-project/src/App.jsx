import { CORE_CONCEPTS } from './data.js'
33
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from'./components/TabButton.jsx'

// Header()
// React 라이브러리가 내부에서 실행시켜 화면에 나와야 하는 것이 무엇인지 인지 --> 함수 호출하는 JS 방식으로 함수 실행X

function App() {
  let tabContent = 'Please click a button'
  // handleClick 이었던 inner 함수 가져다가 App.jsx에 가져온 것
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    tabContent = selectedButton
    // 버튼 클릭 확인 위해서
    console.log(tabContent)
}
  return (
    <div>
      {/* Header.css 랑 연결 안 되어있어도 App.jsx에 입력한 header는 컴포넌트 스타일 css 영향을 받는다!!! */}
      {/* <header>
        <h1>Hello World!</h1>
      </header> */}

      {/* <Header></Header> */}
      {/* 자동 닫힘 문법 */}
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {/* <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
            /> */}
          {/* shorter alternatives */}
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept 
            title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
            image={CORE_CONCEPTS[1].image}
          />
          <CoreConcept 
            title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
            image={CORE_CONCEPTS[2].image}
          />
          <CoreConcept 
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            image={CORE_CONCEPTS[3].image}
          />
        </ul>
        </section>
        <section id="examples">
            <h2>Examples</h2>
            <menu>
              {/* handleSelect 함수에 포인터 전달 */}
              <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
              <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
              <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
            </menu>
            {/* Because you must handle the event in the component that also manages the data that should be changed.
            ex) the “Dynamic Content” that should be displayed in this case. */}
            {tabContent}
        </section>
      </main>
    </div> 
  );
}

export default App; 