function page() {
    const main = document.querySelector('[data-page="main"]')
    const header = document.querySelector('[data-header="main"]')

    if (!main && !header ) return

    main.style.paddingTop = `${header.offsetHeight}px`
}

function myModal() {
    return new HystModal({
        linkAttributeName: "data-hystmodal",
        waitTransitions: true,
    })
}

function customScrollbar() {
    const elements = document.querySelectorAll('[data-scrollbar]')

    if (!elements.length) return

    elements.forEach(elem => {
        new SimpleBar((elem), {
            autoHide: false
        })
    })
}

function smoothScrolling() {
    const anchors = document.querySelectorAll('[data-smooth-scrolling*="#"]')

    if (!anchors.length) return

    anchors.forEach(anchor => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault()
            
            const blockID = anchor.getAttribute('data-smooth-scrolling').substr(1)
            
            document.querySelector(`[data-smooth-scrolling="${blockID}"]`).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    })
}

function validateForm() {
    const forms = document.querySelectorAll('[data-validate-form]')

    if (!forms.length) return

    document.addEventListener('click', (event) => {
        const el = event.target

        if (el.closest('[data-validate-form]')) {
            if (el.closest('button[type="submit"]')) {
                event.preventDefault()

                const form = el.closest('[data-validate-form]')
                const inputs = form.querySelectorAll('.input')
                const textarea = form.querySelectorAll('.textarea')

                const regExpName = /^[A-ZА-ЯЁ]+$/i

                let numberСorrectАields = 0

                // const addHeightMessage = () => {
                //     setTimeout(() => {
                //         inputs.forEach(elInput => {
                //             if (elInput.classList.contains('input--error')) {
                //                 const message = elInput.querySelector('[data-input="message"]')
                //                 const heightMessage = message.offsetHeight
                //                 elInput.style.paddingBottom = `${heightMessage}px`
                //             } else {
                //                 elInput.style.paddingBottom = '0'
                //             }
                //         })
                //     }, 0)
                // }

                if (inputs.length) {
                    inputs.forEach(elInput => {
                        const input = elInput.querySelector('input')

                        if (input.hasAttribute('required')) {
                            const type = input.getAttribute('data-input-type')
                            // const message = elInput.querySelector('[data-input="message"]')

                            if (input.value) {
                                const value = input.value

                                if (type === 'tel') {
                                    if (value.length < 16) {
                                        elInput.classList.add('input--error')
                                        // message.innerText = 'Введите полный номер'
                                    } else {
                                        elInput.classList.remove('input--error')
                                    }
                                }

                                if (type === 'name') {
                                    const minlength = +input.getAttribute('minlength')

                                    if (!value.match(regExpName)) {
                                        elInput.classList.add('input--error')
                                        // message.innerText = 'Введите имя верно'
                                    } else {
                                        elInput.classList.remove('input--error')
                                    }
                                }

                                if (type === 'surname') {
                                    const minlength = +input.getAttribute('minlength')

                                    if (!value.match(regExpName)) {
                                        elInput.classList.add('input--error')
                                        // message.innerText = 'Введите фамилию верно'
                                    } else {
                                        elInput.classList.remove('input--error')
                                    }
                                }

                                if (type === 'patronymic') {
                                    const minlength = +input.getAttribute('minlength')

                                    if (!value.match(regExpName)) {
                                        elInput.classList.add('input--error')
                                        // message.innerText = 'Введите отчество верно'
                                    } else {
                                        elInput.classList.remove('input--error')
                                    }
                                }

                                if (type === 'address') {
                                    const minlength = +input.getAttribute('minlength')

                                    if (!value.match(regExpName)) {
                                        elInput.classList.add('input--error')
                                        // message.innerText = 'Введите адрес верно'
                                    } else {
                                        elInput.classList.remove('input--error')
                                    }
                                }

                                if (type === 'name-company') {
                                    const minlength = +input.getAttribute('minlength')

                                    if (!value.match(regExpName)) {
                                        elInput.classList.add('input--error')
                                        // message.innerText = 'Введите название компании верно'
                                    } else {
                                        elInput.classList.remove('input--error')
                                    }
                                }

                                if (type === 'email') {
                                    if (!validator.isEmail(value)) {
                                        elInput.classList.add('input--error')
                                        message.innerText = 'Введите корректный email'
                                    } else {
                                        elInput.classList.remove('input--error')
                                    }
                                }

                                // addHeightMessage()

                            } else {
                                elInput.classList.add('input--error')
                                // addHeightMessage()
                                // message.innerText = 'Это поле обязательно для заполнения'
                            }
                        }
                    })

                    inputs.forEach(elInput => {
                        if (!elInput.classList.contains('input--error')) {
                            numberСorrectАields++
                        } else {
                            elInput.classList.add('input--error-effect')
                            setTimeout(() => {
                                elInput.classList.remove('input--error-effect')
                            }, 500)
                        }
                    })

                    if (numberСorrectАields === inputs.length) {
                        console.log('Send data')

                        if (form.hasAttribute('action')) {
                            form.submit()
                        }
                    }
                }
            }
        }
    })
}

