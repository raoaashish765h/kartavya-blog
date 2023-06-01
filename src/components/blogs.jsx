import React, { useState } from "react";
import "./style.css";

function Blogs() {
  // an array of blogs with image, title and category
  const blogs = [
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
    {
      image: "images/latest_img4.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing amet",
      category: "Raksha Shakti",
    },
  ];

  const [currPost, setCurrPost] = useState(0); // state for current post index

  // function to handle next button click
  const handleNextClick = () => {
    setCurrPost((prev) => {
      if (prev === blogs.length - 2) {
        return 0; // go back to first post
      } else {
        return prev + 1; // go to next post
      }
    });
  };

  // function to handle previous button click
  const handlePrevClick = () => {
    setCurrPost((prev) => {
      if (prev === 0) {
        return blogs.length - 2; // go to last post
      } else {
        return prev - 1; // go to previous post
      }
    });
  };

  return (
    <section id="blogs">
      <div class="container">
        <div class="latest">
          <span>Latest Blogs</span>
          <ul>
            <li>
              <a class="blogs-p-btn" onClick={handlePrevClick}>
                <i class="fa fa-angle-left"></i>
              </a>
            </li>
            <li>
              <a class="blogs-n-btn" onClick={handleNextClick}>
                <i class="fa fa-angle-right"></i>
              </a>
            </li>
            <li>
              <a href="">
                <span>view all</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="posts-container">
          <div class="posts-slide" style={{ transform: `translateX(-${currPost * 51}%)` }}>
            {blogs.map((blog) => (
              // map over the blogs array and render each blog as a div
              <div class="b1" key={blog.title}>
                <div class="tag">
                  <h4>{blog.category}</h4>
                  <img src={blog.image} alt="" />
                </div>
                <div class="content">
                  <span>By Staff, Feb 26 2023</span>
                  <h4>{blog.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs; // export the component