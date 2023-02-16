import React from 'react'
import "./Contact.css"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Contact = () => {
return (
<div className='Contact'>
    <div className="wrapper">
        <span>BE IN TOUCH WITH US TO GET LATEST UPDATES ON OUR COLLECTION:</span>
        <div className="mail">
            <input type="text" placeholder='Enter your E-mail' />
            <button>JOIN US</button>
        </div>
        <div className="icons">
            <FacebookRoundedIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            <PinterestIcon/>
        </div>
    </div>
</div>
)
}

export default Contact 