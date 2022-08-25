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


const images = ["assets/images/city/3.jpg", "assets/images/city/4.jpg", "assets/images/city/5.jpeg"];
// for (let x = 0; x < images.length; x++) {            
//     const element = '<img src="' + images[x] + '" alt="sq-sample26"';
//     document.querySelector('.images').innerHTML += element;
//     const el = '<a href="'+ images[x] +'" data-lightbox="image-1"'+
//     'data-title="Caption"><i class="fa fa-search"></i></a>'
//     document.querySelector('.images1').innerHTML += element;
// }
// function page1() {
//     return "<html><head><style></style></head><body class='heraldone'><\/script><\/body><\/html>";
// }
// const outElem = document.getElementById('gallery');
// images.forEach(function (path) {
//     const isotopeitem = document.createElement("div");
//     isotopeitem.className = ".isotope-item";
//     isotopeitem.setAttribute("data-type", "city");
//     const fig = document.createElement("figure");
//     fig.className = ".snip1321";
//     const img = document.createElement("img");
//     img.src = path;
//     img.alt = "sample";
//     const cap = document.createElement("figcaption");
//     const anch = document.createElement("a");
//     anch.href = path;
//     anch.setAttribute("data-lightbox","image-1");
//     anch.setAttribute("data-title","Caption");
//     cap.appendChild(anch);
//     fig.appendChild(img);
//     fig.appendChild(cap);
//     isotopeitem.appendChild(fig);
//     outElem.appendChild(isotopeitem);
//   })