import "./Footer.css";

function Footer() {
  return (
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
  );
}
export default Footer;
