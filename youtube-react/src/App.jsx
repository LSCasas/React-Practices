import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Content from "./components/Content"; // Asegúrate de que Content también esté importado si no lo está

export default function App() {
  return (
    <main id="main-layout">
      <NavBar />
      <Menu />
      <Content />
    </main>
  );
}
