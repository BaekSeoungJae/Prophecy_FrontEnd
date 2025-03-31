import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CommonForm from "./common/CommonForm";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import FeedPage from "./pages/FeedPage";
import ShopPage from "./pages/ShopPage";
import MyPage from "./pages/MyPage";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route element={<CommonForm />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/mypage" element={<MyPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
