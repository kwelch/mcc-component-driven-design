// Import React
import React from "react";

// Import Spectacle Core tags
import { Appear, Markdown, Deck, Image, Heading, ListItem, List, Slide, Text, Layout, Fill } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  twitterLogo: require("../assets/twitter-logo.svg"),
  githubLogo: require("../assets/GitHub-Mark-120px-plus.png"),
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE",
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica",
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="pacman">
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Introduction to<br />Component Based Styling
          </Heading>
          <Text margin="5rem 0 0" textColor="tertiary" size={3} bold>
            Kyle Welch
          </Text>
          <Text margin=".5rem 0 0" textColor="secondary" size={0.75} italic>
            Sr. Software Development Engineer @ NFIB
          </Text>
          <Layout style={{ marginTop: 100, justifyContent: "space-between" }}>
            <Fill>
              <Text textColor="tertiary" style={{ textAlign: "left" }}>
                <Image src={images.twitterLogo} style={{ height: 25, margin: "0 10px 0" }} />
                @kylewelch
              </Text>
            </Fill>
            <Fill>
              <Text style={{ textAlign: "right" }}>
                <Image src={images.githubLogo} style={{ height: 30, margin: "0 10px 0" }} />
                /kwelch
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quartenary"
          notes={`<ul>
            <li>I would love to talk to all of you. Find me, we will talk ;)</li>
            <li>There is no silver bullet, be open to any solution</li>
          </ul>`}
        >
          <Heading fit textColor="secondary">What this talk is NOT?</Heading>
          <List style={{ listStyleType: "none" }}>
            <Appear><ListItem>- Q&A</ListItem></Appear>
            <Appear><ListItem>- Declaring a champion</ListItem></Appear>
          </List>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          notes={`<ul>
          <li>History of styling</li>
          <li>Compare and learn their advantages<li>
        </ul>`}
        >
          <Heading fit textColor="tertiary">What is this talk?</Heading>
          <List style={{ listStyleType: "none" }}>
            <Appear><ListItem>- Overview of styling over time</ListItem></Appear>
            <Appear><ListItem>- Comparision of new styling approaches</ListItem></Appear>
          </List>
        </Slide>
      </Deck>
    );
  }
}
