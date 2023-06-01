import React from "react";
import "./style.css"; // assuming you have a css file for styling

function Main() {
  // an array of themes with image and title
  const themes = [
    {
      image: "images/group_4.png",
      title: "New India's Commitment for Environment",
    },
    {
      image: "images/compound_path.png",
      title: "New India's Global Leadership",
    },
    {
      image: "images/group_5.png",
      title: "New India's Futuristic farming",
    },
    {
      image: "images/group_6.png",
      title: "Glorifying the Glorious Culture",
    },
    {
      image: "images/path_2.png",
      title: "Raksha Shakti: Protecting India's line of defence",
    },
    {
      image: "images/group_7.png",
      title: "Aatmanirbhar Bharat: Empowering the New india",
    },
    {
      image: "images/group_23.png",
      title: "New India's Governance: Realising The Antyoday",
    },
  ];

  return (
    <section id="main">
      <div class="featured">
        <div class="tag">
          <h4>Reforming Railways</h4>
        </div>
        <img src="images/home-banner-1.jpg" alt="" />
        <div class="content">
          <h1>New India's Highway: Pavement to Prosperity</h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor
            sit amet, odio ffggghd dospiscing ...
          </h4>
        </div>
      </div>
      <h2>&nbsp;Themes&nbsp;</h2>
      <div class="themes">
        <div class="cont">
          <ul>
            {themes.map((theme) => (
              // map over the themes array and render each theme as a list item
              <li key={theme.title}>
                <a href="">
                  <span>{theme.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h3>&nbsp;scroll &gt;&gt;&nbsp;</h3>
    </section>
  );
}

export default Main; // export the component