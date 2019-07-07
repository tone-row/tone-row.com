import Head from 'next/head';

function Home() {
  return (
    <>
      <Head>
        <title>Tone Row</title>
      </Head>
      <main>
        <p>
          Tone Row is a digital design and development collective with 10 years
          of experience making websites and web applications.
        </p>
        <p>
          We enjoy working with nonprofits and social-impact startups, artists
          and cultural institutions, small businesses, and groups in public
          health and education.
        </p>
        <p>
          Check out the services we offer, our past work, and the philosophy
          that drives it. Then get in touch with us at{' '}
          <a
            href="mailto:bonjour@tone-row.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            bonjour@tone-row.com
          </a>
          .
        </p>
      </main>
    </>
  );
}

export default Home;
