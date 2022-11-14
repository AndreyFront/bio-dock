function page() {
    const main = document.querySelector('[data-page="main"]')
    const header = document.querySelector('[data-header="main"]')

    if (!main && !header ) return

    main.style.paddingTop = `${header.offsetHeight}px`
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
                block: 'center'
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

page()
customScrollbar()
smoothScrolling()
sliderProducts()
productCard()
validateForm()
input()