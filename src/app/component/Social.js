import React from 'react'
import { PiWhatsappLogo } from "react-icons/pi";

const Social = () => {
  return (
    <div>
        <div className='flex flex-row max-md:justify-center gap-3 py-3 px-5 text-center'>
                        {/* facebook */}
                        <div>
                            <a href='/' target='_blank'>
                                <svg className="w-[25px] h-[25px] text-purple-950 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                                </svg>
                            </a>
                        </div>
                        {/* linkedin */}
                        <div>
                            <a href='/'>
                                <svg className="w-[25px] h-[25px] text-purple-950 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                    <path fillRule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd"/>
                                    <path d="M3 5.012H0V15h3V5.012Z"/>
                                </svg>  
                            </a>
                        </div>
                        {/* x */}
                        <div>
                            <a href='/' target='_blank'>
                                <svg className="w-[25px] h-[25px] text-purple-950 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path fill="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"/>
                                </svg>
                            </a>
                        </div>
                        {/* wh */}
                        <div>
                            <a href='https://wa.me/message/QFKQ3RPEF6AFL1' target='_blank'>
                                <PiWhatsappLogo className="w-[25px] h-[25px] text-purple-950 dark:text-white" aria-hidden="true" />
                            </a>
                           
                        </div>
                    </div>
    </div>
  )
}

export default Social