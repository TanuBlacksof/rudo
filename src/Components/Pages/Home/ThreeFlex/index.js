import React from 'react'
import './style.css'
import sparkling from '../../../Assets/sparkling.png'
import knowledge from '../../../Assets/Svgs/1_No_prior_knowledge@2x.svg'
import Assmall from '../../../Assets/Svgs/2_As_small_as@2x.svg'
import Withdraw from '../../../Assets/Svgs/3_Withdraw@2x.svg'

export const ThreeFlex = () => {
    return (
        <div className='sparkling_main'>
            <div className='sparkling_view'>
                <img src={sparkling} alt="sparkling" />
                <h1> Step into the future of Saving and Investing with RuDo!</h1>
            </div>

            <div className='sparkling_flex'>
                <div className='sparkling_flex_inner'>
                    <img className='sparkling_image' src={knowledge} alt='image' />
                    <p className='sparkling_para'>
                        No prior knowledge required
                    </p>
                </div>
                <div className='sparkling_flex_inner'>
                    <img className='sparkling_image' src={Assmall} alt='image' />
                    <p className='sparkling_para'>
                        Start investing as small as  AED 20
                    </p>
                </div>
                <div className='sparkling_flex_inner'>
                    <img className='sparkling_image' src={Withdraw} alt='image' />
                    <p className='sparkling_para'>
                        Withdraw as and when you like
                    </p>
                </div>
            </div>

        </div>
    )
}
