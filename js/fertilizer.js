const enHeader = `<div class="bg-header">
<nav class="navbar navbar-expand-sm navbar-light p-0 py-3 bg-white">
  <div class="container">
    <div class="row align-items-center w-100">
      <div class="col-4 d-inline-block d-sm-none">
        <a class="navbar-brand nav-brand" href="#"><img src="assets/pars-sheede-raw-log.png"
            alt="پارس شیده لوگو" /></a>
      </div>
      <div class="col-8 col-sm-12 d-flex justify-content-end">
        <button class="hamburger d-block d-sm-none">
          <div class="bar"></div>
        </button>

        <div class="mobile-nav">
          <ul
            class="navbar-nav flex-sm-row-reverse flex-column align-items-sm-baseline align-items-center gap-3">
            <li class="nav-item text-center">
              <a class="nav-link fw-bold text-dark" href="./index.html">Home</a>
            </li>
            <li class="nav-item nav-item-home mt-2 mt-lg-0 text-center">
              <a class="nav-link text-dark fw-bold" aria-current="page" href="./index.html#about-us">About us</a>
            </li>
            <li class="nav-item dropdown text-center">
              <a class="nav-link dropdown-toggle text-dark fw-bold" href="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">Services</a>
              <ul class="dropdown-menu border-0" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item text-center fw-bolder" href="./sheep.html">Sheep</a>
                </li>
                <li>
                  <a class="dropdown-item text-center fw-bolder" href="./potato.html">Potato</a>
                </li>
                <li>
                  <a class="dropdown-item text-center fw-bolder" href="./onion.html">Onion</a>
                </li>
                <li>
                  <a class="dropdown-item text-center fw-bolder text-light nav-link-active"
                    href="./fertilizer.html">Fertiliser</a>
                </li>
              </ul>
            </li>
            <li class="text-center">
              <a class="nav-link text-dark fw-bold" href="#footer">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>
</div>`;

const faHeader = `<div class="bg-header">
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
          <ul
            class="navbar-nav flex-sm-row-reverse flex-column align-items-sm-baseline align-items-center gap-3">
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
                  <a class="dropdown-item text-center fw-bolder" href="./sheep.html">گوسفند</a>
                </li>
                <li>
                  <a class="dropdown-item text-center fw-bolder" href="./potato.html">سیب زمینی</a>
                </li>
                <li>
                  <a class="dropdown-item text-center fw-bolder" href="./onion.html">پیاز</a>
                </li>
                <li>
                  <a class="dropdown-item text-center fw-bolder text-light nav-link-active"
                    href="./fertilizer.html">کود</a>
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
</div>`;

const enFooter = `
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

const faFooter = `<div class="position-relative py-5 px-3 h-84vh" dir="rtl">
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

const enFirstP = `<div class="border-bottom-blue-full mb-4 mt-3-5"></div>
<div
  class="d-flex flex-col card border-0 shadow-lg border-rad-2 wow animate__animated animate__zoomIn py-4 px-3">
  <p class="text-muted fw-bolder text-center paragraph" dir="ltr">Fertilizer is simply a multivitamin and plant food aid that the farmer uses to strengthen and process more crops and also to nourish the soil, which are divided into three general categories based on their characteristics, origin and ingredients: organic fertilizer, biological fertilizer. (biological) and chemical (mineral) fertilizer. Fertilizers have been used by humans for thousands of years to improve soil and promote crop growth. In ancient times, people used animal waste, plant waste and fire soil to fertilize their crops. However, it was only in the 19th century that modern chemical fertilizers were developed and widely used.</p>
  <p class="text-muted fw-bolder text-center paragraph" dir="ltr">The first modern chemical fertilizer was ammonium nitrate, developed in the 1840s by the French chemist Henri Godin. This fertilizer was a mixture of ammonium and nitrate salts, which gives plants the nutrients they need to grow. Other chemical fertilizers such as phosphorus and potassium were also developed in the 19th century.</p>
  <p class="text-muted fw-bolder text-center paragraph" dir="ltr">For this reason, many farmers have turned to organic farming methods that rely on natural fertilizers such as compost, animal waste, and green soil.</p>
</div>`;

