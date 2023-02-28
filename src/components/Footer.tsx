import "./Footer.css";

function Footer() {
  return (
    <div id="footer" className="bg-orange-500 p-4">
      <span className="text-white flex justify-center text-center px-3 py-2 rounded-md text-sm font-medium">
        <span className="mr-1">Did you like it? Connect with me on</span>
        <span>
          <a className="mr-1" href="#home">
            social media
          </a>
        </span>
        <span className="mr-1"> or send me an</span>
        <span>
          <a href="mailto:gabrielja2antunes@gmail.com">Email</a>
        </span>
      </span>
    </div>
  );
}
export default Footer;
