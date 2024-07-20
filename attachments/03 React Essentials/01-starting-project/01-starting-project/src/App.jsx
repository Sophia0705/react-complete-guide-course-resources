import { useState } from 'react'

import { EXAMPLES, CORE_CONCEPTS } from './data.js'

import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from'./components/TabButton.jsx'

// Header()
// React 라이브러리가 내부에서 실행시켜 화면에 나와야 하는 것이 무엇인지 인지 --> 함수 호출하는 JS 방식으로 함수 실행X

function App() {
  // useState 함수는 내부 함수에 중첩되면 안됨(반드시 컴포넌트 함수의 최상위에서 호출해야 함)
  const [ selectedTopic, setSelectedTopic ] = useState()


  // 일반적인 변수로는 UI 업데이트 할 수 없음
  // 컴포넌트 함수가 재실행되어야 한다는 것을 리액트에게 알려줄 방법 필요 --> 그게 state!
  // let tabContent = 'Please click a button'

  // handleClick 이었던 inner 함수 가져다가 App.jsx에 가져온 것
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    // tabContent = selectedButton
    setSelectedTopic(selectedButton)
    // 버튼 클릭 확인 위해서
    // console.log(selectedTopic)
}
  // app component 실행 확인
  console.log('APP COMPONENT EXECUTING')

  let tabContent = <p>Please select a topic.</p>

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description} </p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )
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
        {/* map()으로 동적으로 배열 출력하게 하는 방법 쓰기 */}
        {CORE_CONCEPTS.map((conceptItem) => (
          // key prop 추가
          <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
          {/* <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
            /> */}

          {/* shorter alternatives */}
          {/* <CoreConcept {...CORE_CONCEPTS[0]} />
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
          /> */}
        </ul>
        </section>
        <section id="examples">
            <h2>Examples</h2>
            <menu>
              {/* handleSelect 함수에 포인터 전달 */}
              <TabButton 
                isSelected={selectedTopic === 'components'} 
                onSelect={() => handleSelect('components')}>Components</TabButton>
              <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
              <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
              <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
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