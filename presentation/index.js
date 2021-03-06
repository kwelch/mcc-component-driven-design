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
  Table,
  TableHeader,
  TableHeaderItem,
  TableBody,
  TableItem,
  TableRow,
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
  cssModulesLogo: require("../assets/css-modules-logo-cropped.png"),
  glamorousLogo: require("../assets/glamorous.png"),
  scLogo: require("../assets/styled-components.png"),
  sponsors: require("../assets/sponsors.webp"),
  concerns: require("../assets/separation_of_concerns.jpg"),
  styledForm: require("../assets/css-styled-form.png"),
};

const examples = {
  OGCss: require("raw-loader!../examples/old-school.css.example"),
  BEM: require("raw-loader!../examples/bem.css.example"),
  Sass: require("raw-loader!../examples/sass.example"),
  cssModules: {
    style: require("raw-loader!../examples/cssmodules/style.css.example"),
    app: require("raw-loader!../examples/cssmodules/app.js.example"),
  },
  react: require("raw-loader!../examples/react.js.example"),
  glamorous: require("raw-loader!../examples/glamorous.js.example"),
  container: require("raw-loader!../examples/container.js.example"),
  styleComponents: require("raw-loader!../examples/styled-components.js.example"),
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
    <Text margin=".5rem 0 2rem" textColor="secondary" size={0.75} italic>
      @NFIB
    </Text>
    <Link href="http://slides.krwelch.com/component-styling/" textColor="tertiary" size={0.75} italic>
      http://slides.krwelch.com/component-styling/
    </Link>
    <Layout style={{ marginTop: "4rem", justifyContent: "space-between", alignItems: "center" }}>
      <Fill>
        <Text textColor="tertiary" style={{ textAlign: "center" }}>
          <Image src={images.twitterLogo} style={{ height: 25, margin: "0 10px 0" }} /><br />
          @kylewelch
        </Text>
      </Fill>
      <Fill style={{ width: 180 }}>
        <Image
          width={180}
          src="https://chart.googleapis.com/chart?cht=qr&chs=180x180&chl=http%3A%2F%2Fslides.krwelch.com%2Fcomponent-styling%2F&chld=L|1"
        />
      </Fill>
      <Fill>
        <Text style={{ textAlign: "center" }}>
          <Image src={images.githubLogo} style={{ height: 30, margin: "0 10px 0" }} /><br />
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
    {items.map(
      (val, i) => (typeof val === "string" ? <ListItem style={{ fontSize: textSize }} key={i}>- {val}</ListItem> : val)
    )}
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
              "Awareness of styling options",
              "Preview component driven styling",
              "Based on experiences as a developer",
              "First taste of React 😉",
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
          <AppearList items={["Declaring a champion", "Project Integration", "Q&A Session"]} />
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
              <Appear><Image src={images.styledForm} width={400} /></Appear>
            </Fill>
            <Fill>
              <Appear>
                <CodePane lang="css" source={examples.OGCss} />
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide
          transition={["fade"]}
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
                <CodePane lang="css" source={examples.BEM} />
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <CodePane lang="css" source={examples.Sass} />
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading textColor="tertiary" margin="0rem auto 5rem">Standalone CSS</Heading>
          <Layout>
            <Fill>Scope<br /><span style={{ fontSize: "6rem" }}>🌎</span></Fill>
            <Fill>Team Type<br /><span style={{ fontSize: "6rem" }}>‍👨‍👩‍👧‍👦</span></Fill>
          </Layout>
        </Slide>

        <Slide
          transition={["spin"]}
          bgColor="codePaneBg"
          notes={`<ul>
          <li>allow you to turn your stylesheet into an object of class names</li>
          <li>styleshet can be css, less, sass</li>
          <li>Processed with webpack or browserify, generates scoped class names</li>
          <li>Explicit dependencies</li>
          </ul>`}
        >
          <Image src={images.cssModulesLogo} width={200} />
          <Layout>
            <Fill>
              <div className="filePane">
                <Text textColor="primary">style.css</Text>
                <CodePane lang="css" source={examples.cssModules.style} />
              </div>
            </Fill>
            <Fill>
              <div className="filePane">
                <Text textColor="primary">app.js</Text>
                <CodePane lang="js" source={examples.cssModules.app} />
              </div>
            </Fill>
          </Layout>
          <Link
            textSize={24}
            padding="5rem auto 0"
            textColor="primary"
            href="https://www.webpackbin.com/bins/-KlJuBapiJHedN20gb5K"
            target="_blank"
          >
            webpack bin
          </Link>
        </Slide>
        <Slide
          transition={["zoom"]}
          notes={`<ul>
            <li>Why List</li>
          <li>File Scoped, no more global scope or BEM practices</li>
          <li>Inheritance</li>
          <li>Designers are unaffected, stay in css, only change in on devs part</li>
          </ul>
          <ul>
          <li>Why Not List</li>
          <li>Requires a build step with webpack or browserify</li>
          <li>due to build step, when distibution users must also comply</li>
          <li>Centralizing concerns at the functional level</li>
          </ul>`}
        >
          <Image src={images.cssModulesLogo} width={200} />
          <Layout>
            <Fill>Scope<br /><span style={{ fontSize: "6rem" }}>📄</span></Fill>
            <Fill>Team Type<br /><span style={{ fontSize: "6rem" }}>🎨</span></Fill>
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
          <Heading lineHeight={1.25} textSize="52px" style={{ margin: "0 auto 2rem" }}>React</Heading>
          <ComponentPlayground theme="dark" previewBackgroundColor="#cdcdcd" code={examples.react} />
        </Slide>
        <Slide
          bgColor="tertiary"
          transition={["fade"]}
          notes={`<ul>
          <li>All css-in-js libraries as listed in the GH repo</li>
          <li>Notice all the instances of React</li>
          </ul>`}
        >
          <Heading lineHeight={1.25} textSize="52px" textColor="primary">css-in-js</Heading>
          <ArrayList
            items={cssJsLibs}
            textSize="1.75rem"
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}
          />
          <Link href="https://github.com/MicheleBertoli/css-in-js" target="_blank" textColor="primary" textSize="1rem">
            Source: https://github.com/MicheleBertoli/css-in-js
          </Link>
        </Slide>
        <Slide
          bgColor="tertiary"
          transition={["fade"]}
          notes={`<ul>
          <li>here is what we will focus on</li>
          <li>Unique approached and adoption</li>
          <li>React Specific, but I will mention non-react options</li>
          </ul>`}
        >
          <Heading lineHeight={1.25} textSize="52px" textColor="primary">css-in-js</Heading>

          <ArrayList
            items={cssJsLibs.map((v, i) => (
              <SmallListItem key={i} textColor={["glamorous", "styled-components"].includes(v) && "primary"}>
                - {v}
              </SmallListItem>
            ))}
            textSize="1.75rem"
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}
          />
          <Link href="https://github.com/MicheleBertoli/css-in-js" target="_blank" textColor="primary" textSize="1rem">
            Source: https://github.com/MicheleBertoli/css-in-js
          </Link>
        </Slide>

        <Slide bgColor="codePaneBg">
          <Heading lineHeight={1.25} textSize="52px" margin="0 auto 2rem">Glamorous</Heading>
          <Layout>
            <Fill>
              <CodePane lang="js" source={examples.glamorous} />
            </Fill>
            <Fill>
              <CodePane lang="js" source={examples.container} />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading lineHeight={1.25} textSize="52px" margin="0 auto 2rem" textColor="primary">
            Styled Components
          </Heading>
          <Layout style={{ backgroundColor: theme.screen.colors.codePaneBg, border: "2px solid white" }}>
            <Fill>
              <CodePane lang="js" source={examples.styleComponents} />
            </Fill>
            <Fill>
              <CodePane lang="js" source={examples.container} />
            </Fill>
          </Layout>
        </Slide>
        <Slide
          bgColor="quartenary"
          transition={["zoom"]}
          notes={`<ul>
            <li>Why List</li>
          <li>Not great for design teams, but works well for devs</li>
          <li>Lot of options, different support levels but css-in-js has you covered</li>
          <li>Code centralized by feature not tech</li>
          <li>React Native Styling Options, re-enforces the learn once write anywhere</li>
          </ul>
          <ul>
          <li>Why Not List</li>
          <li>Lint is the works but not ready</li>
          <li>Extracting to possible, but outside SSR</li>
          </ul>`}
        >
          <Heading lineHeight={1.25} textSize="52px" textColor="primary">css-in-js</Heading>
          <Layout>
            <Fill>Scope<br /><span style={{ fontSize: "6rem" }}>🎯</span></Fill>
            <Fill>Team Type<br /><span style={{ fontSize: "6rem" }}>💻</span></Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading>Helpful Tools</Heading>
          <AppearList
            items={[
              <Link textColor="secondary" href="http://postcss.org/">PostCSS (Autoprefixer)</Link>,
              <Link textColor="secondary" href="https://github.com/JedWatson/classnames">classnames</Link>,
              <Link textColor="secondary" href="https://github.com/styled-components/polished">polished</Link>,
              <Link textColor="secondary" href="https://github.com/typekit/webfontloader">webfontloader</Link>,
              <Link textColor="secondary" href="https://github.com/facebook/jest">jest</Link>,
            ]}
          />
        </Slide>
        <Slide>
          <Heading>Recap</Heading>
          <Table textSize={10}>
            <TableHeader>
              <TableRow>
                <TableHeaderItem />
                <TableHeaderItem>Scoping</TableHeaderItem>
                <TableHeaderItem>Team Type</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHeaderItem textAlign="left">CSS</TableHeaderItem>
                <TableItem>🌎</TableItem>
                <TableItem>👨‍👩‍👧‍👦</TableItem>
              </TableRow>
              <TableRow>
                <TableHeaderItem textAlign="left">CSS Modules</TableHeaderItem>
                <TableItem>📄</TableItem>
                <TableItem>🎨</TableItem>
              </TableRow>
              <TableRow>
                <TableHeaderItem textAlign="left">css-in-js</TableHeaderItem>
                <TableItem>🎯</TableItem>
                <TableItem> 💻 </TableItem>
              </TableRow>
            </TableBody>
          </Table>
          <Appear><Heading textSize={48} textColor="tertiary">You can use them together!</Heading></Appear>
        </Slide>
        <Slide><Image src={images.sponsors} /></Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Thank You!
          </Heading>
          <Text margin="5rem 0 0" textColor="tertiary" size={3} bold>
            Kyle Welch
          </Text>
          <Link
            href="http://slides.krwelch.com/component-styling/"
            margin=".5rem 0 0"
            textColor="tertiary"
            size={0.75}
            italic
          >
            http://slides.krwelch.com/component-styling/
            <Image src="https://chart.googleapis.com/chart?cht=qr&chs=180x180&chl=http%3A%2F%2Fslides.krwelch.com%2Fcomponent-styling%2F&chld=L|1" />
          </Link>
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
      </Deck>
    );
  }
}
