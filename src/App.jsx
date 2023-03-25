import "./App.css";
import heroimg from "./assets/heroimg.svg";
import home from "./assets/home.svg";
import about from "./assets/about.svg";
import portfolio from "./assets/portfolio.svg";
import skills from "./assets/skills.svg";
import contact from "./assets/contact.svg";
import facebook from "./assets/facebook.svg";
import twitter from "./assets/twiitter.svg";
import instagram from "./assets/instagram.svg";
import telegram from "./assets/telegram.svg";
import design from "./assets/designillustration.svg";
import rating from "./assets/rating.svg";

function App() {
    return (
        <>
            {/* Navbar */}
            <div className="w-full top-0 sticky z-10 bg-darkpurple flex flex-row pt-3 pb-1 px-4 flex-grow lg:fixed lg:flex-col lg:w-fit lg:space-y-4 lg:top-8 lg:rounded-r-lg lg:px-2 lg:py-3">
                <div className="flex flex-col grow">
                    <img id="home" className="grow h-10" src={home} alt="" />
                    <p className="w-full text-sm text-center font-poppins-medium grow mt-0.5 text-white">
                        Home
                    </p>
                </div>

                <div className="flex flex-col grow">
                    <img id="home" className="grow h-10" src={about} alt="" />
                    <p className="w-full text-sm text-center font-poppins-medium grow mt-0.5 text-white">
                        About
                    </p>
                </div>
                <div className="flex flex-col grow">
                    <img
                        id="home"
                        className="grow h-10"
                        src={portfolio}
                        alt=""
                    />
                    <p className="w-full text-sm text-center font-poppins-medium grow mt-0.5 text-white">
                        Portfolio
                    </p>
                </div>
                <div className="flex flex-col grow">
                    <img id="home" className="grow h-10" src={skills} alt="" />
                    <p className="w-full text-sm text-center font-poppins-medium grow mt-0.5 text-white">
                        Skills
                    </p>
                </div>
                <div className="flex flex-col grow">
                    <img id="home" className="grow h-10" src={contact} alt="" />
                    <p className="w-full text-sm text-center font-poppins-medium grow mt-0.5 text-white">
                        Contact
                    </p>
                </div>
            </div>

            <div className="bg-pinkbg pt-3 lg:px-32 lg:pt-0">
                {/* Hero Sectioon */}
                <section className="relative flex flex-col md:flex-row">
                    <div className="flex flex-col md:my-auto">
                        <p className="w-full text-center mb-3 px-5 font-poppins-regular mx-auto md:text-left md:mb-1">
                            Hi!
                        </p>
                        <p className="w-fit mb-3 font-poppins-semibold text-2xl text-center mx-auto px-5 md:text-left">
                            I’m Prince Pious Omm Prakash an UI/UX Designer.
                        </p>
                        <p className="w-full font-poppins-regular text-base leading-5 text-center mx-auto px-5 md:text-left">
                            UI/UX Designer based in Bhubaneswar, India. I am
                            designing with a clean and creative design in mind.
                        </p>

                        <div className="w-full px-5 flex flex-row h-10 mt-2 md:w-4/5 md:mt-4">
                            <p className="my-auto mr-3">Follow Me:</p>
                            <img
                                className="h-full grow"
                                src={facebook}
                                alt=""
                            />
                            <img className="h-full grow" src={twitter} alt="" />
                            <img
                                className="h-full grow"
                                src={instagram}
                                alt=""
                            />
                            <img
                                className="h-full grow"
                                src={telegram}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-row space-x-3 w-fit mt-4 mx-auto md:mr-auto md:ml-5">
                            <button className="py-2 px-3 text-white font-poppins-medium bg-darkpurple rounded-md">
                                Send Request
                            </button>
                            <button className="py-2 px-3 font-poppins-medium text-darkpurple rounded-md border-2">
                                Download CV
                            </button>
                        </div>
                    </div>
                    <img
                        className="max-w-sm mx-auto max-h-sm w-full"
                        src={heroimg}
                        alt=""
                    />
                </section>

                {/* Project Preview */}
                <section className="relative flex flex-col-reverse m-4 rounded-xl pb-5 p-1 md:flex-row-reverse bg-darkpurple md:pb-1">
                    <div className="flex flex-col md:my-auto">
                        <div className="flex flex-row space-x-0 px-5 grow w-fit mx-auto mb-5 md:space-x-5 md:mr-auto md:ml-0">
                            <div className="flex flex-col w-fit">
                                <p className="text-white font-poppins-bold w-full text-center text-5xl h-10 md:text-left">10+</p>
                                <p className="w-full text-sm font-poppins-medium grow mt-1.5 text-center text-white md:text-left">
                                    Completed Projects
                                </p>
                            </div>
                            <div className="flex flex-col w-1/2 pr-3">
                                <img className="w-32 h-10" src={rating} alt="" />
                                <p className="w-full text-sm font-poppins-medium grow mt-1.5 text-white text-center md:text-left">
                                    Positive Reviews
                                </p>
                            </div>
                        </div>
                        <p className="w-full mb-3 font-poppins-bold text-3xl text-lightpurple text-center mx-auto px-5 md:text-left">
                            Glad to Help You!
                        </p>
                        <p className="w-full font-poppins-regular text-base text-white leading-5 text-center mx-auto px-5 md:text-left">
                        As a UI/UX designer, I'm very keen on learning new and creative designs, wireframing, and prototyping techniques.
                        </p>
                    </div>
                    <img
                        className="max-w-sm mx-auto max-h-sm w-full"
                        src={design}
                        alt=""
                    />
                </section>

                {/* Why Hire me */}
                <p className="w-fit font-poppins-semibold text-4xl mx-auto py-10">Why Hire me?</p>
            </div>
        </>
    );
}

export default App;
