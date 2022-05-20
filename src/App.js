import About from "./components/about";
import Features from "./components/features";
import Header from "./components/header";
import Landing from "./components/landing-area";

export default function App() {
  return (
    <div className="App text-xl">
      <Header />
      <Landing />
      <Features />
      <About />
      Hello
    </div>
  );
}
