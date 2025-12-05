import {useSearchParams} from "react-router";

function Search() {

    //queryString에서 값을 가져오는 건 useSearchParams()
        const [params] = useSearchParams();
        //params라고 가져온건, queryString 전체가 들어옴
    // 그 중 key가 "keyword"라고 들어온 것에 대한 값만 뽑아야 함.
    //대신 사용자가 주소를 그냥 /search라고 쳐서 들어오는 경우도 있을 수 있으므로
    // 그에 대한 처리를 논리합을 통해 처리
     const keyword = params.get("keyword")||"";



    return (

        <div>
서치
        </div>
    );
}

export default Search;