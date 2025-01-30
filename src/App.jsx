import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route, Outlet, Link } from "react-router";
import Home from "./routes/Home";
import Character from "./routes/Character";
import Characters from "./routes/Characters";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:characterId" element={<Character />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <main className="px-4 lg:px-12">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function NoMatch() {
  return (
    <>
      <h1>
        <Link to="/">404! Get me outta here!</Link>
      </h1>
      <p>The page you are looking for does not exist.</p>
    </>
  );
}

export default App;
