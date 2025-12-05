import {useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router";

const Form = styled.form`
    display: flex;
    gap: 10px;
    width: 100%;
`;
const Input = styled.input`
    flex: 1;
    padding: 12px;border-radius: 8px;border: 1px solid #ccc;
`;
const Button = styled.button`
    padding: 12px;border: none;background-color: #000;
    color: #fff;
    border-radius: 8px;
`;

function SearchBar() {

    const [keyword, setKeyword] = useState("");

    //사용자 이동에 관련된 사항은 먼저, uN()를 실행하여 만들어진 결과를
    // 변수에 넣어서 그걸 이용해야 함
    const navigate = useNavigate()

    return <Form onSubmit={(e) => {
        e.preventDefault();
        navigate(`/search?keyword=${keyword}`);
    }}>
        <Input
            placeholder={"책 제목, 저자 등 검색"}
            onChange={(e) => setKeyword(e.target.value)}
            />
        <Button>검색</Button>

    </Form>
}

export default SearchBar;