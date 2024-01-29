import logo from "../../assets/logo.svg";
import search from "../../assets/icons/search.svg";
import LiLink from "../ui/links/li-link";
import Button from "../ui/buttons/button";

export default function Header() {
  return (
    <header className="pt-7">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <figure className="w-24 lg:w-48">
              <img src={logo} alt="" />
            </figure>
            <nav className="flex">
              <ul className="flex gap-3">
                <LiLink to={"/"}>Home</LiLink>
                <LiLink to={"/"}>Tags</LiLink>
                <LiLink to={"/"}>About</LiLink>
              </ul>
            </nav>
          </div>
          <div className="flex gap-4">
            <button>
              <img src={search} alt="" />
            </button>
            <div className="w-32">
              <Button>Login</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
