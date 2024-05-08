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
                        <a class="dropdown-item text-center fw-bolder" href="./sheep.html">گوسفند</a>
                      </li>
                      <li>
                        <a class="dropdown-item text-center fw-bolder text-light nav-link-active"
                          href="./potato.html">سیب
                          زمینی</a>
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
    </div>`;

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
                            <a class="dropdown-item text-center fw-bolder"
                              href="./sheep.html">Sheep</a>
                          </li>
                          <li>
                            <a class="dropdown-item text-center text-light  fw-bolder nav-link-active" href="./potato.html">Potato</a>
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
                class="d-flex flex-col card border-0 shadow-lg border-rad-2 wow animate__animated animate__zoomIn py-4 px-3">
                <p class="text-muted fw-bolder text-center paragraph" dir="rtl">
                  سیب زمینی سبزیجاتی است که برای هزاران سال کشت شده است. این
                  سبزی اولین بار توسط مردم بومی منطقه کوه‌های آندس در آمریکای
                  جنوبی به ۷۰۰۰ سال قبل درون خاک های پرو کشت می شد. سیب زمینی در قرن
                  شانزدهم توسط فرمانداران اسپانیایی به اروپا هدیه داده شد و به
                  سرعت یک محصول عمومی شد.

                </p>
                <p class="text-muted fw-bolder text-center paragraph" dir="rtl">
                  امروزه، سیب‌زمینی در سراسر جهان کشت می‌شود و نه تنها در آشپزی
                  بلکه در بسیاری از دسرها و خوراکی ها هم به کار می‌رود. این سبزی کاربردهای
                  فراوانی دارد و انواع آن سیب زمینی پوست قهوه‌ای ، سیب زمینی طلایی ، سیب زمینی شیرین ،سیب زمینی قرمز،
                  سیب
                  زمینی استانبولی، سیب زمینی بنفش و ... می توان نام برد.</p>
              </div>
`;

const enFirstP = `
<div class="border-bottom-blue-full mb-4 mt-3-5"></div>
              <div
                class="d-flex flex-col card border-0 shadow-lg border-rad-2 wow animate__animated animate__zoomIn py-4 px-3">
                <p class="text-muted fw-bolder text-center paragraph" dir="ltr">Potato is a vegetable that has been cultivated for thousands of years. This vegetable was first cultivated by the indigenous people of the Andes region in South America 7000 years ago in the lands of Peru. Potatoes were gifted to Europe by Spanish governors in the 16th century and quickly became a popular crop.</p>
                
                <p class="text-muted fw-bolder text-center paragraph" dir="ltr">Today, potatoes are cultivated all over the world and are used not only in cooking but also in many desserts and snacks. This vegetable has many uses and its types are brown skin potato, golden potato, sweet potato, red potato, Istanbul potato, purple potato, etc.</p>
              </div>
`;

const faSecP = `
<div class="border-bottom-blue-full my-4"></div>
                <div class="card border-0 px-3 py-4 shadow border-rad-2">
                  <p class=" text-muted fw-bolder text-center paragraph" dir="rtl">
                    سیب زمینی یکی از انواع سبزیجات بسیار مقوی و دارای خواص بی‌نظیر است. همچنین حجم زیادی از مواد مغذی را
                    درون خودش جای داده است. پتاسیم و ویتامین سی در سیب زمینی بسیار زیاد است و می‌توان با مصرف سیب زمینی
                    پخته و جای دادن آن در سبد غذایی، این مواد مغذی را در بدن تامین کرد.
                  </p>
                  <p class="text-muted fw-bolder text-center paragraph" dir="rtl">از جمله غذا هایی که می توان با استفاده
                    از سیب زمینی درست کرد : سیب زمینی با سیر و پنیر،کیک پوره سیب زمینی، سالاد سیب زمینی آلمانی، سالاد
                    سیب زمینی خامه ای و... .
                    سیب زمینی به عنوان چهارمین غذای پرمصرف در جهان بعد از برنج، گندم و ذر
                    شناخته می‌شود و نشاسته موجود
                    در آن، انرژی مورد نیاز بدن را برای کار و فعالیت تامین می‌کند.
                  </p>
                </div>`;

const enSecP = `
<div class="border-bottom-blue-full my-4"></div>
                <div class="card border-0 px-3 py-4 shadow border-rad-2">
                  <p class=" text-muted fw-bolder text-center paragraph" dir="ltr">Potato is one of the most nutritious vegetables with unique properties. It also contains a large amount of nutrients. Potassium and vitamin C are very high in potatoes, and these nutrients can be supplied to the body by consuming cooked potatoes and adding them to the food basket.</p>

                  <p class="text-muted fw-bolder text-center paragraph" dir="ltr">Among the dishes that can be made using potatoes: potatoes with garlic and cheese, mashed potato cake, German potato salad, creamy potato salad, etc. Potato is known as the fourth most consumed food in the world after rice, wheat and corn, and the starch in it provides the energy needed by the body for work and activity.</p>
                </div>`;

const faSwiperHeader = `انواع سیب زمینی`;

const enSwiperHeader = `Types of potato`;
