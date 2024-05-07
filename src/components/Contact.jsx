
const Contact = () => { 
  const handleClick = ({ props }) => {
    alert(`Hey {props}, I have received your message !!!`)
  }
  return (
    <div className="flex-wrap justify-end">
      <div className="float-left">
        <img
          src="https://foodfire-app.netlify.app/Contact-Us.13c5d28a.png"
          alt="Contact Us Image"
          className="m-8 p-4"
        ></img>
      </div>
      <div>
        <form className="m-10 p-10 justify-end ">
          <input
            type="text"
            placeholder="Name"
            className="border-2 p-4 mb-4 w-80 block border-orange-400 rounded-lg"
          ></input>

          <input
            type="text"
            placeholder="Email"
            className="border-2 p-4 mb-4 w-80  block border-orange-400 rounded-lg"
          ></input>
          <textarea
            placeholder="Enter your message here....."
            className="border-2 p-6 mb-4 w-80 border-orange-400 rounded-lg block "
          ></textarea>

          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleClick}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Contact;
