import styled from "styled-components";
import SearchBar from "../components/SearchBar.tsx";


const Wrapper = styled.div`
        width: 100vw;
        height: 100dvh;
        display: flex;
        justify-content: center;
        align-items: center;
    `;



function Home() {
    // const [loading, setLoading] = useState();
    // const [, set] = useState();


    return (

        <Wrapper>
            <div>
                <h2>Google Books 검색</h2>
                <SearchBar />

            </div>
        </Wrapper>
    );
}

export default Home;