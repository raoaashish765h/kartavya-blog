import React, { useState } from 'react';

import './style.css';

// create function component
function BlogPost() {
 // declare state variables using useState hook
 const [currside, setCurrside] = useState(0);

 // convert class methods to regular functions or arrow functions
 const upside = () => {
 postsside.current.style.transform = `translateX(-${currside * 100}%)`;
 };
 
 // create a ref for postsside element
 const postsside = React.useRef(null);

 // assuming sidep is an array of objects with properties like title, image, date and content
 const sidep = [
 {
 post: [
 {
 image: "images/latest_img1.jpg",
 title:
 "Lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing amet",
 category: "Aatmanirbhar Bharat",
 },
 {
 image: "images/latest_img2.jpg",
 title:
 "Lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing amet",
 category: "Raksha Shakti",
 },
 {
 image: "images/latest_img3.jpg",
 title:
 "Lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing amet",
 category: "Aatmanirbhar Bharat",
 },
 ],
 },
 
 ];

 const handleNext = () => {
 setCurrside((prev) => {
 if (prev === sidep.length - 1) {
 return 0;
 } else {
 return prev + 1;
 }
 });
 upside();
 };

 const handlePrev = () => {
 setCurrside((prev) => {
 if (prev === 0) {
 return sidep.length - 1;
 } else {
 return prev - 1;
 }
 });
 upside();
 };

 // return JSX code
 return (
 <section id="blogpost">
 <div class="blog">
 <div class="left">
 <div class="heading">
 <h1>
 Vande Bharat Express:
 <br />
 Reflecting New India's Global Standards
 </h1>
 <h3>
 "Vande Bharat Express is the symbol of New India's vision and a
 symbol of India which
 <br />
 is on the path of rapid change"
 <br />- Hon'ble Prime Minister Shri Narendra Modi
 </h3>
 </div>
 <div class="share">
 <span>By Staff, Feb 26 2023</span>
 <ul>
 <span>Share:</span>
 <li>
 <a href="">
 <i class="fa fa-facebook-f"></i>
 </a>
 </li>
 <div class="bot-vi"></div>
 <li>
 <a href="">
 <i class="fa fa-twitter"></i>
 </a>
 </li>
 <div class="bot-vi"></div>
 <li>
 <a href="">
 <i class="fa fa-linkedin"></i>
 </a>
 </li>
 </ul>
 </div>
 <div class="image">
 <img src="images/env_img1.jpg" alt="" />
 </div>
 <div class="content">
 <p>
 As India celebrates its Azadi Ka Amrit Mahotsav, it has imagined
 the unimaginable and achieved the unachievable benchmarks that
 showcase India's standards to the world. In line with its vision
 of Amrit Kaal, it aims to transform the massive network of Indian
 railways with over 800 crore passengers annually, around 22000
 trains per day and about 7300 stations. The first indigenously
 made high speed train 'Vande Bharat express' is a marvel that
 facelifts Indian railways and embodies the aspiration of 1.4
 billion Indians. New India's 9x stride to Rs. 2.4 lakh crores for
 2023-24 from Rs. 63,363 in 2013-14 in railway budget allocation
 matches its vision for a glorious journey to the 'Amrit Kaal'.
 <br />
 <br />
 New India isn't just satisfied by incremental changes but aims to
 be better than the best globally which stands to be true in Vande
 Bharat trains that have been developed in a record time of just 18
 months in comparison to 2-3 years of timeframe to develop similar
 trains globally. It demonstrates capability of Indian engineers
 and visionary political leadership, setting up a great milestone
 in realizing 'Aatmanirbhar Bharat' and 'Make In India'.
 <br />
 <br />
 Its in-house design & manufacturing, computer modeling and
 system integration has been fully indigenous at Indian Coach
 Factory - A railway production unit in Chennai. Apart from it all
 its components are supplied by over 300 different
 As India celebrates its Azadi Ka Amrit Mahotsav, it has imagined
 the unimaginable and achieved the unachievable benchmarks that
 showcase India's standards to the world. In line with its vision
 of Amrit Kaal, it aims to transform the massive network of Indian
 railways with over 800 crore passengers annually, around 22000
 trains per day and about 7300 stations. The first indigenously
 made high speed train 'Vande Bharat express' is a marvel that
 facelifts Indian railways and embodies the aspiration of 1.4
 billion Indians. New India's 9x stride to Rs. 2.4 lakh crores for
 2023-24 from Rs. 63,363 in 2013-14 in railway budget allocation
 matches its vision for a glorious journey to the 'Amrit Kaal'.
 <br />
 <br />
 New India isn't just satisfied by incremental changes but aims to
 be better than the best globally which stands to be true in Vande
 Bharat trains that have been developed in a record time of just 18
 months in comparison to 2-3 years of timeframe to develop similar
 trains globally. It demonstrates capability of Indian engineers
 and visionary political leadership, setting up a great milestone
 in realizing 'Aatmanirbhar Bharat' and 'Make In India'.
 <br />
 <br />
 Its in-house design & manufacturing, computer modeling and
 system integration has been fully indigenous at Indian Coach
 Factory - A railway production unit in Chennai. Apart from it all
 its components are supplied by over 300 different
 As India celebrates its Azadi Ka Amrit Mahotsav, it has imagined
 the unimaginable and achieved the unachievable benchmarks that
 showcase India's standards to the world. In line with its vision
 of Amrit Kaal, it aims to transform the massive network of Indian
 railways with over 800 crore passengers annually, around 22000
 trains per day and about 7300 stations. The first indigenously
 made high speed train 'Vande Bharat express' is a marvel that
 facelifts Indian railways and embodies the aspiration of 1.4
 billion Indians. New India's 9x stride to Rs. 2.4 lakh crores for
 2023-24 from Rs. 63,363 in 2013-14 in railway budget allocation
 matches its vision for a glorious journey to the 'Amrit Kaal'.
 <br />
 <br />
 New India isn't just satisfied by incremental changes but aims to
 be better than the best globally which stands to be true in Vande
 Bharat trains that have been developed in a record time of just 18
 months in comparison to 2-3 years of timeframe to develop similar
 trains globally. It demonstrates capability of Indian engineers
 and visionary political leadership, setting up a great milestone
 in realizing 'Aatmanirbhar Bharat' and 'Make In India'.
 <br />
 <br />
 Its in-house design & manufacturing, computer modeling and
 system integration has been fully indigenous at Indian Coach
 Factory - A railway production unit in Chennai. Apart from it all
 its components are supplied by over 300 different
 As India celebrates its Azadi Ka Amrit Mahotsav, it has imagined
 the unimaginable and achieved the unachievable benchmarks that
 showcase India's standards to the world. In line with its vision
 of Amrit Kaal, it aims to transform the massive network of Indian
 railways with over 800 crore passengers annually, around 22000
 trains per day and about 7300 stations. The first indigenously
 made high speed train 'Vande Bharat express' is a marvel that
 facelifts Indian railways and embodies the aspiration of 1.4
 billion Indians. New India's 9x stride to Rs. 2.4 lakh crores for
 2023-24 from Rs. 63,363 in 2013-14 in railway budget allocation
 matches its vision for a glorious journey to the 'Amrit Kaal'.
 <br />
 <br />
 New India isn't just satisfied by incremental changes but aims to
 be better than the best globally which stands to be true in Vande
 Bharat trains that have been developed in a record time of just 18
 months in comparison to 2-3 years of timeframe to develop similar
 trains globally. It demonstrates capability of Indian engineers
 and visionary political leadership, setting up a great milestone
 in realizing 'Aatmanirbhar Bharat' and 'Make In India'.
 <br />
 <br />
 Its in-house design & manufacturing, computer modeling and
 system integration has been fully indigenous at Indian Coach
 Factory - A railway production unit in Chennai. Apart from it all
 its components are supplied by over 300 different
 As India celebrates its Azadi Ka Amrit Mahotsav, it has imagined
 the unimaginable and achieved the unachievable benchmarks that
 showcase India's standards to the world. In line with its vision
 of Amrit Kaal, it aims to transform the massive network of Indian
 railways with over 800 crore passengers annually, around 22000
 trains per day and about 7300 stations. The first indigenously
 made high speed train 'Vande Bharat express' is a marvel that
 facelifts Indian railways and embodies the aspiration of 1.4
 billion Indians. New India's 9x stride to Rs. 2.4 lakh crores for
 2023-24 from Rs. 63,363 in 2013-14 in railway budget allocation
 matches its vision for a glorious journey to the 'Amrit Kaal'.
 <br />
 <br />
 New India isn't just satisfied by incremental changes but aims to
 be better than the best globally which stands to be true in Vande
 Bharat trains that have been developed in a record time of just 18
 months in comparison to 2-3 years of timeframe to develop similar
 trains globally. It demonstrates capability of Indian engineers
 and visionary political leadership, setting up a great milestone
 in realizing 'Aatmanirbhar Bharat' and 'Make In India'.
 <br />
 <br />
 Its in-house design & manufacturing, computer modeling and
 system integration has been fully indigenous at Indian Coach
 Factory - A railway production unit in Chennai. Apart from it all
 its components are supplied by over 300 different
 As India celebrates its Azadi Ka Amrit Mahotsav, it has imagined
 the unimaginable and achieved the unachievable benchmarks that
 showcase India's standards to the world. In line with its vision
 of Amrit Kaal, it aims to transform the massive network of Indian
 railways with over 800 crore passengers annually, around 22000
 trains per day and about 7300 stations. The first indigenously
 made high speed train 'Vande Bharat express' is a marvel that
 facelifts Indian railways and embodies the aspiration of 1.4
 billion Indians. New India's 9x stride to Rs. 2.4 lakh crores for
 2023-24 from Rs. 63,363 in 2013-14 in railway budget allocation
 matches its vision for a glorious journey to the 'Amrit Kaal'.
 <br />
 <br />
 New India isn't just satisfied by incremental changes but aims to
 be better than the best globally which stands to be true in Vande
 Bharat trains that have been developed in a record time of just 18
 months in comparison to 2-3 years of timeframe to develop similar
 trains globally. It demonstrates capability of Indian engineers
 and visionary political leadership, setting up a great milestone
 in realizing 'Aatmanirbhar Bharat' and 'Make In India'.
 <br />
 <br />
 Its in-house design & manufacturing, computer modeling and
 system integration has been fully indigenous at Indian Coach
 Factory - A railway production unit in Chennai. Apart from it all
 its components are supplied by over 300 different
 As India celebrates its Azadi Ka Amrit Mahotsav, it has imagined
 the unimaginable and achieved the unachievable benchmarks that
 showcase India's standards to the world. In line with its vision
 of Amrit Kaal, it aims to transform the massive network of Indian
 railways with over 800 crore passengers annually, around 22000
 trains per day and about 7300 stations. The first indigenously
 made high speed train 'Vande Bharat express' is a marvel that
 facelifts Indian railways and embodies the aspiration of 1.4
 billion Indians. New India's 9x stride to Rs. 2.4 lakh crores for
 2023-24 from Rs. 63,363 in 2013-14 in railway budget allocation
 matches its vision for a glorious journey to the 'Amrit Kaal'.
 <br />
 <br />
 New India isn't just satisfied by incremental changes but aims to
 be better than the best globally which stands to be true in Vande
 Bharat trains that have been developed in a record time of just 18
 months in comparison to 2-3 years of timeframe to develop similar
 trains globally. It demonstrates capability of Indian engineers
 and visionary political leadership, setting up a great milestone
 in realizing 'Aatmanirbhar Bharat' and 'Make In India'.
 <br />
 <br />
 Its in-house design & manufacturing, computer modeling and
 system integration has been fully indigenous at Indian Coach
 Factory - A railway production unit in Chennai. Apart from it all
 its components are supplied by over 300 different
 </p>
 </div>
 </div>
 <div class="side">
 <h3>Recent</h3>
 
 <div className="side-contain" ref={postsside}>

{/* render sidep array using map method */}
<div className="side-slide">
{sidep.map((sidepItem, index) => (

<div key={index} className={`side-three ${index === currside ? "active" : ""}`}>

{sidepItem.post.map((postItem) => (

<div key={postItem.title} className="s1">

<div className="tag">

<h4>{postItem.title}</h4>

<img src={postItem.image} alt={postItem.title} />

</div>

<div className="content">

<span>{postItem.category}</span>

<h4>{postItem.title}</h4>

</div>

</div>

))}

</div>

))}
</div>
</div>
</div>

</div>

</section>

);

}

export default BlogPost;
