import {ReactElement, useState} from 'react';
import MyMessage from 'components/MyMessage';
import dog from 'images/dog.jpeg';

function App(): ReactElement {
  const [count, setCount] = useState(1);

  function callback(): void {
    // setTimeout(function () {
    //   setCount(function (currentValue) {
    //     return currentValue + 1;
    //   });
    // }, 3000);
    setCount(count + 1);
  }

  return (
    <main>
      <div className="app">
        <h1>💛 Latte and Code & Assembler Institute of Technology</h1>
        <h2>Una introducción a React</h2>
        <MyMessage message={`Contador: ${count}`} callback={callback} />
        <img src={dog} />
      </div>
    </main>
  );
}

export default App;
