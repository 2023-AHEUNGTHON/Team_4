import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/WriteScrap.css';
import Navbar from '../components/Navbar';
import { useForm } from '../hooks/useForm';
import postApi from '../apis/posts';

export default function WriteScrap() {
  const navigate = useNavigate();
  const buttons = [
    { name: '시사/뉴스',value:'news' },
    { name: '푸드' , value: 'food'},
    { name: '문화/예술', value:'culture' },
    { name: '경제/금융',value:'economy' },
    { name: 'IT/기술',value:'it' },
    { name: '건강/의학',value:'health' },
    { name: '비즈니스',value:'business' },
    { name: '기타' ,value:'etc'},
  ];
  const colors = ['#ffd392', '#ffac92', '#ffcfe8', '#92caff', '#ff929f', '#a192ff', '#dc92ff', '#e1e2e3']; // 각 버튼별 색상
  const [activeButton, setActiveButton] = useState(null);
  const [activeRButton, setActiveRButton] = useState(null);
  const [postDto, postDtoHandler]  = useForm({
    category : "",
    title : "",
    memo : "",
    link: "",  
    share : "나만보기",
})
 const [files, setFiles] = useState()
  const rBtns = [{ name: '공개' }, { name: '나만 보기' }];

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    navigate('/');
  };

  const goToScrap = () => {
    setIsOpen(false);
    navigate('/scrap');
  };
  const submitPost = async() =>{
    const form = new FormData()
    Object.keys(postDto).forEach(key=>{
        if(key === 'share'){
            form.append('dto.share',postDto[key]==='공개'?true:false)
            return
        }
        if(key==='category'){
            const cate = buttons.find(item=>item.name === postDto[key]).value
            form.append('dto.category',cate)
            return
        }
        form.append(`dto.${key}`,postDto[key])
    })
    files.forEach(file=>( form.append('files',file) )) 
    await postApi.postScrap(form).then(res=>{
        console.log("ok",res.data)
    }).catch(err=>console.log(err))
  } 
  const onFileUpload = (e)=> {
    setFiles([...e.target.files])
  }

  return (
    <div className="display-container">
      <Navbar />
      <div className="wTitleWrap">스크랩 추가하기</div>
      <div className="WriteScrap-container">
        <div className="wContentWrap">
          <div className="wInputTitle">
            제목 <span className="starCR">*</span>
          </div>
          <div className="wInputWrap">
            <input type="text" name="title" value={postDto.title} onChange={postDtoHandler} className="wInput" placeholder="스크린 제목 입력해주세요." />
          </div>
          <div className="wInputTitle" style={{ marginTop: '26px' }}>
            파일 첨부
          </div>
          <div className="wInputWrap">
            <input
              type="file"
              className="wInputFile"
              accept=".jpg, .jpeg, .png, .gif, .ppt, .docs, .hwp, .pdf, .xlsx"
              placeholder="또는 파일을 여기로 드래그 해주세요."
              onChange={onFileUpload}
              multiple
            />
          </div>
          <div className="wInputTitle" style={{ marginTop: '26px' }}>
            링크 첨부
          </div>
          <div className="wInputWrap">
            <input type="text" className="wInput" name='link' value={postDto.link} onChange={postDtoHandler} placeholder="링크를 붙여 넣어주세요." />
          </div>
          <div className="wInputTitle" style={{ marginTop: '26px' }}>
            메모 작성
          </div>
          <div className="wInputWrap">
            <input type="text" className="wInput" name='memo' value={postDto.memo} onChange={postDtoHandler} placeholder="스크랩에 대해 설명해주세요." />
          </div>
          <div className="wInputTitle" style={{ marginTop: '26px' }}>
            카테고리 <span className="starCR">*</span>
          </div>
          <div className="categoryBtn">
            {buttons.map((button, index) => (
              <button
                id="wBtn"
                className={button.class}
                key={index}
                style={{
                  backgroundColor: button.name === postDto.category ? colors[index] : '#f5f5f5', // 활성화된 버튼은 각각의 색으로, 아니면 회색으로
                  color: button.name === postDto.category ? 'black' : '#5d5d5f', // 활성화된 버튼은 글씨가 검정색, 아니면 회색으로
                }}
                name="category"
                onClick={postDtoHandler}
                value={button.name}
              >
                {button.name}
              </button>
            ))}
          </div>

          <div className="wInputTitle" style={{ marginTop: '26px' }}>
            공개 여부 <span className="starCR">*</span>
          </div>
          <div className="releaseBtn">
            {rBtns.map((button, index) => (
              <button
                id="wBtn"
                className="rYONBtn"
                key={index}
                name='share'
                value={button.name}
                style={{
                  backgroundColor: button.name  === postDto.share ? '#bedcf3' : '#f5f5f5',
                  color: button.name === postDto.share ? 'black' : '#5d5d5f',
                }}
                onClick={postDtoHandler}
              >
                {button.name}
              </button>
            ))}
          </div>
        </div>
        <button className="wBottomBtn" onClick={submitPost}>
          스크랩 등록
        </button>
        {isOpen && (
          <div className="modal-container">
            <div className="wModalWrap">
              <p>새로운 스크랩이 추가되었어요!</p>
              <div className="wModalBtn">
                <button className="wMCBtn" onClick={closeModal}>
                  닫기
                </button>
                <button className="wMGBtn" onClick={goToScrap}>
                  확인하러 가기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
