import Header from './components/header';
import Main from './components/main';
import Blogs from './components/blogs';
import Env from './components/env';
import Newsletter from './components/newsletter';
import Footer from './components/footer';
import BlogPost from './components/blogpost';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Blogs />
      <Env />
      <BlogPost />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
