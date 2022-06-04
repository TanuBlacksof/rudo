import React, { useState } from 'react'
import './style.css'
import Cancel from '../../Assets/Cancel.png'


export const NewsAlert = () => {
    const [close, setClose] = useState(true)
    return (
        <>
            {close && (
                <div className='news_alert'>
                    <div className='news_alert_div'>
                        First 1000 members get 12 months of free
                        subscription and 50% lifetime discount thereon!
                    </div>
                    <img src={Cancel} className="btn_cencle" alt="cencle" onClick={() => setClose(false)} />
                </div>
            )}
        </>
    )
}
