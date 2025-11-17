import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="This is Janithmi's Portfolio Website" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta
          name="description"
          content="My name's JANITHMI. I'm a Fourth year undergraduate at the University of Moratuwa.
          I am a professional and passionate programmer in my daily life. A quick learner with a self-learning attitude. I love to learn and explore new technologies and am Passionate about Problem Solving. Love almost all the stacks of Software Engineering. My current stack includes React, Spring boot, Redux, tailwindCSS, Ant Design, MongoDB, Mysql, Microsoft SQL, AWS, etc."
        />
        <meta property="og:image" content="https://i.ibb.co/nMCy0Tkv/IMG-8514.jpg" />
        <meta property="og:site_name" content="Janithmi's Portfolio" />
        <meta property="og:title" content="Portfolio of Janithmi" />
        <meta property="og:url" content="https://fanciful-nasturtium-9d14a5.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="My name's JANITHMI. I'm a Fourth year undergraduate at the University of Moratuwa.
          I am a professional and passionate programmer in my daily life. A quick learner with a self-learning attitude. I love to learn and explore new technologies and am Passionate about Problem Solving. Love almost all the stacks of Software Engineering. My current stack includes React, Spring boot, Redux, tailwindCSS, Ant Design, MongoDB, Mysql, Microsoft SQL, AWS, etc."
        />

        <meta itemprop="name" content="Portfolio of Janithmi" />
        <meta itemprop="url" content="https://fanciful-nasturtium-9d14a5.netlify.app/" />
        <meta
          itemprop="description"
          content="My name's JANITHMI. I'm a Fourth year undergraduate at the University of Moratuwa.
          I am a professional and passionate programmer in my daily life. A quick learner with a self-learning attitude. I love to learn and explore new technologies and am Passionate about Problem Solving. Love almost all the stacks of Software Engineering. My current stack includes React, Spring boot, Redux, tailwindCSS, Ant Design, MongoDB, Mysql, Microsoft SQL, AWS, etc."
        />
        <meta itemprop="thumbnailUrl" content="" />

        <meta
          name="linkedin:url"
          content="https://www.linkedin.com/in/janithmi-dissanayake/"
        />
        <meta name="twitter:title" content="JANITHMI" />
        <meta
          name="twitter:description"
          content="Hello!
          This is Janithmi, a Fourth year undergraduate at the University of Moratuwa. 
          I am a professional and passionate programmer in my daily life. A quick learner with a self-learning attitude. I love to learn and explore new technologies and am Passionate about Problem Solving. 
          
          Love almost all the stacks of Software Engineering. My current stack includes React, Spring boot, Redux, tailwindCSS, Ant Design, MongoDB, Mysql, Microsoft SQL, AWS, etc.
          "
        />
        <meta name="twitter:card" content="summary" />
      </Head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

