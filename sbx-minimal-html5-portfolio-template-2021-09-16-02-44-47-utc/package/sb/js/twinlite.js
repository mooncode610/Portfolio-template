var e = {x: 0, y: 0}, t = {x: 0, y: 0}, n = .25, o = !1, a =    document.getElementById("ball"),
    i = document.getElementById("ball-loader");
TweenLite.set(a, {xPercent: -50, yPercent: -50}), document.addEventListener("mousemove", function (t) {
    var n = window.pageYOffset || document.documentElement.scrollTop;
    e.x = t.pageX, e.y = t.pageY - n
}), TweenLite.ticker.addEventListener("tick", function () {
    o || (t.x += (e.x - t.x) * n, t.y += (e.y - t.y) * n, TweenLite.set(a, {x: t.x, y: t.y}))
}),
    $(".parallax-wrap").mouseenter(function (e) {
        TweenMax.to(this, .3, {scale: 2}), TweenMax.to(a, .3, {
            scale: 2,
            borderWidth: "1px",
            opacity: .2
        }), TweenMax.to(i, .3, {
            scale: 2,
            borderWidth: "1px",
            top: 1,
            left: 1
        }), TweenMax.to($(this).children(), .3, {scale: .5}), o = !0
    }),
    $(".parallax-wrap").mouseleave(function (e) {
        TweenMax.to(this, .3, {scale: 1}), TweenMax.to(a, .3, {
            scale: 1,
            borderWidth: "2px",
            opacity: 1
        }), TweenMax.to(i, .3, {
            scale: 1,
            borderWidth: "2px",
            top: 0,
            left: 0
        }), TweenMax.to($(this).children(), .3, {scale: 1, x: 0, y: 0}), o = !1
    }),
    $(".parallax-wrap").mousemove(function (e) {
        var n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
        n = e, o = 2, i = this.getBoundingClientRect(), l = n.pageX - i.left, r = n.pageY - i.top, d = window.pageYOffset || document.documentElement.scrollTop, t.x = i.left + i.width / 2 + (l - i.width / 2) / o, t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / o, TweenMax.to(a, .3, {
            x: t.x,
            y: t.y
        }), s = e, p = c = this, h = c.querySelector(".parallax-element"), x = 20, u = p.getBoundingClientRect(), w = s.pageX - u.left, f = s.pageY - u.top, m = window.pageYOffset || document.documentElement.scrollTop, TweenMax.to(h, .3, {
            x: (w - u.width / 2) / u.width * x,
            y: (f - u.height / 2 - m) / u.height * x,
            ease: Power2.easeOut
        })
    })





$(".menu-wrap").mouseenter(function (e) {
    TweenMax.to(this, .3, {scale: 2}), TweenMax.to(a, .3, {
        scale: 2,
        borderWidth: "1px",
        opacity: .2
    }), TweenMax.to(i, .3, {
        scale: 2,
        borderWidth: "1px",
        top: 1,
        left: 1
    }), TweenMax.to($(this).children(), .3, {scale: .5}), o = !0
}),
    $(".menu-wrap").mouseleave(function (e) {
        TweenMax.to(this, .3, {scale: 1}), TweenMax.to(a, .3, {
            scale: 1,
            borderWidth: "2px",
            opacity: 1
        }), TweenMax.to(i, .3, {
            scale: 1,
            borderWidth: "2px",
            top: 0,
            left: 0
        }), TweenMax.to($(this).children(), .3, {scale: 1, x: 0, y: 0}), o = !1
    }),
    $(".menu-wrap").mousemove(function (e) {
        var n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
        n = e, o = 2, i = this.getBoundingClientRect(), l = n.pageX - i.left, r = n.pageY - i.top, d = window.pageYOffset || document.documentElement.scrollTop, t.x = i.left + i.width / 2 + (l - i.width / 2) / o, t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / o, TweenMax.to(a, .3, {
            x: t.x,
            y: t.y
        }), s = e, p = c = this, h = c.querySelector(".parallax-element"), x = 20, u = p.getBoundingClientRect(), w = s.pageX - u.left, f = s.pageY - u.top, m = window.pageYOffset || document.documentElement.scrollTop, TweenMax.to(h, .3, {
            x: (w - u.width / 2) / u.width * x,
            y: (f - u.height / 2 - m) / u.height * x,
            ease: Power2.easeOut
        })
    })