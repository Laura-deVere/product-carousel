var json = {"items": [
 {
   "imgsrc": "https://www.sneakersnstuff.com/en/images/172075/large.jpg",
   "productname": "New Balance MRL247",
   "productlistprice": "109EUR",
   "discounted": "false",
   "productprice": "",
 },
 {
   "imgsrc": "https://www.sneakersnstuff.com/en/images/171055/large.jpg",
   "productname": "Puma Clyde Coogi FS",
   "productlistprice": "99EUR",
   "discounted": "false",
   "productprice": "",
 },
 {
   "imgsrc": "https://www.sneakersnstuff.com/en/images/171049/large.jpg",
   "productname": "Puma Clyde Coogi",
   "productlistprice": "229EUR",
   "discounted": "true",
   "productprice": "179EUR",
 },
 {
   "imgsrc": "https://www.sneakersnstuff.com/en/images/172101/large.jpg",
   "productname": "Nike Sportswear Air Foamposite Pro",
   "productlistprice": "219EUR",
   "discounted": "false",
   "productprice": "",
 },
 {
   "imgsrc": "https://www.sneakersnstuff.com/en/images/172090/large.jpg",
   "productname": "Converse Chuck 70s Slip x Missoni",
   "productlistprice": "199EUR",
   "discounted": "false",
   "productprice": "",
 },
 {
   "imgsrc": "https://www.sneakersnstuff.com/en/images/172062/large.jpg",
   "productname": "adidas Originals NMD_R2 PK",
   "productlistprice": "169EUR",
   "discounted": "true",
   "productprice": "99EUR",
 },
 {
   "imgsrc": "https://www.sneakersnstuff.com/en/images/172036/large.jpg",
   "productname": "Stussy Bleached Out Cord Jacket",
   "productlistprice": "147EUR",
   "discounted": "false",
   "productprice": "",
 },
 {
   "imgsrc": "https://www.sneakersnstuff.com/en/images/171946/large.jpg",
   "productname": "Nike Sportswear Wmns Blazer Low LX",
   "productlistprice": "99EUR",
   "discounted": "false",
   "productprice": "",
 },
 {
   "imgsrc": "https://www.sneakersnstuff.com/en/images/171979/large.jpg",
   "productname": "Billionaire Boys Club Leopard Arch Logo Pullover Hood",
   "productlistprice": "159 EUR",
   "discounted": "false",
   "productprice": "",
 },
 {
   "imgsrc": "https://www.sneakersnstuff.com/en/images/171939/large.jpg",
   "productname": "NikeLab ACG Cargo Pant",
   "productlistprice": "285EUR",
   "discounted": "true",
   "productprice": "199EUR",
 },
]};

const populateContainer = () => {
  const nostoContainer = document.querySelector('.carousel');
  json.items.map((item, index) => {
    const container = document.createElement('div');
    const img = document.createElement('img');
    const productName = document.createElement('p');
    const productPrice = document.createElement('span');
    const secondaryPrice = document.createElement('span');

    img.src = item.imgsrc;
    img.alt = item.productname;
    productName.textContent = item.productname;

    nostoContainer.appendChild(container);
    container.appendChild(img);
    container.appendChild(productName);

    productPrice.classList.add('product-price');

    if (item.discounted === 'true') {
      productPrice.textContent = item.productprice;
      secondaryPrice.textContent = `was ${item.productlistprice}`;
      secondaryPrice.classList.add('secondary-price');
      container.appendChild(productPrice);
      container.appendChild(secondaryPrice);
      container.classList.add('discounted');
    } else {
      productPrice.textContent = item.productlistprice;
      container.appendChild(productPrice);
    }
  });
  loadCaraousel();
}

const loadCaraousel = () => {
  $('.carousel').slick({
    dots: false,
    infinite: false,
    speed: 300,
    swipe: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img class='slick-caret' src='black_caret.png' alt='Previous'/></button>",
    nextArrow: "<button type='button' class='slick-next pull-right slick-caret'><img class='slick-caret' src='black_caret.png' alt='next'/></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          touchMove: true,
          swipeToSlide: true,
          swipe: true,
          infinite: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          touchMove: true,
          swipeToSlide: true,
          swipe: true,
          infinite: false,
        }
      }
    ]
  });
}
populateContainer();