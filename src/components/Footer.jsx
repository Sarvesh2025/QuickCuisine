const Footer = () => {
    
  return (
    <div className="footer text-center py-6 bg-gray-200 text-gray-700">
      Developed By
      <i className="fa-solid fa-heart text-red-500"></i>
      <a
        href="https://www.linkedin.com/in/i-am-sarvesh/"
        target="_blank"
        title="Sarvesh's Linkedin Profile"
        className="text-blue-500"
      >
        Sarvesh Pandey
      </a>
      <i className="fa-solid fa-copyright"></i>
      <span className="text-gray-600">2024</span>
      <strong className="ml-2">
        Quick <span className="text-green-500">Cuisine</span>
      </strong>
    </div>
  );
};

export default Footer;
