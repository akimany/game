/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-canvas-csstransitions-prefixed-setclasses !*/
!(function(e, n, t) {
  function r(e, n) {
    return typeof e === n
  }
  function o() {
    var e, n, t, o, a, s, i
    for (var l in w)
      if (w.hasOwnProperty(l)) {
        if (
          ((e = []),
          (n = w[l]),
          n.name &&
            (e.push(n.name.toLowerCase()),
            n.options && n.options.aliases && n.options.aliases.length))
        )
          for (t = 0; t < n.options.aliases.length; t++)
            e.push(n.options.aliases[t].toLowerCase())
        for (o = r(n.fn, 'function') ? n.fn() : n.fn, a = 0; a < e.length; a++)
          (s = e[a]),
            (i = s.split('.')),
            1 === i.length
              ? (Modernizr[i[0]] = o)
              : (!Modernizr[i[0]] ||
                  Modernizr[i[0]] instanceof Boolean ||
                  (Modernizr[i[0]] = new Boolean(Modernizr[i[0]])),
                (Modernizr[i[0]][i[1]] = o)),
            C.push((o ? '' : 'no-') + i.join('-'))
      }
  }
  function a(e) {
    var n = S.className,
      t = Modernizr._config.classPrefix || ''
    if ((_ && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp('(^|\\s)' + t + 'no-js(\\s|$)')
      n = n.replace(r, '$1' + t + 'js$2')
    }
    Modernizr._config.enableClasses &&
      ((n += ' ' + t + e.join(' ' + t)),
      _ ? (S.className.baseVal = n) : (S.className = n))
  }
  function s() {
    return 'function' != typeof n.createElement
      ? n.createElement(arguments[0])
      : _
        ? n.createElementNS.call(n, 'http://www.w3.org/2000/svg', arguments[0])
        : n.createElement.apply(n, arguments)
  }
  function i(e, n) {
    return !!~('' + e).indexOf(n)
  }
  function l(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function(e, n, t) {
        return n + t.toUpperCase()
      })
      .replace(/^-/, '')
  }
  function u(e, n) {
    return function() {
      return e.apply(n, arguments)
    }
  }
  function f(e, n, t) {
    var o
    for (var a in e)
      if (e[a] in n)
        return t === !1
          ? e[a]
          : ((o = n[e[a]]), r(o, 'function') ? u(o, t || n) : o)
    return !1
  }
  function c(e) {
    return e
      .replace(/([A-Z])/g, function(e, n) {
        return '-' + n.toLowerCase()
      })
      .replace(/^ms-/, '-ms-')
  }
  function p(n, t, r) {
    var o
    if ('getComputedStyle' in e) {
      o = getComputedStyle.call(e, n, t)
      var a = e.console
      if (null !== o) r && (o = o.getPropertyValue(r))
      else if (a) {
        var s = a.error ? 'error' : 'log'
        a[s].call(
          a,
          'getComputedStyle returning null, its possible modernizr test results are inaccurate'
        )
      }
    } else o = !t && n.currentStyle && n.currentStyle[r]
    return o
  }
  function d() {
    var e = n.body
    return e || ((e = s(_ ? 'svg' : 'body')), (e.fake = !0)), e
  }
  function y(e, t, r, o) {
    var a,
      i,
      l,
      u,
      f = 'modernizr',
      c = s('div'),
      p = d()
    if (parseInt(r, 10))
      for (; r--; )
        (l = s('div')), (l.id = o ? o[r] : f + (r + 1)), c.appendChild(l)
    return (
      (a = s('style')),
      (a.type = 'text/css'),
      (a.id = 's' + f),
      (p.fake ? p : c).appendChild(a),
      p.appendChild(c),
      a.styleSheet
        ? (a.styleSheet.cssText = e)
        : a.appendChild(n.createTextNode(e)),
      (c.id = f),
      p.fake &&
        ((p.style.background = ''),
        (p.style.overflow = 'hidden'),
        (u = S.style.overflow),
        (S.style.overflow = 'hidden'),
        S.appendChild(p)),
      (i = t(c, e)),
      p.fake
        ? (p.parentNode.removeChild(p), (S.style.overflow = u), S.offsetHeight)
        : c.parentNode.removeChild(c),
      !!i
    )
  }
  function m(n, r) {
    var o = n.length
    if ('CSS' in e && 'supports' in e.CSS) {
      for (; o--; ) if (e.CSS.supports(c(n[o]), r)) return !0
      return !1
    }
    if ('CSSSupportsRule' in e) {
      for (var a = []; o--; ) a.push('(' + c(n[o]) + ':' + r + ')')
      return (
        (a = a.join(' or ')),
        y(
          '@supports (' + a + ') { #modernizr { position: absolute; } }',
          function(e) {
            return 'absolute' == p(e, null, 'position')
          }
        )
      )
    }
    return t
  }
  function v(e, n, o, a) {
    function u() {
      c && (delete z.style, delete z.modElem)
    }
    if (((a = r(a, 'undefined') ? !1 : a), !r(o, 'undefined'))) {
      var f = m(e, o)
      if (!r(f, 'undefined')) return f
    }
    for (
      var c, p, d, y, v, g = ['modernizr', 'tspan', 'samp'];
      !z.style && g.length;

    )
      (c = !0), (z.modElem = s(g.shift())), (z.style = z.modElem.style)
    for (d = e.length, p = 0; d > p; p++)
      if (
        ((y = e[p]),
        (v = z.style[y]),
        i(y, '-') && (y = l(y)),
        z.style[y] !== t)
      ) {
        if (a || r(o, 'undefined')) return u(), 'pfx' == n ? y : !0
        try {
          z.style[y] = o
        } catch (h) {}
        if (z.style[y] != v) return u(), 'pfx' == n ? y : !0
      }
    return u(), !1
  }
  function g(e, n, t, o, a) {
    var s = e.charAt(0).toUpperCase() + e.slice(1),
      i = (e + ' ' + T.join(s + ' ') + s).split(' ')
    return r(n, 'string') || r(n, 'undefined')
      ? v(i, n, o, a)
      : ((i = (e + ' ' + b.join(s + ' ') + s).split(' ')), f(i, n, t))
  }
  function h(e, n, r) {
    return g(e, t, t, n, r)
  }
  var C = [],
    w = [],
    x = {
      _version: '3.5.0',
      _config: {
        classPrefix: '',
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function(e, n) {
        var t = this
        setTimeout(function() {
          n(t[e])
        }, 0)
      },
      addTest: function(e, n, t) {
        w.push({ name: e, fn: n, options: t })
      },
      addAsyncTest: function(e) {
        w.push({ name: null, fn: e })
      }
    },
    Modernizr = function() {}
  ;(Modernizr.prototype = x), (Modernizr = new Modernizr())
  var S = n.documentElement,
    _ = 'svg' === S.nodeName.toLowerCase()
  Modernizr.addTest('audio', function() {
    var e = s('audio'),
      n = !1
    try {
      ;(n = !!e.canPlayType),
        n &&
          ((n = new Boolean(n)),
          (n.ogg = e
            .canPlayType('audio/ogg; codecs="vorbis"')
            .replace(/^no$/, '')),
          (n.mp3 = e
            .canPlayType('audio/mpeg; codecs="mp3"')
            .replace(/^no$/, '')),
          (n.opus =
            e.canPlayType('audio/ogg; codecs="opus"') ||
            e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, '')),
          (n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '')),
          (n.m4a = (e.canPlayType('audio/x-m4a;') || e.canPlayType('audio/aac;')
          ).replace(/^no$/, '')))
    } catch (t) {}
    return n
  }),
    Modernizr.addTest('canvas', function() {
      var e = s('canvas')
      return !(!e.getContext || !e.getContext('2d'))
    })
  var P = 'Moz O ms Webkit',
    T = x._config.usePrefixes ? P.split(' ') : []
  x._cssomPrefixes = T
  var b = x._config.usePrefixes ? P.toLowerCase().split(' ') : []
  x._domPrefixes = b
  var E = { elem: s('modernizr') }
  Modernizr._q.push(function() {
    delete E.elem
  })
  var z = { style: E.elem.style }
  Modernizr._q.unshift(function() {
    delete z.style
  }),
    (x.testAllProps = g),
    (x.testAllProps = h),
    Modernizr.addTest('csstransitions', h('transition', 'all', !0))
  var N = function(n) {
    var r,
      o = prefixes.length,
      a = e.CSSRule
    if ('undefined' == typeof a) return t
    if (!n) return !1
    if (
      ((n = n.replace(/^@/, '')),
      (r = n.replace(/-/g, '_').toUpperCase() + '_RULE'),
      r in a)
    )
      return '@' + n
    for (var s = 0; o > s; s++) {
      var i = prefixes[s],
        l = i.toUpperCase() + '_' + r
      if (l in a) return '@-' + i.toLowerCase() + '-' + n
    }
    return !1
  }
  x.atRule = N
  x.prefixed = function(e, n, t) {
    return 0 === e.indexOf('@')
      ? N(e)
      : (-1 != e.indexOf('-') && (e = l(e)), n ? g(e, n, t) : g(e, 'pfx'))
  }
  o(), a(C), delete x.addTest, delete x.addAsyncTest
  for (var $ = 0; $ < Modernizr._q.length; $++) Modernizr._q[$]()
  e.Modernizr = Modernizr
})(window, document)
