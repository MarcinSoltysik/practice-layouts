# notebook

Notes from the tour-web project

## Building a project from scratch

What I do and what I learn

### How it's working

#### section-stories




- tex flow around shapes: shape-outside, float
- filter to images
- background video

- tex flow around shapes: shape-outside, float
  shape-outside: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  transform: translateX(-3rem) skewX(12deg);

- filter to images
  filter: blur(3px) brightness(80%);

- background video
  <video class="bg-video__content" autoplay muted loop>
  <source src="/img/video.mp4" type="video/mp4" />
  <source src="/img/video.webm" type="video/webm" />
  Your browser is not supported!
  </video>

  object-fit: cover;

#### section-tours

- how to build rotating card
- how to use perspective in css
- back-face-visibility property
- background blend modes
- how and when to use box-decoration-break

section-tours
\_card.scss

##### rotating card

- how to build rotating card
- how to use perspective in css
- back-face-visibility property

perspective: 150rem;
transform: rotateY(180deg);
backface-visibility: hidden;

- background blend modes
  background-blend-mode: screen;
  box-decoration-break:

#### section-features

- icon font
- direct child celector & > \*
- transform: skewY

.feature-box {
background-color: rgba($color-white, 0.8);
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba($color-black, 0.15);
transition: transform 0.3s;

&\_\_icon {
font-size: 6rem;
margin-bottom: 0.5rem;
display: inline-block;
background-image: linear-gradient(
to right,
$color-primary-light,
$color-primary-dark
);
-webkit-background-clip: text;
color: transparent;
}

&:hover {
transform: translateY(-1.5rem) scale(1.03);
}
}

.section-features {
padding: 20rem 0;
background-image: linear-gradient(
to right bottom,
rgba($color-primary-light, 0.8),
      rgba($color-primary-dark, 0.8)
),
url(../img/nat-4.jpg);
background-size: cover;
transform: skewY(-7deg);
margin-top: -10rem;

& > \* {
transform: skewY(7deg);
}
}

#### section-about

How to architect and build a simple grid system
How the attribute selector works
How the :not pseudo-class works
How calc()works and what's the difference between calc() and simple Sass operations

1. grid

<!-- <section class="grid-test">
  <div class="row">
    <div class="col-1-of-2">Col 1 of 2</div>
    <div class="col-1-of-2">Col 2 of 2</div>
  </div>
  <div class="row">
    <div class="col-1-of-3">Col 1 of 2</div>
    <div class="col-1-of-3">Col 2 of 3</div>
    <div class="col-1-of-3">Col 3 of 3</div>
  </div>
  <div class="row">
    <div class="col-1-of-3">Col 1 of 3</div>
    <div class="col-2-of-3">Col 2 of 3</div>
  </div>

  <div class="row">
    <div class="col-1-of-4">Col 1 of 4</div>
    <div class="col-1-of-4">Col 1 of 4</div>
    <div class="col-1-of-4">Col 1 of 4</div>
    <div class="col-1-of-4">Col 1 of 4</div>
  </div>

  <div class="row">
    <div class="col-1-of-4">Col 1 of 4</div>
    <div class="col-1-of-4">Col 1 of 4</div>
    <div class="col-2-of-4">Col 2 of 4</div>
  </div>

  <div class="row">
    <div class="col-1-of-4">Col 1 of 4</div>
    <div class="col-3-of-4">Col 3 of 4</div>
  </div>
</section> -->

#### header

- html {
  // This defines what 1rem is
  font-size: 62.5%;
  }

1. import fontów
<link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900">

2. icona, favicon
<link rel="shortcut icon" type="image/jpg" href="img/favicon.png" />

3. global reset - css

- Każda przeglądarak, ma jakieś domyślne swoje ustawienia jak dany tag wyświetlać, dlatego na początku robisz tzw. reste globalny. Dajesz selektor \* ,

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

- możesz też na początku projektu zrobić font dla całego projektu, już jest zaimportowany w html, a teraz w css, dajesz jego właściciwosci
- dalczego w body - dlatego, aby w ramach dziedziczenia każdy nastepny elelemnt miał już to ustawione

- dziedziczenie :

  body {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 16px;
  }

1. Wyjasnij co to

   - box-sizing: border-box;
   - line-height: 1.7;
   - height: 95vh;
     // obrazek nie zajmuje całego ekranu, zobacz masz odcięcie na dole

2. ustawienie obrazka jako tła,
   Tu masz kilka rzeczy do zrobienia, i wyjaśnienia

- height: 95vh; - zajmuje 95 wysokosci okna przegladarki

- background-image: url(./img/hero.jpg);
  // miejsce gdzie masz polozony obrazek

- background-size: cover;
  // pokrycie obrazkiem,

- background-position: top; // bottom, center
  // tu musisz sobie zobaczyc co sie dzieje jak zmniejszasz okno przegldaraki, w zaleznosci co masz ustawione to w taki sposb ten obraze zawsze bedzie "przypiety" a inne elementy beda obcinane

3. stylowanie obrazu - 'kolorowanie'
   background-image: linear-gradient(
   to right bottom,
   rgba(126, 213, 111, 0.8),
   rgba(40, 180, 131, 0.8)
   ),
   url(img/hero.jpg);

4. robienie kształtów - https://bennettfeely.com/clippy/

   - clip-path: polygon(0 0, 100% 0, 100% 550px, 0 100%);

   - clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

   - zamiast sztywnego px, zrób vh, dzieki temu bedzie "responsywne'

5. pos
   position: relative;
   position: absolute;
   stylowanie top, left, względem rodzica, dlatego tag ktory chdesz stylowac musi byc absolute ale kjego rodzic musi byc relative

6. transform: translate(-50%, -50%);

7. animacje

- @keyframes moveInRight {
  0% {
  opacity: 0;
  transform: translateX(100px);
  }

  80% {
  transform: translateX(-15px);
  }

  100% {
  opacity: 1;
  transform: translate(0);
  }
  }

  - animation-name: moveInRight;
  - animation-duration: 3s;
  - animation-timing-function: ease-out;
    // zobacz jeszcze animation-timing-function: ease-in;

8. stylowanie LINKÓW <a href> // button

   /_ button _/

- pseudo-classes

  .btn:link,
  .btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 40px;
  display: inline-block; // stylujesz link, a on jest inline
  border-radius: 100px;
  transition: all 0.2s; // to daje zwolnienei ruchu
  }

  .btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); // masz pojawia sie cien jak jest najechany
  }

  .btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); // ten coien przy wcisnieciu sie zmniejsza daje efek klikania
  }

  .btn-white {
  background-color: #fff;
  color: #777;
  }

- pseudo element

// section-tours
// git commit -m 'feat(tour-web): Add '
