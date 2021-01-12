import Head from "next/head";
import Playgoer, { CssCustomProperties } from "playgoer";
import styles from "../styles/styles.json";
import schema from "../styles/schema";

export default function Home() {
  return (
    <Playgoer schema={schema} styles={styles} settings={{ public: true }}>
      <div>
        <CssCustomProperties usePortal={false} />
        <Head>
          <title>Tone Row</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="Description"
            content="Tone Row is a digital research space & agency run by Rob Gordon"
          />
          <meta property="og:title" content="Tone Row" />
          <meta
            property="og:description"
            content="Tone Row is a digital research space & agency run by Rob Gordon"
          />
          <meta property="og:image" content="https://tone-row.com/smiley.png" />
        </Head>
        <main>
          <p>
            Tone Row lassos the digital work and collaboration of Rob Gordon{" "}
            <a href="https://twitter.com/rob______gordon">@rob______gordon</a>
          </p>
          <p>
            Sometimes an agency. Otherwise a space for research and
            social-impact programming.
          </p>
          <p>Reach out to rob.gordon@tone-row.com</p>
        </main>
      </div>
    </Playgoer>
  );
}
