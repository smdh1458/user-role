import React from "react";
import styled from "styled-components";

const UserComponent  = () => {
    return (
        <Container>
            <h2>🏢 유저 페이지</h2>
            <p>개인정보를 관리하고, 서비스를 이용할 수 있습니다.</p>
            <UserMenu>
                <MenuItem>📦 제품 보기</MenuItem>
                <MenuItem>🛠  유저 정보 설정</MenuItem>
            </UserMenu>
        </Container>
    );
};

export default UserComponent;

const Container = styled.div`
    background: #eaffec;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
`;

const UserMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
`;

const MenuItem = styled.button`
    background: #55efc4;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background: #00b894;
    }
`;