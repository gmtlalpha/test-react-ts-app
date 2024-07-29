import React, { useState, createContext, useContext } from 'react';

interface IState {
    count: number;
    input: string;
}

const defaultState: IState = { count: 0, input: '' };

const SampleContext = createContext({
    state: defaultState
});

const UseContextPage: React.FunctionComponent = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    return (
        <div>
            <h3>
                <strong>Use Context Hook</strong>
            </h3>
            <button onClick={() => setCount((c) => c + 1)}>Increase Count</button>
            <br />
            Input: <input type="text" onChange={(event) => setInput(event.target.value)} />
            <SampleContext.Provider value={{ state: { count, input } }}>
                <hr style={{ color: 'white', width: '100%' }} />
                <ExampleOne />
                <hr style={{ color: 'white', width: '100%' }} />
                <ExampleTwo />
            </SampleContext.Provider>
        </div>
    );
};

const ExampleOne: React.FunctionComponent = () => {
    const sampleContext = useContext(SampleContext);

    return (
        <div>
            <h3>
                <strong>Example 1</strong>
            </h3>
            <p>The count is: {sampleContext.state.count}</p>
        </div>
    );
};

const ExampleTwo: React.FunctionComponent = () => {
    const sampleContext = useContext(SampleContext);

    return (
        <div>
            <h3>
                <strong>Example 2</strong>
            </h3>
            <p>The input is: {sampleContext.state.input}</p>
        </div>
    );
};

export default UseContextPage;
