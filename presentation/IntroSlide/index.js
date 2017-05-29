import React from "react";
import { Image, Heading, Slide, Text, Layout, Fill } from "spectacle";

export default ({ images }) => (
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
);
