// export default function TabButton(props) {
//     return <li><button>{ props.childeren }</button></li>
// }

// onClick을 prop으로 추가 - 구조분해 사용해 해당 prop에 접근 가능
// 커스텀 컴포넌트기 때문에 이름 자유롭게 지을 수 있음
// 'on'으로 시작하면 특정 이벤트에 기반해 실행되는 함수에 의해 설정된다는 것을 알려줌(코딩 컨벤션)
export default function TabButton({children, onSelect}) {
    // // in regular js(vanila javascript)
    // document.querySelector('button').addEventListener('click', () => {
    // })

    // inner function 으로 onClick 연결
    // function handleClick() {
    //     console.log('Hello World!')
    // }

    return (
    <li>
        <button onClick={onSelect}>{ children }</button>
    </li>
    )
}