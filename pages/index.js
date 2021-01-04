import Head from "next/head";
import { CssCustomProperties } from "playgoer";
import Playgoer from "playgoer";
import styles from "../styles/styles.json";
import schema from "../styles/schema";

export default function Home() {
  return (
    <Playgoer
      settings={{ enabled: true, public: true }}
      styles={styles}
      schema={schema}
    >
      <CssCustomProperties />
      <Head>
        <title>Tone Row</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          Tone Row lassos the digital work and collaboration of Rob Gordon{" "}
          <a href="https://twitter.com/rob______gordon">@rob______gordon</a>
        </p>
        <p>
          Sometimes an agency. Otherwise a space for research and social-impact
          programming.
        </p>
        <p>Reach out to rob.gordon@tone-row.com</p>
      </main>
    </Playgoer>
  );
}
