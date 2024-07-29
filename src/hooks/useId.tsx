import React, { useId } from 'react';

const UseIdPage: React.FunctionComponent = () => {
    const id = useId();
    const id2 = useId();
    const id3 = useId();

    return (
        <div>
            <h3>
                <strong>Use ID Hook</strong>
            </h3>
            <p>
                Your IDs are: '{id}', '{id2}', '{id3}'
            </p>
        </div>
    );
};

export default UseIdPage;
