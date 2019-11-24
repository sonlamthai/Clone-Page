document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("bag-icon-mobile").addEventListener("click", function (event) {
    event.preventDefault()
    document.getElementById("bag-dr").classList.toggle("show-bag")
    event.stopPropagation()
  })

  window.addEventListener("click", function (event) {
    if (!event.target.matches('#bag-link')) {
      var bagShow = document.getElementById("bag-dr")
      if (bagShow.classList.contains('show-bag')) {
        bagShow.classList.remove('show-bag')
      }
    }
  })


  document.getElementById("menu-mobile").addEventListener("click", function (event) {
    let nav = document.getElementById("globalnav")
    nav.classList.toggle("globalnav-click-trans-for")
    document.getElementById("icon-bag-mobile").classList.toggle("hide-bag-mobile")
    document.getElementById("icon-menu-bread-top").classList.toggle("rotate-top-for")
    document.getElementById("icon-menu-bread-bottom").classList.toggle("rotate-bottom-for")
    document.getElementById("crust-top").classList.toggle("crust-trans-top-for")
    document.getElementById("crust-bottom").classList.toggle("crust-trans-bottom-for")
    document.getElementById("search-mobile").classList.toggle("show-search-mobile")

    event.stopPropagation()
  })

})
