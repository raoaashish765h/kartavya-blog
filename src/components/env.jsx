import React, { useState } from "react";
import "./style.css";

function Env() {
  // an array of env posts with image and title
  const envPosts = [
    {
      image: "images/env_img1.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, odio ffggghd dospiscing ...",
        images1: "images/env_img1.jpg",
        titles1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, odio ffggghd dospiscing ...",
          images2: "images/env_img1.jpg",
          titles2:
            "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, odio ffggghd dospiscing ...",
    },
    {
      image: "images/env_img2.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, odio ffggghd dospiscing ...",
        images1: "images/env_img1.jpg",
        titles1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, odio ffggghd dospiscing ...",
          images2: "images/env_img1.jpg",
          titles2:
            "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, odio ffggghd dospiscing ...",
    },
    {
      image: "images/env_img3.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, odio ffggghd dospiscing ...",
        images1: "images/env_img1.jpg",
        titles1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, odio ffggghd dospiscing ...",
          images2: "images/env_img1.jpg",
          titles2:
            "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, odio ffggghd dospiscing ...",
    },
  ];

  const [currEnv, setCurrEnv] = useState(0); // state for current env post index
  const [currSide, setCurrSide] = useState(0); // state for current side post index

  // function to handle next button click
  const handleNextClick = () => {
    setCurrEnv((prev) => {
      if (prev === envPosts.length - 1) {
        return 0; // go back to first post
      } else {
        return prev + 1; // go to next post
      }
    });
    setCurrSide((prev) => {
      if (prev === envPosts.length - 1) {
        return 0; // go back to first side post
      } else {
        return prev + 1; // go to next side post
      }
    });
  };

  // function to handle previous button click
  const handlePrevClick = () => {
    setCurrEnv((prev) => {
      if (prev === 0) {
        return envPosts.length - 1; // go to last post
      } else {
        return prev - 1; // go to previous post
      }
    });
    setCurrSide((prev) => {
      if (prev === 0) {
        return envPosts.length - 1; // go to last side post
      } else {
        return prev - 1; // go to previous side post
      }
    });
  };

  return (
    <section id="env">
      <div class="env-section">
        <div class="commitment">
          <div class="heading">
            <span>New India's Commitment for Environment</span>
            <ul>
              <li>
                <a href="">
                  <span>view all</span>
                </a>
              </li>
              <li>
                <a class="env-p-btn" onClick={handlePrevClick}>
                  <i class="fa fa-angle-left"></i>
                </a>
              </li>
              <li>
                <a class="env-n-btn" onClick={handleNextClick}>
                  <i class="fa fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="envs-contain">
            <div class="env-slides" style={{ transform: `translateX(-${currEnv * 100}%)` }}>
              {envPosts.map((post) => (
                // map over the envPosts array and render each post as a div
                <div class="image" key={post.title}>
                  <img src={post.image} alt="" />
                  <div class="content">
                    <h1>New India's Highway: Pavement to Prosperity</h1>
                    <h4>{post.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div class="side">
          <div className="env-side-sl" style={{ transform: `translateX(-${currEnv * 96}%)` }}>
            
          {envPosts.map((post) => (
                // map over the envPosts array and render each post as a div
                <div className="s1-cont">
                <div class="s1" key={post.titles1}>
                <div class="tag">
                  <h4>New India's Commitment for Environment</h4>
                  <img src={post.images1} alt="" />
                </div>
                <div class="content">
                  <span>By Staff, Feb 26 2023</span>
                  <h4>{post.titles1}</h4>
                </div>
                </div>
                <div class="s1" key={post.titles2}>
                <div class="tag">
                  <h4>New India's Commitment for Environment</h4>
                  <img src={post.images2} alt="" />
                </div>
                <div class="content">
                  <span>By Staff, Feb 26 2023</span>
                  <h4>{post.titles2}</h4>
                </div>
              </div>
              </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Env; // export the component