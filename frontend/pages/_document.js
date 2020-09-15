import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Playball&amp;display=swap'
            rel='stylesheet'
          ></link>
          <link
            href='https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&amp;display=swap'
            rel='stylesheet'
          ></link>

          <link
            rel='stylesheet'
            href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
            integrity='sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z'
            crossOrigin='anonymous'
          />

          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css'
          ></link>
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css'
          ></link>

          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
          />
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
          />
          <link
            rel='stylesheet'
            href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
          />
          {/* <link
            rel='stylesheet'
            href='https://unpkg.com/simplebar@latest/dist/simplebar.css'
          /> */}
          <link rel='stylesheet' href='/static/css/styles.css' />
          <link rel='stylesheet' href='/static/css/fonts-icon.css' />
          <link
            rel='stylesheet'
            id='handyman-fonts6-css'
            href='https://fonts.googleapis.com/css?family=Playfair+Display%3A400%2C400i%2C700%2C700i%2C900%2C900i&amp;ver=4.9.15'
            media='all'
          ></link>
          <script src='https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js'></script>
        </Head>
        <body>
          <Main />

          <NextScript />

          {/* <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script> */}
          {/* <script src='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js'></script> */}
          {/* <script src='https://alexandrebuffet.fr/codepen/slider/slick-animation.min.js'></script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
