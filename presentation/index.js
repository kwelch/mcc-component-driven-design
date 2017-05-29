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

import cssJsLibs from "./css-in-js-libs.json";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  twitterLogo: require("../assets/twitter-logo.svg"),
  githubLogo: require("../assets/GitHub-Mark-120px-plus.png"),
  cssModulesLogo: require("../assets/css-modules-logo.png"),
  sponsors: require("../assets/sponsors.webp"),
  concerns: require("../assets/separation_of_concerns.jpg"),
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

const SmallListItem = ({ style, ...rest }) => <ListItem {...rest} style={{ ...style, fontSize: "1.75rem" }} />;

const IntroSlide = () => (
  <div>
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
  </div>
);

const AppearList = ({ items, textColor, textSize, style }) => (
  <List textColor={textColor} style={{ listStyleType: "none", ...style }}>
    {items.map((val, i) => <Appear key={i}><ListItem style={{ fontSize: textSize }}>- {val}</ListItem></Appear>)}
  </List>
);

const ArrayList = ({ items, textColor, textSize, style }) => (
  <List textColor={textColor} style={{ listStyleType: "none", ...style }}>
    {items.map((val, i) => <ListItem style={{ fontSize: textSize }} key={i}>- {val}</ListItem>)}
  </List>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="pacman">
        <Slide transition={["zoom"]} bgColor="primary">
          <IntroSlide />
        </Slide>
        <Slide><Image src={images.sponsors} /></Slide>
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
          <AppearList
            items={[
              "Overview of styling over time",
              "Comparision of new styling approaches",
              "Slightly baised toward React 😉",
            ]}
          />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quartenary"
          notes={`<ul>
            <li>There is no silver bullet, be open to any solution</li>
            <li>Intregration is very case based, so I recommend following the docs</li>
            <li>I would love to talk to all of you. Find me, we will talk ;)</li>
          </ul>`}
        >
          <Heading fit textColor="secondary">What this talk is NOT?</Heading>
          <AppearList items={["Declaring a champion", "Project Integration", "Q&A"]} />
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
          <Heading margin="0 auto 2rem" fit textColor="primary">Meet React</Heading>
          <ComponentPlayground
            theme="dark"
            code={`function App(props) {
  return (
    <div>
      {props.title && <h1>{props.title}</h1>}
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
          <AppearList textColor="tertiary" items={["Scoped class names", "Composes", "Requires Build Step"]} />
        </Slide>
        <Slide
          bgColor="tertiary"
          transition={["fade"]}
          notes={`<ul>
          <li>All css-in-js libraries as listed in the GH repo</li>
          <li>Notice all the instances of React</li>
          </ul>`}
        >
          <Heading textColor="primary" fit>css-in-js</Heading>
          <ArrayList
            items={cssJsLibs}
            textSize="1.75rem"
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}
          />
          <Text textColor="primary" textSize="1rem">Source: https://github.com/MicheleBertoli/css-in-js</Text>
        </Slide>
        <Slide
          bgColor="tertiary"
          transition={["fade"]}
          notes={`<ul>
          <li>here is what we will focus on</li>
          <li>Unique approached and adoption</li>
          </ul>`}
        >
          <Heading textColor="primary" fit>css-in-js</Heading>
          <List style={{ listStyleType: "none", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            <SmallListItem>- aphrodite</SmallListItem>
            <SmallListItem>- babel-plugin-css-in-js</SmallListItem>
            <SmallListItem>- bloody-react-styled</SmallListItem>
            <SmallListItem>- classy</SmallListItem>
            <SmallListItem>- csjs</SmallListItem>
            <SmallListItem>- css-constructor</SmallListItem>
            <SmallListItem>- css-loader</SmallListItem>
            <SmallListItem>- css-ns</SmallListItem>
            <SmallListItem>- cssobj</SmallListItem>
            <SmallListItem>- cssx-loader</SmallListItem>
            <SmallListItem>- es-css-modules</SmallListItem>
            <SmallListItem>- glamor</SmallListItem>
            <SmallListItem textColor="primary">- glamorous</SmallListItem>
            <SmallListItem>- hyperstyles</SmallListItem>
            <SmallListItem>- j2c</SmallListItem>
            <SmallListItem>- jsxstyle</SmallListItem>
            <SmallListItem>- pre-style</SmallListItem>
            <SmallListItem>- radium</SmallListItem>
            <SmallListItem>- react-css-builder</SmallListItem>
            <SmallListItem>- react-css-components</SmallListItem>
            <SmallListItem>- react-css-modules</SmallListItem>
            <SmallListItem>- react-cxs</SmallListItem>
            <SmallListItem>- react-fela</SmallListItem>
            <SmallListItem>- react-free-style</SmallListItem>
            <SmallListItem>- react-inline-css</SmallListItem>
            <SmallListItem>- react-inline-style</SmallListItem>
            <SmallListItem>- react-inline</SmallListItem>
            <SmallListItem>- react-jss</SmallListItem>
            <SmallListItem>- react-look</SmallListItem>
            <SmallListItem>- react-native-web</SmallListItem>
            <SmallListItem>- react-statics-styles</SmallListItem>
            <SmallListItem>- react-styl</SmallListItem>
            <SmallListItem>- react-style</SmallListItem>
            <SmallListItem>- react-styleable</SmallListItem>
            <SmallListItem>- react-stylematic</SmallListItem>
            <SmallListItem>- react-theme</SmallListItem>
            <SmallListItem>- react-vstyle</SmallListItem>
            <SmallListItem>- reactcss</SmallListItem>
            <SmallListItem>- scope-styles</SmallListItem>
            <SmallListItem>- smart-css</SmallListItem>
            <SmallListItem>- stile + react-media-queries</SmallListItem>
            <SmallListItem>- stilr</SmallListItem>
            <SmallListItem>- style-it</SmallListItem>
            <SmallListItem textColor="primary">- styled-components</SmallListItem>
            <SmallListItem>- styled-jsx</SmallListItem>
            <SmallListItem>- styletron-react</SmallListItem>
            <SmallListItem>- styling</SmallListItem>
            <SmallListItem>- typestyle</SmallListItem>
            <SmallListItem>- uranium</SmallListItem>
          </List>
          <Text textColor="primary" textSize="1rem">Source: https://github.com/MicheleBertoli/css-in-js</Text>
        </Slide>

        <Slide><Image src={images.sponsors} /></Slide>
      </Deck>
    );
  }
}
