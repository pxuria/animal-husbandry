const faFooter = `
<div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
<div class="position-relative py-5 px-3 h-84vh" dir="rtl">
<h2 class="h2 text-light text-start fw-bold">تماس با ما</h2>
<div class="row text-light mt-5">
  <!-- Address -->
  <div class="col-12 col-md-5">
    <h3 class="h3 mb-4">محل ما</h3>
    <address class="text-bolder text-start">
      تهران، خیابان آزادی، چهارراه آبرسان، فلکه دانشگاه، برج بلور، طبقه
      456
    </address>
  </div>

  <!-- Contact us -->
  <div class="col-12 col-md-5 text-start offset-md-2">
    <div class="d-flex flex-column">
      <!-- telephone number -->
      <div>
        <h3 class="h3 mb-3">با ما تماس بگیرید</h3>
        <a href="tel:+1234567890" class="text-light text-decoration-none fw-bolder">123 456 7890</a>
      </div>
      <!-- E-mail -->
      <div class="mt-3">
        <h4 class="h4">به ما ایمیل بزنید</h4>
        <a href="mailto:mail@example.com"
          class="text-light text-decoration-none fw-normal text-start">mail@example.com</a>
      </div>
    </div>
  </div>
</div>
</div>`;

const enFooter = `
<div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
  <div class="position-relative py-5 px-3 h-84vh" dir="ltr">
        <h2 class="h2 text-light text-end fw-bold">Contact us</h2>
        <div class="row text-light mt-5">
          <!-- Address -->
          <div class="col-12 col-md-5  offset-md-2">
            <h3 class="h3 mb-4">Our place</h3>
            <address class="text-bolder text-end">Tehran, Azadi Street, Abrasan Crossing, University Block, Bloor Tower, 456th Floor</address>
          </div>

          <!-- Contact us -->
          <div class="col-12 col-md-5 text-end">
            <div class="d-flex flex-column">
              <!-- telephone number -->
              <div>
                <h3 class="h3 mb-3">Contact us</h3>
                <a href="tel:+1234567890" class="text-light text-decoration-none fw-bolder">123 456 7890</a>
              </div>
              <!-- E-mail -->
              <div class="mt-3">
                <h4 class="h4">Email us</h4>
                <a href="mailto:mail@example.com"
                  class="text-light text-decoration-none fw-normal text-start">mail@example.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>`;

const faHeader = `
      <div class="bg-header">
      <nav class="navbar navbar-expand-sm navbar-light p-0 py-3 bg-white">
        <div class="container">
          <div class="row align-items-start w-100">
            <div class="col-4 d-inline-block d-sm-none">
              <a class="navbar-brand nav-brand" href="#"><img src="assets/pars-sheede-raw-log.png"
                  alt="پارس شیده لوگو" /></a>
            </div>
            <div class="col-8 col-sm-12 d-flex justify-content-end">
              <button class="hamburger d-block d-sm-none">
                <div class="bar"></div>
              </button>

              <div class="mobile-nav">
                <ul class="navbar-nav flex-sm-row-reverse flex-column align-items-sm-baseline align-items-center gap-3">
                  <li class="nav-item text-center">
                    <a class="nav-link fw-bold text-dark" href="./index.html">صفحه اصلی</a>
                  </li>
                  <li class="nav-item nav-item-home mt-2 mt-lg-0 text-center">
                    <a class="nav-link text-dark fw-bold" aria-current="page" href="./index.html#about-us">درباره ما</a>
                  </li>
                  <li class="nav-item dropdown text-center">
                    <a class="nav-link dropdown-toggle text-dark fw-bold" href="#" id="navbarDropdown" role="button"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      خدمات ما
                    </a>
                    <ul class="dropdown-menu border-0" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item text-center text-light fw-bolder nav-link-active"
                          href="./sheep.html">گوسفند</a>
                      </li>
                      <li>
                        <a class="dropdown-item text-center fw-bolder" href="./potato.html">سیب زمینی</a>
                      </li>
                      <li>
                        <a class="dropdown-item text-center fw-bolder" href="./onion.html">پیاز</a>
                      </li>
                      <li>
                        <a class="dropdown-item text-center fw-bolder" href="./fertilizer.html">کود</a>
                      </li>
                    </ul>
                  </li>
                  <li class="text-center">
                    <a class="nav-link text-dark fw-bold" href="#footer">تماس با ما</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
      `;

