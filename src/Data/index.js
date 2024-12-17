import PersonalInfo from "../components/PersonalInfo/PersonalInfo";
import HomePage from "../components/HomePage/Home";
import Videos from "../components/Videos/Videos";
import Images from "../components/Images/Images";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";

const GET_TABS = [

    {
        text: "Home",
        comp: <HomePage />,
        path: "/users",
        icon: (
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg>

        ),
        isBordered: true,
    },
    {
        text: "Videos",
        comp: <Videos />,
        path: "/users",
        icon: (
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M 3.71875 2.28125 L 2.28125 3.71875 L 28.28125 29.71875 L 29.71875 28.28125 L 24 22.5625 L 24 20.625 L 30 23.625 L 30 8.375 L 24 11.375 L 24 8 L 9.4375 8 Z M 2 8 L 2 24 L 20 24 L 18 22 L 4 22 L 4 10 L 6 10 L 4 8 Z M 11.4375 10 L 22 10 L 22 20.5625 Z M 28 11.625 L 28 20.375 L 24 18.375 L 24 13.625 Z"></path></svg>
        ),
        isBordered: true,
    },
    {
        text: "Images",
        comp: <Images />,
        path: "/users",
        icon: (
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path></svg>
        ),
        isBordered: true,
    },
    {
        text: "About Us",
        comp: <AboutUs />,
        path: "/users",
        icon: (
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 9h-8a5 5 0 1 0 -5 5v7"></path><path d="M17 5l4 4l-4 4"></path></svg>
        ),
        isBordered: true,
    },
    {
        text: "Contact Us",
        comp: <ContactUs />,
        path: "/users",
        icon: (
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C148.5 48 60.1 129.5 49.2 234.1c-.8 7.2-1.2 14.5-1.2 21.9 0 7.4.4 14.7 1.2 21.9C60.1 382.5 148.5 464 256 464c114.9 0 208-93.1 208-208S370.9 48 256 48zm135.8 326.1c-22.7-8.6-59.5-21.2-82.4-28-2.4-.7-2.7-.9-2.7-10.7 0-8.1 3.3-16.3 6.6-23.3 3.6-7.5 7.7-20.2 9.2-31.6 4.2-4.9 10-14.5 13.6-32.9 3.2-16.2 1.7-22.1-.4-27.6-.2-.6-.5-1.2-.6-1.7-.8-3.8.3-23.5 3.1-38.8 1.9-10.5-.5-32.8-14.9-51.3-9.1-11.7-26.6-26-58.5-28h-17.5c-31.4 2-48.8 16.3-58 28-14.5 18.5-16.9 40.8-15 51.3 2.8 15.3 3.9 35 3.1 38.8-.2.7-.4 1.2-.6 1.8-2.1 5.5-3.7 11.4-.4 27.6 3.7 18.4 9.4 28 13.6 32.9 1.5 11.4 5.7 24 9.2 31.6 2.6 5.5 3.8 13 3.8 23.6 0 9.9-.4 10-2.6 10.7-23.7 7-58.9 19.4-80 27.8C91.6 341.4 76 299.9 76 256c0-48.1 18.7-93.3 52.7-127.3S207.9 76 256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256c0 43.9-15.6 85.4-44.2 118.1z"></path></svg>
        ),
        isBordered: true,
    },
    {
        text: "personal Info",
        comp: <PersonalInfo />,
        path: "/users",
        icon: (
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M235.4 172.2c0-11.4 9.3-19.9 20.5-19.9 11.4 0 20.7 8.5 20.7 19.9s-9.3 20-20.7 20c-11.2 0-20.5-8.6-20.5-20zm1.4 35.7H275V352h-38.2V207.9z"></path><path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path></svg>
        ),
        isBordered: true,
    },
];

