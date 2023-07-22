let bannerSliderTimerId;

let startProductIndex = 0
let currentProducts = []

const products = document.querySelectorAll('.product__card');
console.log(products)
const nextBtn = document.getElementById('btnNext')
const prevBtn = document.getElementById('btnPrev')

prevBtn.addEventListener('click', ()=>{
  if (startProductIndex - 4 >= 0) {
    startProductIndex -= 4;
    slideProducts()
  }
})

nextBtn.addEventListener('click', ()=>{
  products.forEach(prod => {
    if(!prod.classList.contains('_hide')){
      prod.classList.add('_anim-left')
      prod.addEventListener('animationend', ()=>{
        prod.classList.add('_hide')
      })
    }
  })
  if (startProductIndex + 4 <= products.length){
    startProductIndex += 4;
    slideProducts()
  }
})

function slideProducts(){

  currentProducts = []

  products.forEach((product, index) => {
    product.classList.add('_hide')
    if (index >= startProductIndex && index <= startProductIndex + 3){
      product.classList.remove('_hide')
      currentProducts.push(product)
    }
  })

}

slideProducts()

function initBannerSlider(){
  if (bannerSliderTimerId) clearInterval(bannerSliderTimerId)

  const bannersSlider = document.querySelector('.banners__list')
  const banner = document.querySelector('.banners__list-item')
  const bannersNavDots = document.querySelectorAll('.banners__nav-dot')
  const bannersTotal = bannersSlider.childElementCount
  let currentSlide = 0


  bannersNavDots.forEach((item, index) => {
    if (index === currentSlide) {
      item.classList.add('_active')
    } else {
      item.classList.remove('_active')
    }
  })

  bannersSlider.style.transform = `translateX(-${currentSlide * (banner.clientWidth + 32)}px)`
  bannersNavDots.forEach((item, index) => {
    if (index === currentSlide) {
      item.classList.add('_active')
    } else {
      item.classList.remove('_active')
    }
  })
  currentSlide = (currentSlide + 1) % bannersTotal

  bannerSliderTimerId = setInterval(()=>{
    bannersSlider.style.transform = `translateX(-${currentSlide * (banner.clientWidth + 32)}px)`
    bannersNavDots.forEach((item, index) => {
      if (index === currentSlide) {
        item.classList.add('_active')
      } else {
        item.classList.remove('_active')
      }
    })
    currentSlide = (currentSlide + 1) % bannersTotal
  }, 4000)
}

initBannerSlider()