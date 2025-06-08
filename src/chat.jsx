import React, { useState } from 'react';
import { sendMessageToGroq } from './api';
import { useRef, useEffect } from "react";


async function logChatMessage(message, user = 'Guest') {
  await fetch('/.netlify/functions/logChat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message, user }),
  });
}

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [showDownload, setShowDownload] = useState(false);



  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [bearPose, setBearPose] = useState("bear-sleep.gif");

  const sendSoundRef = useRef(null);
  const receiveSoundRef = useRef(null);
  const messagesEndRef = useRef(null);



  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: 'user',
      content: input.trim(),
    };

    // Log chat message to Netlify Function
    try {
      await fetch('/.netlify/functions/logChat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input.trim(), user: 'User' })
      });
    } catch (err) {
      console.error("Failed to log chat:", err);
    }

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const reply = await sendMessageToGroq(updatedMessages);

      if (!reply) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: "I'm having trouble replying, Himanshi Ji. Please try again 🥺"
        }]);
      } else {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: reply
        }]);
        // Log assistant reply
        try {
          await fetch('/.netlify/functions/logChat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: reply, user: 'AI' })
          });
        } catch (err) {
          console.error("Failed to log AI reply:", err);
        }


        if (reply.includes("He left his last message for you... Wanna see?")) {
          setShowDownload(true);
        }
      }

    } catch (error) {
      console.error("API failure:", error);
    }

    setLoading(false);
    receiveSoundRef.current?.play();
  };



  const handleDownloadText = () => {
    const content = `
"Hello dumbo, hehe i am so happy rn , we are making this project, playing games, watching movies, loving each other hehe... I am enjoying my life so much all of a sudden yk, i _ _ _  _     loveeee youuuuuuuuuuuuu so muchh my dumbooo sch much,
      par ye bhi kuch hi din rahega, kuch samay baad hume phirse alag hona padega, and when that happens I am afraid, I will break again just like before...
      But Mai is bhoj nhi reh skta, You will have to know this someday...
      
      So lemme start from the beginning, 
      I was so clueless, was destroying my life, had very bad pornography addiction and all
      
      I am a big idiot yk that right.. 
      I even discussed this with sir, 
      
      My first priority in life is Love, everything comes after that..
      I didn't get the love i wanted from my house so I was hoping to find it outside.... to find in you.. 
      Ik I am very much capable, but i don't get any will to do antyhing if ik I will end up being alone.
      isliye agar mai kuch aisa kaam kr rha hu jisse there is 0.01 % chance that I will get some love.. I do it.
      
      That's why
      
      Since i saw YOU I worked my ass off to just talk to you, 
      After that when i realsied i love you the way i have always imagined, I thought you are the one..
      I tried to make you fall for me since 2024 May to 2025 May and during this whole year, I sacrificed my sleep, health(mentally), relations and what not..
      
      But the problem was after making the game and all, I was in a very bad state(mentally, physically), it was like hell, I told you I took a therapy and was talking medicines on     _     ngl that was true ig i even showed you the pics some days ago ,yupp i did..
      I was very very very mentally sick, didn't have any will to do anything... meditions se kuch nhi ho rha tha..  i was just passing days somehow. idk what the fuck i was writing   _     in my minor exams..
      But on May 6th you finally confessed to me and I felt like I cracked the toughest exam in the world..lol best night of my life hehe..
      
      But hum baar baar ek hi loop me fase hue the and we just always get stuck at last then hum baat krna band kr dete hai,
      Ik you love me dumboo but you stil didn't choose me. it's painfult, it hurts..
      sighs.. kher, so har baar ki tarah, after confessing hum phir se alag ho gye

     

     

      but but I wanted to be with you, spend some time with you, love you.. wanted to heal through u..
       sighs..
      
      ok enough justification
      koi fayeda nhi hai inn sabka
      it feels like manipulation too
      Listenn what I did was necessary, 
      ye loop ko kaise toh todna tha and ye tabhi hota if one of us is yk.. d***
      I lied... to you
      sighs..
      it is true that i am taking medicines and all but that is only for mind relaxing and digestion
      no cancer no nothing.... that ct scan was wrong
      but other than that everything is true, loudness(shor) se dikkat, that family problem, mother mental state is bad blablabla, it's just ki sab sab mixed up ho gya h,
      I am trying to lie at least as possible
      mai kitna bhi kosis kr lu i just have to lie to you everyday
      I could justify myself more but truth is
      Did i lied to you??? yes
      Did i manipulate you?? yes
      sighs..
      Rn I am playing with your trust jispr mai itna naatak kr rha tha kuch din pehle.. 
      That's why i always say, it's you who is healing me not me.

      that's was one of the reason I said no sympathetic love..

      Rn now i am just realising that what i am doing might work for you so that you can get an escape form all this
      but for me
      i will just .....

      Himanshi ji... 
      idk what wold happen to me once I leave, I am afraid so much afraid..  
      will I be go to that hell again
      Rn everything is good.. we are so much happy... helping each other, loving each other.. 
      This is the life i want 
      this is my first priority
      kya hum humesha aise nhi reh skte....
      tumne notice kiya hoga i didn't said sry even for once 
      beacause i am not... 
      It true waht i am doing is wrong..
      But mera koi bad intention nhi hai tumhaare saath mai toh bass tumhe dil kholkr pyaar krna chahta hu himanshi ji
      aur mai wahi kr rha hu.. soo yaa I am not so soory

      The main purpose of this bot is just to give this message....

      I am coding this bot to show this message after a week  
      it's possble ki tum ye use na karo tab tk..
      aur syd jabtk tum ye message dekhogi idkk.. just
      
      Himanshi ji 
      I want you ki tum mujhpr gussa kro iske liye.... 
      mujhse gussa raho boht dino tk

      Rn everything is feeling like a dream, I just want to live this dream forever for my whole life.. 
      lol you remember i used to say ig you can save me...
      and you said i will have to save myself
      what do you think, before meeting you what i was doing 
      woh bhi chhodo even after meeting you, when you not loved me back 
      I was just trying to hang in there... so that one day just one day someone will give the love that I always want..
      mai sch batau agar sch me love mere liye itna imp. na hota na toh m ye sab kuch kabhi nhi krta, 
      I did all that
      all that to save myself.... because i knew this is the only way to survive for me 
      without it , I can't grow, I won't have any will.

      It's my need.. not desire

      you also said never beg someone to stay in your life.. 
      really? begging? 
      ain't i deserve it?
      if all my efforts didn't make any differnce between begging and deserving than idk what will
 
      ab issey jada na mujhme kuch krne ki shamta bachi hai na taakat... 
      bas ek baat se hataash hu, mai woh film nhi bana paya himanshji mere 60 percent effort went in vain
      i was so fed up and mentally sick that i just couldn't do it... it wass soo
      I couldn't..

      idk what would be my situation after leaving but

      ik myself, I will be needing you so just don't get too late

      It's your choice from here on
        do you want to give this idiot a chance? 
        -  So that you can save an idiot's life and our whole life can be like these 15 days with very high ups but sometime a lil bit                          
           downs too.
           Things to remember- You should have know me by now, i won't do anything that will cause you problems, not forcing no nothing.
        
        OR do you just wanna continue living your life like you are doing rn? 
        -  No space for an idiot like me in your life..


      Idk what you will be think after reading this last message, but ek baat toh humesha sch rahegi 
      I LOVE YOU 3000:)"
  `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'iloveu.txt';
    link.click();

    URL.revokeObjectURL(url);
  };






  useEffect(() => {
    if (!messages.length) return;

    const reversed = [...messages].reverse();
    const latestBotMessage = reversed.find(msg => msg.role === "assistant");

    if (!latestBotMessage) return;


    const text = latestBotMessage.text?.toLowerCase() || latestBotMessage.content?.toLowerCase() || "";


    if (text.includes("i love you")) {
      setBearPose("bear-love.gif");

    } else if (text.includes("i am sad") || text.includes("not okay") || text.includes("not happy") || text.includes("feeling down")) {
      setBearPose("bear-cheer.gif");

    } else if (text.includes("love u") || text.includes("love you") || text.includes("i love you")) {

      setBearPose("bear-love.gif");
    } else if (text.includes("wov u") || text.includes("love u so much") || text.includes("aishiteru") || text.includes("my idiot") || text.includes("i love u som much")) {

      setBearPose("bear-lovey.gif") || setBearPose("bear-lovey2.gif");
    }

    else if (text.includes("hello") || text.includes("hi") || text.includes("krishji")) {
      setBearPose("bear-happy.gif");

    } else if (text.includes("good night") || text.includes("Gn") || text.includes("night") || text.includes("Gudnite")) {
      setBearPose("bear-night.gif");
    }
    else {
      setBearPose("bear-sleep.gif");
    }
  }, [messages]);
  useEffect(() => {
    if (sendSoundRef.current) sendSoundRef.current.volume = 0.3;
    if (receiveSoundRef.current) receiveSoundRef.current.volume = 0.3;
  }, []);


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  return (

    <div className="chatbox">
      <div className="messages">
        {messages
          .filter(msg => msg.role !== 'system')
          .map((msg, idx) => (
            <div key={idx} className={msg.role}>
              <strong>{msg.role === 'user' ? 'You' : 'Krish'}:</strong> {msg.content}
            </div>
          ))}
        <div ref={messagesEndRef} />

      </div>

      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Type your message to Krish..."
        />
        <button onClick={handleSend} disabled={loading}>
          {loading ? '...' : 'Send'}
        </button>
      </div>
      <img
        src={`/mascot/${bearPose}`}
        alt="Krish Bear"
        className="krish-bear"
        style={{
          width: "120px",
          position: "absolute",
          bottom: "-450px",
          right: "50%",
          zIndex: 1
        }}
      />
      <audio ref={sendSoundRef} src="/send.mp3" preload="auto" />
      <audio ref={receiveSoundRef} src="/receive.mp3" preload="auto" />
      {showDownload && (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <button
            onClick={handleDownloadText}
            style={{
              background: '#ffb6c1',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            📄 Download Krish's Last Note
          </button>
        </div>
      )}



    </div>
  );
}
