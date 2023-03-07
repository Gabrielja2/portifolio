import "./Footer.css";
import seta from ".././assets/img/seta.png";

function Footer() {
  return (
    <>
      <div className="transparent bottom-0 right-0 fixed pr-4 pb-24 sm:pr-8 sm:pb-20-">
        <a href="#home">
          <img
            data-aos="zoom-in-up"
            className="w-10 sm:w-12"
            src={seta}
            alt="rollback"
          />
        </a>
      </div>
      <div id="footer" className="bg-orange-500 p-4">
        <span className="text-white flex justify-center text-center px-3 py-2 rounded-md text-sm font-medium">
          <span>Connect with me on</span>
          <span>
            <a
              target="_blank"
              href="https://wa.me/5524999092052?text=sua%20mensagem"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </span>
          <span>or send me an</span>
          <span>
            <a href="mailto:gabrielja2antunes@gmail.com">Email</a>
          </span>
        </span>
      </div>
    </>
  );
}
export default Footer;
