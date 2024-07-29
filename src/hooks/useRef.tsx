import { useRef, useState } from 'react';

const App: React.FunctionComponent = () => {
    return (
        <>
            <UseRefComponant1 />
            <hr />
            <UseRefComponant2 />
        </>
    );
};

const UseRefComponant1: React.FunctionComponent = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const defaultinput = "aaa";
    return (
        <>
            <h1> Avoiding Re-Renders (Accessing DOM Elements)</h1>
            <input type="text" value={defaultinput} ref={inputRef} />
            <button onClick={() => inputRef.current?.focus()}>focus inputRef</button>
        </>
    );
};

const UseRefComponant2: React.FunctionComponent = () => {
    const useRefNumber = useRef(0);
    const [count, setCount] = useState(0);
    return (
        <>
            <h1> Re-Renders</h1>
            <button onClick={() => setCount(count + 1)}>click useState</button>
            <h1>{count}</h1>
            <hr></hr>
            <h1> Avoiding Re-Renders</h1>
            <button onClick={() => (useRefNumber.current += 1)}>click useRefNumber</button>
            <h1>{useRefNumber.current}</h1>
        </>
    );
};

export default App;