const enHeader = `
<div class="bg-header">
      <nav class="navbar navbar-expand-sm navbar-light p-0 py-3 bg-white">
        <div class="container">
          <div class="row align-items-start w-100">
            <div class="col-4 d-inline-block d-sm-none">
              <a class="navbar-brand nav-brand" href="#"><img src="assets/pars-sheede-raw-log.png"
                  alt="پارس شیده لوگو" /></a>
            </div>
            <div class="col-8 col-sm-12 d-flex justify-content-end">
              <button class="hamburger d-block d-sm-none">
                <div class="bar"></div>
              </button>

              <div class="mobile-nav">
                <ul class="navbar-nav flex-sm-row-reverse flex-column align-items-sm-baseline align-items-center gap-3">
                  <li class="nav-item text-center">
                    <a class="nav-link fw-bold text-dark" href="./index.html">Home</a>
                  </li>
                  <li class="nav-item nav-item-home mt-2 mt-lg-0 text-center">
                    <a class="nav-link text-dark fw-bold" aria-current="page" href="./index.html#about-us">About us</a>
                  </li>
                  <li class="nav-item dropdown text-center">
                    <a class="nav-link dropdown-toggle text-dark fw-bold" href="#" id="navbarDropdown" role="button"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      Services
                    </a>
                    <ul class="dropdown-menu border-0" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item text-center text-light fw-bolder nav-link-active"
                          href="./sheep.html">Sheep</a>
                      </li>
                      <li>
                        <a class="dropdown-item text-center fw-bolder" href="./potato.html">Potato</a>
                      </li>
                      <li>
                        <a class="dropdown-item text-center fw-bolder" href="./onion.html">Onion</a>
                      </li>
                      <li>
                        <a class="dropdown-item text-center fw-bolder" href="./fertilizer.html">Fertilizer</a>
                      </li>
                    </ul>
                  </li>
                  <li class="text-center">
                    <a class="nav-link text-dark fw-bold" href="#footer">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
`;

const faFirstP = `
      <div class="border-bottom-blue-full mb-4 mt-3-5"></div>
            <div
              class="d-flex flex-col card border-0 shadow-lg border-rad-2 wow animate__animated animate__zoomIn py-4 px-3"
              dir="rtl">
              <p class="text-muted fw-bolder text-center paragraph" dir="rtl">
                گوسفند یکی از مهمترین حیوانات پرورشی در جهان است. آنها برای پشم
                و گوشتشان که از هزاران سال قبل توسط انسان‌ها استفاده می‌شده اند
                شناخته شده اند. در سال‌های اخیر، علاقه‌ای به گوسفندان با کیفیت
                بالا که در بهترین شرایط ممکن پرورش یافته‌اند، به وجود آمده است.
              </p>
              <p class="text-muted fw-bolder text-center paragraph" dir="rtl">
                یکی از عوامل اصلی در تولید گوسفندان با کیفیت بالا، محیطی است که
                آنها در آن پرورش می‌یابند. گوسفندان در مناطقی با مراتع فراوان،
                آب تمیز و دمای ملایم بهتر رشد می‌کنند. در این محیط، احتمال ابتلا
                به مشکلات سلامتی کمتر است، که می‌تواند تأثیر منفی بر کیفیت گوشت
                یا پشم آنها داشته باشد.
              </p>
            </div>`;

