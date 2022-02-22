import React, { useState } from "react";
import "./Navbar.css";

interface Link {
  text: string;
  url: string;
}

interface Logo {
  content: string;
  url: string;
}

interface ImageLogo extends Logo {
  alt: string;
  width: number;
  height: number;
}

export interface Props {
  logo?: Logo | ImageLogo;
  links: Link[];
  customClasses?: string;
}

const isImageLogo = (logo: object): logo is ImageLogo => {
  return "alt" in logo;
};

const Navbar: React.FC<Props> = ({ logo, links, customClasses }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinkClass = `palmtree--nav-links ${
    isOpen ? "palmtree--toggle-nav" : ""
  }`;
  const menuClass = `palmtree--mobile-menu ${
    isOpen ? "palmtree--animate-menu" : ""
  }`;

  const linkElements = links.map((obj) => {
    return (
      <a href={obj.url} className="palmtree--nav-link" key={obj.url}>
        {obj.text}
      </a>
    );
  });

  const logoElement = (): JSX.Element | null => {
    let element: JSX.Element | null = null;
    if (logo) {
      if (isImageLogo(logo)) {
        element = (
          <a href={logo.url}>
            <img
              src={logo.content}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          </a>
        );
      } else {
        element = (
          <a href={logo.url}>
            <h1>{logo.content}</h1>
          </a>
        );
      }
    }
    return element;
  };

  return (
    <nav className="palmtree--nav">
      <div className={`palmtree--navbar ${customClasses || ""}`}>
        {logo ? (
          <div className="palmtree--nav-logo">{logoElement()}</div>
        ) : null}
        <div className={navLinkClass}>{linkElements}</div>
        <div className={menuClass} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
