document.querySelectorAll('.accordion').forEach((el) => {
    el.addEventListener('click', () => {

        let content = el.nextElementSibling;

        if (content.style.maxHeight) {
            document.querySelectorAll('.accordion-show').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.accordion-show').forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
});