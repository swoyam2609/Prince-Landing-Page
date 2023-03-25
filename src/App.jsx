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
import instagram1 from "./assets/instagram2.svg";
import telegram from "./assets/telegram.svg";
import telegram2 from "./assets/telegram2.svg";
import design from "./assets/designillustration.svg";
import rating from "./assets/rating.svg";
import communicative from "./assets/communicative.svg";
import professional from "./assets/proffesional.svg";
import collaborative from "./assets/collaborative.svg";
import favourite from "./assets/favourite.svg";
import work1 from "./assets/work1.svg";
import work2 from "./assets/work2.svg";
import work3 from "./assets/work3.svg";
import work4 from "./assets/work4.svg";
import work5 from "./assets/work5.svg";
import work6 from "./assets/work6.svg";
import user from "./assets/user.svg";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import figma from "./assets/figma.svg";
import illustrator from "./assets/illustrator.svg";
import photoshop from "./assets/photoshop.svg";
import github from "./assets/github.svg";
import cprog from "./assets/cprog.svg";
import cplus from "./assets/c++.svg";
import premiere from "./assets/premiere.svg";
import aftereffects from "./assets/aftereffects.svg";
import blog from "./assets/blog.svg";
import mail from "./assets/mail.svg";
import logo from "./assets/logo.svg";

