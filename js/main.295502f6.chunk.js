(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        13: function(e, t, n) {
            e.exports = {
                controls: "Controls_controls__1Kt7j",
                visible: "Controls_visible__3V6tt",
                buttons: "Controls_buttons__REyIz",
                play: "Controls_play__IYxXA",
                mute: "Controls_mute__3uPoM",
                volume: "Controls_volume__1W9xo",
                volume_slider_container: "Controls_volume_slider_container__2Ro3-",
                volume_slider: "Controls_volume_slider__37juv",
                time_slider_container: "Controls_time_slider_container__1HSFl",
                disabled: "Controls_disabled__2r5Al",
                time_slider: "Controls_time_slider__3knTF",
                time: "Controls_time__3NyRt",
                time_p: "Controls_time_p__JNXvi",
                fullscreen: "Controls_fullscreen__Rpb1Q"
            }
        },
        134: function(e, t, n) {
            e.exports = {
                sync: "Sync_sync__2AOiX"
            }
        },
        135: function(e, t, n) {
            e.exports = {
                edit: "Edit_edit__3Wq2n"
            }
        },
        136: function(e, t, n) {
            e.exports = {
                container: "_1bvB6PhxBtfE7wcuo2tUxI"
            }
        },
        137: function(e, t, n) {
            e.exports = {
                button: "_3cz1qarkTjUyPQaL3CIHPH"
            }
        },
        138: function(e, t, n) {
            e.exports = {
                timer: "_1ndBP2A9t16mHOAEwF3VMW"
            }
        },
        15: function(e, t, n) {
            e.exports = {
                chat: "Chat_chat__1iry4",
                edit: "Chat_edit__3z_s6",
                controls: "Chat_controls__2tO9J",
                resize: "Chat_resize__2i0c_",
                move: "Chat_move__2rcum",
                hide: "Chat_hide__348Lh",
                mobile: "Chat_mobile__G0gOL",
                ghost: "Chat_ghost__cCWXe"
            }
        },
        32: function(e, t, n) {
            e.exports = {
                stream: "Stream_stream__1YS-L",
                "stream-wrapper": "Stream_stream-wrapper__2JqEn",
                controls: "Stream_controls__kf7Xp",
                edit: "Stream_edit__2Y10T",
                fullscreen: "Stream_fullscreen__1kGD6",
                "fb-video": "Stream_fb-video__2L8df",
                resize: "Stream_resize__3_TlR",
                move: "Stream_move__3boq9",
                hide: "Stream_hide__YOJZa"
            }
        },
        41: function(e, t, n) {
            e.exports = {
                container: "Quality_container__HXG0Y",
                quality: "Quality_quality__1Sr3l",
                dialog: "Quality_dialog__2i937",
                option: "Quality_option__1rDg7"
            }
        },
        42: function(e, t, n) {
            e.exports = {
                container: "VideoPlayer_container__3uYIz",
                controls: "VideoPlayer_controls__1TwBC",
                video: "VideoPlayer_video__3Fos6",
                edit_container: "VideoPlayer_edit_container__2_pLH",
                icon: "VideoPlayer_icon__39ikG",
                span: "VideoPlayer_span__VSBmO"
            }
        },
        45: function(e, t, n) {
            e.exports = {
                confirm: "Buttons_confirm__1nzcE",
                cancel: "Buttons_cancel__2cgYy"
            }
        },
        48: function(e, t, n) {
            e.exports = {
                delay: "Delay_delay__3TuwQ",
                button: "Delay_button__275vK",
                decrement: "Delay_decrement__3x10z",
                increment: "Delay_increment__1pnOP"
            }
        },
        49: function(e, t, n) {
            e.exports = {
                overlay: "Overlay_overlay__YLM6W",
                icon: "Overlay_icon__2FjrW",
                span: "Overlay_span__3REfa",
                container: "Overlay_container__9UepJ"
            }
        },
        5348: function(e, t, n) {
            e.exports = n(5478)
        },
        5353: function(e, t, n) {},
        5366: function(e, t, n) {},
        5443: function(e, t, n) {},
        5444: function(e, t, n) {},
        5474: function(e, t) {},
        5477: function(e, t, n) {},
        5478: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                o = n.n(a),
                i = n(61),
                r = n.n(i),
                c = (n(5353), n(7)),
                l = n(8),
                s = n(11),
                u = n(9),
                m = n(12),
                d = n(62),
                h = n(30),
                p = (n(80), n(45)),
                v = n.n(p),
                f = n(10),
                y = n(6),
                _ = n(1),
                g = n(4),
                b = n.n(g),
                E = n(15),
                w = n.n(E),
                k = function(e) {
                    return o.a.createElement("div", {
                        className: [w.a.chat, w.a.edit, e.position].join(" "),
                        style: {
                            position: "fixed",
                            top: e.y,
                            left: e.x,
                            width: e.width,
                            height: "100vh"
                        }
                    }, o.a.createElement(y.a, {
                        icon: ["fas", "comment-alt"],
                        style: {
                            color: e.hidden ? "#DF3D62" : void 0
                        }
                    }), o.a.createElement("span", null, "Twitch chat"), o.a.createElement("div", {
                        className: w.a.controls
                    }, o.a.createElement("div", {
                        className: w.a.move
                    }, o.a.createElement(y.a, {
                        icon: ["fas", "arrows-alt"]
                    })), o.a.createElement("div", {
                        className: w.a.resize
                    }, o.a.createElement(y.a, {
                        icon: ["fas", "arrows-alt-h"]
                    })), o.a.createElement("div", {
                        className: w.a.hide
                    }, o.a.createElement(y.a, {
                        icon: ["fas", e.hidden ? "eye-slash" : "eye"]
                    }))))
                },
                C = "SET_CHAT_POSITION";
            var O = function(e) {
                    function t(e) {
                        var n;
                        return Object(c.a)(this, t), (n = Object(s.a)(this, Object(u.a)(t).call(this, e))).state = {
                            width: 350,
                            moving: !1,
                            resizing: !1,
                            hidden: !1,
                            rel: {
                                x: 0,
                                y: 0
                            },
                            ghost: {
                                x: 0,
                                y: 0
                            },
                            windowWidth: window.innerWidth
                        }, n.onMoveClick = function(e) {
                            if (e.persist(), 0 === e.button) {
                                var t = e.pageX - n.chatElement.current.offsetLeft,
                                    a = e.pageY - n.chatElement.current.offsetTop;
                                n.setState({
                                    moving: !0,
                                    rel: {
                                        x: t,
                                        y: a
                                    },
                                    ghost: {
                                        x: e.clientX - t,
                                        y: e.clientY - a
                                    }
                                })
                            }
                        }, n.onResizeClick = function(e) {
                            e.persist(), 0 === e.button && n.setState({
                                resizing: !0
                            })
                        }, n.onMouseMove = function(e) {
                            var t = n.props,
                                a = t.cookies,
                                o = t.chat,
                                i = t.setChatPosition;
                            if (n.state.moving) {
                                var r = b()("body").outerWidth() / 2,
                                    c = e.clientX - n.state.rel.x,
                                    l = e.clientY - n.state.rel.y,
                                    s = e.clientX < r ? "left" : "right";
                                n.setState({
                                    ghost: {
                                        x: c,
                                        y: l
                                    }
                                }), i(s), a.set("chat.position", s)
                            } else if (n.state.resizing) {
                                var u = b()("body"),
                                    m = Math.round(Math.max(150, Math.min("left" === o.position ? e.clientX : u.outerWidth() - e.clientX, .5 * u.outerWidth())));
                                n.setState({
                                    width: m
                                }), a.set("chat.width", m)
                            }
                        }, n.onMouseUp = function(e) {
                            0 === e.button && n.setState({
                                moving: !1,
                                resizing: !1
                            })
                        }, n.onHideClick = function() {
                            var e = n.props.cookies,
                                t = !n.state.hidden;
                            n.setState({
                                hidden: t
                            }), e.set("chat.hidden", t)
                        }, n.chatElement = o.a.createRef(), n
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.cookies,
                                n = e.setChatPosition,
                                a = t.get("chat.position") || "right",
                                o = parseFloat(t.get("chat.width") || 350),
                                i = "true" === t.get("chat.hidden");
                            this.setState({
                                width: o,
                                hidden: i
                            }), n(a), b()(window).mousemove(this.onMouseMove), b()(window).mouseup(this.onMouseUp)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            b()(window).off("mousemove"), b()(window).off("mouseup"), b()(window).off("resize")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = "ontouchstart" in window || navigator.msMaxTouchPoints,
                                t = this.props,
                                n = t.edit,
                                a = t.chat,
                                i = Object({
                                    NODE_ENV: "production",
                                    PUBLIC_URL: "",
                                    REACT_APP_CHANNEL: "demonzz1",
                                    REACT_APP_WEBSITE_NAME: "Degenerat.pl",
                                    REACT_APP_DOMAIN: "cohesive-mile-257522.appspot.com",
                                    REACT_APP_HOME_IMAGE: "https://static-cdn.jtvnw.net/emoticons/v1/1448173/4.0"
                                }).REACT_APP_POORCHAT,
                                r = this.state.moving;
                            return n ? r ? o.a.createElement("div", null, o.a.createElement("div", {
                                className: [w.a.chat, w.a.ghost].join(" "),
                                style: {
                                    width: this.state.width,
                                    height: "100vh"
                                }
                            }), o.a.createElement(k, {
                                x: this.state.ghost.x,
                                y: this.state.ghost.y,
                                width: this.state.width,
                                position: a.position,
                                hidden: this.state.hidden
                            })) : o.a.createElement("div", {
                                className: [w.a.chat, w.a.edit, a.position].join(" "),
                                style: {
                                    width: this.state.width
                                },
                                ref: this.chatElement
                            }, o.a.createElement(y.a, {
                                icon: ["fas", "comment-alt"],
                                style: {
                                    color: void 0
                                }
                            }), o.a.createElement("span", null, "Twitch chat"), o.a.createElement("div", {
                                className: w.a.controls
                            }, o.a.createElement("div", {
                                className: w.a.move,
                                onMouseDown: this.onMoveClick
                            }, o.a.createElement(y.a, {
                                icon: ["fas", "arrows-alt"]
                            })), o.a.createElement("div", {
                                className: w.a.resize,
                                onMouseDown: this.onResizeClick
                            }, o.a.createElement(y.a, {
                                icon: ["fas", "arrows-alt-h"]
                            })), o.a.createElement("div", {
                                className: w.a.hide,
                                onClick: this.onHideClick
                            }, o.a.createElement(y.a, {
                                icon: ["fas", "eye"]
                            })))) : this.state.hidden ? o.a.createElement("div", null) : o.a.createElement("div", {
                                className: w.a.chat,
                                ref: this.chatElement
                            }, o.a.createElement("iframe", {
                                frameBorder: "0",
                                title: "chat",
                                scrolling: "no",
                                id: "chat_embed",
                                src: i ? "https://client.poorchat.net/".concat(i) : "https://www.twitch.tv/embed/".concat("demonzz1", "/chat?darkpopout"),
                                style: {
                                    width: e ? "100%" : this.state.width,
                                    flex: "100%"
                                }
                            }))
                        }
                    }]), t
                }(a.Component),
                j = Object(_.b)(function(e) {
                    return {
                        edit: e.edit,
                        chat: e.chat
                    }
                }, function(e) {
                    return {
                        setChatPosition: function(t) {
                            e(function(e) {
                                return {
                                    type: C,
                                    position: e
                                }
                            }(t))
                        }
                    }
                })(Object(f.b)(O)),
                S = n(5),
                M = "INCREMENT_DELAY",
                N = "DECREMENT_DELAY",
                x = "SET_DELAY";

            function T() {
                return {
                    type: M
                }
            }

            function D() {
                return {
                    type: N
                }
            }

            function I(e) {
                return {
                    type: x,
                    delay: e
                }
            }
            n(5366), n(67);
            var P = function(e) {
                function t() {
                    var e, n;
                    Object(c.a)(this, t);
                    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
                    return (n = Object(s.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(o)))).state = {
                        show_dialog: !1
                    }, n.onMouseDown = function(e) {
                        0 === b()(e.target).parents("div.delay").length && n.setState({
                            show_dialog: !1
                        })
                    }, n.handleDelayDialog = function(e) {
                        var t = b()(e.target);
                        t.is("div") && !t.hasClass("delay") || 0 !== t.parents("button:not(.delay)").length || n.setState({
                            show_dialog: !n.state.show_dialog
                        })
                    }, n.handleDecrement = function() {
                        var e = n.props,
                            a = e.decrementDelay,
                            o = e.cookies,
                            i = e.delay;
                        a(), o.set("delay", i - t.DELAY_STEP)
                    }, n.handleIncrement = function() {
                        var e = n.props,
                            a = e.incrementDelay,
                            o = e.cookies,
                            i = e.delay;
                        a(), o.set("delay", i + t.DELAY_STEP)
                    }, n
                }
                return Object(m.a)(t, e), Object(l.a)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this.props,
                            t = e.cookies;
                        (0, e.setDelay)(Math.max(parseInt(t.get("delay") || 3e3), 0)), b()(window).on("mousedown", this.onMouseDown)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        b()(window).off("mousedown", this.onMouseDown)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.delay;
                        return o.a.createElement("div", {
                            className: "delay tooltip ".concat(this.state.show_dialog ? "hidden" : ""),
                            onClick: this.handleDelayDialog
                        }, this.state.show_dialog && o.a.createElement("button", {
                            onClick: this.handleDecrement
                        }, o.a.createElement(S.g, null)), o.a.createElement(S.k, null), o.a.createElement("span", null, (e / 1e3).toFixed(1), "s"), this.state.show_dialog && o.a.createElement("button", {
                            onClick: this.handleIncrement
                        }, o.a.createElement(S.a, null)), o.a.createElement("label", null, "Zmiana op\xf3\u017anienia"))
                    }
                }]), t
            }(a.Component);
            P.DELAY_STEP = 500;
            var z = Object(_.b)(function(e) {
                    return {
                        delay: e.delay
                    }
                }, function(e) {
                    return {
                        decrementDelay: function() {
                            e(D())
                        },
                        incrementDelay: function() {
                            e(T())
                        },
                        setDelay: function(t) {
                            e(I(t))
                        }
                    }
                })(Object(f.b)(P)),
                A = "TOGGLE_EDIT_MODE";

            function V() {
                return {
                    type: A
                }
            }
            n(5443);
            var L = "SET_CURRENT_TIME",
                R = "SET_PLAYING",
                H = "SET_VIDEO_SOURCES",
                W = "SET_QUALITY";

            function Y(e) {
                return {
                    type: L,
                    current_time: e
                }
            }

            function F(e) {
                return {
                    type: R,
                    playing: e
                }
            }

            function U(e) {
                return {
                    type: H,
                    sources: e
                }
            }

            function q(e) {
                return {
                    type: W,
                    quality: e
                }
            }
            var Q = function(e) {
                function t() {
                    var e, n;
                    Object(c.a)(this, t);
                    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
                    return (n = Object(s.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(o)))).state = {
                        sources: {}
                    }, n.handleChange = function(e, t, a) {
                        var o = n.state.sources;
                        o[t] || (o[t] = []);
                        var i = e.target.value;
                        o[t][a] = i, o[t] = o[t].filter(function(e) {
                            return e && e.length > 0
                        }), n.setState({
                            sources: o
                        })
                    }, n.handleCancel = function() {
                        (0, n.props.setVisible)(!1)
                    }, n.handleConfirm = function() {
                        var e = n.state.sources,
                            t = n.props,
                            a = t.cookies,
                            o = t.socket,
                            i = t.setVideoSources,
                            r = t.setQuality,
                            c = t.setVisible,
                            l = a.get("quality");
                        0 !== Object.keys(e).length && (e[l] || Object.keys(e).sort(function(e, t) {
                            return parseInt(e.slice(0, e.length - 1)) - parseInt(t.slice(0, t.length - 1))
                        }).forEach(function(e) {
                            var t = parseInt(e.slice(0, e.length - 1));
                            l && window.outerHeight < t || (l = e)
                        })), r(l), i(e), o.emit("sources", e), c(!1)
                    }, n
                }
                return Object(m.a)(t, e), Object(l.a)(t, [{
                    key: "renderQualityField",
                    value: function(e) {
                        for (var t = this, n = this.state.sources, a = [], i = function(i) {
                                a.push(o.a.createElement("input", {
                                    key: "input-".concat(e, "-").concat(i),
                                    "data-key": "input-".concat(e, "-").concat(i),
                                    onChange: function(n) {
                                        return t.handleChange(n, e, i)
                                    },
                                    value: n[e] && i < n[e].length ? n[e][i] : ""
                                }))
                            }, r = 0; r < (n[e] ? n[e].length : 0) + 1; r++) i(r);
                        return o.a.createElement("div", {
                            key: e,
                            className: "quality field"
                        }, o.a.createElement("label", null, e), o.a.createElement("div", {
                            className: "input-group"
                        }, a))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return o.a.createElement("div", {
                            className: "modal background"
                        }, o.a.createElement("div", {
                            className: "modal"
                        }, t.QUALITIES.map(function(t) {
                            return e.renderQualityField(t)
                        }), o.a.createElement("div", null, o.a.createElement("button", {
                            className: "cancel",
                            onClick: this.handleCancel
                        }, "Anuluj"), o.a.createElement("button", {
                            className: "confirm",
                            onClick: this.handleConfirm
                        }, "Zatwierd\u017a"))))
                    }
                }]), t
            }(a.Component);
            Q.QUALITIES = ["240p", "360p", "480p", "720p", "1080p", "1440p", "2160p"];
            var B = Object(_.b)(function(e) {
                    return {
                        socket: e.socket
                    }
                }, function(e) {
                    return {
                        setVideoSources: function(t) {
                            e(U(t))
                        },
                        setQuality: function(t) {
                            e(q(t))
                        }
                    }
                })(Object(f.b)(Q)),
                X = n(18),
                G = "SET_LIVE";

            function J(e, t) {
                return {
                    type: G,
                    fullscreen: e,
                    url: t
                }
            }
            var K = n(64),
                Z = n.n(K),
                $ = n(82),
                ee = n.n($),
                te = function(e) {
                    var t = Object(a.useState)(""),
                        n = Object(X.a)(t, 2),
                        i = n[0],
                        r = n[1],
                        c = Object(a.useState)(!1),
                        l = Object(X.a)(c, 2),
                        s = l[0],
                        u = l[1],
                        m = Object(_.d)(function(e) {
                            return e.socket
                        }),
                        d = Object(_.c)();
                    return o.a.createElement("div", {
                        className: Z.a.background
                    }, o.a.createElement("div", {
                        className: Z.a.modal
                    }, o.a.createElement("label", {
                        className: ee.a.label
                    }, "Adres streama"), o.a.createElement("input", {
                        className: ee.a.input,
                        type: "text",
                        value: i,
                        onChange: function(e) {
                            r(e.target.value)
                        }
                    }), o.a.createElement("div", {
                        style: {
                            marginTop: 5,
                            marginBottom: 5
                        }
                    }, o.a.createElement("input", {
                        id: "fullscreen",
                        type: "checkbox",
                        checked: s,
                        onChange: function(e) {
                            u(e.target.checked)
                        }
                    }), o.a.createElement("label", {
                        htmlFor: "fullscreen"
                    }, "Tryb pe\u0142noekranowy")), o.a.createElement("div", {
                        className: Z.a.buttons
                    }, o.a.createElement("button", {
                        className: v.a.cancel,
                        onClick: function() {
                            e.setVisible(!1)
                        }
                    }, "Anuluj"), o.a.createElement("button", {
                        className: v.a.confirm,
                        onClick: function() {
                            d(J(s, i)), m.emit("live", {
                                url: i,
                                fullscreen: s
                            }), e.setVisible(!1)
                        }
                    }, "Zatwierd\u017a"))))
                },
                ne = (n(5444), function(e) {
                    function t() {
                        var e, n;
                        Object(c.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
                        return (n = Object(s.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            sources_modal: !1,
                            live_modal: !1
                        }, n.handleEdit = function() {
                            var e = n.props,
                                t = e.toggleEditMode;
                            e.edit && n.updateVideo(), t()
                        }, n.updateVideo = function() {
                            var e = n.props,
                                t = e.cookies,
                                a = e.video,
                                o = e.setQuality;
                            setTimeout(function() {
                                var e = b()("video.video");
                                if (0 !== e.length) {
                                    var i = t.get("quality"),
                                        r = void 0;
                                    0 !== Object.keys(a.sources).length && (a.sources[i] || Object.keys(a.sources).sort(function(e, t) {
                                        return parseInt(e.slice(0, e.length - 1)) - parseInt(t.slice(0, t.length - 1))
                                    }).forEach(function(e) {
                                        var t = parseInt(e.slice(0, e.length - 1));
                                        i && b()(window).outerHeight() < t || (i = e)
                                    }), r = a.sources[i][Math.floor(Math.random() * a.sources[i].length)]), b()("video.video source").attr("src", r), e[0].load(), e.get(0).volume = parseFloat(t.get("video.volume") || .5), o(i);
                                    var c = void 0;
                                    (c = a.playing ? e[0].play() : e[0].pause()) && c.catch(function(e) {
                                        n.state.alert_shown || (n.setState({
                                            alert_shown: !0
                                        }), alert("Kliknij w odtwarzacz, aby odtworzy\u0107 wideo"), console.error(e))
                                    }), a.current_time && (e.get(0).currentTime = a.current_time)
                                }
                            }, 100)
                        }, n
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.edit;
                            if (t) {
                                var n = !!("ontouchstart" in window || navigator.msMaxTouchPoints);
                                return o.a.createElement("div", {
                                    className: "edit-box ".concat(n ? "mobile" : "", " ").concat(this.props.visible ? "enabled" : "")
                                }, o.a.createElement("button", {
                                    className: "edit",
                                    onClick: this.handleEdit
                                }, o.a.createElement(y.a, {
                                    icon: t ? "times" : "layer-group"
                                })), t && localStorage.xD && o.a.createElement("button", {
                                    className: "video-url",
                                    onClick: function() {
                                        e.setState({
                                            sources_modal: !0
                                        })
                                    }
                                }, o.a.createElement(y.a, {
                                    icon: "video"
                                })), t && localStorage.xD && o.a.createElement("button", {
                                    className: "live",
                                    onClick: function() {
                                        e.setState({
                                            live_modal: !0
                                        })
                                    }
                                }, o.a.createElement(y.a, {
                                    icon: "broadcast-tower"
                                })), t && this.state.sources_modal && o.a.createElement(B, {
                                    visible: this.state.sources_modal,
                                    setVisible: function(t) {
                                        e.setState({
                                            sources_modal: t
                                        })
                                    }
                                }), t && this.state.live_modal && o.a.createElement(te, {
                                    visible: this.state.live_modal,
                                    setVisible: function(t) {
                                        return e.setState({
                                            live_modal: t
                                        })
                                    }
                                }))
                            }
                            return o.a.createElement("button", {
                                className: "tooltip",
                                onClick: this.handleEdit
                            }, o.a.createElement(S.b, null), o.a.createElement("label", null, "Edytuj uk\u0142ad"))
                        }
                    }]), t
                }(a.Component)),
                ae = Object(_.b)(function(e) {
                    return {
                        edit: e.edit,
                        video: e.video,
                        socket: e.socket
                    }
                }, function(e) {
                    return {
                        toggleEditMode: function() {
                            e(V())
                        },
                        setQuality: function(t) {
                            e(q(t))
                        }
                    }
                })(Object(f.b)(ne)),
                oe = n(133),
                ie = n.n(oe),
                re = n(32),
                ce = n.n(re),
                le = function(e) {
                    function t(e) {
                        var n;
                        return Object(c.a)(this, t), (n = Object(s.a)(this, Object(u.a)(t).call(this, e))).state = {
                            x: 0,
                            y: 0,
                            relX: 0,
                            relY: 0,
                            width: 426,
                            height: 240,
                            hidden: !1,
                            moving: !1,
                            resizing: !1,
                            playing: !0,
                            volume: 1,
                            muted: !1
                        }, n.onMoveClick = function(e) {
                            e.persist(), void 0 !== e.button && 0 !== e.button || n.setState({
                                moving: !0,
                                relX: e.nativeEvent.offsetX,
                                relY: e.nativeEvent.offsetY
                            })
                        }, n.onResizeClick = function(e) {
                            e.persist(), void 0 !== e.button && 0 !== e.button || n.setState({
                                resizing: !0
                            })
                        }, n.onHideClick = function() {
                            var e = n.props.cookies,
                                t = !n.state.hidden;
                            n.setState({
                                hidden: t
                            }), e.set("stream.hidden", t)
                        }, n.onMouseMove = function(e) {
                            var t = n.props.cookies;
                            if (e.clientX || e.changedTouches) {
                                var a = e.clientX,
                                    o = e.clientY;
                                if (a && o)
                                    if (n.state.moving) {
                                        var i = a - n.state.relX,
                                            r = o - n.state.relY,
                                            c = n.props.playerElement.current.clientWidth - n.state.width,
                                            l = n.props.playerElement.current.clientHeight - n.state.height;
                                        i = Math.round(Math.min(c, Math.max(i, 0))), r = Math.round(Math.min(l, Math.max(r, 0))), n.setState({
                                            x: i,
                                            y: r
                                        }), console.log(i, r), t.set("stream.x", i), t.set("stream.y", r)
                                    } else if (n.state.resizing) {
                                    console.log(n.streamElement.current.offsetLeft, n.state.x);
                                    var s = a - n.state.x,
                                        u = (s = Math.max(Math.min(n.props.playerElement.current.clientWidth, s), 256)) / 16 * 9;
                                    n.setState({
                                        width: s,
                                        height: u
                                    }), t.set("stream.width", s), t.set("stream.height", u)
                                }
                            }
                        }, n.onMouseUp = function(e) {
                            void 0 !== e.button && 0 !== e.button || n.setState({
                                moving: !1,
                                resizing: !1
                            })
                        }, n.onWindowResize = function() {
                            var e = n.props.cookies,
                                t = "ontouchstart" in window || navigator.msMaxTouchPoints,
                                a = parseInt(e.get("stream.width") || 426),
                                o = parseInt(e.get("stream.height") || 240);
                            a = Math.min(n.props.playerElement.current.clientWidth, a), o = Math.min(n.props.playerElement.current.clientHeight, o), t && (a = 240, o = 144);
                            var i = Math.min(parseInt(e.get("stream.x") || 0), n.props.playerElement.current.clientWidth - a),
                                r = Math.min(parseInt(e.get("stream.y") || 0), n.props.playerElement.current.clientHeight - o);
                            n.setState({
                                x: i,
                                y: r,
                                width: a,
                                height: o
                            })
                        }, n.onMouseOver = function(e) {
                            var t = b()(e.target);
                            if (!(t.parents("div.video").hasClass("edit") || t.hasClass("video") && t.hasClass("edit")) && !(n.props.playerElement.current.clientHeight - (n.state.y + n.state.height) >= 90)) {
                                var a = n.props.playerElement.current.clientHeight - 90 - n.state.height;
                                n.setState({
                                    y: a
                                })
                            }
                        }, n.onMouseOut = function() {
                            if (!n.props.edit) {
                                var e = n.props.cookies,
                                    t = parseInt(e.get("stream.height") || 240);
                                t = Math.min(n.props.playerElement.current.clientHeight, t);
                                var a = Math.min(parseInt(e.get("stream.y") || 0), n.props.playerElement.current.clientHeight - t);
                                console.log(a, t), n.setState({
                                    y: a
                                })
                            }
                        }, n.streamElement = o.a.createRef(), n
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.cookies,
                                t = parseInt(e.get("stream.x") || 0),
                                n = parseInt(e.get("stream.y") || 0),
                                a = parseInt(e.get("stream.width") || 426),
                                o = parseInt(e.get("stream.height") || 240),
                                i = "true" === e.get("stream.hidden");
                            this.setState({
                                x: t,
                                y: n,
                                width: a,
                                height: o,
                                hidden: i
                            }), b()(window).on("mousemove", this.onMouseMove), b()(window).on("touchmove", this.onMouseMove), b()(window).on("mouseup", this.onMouseUp), b()(window).on("touchend", this.onMouseUp), b()(window).on("resize", this.onWindowResize), b()("div.video").on("mouseover", this.onMouseOver), b()("div.video").on("mouseout", this.onMouseOut)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            b()(window).off("mousemove", this.onMouseMove), b()(window).off("mouseup", this.onMouseUp), b()(window).off("resize", this.onWindowResize)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = e.edit,
                                n = this.props.edit;
                            if (t !== n) {
                                var a = this.props.cookies;
                                if (console.log(this.props.edit, this.props.playerElement.current.clientHeight, this.state.y, this.state.height), n) {
                                    var o = parseInt(a.get("stream.height") || 240);
                                    o = Math.min(this.props.playerElement.current.clientHeight, o);
                                    var i = Math.min(parseInt(a.get("stream.y") || 0), this.props.playerElement.current.clientHeight - o);
                                    this.setState({
                                        y: i
                                    })
                                } else if (!n && this.props.playerElement.current.clientHeight - (this.state.y + this.state.height) < 90) {
                                    var r = this.props.playerElement.current.clientHeight - 90 - this.state.height;
                                    this.setState({
                                        y: r
                                    })
                                }
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.edit,
                                a = t.live,
                                i = a.fullscreen,
                                r = a.url,
                                c = this.state,
                                l = c.x,
                                s = c.y,
                                u = c.width,
                                m = c.height,
                                d = c.hidden;
                            if (n) {
                                var h;
                                switch (!0) {
                                    case -1 !== r.indexOf("twitch"):
                                        h = "twitch";
                                        break;
                                    case -1 !== r.indexOf("youtube"):
                                        h = "youtube";
                                        break;
                                    case -1 !== r.indexOf("facebook"):
                                        h = "facebook";
                                        break;
                                    default:
                                        h = "twitch"
                                }
                                return o.a.createElement("div", {
                                    className: [ce.a.stream, ce.a.edit, i && "fullscreen"].join(" "),
                                    style: i ? {
                                        width: "100%",
                                        height: "100%"
                                    } : {
                                        transform: "translate(".concat(l, "px, ").concat(s, "px)"),
                                        width: u,
                                        height: m
                                    },
                                    ref: this.streamElement
                                }, o.a.createElement(y.a, {
                                    icon: ["fab", h],
                                    style: {
                                        color: d ? "#DF3D62" : void 0
                                    }
                                }), o.a.createElement("span", null, h, " stream"), !i && o.a.createElement("div", {
                                    className: ce.a.move,
                                    onMouseDown: this.onMoveClick,
                                    onTouchStart: this.onMoveClick
                                }, o.a.createElement(y.a, {
                                    icon: ["fas", "arrows-alt"]
                                })), !i && o.a.createElement("div", {
                                    className: ce.a.resize,
                                    onMouseDown: this.onResizeClick,
                                    onTouchStart: this.onResizeClick
                                }, o.a.createElement(y.a, {
                                    icon: ["fas", "expand-arrows-alt"]
                                })), !i && o.a.createElement("div", {
                                    className: ce.a.hide,
                                    onClick: this.onHideClick
                                }, o.a.createElement(y.a, {
                                    icon: ["fas", d ? "eye-slash" : "eye"]
                                })))
                            }
                            if (d) return o.a.createElement("div", null);
                            var p = this.state,
                                v = p.playing,
                                f = p.volume,
                                _ = p.muted;
                            return o.a.createElement("div", {
                                className: "stream-wrapper"
                            }, o.a.createElement(ie.a, {
                                url: r,
                                playing: v,
                                volume: f,
                                muted: _,
                                width: i ? "100%" : u,
                                height: i ? "100%" : m,
                                style: i ? {
                                    width: "100%",
                                    height: "100%"
                                } : {
                                    position: "absolute",
                                    transform: "translate(".concat(l, "px,").concat(s, "px)")
                                },
                                className: ce.a.stream,
                                playsinline: !0,
                                onPlay: function() {
                                    e.setState({
                                        playing: !0
                                    })
                                },
                                onPause: function() {
                                    e.setState({
                                        playing: !1
                                    })
                                },
                                controls: !0,
                                youtubeConfig: {
                                    playerVars: {
                                        controls: 1
                                    }
                                }
                            }))
                        }
                    }]), t
                }(a.Component),
                se = Object(_.b)(function(e) {
                    return {
                        edit: e.edit,
                        live: e.live
                    }
                })(Object(f.b)(le)),
                ue = o.a.memo(function(e) {
                    var t = e.src,
                        n = e.videoRef,
                        a = e.className,
                        i = e.style,
                        r = e.onPause,
                        c = e.onCanPlay,
                        l = e.onTimeUpdate,
                        s = e.onDurationChange,
                        u = e.onVolumeChange;
                    e.muted, e.playsInline;
                    return console.log(t), o.a.createElement("video", {
                        key: t,
                        ref: n,
                        className: a,
                        style: i,
                        controls: !1,
                        onPause: r,
                        onCanPlay: c,
                        onTimeUpdate: l,
                        onDurationChange: s,
                        onVolumeChange: u,
                        muted: !1,
                        playsInline: !0,
                        autoPlay: !1
                    }, o.a.createElement("source", {
                        src: t
                    }))
                }, function(e, t) {
                    var n = e.src,
                        a = e.style,
                        o = t.src,
                        i = t.style;
                    return n === o && a === i
                }),
                me = n(31),
                de = n(47),
                he = n.n(de),
                pe = n(83),
                ve = n.n(pe),
                fe = function(e) {
                    return o.a.createElement("div", {
                        className: [e.className, ve.a.tooltip].join(" ")
                    }, e.children, o.a.createElement("label", {
                        className: ve.a.label
                    }, e.tooltip))
                },
                ye = n(41),
                _e = n.n(ye),
                ge = function() {
                    var e = Object(a.useState)(!1),
                        t = Object(X.a)(e, 2),
                        n = t[0],
                        i = t[1],
                        r = Object(_.d)(function(e) {
                            return e.video.sources
                        }),
                        c = Object(_.d)(function(e) {
                            return e.video.quality
                        }),
                        l = Object(_.c)(),
                        s = Object(f.a)(["quality"])[1];
                    return o.a.createElement("div", {
                        className: _e.a.container
                    }, o.a.createElement(fe, {
                        tooltip: "Zmiana jako\u015bci"
                    }, o.a.createElement("button", {
                        className: _e.a.quality,
                        onClick: function() {
                            i(!n)
                        }
                    }, o.a.createElement(S.h, null), o.a.createElement("span", null, c))), n && o.a.createElement("ul", {
                        className: _e.a.dialog
                    }, Object.keys(r).map(function(e) {
                        return o.a.createElement("li", {
                            key: e,
                            className: he()(_e.a.quality, Object(me.a)({}, _e.a.selected, c === e)),
                            onClick: function() {
                                return function(e) {
                                    l(q(e)), s("quality", e)
                                }(e)
                            }
                        }, e)
                    })))
                },
                be = n(48),
                Ee = n.n(be),
                we = function() {
                    var e = Object(a.useState)(!1),
                        t = Object(X.a)(e, 2),
                        n = t[0],
                        i = t[1],
                        r = Object(_.d)(function(e) {
                            return e.delay
                        }),
                        c = Object(_.c)(),
                        l = Object(f.a)(["delay"]),
                        s = Object(X.a)(l, 2),
                        u = s[0],
                        m = s[1];
                    Object(a.useEffect)(function() {
                        var e = Math.max(parseInt(u.delay || 3e3), 0);
                        c(I(e))
                    }, []);
                    return o.a.createElement(fe, {
                        tooltip: "Zmiana op\xf3\u017anienia"
                    }, o.a.createElement("div", {
                        className: Ee.a.delay
                    }, n && o.a.createElement("button", {
                        className: Ee.a.decrement,
                        onClick: function() {
                            c(D()), m("delay", r - 500)
                        }
                    }, o.a.createElement(S.g, null)), o.a.createElement("button", {
                        className: Ee.a.button,
                        onClick: function() {
                            i(!n)
                        }
                    }, o.a.createElement(S.k, null), o.a.createElement("span", null, (r / 1e3).toFixed(1), "s")), n && o.a.createElement("button", {
                        className: Ee.a.increment,
                        onClick: function() {
                            c(T()), m("delay", r + 500)
                        }
                    }, o.a.createElement(S.a, null))))
                },
                ke = "TOGGLE_SYNC",
                Ce = "SET_SYNC";
            var Oe = n(134),
                je = n.n(Oe),
                Se = function() {
                    var e = Object(_.d)(function(e) {
                            return e.sync
                        }),
                        t = Object(_.c)(),
                        n = Object(f.a)(["sync"]),
                        i = Object(X.a)(n, 2),
                        r = i[0],
                        c = i[1];
                    Object(a.useEffect)(function() {
                        var e = "true" === (r.sync || "true");
                        t(function(e) {
                            return {
                                type: Ce,
                                sync: e
                            }
                        }(e))
                    }, []);
                    return o.a.createElement(fe, {
                        tooltip: "".concat(e ? "Wy\u0142\u0105cz" : "W\u0142\u0105cz", " synchronizacj\u0119")
                    }, o.a.createElement("button", {
                        className: je.a.sync,
                        onClick: function() {
                            c("sync", !e), t({
                                type: ke
                            })
                        }
                    }, e ? o.a.createElement(S.i, null) : o.a.createElement(S.j, null)))
                },
                Me = n(135),
                Ne = n.n(Me),
                xe = function(e) {
                    var t = e.visible,
                        n = Object(a.useState)(!1),
                        i = Object(X.a)(n, 2),
                        r = i[0],
                        c = i[1],
                        l = Object(a.useState)(!1),
                        s = Object(X.a)(l, 2),
                        u = s[0],
                        m = s[1],
                        d = Object(_.d)(function(e) {
                            return e.edit
                        }),
                        h = Object(_.c)(),
                        p = function() {
                            h(V())
                        };
                    return d ? o.a.createElement("div", {
                        className: "edit-box ".concat(t ? "enabled" : "")
                    }, o.a.createElement("button", {
                        className: "edit",
                        onClick: p
                    }, o.a.createElement(y.a, {
                        icon: d ? "times" : "layer-group"
                    })), d && localStorage.xD && o.a.createElement("button", {
                        className: "video-url",
                        onClick: function() {
                            return c(!0)
                        }
                    }, o.a.createElement(y.a, {
                        icon: "video"
                    })), d && localStorage.xD && o.a.createElement("button", {
                        className: "live",
                        onClick: function() {
                            return m(!0)
                        }
                    }, o.a.createElement(y.a, {
                        icon: "broadcast-tower"
                    })), d && r && o.a.createElement(B, {
                        visible: (void 0).state.sources_modal,
                        setVisible: function(e) {
                            return c(e)
                        }
                    }), d && u && o.a.createElement(te, {
                        visible: (void 0).state.live_modal,
                        setVisible: function(e) {
                            return m(e)
                        }
                    })) : o.a.createElement(fe, null, o.a.createElement("button", {
                        className: Ne.a.edit,
                        onClick: p
                    }, o.a.createElement(S.b, null)))
                },
                Te = n(13),
                De = n.n(Te),
                Ie = function(e) {
                    e = Math.floor(e);
                    var t = Math.floor(e / 60),
                        n = e % 60;
                    return "".concat(t < 10 ? "0" : "").concat(t, ":").concat(n < 10 ? "0" : "").concat(n)
                },
                Pe = function(e) {
                    return o.a.createElement("div", {
                        className: he()(De.a.controls, Object(me.a)({}, De.a.visible, e.visible))
                    }, o.a.createElement("div", {
                        className: he()(De.a.time_slider_container, Object(me.a)({}, De.a.disabled, !e.allowControl))
                    }, o.a.createElement("input", {
                        className: De.a.time_slider,
                        type: "range",
                        min: 0,
                        max: e.duration,
                        step: .1,
                        value: e.current_time,
                        onChange: e.onTimeChange,
                        style: {
                            backgroundImage: "linear-gradient(to right, #4285f4 0%, #4285f4 ".concat(100 * e.current_time / e.duration, "%, rgba(255, 255, 255, 0.35) ").concat(100 * e.current_time / e.duration + 1e-4, "%, rgba(255, 255, 255, 0.35) 100%)")
                        }
                    })), o.a.createElement("div", {
                        className: De.a.buttons
                    }, e.allowControl && o.a.createElement("button", {
                        className: De.a.play,
                        onClick: e.onPlayPauseClick
                    }, e.playing ? o.a.createElement(S.e, null) : o.a.createElement(S.f, null)), o.a.createElement("div", {
                        className: De.a.volume
                    }, o.a.createElement("button", {
                        className: De.a.mute,
                        onClick: e.onMuteChange
                    }, e.muted || 0 === e.volume ? o.a.createElement(S.l, null) : o.a.createElement(S.m, null)), o.a.createElement("div", {
                        className: De.a.volume_slider_container
                    }, o.a.createElement("input", {
                        className: De.a.volume_slider,
                        type: "range",
                        min: 0,
                        max: 1,
                        step: .01,
                        value: e.volume,
                        onChange: e.onVolumeChange,
                        style: {
                            backgroundImage: "linear-gradient(to right, #4285f4 0%, #4285f4 ".concat(100 * e.volume, "%, rgba(255, 255, 255, 0.35) ").concat(100 * e.volume + 1e-4, "%, rgba(255, 255, 255, 0.35) 100%)")
                        }
                    }))), o.a.createElement("div", {
                        className: De.a.time
                    }, o.a.createElement("p", {
                        className: De.a.time_p
                    }, "".concat(Ie(e.current_time), "/").concat(Ie(e.duration)))), o.a.createElement("div", {
                        style: {
                            flex: 1
                        }
                    }), o.a.createElement(ge, null), o.a.createElement(we, {
                        className: De.a.delay
                    }), o.a.createElement(Se, {
                        className: De.a.sync
                    }), o.a.createElement(xe, {
                        className: De.a.edit
                    }), o.a.createElement(fe, {
                        tooltip: "".concat(e.fullscreen ? "Wy\u0142\u0105cz" : "W\u0142\u0105cz", " tryb pe\u0142nego ekranu")
                    }, o.a.createElement("button", {
                        className: De.a.fullscreen,
                        onClick: e.onFullscreenChange
                    }, e.fullscreen ? o.a.createElement(S.d, null) : o.a.createElement(S.c, null)))))
                },
                ze = n(49),
                Ae = n.n(ze),
                Ve = function(e) {
                    var t = e.onClick;
                    return o.a.createElement("button", {
                        className: Ae.a.overlay,
                        onClick: t
                    }, o.a.createElement("div", {
                        className: Ae.a.container
                    }, o.a.createElement(S.f, {
                        className: Ae.a.icon
                    }), o.a.createElement("span", {
                        className: Ae.a.span
                    }, "Kliknij, aby odtworzy\u0107 wideo")))
                },
                Le = n(42),
                Re = n.n(Le),
                He = function(e) {
                    function t(e) {
                        var n;
                        return Object(c.a)(this, t), (n = Object(s.a)(this, Object(u.a)(t).call(this, e))).state = {
                            hadInteraction: !1,
                            current_time: 0,
                            duration: 0,
                            focused: !1,
                            volume: 1,
                            muted: !1,
                            fullscreen: !1,
                            clicked_play_button: !1,
                            last_sent: 0,
                            controlsVisible: !1
                        }, n.onFocus = function() {
                            n.setState({
                                focused: !0
                            })
                        }, n.onBlur = function() {
                            n.setState({
                                focused: !1
                            })
                        }, n.onTimeUpdate = function(e) {
                            var t = n.props,
                                a = t.currentTime,
                                o = t.socket,
                                i = t.sync,
                                r = localStorage.getItem("xD"),
                                c = e.target.currentTime;
                            !r && i && Math.abs(c - a) > 3 ? e.target.currentTime = a : (n.setState({
                                current_time: c
                            }), !r || !n.state.clicked_play_button || Date.now() - n.state.last_sent < 1e3 || (n.setState({
                                last_sent: Date.now()
                            }), o.emit("current_time", c)))
                        }, n.onDurationChange = function(e) {
                            n.setState({
                                duration: e.target.duration
                            })
                        }, n.onVolumeChange = function(e) {
                            var t = n.props.cookies,
                                a = e.target,
                                o = a.volume,
                                i = a.muted;
                            t.set("video.volume", o), t.set("video.muted", i)
                        }, n.onPause = function() {
                            localStorage.getItem("xD") && n.setState({
                                clicked_play_button: !1
                            })
                        }, n.onTimeChangeClick = function(e) {
                            if (localStorage.getItem("xD")) {
                                var t = n.props,
                                    a = t.setCurrentTime,
                                    o = t.socket,
                                    i = parseFloat(e.target.value);
                                n.video.current.currentTime = i, a(i), n.setState({
                                    current_time: i,
                                    last_sent: Date.now()
                                }), o.emit("current_time", i)
                            }
                        }, n.onPlayPauseClick = function() {
                            var e = n.props,
                                t = e.playing,
                                a = e.socket,
                                o = e.setPlaying,
                                i = !t;
                            if (i ? n.video.current.play() : n.video.current.pause(), o(i), localStorage.getItem("xD")) {
                                i && n.setState({
                                    clicked_play_button: !0
                                });
                                var r = n.video.current.currentTime;
                                a.emit(i ? "play" : "pause", r)
                            }
                        }, n.onFullScreenChange = function() {
                            n.setState({
                                fullscreen: !!document.fullscreenElement
                            })
                        }, n.handleMute = function() {
                            var e = n.props.cookies,
                                t = !n.state.muted,
                                a = parseFloat(e.get("video.volume") || 1);
                            t || 0 !== a || (a = 1), n.setState({
                                muted: t,
                                volume: t ? 0 : a
                            }), n.video.current.muted = t, n.video.current.volume = a
                        }, n.handleVolume = function(e) {
                            var t = parseFloat(e.target.value),
                                a = 0 === t;
                            n.setState({
                                muted: a,
                                volume: t
                            }), n.video.current.muted = a, n.video.current.volume = t
                        }, n.handleDecrement = function() {
                            (0, n.props.decrementDelay)()
                        }, n.handleIncrement = function() {
                            (0, n.props.incrementDelay)()
                        }, n.handleEdit = function() {
                            (0, n.props.toggleEditMode)()
                        }, n.handleFullScreen = function() {
                            n.state.fullscreen ? document.exitFullscreen() : document.documentElement.requestFullscreen()
                        }, n.handleInteraction = function() {
                            var e = n.props,
                                t = e.playing,
                                a = e.currentTime;
                            n.setState({
                                hadInteraction: !0,
                                currentTime: a
                            }), n.video.current.currentTime = a, t && n.video.current.play()
                        }, n.video = o.a.createRef(), n.src = o.a.createRef(), n
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.cookies,
                                t = parseFloat(e.get("video.volume") || .5);
                            this.video.current && (this.video.current.volume = t);
                            var n = "true" === e.get("video.muted");
                            this.video.current && (this.video.current.muted = n), this.setState({
                                volume: n ? 0 : t,
                                muted: n,
                                focused: "visible" === document.visibilityState,
                                fullscreen: !!document.fullscreenElement
                            }), b()(window).on("focus", this.onFocus), b()(window).on("blur", this.onBlur), b()(window).on("fullscreenchange", this.onFullScreenChange)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.state.hadInteraction,
                                n = e.playing,
                                a = e.currentTime,
                                o = e.edit,
                                i = this.props,
                                r = i.playing,
                                c = i.delay,
                                l = i.edit,
                                s = i.sync;
                            if (!l) {
                                var u = this.props.currentTime;
                                (o !== l || t && a !== u) && (o !== l || !r || Math.abs(this.video.current.currentTime - u) > 3 && !s) && (u -= r ? c / 1e3 : 0, this.video.current.currentTime = u, this.setState({
                                    current_time: u
                                })), (o !== l || t && n !== r) && (r ? this.video.current.play() : this.video.current.pause())
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            b()(window).off("focus", this.onFocus), b()(window).off("blur", this.onBlur)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state.hadInteraction,
                                n = this.props,
                                a = n.edit,
                                i = n.quality,
                                r = n.sources;
                            if (a) return o.a.createElement("div", {
                                className: Re.a.edit_container
                            }, o.a.createElement(y.a, {
                                className: Re.a.icon,
                                icon: ["fas", "video"]
                            }), o.a.createElement("span", {
                                className: Re.a.span
                            }, "Video player"));
                            var c, l = localStorage.getItem("xD");
                            return i && r && r[i] && 0 !== r[i].length && (c = r[i][Math.floor(Math.random() * r[i].length)]), o.a.createElement("div", {
                                className: Re.a.container,
                                onMouseEnter: function() {
                                    return e.setState({
                                        controlsVisible: !0
                                    })
                                },
                                onMouseLeave: function() {
                                    return e.setState({
                                        controlsVisible: !1
                                    })
                                }
                            }, o.a.createElement(ue, {
                                src: c,
                                videoRef: this.video,
                                className: Re.a.video,
                                style: {
                                    opacity: t ? 1 : .5
                                },
                                onPause: this.onPause,
                                onCanPlay: this.onCanPlay,
                                onTimeUpdate: this.onTimeUpdate,
                                onDurationChange: this.onDurationChange,
                                onVolumeChange: this.onVolumeChange,
                                muted: !1,
                                playsInline: !0
                            }), o.a.createElement(Pe, {
                                visible: this.state.controlsVisible,
                                allowControl: !!l,
                                playing: this.props.playing,
                                duration: this.state.duration,
                                muted: this.state.muted,
                                volume: this.state.volume,
                                current_time: this.state.current_time,
                                fullscreen: this.state.fullscreen,
                                onTimeChange: this.onTimeChangeClick,
                                onPlayPauseClick: this.onPlayPauseClick,
                                onMuteChange: this.handleMute,
                                onVolumeChange: this.handleVolume,
                                onFullscreenChange: this.handleFullScreen
                            }), !t && o.a.createElement(Ve, {
                                onClick: this.handleInteraction
                            }))
                        }
                    }], [{
                        key: "parseTime",
                        value: function(e) {
                            e = Math.floor(e);
                            var t = Math.floor(e / 60),
                                n = e % 60;
                            return "".concat(t < 10 ? "0" : "").concat(t, ":").concat(n < 10 ? "0" : "").concat(n)
                        }
                    }]), t
                }(a.Component),
                We = Object(_.b)(function(e) {
                    return {
                        edit: e.edit,
                        delay: e.delay,
                        playing: e.video.playing,
                        currentTime: e.video.current_time,
                        quality: e.video.quality,
                        sources: e.video.sources,
                        socket: e.socket,
                        sync: e.sync
                    }
                }, function(e) {
                    return {
                        setCurrentTime: function(t) {
                            e(Y(t))
                        },
                        setPlaying: function(t) {
                            e(F(t))
                        },
                        setQuality: function(t) {
                            e(q(t))
                        },
                        decrementDelay: function() {
                            e(D())
                        },
                        incrementDelay: function() {
                            e(T())
                        },
                        toggleEditMode: function() {
                            e(V())
                        }
                    }
                })(Object(f.b)(He)),
                Ye = "CLICK_START";
            var Fe = n(136),
                Ue = n.n(Fe),
                qe = function(e) {
                    function t() {
                        var e, n;
                        Object(c.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
                        return (n = Object(s.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(o)))).handleClick = function() {
                            (0, n.props.clickStart)()
                        }, n
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "render",
                        value: function() {
                            return o.a.createElement("div", {
                                className: Ue.a.container
                            }, o.a.createElement("img", {
                                src: "/static/images/pajalw.png",
                                alt: ""
                            }), o.a.createElement("button", {
                                onClick: this.handleClick
                            }, "Kliknij, aby otworzy\u0107 odtwarzacz"))
                        }
                    }]), t
                }(a.Component),
                Qe = (Object(_.b)(function() {}, function(e) {
                    return {
                        clickStart: function() {
                            e({
                                type: Ye
                            })
                        }
                    }
                })(qe), n(137)),
                Be = n.n(Qe),
                Xe = (a.Component, n(84)),
                Ge = n.n(Xe),
                Je = function() {
                    var e = Object(_.d)(function(e) {
                            return e.edit
                        }),
                        t = Object(_.d)(function(e) {
                            return e.chat
                        }),
                        n = Object(_.d)(function(e) {
                            return e.live
                        }),
                        i = Object(a.useRef)(null);
                    return o.a.createElement("div", {
                        className: Ge.a.container,
                        style: {
                            flexDirection: "right" === t.position ? "row" : "row-reverse"
                        }
                    }, o.a.createElement("div", {
                        ref: i,
                        className: Ge.a.player
                    }, e && o.a.createElement(ae, {
                        visible: !0
                    }), !n.fullscreen && o.a.createElement(We, null), o.a.createElement(se, {
                        playerElement: i
                    })), o.a.createElement(j, null))
                },
                Ke = n(138),
                Ze = n.n(Ke),
                $e = function(e) {
                    function t() {
                        return Object(c.a)(this, t), Object(s.a)(this, Object(u.a)(t).apply(this, arguments))
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            (0, this.props.removeDelay)()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.video,
                                t = Math.round(e.current_time),
                                n = Math.floor(t / 3600),
                                a = Math.floor(t % 3600 / 60),
                                i = t % 60;
                            return o.a.createElement("div", {
                                className: Ze.a.timer
                            }, o.a.createElement("span", null, n < 10 ? "0" : Math.floor(n / 10)), o.a.createElement("span", null, n % 10), o.a.createElement("span", null, ":"), o.a.createElement("span", null, a < 10 ? "0" : Math.floor(a / 10)), o.a.createElement("span", null, a % 10), o.a.createElement("span", null, ":"), o.a.createElement("span", null, i < 10 ? "0" : Math.floor(i / 10)), o.a.createElement("span", null, i % 10))
                        }
                    }]), t
                }(a.Component),
                et = Object(_.b)(function(e) {
                    return {
                        video: e.video
                    }
                }, function(e) {
                    return {
                        removeDelay: function() {
                            e(I(0))
                        }
                    }
                })($e),
                tt = n(46),
                nt = n(139),
                at = n(140),
                ot = n(141),
                it = n.n(ot),
                rt = "SET_SOCKET";
            n(5477);
            tt.b.add(nt.a, at.a);
            var ct = function(e) {
                    function t() {
                        var e, n;
                        Object(c.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
                        return (n = Object(s.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            client_id: null
                        }, n
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props.setSocket,
                                n = it()("wss://".concat("cohesive-mile-257522.appspot.com"), {
                                    upgrade: !1,
                                    transports: ["websocket"]
                                });
                            n.on("connect", function() {
                                localStorage.xD && n.emit("authenticate", localStorage.xD)
                            }), n.on("client_id", function(t) {
                                e.setState({
                                    client_id: t
                                })
                            }), n.on("status", function(t) {
                                if (t.issued_by !== e.state.client_id) {
                                    var n = e.props.delay;
                                    setTimeout(function() {
                                        e.props.setPlaying(t.playing), e.props.setCurrentTime(t.current_time)
                                    }, t.issued_by ? n : 100)
                                }
                            }), n.on("sources", function(t) {
                                if (t.issued_by !== e.state.client_id) {
                                    var n = e.props,
                                        a = n.cookies,
                                        o = n.setVideoSources,
                                        i = n.setQuality,
                                        r = a.get("quality");
                                    0 !== Object.keys(t.sources).length && (t.sources[r] || Object.keys(t.sources).sort(function(e, t) {
                                        return parseInt(e.slice(0, e.length - 1)) - parseInt(t.slice(0, t.length - 1))
                                    }).forEach(function(e) {
                                        var t = parseInt(e.slice(0, e.length - 1));
                                        r && b()(window).outerHeight() < t || (r = e)
                                    })), o(t.sources), i(r)
                                }
                            }), n.on("live", function(t) {
                                if (t.issued_by !== e.state.client_id) {
                                    var n = t.live;
                                    if (null !== n) {
                                        var a = n.fullscreen,
                                            o = n.url;
                                        e.props.setLive(a, o)
                                    } else e.props.setLive(!1, "https://twitch.tv/".concat("demonzz1"))
                                }
                            }), t(n)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return o.a.createElement(d.a, null, o.a.createElement(h.a, {
                                path: "/",
                                exact: !0,
                                component: Je
                            }), o.a.createElement(h.a, {
                                path: "/timer",
                                component: et
                            }))
                        }
                    }]), t
                }(a.Component),
                lt = Object(_.b)(function(e) {
                    return {
                        delay: e.delay,
                        video: e.video,
                        socket: e.socket,
                        start: e.start
                    }
                }, function(e) {
                    return {
                        setPlaying: function(t) {
                            e(F(t))
                        },
                        setCurrentTime: function(t) {
                            e(Y(t))
                        },
                        setVideoSources: function(t) {
                            e(U(t))
                        },
                        setQuality: function(t) {
                            e(q(t))
                        },
                        setSocket: function(t) {
                            e(function(e) {
                                return {
                                    type: rt,
                                    socket: e
                                }
                            }(t))
                        },
                        setLive: function(t, n) {
                            e(J(t, n))
                        }
                    }
                })(Object(f.b)(ct));
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            var st = n(38);
            var ut = n(27);
            var mt = Object(st.b)({
                    edit: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
                            case A:
                                return !e;
                            default:
                                return e
                        }
                    },
                    delay: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case M:
                                return e + z.DELAY_STEP;
                            case N:
                                return Math.max(0, e - z.DELAY_STEP);
                            case x:
                                return t.delay;
                            default:
                                return e
                        }
                    },
                    video: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                playing: !1,
                                current_time: 0,
                                sources: {},
                                quality: ""
                            },
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case L:
                                return Object(ut.a)({}, e, {
                                    current_time: t.current_time
                                });
                            case R:
                                return Object(ut.a)({}, e, {
                                    playing: t.playing
                                });
                            case H:
                                return Object(ut.a)({}, e, {
                                    sources: t.sources
                                });
                            case W:
                                return Object(ut.a)({}, e, {
                                    quality: t.quality
                                });
                            default:
                                return e
                        }
                    },
                    chat: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                position: "right"
                            },
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case C:
                                return Object(ut.a)({}, e, {
                                    position: t.position
                                });
                            default:
                                return e
                        }
                    },
                    socket: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case rt:
                                return t.socket;
                            default:
                                return e
                        }
                    },
                    sync: function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case ke:
                                return !e;
                            case Ce:
                                return t.sync;
                            default:
                                return e
                        }
                    },
                    start: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return (arguments.length > 1 ? arguments[1] : void 0).type === Ye || e
                    },
                    live: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                fullscreen: !1,
                                url: ""
                            },
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case G:
                                return Object(ut.a)({}, e, {
                                    fullscreen: t.fullscreen,
                                    url: t.url
                                });
                            default:
                                return e
                        }
                    }
                }),
                dt = Object(st.c)(mt);
            r.a.render(o.a.createElement(_.a, {
                store: dt
            }, o.a.createElement(lt, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function(e) {
                e.unregister()
            })
        },
        64: function(e, t, n) {
            e.exports = {
                background: "LiveModal_background__Wk5C4",
                modal: "LiveModal_modal__33gvM",
                buttons: "LiveModal_buttons__3US4o"
            }
        },
        67: function(e, t, n) {},
        80: function(e, t, n) {
            e.exports = {
                container: "Home_container__3aiy-",
                image: "Home_image__57ot8",
                button: "Home_button__9CqsU"
            }
        },
        82: function(e, t, n) {
            e.exports = {
                label: "Inputs_label__3fjZq",
                input_group: "Inputs_input_group__biLtB",
                input: "Inputs_input__MJ_PJ"
            }
        },
        83: function(e, t, n) {
            e.exports = {
                tooltip: "Tooltip_tooltip__3Yv-B",
                label: "Tooltip_label__g5qDY",
                hidden: "Tooltip_hidden__2sEe8"
            }
        },
        84: function(e, t, n) {
            e.exports = {
                container: "Player_container__QdDKp",
                player: "Player_player__3QCOC"
            }
        }
    },
    [
        [5348, 1, 2]
    ]
]);
//# sourceMappingURL=main.295502f6.chunk.js.map