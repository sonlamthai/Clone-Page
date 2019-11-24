$(document).ready(function () {

    var slickTrack = $(".js-slideSlick-slickTrack")
    var widthSlickTrack = parseInt(slickTrack.css("width"), 10)
    var slickItem = $(".slideSlick-slickItem")
    var width = slickItem.css("width")
    var widthSlide = parseInt(width, 10) // width = 584

    var slickDot = $(".js-slickDots-item")

    var transformSlide = 0



    var slideAuto = setInterval(function () {
        transformSlide = transformSlide -= widthSlide
        console.log(transformSlide)

        slickTrack.css("transform", "translateX(" + transformSlide + "px)")

        if (transformSlide == -widthSlide * slickItem.length) {   //-widthSlide = -584
            slickTrack.css("transform", "none")
            transformSlide = 0
        }

    }, 30000)


    function slideClick() {
        var slickNext = $(".js-slickNext")
        var slickPrev = $(".js-slickPrev")


        slickNext.click(function (event) {

            if (transformSlide == -widthSlide * (slickItem.length - 1)) {   //-widthSlide = -584
                slickTrack.css("transform", "none")
                transformSlide = 0
            }

            else {
                transformSlide -= widthSlide
                slickTrack.css("transform", "translateX(" + transformSlide + "px)")

            }

            if (slickDot.hasClass("js-slickActive")) {
                var actived = $(".js-slickDots-item").index($(".js-slickActive"))
                // console.log(actived)
                slickDot.removeClass("js-slickActive")
                actived += 1
                $(slickDot[actived]).addClass("js-slickActive")
                console.log(actived)


                if (actived == slickItem.length) {
                    actived = 0
                    $(slickDot[actived]).addClass("js-slickActive")
                }
            }

            // console.log(activedDots)
            // console.log(transformSlide)

            event.preventDefault()
        })

        slickPrev.click(function (event) {
            // console.log(transformSlide)
            if (transformSlide == 0) {   //-widthSlide = -584
                transformSlide = -widthSlickTrack + widthSlide
                slickTrack.css("transform", "translateX(" + transformSlide + "px)")
            }

            else {
                transformSlide += widthSlide
                slickTrack.css("transform", "translateX(" + transformSlide + "px)")
            }

            if (slickDot.hasClass("js-slickActive")) {
                var actived = $(".js-slickDots-item").index($(".js-slickActive"))

                if (actived == 0) {
                    slickDot.removeClass("js-slickActive")
                    actived = 4
                    $(slickDot[actived]).addClass("js-slickActive")
                }

                else {
                    slickDot.removeClass("js-slickActive")
                    actived -= 1
                    $(slickDot[actived]).addClass("js-slickActive")
                    console.log(actived)
                }
            }

            event.preventDefault()

        })
    }

    slideClick()

    function clickDots() {
        slickDot.click(function (event) {
            if ($(this).hasClass("js-slickActive")) {
                return
            }
            $(".js-slickActive").removeClass("js-slickActive")

            $(this).addClass("js-slickActive")
            var indexSlide = $(".js-slickDots-item").index(this)
            transformSlide = -widthSlide * indexSlide
            slickTrack.css("transform", "translateX(" + transformSlide + "px)")

        })
    }

    clickDots()


})