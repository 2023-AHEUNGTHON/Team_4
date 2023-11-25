import React  from "react";
import './article-raw.css';
import { useState, useEffect } from "react";
import ModalPage from "./modal";
import DeleteRaw from "./delete";
import heart from '../../../images/Ic_Heart.png';
import heart_filled from '../../../images/Ic_Heart_Filled.png';

function ArticleRaw ({data, onCancle}) {
    const [ state, setState ] = useState(
        {   
            title:'',
            text:'',
            subject:'수정',
            noteNum: -1,
            date : new Date()
        }
    );
    const [delModal,setDelModal] = useState(false);
    const chageDeleteModal = () => {
        setDelModal(!delModal);
    };

    const { title, text } = state;
    //수정할 때, 이전 내용 기억하는 거 구현 (바뀐 내용은 onChange에서 구현함)
    useEffect(() => { // useEffect 적용!
        setState({
            ...state, // 이런 형태를 Spread Operator 라고 합니다.
            title: data.title,
            text: data.content
        })
      }, []);

    const onChange = e =>{
        const {value,name} = e.target;
        setState({
            ...state,
            [name]: value
        });
    };
    const date = state.date.toISOString();

    return (
        <>
            <div id="note-what-for">
                <span onClick={onCancle}>ⅹ</span>
            </div>
            <div id="note-from">
                <div id="cat_type">
                        <div id="cat_modal">{data.category}</div>
                        <div id="type_modal">{data.type}</div>
                        <div id="pub_modal">{data.public?'public':'Private'}</div>
                </div>
                <input
                    id="note-title"
                    name="title"
                    type="text"
                    placeholder="제목을 입력하세요."
                    value={title}
                    onChange={onChange}
                />
                {data.type==="file" && (
                    <div id="file-select">
                        <input
                        id="note-file"
                        name="file"
                        type="file"
                        placeholder="파일을 등록하세요."
                        // value={text}
                        onChange={onChange}
                        /> 
                    </div>
                )}
                {data.type==="link"&&(
                    <textarea
                        id="note-link"
                        name="text"
                        placeholder="텍스트 입력하세요."
                        value={text}
                        onChange={onChange}
                    />
                )}
                {data.type==="memo"&&(
                    <textarea
                        id="note-text"
                        name="text"
                        placeholder="텍스트 입력하세요."
                        value={text}
                        onChange={onChange}
                    />
                )}
            </div>
            <div className="foot-btn">
                <p id="date-modal">{date}</p>
                <button className="modal-c-btn" onClick={onCancle}>수정</button>
                <button className="modal-d-btn" onClick={chageDeleteModal}>삭제</button>

            </div>
            {delModal && (
                    <ModalPage width={470} height={180}>
                        <DeleteRaw
                            data = {data}
                            onCancle={onCancle}
                        />
                    </ModalPage>
            )}
            
        </>
    )

}

export default ArticleRaw;