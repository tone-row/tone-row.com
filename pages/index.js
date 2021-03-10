import Head from "next/head";

export default function Home() {
  return (
    <div>
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
          Tone Row is a space for web development research with a focus on
          programming for social-impact.
        </p>
        <div className="projects-list">
          <span>
            Our latest project is{" "}
            <a href="https://flowchart.fun">flowchart.fun</a>
          </span>
        </div>
        <p>
          Find us on <a href="https://github.com/tone-row">Github</a> and{" "}
          <a href="https://twitter.com/row_tone">Twitter</a>
        </p>
        <p>For more info reach out to rob.gordon@tone-row.com</p>
      </main>
    </div>
  );
}
