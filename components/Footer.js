// Icons imports
import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Mentions Légales</a>
        <a className="link link-hover">Politique de Confidentialité</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a className="hover:cursor-pointer">
            <GrInstagram className="text-xl" />
          </a>
          <a className="hover:cursor-pointer">
            <GrFacebookOption className="text-xl" />
          </a>
          <a className="hover:cursor-pointer">
            <GrLinkedinOption className="text-xl" />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - Tous droits réservés par Brand&Com</p>
      </div>
    </footer>
  );
};

export default Footer;
