import React from 'react';

import { Container, Role, User, Avatar  } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}/>
            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}


const UserList: React.FC = () =>{
    return (
        <Container>
            <Role>Disponivel - 1</Role>
            <UserRow nickname='Marlon Mascarenhas'/>

            <Role>OffLine - 18</Role>
            <UserRow nickname='kskssk' isBot/>
            <UserRow nickname='Bot'/>
            <UserRow nickname='kekw'/>
            <UserRow nickname='Lol'/>
            <UserRow nickname='Haha'/>
            <UserRow nickname='hehe'/>
        </Container>
    )
};

export default UserList;
