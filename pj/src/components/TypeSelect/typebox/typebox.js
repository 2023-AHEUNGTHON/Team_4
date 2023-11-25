import styled from "styled-components";
import React  from "react";
import './typebox.css';
import { Link } from 'react-router-dom';

const ButtonStyle = styled.button`
    height: 130px;
    width: 208px;
    border: 1px solid ${(props) => props.color}; 
    border-radius: 30px;
    margin-right: 16px;
    background-color: rgba(248, 249, 250, 1); 
    font-family: 'Pretendard-Regular', 'sans-serif';
    font-size: large;
`;
const TypeBox = ({category,color}) => {
    const category_ = category ;
    const color_ = color ;
    console.log(category_);

    return(
        <div className="type-box-all">
            <Link to={`/${category}/file`} state={{category:category_, color:color_ }}>
                <ButtonStyle color={color}> 
                    <p>파일</p>
                </ButtonStyle>
            </Link>
            <Link to={`/${category}/link`} state={{category:category_, color:color_ }}>
                <ButtonStyle color={color}> 
                    <p>링크</p>
                </ButtonStyle>
            </Link>
            <Link to={`/${category}/memo`} state={{category:category_, color:color_ }}>
                <ButtonStyle color={color}> 
                    <p>메모</p>
                </ButtonStyle>
            </Link>
        </div>
    )
}

export default TypeBox;