function App() {
    return (
        <>
            {/* Navbar */}
            <div className="w-full top-0 sticky z-10 bg-darkpurple flex flex-row pt-2 pb-1 px-4 flex-grow lg:fixed lg:flex-col lg:w-fit lg:space-y-4 lg:top-8 lg:rounded-r-lg lg:px-2 lg:py-3">
                <div className="flex-col grow hidden lg:flex">
                    <img id="home" className="grow h-10 lg:mb-5" src={logo} alt="" />
                </div>
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
                                <p className="text-white font-poppins-bold w-full text-center text-5xl h-10 md:text-left">
                                    10+
                                </p>
                                <p className="w-full text-sm font-poppins-medium grow mt-1.5 text-center text-white md:text-left">
                                    Completed Projects
                                </p>
                            </div>
                            <div className="flex flex-col w-1/2 pr-3">
                                <img
                                    className="w-32 h-10"
                                    src={rating}
                                    alt=""
                                />
                                <p className="w-full text-sm font-poppins-medium grow mt-1.5 text-white text-center md:text-left">
                                    Positive Reviews
                                </p>
                            </div>
                        </div>
                        <p className="w-full mb-3 font-poppins-bold text-3xl text-lightpurple text-center mx-auto px-5 md:text-left">
                            Glad to Help You!
                        </p>
                        <p className="w-full font-poppins-regular text-base text-white leading-5 text-center mx-auto px-5 md:text-left">
                            As a UI/UX designer, I'm very keen on learning new
                            and creative designs, wireframing, and prototyping
                            techniques.
                        </p>
                    </div>
                    <img
                        className="max-w-sm mx-auto max-h-sm w-full"
                        src={design}
                        alt=""
                    />
                </section>

                {/* Why Hire me */}
                <p className="w-fit font-poppins-semibold text-4xl mx-auto py-10">
                    Why Hire me?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col space-y-3 mb-5 md:pt-10">
                        <img className="pr-2 h-20" src={communicative} alt="" />
                        <p className="font-poppins-medium w-full text-center">
                            Lorem, ipsum dolor.
                        </p>
                        <p className="font-poppins-light w-full px-16 text-center lg:px-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit amet{" "}
                        </p>
                    </div>

                    <div className="flex flex-col space-y-3 mb-5 md:pt-10">
                        <img className="pr-2 h-20" src={professional} alt="" />
                        <p className="font-poppins-medium w-full text-center">
                            Professional
                        </p>
                        <p className="font-poppins-light w-full px-16 text-center lg:px-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit amet{" "}
                        </p>
                    </div>

                    <div className="flex flex-col space-y-3 mb-5 md:pt-10">
                        <img className="pr-2 h-20" src={collaborative} alt="" />
                        <p className="font-poppins-medium w-full text-center">
                            Collaborative
                        </p>
                        <p className="font-poppins-light w-full px-16 text-center lg:px-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit amet{" "}
                        </p>
                    </div>

                    <div className="flex flex-col space-y-3 md:pt-10">
                        <img className="pr-2 h-20" src={favourite} alt="" />
                        <p className="font-poppins-medium w-full text-center">
                            Client's Favourite
                        </p>
                        <p className="font-poppins-light w-full px-16 text-center lg:px-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit amet{" "}
                        </p>
                    </div>
                </div>

                {/* Portfolio */}
                <div className="flex flex-row px-5">
                    <p className="w-fit font-poppins-semibold text-4xl mr-auto py-10">
                        Portfolio
                    </p>
                    <p className="w-fit font-poppins-light text-2xl ml-auto py-10">
                        See More
                    </p>
                </div>
                <div className="grid px-10 grid-cols-1 md:grid-cols-3 md:mb-10 lg:grid-cols-4">
                    <img
                        className="mx-auto hover:scale-110 ease-in-out duration-1000"
                        src={work1}
                        alt=""
                    />
                    <img
                        className="mx-auto hover:scale-110 ease-in-out duration-1000"
                        src={work2}
                        alt=""
                    />
                    <img
                        className="mx-auto hover:scale-110 ease-in-out duration-1000"
                        src={work3}
                        alt=""
                    />
                    <img
                        className="mx-auto hover:scale-110 ease-in-out duration-1000"
                        src={work4}
                        alt=""
                    />
                    <img
                        className="mx-auto hover:scale-110 ease-in-out duration-1000"
                        src={work5}
                        alt=""
                    />
                    <img
                        className="mx-auto hover:scale-110 ease-in-out duration-1000"
                        src={work6}
                        alt=""
                    />
                </div>

                {/* Testimonials */}
                <div className="flex flex-col space-y-3 mb-10 mx-0.5 py-10 rounded-xl bg-darkpurple md:mx-5">
                    <p className="w-fit font-poppins-semibold text-white text-4xl mx-auto">
                        Testimonials
                    </p>
                    <p className="w-fit font-poppins-light text-sm text-lightpurple mx-auto">
                        I’m Loved By Users And Clients Worldwide
                    </p>
                    <div className="grid w-auto mx-1 grid-cols-1 md:grid-cols-2 md:mx-10">
                        <div className="p-2 m-2 rounded-lg bg-white md:p-5">
                            <p className="font-poppins-light mb-3 leading-5">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nisl vitae, suspendisse vitae,
                                lorem suspendisse semper vel mattis.
                            </p>
                            <div className="flex flex-row space-x-2 h-10">
                                <img src={user} alt="" />
                                <p className="font-poppins-semibold w-auto text-center h-fit my-auto grow text-sm">
                                    Swoyam Siddharth
                                </p>
                                <p className="font-poppins-bold w-fit text-center h-fit my-auto text-sm">
                                    4.5
                                </p>
                                <img className="w-32" src={rating} alt="" />
                            </div>
                        </div>

                        <div className="p-2 m-2 rounded-lg bg-white md:p-5">
                            <p className="font-poppins-light mb-3 leading-5">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nisl vitae, suspendisse vitae,
                                lorem suspendisse semper vel mattis.
                            </p>
                            <div className="flex flex-row space-x-2 h-10">
                                <img src={user} alt="" />
                                <p className="font-poppins-semibold w-auto text-center h-fit my-auto grow text-sm">
                                    Swoyam Siddharth
                                </p>
                                <p className="font-poppins-bold w-fit text-center h-fit my-auto text-sm">
                                    4.5
                                </p>
                                <img className="w-32" src={rating} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <p className="w-fit font-poppins-semibold text-4xl mx-auto py-5">
                    Skills
                </p>
                <p className="w-4/5 font-poppins-regular text-center mb-8 text-base mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nisl vitae, suspendisse vitae, lorem suspendisse semper vel
                    mattis.
                </p>
                <div className="grid w-auto mx-10 grid-cols-3 md:grid-cols-5">
                    <img
                        className="p-4 bg-lightpurple rounded-xl drop-shadow-2xl h-20 mb-10 w-20 mx-auto"
                        src={html}
                        alt=""
                    />
                    <img
                        className="p-4 bg-lightpurple rounded-xl drop-shadow-2xl h-20 mb-10 w-20 mx-auto"
                        src={css}
                        alt=""
                    />
                    <img
                        className="p-4 bg-lightpurple rounded-xl drop-shadow-2xl h-20 mb-10 w-20 mx-auto"
                        src={figma}
                        alt=""
                    />
                    <img
                        className="p-4 bg-lightpurple rounded-xl drop-shadow-2xl h-20 mb-10 w-20 mx-auto"
                        src={illustrator}
                        alt=""
                    />
                    <img
                        className="p-4 bg-lightpurple rounded-xl drop-shadow-2xl h-20 mb-10 w-20 mx-auto"
                        src={photoshop}
                        alt=""
                    />
                    <img
                        className="p-4 bg-lightpurple rounded-xl drop-shadow-2xl h-20 mb-10 w-20 mx-auto"
                        src={github}
                        alt=""
                    />
                    <img
                        className="p-4 bg-lightpurple rounded-xl drop-shadow-2xl h-20 mb-10 w-20 mx-auto"
                        src={cprog}
                        alt=""
                    />
                    <img
                        className="p-4 bg-lightpurple rounded-xl drop-shadow-2xl h-20 mb-10 w-20 mx-auto"
                        src={cplus}
                        alt=""
                    />
                    <img
                        className="p-4 bg-lightpurple rounded-xl drop-shadow-2xl h-20 mb-10 w-20 mx-auto"
                        src={premiere}
                        alt=""
                    />
                    <img
                        className="p-4 bg-lightpurple rounded-xl drop-shadow-2xl h-20 mb-10 w-20 mx-auto"
                        src={aftereffects}
                        alt=""
                    />
                </div>

                {/* Interested in working with me */}
                <div className="flex flex-col mb-10 p-10 rounded-xl bg-darkpurple md:flex-row">
                    <p className="text-white font-poppins-bold text-2xl text-center mb-8 md:text-3xl md:font-poppins-semibold md:w-1/2 md:text-left md:mb-0">
                        Interested in Working with me
                    </p>
                    <button className="py-3 w-44 mx-auto bg-white text-darkpurple h-fit rounded-md font-poppins-bold md:mr-0 md:ml-auto md:my-auto">
                        Email Me
                    </button>
                </div>

                {/* Blogs */}
                <div className="flex flex-row px-5">
                    <p className="w-fit font-poppins-semibold text-4xl mr-auto py-10">
                        Blog
                    </p>
                    <p className="w-fit font-poppins-light text-2xl ml-auto py-10">
                        See More
                    </p>
                </div>
                <div className="grid mx-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                    <div className="flex flex-col p-4 bg-white rounded-md space-y-3 mb-5 mx-2 md:pt-10">
                        <img className="max-h-44" src={blog} alt="" />
                        <p className="font-poppins-medium w-full text-center">
                            Lorem, ipsum dolor.
                        </p>
                        <p className="font-poppins-light w-full px-0 text-center leading-5 lg:px-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit amet{" "}
                        </p>
                    </div>
                    <div className="flex flex-col p-4 bg-white rounded-md space-y-3 mb-5 mx-2 md:pt-10">
                        <img className="max-h-44" src={blog} alt="" />
                        <p className="font-poppins-medium w-full text-center">
                            Lorem, ipsum dolor.
                        </p>
                        <p className="font-poppins-light w-full px-0 text-center leading-5 lg:px-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit amet{" "}
                        </p>
                    </div>
                    <div className="flex flex-col p-4 bg-white rounded-md space-y-3 mb-5 mx-2 md:pt-10">
                        <img className="max-h-44" src={blog} alt="" />
                        <p className="font-poppins-medium w-full text-center">
                            Lorem, ipsum dolor.
                        </p>
                        <p className="font-poppins-light w-full px-0 text-center leading-5 lg:px-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit amet{" "}
                        </p>
                    </div>
                    <div className="flex flex-col p-4 bg-white rounded-md space-y-3 mb-5 mx-2 md:pt-10">
                        <img className="max-h-44" src={blog} alt="" />
                        <p className="font-poppins-medium w-full text-center">
                            Lorem, ipsum dolor.
                        </p>
                        <p className="font-poppins-light w-full px-0 text-center leading-5 lg:px-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit amet{" "}
                        </p>
                    </div>
                </div>
            </div>
            <footer className="bg-lightgray py-12 flex-col flex space-y-3 md:flex-row md:space-y-0 md:px-16">
                    <div className="flex flex-row mx-auto md:w-1/3">
                        <img className="mr-1" src={mail} alt="" />
                        <p className="font-poppins-regular">
                            b221042@iiit-bh.ac.in
                        </p>
                    </div>
                    <p className="w-full text-center font-poppins-regular md:w-1/3">
                        © Copyright 2022 | Prince
                    </p>
                    <div className="flex flex-row space-x-5 mx-auto md:w-1/3 ml-auto">
                        <img className=" h-5 md:ml-auto" src={instagram1} alt="" />
                        <img className=" h-5 " src={telegram2} alt="" />
                    </div>
                </footer>
        </>
    );
}

export default App;
