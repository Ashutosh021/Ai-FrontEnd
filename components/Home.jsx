import React from "react";
import pic from "/images/ant.jpg";
import { Link } from "react-router-dom";
import "../styles/home.scss";

const Home = () => {
  return (
    <div className="main">
      <div className="first-section">
        <div className="left">
          <h3>ArtifyAI</h3>
          <h2>AI Image Generator: Create images from text.</h2>
          <p>
            Bring more of your ideas to life faster than ever. Try new ArtifyAI
            Image 3 model for higher quality images, better prompt
            interpretation and more accurate text in images. And now you can
            upload your own references images for greater control over style and
            structure.
          </p>
          <Link to={"/image-generator"}>
            <button>Generate Image Now</button>
          </Link>
        </div>
        <div className="right">
          <img src={pic} />
        </div>
      </div>

      <div className="second-section">
        <h3>Explore the Text to Image possibilities.</h3>
        <p>
          Check out these stunning ai-generated images from ArtifyAI and the
          text prompts that generated them.
        </p>
        <div className="img-div">
          <div>
            <img src="https://res.cloudinary.com/dsnmwmck8/image/upload/v1733240340/Ai-Temp/mhv23tdfqiiptjcajnxi.jpg" />
            <p>
              <strong>Prompt : </strong> Batman
            </p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dsnmwmck8/image/upload/v1733240624/Ai-Images/b576x8trdyrg3cyl6bah.jpg" />
            <p>
              <strong>Prompt : </strong> Man playing on Moon
            </p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dsnmwmck8/image/upload/v1733240736/Ai-Images/qzekebcmkslevkzhzere.jpg" />
            <p>
              <strong>Prompt : </strong> Gorilla in india
            </p>
          </div>
        </div>
      </div>

      <div className="third-section">
        <h3>How to generate AI images in ArtifyAI.</h3>
        <p>Easily generate your own AI images following these quick steps.</p>
        <hr />
        <div>
          <h4>Open ArtifyAI.</h4>
          <p>
            1. Go to ArtifyAI.adobe.com and sign into your Adobe account. If you
            don’t have one, you can quickly create a free account. Once you’re
            logged in, choose the Text to Image option on the homepage to open
            the workspace.
          </p>
        </div>
        <hr />
        <div>
          <h4>Write a text prompt.</h4>
          <p>
            2. Type a description of what you want to see in the prompt field.
            Get specific. For example, “Colourful tropical paradise jungle with
            golden lily pads and pink flowers and fireflies, vibrant colours,
            graffiti.” (For inspiration, scroll over any of the images on the
            page and read the prompts that generated them.
          </p>
        </div>
        <hr />
        <div>
          <h4>Generate your image.</h4>
          <p>
            3.When youre satisfied with your prompt, click Generate. The results
            will appear in a few seconds. If you like one or more of the four
            images ArtifyAI generates, use the buttons in the upper-right of
            each image to download as a JPEG or save to Favourites. (You can
            find all your Favourites in the top menu of the ArtifyAI home page.
          </p>
        </div>
        <hr />
        <div>
          <h4>Refine, revise and regenerate.</h4>
          <p>
            4. Play with settings to explore different variations. In the panel
            on the right, you can adjust everything from aspect ratio to content
            type to camera angle. And if you’d like, you can add more detail to
            your text prompt to generate completely new images. Just make sure
            that you save any images you like before you create new ones. (When
            you use ArtifyAI, you get access to a set number of generative
            credits. Find out more about generative credits.)
          </p>
        </div>
        <Link to={"/image-generator"}>
          <button>Try It now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
