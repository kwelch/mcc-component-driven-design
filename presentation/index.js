// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Markdown,
  SlideSet,
  CodePane,
  Deck,
  Image,
  Heading,
  ListItem,
  List,
  Slide,
  Interactive,
  Text,
  Layout,
  Fill,
  Link,
  ComponentPlayground,
} from "spectacle";

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
  cssModulesLogo: require("../assets/css-modules-logo.png"),
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE",
    codePaneBg: "#2d2d2d",
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
            <li>There is no silver bullet, be open to any solution</li>
            <li>I would love to talk to all of you. Find me, we will talk ;)</li>
          </ul>`}
        >
          <Heading fit textColor="secondary">What this talk is NOT?</Heading>
          <List style={{ listStyleType: "none" }}>
            <Appear><ListItem>- Declaring a champion</ListItem></Appear>
            <Appear><ListItem>- How to Implement</ListItem></Appear>
            <Appear><ListItem>- Q&A</ListItem></Appear>
          </List>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          notes={`<ul>
          <li>History of styling</li>
          <li>Compare and learn their advantages</li>
          <li>Based on React, but hopefully will inspire different prespective</li>
        </ul>`}
        >
          <Heading fit textColor="tertiary">What is this talk?</Heading>
          <List style={{ listStyleType: "none" }}>
            <Appear><ListItem>- Overview of styling over time</ListItem></Appear>
            <Appear><ListItem>- Comparision of new styling approaches</ListItem></Appear>
            <Appear><ListItem>- Based on React development</ListItem></Appear>
          </List>
        </Slide>
        <Slide
          transition={["slide"]}
          bgColor="codePaneBg"
          notes={`<ul>
          <li>OG CSS - Global Namespace, loads of !important, naming and collision issues</li>
          <li>BEM - Better, still global, but better name collision</li>
          <li>SASS - Variables, mixins, nesting, but requires preprocessing step</li>
          </ul>`}
        >
          <Heading textColor="tertiary">History of CSS</Heading>
          <Text textColor="primary">(Abridged)</Text>
          <Layout>
            <Fill>
              <Appear>
                <CodePane
                  lang="css"
                  source={require("raw-loader!../assets/old-school.css.example")}
                  margin="20px auto"
                />
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <CodePane lang="css" source={require("raw-loader!../assets/bem.css.example")} margin="20px auto" />
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <CodePane lang="css" source={require("raw-loader!../assets/sass.example")} margin="20px auto" />
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide
          transition={["zoom"]}
          bgColor="codePaneBg"
          notes={`<ul>
          <li>View Library that takes attributes and creates a view</li>
          <li>brought html into our js</li>
          <li>Splified example, has lifecycle method and much more</li>
          <li>Update code to show custom title</li>
          <li>Show inline styles - first look at css-in-js</li>
          </ul>`}
        >
          <Heading margin="0 auto 2rem" fit textColor="primary">Then came React</Heading>
          <ComponentPlayground
            theme="dark"
            code={`function App(props) {
  return (
    <div>
      <h3>This is React!</h3>
      <p>These slides are written in React</p>
      <p>Check out Spectacle</p>
    </div>
  );
}

render(<App />, mountNode);`}
          />
        </Slide>
        <Slide
          transition={["slide"]}
          notes={`<ul>
          <li>File Scoped, no more global scope or BEM practices</li>
          <li>Inheritance</li>
          <li>Requires a build step with webpack or browserify</li>
          <li>Object notation allows for easy looks ups</li>
          </ul>`}
        >
          <Image src={images.cssModulesLogo} width={200} />
          <List textColor="secondary" style={{ listStyleType: "none" }}>
            <Appear><ListItem>- Scoped class names</ListItem></Appear>
            <Appear><ListItem>- Composes</ListItem></Appear>
            <Appear><ListItem>- Requires Build Step</ListItem></Appear>
          </List>
        </Slide>
      </Deck>
    );
  }
}
