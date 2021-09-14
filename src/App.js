import React, { useState } from "react";
import { Header, SideNav, PageContent, PageLayout, Provider } from './components';
import './App.scss';

function App() {
  const [ theme, setTheme ] = useState("light");
  const handleThemeChangeClick = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }
  return (
    <div className="App">
      <Provider theme={theme}>
        <div className="themed-background">
          <Header onThemeClick={handleThemeChangeClick} />
          <PageLayout>
            <SideNav />
            <PageContent />
          </PageLayout>
        </div>
      </Provider>
    </div>
  );
}

export default App;
