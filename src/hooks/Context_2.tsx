import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext<any>(null);
const CurrentUserContext = createContext<any>(null);

interface IProp {
  title?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export default function App() {
  const [theme, setTheme] = useState('light');
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <WelcomePanel />
        <label>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light');
            }}
          />
          Use dark mode
        </label>
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}

const WelcomePanel: React.FC<IProp> = ({ children }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return <Panel title="Welcome">{currentUser !== null ? <Greeting /> : <LoginForm />}</Panel>;
};

function Greeting() {
  const { currentUser } = useContext(CurrentUserContext);
  return <p>You logged in as {currentUser.name}.</p>;
}

function LoginForm() {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const canLogin = firstName.trim() !== '' && lastName.trim() !== '';
  return (
    <>
      <label>
        First name{': '} <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label>
        Last name{': '} <input required value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <Button
        disabled={!canLogin}
        onClick={() => {
          setCurrentUser({
            name: firstName + ' ' + lastName
          });
        }}
      >
        Log in
      </Button>
      {!canLogin && <i>Fill in both fields.</i>}
    </>
  );
}

const Panel: React.FC<IProp> = ({ title, children }) => {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

const Button: React.FC<IProp> = ({ children, disabled, onClick }) => {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
