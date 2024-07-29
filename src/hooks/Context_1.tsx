import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext<any>(null);
const CurrentUserContext = createContext<any>(null);

interface IProps {
  children?: React.ReactNode;
  theme?: string;
  setTheme?: any;
  disabled?: boolean;
  onClick?: any;
  title?: any;
}

export default function MyApp() {
  const [theme, setTheme] = useState('light');
  return (
    <MyProviders theme={theme} setTheme={setTheme}>
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
    </MyProviders>
  );
}

const MyProviders: React.FC<IProps> = ({ children, theme, setTheme }) => {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          setCurrentUser
        }}
      >
        {children}
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
};

const WelcomePanel: React.FC<IProps> = ({ children }) => {
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
  const canLogin = firstName !== '' && lastName !== '';
  return (
    <>
      <label>
        First name{': '}
        <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label>
        Last name{': '}
        <input required value={lastName} onChange={(e) => setLastName(e.target.value)} />
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

const Panel: React.FC<IProps> = ({ title, children }) => {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

const Button: React.FC<IProps> = ({ children, disabled, onClick }) => {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
