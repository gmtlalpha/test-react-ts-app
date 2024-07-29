import React, { useMemo, useState } from 'react';
/**
 * useMemo
 * only runs when one of its dependencies update.
 * useMemo and useCallback Hooks are similar.
 * The main difference is that useMemo returns a memoized value
 * and useCallback returns a memoized function
 */
const UseMemoPage: React.FunctionComponent = () => {
    const [count, setCount] = useState(0);
    const [color, setColour] = useState('white');

    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const updateColour = () => setColour((c) => (c === 'white' ? 'cyan' : 'white'));

    return (
        <div>
            <h3>
                <strong>Use Memo Hook</strong>
            </h3>
            <p>
                Count: {count} <br />
                Calcuation: {calculation}
            </p>
            <button onClick={() => setCount((c) => c + 1)}>Increase Count</button>
            <p style={{ color: color }}>Trigger State Update</p>
            <button onClick={() => updateColour()}>Update</button>
        </div>
    );
};

const expensiveCalculation = (number: number) => {
    for (let i = 0; i < 1000000000; i++) {
        number += i;
    }

    return number * 1.5;
};

export default UseMemoPage;
