import Banner from "../Components/Banner";
import Books from "../Components/Books";
import NavBar from "../Components/NavBar";

 

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
             <Banner></Banner>
             <Books></Books>
        </div>
    );
};

export default Home;