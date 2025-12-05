import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import type {BookItem} from "./Search.tsx";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 30px;
`;
const BackButton = styled.button`
    display: flex;
    align-items: center;
    padding: 8px 14px;
    border-radius: 6px;
    border: 1px solid #ccc;
    background-color: #f3f3f3;
    color:#333;

`;

function Detail() {

    const {id} = useParams();
    const [book, setBook] = useState<BookItem | null>(null);
    const navigate = useNavigate();

    useEffect(() => {

        fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then((res) => res.json())
            .then((data: BookItem) => {
                setBook(data);
            })
    }, [id]);

    if(!book){
        return <Wrapper>Loading...</Wrapper>
    }

    return (
        <Wrapper>
            <BackButton onClick={() => {
                navigate(-1);
            }}>&larr; 뒤로가기</BackButton>
            <h2>{book.volumeInfo.title}</h2>
            <img src={book.volumeInfo.imageLinks?.smallThumbnail || ""} />
            <p>{book.volumeInfo.authors}</p>
            <p>{book.volumeInfo.description || "설명없슴"}</p>
        </Wrapper>
    );
}

export default Detail;