function menuHeight() {     
    const header = document.querySelector('[data-header="main"]')

    if (!header) return

    document.addEventListener('click', (event) => {
        const el = event.target

        if (el.closest('[data-header="main"]')) {
            if (el.closest('[data-header="btn-menu"]')) {
                header.classList.toggle('active-menu')
            }
        } else {
            header.classList.remove('active-menu')
        }
    })
}

function fixedHeader() {     
    const header = document.querySelector('[data-header="main"]')

    if (!header) return

    if (window.matchMedia("(min-width: 992px)").matches) {
        let prevScrollpos = window.pageYOffset

        window.addEventListener("scroll", () => {
            const currentScrollPos = window.pageYOffset

            if (prevScrollpos > currentScrollPos) {
                header.classList.remove('header--hide')
            } else {
                header.classList.add('header--hide')
            }

            prevScrollpos = currentScrollPos
        })
    }
}
    
function input() {
    const inputs = document.querySelectorAll('[data-input="block-input"]')

    if (!inputs.length) return

    const removeClass = () => {
        inputs.forEach(elInput => {
            const input = elInput.querySelector('[data-input="input"]')
            if (!input.value) {
                elInput.classList.remove('input--focus')
            } else {
                elInput.classList.add('input--focus')
            }
        })
    }

    const logic = (event) => {
        if (event.target.closest('[data-input="block-input"]')) {
            const blockInput = event.target.closest('[data-input="block-input"]')

            removeClass()

            blockInput.classList.add('input--focus')
        } else {
            removeClass()
        }
    }

    inputs.forEach(elInput => {
        const input = elInput.querySelector('[data-input="input"]')
        if (input.value) {
            elInput.classList.add('input--focus')
        }
    })

    document.addEventListener('focusin', (event) => logic(event))

    document.addEventListener('pointerup', (event) => logic(event))
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

function productCard() {
    const mains = document.querySelectorAll('[data-product-card="main"]')

    if (!mains.length) return

    mains.forEach(main => {
        const slider = main.querySelector('[data-product-card="slider"]')
        const btnNext = main.querySelector('[data-product-card="btn-next"]')
        const btnPrev = main.querySelector('[data-product-card="btn-prev"]')
        const pagination = main.querySelector('[data-product-card="pagination"]')

        const blocksInfo = main.querySelectorAll('[data-product-card="block-info"]')

        if (blocksInfo.length) {
            blocksInfo.forEach(blockInfo => {
                const head = blockInfo.querySelector('[data-product-card="block-head-info"]')
                const body = blockInfo.querySelector('[data-product-card="block-body-info"]')
                if (window.matchMedia("(min-width: 577px)").matches) {
                    if (!body && !head) return
        
                    let heightEl = body.offsetHeight
                    body.classList.add('not-active')
                    body.style.height = '0px'
    
                    const closeAll = () => {
                        blocksInfo.forEach(blockInfo => {
                            const body = blockInfo.querySelector('[data-product-card="block-body-info"]')
    
                            blockInfo.classList.remove('active')
                            body.classList.add('not-active')
                            body.style.height = '0px'
                        })
                    }
                
                    head.addEventListener('click', () => {
                        if (body.classList.contains('not-active')) {
                            closeAll()
                            blockInfo.classList.add('active')
                            body.classList.remove('not-active')
                            body.style.height = `${heightEl}px`
                        } else {
                            blockInfo.classList.remove('active')
                            body.classList.add('not-active')
                            body.style.height = '0px'
                        }
                    })
                } else {
                    head.setAttribute('data-hystmodal', '#m-more-detailed')
                    
                    document.addEventListener('click', (event) => {
                        const el = event.target

                        if (el.closest('[data-product-card="block-info"]')) {
                            const blockInfo = el.closest('[data-product-card="block-info"]')
                            const bodyInfo = blockInfo.querySelector('[data-product-card="body-info"]')
                            const title = blockInfo.querySelector('[data-product-card="title-block-info"]')
                            const valueTitle = title.innerText
                            const clonedBodyInfo = bodyInfo.cloneNode(true)

                            const modal = document.getElementById('m-more-detailed')

                            if (modal) {
                                const wrapperContent = modal.querySelector('.modal__wrapper-content')
                                const title = modal.querySelector('.modal__block-title-title')
                                const bodyInfo = modal.querySelector('[data-product-card="body-info"]')

                                title.innerText = valueTitle.toLowerCase()

                                if (bodyInfo) {
                                    bodyInfo.remove()
                                    wrapperContent.append(clonedBodyInfo)
                                } else {
                                    wrapperContent.append(clonedBodyInfo)
                                }
                            }
                        }
                    })
                }
            })
        
        }

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

function reviews() {
    const main = document.querySelector('[data-reviews="main"]')

    if (!main) return

    const reviews = main.querySelectorAll('[data-reviews="review"]')
    if (window.matchMedia("(max-width: 1200px)").matches) {
        reviews.forEach(review => {
            const slider = review.querySelector('[data-reviews="slider"]')
            const btnNext = review.querySelector('[data-reviews="btn-next"]')
            const btnPrev = review.querySelector('[data-reviews="btn-prev"]')
        
            const swiper = new Swiper(slider, {
                slidesPerView: 1,
                spaceBetween: 0,
                navigation: {
                    nextEl: btnNext,
                    prevEl: btnPrev,
                },
                breakpoints: {
                    820: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }
            })
        })
    }
}

function listProducts() {
    const main = document.querySelector('[data-list-products="main"]')

    if (!main) return

    const productCardPreviews = main.querySelectorAll('[data-list-products="product-card-preview"]')
    const countProductCardPreviews = productCardPreviews.length
    const openingInterval = (99 / countProductCardPreviews) / 100
    console.log(openingInterval)
    const heightProductCardPreviews = []

    productCardPreviews.forEach((productCardPreview, index) => {
        productCardPreview.classList.add('active')
        heightProductCardPreviews.push(productCardPreview.offsetHeight)
        productCardPreview.style.height = '97px'
        productCardPreview.style.zIndex = `${countProductCardPreviews - index}`
        productCardPreview.classList.remove('active')
        productCardPreview.setAttribute('data-list-products-index', index)
    })

    const hideAllCards = () => {
        productCardPreviews.forEach(productCardPreview => {
            productCardPreview.classList.remove('active')
            productCardPreview.style.height = '97px'
        })
    }

    const showCard = (index) => {
        productCardPreviews[index].classList.add('active')
        productCardPreviews[index].style.height = `${heightProductCardPreviews[index]}px`
    }

    showCard(0)

    const btnNext = productCardPreviews[countProductCardPreviews - 1].querySelector('[data-list-products="btn-next"]')
    if (btnNext) {
        btnNext.remove()
    }

    main.addEventListener('click', (event) => {
        const el = event.target

        if (el.closest('[data-list-products="product-card-preview"]')) {
            const productCardPreview = el.closest('[data-list-products="product-card-preview"]')

            if (!productCardPreview.classList.contains('active')) {
                hideAllCards()

                productCardPreview.classList.add('active')
                const indexProductCardPreview = +productCardPreview.getAttribute('data-list-products-index')
                productCardPreview.style.height = `${heightProductCardPreviews[indexProductCardPreview]}px`
            }
        }

        if (el.closest('[data-list-products="btn-next"]')) {
            const btnNext = el.closest('[data-list-products="btn-next"]')
            const productCardPreview = btnNext.closest('[data-list-products="product-card-preview"]')
            const indexProductCardPreview = +productCardPreview.getAttribute('data-list-products-index')
            const nextIndex = indexProductCardPreview + 1

            if (nextIndex < countProductCardPreviews) {
                productCardPreview.style.height = '97px'
                productCardPreview.classList.remove('active')

                showCard(nextIndex)
            }
        }
    })

    // animation scroll

    // const tlScroll = gsap.timeline({default: {duration: 0.5}})
    // let indexScroll = 0

    // ScrollTrigger.create({
    //     animation: tlScroll,
    //     trigger: main,
    //     start: 'top top',
    //     end: 'bottom',
    //     scrub: true,
    //     pin: true,
    //     onUpdate: self => {
    //         console.log("progress:", self.progress.toFixed(3))
    //         let progress = self.progress.toFixed(3)
    //         console.log((progress / openingInterval).toFixed(0))
    //         hideAllCards()
    //         showCard((progress / openingInterval).toFixed(0))
    //     }
    // })
}

function feedback() {
    const main = document.querySelector('[data-feedback="main"]')

    if (!main) return

    const blockInput = main.querySelector('[data-feedback="input"]')
    const placeholder = blockInput.querySelector('[data-input="placeholder"]')
    const input = blockInput.querySelector('input')

    main.addEventListener('click', (event) => {
        const el = event.target

        if (el.closest('[data-feedback="radio"]')) {
            const radio = el.closest('[data-feedback="radio"]')
            const radioName = radio.getAttribute('data-feedback-name')

            if (radioName === 'legal') {
                placeholder.textContent = 'Название организации'
                input.setAttribute('data-input-type', 'name-company')
            } else {
                placeholder.textContent = 'Имя'
                input.setAttribute('data-input-type', 'name')
            }
        }
    })
}

page()
myModal()
menuHeight()
fixedHeader()
customScrollbar()
smoothScrolling()
sliderProducts()
productCard()
validateForm()
input()
reviews()
feedback()

if (window.matchMedia("(max-width: 768px)").matches) {
    listProducts()
}