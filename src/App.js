import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import CommonForm from "./common/CommonForm";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import FeedPage from "./pages/FeedPage";
import ShopPage from "./pages/ShopPage";
import MyPage from "./pages/MyPage";
import GlobalStyle from "./styles/GlobalStyle";
import { useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route
            element={
              <CommonForm toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            }
          >
            <Route path="/" element={<MainPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/mypage" element={<MyPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
