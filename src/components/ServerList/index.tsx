import React from 'react';

import { Container, Separator } from './styles';

const ServerList: React.FC = () =>{
    return (
        <Container>
            <ServerButton isHome/>

            <Separetor />

            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={3}/>
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton />
            <ServerButton mentions={3}/>
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton />
        </Container>
    );
};

export default ServerList;