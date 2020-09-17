
const $panels = Array.prototype.slice.apply(document.querySelectorAll('.panel'))
const $tabs = Array.prototype.slice.apply(document.querySelectorAll('.tab'))
const $navTab = document.getElementById('nav_tab')

$navTab.addEventListener('click', e => {
    if (e.target.classList.contains('tab')) {
       let i = ($tabs.indexOf(e.target))
       $tabs.map(t => t.classList.remove('tabActive'))
       $tabs[i].classList.add('tabActive')
       $panels.map(t => t.classList.remove('panelActive'))
       $panels[i].classList.add('panelActive')
    }
})