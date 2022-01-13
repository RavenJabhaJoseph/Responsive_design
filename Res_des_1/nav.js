const menu = document.querySelector('.menu')
            const remove = document.querySelector('.close')
            const nav = document.querySelector('nav')

            menu.addEventListener('click', () => {
                nav.classList.add('open-nav')
            })

            remove.addEventListener('click', () => {
                nav.classList.remove('open-nav')
            })