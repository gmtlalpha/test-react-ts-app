import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext<null|string>(null);

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
            // setTheme(theme === 'dark' ? 'light' : 'dark');
          }}
        />
        Use dark mode
      </label>
    </ThemeContext.Provider>
  )
}
type Props = {
  title?: string;
  children?: React.ReactNode;
};
const Form: React.FC<Props> = ({ children }) =>{
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

const Panel: React.FC<Props> = ({ title, children }) =>{
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

const Button: React.FC<Props> = ({ children }:Props)=> {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}