const enFirstP = `
<div class="border-bottom-blue-full mb-4 mt-3-5"></div>
            <div
              class="d-flex flex-col card border-0 shadow-lg border-rad-2 wow animate__animated animate__zoomIn py-4 px-3"
              dir="rtl">
              <p class="text-muted fw-bolder text-center paragraph" dir="ltr">Sheep is one of the most important farmed animals in the world. They are known for their wool and meat, which have been used by humans for thousands of years. In recent years, there has been an interest in high-quality sheep raised under the best possible conditions.</p>
              <p class="text-muted fw-bolder text-center paragraph" dir="ltr">One of the main factors in producing high quality sheep is the environment in which they are raised. Sheep grow best in areas with abundant pastures, clean water and mild temperatures. In this environment, they are less likely to develop health problems, which can negatively affect the quality of their meat or wool.</p>
            </div>
`;

const faSecP = `
<div class="border-bottom-blue-full my-4"></div>

            <div class="card border-0 shadow-lg border-rad-2  py-4 px-3">
              <p class="text-muted fw-bolder text-center paragraph wow animate__animated animate__fadeInDown" dir="rtl">
                در هنگام پرورش گوسفندان برای مصرف به عنوان گوشت ، حیوانات باید
                به یک رژیم غذایی سالم و متعادل تأمین شود. این عموما شامل خوراک
                با کیفیت بالا و آب تازه است، همچنین برای تأمین مواد مغذی،
                مکمل‌ها نیز در موارد لازم استفاده می‌شوند. علاوه بر تغذیه،
                گوسفندان باید در محیطی با استرس کم و فضایی لازم برای چریدن،
                پرورش داده شوند.
              </p>
            </div>`;

const enSecP = `
<div class="border-bottom-blue-full my-4"></div>

            <div class="card border-0 shadow-lg border-rad-2  py-4 px-3">
              <p class="text-muted fw-bolder text-center paragraph wow animate__animated animate__fadeInDown" dir="ltr">When raising sheep for meat consumption, the animals must be fed a healthy and balanced diet. This generally includes high quality feed and fresh water, as well as providing nutrients, supplements are also used where necessary. In addition to feeding, sheep should be raised in a low-stress environment with enough space to graze.</p>
            </div>`;

const faSwiperHeader = `انواع گوسفند`;

const enSwiperHeader = `Types of sheep`;

const faPriceListHeader = `
<h2 class="h2 my-5 wow animate__animated animate__fadeInRight" dir="rtl">
لیست قیمت های دام زنده
</h2>`;

const enPriceListHeader = `
<h2 class="h2 my-5 wow animate__animated animate__fadeInRight" dir="ltr">
Live livestock price list
</h2>`;

const faThead = `
<tr>
<th scope="col">استان / قیمت</th>
<th scope="col">حداقل</th>
<th scope="col">حداکثر</th>
<th scope="col">میانگین</th>
</tr>`;

const enThead = `
<tr>
<th scope="col">Province / price</th>
<th scope="col">Minimum</th>
<th scope="col">Maximum</th>
<th scope="col">Average</th>
</tr>`;

const enTehran = `Tehran`;
const enYazd = `Yazd`;
const enEsfehan = `Esfehan`;
const enFars = `Fars`;
const enHamedan = `Hamedan`;
const enQom = `Qom`;
const enMarkazi = `Markazi`;
const enChaharMahalBakhtiari = `ChaharMahalBakhtiari`;

const faTehran = `تهران`;
const faYazd = `یزد`;
const faEsfehan = `اصفهان`;
const faFars = `فارس`;
const faHamedan = `همدان`;
const faQom = `قم`;
const faMarkazi = `مرکزی`;
const faChaharMahalBakhtiari = `چهارمحال بختياري`;

document.querySelector(".header-swiper").innerHTML = faSwiperHeader;

document.querySelector(".price-list-header").innerHTML = faPriceListHeader;

document.querySelector("table thead").innerHTML = faThead;
