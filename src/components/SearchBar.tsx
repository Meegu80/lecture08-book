import {useState} from "react";
import styled from "styled-components";

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


    return <Form>
        <Input placeholder={"책 제목, 저자 등 검색"}/>
        <Button>검색</Button>

    </Form>
}

export default SearchBar;