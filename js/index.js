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

const enHeader = `
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
              <a class="nav-link fw-bold text-light nav-link-active" href="./index.html">Home</a>
            </li>
            <li class="nav-item nav-item-home mt-2 mt-lg-0 text-center">
              <a class="nav-link text-dark fw-bold" aria-current="page" href="#about-us">About us</a>
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
                  <a class="dropdown-item text-center fw-bolder text-dark"
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

<div class="row align-items-center header-content">
<div
  class="col-12 col-lg-6 d-none d-sm-block text-center wow animate__animated animate__fadeInLeft">
  <a href="/index.html">
    <img src="assets/pars-sheede-raw-log.png" class="img-fluid header-img position-relative mt-3r ms-5" alt="" />
  </a>
</div>
<div class=" col-12 col-lg-6 py-4 wow animate__animated animate__fadeInRight header-bg-text  header-bg-text-en">
<h1 class="header-brand-text h1 text-dark fw-bold" dir="ltr">
Animal husbandry group<br />Pars Shide Institute
</h1>
<p class="text-muted header-text fw-bolder fs-6 w-75 me-auto ms-7 mt-4" dir="ltr">Pars Shideh Collection, one of the oldest sellers of live livestock, fertilizers, potatoes and onions with the highest quality level</p>
</div>
</div>`;

const faHeader = `
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
            <a class="nav-link fw-bold text-light nav-link-active" href="./index.html">صفحه اصلی</a>
          </li>
          <li class="nav-item nav-item-home mt-2 mt-lg-0 text-center">
            <a class="nav-link text-dark fw-bold" aria-current="page" href="#about-us">درباره ما</a>
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

<div class="row align-items-center header-content">
<div
  class="col-12 col-lg-6 d-none d-sm-block text-start text-lg-center wow animate__animated animate__fadeInLeft">
  <a href="/index.html">
    <img src="assets/pars-sheede-raw-log.png" class="img-fluid header-img position-relative mt-3r ms-5" alt="" />
  </a>
</div>
<div class=" col-12 col-lg-6 py-4 wow animate__animated animate__fadeInRight  header-bg-text">
  <h1 class="header-brand-text h1 text-dark fw-bold" dir="rtl">
    گروه دامپروری <br />موسسه پارس شیده
  </h1>
  <p class="text-muted header-text fw-bolder fs-6 w-75 me-auto ms-7 mt-4" dir="rtl">
    مجموعه پارس شیده ، یکی از با سابقه ترین فروشنده های دام زنده ، کود،
    سیب زمینی و پیاز با بالاترین سطح کیفیت
  </p>
</div>
</div>`;

const faFirstP = `
<h2 class="h2 mb-4 text-center wow animate__animated animate__fadeInDown" dir="rtl">
              درباره ما
            </h2>
            <div class="border-bottom-blue my-4"></div>
            <p class="text-muted fw-bolder text-center paragraph wow animate__animated animate__fadeInUp" dir="rtl">
              فروش دام زنده و تامین نیاز های گوشتی مصرف کنندگان از مزایای مهمی
              است که شرکت پارس شیده نیز با داشتن 1000 راس گوسفند آماده فروش و
              تامین نیاز های گوشتی میباشد. محصولات شرکت پارس شیده با استفاده
              از فناوری های نوین و تحت نظارت ویترینر های مجرب، دارای کیفیت
              بالا و طعم بی نطیر هستند.
            </p>
`;

const enFirstP = `<h2 class="h2 mb-4 text-center wow animate__animated animate__fadeInDown" dir="ltr">
About us
</h2>
<div class="border-bottom-blue my-4"></div>
<p class="text-muted fw-bolder text-center paragraph wow animate__animated animate__fadeInUp" dir="ltr">
Selling live livestock and meeting the meat needs of consumers is one of the important advantages that Pars Shideh company has 1000 sheep ready to sell and meet the meat needs. The products of Pars Shide company are of high quality and unique taste, using modern technologies and under the supervision of experienced veterinarians.
</p>`;

const fasecP = `
<h2 class="h2 mb-4 text-center wow animate__animated animate__slideInDown" dir="rtl">
              خدمات ما
            </h2>
            <div class="border-bottom-blue my-4"></div>

            <p class="text-muted fw-bolder text-center paragraph wow animate__animated animate__slideInRight" dir="rtl">
              پارس شیده،به عنوان یک مجموعه کشاورزی، با کشت سیب زمینی،پیاز و
              پرورش گوسفند شناخته شده است. تمرکز اصلی این مجموعه بر روی بهترین
              کیفیت محصولات است، به طوری که تمام اقدامات زراعی و دامداری در
              پارس شیده با استفاده از روش های سالم و پایدار صورت می گیرد. به
              همین دلیل، تولیدات پارس شیده فاقد هرگونه ماده شیمیایی آلوده است
              و بهترین کیفیت را در خود جای داده است. همچنین، در مورد پرورش
              گوسفند، نژاد های عالی به مشتریان عرضه می شود و با انتخاب پارس
              شیده، شما از بهترین کیفیت و عملکرد محصولات برخوردار خواهید شد.
            </p>
`;

const enSecP = `
<h2 class="h2 mb-4 text-center wow animate__animated animate__slideInDown" dir="ltr">
              Services
            </h2>
            <div class="border-bottom-blue my-4"></div>

            <p class="text-muted fw-bolder text-center paragraph wow animate__animated animate__slideInRight" dir="ltr">Pars Shideh, as an agricultural complex, is known for growing potatoes, onions and raising sheep. The main focus of this collection is on the best quality products, so that all agricultural and animal husbandry measures in Pars Shideh are carried out using healthy and sustainable methods. For this reason, Pars Shideh products do not contain any harmful chemicals and have the best quality. Also, in the case of sheep breeding, excellent breeds are offered to customers, and by choosing Pars Shideh, you will enjoy the best quality and performance of the products.</p>
`;
