export default function Head() {
  return (
    <>
      <title>Pooria Mohammad Doust | Portfolio</title>
      <meta name="description" content="Professional portfolio of Pooria Mohammad Doust - IT Support, Networking, Programming, and more." />
      <meta property="og:title" content="Pooria Mohammad Doust | Portfolio" />
      <meta property="og:description" content="Professional portfolio of Pooria Mohammad Doust - IT Support, Networking, Programming, and more." />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Pooria Mohammad Doust Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0a0a0a" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pooria Mohammad Doust",
            url: "https://your-domain.com/",
            sameAs: [
              "https://www.linkedin.com/in/pooria-mohammad-doust/"
            ],
            jobTitle: "IT Support Specialist | Network Engineer | Programmer",
            image: "/og-image.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Your City",
              addressCountry: "Your Country"
            },
            email: "mailto:your.email@example.com"
          })
        }}
      />
    </>
  );
} 