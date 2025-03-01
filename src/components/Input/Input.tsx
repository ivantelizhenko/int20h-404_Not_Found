import React, { useEffect, useState } from 'react';
import SendIcon from '../../public/icons/send.svg'
import Message from '../Message/Message';
// import List from '../List/List';
// import Loader from '../Loader/Loader';

export default function Input() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<string[]>([])
    // const [showList, setShowList] = useState(false);
    // const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        // setShowList(false);
        // setLoading(true); 
    };

    const handleSubmit = () => {
        setInput('');

        if (input.trim() === '') {
            setMessages((prev) => [...prev, input])
            setInput('')
        }
        // setShowList(false);
        // setLoading(false);
    };

    // useEffect(() => {
    //     if (input) {
    //         setLoading(true);
    //         const timeout = setTimeout(() => {
    //             setLoading(false);
    //             setShowList(true);
    //         }, 1000);

    //         return () => clearTimeout(timeout);
    //     } else {
    //         setLoading(false);
    //         setShowList(false);
    //     }
    // }, [input]);

    return (
        <div className='flex items-center flex-col justify-center w-full gap-[32px]'>
            <h1 className='font-semibold xl:text-[28px] sm:text-[16px] md:text-[18px] text-center'>I'm your shopping assistant! What can I find for you?</h1>
            {/* {loading && <Loader />}
            {showList && <List text="Assistant response will be soon" />} */}
            {messages.length > 0 && <Message messages={messages}/>}
            
            <div className="xl:w-[70%] sm:w-[80%] w-full flex justify-between gap-[10px] items-center border-[#E4E4E4] border shadow-2xs rounded-[72px] py-[17px] px-[24px] h-[56px]">
                <input
                    type="search"
                    value={input}
                    onChange={handleChange}
                    className="grow border-none focus:border-none focus:outline-none active:border-none"
                    placeholder="Ask anything"
                />
                <button onClick={handleSubmit}>
                    <img src={SendIcon} alt="Search" />
                </button>
            </div>

            
        </div>
    );
}

