import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import '../css/Mypage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ListHeartBox from '../components/ArticlesList/listbox/ListHeartBox';
/* font-awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import userApi from "../apis/users"

function Mypage() {

    const [activeTab, setActiveTab] = useState("userInfo");
    const [img, setImg] = useState();

    const updateProfileImage = async()=>{
        const form = new FormData()
        form.append('file',img)
        await userApi.updateProfileImg(form).then(res=>console.log(res))
    }
    const onChageImage = (e)=>{
        setImg(e.target.files[0])
    }

    const UserInfo = () => (
        <div className="mArticleInfo">
            <div className="mInputTitle">프로필 사진</div>
            <div className="mFileBox">
                <input 
                    type="file"
                    style={{width:'100%',height:'100%'}}
                    accept=".jpg, .jpeg, .png, .gif"
                    onChange={onChageImage}
                    multiple />
            </div>
            <div className="mInputTitle">닉네임</div>
            <div className="mInputWrap">
                <input 
                    type="text" 
                    className='mInput' 
                    /* value={id} */
                    placeholder='닉네임을 입력해주세요.'/>
            </div>
                <button className="mSaveBtn" onClick={updateProfileImage}>저장하기</button>
        </div>
    );

    const LikedPosts = () => (
        <div className="mArticlePosts">
            <ListHeartBox />
        </div>
    );

    return(
        <div className="display-container">
            <Navbar />
            <div className="mypage-container">
                <div className="mPHeader">마이페이지</div>
                <div className="mTapWrap">
                    <div className="mTap">
                        <button 
                            className='mTapBtn' 
                            onClick={() => setActiveTab("userInfo")}>
                                <FontAwesomeIcon 
                                    icon={faPen} 
                                    style={{color: "#000000",}}
                                    className='faIc' />
                                내 정보 관리
                        </button>
                        <button 
                            className='mTapBtn' 
                            onClick={() => setActiveTab("likedPosts")}>
                                <FontAwesomeIcon 
                                    icon={faHeart} 
                                    style={{color: "#000000",}} 
                                    className='faIc'/>
                                좋아요 누른 글
                        </button>
                    </div>
                    <div className="mTapContent">
                        {activeTab === "userInfo" && <UserInfo />}
                        {activeTab === "likedPosts" && <LikedPosts />}
                    </div>
                    <div className="Nothing"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Mypage;
