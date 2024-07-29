import React,{ createContext, useContext, useState } from 'react';

const CurrentUserContext = createContext<any>(null);

export default function App() {
    const [currentUser, setCurrentUser] = useState(null);
    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            <Form />
        </CurrentUserContext.Provider>
    );
}
interface IProp {
    title?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}
const Form: React.FC<IProp> = ({ children }) => {
    return (
        <Panel title="Welcome">
            <LoginButton />
        </Panel>
    );
};

function LoginButton() {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    if (currentUser !== null) {
        return <p>You logged in as {currentUser.name}.</p>;
    }

    return (
        <Button
            onClick={() => {
                setCurrentUser({ name: 'Advika' });
            }}
        >
            Log in as Advika
        </Button>
    );
}

const Panel: React.FC<IProp> = ({ title, children }) => {
    return (
        <section className="panel">
            <h1>{title}</h1>
            {children}
        </section>
    );
};

const Button: React.FC<IProp> = ({ children, onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
};
