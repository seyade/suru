import Header from "./components/header";
import Hero from "./components/hero";
import Content1 from "./components/content-1";
import Featured from "./components/featured";
import News from "./components/news";
import Footer from "./components/footer";

import "./style.scss";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main id="home">
    ${Header}
    <div class="content mt-8">
      ${Hero}
      ${Content1}
      ${Featured}
      ${News}
      ${Footer}
    </div>
  </main>
`;