const faFirstP = `<div class="border-bottom-blue-full mb-4 mt-3-5"></div>
<div
  class="d-flex flex-col card border-0 shadow-lg border-rad-2 wow animate__animated animate__zoomIn py-4 px-3">
  <p class="text-muted fw-bolder text-center paragraph" dir="rtl">
    کود به‌طور ساده مولتی‌ویتامین و کمک غذای گیاهان است که کشاورز برای تقویت و عمل‌آوری محصولات بیشتر و
    همچنین تغذیه خاک از آن بهره می‌برد که بر اساس خصوصیات، منشأ و مواد تشکیل‌دهنده به سه دسته کلی تقسیم
    می شوند :

    کود آلی (ارگانیک)،
    کود زیستی (بیولوژیک) و
    کود شیمیایی (معدنی) .
    کود ها از هزاران سال قبل توسط انسان برای افزایش خاک و ترویج
    رشد محصولات استفاده شده اند. در زمان های قدیم، مردم از فضولات
    حیوانی، پسماندهای گیاهی و خاک های آتش برای کود دهی به
    محصولاتشان استفاده می کردند. با این حال، فقط در قرن نوزدهم
    کودهای شیمیایی مدرن توسعه یافت و به طور گسترده استفاده شدند.
  </p>
  <p class="text-muted fw-bolder text-center paragraph" dir="rtl">
    اولین کود شیمیایی مدرن، نیترات آمونیوم بود که در دهه 1840 توسط
    شیمی‌دان فرانسوی هنری گودین توسعه یافت. این کود مخلوطی از نمک
    های آمونیوم و نیترات بود که به گیاهان عناصر غذایی لازم را برای
    رشد می دهد. کودهای شیمیایی دیگر مانند فسفر و پتاسیم نیز در قرن
    نوزدهم توسعه یافتند.
  </p>
  <p class="text-muted fw-bolder text-center paragraph" dir="rtl">
    به همین دلیل، بسیاری از کشاورزان به
    روش
    های کشاورزی آلی
    متوجه شده اند که بر روی کودهای طبیعی مانند کمپوست، فضولات
    حیوانی و خاک سبز اعتماد می کنند.
  </p>
</div>`;

const enSecP = `
<div class="border-bottom-blue-full my-4"></div>
<div class="card border-0 px-3 py-4 shadow-lg border-rad-2">
  <p class="text-muted fw-bolder text-center paragraph" dir="ltr">Fertilizers contain the three basic nutrients nitrogen, phosphorus and potassium that plants need for growth. Nitrogen is needed for the growth of leaves and stems, phosphorus helps to develop strong roots and potassium to control water absorption and photosynthesis.</p>
  <p class="text-muted fw-bolder text-center paragraph" dir="ltr">Fertilizer can be applied to plants in different ways. For example, fertilizer is spread on the surface of the soil, placed in a narrow strip around the plant or between the seeds. In addition, in the foliar feeding method, the fertilizer is sprayed directly on the leaves of the plant.</p>
</div>`;

const faSecP = `<div class="border-bottom-blue-full my-4"></div>
<div class="card border-0 px-3 py-4 shadow-lg border-rad-2">
  <p class="text-muted fw-bolder text-center paragraph" dir="rtl">
    کودها شامل سه عنصر غذایی اساسی نیتروژن،
    فسفر و پتاسیم هستند که گیاهان برای رشد به آنها نیاز دارند.
    نیتروژن برای رشد برگ ها و ساقه ها لازم است، فسفر برای
    توسعه ریشه های قوی و پتاسیم برای کنترل جذب آب و فتوسنتز
    کمک می کند.
  </p>
  <p class="text-muted fw-bolder text-center paragraph" dir="rtl">
    کود می تواند به گیاهان به صورت مختلف اعمال شود. به عنوان
    مثال، کود بر روی سطح خاک پخش می شود، در نوار باریکی دور
    گیاه یا بین بذر قرار داده می شود. علاوه بر این، در روش
    تغذیه برگی، کود مستقیماً بر روی برگ گیاه اسپری می شود.
  </p>
</div>`;

const faSwiperHeader = "انواع کود";
const enSwiperHeader = "Fertilizer types";

document.querySelector(".header-swiper").innerHTML = faSwiperHeader;
