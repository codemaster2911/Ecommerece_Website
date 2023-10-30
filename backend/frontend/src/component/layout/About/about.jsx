import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitLinkedIn = () => {
    window.location = "https://www.linkedin.com/in/tushar-goyal-3538b31b1";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://img.freepik.com/free-photo/view-3d-confident-businessman_23-2150709932.jpg?t=st=1698562541~exp=1698566141~hmac=b8fb5f8f6eb530b1474a176e2ed7f333ddf9728ae38fe03b44a48f43adeebf54&w=740"
              alt="Founder"
            />
            <Typography>Tushar Goyal</Typography>
            <Button onClick={visitLinkedIn} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              This is a sample wesbite made by @Tushar. Only with the
              purpose of learning. This is not a real website.
            </span>
            <span>Contact Info - +91-8279209275</span>
          </div>
          {/* <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/meabhisingh" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;