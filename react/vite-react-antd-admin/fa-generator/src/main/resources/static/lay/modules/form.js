/** layui-v1.0.9_rls MIT License By http://www.layui.com */
layui.define("layer", function (e) {
  "use strict";
  var i = layui.jquery,
    t = layui.layer,
    a = layui.hint(),
    n = layui.device(),
    l = "form",
    r = ".layui-form",
    s = "layui-this",
    o = "layui-hide",
    c = "layui-disabled",
    u = function () {
      this.config = {
        verify: {
          required: [/[\S]+/, "必填项不能为空"],
          phone: [/^1\d{10}$/, "请输入正确的手机号"],
          email: [
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            "邮箱格式不正确",
          ],
          url: [/(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/, "链接格式不正确"],
          number: [/^\d+$/, "只能填写数字"],
          date: [
            /^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/,
            "日期格式不正确",
          ],
          identity: [/(^\d{15}$)|(^\d{17}(x|X|\d)$)/, "请输入正确的身份证号"],
        },
      };
    };
  (u.prototype.set = function (e) {
    var t = this;
    return i.extend(!0, t.config, e), t;
  }),
    (u.prototype.verify = function (e) {
      var t = this;
      return i.extend(!0, t.config.verify, e), t;
    }),
    (u.prototype.on = function (e, i) {
      return layui.onevent(l, e, i);
    }),
    (u.prototype.render = function (e) {
      var t = this,
        n = {
          select: function () {
            var e,
              t = "请选择",
              a = "layui-form-select",
              n = "layui-select-title",
              u = "layui-select-none",
              d = "",
              f = i(r).find("select"),
              y = function (t, l) {
                (i(t.target).parent().hasClass(n) && !l) ||
                  (i("." + a).removeClass(a + "ed"), e && d && e.val(d)),
                  (e = null);
              },
              v = function (t, r, f) {
                var v = i(this),
                  h = t.find("." + n),
                  p = h.find("input"),
                  m = t.find("dl"),
                  k = m.children("dd");
                if (!r) {
                  var b = function () {
                      t.addClass(a + "ed"), k.removeClass(o);
                    },
                    x = function () {
                      t.removeClass(a + "ed"),
                        p.blur(),
                        g(p.val(), function (e) {
                          e && ((d = m.find("." + s).html()), p && p.val(d));
                        });
                    };
                  h.on("click", function (e) {
                    t.hasClass(a + "ed") ? x() : (y(e, !0), b()),
                      m.find("." + u).remove();
                  }),
                    h.find(".layui-edge").on("click", function () {
                      p.focus();
                    }),
                    p
                      .on("keyup", function (e) {
                        var i = e.keyCode;
                        9 === i && b();
                      })
                      .on("keydown", function (e) {
                        var i = e.keyCode;
                        9 === i ? x() : 13 === i && e.preventDefault();
                      });
                  var g = function (e, t, a) {
                      var n = 0;
                      layui.each(k, function () {
                        var t = i(this),
                          l = t.text(),
                          r = l.indexOf(e) === -1;
                        ("" === e || "blur" === a ? e !== l : r) && n++,
                          "keyup" === a && t[r ? "addClass" : "removeClass"](o);
                      });
                      var l = n === k.length;
                      return t(l), l;
                    },
                    C = function (e) {
                      var i = this.value,
                        t = e.keyCode;
                      return (
                        9 !== t &&
                        13 !== t &&
                        37 !== t &&
                        38 !== t &&
                        39 !== t &&
                        40 !== t &&
                        (g(
                          i,
                          function (e) {
                            e
                              ? m.find("." + u)[0] ||
                                m.append('<p class="' + u + '">无匹配项</p>')
                              : m.find("." + u).remove();
                          },
                          "keyup"
                        ),
                        void ("" === i && m.find("." + u).remove()))
                      );
                    };
                  f &&
                    p.on("keyup", C).on("blur", function (i) {
                      (e = p),
                        (d = m.find("." + s).html()),
                        setTimeout(function () {
                          g(
                            p.val(),
                            function (e) {
                              e && !d && p.val("");
                            },
                            "blur"
                          );
                        }, 200);
                    }),
                    k.on("click", function () {
                      var e = i(this),
                        a = e.attr("lay-value"),
                        n = v.attr("lay-filter");
                      return (
                        !e.hasClass(c) &&
                        (v.val(a).removeClass("layui-form-danger"),
                        p.val(e.text()),
                        e.addClass(s).siblings().removeClass(s),
                        layui.event.call(this, l, "select(" + n + ")", {
                          elem: v[0],
                          value: a,
                          othis: t,
                        }),
                        x(),
                        !1)
                      );
                    }),
                    t.find("dl>dt").on("click", function (e) {
                      return !1;
                    }),
                    i(document).off("click", y).on("click", y);
                }
              };
            f.each(function (e, l) {
              var r = i(this),
                o = r.next("." + a),
                u = this.disabled,
                d = l.value,
                f = i(l.options[l.selectedIndex]);
              if ("string" == typeof r.attr("lay-ignore")) return r.show();
              var y = "string" == typeof r.attr("lay-search"),
                h = i(
                  [
                    '<div class="layui-unselect ' +
                      a +
                      (u ? " layui-select-disabled" : "") +
                      '">',
                    '<div class="' +
                      n +
                      '"><input type="text" placeholder="' +
                      (l.options[0].innerHTML ? l.options[0].innerHTML : t) +
                      '" value="' +
                      (d ? f.html() : "") +
                      '" ' +
                      (y ? "" : "readonly") +
                      ' class="layui-input layui-unselect' +
                      (u ? " " + c : "") +
                      '">',
                    '<i class="layui-edge"></i></div>',
                    '<dl class="layui-anim layui-anim-upbit' +
                      (r.find("optgroup")[0] ? " layui-select-group" : "") +
                      '">' +
                      (function (e) {
                        var i = [];
                        return (
                          layui.each(e, function (e, t) {
                            (0 !== e || t.value) &&
                              ("optgroup" === t.tagName.toLowerCase()
                                ? i.push("<dt>" + t.label + "</dt>")
                                : i.push(
                                    '<dd lay-value="' +
                                      t.value +
                                      '" class="' +
                                      (d === t.value ? s : "") +
                                      (t.disabled ? " " + c : "") +
                                      '">' +
                                      t.innerHTML +
                                      "</dd>"
                                  ));
                          }),
                          i.join("")
                        );
                      })(r.find("*")) +
                      "</dl>",
                    "</div>",
                  ].join("")
                );
              o[0] && o.remove(), r.after(h), v.call(this, h, u, y);
            });
          },
          checkbox: function () {
            var e = {
                checkbox: [
                  "layui-form-checkbox",
                  "layui-form-checked",
                  "checkbox",
                ],
                _switch: ["layui-form-switch", "layui-form-onswitch", "switch"],
              },
              t = i(r).find("input[type=checkbox]"),
              a = function (e, t) {
                var a = i(this);
                e.on("click", function () {
                  var i = a.attr("lay-filter"),
                    n = (a.attr("lay-text") || "").split("|");
                  a[0].disabled ||
                    (a[0].checked
                      ? ((a[0].checked = !1),
                        e.removeClass(t[1]).find("em").text(n[1]))
                      : ((a[0].checked = !0),
                        e.addClass(t[1]).find("em").text(n[0])),
                    layui.event.call(a[0], l, t[2] + "(" + i + ")", {
                      elem: a[0],
                      value: a[0].value,
                      othis: e,
                    }));
                });
              };
            t.each(function (t, n) {
              var l = i(this),
                r = l.attr("lay-skin"),
                s = (l.attr("lay-text") || "").split("|"),
                o = this.disabled;
              "switch" === r && (r = "_" + r);
              var u = e[r] || e.checkbox;
              if ("string" == typeof l.attr("lay-ignore")) return l.show();
              var d = l.next("." + u[0]),
                f = i(
                  [
                    '<div class="layui-unselect ' +
                      u[0] +
                      (n.checked ? " " + u[1] : "") +
                      (o ? " layui-checkbox-disbaled " + c : "") +
                      '" lay-skin="' +
                      (r || "") +
                      '">',
                    {
                      _switch:
                        "<em>" +
                        ((n.checked ? s[0] : s[1]) || "") +
                        "</em><i></i>",
                    }[r] ||
                      (n.title.replace(/\s/g, "")
                        ? "<span>" + n.title + "</span>"
                        : "") +
                        '<i class="layui-icon">' +
                        (r ? "&#xe605;" : "&#xe618;") +
                        "</i>",
                    "</div>",
                  ].join("")
                );
              d[0] && d.remove(), l.after(f), a.call(this, f, u);
            });
          },
          radio: function () {
            var e = "layui-form-radio",
              t = ["&#xe643;", "&#xe63f;"],
              a = i(r).find("input[type=radio]"),
              n = function (a) {
                var n = i(this),
                  s = "layui-anim-scaleSpring";
                a.on("click", function () {
                  var o = n[0].name,
                    c = n.parents(r),
                    u = n.attr("lay-filter"),
                    d = c.find(
                      "input[name=" + o.replace(/(\.|#|\[|\])/g, "\\$1") + "]"
                    );
                  n[0].disabled ||
                    (layui.each(d, function () {
                      var a = i(this).next("." + e);
                      (this.checked = !1),
                        a.removeClass(e + "ed"),
                        a.find(".layui-icon").removeClass(s).html(t[1]);
                    }),
                    (n[0].checked = !0),
                    a.addClass(e + "ed"),
                    a.find(".layui-icon").addClass(s).html(t[0]),
                    layui.event.call(n[0], l, "radio(" + u + ")", {
                      elem: n[0],
                      value: n[0].value,
                      othis: a,
                    }));
                });
              };
            a.each(function (a, l) {
              var r = i(this),
                s = r.next("." + e),
                o = this.disabled;
              if ("string" == typeof r.attr("lay-ignore")) return r.show();
              var u = i(
                [
                  '<div class="layui-unselect ' +
                    e +
                    (l.checked ? " " + e + "ed" : "") +
                    (o ? " layui-radio-disbaled " + c : "") +
                    '">',
                  '<i class="layui-anim layui-icon">' +
                    t[l.checked ? 0 : 1] +
                    "</i>",
                  "<span>" + (l.title || "未命名") + "</span>",
                  "</div>",
                ].join("")
              );
              s[0] && s.remove(), r.after(u), n.call(this, u);
            });
          },
        };
      return (
        e
          ? n[e]
            ? n[e]()
            : a.error("不支持的" + e + "表单渲染")
          : layui.each(n, function (e, i) {
              i();
            }),
        t
      );
    });
  var d = function () {
      var e = i(this),
        a = f.config.verify,
        s = null,
        o = "layui-form-danger",
        c = {},
        u = e.parents(r),
        d = u.find("*[lay-verify]"),
        y = e.parents("form")[0],
        v = u.find("input,select,textarea"),
        h = e.attr("lay-filter");
      return (
        layui.each(d, function (e, l) {
          var r = i(this),
            c = r.attr("lay-verify").split("|"),
            u = "",
            d = r.val();
          if (
            (r.removeClass(o),
            layui.each(c, function (e, i) {
              var c = "function" == typeof a[i];
              if (a[i] && (c ? (u = a[i](d, l)) : !a[i][0].test(d)))
                return (
                  t.msg(u || a[i][1], { icon: 5, shift: 6 }),
                  n.android || n.ios || l.focus(),
                  r.addClass(o),
                  (s = !0)
                );
            }),
            s)
          )
            return s;
        }),
        !s &&
          (layui.each(v, function (e, i) {
            i.name &&
              ((/^checkbox|radio$/.test(i.type) && !i.checked) ||
                (c[i.name] = i.value));
          }),
          layui.event.call(this, l, "submit(" + h + ")", {
            elem: this,
            form: y,
            field: c,
          }))
      );
    },
    f = new u(),
    y = i(document);
  f.render(),
    y.on("reset", r, function () {
      setTimeout(function () {
        f.render();
      }, 50);
    }),
    y.on("submit", r, d).on("click", "*[lay-submit]", d),
    e(l, function (e) {
      return f.set(e);
    });
});