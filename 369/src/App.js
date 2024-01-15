// App.js
import React, { useState } from 'react';
import Viewer from './components/Viewer';
import Controller from './components/Controller';

function App() {
    const [count, setCount] = useState(0);

    const handleSetCount = (value) => {
        // setCount(count + value);
        // handleSetGame();
        // handleSetCount 함수 호출 후에 handleSetGame이 호출
        // 그러나 handleSetCount 함수 호출 시에 count 값이 이미 변경되어 있기 때문에 알림이 뜨지 않는 것으로 보임
        const newCount = count + value;
        setCount(newCount);
        handleSetGame(newCount);

    };

    const handleSetGame = (newCount) => {
        let count369 = 0;
        const numberStr = newCount.toString();

        for (let i = 0; i < numberStr.length; i++) {
            if (numberStr[i] === '3' || numberStr[i] === '6' || numberStr[i] === '9') {
                count369++;
            }
        }

        switch (count369) {
            case 1:
                alert("짝");
                break;
            case 2:
                alert("짝짝");
                break;
            default:
                break;
        }
    };

    return (
        <div className="App">
            <section>
                <Viewer count={count} />
            </section>
            <section>
                <Controller handleSetCount={handleSetCount} />
            </section>

        </div>
    );
}

export default App;
