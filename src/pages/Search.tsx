import {Link, useSearchParams} from "react-router";
import {useEffect, useState} from "react";
import styled from "styled-components";

type BookItem = {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        description: string;
        imageLinks?: {
            thumbnail?: string;
            smallThumbnail?: string;
        }
    }
}
type ApiResponse = {
    items: BookItem[]
}
const Wrapper = styled.div`
    padding: 30px;
`;
const Item = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;border-radius: 80%;
    background-color: #fff;
    margin-bottom: 10px;
    border: 1px solid #ddd;
`;
const Cover = styled.div`
    width: 60px;
    height: 90px;
    border-radius: 4px;
`;

function Search() {

    //queryString에서 값을 가져오는 건 useSearchParams()
    const [params] = useSearchParams();
    //params라고 가져온건, queryString 전체가 들어옴
    // 그 중 key가 "keyword"라고 들어온 것에 대한 값만 뽑아야 함.
    //대신 사용자가 주소를 그냥 /search라고 쳐서 들어오는 경우도 있을 수 있으므로
    // 그에 대한 처리를 논리합을 통해 처리
    const keyword = params.get("keyword") || "";

    const [list, setList] = useState<BookItem[]>([]);

    useEffect(() => {
        if (!keyword) return;
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=20`)
            .then(res => res.json())
            .then((data: ApiResponse) => {
                setList(data.items);
            })
    }, []);

    return (
        <Wrapper>
            <h3>
                검색결과 : {keyword}
            </h3>
            {list.map((item, index) => {
                return (
                    <Item to={`/detail/${item.id}`} key={index}>
                        <img
                            src={item.volumeInfo.imageLinks?.smallThumbnail || ""}/>
                        <div>
                            {item.volumeInfo.title}
                        </div>
                        <div style={{
                            fontSize: 12, color: "#555"
                        }}>
                            {item.volumeInfo.authors}
                        </div>
                    </Item>
                )
            })}
            <div>
                각각의 책 정보
            </div>
        </Wrapper>
    );
}

export default Search;