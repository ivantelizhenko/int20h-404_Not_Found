import React from 'react';
import SendIcon from '../../img/icons/send.svg'
import VoiceIcon from '../../img/icons/voice.svg'

export default function Input({input, setInput, onSearch}: {input: string; setInput: React.Dispatch<React.SetStateAction<string>>, onSearch: () => void}) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
    const handleSubmit = () => {
        setInput('');
        if (input.trim() === '') {
            onSearch()
            setInput('')
        }
    };
    return (
        <div className='flex items-center flex-col justify-center w-full gap-[32px]'>
            
            <div className="xl:w-[70%] sm:w-[80%] w-full flex justify-between gap-[10px] items-center border-[#E4E4E4] border shadow-2xs rounded-[72px] py-[17px] px-[24px] h-[56px]">
                <input
                    type="search"
                    value={input}
                    onChange={handleChange}
                    className="grow border-none focus:border-none focus:outline-none active:border-none"
                    placeholder="Ask anything"
                />
                {input.length === 0 ? (
                    <button onClick={handleSubmit}>
                      <img src={VoiceIcon} alt="Voice" />
                    </button>
                ) : (
                    <button onClick={handleSubmit}>
                      <img src={SendIcon} alt="Search" />
                    </button>
                )}
                
            </div>

            
        </div>
    );
}

