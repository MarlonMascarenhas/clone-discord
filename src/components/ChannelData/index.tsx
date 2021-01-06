import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messagens, InputWrapper, Input, InputIcon } from './styles';


const ServerName: React.FC = () =>{
    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>
    useEffect(() => {
        const div = messageRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messageRef]);
    return (
        <Container>
            <Messagens ref={messageRef}> 
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content="Hello world 99plus"
                />
                
                <ChannelMessage 
                    author="Marlon Mascarenhas"
                    date="21/06/2020"
                    content={
                        <>
                            <Mention>@MarlonMascarenhas</Mention>, me carrega ai na moralzinha
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messagens>

            <InputWrapper>
                <Input type='text' placeholder="Conversar em chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ServerName;
