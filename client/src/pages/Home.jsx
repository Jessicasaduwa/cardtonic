import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <main className="bg-white w-full mx-auto mb-8">
        <section className="relative">
          <div className="absolute flex w-full h-screen ">
            <div className="w-1/2 flex items-center">
              <div className="blur-lg bg-gradient-to-bl from-white via-[#ffe7d1]/50 via-80% to-white h-full md:h-[26rem] lg:h-[30rem] w-full sm:ml-1 sm:mr-1 md:ml-2 md:mr-2 lg:ml-4 lg:mr-8 xl:ml-8 xl:mr-64"></div>
            </div>
            <div className="w-1/2 flex items-center">
              <div className="blur-lg bg-gradient-to-tl from-white via-[#dfe1fb]/50 via-80% to-white h-full md:h-[26rem] lg:h-[30rem] w-full sm:ml-1 sm:mr-1 md:mr-2 md:ml-2 lg:mr-4 lg:ml-8 xl:mr-8 xl:ml-64"></div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-10 opacity-95">
            <div className="bg-white shadow-md h-8 w-72 mt-10 flex justify-between items-center space-x-4 rounded-2xl pl-4">
              <p className="text-sm w-[14rem] items-center font-light text-center">
                Try our Gift Card Developer API
              </p>
              <div className="w-8 h-8 bg-[#7580ef] rounded-full flex items-center justify-center overflow-visible">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="#ffffff"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </div>
            </div>
            <div className="text-center flex flex-col gap-8 my-6 md:my-3">
              <h1 className="text-4xl md:text-7xl font-medium leading-tight md:leading-snug">
                Explore gift cards <br className="flex md:hidden" /> and{" "}
                <br className="hidden md:flex lg:hidden" />{" "}
                <span className="text-[#7580ef]">
                  digital <br className="flex md:hidden lg:flex" /> payment{" "}
                  <br className="hidden md:flex lg:hidden" /> solutions
                </span>
              </h1>
              <p className="mx-4 font-light text-2xl">
                Cardtonic is the best platform to buy{" "}
                <br className="flex md:hidden" /> and sell gift cards, pay{" "}
                <br className="hidden md:flex" /> bills, buy{" "}
                <br className="flex md:hidden" /> gadgets and get virtual dollar
                cards.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <button className="w-[20rem] h-20 bg-[#7580ef] hover:bg-[#002343] text-white rounded-full flex md:hidden items-center justify-center gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path>
                </svg>
                Web Sign Up
              </button>
              <button className="flex md:hidden w-[20rem] h-20 bg-[#00cdde] hover:bg-[#7480ee] rounded-full items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M11.6734 7.22198C10.7974 7.22198 9.44138 6.22598 8.01338 6.26198C6.12938 6.28598 4.40138 7.35397 3.42938 9.04597C1.47338 12.442 2.92538 17.458 4.83338 20.218C5.76938 21.562 6.87338 23.074 8.33738 23.026C9.74138 22.966 10.2694 22.114 11.9734 22.114C13.6654 22.114 14.1454 23.026 15.6334 22.99C17.1454 22.966 18.1054 21.622 19.0294 20.266C20.0974 18.706 20.5414 17.194 20.5654 17.11C20.5294 17.098 17.6254 15.982 17.5894 12.622C17.5654 9.81397 19.8814 8.46998 19.9894 8.40998C18.6694 6.47798 16.6414 6.26198 15.9334 6.21398C14.0854 6.06998 12.5374 7.22198 11.6734 7.22198ZM14.7934 4.38998C15.5734 3.45398 16.0894 2.14598 15.9454 0.849976C14.8294 0.897976 13.4854 1.59398 12.6814 2.52998C11.9614 3.35798 11.3374 4.68998 11.5054 5.96198C12.7414 6.05798 14.0134 5.32598 14.7934 4.38998Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M3.60972 1.81396L13.793 12L3.61082 22.1864C3.41776 22.1048 3.24866 21.962 3.13555 21.7667C3.0474 21.6144 3.00098 21.4416 3.00098 21.2656V2.73453C3.00098 2.32109 3.25188 1.96625 3.60972 1.81396ZM14.5 12.707L16.802 15.009L5.86498 21.342L14.5 12.707ZM17.699 9.50896L20.5061 11.1347C20.9841 11.4114 21.1473 12.0232 20.8705 12.5011C20.783 12.6523 20.6574 12.778 20.5061 12.8655L17.698 14.491L15.207 12L17.699 9.50896ZM5.86498 2.65796L16.803 8.98996L14.5 11.293L5.86498 2.65796Z"></path>
                </svg>
                Download the App
              </button>
              <button className="hidden md:flex items-center justify-center w-[26rem] text-white text-xl font-medium h-28 bg-[#002343] hover:bg-[#7480ee] rounded-full">
                Get Started
              </button>
            </div>
          </div>
        </section>

        <section className="mt-8 mb-28 flex justify-center">
          <div className="w-[20rem] md:w-[670px] xl:w-[70rem] ">
            <iframe
              className="rounded-3xl md:w-full md:h-[27.7rem]"
              width="320"
              height="250"
              src="https://www.youtube.com/embed/OtLB2-Qm6KA?si=lguhZKPbCWceRovh"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </section>

        {/*Gift  Cards */}
        <section className="flex flex-col items-center mt-10">
          <div>
            <h1 className="text-[#d5e1df] text-bold text-4xl md:text-6xl mb-10 font-medium">
              Gift Cards
            </h1>
            {/* First Gift Cards */}
            <div className="w-[20rem] md:w-[670px] xl:w-[70rem] xl:h-[40rem] bg-[#e6f9fd] rounded-3xl flex flex-col xl:flex-row justify-between xl:px-10 xl:gap-x-10 xl:relative ">
              <div className="flex flex-col px-5 md:px-16 xl:px-10 pt-7 md:p-16 xl:absolute space-y-5">
                <div className="space-y-4">
                  <h1 className="text-4xl xl:text-5xl font-semibold">
                    Sell Gift Cards
                  </h1>
                  <p className="text-xl xl:text-2xl">
                    Instantly convert the gift cards you don't need to cash.
                  </p>
                </div>
                <div className="flex text-[#6d75c6] text-xl xl:text-2xl space-x-1">
                  <p>Explore sell</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="28"
                    fill="currentColor"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </div>
              </div>
              <img
                src="/sell-card.webp"
                alt=""
                className=" xl:absolute top-[8rem] left-[25rem] xl:max-w-2xl"
              />
            </div>
            {/* Second Gift Cards */}
            <div className="w-[20rem] md:w-[670px] xl:w-[70rem] xl:h-[40rem] bg-[#e6f9fd] rounded-3xl my-7 flex flex-col xl:flex-row justify-between xl:px-10 xl:gap-x-10 xl:relative ">
              <div className="flex flex-col px-5 md:px-16 xl:px-10 pt-7 md:p-16 xl:absolute xl:w-1/2 space-y-5">
                <div className="space-y-4">
                  <h1 className="text-4xl xl:text-5xl font-semibold">
                    Buy Gift Cards
                  </h1>
                  <p className="text-xl xl:text-[22px]">
                    Easily buy from our catalogue of 14,000+ local and
                    international gift cards.
                  </p>
                </div>
                <div className="flex text-[#6d75c6] text-xl xl:text-[22px] space-x-1">
                  <p>Explore buy</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="28"
                    fill="currentColor"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </div>
              </div>
              <img
                src="/buy-card.webp"
                alt=""
                className="xl:absolute top-[2rem] left-[14rem] xl:max-w-4xl "
              />
            </div>
          </div>
        </section>

        {/* Product Cards */}
        <section className="flex flex-col justify-center items-center mt-20">
          <div>
            <h1 className="text-[#d5e1df] text-bold text-4xl md:text-6xl mb-6 font-medium xl:w-[70rem] xl:justify-self-center">
              Products
            </h1>
            <div className="xl:flex xl:flex-wrap justify-center">
              {/* First Products Card */}
              <div className="w-[20rem] md:w-[670px] xl:w-[70rem]  bg-[#022a4e] rounded-3xl flex flex-col xl:flex-row justify-between xl:px-10 xl:gap-x-10">
                <div className="flex flex-col px-5 md:px-16 xl:px-10 pt-7 md:p-16">
                  <div className="space-y-4">
                    <h1 className="text-xl xl:text-4xl font-semibold text-white">
                      Just Gadgets
                    </h1>
                    <p className="text-slate-200 text-xl xl:text-[22px]">
                      Shop authentic and affordable tech gadgets with just a few
                      clicks.
                    </p>
                    <div className="flex text-[#16cad6] text-xl xl:text-[22px] space-x-1">
                      <p>Explore gadgets</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="28"
                        fill="currentColor"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/smartphone.webp"
                    alt=""
                    className="xl:max-w-lg xl:w-full"
                  />
                </div>
              </div>
              <div className="xl:w-[70rem] xl:flex gap-6">
                {/* Second Products Card */}
                <div className="w-[20rem] md:w-[670px] xl:w-[36.5rem] bg-[#feede6] rounded-3xl px-5 md:px-16 py-7 md:p-16 my-7">
                  <div className="flex flex-col gap-8">
                    <div className="space-y-4">
                      <h1 className="text-2xl md:text-4xl font-semibold">
                        Virtual Dollar Card
                      </h1>
                      <p className="text-2xl">
                        Shop online and make international purchases with our
                        virtual dollar card.
                      </p>
                    </div>
                    <div className="flex text-[#6d75c6] text-xl space-x-1">
                      <p>Explore cards</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="28"
                        fill="currentColor"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                    </div>
                    <div className="flex justify-center">
                      <img
                        src="/credit-cards.webp"
                        alt=""
                        className="w-[500px]"
                      />
                    </div>
                  </div>
                </div>
                {/* Third Products Card */}
                <div className="w-[20rem] md:w-[670px] xl:w-[36.5rem] bg-[#ece5fc] rounded-3xl px-5 md:px-16 py-7 md:p-16 my-7">
                  <div className="flex flex-col gap-8">
                    <div className="space-y-4">
                      <h1 className="text-2xl md:text-4xl font-semibold">
                        Bill Payments
                      </h1>
                      <p className="text-2xl">
                        Organise and pay all your utility bills easily and
                        seamlessly.
                      </p>
                    </div>
                    <div className="flex text-[#6d75c6] text-xl space-x-1">
                      <p>Explore bills</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="28"
                        fill="currentColor"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                    </div>
                    <div className="flex justify-center">
                      <img src="/bills.webp" alt="" className="w-[500px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimnoial & News */}
        <section className="flex flex-col justify-center">
          <div className="flex flex-col items-center gap-3 mt-10 overflow-hidden ">
            <h1 className="text-[#d5e1df] w-[20rem] md:w-[670px] xl:w-[70rem] xl:justify-self-center text-bold text-4xl md:text-6xl mb-6">
              Testimonial & <br /> News
            </h1>
            <div className="md:animate-scroll-left flex flex-shrink gap-4">
              <div className="w-[20rem] bg-[#f8f8f8] rounded-3xl px-5 pt-3 pb-6 flex flex-col flex-shrink space-between gap-8">
                <div>
                  <ImQuotesLeft color="#7383e0" size={24} />
                </div>
                <div className="space-y-28">
                  <h1>
                    Cardtonic is fast, reliable, and doesn't delay transactions.
                  </h1>
                  <div>
                    <div>
                      <div>@handle</div>
                      <div>social app</div>
                    </div>
                    <div>icon</div>
                  </div>
                </div>
              </div>
              <div className="w-[20rem] bg-[#f8f8f8] rounded-3xl px-5 pt-3 pb-6 hidden md:flex flex-col flex-shrink space-between gap-8">
                <div>
                  <ImQuotesLeft color="#7383e0" size={24} />
                </div>
                <div className="space-y-28">
                  <h1>
                    Cardtonic is fast, reliable, and doesn't delay transactions.
                  </h1>
                  <div>
                    <div>
                      <div>@handle</div>
                      <div>social app</div>
                    </div>
                    <div>icon</div>
                  </div>
                </div>
              </div>
              <div className="w-[20rem] bg-[#f8f8f8] rounded-3xl px-5 pt-3 pb-6 hidden md:flex flex-col flex-shrink space-between gap-8">
                <div>
                  <ImQuotesLeft color="#7383e0" size={24} />
                </div>
                <div className="space-y-28">
                  <h1>
                    Cardtonic is fast, reliable, and doesn't delay transactions.
                  </h1>
                  <div>
                    <div>
                      <div>@handle</div>
                      <div>social app</div>
                    </div>
                    <div>icon</div>
                  </div>
                </div>
              </div>
              <div className="w-[20rem] bg-[#f8f8f8] rounded-3xl px-5 pt-3 pb-6 hidden md:flex flex-col flex-shrink space-between gap-8">
                <div>
                  <ImQuotesLeft color="#7383e0" size={24} />
                </div>
                <div className="space-y-28">
                  <h1>
                    Cardtonic is fast, reliable, and doesn't delay transactions.
                  </h1>
                  <div>
                    <div>
                      <div>@handle</div>
                      <div>social app</div>
                    </div>
                    <div>icon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:hidden justify-center mt-2">
            <div className="w-[20rem] flex justify-end space-x-2">
              <div className="bg-blue-500 w-9 h-9 rounded-full flex items-center justify-center">
                <FaArrowLeftLong />
              </div>
              <div className="bg-blue-500 w-9 h-9 rounded-full flex items-center justify-center">
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </section>

        {/* Newspapers */}
        <section className="flex flex-col items-center my-20">
          <div className="flex flex-wrap justify-center items-center w-[250px] md:w-[380px] lg:w-[670px] xl:w-[70rem] gap-[2.5rem] xl:gap-[3.7rem]">
            <div>
              <img
                src="/Punch_logo.svg.png"
                alt=""
                className="w-[75px] md:w-[80px] xl:w-[160px]"
              />
            </div>
            <div>
              <img
                src="/Naijaloaded.webp"
                alt=""
                className="w-[105px] md:w-[115px] xl:w-[180px]"
              />
            </div>
            <div>
              <img
                src="/pulse.png"
                alt=""
                className="w-[60px] md:w-[70px] xl:w-[150px]"
              />
            </div>
            <div>
              <img
                src="/Vanguard_Nigeria_logo.svg.png"
                alt=""
                className="w-[105px] md:w-[115px] xl:w-[180px]"
              />
            </div>
            <div>
              <img
                src="/Techpoint-Africa-Wordmark-Logo-Vector.svg-.png"
                alt=""
                className="w-[100px] md:w-[120px] xl:w-[200px]"
              />
            </div>
          </div>
        </section>
      </main>

      {/* footer section */}
      <footer>
        {/* footer image */}
        <section className="flex flex-col xl:flex-row my-12 xl:w-full">
          <img src="/footerImage.webp" alt="" className="xl:w-1/2" />

          <div className="bg-[#f8f8f9] py-8 xl:w-1/2">
            <div className="mx-6 space-y-5 xl:space-y-8 xl:mt-10 w-[22rem] md:w-[670px] text-[#0b2d4c] flex flex-col justify-self-center items-center">
              <h1 className="text-4xl lg:text-5xl font-medium">
                Download the App
              </h1>
              <p className="w-[26rem] font-light text-center text-lg lg:text-xl">
                Experience the best of Cardtonic on your phone or tablet.
                Available for iOS and Andriod operating systems.
              </p>
              <div className="flex flex-col gap-4">
                <button className="flex items-center w-[26rem] justify-center h-28 gap-3 bg-black text-white rounded-full text-lg lg:text-xl">
                  <FaApple size={30} />
                  Get on iPhone
                </button>
                <button className="flex items-center w-[26rem] justify-center h-28 gap-3 bg-[#01983e] text-white rounded-full text-lg lg:text-xl">
                  <FaGooglePlay size={30} />
                  Get on Android
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section>
          <div className="flex md:hidden flex-col w-[22rem] justify-self-center text-[#0b2d4c]">
            <div className="h-24 border-b flex items-center justify-between">
              <p>Features</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
              </svg>
            </div>
            <div className="h-24 border-b flex items-center justify-between">
              <p>Products</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
              </svg>
            </div>
            <div className="h-24 border-b flex items-center justify-between">
              <p>Available Gift Cards</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
              </svg>
            </div>
            <div className="h-24 border-b flex items-center justify-between">
              <p>Resources</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
              </svg>
            </div>
            <div className="h-24 border-b flex items-center justify-between">
              <p>Company</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
              </svg>
            </div>
            <div className="h-24 border-b flex items-center justify-between">
              <p>Connect</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
              </svg>
            </div>
            <div className="h-24 border-b flex items-center justify-between">
              <p>Social</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
              </svg>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 xl:flex xl:gap-x-9 gap-y-28 w-[32rem] xl:w-lvw xl:justify-center justify-self-center text-[#0b2d4c] text-lg mb-20 font-light ">
            <div className="flex flex-col gap-[2.5rem] items-start">
              <p className="font-medium">Features</p>
              <a href="">Buy Gift Cards</a>
              <a href="">Sell Gift Cards</a>
              <a href="">Just Gadgets</a>
              <a href="">Dollar Card</a>
              <a href="">Bill Payments</a>
              <a href="">Bank Account</a>
            </div>
            <div className="flex flex-col gap-[2.5rem] items-start pl-10 xl:p-0">
              <p className="font-medium">Products</p>
              <a href="">Airtime</a>
              <a href="">Data</a>
              <a href="">Electricity</a>
              <a href="">TV Subscription</a>
              <a href="">Apple</a>
              <a href="">Samsung</a>
              <a href="">Laptop</a>
              <a href="">Playstation</a>
              <a href="">Betting</a>
            </div>
            <div className="flex flex-col gap-[2.5rem] items-start">
              <p className="font-medium">Available Gift Cards</p>
              <a href="">Travel Gift Cards</a>
              <a href="">Lifestyle Gift Cards</a>
              <a href="">Music Gift Cards</a>
              <a href="">Supermarket Gift Cards</a>
              <a href="">Gaming Gift Cards</a>
              <a href="">Streaming Gift Cards</a>
            </div>
            <div className="flex flex-col gap-[2.5rem] items-start pl-10 xl:p-0">
              <p className="font-medium">Resources</p>
              <a href="">Ghanaians</a>
              <a href="">Blog</a>
              <a href="">Rewards</a>
              <a href="">Gift Card Rates</a>
              <a href="">Developer API</a>
            </div>
            <div className="flex flex-col gap-[2.5rem] items-start">
              <p className="font-medium">Company</p>
              <a href="">Partners</a>
              <a href="">#CTGivesBack</a>
              <a href="">Upskill</a>
              <a href="">Privacy Policy</a>
              <a href="">Terms of Use</a>
            </div>
            <div className="flex flex-col gap-[2.5rem] items-start pl-10 xl:p-0">
              <p className="font-medium">Connect</p>
              <a href="">Get In Touch</a>
              <a href="">support@cardtonic.com</a>
              <a href="">+234 (0) 1 343 0626</a>
              <a href="">+234 (0) 706 050 2770</a>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-[#f8f8f9] h-24 flex items-center justify-between text-[#0b2d4c]">
            <h1 className="xl:w-1/3 w-full flex items-center justify-center">
              © AJCardtonic 2024
            </h1>
            <div className="hidden lg:flex gap-[2rem] items-center justify-center xl:w-2/3 mx-10">
              <a href="">X</a>
              <a href="">Facebook</a>
              <a href="">Whatsapp</a>
              <a href="">Instagram</a>
              <a href="">Threads</a>
              <a href="">TikTok</a>
              <a href="">LinkedIn</a>
              <a href="">Telegram</a>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Home;
