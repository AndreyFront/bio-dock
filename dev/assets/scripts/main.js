function page() {
    const main = document.querySelector('[data-page="main"]')
    const header = document.querySelector('[data-header="main"]')

    if (!main && !header ) return

    main.style.paddingTop = `${header.offsetHeight}px`
}

function sliderProducts() {
    const mains = document.querySelectorAll('[data-slider-products="main"]')

    if (!mains.length) return

    mains.forEach(main => {
        const slider = main.querySelector('[data-slider-products="slider"]')
        const btnNext = main.querySelector('[data-slider-products="btn-next"]')
        const btnPrev = main.querySelector('[data-slider-products="btn-prev"]')
        const pagination = main.querySelector('[data-slider-products="pagination"]')

        const swiper = new Swiper(slider, {
            navigation: {
                nextEl: btnNext,
                prevEl: btnPrev,
            },
            pagination: {
                el: pagination,
                clickable: true
            },
        })
    })
}

page()
sliderProducts()