import Image from "next/image";
import Logo from "../../public/images/logo.webp";
import Link from "next/link";
import tezos from "../../public/images/tezos.webp";

const Footer = () => {
  return (
    <div className="container p-8 mx-auto xl:px-0 max-w-5xl text-white font-medium mt-5">
      <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-trueGray-700 lg:grid-cols-5">
        <div className="lg:col-span-2 flex flex-col sm:flex-row justify-between align-center">
          {/* GRID 1 */}
          <div>
            <Link className="flex items-center space-x-2 text-2xl font-medium  text-gray-100" href="/">
              <Image priority={true} src={Logo} alt="Etherlink logo" width={"32"} height={"30"} />
              <span>Etherlink</span>
            </Link>
          </div>

          {/* GRID 2 */}
          <Link
            href="https://tezos.com"
            target="_blank"
            rel="noopener"
            className="relative block w-44 mt-4 sm:mt-0 text-white"
          >
            Powered by
            <Image priority={true} src={tezos} alt="Powered by Tezos" width={"106"} height={"37"} />
          </Link>
        </div>

        {/* GRID 3 */}

        <div className="flex flex-col gap-4 w-full -mt-2 -ml-3 lg:ml-0">
          <div>
            <Link
              className="w-full px-4 py-2 rounded-md text-gray-300 hover:text-darkGreen"
              target="_blank"
              rel="noopener noreferrer"
              href="https://spotlight.tezos.com"
            >
              Spotlight
            </Link>
          </div>
          <div>
            <Link
              className="w-full px-4 py-2 rounded-md text-gray-300 hover:text-darkGreen"
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.etherlink.com"
            >
              Documentation
            </Link>
          </div>
          <Link
            className="w-full px-4 py-2 rounded-md text-gray-300 hover:text-darkGreen"
            target="_blank"
            rel="noopener noreferrer"
            href="https://tinyurl.com/etherlinkbrandassets"
          >
            Brand Assets
          </Link>
        </div>

        {/* GRID 4 */}
        <div></div>

        {/* GRID 5 */}
        <div className="flex flex-col justify-center">
          <p className="text-white font-medium">Join the Community</p>
          <div className="flex mt-5 space-x-5 text-gray-500 items-center">
            <Link href="https://x.com/etherlinkcom" target="_blank" rel="noopener">
              <span className="sr-only hover:fill-darkGreen">X</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 18 18"
                fill="currentColor"
                className="hover:fill-darkGreen"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"></path>
              </svg>
            </Link>
            <Link href="https://discord.gg/etherlink" target="_blank" rel="noopener">
              <span className="sr-only">Discord</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="37"
                viewBox="0 0 18 18"
                fill="currentColor"
                className="hover:fill-darkGreen"
              >
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
              </svg>
            </Link>
            <Link href="https://t.me/etherlinkcom" target="_blank" rel="noopener">
              <span className="sr-only">Telegram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 18 18"
                fill="currentColor"
                className="hover:fill-darkGreen mt-1"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
              </svg>
            </Link>
            <Link href="https://github.com/etherlinkcom" target="_blank" rel="noopener" className="mb-1">
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="hover:fill-darkGreen"
              >
                <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="my-10 text-sm text-center text-gray-400">
        © Copyright Tezos Foundation 2023. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
