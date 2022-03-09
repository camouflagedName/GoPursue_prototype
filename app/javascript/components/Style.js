
const logo = "icon_title-removebg.png"

const darkModeLogo = 'icon_title-removebg(dark).png'

const defaultStyle =
{
    darkMode: false,
    bgColor: "white",
    textColor: "black",
    boxColor: "white",
    boxBorder: "border-white",
    iconColor: "currentColor",
    logo: logo,
    profile: {
        icon: "bi-emoji-sunglasses-fill",
        color: "currentColor",
    },
}

const darkModeStyle =
{
    darkMode: true,
    bgColor: "#1f1a24",
    textColor: "lightgray",
    boxColor: "#121212",
    boxBorder: "border-dark",
    iconColor: "blue",
    logo: darkModeLogo,
    profile: {
        icon: "bi-emoji-sunglasses-fill",
        color: "lightgray",
    },
}


const Style = {
    logo,
    darkModeLogo,
    defaultStyle,
    darkModeStyle
}

export default Style;