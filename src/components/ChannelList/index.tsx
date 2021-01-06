import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';


const ChannelList: React.FC = () =>{
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="chat-livre"/>
            <ChannelButton channelName="trabalho"/>
            <ChannelButton channelName="csGo"/>
            <ChannelButton channelName="Diablo"/>
            <ChannelButton channelName="Musica"/>
        </Container>
    )
};

export default ChannelList;
