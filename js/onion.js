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
                        <a class="dropdown-item text-center fw-bolder" href="./potato.html">سیب زمینی</a>
                      </li>
                      <li>
                        <a class="dropdown-item text-center text-light fw-bolder nav-link-active"
                          href="./onion.html">پیاز</a>
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
                            <a class="dropdown-item text-center fw-bolder"
                              href="./sheep.html">Sheep</a>
                          </li>
                          <li>
                            <a class="dropdown-item text-center fw-bolder" href="./potato.html">Potato</a>
                          </li>
                          <li>
                            <a class="dropdown-item text-center text-light fw-bolder nav-link-active" href="./onion.html">Onion</a>
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

const faFirstP = `<div class="border-bottom-blue-full mb-4 mt-3-5"></div>
      <div
        class="d-flex flex-col card border-0 shadow border-rad-2 wow animate__animated animate__zoomIn py-4 px-3">
        <p class="text-muted fw-bolder text-center paragraph" dir="rtl">
          پیاز یکی از مهمترین مواد غذایی در بسیاری از دستورهای غذایی
          می باشد.امروزه این گیاه یکی از پر مصرف ترین محصولات کشاورزی در سراسر دنیا است. پیاز طبع گرم و خشکی
          دارد هرچه تند و تیزی آن بیشتر و شکل آن کشیده‌تر باشد، گرمی و خشکی بیشتری در بدن ایجاد می‌کند. گرمی و
          خشکی پیاز با پختن آن کاهش و به اعتدال نزدیک می‌شود.
          </br> پیاز معمولاً برای درمان بیماری ها و عفونت ها، به
          صورت
          خام یا در قالب چای و تکه های کوچک به صورت خوراکی مورد
          استفاده قرار می گرفت.

          از انواع پیاز می توان پیاز زرد، پیاز
          قرمز، موسیر، پیاز شیرین، پیاز سفید و ... را نام برد.</p>
      </div>`;

const enFirstP = `
<div class="border-bottom-blue-full mb-4 mt-3-5"></div>
                <div
                  class="d-flex flex-col card border-0 shadow border-rad-2 wow animate__animated animate__zoomIn py-4 px-3">
                  <p class="text-muted fw-bolder text-center paragraph" dir="ltr">Onion is one of the most important food ingredients in many recipes. Today, this plant is one of the most consumed agricultural products around the world. Onion has a hot and dry nature, the sharper it is and the longer its shape, the more heat and dryness it creates in the body. The heat and dryness of the onion decreases and approaches moderation by cooking it.
                  </ br> 
                  Onions were commonly used to treat diseases and infections, raw or in the form of tea and small pieces orally. Types of onions include yellow onions, red onions, shallots, sweet onions, white onions, etc.
                  </div>`;

const faSecP = `
<div class="card border-0 shadow border-rad-2 px-4 py-2 wow animate__animated animate__fadeInBottomRight">
                    <p class="text-muted fw-bolder text-center paragraph" dir="rtl">پیاز دارای گونه های مختلفی همچون
                      زرد،
                      قرمز و سفید می‌باشد که هر کدام از این‌گونه‌ها دارای کاربرد متفاوتی می‌باشند.
                      مصری‌های باستان به کشت
                      پیاز می پرداختند و آن را گیاهی مقدس در نظر می گرفتند.

                      پیاز از مصر به روم برده شد، یعنی جایی که نام فعلی پیاز به آن داده شد: واژه onionاز واژه لاتین
                      unio،
                      به معنای«مروارید بزرگ» گرفته شده است.
                      «کریستوف کلمب» پیاز را از اروپا وارد قاره آمریکا کرد.</p>
                    <p class="text-muted fw-bolder text-center paragraph" dir="rtl">
                      امروزه در آشپزی، پیاز به عنوان یک ماده مهم و به منظور افزودن طعم و
                      بافت به غذاها به کار می رود. پیاز معمولاً به عنوان
                      پایه یا تقویت کننده طعم در بسیاری از دستورهای غذایی به کار
                      می رود.
                    </p>
                  </div>`;

const enSecP = `
<div class="card border-0 shadow border-rad-2 px-4 py-2 wow animate__animated animate__fadeInBottomRight">
                    <p class="text-muted fw-bolder text-center paragraph" dir="ltr">There are different varieties of onions such as yellow, red and white, each of which has a different use. Ancient Egyptians cultivated onion and considered it a sacred plant. The onion was taken from Egypt to Rome, where it was given its current name: the word onion is derived from the Latin word unio, meaning "large pearl". Christopher Columbus brought onions from Europe to the Americas.</p>
                    <p class="text-muted fw-bolder text-center paragraph" dir="ltr">Nowadays, onion is used as an important ingredient in cooking to add flavor and texture to food. Onions are commonly used as a base or flavor enhancer in many recipes.</p>
                  </div>
`;

const faSwiperHeader = `انواع پیاز`;

const enSwiperHeader = `Types of Onion`;
