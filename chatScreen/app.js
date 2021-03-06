const sendButton = document.querySelector('button');
const chatScreen = document.querySelector('.chatScreen');
const chatInput = document.querySelector('textarea');
const inputMessage = document.querySelector('.inputMessage');

const chatArray = [
    {
        message: 'Hello',
        answer: 'Helloo 2'   
    },
    {
        message: 'Hi',
        answer: 'Hi 2'
    },
    {
        message: 'Niaje',
        answer: 'Niko poa sana'
    },
    {
        message: 'Unaendeleaje?',
        answer: 'naendelea pao sana, labda wewe?'
    },
    {
        message: 'Naendelea poa pia',
        answer: 'hio ni fiti'
    }
];


chatInput.addEventListener('keyup', (e) => {
    const height = e.target.scrollHeight;
    if (height < 150 && height > 50) {
        inputMessage.style.height = `${height}px`
    }
    if (e.target.value !== "") {
        sendButton.style.pointerEvents = 'all';
    }
    else {
        sendButton.style.pointerEvents = 'none';
    }
});  
 

sendButton.addEventListener('click', () => {
    const d = document.createElement('div');
    const p = document.createElement('p');
    d.classList.add('chat', 'sent');
    p.classList.add('span');
    p.textContent = chatInput.value;
    d.append(p);
    chatScreen.append(d);
    
    const d2 = document.createElement('div');
    const p2 = document.createElement('p');
    d2.classList.add('chat', 'received');
    p2.classList.add('span');

    setTimeout(() => {
        p2.textContent = 'typing...';

        d2.append(p2);
        chatScreen.append(d2);
        chatScreen.scrollTo(0, chatScreen.scrollHeight);

    }, 500);
    

    chatArray.forEach((element) => {
        if (chatInput.value.toUpperCase() == element.message.toUpperCase())
        {
           
            setTimeout(() => {
                p2.textContent = element.answer;
                chatScreen.scrollTo(0, chatScreen.scrollHeight);
             }, 2000);
        };
     
    });

    setInterval(() => {
        if (p2.textContent == 'typing...') {
            p2.textContent = 'Sorry,,I do not understand';
            chatScreen.scrollTo(0, chatScreen.scrollHeight);
        }
    }, 3000);
            
    chatScreen.scrollTo(0, chatScreen.scrollHeight);
    chatInput.value = "";
    sendButton.style.pointerEvents = 'none';
    inputMessage.style.height = `50px`;

});




