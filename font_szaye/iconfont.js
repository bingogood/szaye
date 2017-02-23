;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-birdxiaoniao" viewBox="0 0 1027 1024">' +
    '' +
    '<path d="M1025.1264 98.7136C992.1536 145.5104 957.5424 181.9648 921.1904 207.872l0 26.0096c0 152.4736-54.1696 290.2016-162.4064 413.2864C650.4448 770.2528 505.344 831.6928 323.3792 831.6928c-117.8624 0-225.28-31.232-322.2528-93.5936 10.3424 1.7408 26.8288 2.56 49.3568 2.56 97.0752 0 184.5248-30.3104 262.4512-90.9312-45.056-1.6384-85.8112-15.9744-122.1632-42.9056C154.4192 579.9936 129.3312 545.792 115.5072 504.2176c17.3056 3.4816 30.3104 5.2224 39.0144 5.2224 19.0464 0 38.0928-2.56 57.1392-7.7824C163.1232 492.9536 122.88 469.0944 90.8288 430.08c-32.0512-39.0144-48.128-83.5584-48.128-133.8368L42.7008 291.1232C77.312 310.1696 108.544 319.6928 136.2944 319.6928 75.6736 278.1184 45.2608 219.2384 45.2608 142.9504c0-39.8336 8.704-74.4448 26.0096-103.936 112.64 136.9088 257.3312 209.6128 434.0736 218.3168C501.8624 236.544 500.1216 220.8768 500.1216 210.5344c0-58.88 20.3776-108.7488 61.0304-149.4016C601.9072 20.3776 651.776 0 710.656 0c62.3616 0 113.4592 21.7088 153.2928 64.9216C912.4864 54.5792 956.7232 38.0928 996.5568 15.5648 980.8896 65.8432 950.5792 103.936 905.5232 129.9456 945.4592 124.7232 985.2928 114.3808 1025.1264 98.7136z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xinfeng" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M891.071038 152.003933c-20.642005-11.514193-44.033945-18.96754-69.479693-18.96754L202.404754 133.036393c-25.445148 0-48.837688 7.453347-69.479293 18.96754l379.072589 373.336878L891.071038 152.003933zM939.922916 200.114115 538.141124 595.810832c-6.885332 6.768411-16.506808 10.160111-26.143075 9.475576-9.636466 0.684536-19.258942-2.707165-26.144274-9.475576L84.072783 200.114115c-11.689075 20.335612-19.258343 43.364399-19.258343 68.431404l0 474.288233c0 74.530268 61.924415 135.508725 137.590314 135.508725l619.186591 0c75.665499 0 137.590314-60.978457 137.590314-135.508725L959.181659 268.545518C959.181659 243.478514 951.611791 220.449727 939.922916 200.114115z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-facebookf" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M777.847812 7.384621 777.847812 169.846163 681.232399 169.846163C645.950364 169.846163 622.155471 177.230784 609.847794 192.000025 597.540118 206.76923 591.386261 228.923092 591.386261 258.461537L591.386261 374.769247 771.693955 374.769247 747.693948 556.923087 591.386261 556.923087 591.386261 1024 403.078565 1024 403.078565 556.923087 246.155496 556.923087 246.155496 374.769247 403.078565 374.769247 403.078565 240.615386C403.078565 164.307726 424.411893 105.128203 467.078549 63.076929 509.745241 21.025655 566.565756 0 637.540094 0 697.847786 0 744.617038 2.461565 777.847812 7.384621ZM777.847812 7.384621"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-taoxin" viewBox="0 0 1078 1024">' +
    '' +
    '<path d="M463.494737 916.210526C183.242105 668.294737 0 501.221053 0 296.421053 0 129.347368 129.347368 0 296.421053 0 388.042105 0 479.663158 43.115789 538.947368 113.178947 598.231579 43.115789 689.852632 0 781.473684 0 948.547368 0 1077.894737 129.347368 1077.894737 296.421053 1077.894737 501.221053 894.652632 668.294737 614.4 916.210526L538.947368 991.663158 463.494737 916.210526Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)