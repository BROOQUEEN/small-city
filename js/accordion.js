document.querySelectorAll('.accordion').forEach((el) => {
    el.addEventListener('click', () => {

        let content = el.nextElementSibling;

        var arrow = document.querySelectorAll

        if (content.style.maxHeight) {
            document.querySelectorAll('.accordion-show').forEach((el) => el.style.maxHeight = null)
            document.querySelectorAll('.personal__arrow').forEach((el) => el.style.transform = "rotate(0deg)")
        } else {
            document.querySelectorAll('.accordion-show').forEach((el) => el.style.maxHeight = null)
            document.querySelectorAll('.personal__arrow').forEach((el) => el.style.transform = "rotate(180deg)")
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
});