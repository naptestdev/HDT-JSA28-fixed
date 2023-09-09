const components = {};


components.navbar = `
<nav class="navbar navbar-expand-lg custom_nav-container pt-3">
          <a class="navbar-brand" href="index.html">

          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">Trang chủ <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="fruit.html"> Bánh</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="service.html"> Về chúng tôi </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Liên hệ</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            </div>
            <div class="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center">
              <a href="">
                Nhận báo giá
              </a>
            </div>
          </div>
        </nav>
`


// document.querySelector(".container").innerHTML = components.navbar