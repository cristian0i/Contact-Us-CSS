import backgroundImage from "./assets/bg-website.png";
import contactImage from "./assets/contact-image.svg";

function App() {
  return (
    <div
      className="w-[100wh] min-h-screen max-h-[500vh] flex flex-col justify-center items-center bg-dark bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-[45px] leading-[50x] text-white font-[900] md:text-[70px] md:leading-[80px]">
        Cons<span className="text-[#196f3d]">tact Us</span>
      </h1>
      <div className="flex mt-[45px] w-auto md:w-[750px] lg:w-[900px] h-[450px] bg-black bg-opacity-50 box-border shadow-md rounded-lg">
        <div className="flex-[2.5] relative hidden sm:block ">
          <img className="lg:w-[450px]" src={contactImage} alt="Contact img" />
        </div>
        <div className="flex-[2] flex flex-col items-center justify-center mt-10 ">
          <h2 className="text-[26px] leading-9 text-[#a3e4d7] text-center mb-5">
            Send Message
          </h2>

          <form className="flex items-center justify-center flex-col">
            <div className="relative">
              <input
                className={`form w-[300px] pt-[10px] text-white mb-7 border-solid border-b border-white outline-none bg-transparent`}
                type="text"
                name="First Name"
                required=" "
              />
              <label className="text-white absolute top-0 left-0 pt-2 px-0 pointer-events-none transition-all duration-500">
                First Name
              </label>
            </div>

            <div className="relative">
              <input
                className={`form w-[300px] pt-[10px] text-white mb-7 border-solid border-b border-white outline-none bg-transparent`}
                type="text"
                name="Last Name"
                required=" "
              />
              <label className="text-white absolute top-0 left-0 pt-2 px-0 pointer-events-none transition-all duration-500">
                Last Name
              </label>
            </div>

            <div className="relative">
              <input
                className={`form w-[300px] pt-[10px] text-white mb-7 border-solid border-b border-white outline-none bg-transparent`}
                type="text"
                name="Email"
                required=" "
              />
              <label className="text-white absolute top-0 left-0 pt-2 px-0 pointer-events-none transition-all duration-500">
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                className={`form w-[300px] pt-[10px] text-white mb-4 border-solid border-b border-white outline-none bg-transparent`}
                type="text"
                name="Message"
                required=" "
                style={{ resize: "none" }}
              />
              <label className="text-white absolute top-0 left-0 pt-2 px-0 pointer-events-none transition-all duration-500">
                Message
              </label>
            </div>

            <button className="btn m-0">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
