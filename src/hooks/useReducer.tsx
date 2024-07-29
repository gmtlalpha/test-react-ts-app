import React, { useReducer } from 'react';
enum EActionType{
    COMPLETE,
  }
  interface actionType{
    type: EActionType;
    id: number;
  }
  type ACTIONTYPES =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

interface IState {
    count: number;
    input: string;
}

interface IAction {
    type: 'update_count' | 'update_input' | 'error';
    payload: number | string;
}

const defaultState: IState = { count: 0, input: '' };

// const reducer = (state: typeof IState, action: IAction) => {
const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case 'update_count':
            return { ...state, count: action.payload as number };
        case 'update_input':
            return { ...state, input: action.payload as string };
        case 'error':
            throw new Error("Bad action");
        default:
            return { ...state };
    }
};

const UseReducerPage: React.FunctionComponent = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <div>
            <h3>
                <strong>Use Reducer Hook</strong>
            </h3>
            <p>You clicked the button: {state.count} times!</p>
            <button onClick={() => dispatch({ type: 'update_count', payload: state.count + 1 })}>Click me!</button>
            <p>Input: {state.input}</p>
            <input type="text" onChange={(event) => dispatch({ type: 'update_input', payload: event.target.value })} />
        </div>
    );
};

export default UseReducerPage;
