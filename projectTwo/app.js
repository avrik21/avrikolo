{
    const sectionMain = document.querySelector('.main-section')
    const sectionPoster = document.querySelector('.poster-section')
    const sectionTickets = document.querySelector('.tickets-section')
    const sectionContact = document.querySelector('.contact-section')
    const posterBtn = document.querySelector('.poster-btn')
    const logo = document.querySelector('.logo')
    const tickets = document.querySelector('.tickets')
    const contact = document.querySelector('.contact')
    const footerEnd = document.querySelector('.footer-end')

    
    logo.onclick = function () {
        sectionMain.hidden = false
        sectionPoster.hidden = true
        sectionTickets.hidden = true
        sectionContact.hidden = true
    }
    posterBtn.onclick = function () {
        sectionMain.hidden = true
        sectionPoster.hidden = false
        sectionTickets.hidden = true
        sectionContact.hidden = true
        footerEnd.innerText = 'Сайт концертно-экскурсионных программ'
    }
    tickets.onclick = function () {
        sectionTickets.hidden = false
        sectionMain.hidden = true
        sectionPoster.hidden = true
        sectionContact.hidden = true
        footerEnd.innerText = 'Сайт концертно-экскурсионных программ'
    }
    contact.onclick = function () {
        sectionTickets.hidden = true
        sectionMain.hidden = true
        sectionPoster.hidden = true
        sectionContact.hidden = false
        footerEnd.innerText = 'Сайт концертно-экскурсионных программ'
    }
}