const GET_DASHBOARD_Details = [
    {
        type: "Earning",
        money: "$204.01",
        growth: "37.8%",
        bg: "bg-[#deffee]",
        color: "text-[#0baf56]",
        icon: (
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z"></path>
            </svg>
        ),
    },
    {
        type: "Order",
        money: "$2.4",
        growth: "37.8%",
        bg: "bg-[#e7dbff]",
        color: "text-[#a000ff]",
        icon: (
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="none"
                    stroke-width="2"
                    d="M6,16 L16,16 L6,16 L6,16 Z M6,12 L18,12 L6,12 L6,12 Z M6,8 L11,8 L6,8 L6,8 Z M14,1 L14,8 L21,8 M3,23 L3,1 L15,1 L21,7 L21,23 L3,23 Z"
                ></path>
            </svg>
        ),
    },
    {
        type: "Balance",
        money: "$54.00",
        growth: "37.8%",
        bg: "bg-[#cdf3ff]",
        color: "text-[#0457be]",
        icon: (
            <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
            </svg>
        ),
    },
    {
        type: "total sales",
        money: "$1.025",
        growth: "37.8%",
        bg: "bg-[#feb0d8]",
        color: "text-[#d8000e]",
        icon: (
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                ></path>
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path>
            </svg>
        ),
    },
];

const GET_POL_DATA = [
    {
        percent: "h-[30%]",
        month: "jan",
    },
    {
        percent: "h-[100%]",
        month: "feb",
    },
    {
        percent: "h-[70%]",
        month: "mar",
    },
    {
        percent: "h-[50%]",
        month: "apr",
    },
    {
        percent: "h-[40%]",
        month: "may",
    },
    {
        percent: "h-[42%]",
        month: "jun",
    },
    {
        percent: "h-[90%]",
        month: "jul",
    },
    {
        percent: "h-[68%]",
        month: "aug",
    },
    {
        percent: "h-[100%]",
        month: "sep",
    },
    {
        percent: "h-[36%]",
        month: "oct",
    },
    {
        percent: "h-[90%]",
        month: "nov",
    },
    {
        percent: "h-[67%]",
        month: "des",
    },
];

