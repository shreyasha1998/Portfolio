$(".main-menu li:first").addClass("active");

var showSection = function showSection(section, isAnimate) {
    var direction = section.replace(/#/, ""),
        reqSection = $(".section").filter(
            '[data-section="' + direction + '"]'
        ),
        reqSectionPos = reqSection.offset().top - 0;

    if (isAnimate) {
        $("body, html").animate(
            {
                scrollTop: reqSectionPos
            },
            800
        );
    } else {
        $("body, html").scrollTop(reqSectionPos);
    }
};

var checkSection = function checkSection() {
    $(".section").each(function () {
        var $this = $(this),
            topEdge = $this.offset().top - 80,
            bottomEdge = topEdge + $this.height(),
            wScroll = $(window).scrollTop();
        if (topEdge < wScroll && bottomEdge > wScroll) {
            var currentId = $this.data("section"),
                reqLink = $("a").filter("[href*=\\#" + currentId + "]");
            reqLink
                .closest("li")
                .addClass("active")
                .siblings()
                .removeClass("active");
        }
    });
};

$(".main-menu").on("click", "a", function (e) {
    e.preventDefault();
    showSection($(this).attr("href"), true);
});

$(window).scroll(function () {
    checkSection();
});


document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages = document.querySelectorAll("img.lazy");
    var lazyloadThrottleTimeout;

    function lazyload() {
        if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function () {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function (img) {
                if (img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                }
            });
            if (lazyloadImages.length == 0) {
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});