import {React,useState,useEffect} from "react";
import './ListBox.css';
import data from '../../../db.json';
import ArticleRaw from "./article-raw";
import ModalPage from "./modal";
import Pagination from "../../pagination";
import myScrapApi from '../../../apis/myScrap'

const ListBox = ({category}) => {
    // 모달
    const dataList = data.notes ;
    const [isOpen, setIsOpen] = useState(false);
    const modalOpen = () => { setIsOpen(!isOpen); };
    const [index, setIndex] = useState();
    const cilckIndex = (c) => {setIndex(c);};
    //페이징
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(12);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        const getScraps = async()=>{
            await myScrapApi.getMyScrap(category,0,"memo").then(data=>{
                console.log(data)
                setPosts(data.data.content)
            })
        }
        getScraps()        
    },[category])
    console.log(posts); 

    const offset = (page - 1) * limit;

    return(
        <div className="list-container">
            <div className="posts-list">
                {posts && posts.slice(offset, offset + limit).map((it,index) =>(
                    <div className="list" key={index} onClick={()=>{modalOpen(); cilckIndex(index);}}>
                        <button className="list-btn">
                            <p>사진</p>
                        </button>
                        <span id="list-box-title">{it.title}</span>
                        <span id="list-box-date">{it.date}</span>
                    </div>
                ))}
                {isOpen && dataList[index]&& (
                    <ModalPage width={550} height={380}>
                        <ArticleRaw 
                            data = {dataList[index]}
                            onCancle={modalOpen}
                        />
                    </ModalPage>
                )}

            </div>

            {posts && <Pagination
                    total={posts.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
            />}
        </div>
        
    )
}
export default ListBox;