const GET_TABLE_DATA = [
    {
        name: "Abstract 3D",
        des: "Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur.",
        image:
            "https://img.freepik.com/free-vector/spirulina-isometric-set-with-images-medical-products-made-with-cyanobacteria-3d_1284-59595.jpg?w=900&t=st=1697259416~exp=1697260016~hmac=b5bb59eb9ef9a471e1e785d5f6bbb3b2ed22b06c2b4d8b4fd7fd26c267b4be60",
        stock: "32 in stock",
        price: "$ 7414.12",
        sales: "20",
    },
    {
        name: "Sarphens Illustration",
        des: "Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur.",
        image:
            "https://img.freepik.com/free-vector/alternative-medicine-concept-illustration_114360-18094.jpg?w=740&t=st=1697260019~exp=1697260619~hmac=6b66c9e7d703b3f55d4d16fd237d1cd21e428cec1e9129254cfb7bd718a3c439",
        stock: "72 in stock",
        price: "$ 404.12",
        sales: "20",
    },
    {
        name: "Web Door",
        des: "Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur.",
        image:
            "https://img.freepik.com/free-vector/isometric-shopping-online-landing-page-template_23-2148527621.jpg?w=900&t=st=1697259984~exp=1697260584~hmac=592a70d1be65bf690f927d61f45082d143114d4c60ec0630b2048947d4ed353b",
        stock: "42 in stock",
        price: "$ 404.12",
        sales: "2000",
    },
    {
        name: "Stock Image",
        des: "Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur.",
        image:
            "https://img.freepik.com/free-vector/linear-vintage-vaporwave-background_23-2148893557.jpg?w=900&t=st=1697260074~exp=1697260674~hmac=5c1596f6e8d0720af5c28a26f0c7d339eaff42cd7492f6e3c79d0dbb25b952fe",
        stock: "3 in stock",
        price: "$ 404.12",
        sales: "410",
    },
    {
        name: "Sarphens Illustration",
        des: "Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur.",
        image:
            "https://img.freepik.com/free-vector/alternative-medicine-concept-illustration_114360-18094.jpg?w=740&t=st=1697260019~exp=1697260619~hmac=6b66c9e7d703b3f55d4d16fd237d1cd21e428cec1e9129254cfb7bd718a3c439",
        stock: "72 in stock",
        price: "$ 404.12",
        sales: "20",
    },
    {
        name: "Nature Pool",
        des: "Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur.",
        image:
            "https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?w=900&t=st=1697259953~exp=1697260553~hmac=05843afad5e4706afff6dc317560a6b2cd23e2dfdd1b96045f76c605a5a97180",
        stock: "32010 in stock",
        price: "$ 404.12",
        sales: "74120",
    },
    {
        name: "Web Door",
        des: "Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur.",
        image:
            "https://img.freepik.com/free-vector/isometric-shopping-online-landing-page-template_23-2148527621.jpg?w=900&t=st=1697259984~exp=1697260584~hmac=592a70d1be65bf690f927d61f45082d143114d4c60ec0630b2048947d4ed353b",
        stock: "42 in stock",
        price: "$ 404.12",
        sales: "2000",
    },
    {
        name: "Abstract 3D",
        des: "Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur.",
        image:
            "https://img.freepik.com/free-vector/spirulina-isometric-set-with-images-medical-products-made-with-cyanobacteria-3d_1284-59595.jpg?w=900&t=st=1697259416~exp=1697260016~hmac=b5bb59eb9ef9a471e1e785d5f6bbb3b2ed22b06c2b4d8b4fd7fd26c267b4be60",
        stock: "32 in stock",
        price: "$ 7414.12",
        sales: "20",
    },
    {
        name: "Abstract 3D",
        des: "Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur.",
        image:
            "https://img.freepik.com/free-vector/spirulina-isometric-set-with-images-medical-products-made-with-cyanobacteria-3d_1284-59595.jpg?w=900&t=st=1697259416~exp=1697260016~hmac=b5bb59eb9ef9a471e1e785d5f6bbb3b2ed22b06c2b4d8b4fd7fd26c267b4be60",
        stock: "32 in stock",
        price: "$ 7414.12",
        sales: "20",
    },
    {
        name: "Sarphens Illustration",
        des: "Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur.",
        image:
            "https://img.freepik.com/free-vector/alternative-medicine-concept-illustration_114360-18094.jpg?w=740&t=st=1697260019~exp=1697260619~hmac=6b66c9e7d703b3f55d4d16fd237d1cd21e428cec1e9129254cfb7bd718a3c439",
        stock: "72 in stock",
        price: "$ 404.12",
        sales: "20",
    },
    {
        name: "Web Door",
        des: "Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur.",
        image:
            "https://img.freepik.com/free-vector/isometric-shopping-online-landing-page-template_23-2148527621.jpg?w=900&t=st=1697259984~exp=1697260584~hmac=592a70d1be65bf690f927d61f45082d143114d4c60ec0630b2048947d4ed353b",
        stock: "42 in stock",
        price: "$ 404.12",
        sales: "2000",
    },
];

const GET_MOBILE_NAV = [
    {
        name: "home",
        icon: (
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z"></path>
            </svg>
        ),
        path: "/",
    },
    {
        name: "product",
        icon: (
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                ></path>
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path>
            </svg>
        ),
        path: "/",
    },
    {
        name: "dashboard",
        icon: (
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path>
            </svg>
        ),
        path: "/",
    },
    {
        name: "income",
        icon: (
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"></path>
            </svg>
        ),
        path: "/",
    },
    {
        name: "help",
        icon: (
            <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
        ),
        path: "/",
    },
];
export {
    GET_TABS,
    GET_DASHBOARD_Details,
    GET_POL_DATA,
    GET_TABLE_DATA,
    GET_MOBILE_NAV,
};