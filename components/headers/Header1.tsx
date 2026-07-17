import Nav from "./Nav";
import ThemeSwitcherButton from "./ThemeSwitcherButton";

export default function Header1() {
  return (
    <header id="header" className="header d-flex justify-content-between">
      <div className="header__navigation">
        <nav id="menu" className="menu">
          <ul className="menu__list d-flex justify-content-start">
            <Nav />
          </ul>
        </nav>
      </div>
      <div className="header__controls d-flex justify-content-end">
        <ThemeSwitcherButton />
        <a
          id="notify-trigger"
          className="header__trigger btn"
          href="mailto:vrundasuresh@gmail.com?subject=Message%20from%20your%20site"
        >
          <span className="trigger__caption">Let&apos;s Talk</span>
          <i className="ph-bold ph-chat-dots" />
        </a>
      </div>
    </header>
  );
}
