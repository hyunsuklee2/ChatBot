import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '27e44235-493c-4d9d-8072-72b0189f5f0d',
        props.user.username,
        props.user.secret
    );
    
    return (
        <div style= {{ height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
        </div>    
    )
}

export default ChatsPage