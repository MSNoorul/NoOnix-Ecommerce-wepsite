import Banner from "../components/Banner"
import Body from "../components/Body"
import Footer from "../components/Footer"
import FooterBan from "../components/FooterBanner"
import Navbar from "../components/Navbar"
import Notify from "../components/Notify"
import { useAppContext } from "../context/appcontext"
function Home() {
    const {notify} = useAppContext()
    return ( <>
    <Navbar/>
    {notify && <Notify/>}
    <Banner/>
    <Body/>
    <FooterBan/>
    <Footer/>
    </> );
}

export default Home;