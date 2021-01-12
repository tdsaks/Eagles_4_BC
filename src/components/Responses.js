import React, { useContext} from 'react';

import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import { StoreContext } from 'contexts/StoreContext';
import { useParams } from 'react-router-dom';

import 'stream-chat-react/dist/css/index.css';



const chatClient = new StreamChat('qpr6c7cbt7v7');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoib2RkLWRpc2stOSJ9.CWgV91r4OVYcpG2YmLthdxMpjwn8pW4cI4hS2-BxQbE';

chatClient.setUser(
  {
       id: 'odd-disk-9',
       name: 'baldwin',
       image: 'https://imgur.com/a/z9BkARV'
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'BCApp3', {
  // add as many custom fields as you'd like
  image: 'https://getstream.io/random_svg/?id=odd-disk-9&name=Odd+disk',
  name: 'Reply to Post',
});

function Responses(){
    const store = useContext(StoreContext)
  
  let {userId} = useParams();
  if (!userId){
    userId = store.currentUserId;
  }
  return (

    
  <Chat client={chatClient} theme={'messaging light'}>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
  )
};

export default Responses;