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
                <CodePane lang="css" source={examples.OGCss} margin="20px auto" />
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <CodePane lang="css" source={examples.BEM} margin="20px auto" />
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <CodePane lang="css" source={examples.Sass} margin="20px auto" />
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["spin"]} bgColor="codePaneBg">
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
          <Link textColor="primary" href="https://www.webpackbin.com/bins/-KlJuBapiJHedN20gb5K" target="_blank">
            Webpack Bin
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
          <li>due to build step, when distibution users must also comply<li>
          <li>Centralizing concerns at the functional level</li>
          </ul>`}
        >
          <Image src={images.cssModulesLogo} width={200} />
          <Layout>
            <Fill>
              <Text textColor="tertiary">Pros</Text>
              <AppearList items={["Scoped classes", "Composes", "Design Teams"]} />
            </Fill>
            <Fill style={{ marginLeft: "1rem" }}>
              <Text textColor="tertiary">Cons</Text>
              <AppearList items={["Requires Build Step", "Packaging", "Multiple Files"]} />
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <div><Image src={images.concerns} style={{ width: "55vw" }} /></div>
          <Link
            textColor="secondary"
            href="https://twitter.com/MicheleBertoli/status/868078729662279680"
            target="blank"
          >
            Source: Cristiano Rastelli (@areaweb)
          </Link>
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
          bgColor="quartenary"
          transition={["zoom"]}
          notes={`<ul>
            <li>Why List</li>
          <li>Lot of options, different support levels but css-in-js has you covered</li>
          <li>Code centralized by feature not tech</li>
          <li>Not great for design teams, but works well for devs</li>
          </ul>
          <ul>
          <li>Why Not List</li>
          <li>Lint is the works but not ready</li>
          <li>Extracting to possible, but outside SSR</li>
          </ul>`}
        >
          <Heading lineHeight={1.25} textSize="52px" textColor="primary">css-in-js</Heading>
          <Layout>
            <Fill>
              <Text textColor="tertiary">Pros</Text>
              <AppearList items={["CSS Feature Support", "Centralized Component Code", "Developer Friendly"]} />
            </Fill>
            <Fill style={{ marginLeft: "1rem" }}>
              <Text textColor="tertiary">Cons</Text>
              <AppearList items={["No Style Linting", "CSS/JS Cached Together"]} />
            </Fill>
          </Layout>
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

        <Slide>
          <Heading lineHeight={1.25} textSize="52px" style={{ margin: "0 auto 2rem" }}>Glamorous</Heading>
          <ComponentPlayground
            code={examples.glamorous}
            previewBackgroundColor="#cdcdcd"
            scope={{
              glamor: require("glamor").default,
              glamorous: require("glamorous").default,
            }}
          />
        </Slide>

        <Slide
          bgColor="tertiary"
          transition={["zoom"]}
          notes={`<ul>
            <li>Why List</li>
          <li>Objects allow for a lot: themeing, composition, and dynamic/calculated styles</li>
          <li>Library it self if just shy of 8kb, and it preformant</li>
          <li>Developer Centric teams may favor the object syntax, also easily ports from inline react styles</li>
          </ul>
          <ul>
          <li>Why Not List</li>
          <li>Small form factor is negated by (~30kb) of glamor, if size matter this edge if you are already using glamor</li>
          <li>Younger library only 2mo, adoption is rising, but still has small community</li>
          <li>Glamor can be used directly, if looking for non-react option</li>
          </ul>`}
        >
          <Image src={images.glamorousLogo} width={200} />
          <Layout>
            <Fill>
              <Text textColor="primary">Pros</Text>
              <AppearList items={["Object Literals", "Small (~8kB)", "Small Dev-Heavy Teams"]} />
            </Fill>
            <Fill style={{ marginLeft: "1rem" }}>
              <Text textColor="primary">Cons</Text>
              <AppearList items={["Requires Glamor", "Young Library"]} />
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading lineHeight={1.25} textSize="52px" style={{ margin: "0 auto 2rem" }}>Styled Components</Heading>
          <ComponentPlayground
            code={examples.styleComponents}
            previewBackgroundColor="#cdcdcd"
            scope={{
              styled: require("styled-components").default,
            }}
          />
        </Slide>

        <Slide
          transition={["zoom"]}
          notes={`<ul>
            <li>Why List</li>
          <li>Huge community, 9mo, v2 just released</li>
          <li>Write CSS directly in js</li>
          <li>Great Feature of v2, critical css</li>
          </ul>
          <ul>
          <li>Why Not List</li>
          <li>Much like JSX this adds just another complex looking syntax</li>
          <li>RTL not support natively, caused introduction of glamorous</li>
          </ul>`}
        >
          <Image src={images.scLogo} width={200} />
          <Layout>
            <Fill>
              <Text textColor="tertiary">Pros</Text>
              <AppearList items={["Largely Adopted", "Uses CSS Syntax", "Above the Fold styling"]} />
            </Fill>
            <Fill style={{ marginLeft: "1rem" }}>
              <Text textColor="tertiary">Cons</Text>
              <AppearList items={["Fear of Template Literals", "RTL Support"]} />
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading>Recap</Heading>
          <Table textSize={10}>
            <TableHeader>
              <TableRow>
                <TableHeaderItem />
                <TableHeaderItem>Scoping</TableHeaderItem>
                <TableHeaderItem>Syntax</TableHeaderItem>
                <TableHeaderItem>Best Fit</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHeaderItem textAlign="left">CSS</TableHeaderItem>
                <TableItem>Global</TableItem>
                <TableItem>CSS</TableItem>
                <TableItem>Anyone</TableItem>
              </TableRow>
              <TableRow>
                <TableHeaderItem textAlign="left">CSS Modules</TableHeaderItem>
                <TableItem>File</TableItem>
                <TableItem>CSS</TableItem>
                <TableItem>Designers</TableItem>
              </TableRow>
              <TableRow>
                <TableHeaderItem textAlign="left">Glamorous</TableHeaderItem>
                <TableItem>Component</TableItem>
                <TableItem>JS Objects</TableItem>
                <TableItem>Technical</TableItem>
              </TableRow>
              <TableRow>
                <TableHeaderItem textAlign="left">Styled Components</TableHeaderItem>
                <TableItem>Component</TableItem>
                <TableItem>CSS</TableItem>
                <TableItem>Technical</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide>
          <Heading>Helpful Tools</Heading>
          <AppearList items={["PostCSS (Autoprefixer)", "classnames", "polished", "webfontloader", "jest"]} />
        </Slide>
        <Slide>
          <Heading>Resources</Heading>
          <AppearList items={["PostCSS (Autoprefixer)", "classnames", "polished", "webfontloader", "jest"]} />
        </Slide>
        <Slide><Image src={images.sponsors} /></Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Thank You!
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
      </Deck>
    );
  }
}
