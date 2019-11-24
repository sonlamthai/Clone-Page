document.addEventListener("DOMContentLoaded", function (event) {

  document.getElementById("bag-link").addEventListener("click", function (event) {
    event.preventDefault()
    document.getElementById("bag-dr").classList.toggle("show-bag")
    event.stopPropagation()
  })

  document.getElementById("search-listen").addEventListener("click", function (event) {
    event.preventDefault()
    document.getElementById("search-dr").classList.add("search-show")
    document.getElementById("search-dr").classList.remove("hide-content")
    document.getElementById("search-close").classList.add("show-icon-close")
    document.getElementById("search-form").classList.add("search-form-slide")
    document.getElementById("search-close").classList.remove("hide-content")

    console.log(document.getElementsByClassName("search-results-item"))
    var searchResultSlide = document.getElementsByClassName("search-results-item")

    for (let k = 0; k < searchResultSlide.length; k++) {
      searchResultSlide[k].classList.add("search-result-slide")
    }

    var listHide = document.getElementsByClassName("item-nav-desktop")
    for (var i = 1; i < listHide.length; i++) {

      listHide[i].classList.add("hide-list")
      listHide[i].classList.remove("display-list")
    }
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


  document.getElementById("search-close").addEventListener("click", function (event) {
    if (!event.target.matches('#search-listen')) {
      var searchShow = document.getElementById("search-dr")
      if (searchShow.classList.contains('search-show')) {
        searchShow.classList.remove('search-show')
        searchShow.classList.add('hide-content')

      }
      var hideClose = document.getElementById("search-close")
      if (hideClose.classList.contains("show-icon-close")) {
        hideClose.classList.remove("show-icon-close")
        hideClose.classList.add("hide-content")
      }

      var formSlide = document.getElementById("search-form")
      if (formSlide.classList.contains("search-form-slide")) {
        formSlide.classList.remove("search-form-slide")
      }

      var searchResultSlide = document.getElementsByClassName("search-results-item")
      for (let k = 0; k < searchResultSlide.length; k++) {
        if (searchResultSlide[k].classList.contains("search-result-slide")) {
          searchResultSlide[k].classList.remove("search-result-slide")
        }
      }


      var listHide = document.getElementsByClassName("item-nav-desktop")
      for (let j = 1; j < listHide.length; j++) {
        if (listHide[j].classList.contains("hide-list")) {
          listHide[j].classList.remove("hide-list")
          listHide[j].classList.add("display-list")
        }
      }
    }

  })

});
