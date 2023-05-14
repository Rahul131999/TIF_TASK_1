/**
 * @Author: root
 * @Date:   2023-05-10T17:22:58+05:30
 * @Last modified by:   root
 * @Last modified time: 2023-05-12T21:54:09+05:30
 */



import './App.css';
import Header from "./components/header/header.js"
import About from "./components/about/about.js"
import Article from "./components/article/article.js"
import Footer from "./components/footer/footer.js"

function App() {
  return (
    <>
      <Header/>
      <About/>
      <Article/>
      <Footer/>
    </>
  );
}

export default App;
