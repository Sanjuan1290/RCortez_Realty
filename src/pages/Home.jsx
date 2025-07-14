import Intro from "../components/HomeComponents/Intro"
import LatestListing from "../components/HomeComponents/LatestListing"

export default function Home(){

    return(
        <main className="homepage">

            <Intro />
            <LatestListing />
        
        </main>
    )
}