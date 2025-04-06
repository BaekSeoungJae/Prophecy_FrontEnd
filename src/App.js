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
import LoginPage from "./pages/login/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute"; // ✅ 추가

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            element={
              <CommonForm toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            }
          >
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <MainPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/search"
              element={
                <ProtectedRoute>
                  <SearchPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/feed"
              element={
                <ProtectedRoute>
                  <FeedPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/shop"
              element={
                <ProtectedRoute>
                  <ShopPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/mypage"
              element={
                <ProtectedRoute>
                  <MyPage />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
