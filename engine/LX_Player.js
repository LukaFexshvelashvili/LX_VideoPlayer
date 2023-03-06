const _0x540858 = _0x3c16;
(function (_0x424bb4, _0x66de3b) {
  const _0xd11cd = _0x3c16,
    _0x9369d1 = _0x424bb4();
  while (!![]) {
    try {
      const _0x4587a0 =
        -parseInt(_0xd11cd(0xb1)) / 0x1 +
        (parseInt(_0xd11cd(0xe4)) / 0x2) * (parseInt(_0xd11cd(0xc7)) / 0x3) +
        parseInt(_0xd11cd(0xc8)) / 0x4 +
        parseInt(_0xd11cd(0xe0)) / 0x5 +
        (parseInt(_0xd11cd(0xcd)) / 0x6) * (-parseInt(_0xd11cd(0xdf)) / 0x7) +
        (parseInt(_0xd11cd(0xea)) / 0x8) * (-parseInt(_0xd11cd(0xe8)) / 0x9) +
        parseInt(_0xd11cd(0xa2)) / 0xa;
      if (_0x4587a0 === _0x66de3b) break;
      else _0x9369d1["push"](_0x9369d1["shift"]());
    } catch (_0x9e3531) {
      _0x9369d1["push"](_0x9369d1["shift"]());
    }
  }
})(_0x57e5, 0x78b46);
let LX_setColor = document[_0x540858(0xaf)](_0x540858(0xbb)),
  LX_container = document["querySelector"](_0x540858(0xca)),
  LX_control = document[_0x540858(0xaf)](_0x540858(0xe9)),
  LX_video = document[_0x540858(0xdc)]("LX_video"),
  LX_mini_video = document[_0x540858(0xdc)](_0x540858(0xd5)),
  LX_controls_error = document["querySelector"](_0x540858(0xeb)),
  LX_play_pause_svg = document[_0x540858(0xdc)](_0x540858(0xb7)),
  LX_current_time = document[_0x540858(0xaf)](_0x540858(0xaa)),
  LX_full_time = document[_0x540858(0xaf)](_0x540858(0xef)),
  LX_thumbnail = document[_0x540858(0xaf)](_0x540858(0xc6)),
  LX_thumbnail_image = document[_0x540858(0xdc)](".LX_thumbnail_image"),
  LX_thumbnail_play = document["querySelector"](_0x540858(0xe3)),
  LX_control_play_adjuster_container = document[_0x540858(0xaf)](
    _0x540858(0xba)
  ),
  LX_control_play_adjuster = document[_0x540858(0xaf)](_0x540858(0xc5)),
  LX_control_play_adjust = document[_0x540858(0xaf)](_0x540858(0xb5)),
  LX_control_fullscreen = document["querySelector"](_0x540858(0xa6)),
  LX_control_fullscreen_svg = document[_0x540858(0xdc)](_0x540858(0xdb)),
  LX_control_play = document[_0x540858(0xaf)](_0x540858(0xfa)),
  LX_control_sound = document["querySelector"](_0x540858(0xc1)),
  LX_control_sound_icon = document[_0x540858(0xdc)](_0x540858(0xcf)),
  LX_contextmenu = document[_0x540858(0xaf)](".LX_contextmenu"),
  LX_timer = document[_0x540858(0xaf)](_0x540858(0xb4)),
  LX_timer_change = document["getElementById"](_0x540858(0xa8)),
  LX_slider = document[_0x540858(0xaf)](".LX_slider"),
  LX_slider_progress = document[_0x540858(0xaf)](_0x540858(0xe5)),
  LX_slider_progress_see = document[_0x540858(0xaf)](_0x540858(0xc2)),
  over_slider = 0x0,
  LX_VideoID = 0x1,
  LX_startF = 0x0;
LX_control_sound_icon["addEventListener"](_0x540858(0xf4), function () {
  const _0xcf76e7 = _0x540858;
  (LX_control_play_adjust["style"][_0xcf76e7(0xa1)] = _0xcf76e7(0xe1)),
    LX_control_play_adjust[_0xcf76e7(0xcb)]["opacity"] == 0x0
      ? setTimeout(() => {
          const _0x4faab4 = _0xcf76e7;
          LX_control_play_adjust[_0x4faab4(0xcb)]["opacity"] = 0x1;
        }, 0xa)
      : ((LX_control_play_adjust["style"]["opacity"] = 0x0),
        setTimeout(() => {
          const _0x14e85a = _0xcf76e7;
          LX_control_play_adjust[_0x14e85a(0xcb)][_0x14e85a(0xa1)] =
            _0x14e85a(0xa4);
        }, 0x64));
}),
  LX_control_fullscreen[_0x540858(0xcc)](_0x540858(0xf4), function () {
    const _0x3f6ad1 = _0x540858;
    document[_0x3f6ad1(0xa5)] == null
      ? (LX_container[_0x3f6ad1(0xf2)](),
        LX_control_fullscreen_svg["setAttribute"]("d", _0x3f6ad1(0xb2)))
      : (document[_0x3f6ad1(0xd8)](),
        LX_control_fullscreen_svg[_0x3f6ad1(0xd2)]("d", _0x3f6ad1(0xc3)));
  });
let j;
document[_0x540858(0xcc)](_0x540858(0xf4), function (_0x2fc5ec) {
  const _0x48a20c = _0x540858;
  _0x2fc5ec[_0x48a20c(0xf9)]["id"] !== _0x48a20c(0xe2) &&
    (LX_contextmenu[_0x48a20c(0xcb)][_0x48a20c(0xa1)] = _0x48a20c(0xa4));
});
function LX_Color(_0x579c16) {
  const _0x327256 = _0x540858;
  LX_setColor["style"][_0x327256(0xf5)]("--LX_Main_Color", _0x579c16);
}
function _0x3c16(_0x31a52a, _0x15e391) {
  const _0x57e5ca = _0x57e5();
  return (
    (_0x3c16 = function (_0x3c161d, _0x3c1e51) {
      _0x3c161d = _0x3c161d - 0xa1;
      let _0x2609ac = _0x57e5ca[_0x3c161d];
      return _0x2609ac;
    }),
    _0x3c16(_0x31a52a, _0x15e391)
  );
}
let videoLoad = 0x1;
LX_video[_0x540858(0xcc)](_0x540858(0xd0), function () {
  const _0x4b845e = _0x540858;
  (LX_controls_error[_0x4b845e(0xcb)][_0x4b845e(0xa1)] = _0x4b845e(0xe1)),
    (videoLoad = 0x0);
}),
  LX_video["addEventListener"]("loadeddata", function () {
    const _0x4f6175 = _0x540858;
    if (localStorage[_0x4f6175(0xc9)](_0x4f6175(0xb8)) !== null) {
      let _0x456586 = JSON[_0x4f6175(0xdd)](
          localStorage[_0x4f6175(0xc9)](_0x4f6175(0xb8))
        ),
        _0x36c764 = _0x456586[_0x4f6175(0xee)](
          (_0x3f1f72) => _0x3f1f72[_0x4f6175(0xd1)] == LX_VideoID
        );
      _0x36c764["length"] !== 0x0 &&
        (LX_video[_0x4f6175(0xbc)] = _0x36c764[0x0][_0x4f6175(0xb9)]);
    }
    setInterval(() => {
      const _0x2efc23 = _0x4f6175;
      if (_0x3f420f[_0x2efc23(0xa9)] !== ![]) {
        let _0x518574 = {
          LXID: LX_VideoID,
          duration: LX_video[_0x2efc23(0xbc)],
        };
        if (localStorage[_0x2efc23(0xc9)]("LX_TimeSaves") !== null) {
          let _0x58a1e1 = JSON[_0x2efc23(0xdd)](
              localStorage[_0x2efc23(0xc9)](_0x2efc23(0xb8))
            ),
            _0x1f8a12 = _0x58a1e1[_0x2efc23(0xee)](
              (_0x1d6b49) => _0x1d6b49[_0x2efc23(0xd1)] == LX_VideoID
            ),
            _0x2b0e38 = _0x58a1e1[_0x2efc23(0xd7)](
              (_0x4d05b0) => _0x4d05b0[_0x2efc23(0xd1)] == LX_VideoID
            );
          _0x1f8a12[_0x2efc23(0xd3)] !== 0x0
            ? ((_0x58a1e1[_0x2b0e38][_0x2efc23(0xb9)] = _0x518574["duration"]),
              localStorage[_0x2efc23(0xce)](
                _0x2efc23(0xb8),
                JSON["stringify"](_0x58a1e1)
              ))
            : (_0x58a1e1[_0x2efc23(0xbf)](_0x518574),
              localStorage[_0x2efc23(0xce)](
                _0x2efc23(0xb8),
                JSON[_0x2efc23(0xac)](_0x58a1e1)
              ));
        } else {
          let _0x3944ca = [{ LXID: 0x1, duration: LX_video[_0x2efc23(0xbc)] }];
          localStorage["setItem"](
            "LX_TimeSaves",
            JSON[_0x2efc23(0xac)](_0x3944ca)
          );
        }
      }
    }, 0x1388);
    let _0x3f420f = Math[_0x4f6175(0xab)](LX_video["duration"]),
      _0x4f0a1a = Math[_0x4f6175(0xab)](_0x3f420f % 0x3c),
      _0x363ed8 = Math[_0x4f6175(0xab)](_0x3f420f / 0x3c);
    (LX_full_time[_0x4f6175(0xd6)] = _0x363ed8 + ":" + _0x4f0a1a),
      LX_video[_0x4f6175(0xcc)](_0x4f6175(0xf0), function () {
        const _0x22cf17 = _0x4f6175;
        timerUpdate();
        if (over_slider == 0x0) {
          let _0x3a5c6b = LX_video["currentTime"];
          LX_slider_progress[_0x22cf17(0xcb)][_0x22cf17(0xf7)] =
            (_0x3a5c6b * 0x64) / _0x3f420f + "%";
        }
      });
  }),
  LX_control_play["addEventListener"](_0x540858(0xf4), playButton),
  LX_video[_0x540858(0xcc)](_0x540858(0xf4), playButton),
  LX_thumbnail_play[_0x540858(0xcc)](_0x540858(0xf4), playButton),
  LX_thumbnail_play[_0x540858(0xcc)](_0x540858(0xf4), startPlay, {
    once: !![],
  }),
  LX_thumbnail[_0x540858(0xcc)](_0x540858(0xf4), startPlay, { once: !![] });
let k, t;
LX_slider[_0x540858(0xcc)](_0x540858(0xc0), function () {
  const _0x54a057 = _0x540858;
  videoLoad == 0x1 &&
    ((LX_timer[_0x54a057(0xcb)][_0x54a057(0xa1)] = "flex"),
    (LX_timer[_0x54a057(0xcb)][_0x54a057(0xae)] = 0x1),
    clearTimeout(k),
    clearTimeout(t),
    (over_slider = 0x1));
}),
  LX_slider[_0x540858(0xcc)](_0x540858(0xe7), function () {
    const _0x57b4a7 = _0x540858;
    (k = setTimeout(() => {
      const _0x2b2d97 = _0x3c16;
      LX_timer[_0x2b2d97(0xcb)][_0x2b2d97(0xae)] = 0x0;
    }, 0x1f4)),
      (t = setTimeout(() => {
        const _0x18890c = _0x3c16;
        LX_timer[_0x18890c(0xcb)][_0x18890c(0xa1)] = "none";
      }, 0x320)),
      (over_slider = 0x0),
      timerUpdate(),
      (LX_slider_progress_see[_0x57b4a7(0xcb)][_0x57b4a7(0xf7)] =
        _0x57b4a7(0xf1));
  });
let mousedownget = 0x0;
LX_slider[_0x540858(0xcc)]("mousedown", function (_0x115c94) {
  const _0x5c94b0 = _0x540858;
  videoLoad == 0x1 &&
    ((LX_slider_progress[_0x5c94b0(0xcb)][_0x5c94b0(0xf7)] =
      _0x115c94[_0x5c94b0(0xbe)] + "px"),
    getTimer(_0x115c94),
    (mousedownget = 0x1),
    LX_slider[_0x5c94b0(0xcc)]("mousemove", function (_0x1707e2) {
      const _0x462bcd = _0x5c94b0;
      if (mousedownget == 0x1) {
        LX_video[_0x462bcd(0xbd)]();
        let _0x54a95f =
            (_0x1707e2[_0x462bcd(0xbe)] * 0x64) / LX_slider[_0x462bcd(0xa7)],
          _0x539970 = (LX_video[_0x462bcd(0xb9)] / 0x64) * _0x54a95f;
        (LX_video[_0x462bcd(0xbc)] = _0x539970),
          (LX_slider_progress[_0x462bcd(0xcb)][_0x462bcd(0xf7)] =
            _0x1707e2["offsetX"] + "px"),
          LX_slider[_0x462bcd(0xcc)](_0x462bcd(0xe7), function () {
            const _0x5abfe4 = _0x462bcd;
            mousedownget == 0x1 &&
              (LX_video["play"](),
              LX_play_pause_svg[_0x5abfe4(0xd2)]("d", _0x5abfe4(0xed))),
              (mousedownget = 0x0);
          });
      }
    }));
}),
  LX_slider[_0x540858(0xcc)]("mouseup", function (_0x5a5fa3) {
    const _0x3fe187 = _0x540858;
    videoLoad == 0x1 &&
      ((mousedownget = 0x0),
      LX_video[_0x3fe187(0xf3)](),
      LX_play_pause_svg[_0x3fe187(0xd2)]("d", _0x3fe187(0xed)),
      (LX_thumbnail_play[_0x3fe187(0xcb)][_0x3fe187(0xae)] = 0x0),
      (LX_thumbnail_play[_0x3fe187(0xcb)][_0x3fe187(0xec)] = _0x3fe187(0xf6)));
  });
let mousedowngetsound;
LX_control_play_adjuster_container[_0x540858(0xcc)](
  _0x540858(0xb6),
  function (_0x1a4c3f) {
    const _0x1ce2cf = _0x540858;
    (mousedowngetsound = 0x1),
      (LX_video[_0x1ce2cf(0xe6)] =
        ((LX_control_play_adjuster_container[_0x1ce2cf(0xf8)] -
          _0x1a4c3f["offsetY"]) *
          0x64) /
        LX_control_play_adjuster_container[_0x1ce2cf(0xf8)] /
        0x64),
      (LX_control_play_adjuster[_0x1ce2cf(0xcb)][_0x1ce2cf(0xde)] =
        LX_control_play_adjuster_container[_0x1ce2cf(0xf8)] -
        _0x1a4c3f[_0x1ce2cf(0xa3)] +
        "px"),
      LX_control_play_adjuster_container[_0x1ce2cf(0xcc)](
        _0x1ce2cf(0xd4),
        function (_0x5a4f67) {
          const _0x1fe2af = _0x1ce2cf;
          mousedowngetsound == 0x1 &&
            ((LX_video["volume"] =
              ((LX_control_play_adjuster_container[_0x1fe2af(0xf8)] -
                _0x5a4f67[_0x1fe2af(0xa3)]) *
                0x64) /
              LX_control_play_adjuster_container[_0x1fe2af(0xf8)] /
              0x64),
            LX_video[_0x1fe2af(0xe6)] < 0.05
              ? (LX_video[_0x1fe2af(0xe6)] = 0x0)
              : null,
            (LX_control_play_adjuster[_0x1fe2af(0xcb)]["height"] =
              LX_control_play_adjuster_container[_0x1fe2af(0xf8)] -
              _0x5a4f67[_0x1fe2af(0xa3)] +
              "px"),
            LX_control_play_adjuster_container[_0x1fe2af(0xcc)](
              "mouseleave",
              function () {
                mousedowngetsound = 0x0;
              }
            ));
        }
      );
  }
),
  LX_control_play_adjuster_container["addEventListener"](
    _0x540858(0xd9),
    function (_0x4d79c8) {
      mousedowngetsound = 0x0;
    }
  ),
  LX_slider[_0x540858(0xcc)](_0x540858(0xd4), function (_0xa71f91) {
    const _0x5cdd36 = _0x540858;
    if (videoLoad == 0x1) {
      (over_slider = 0x1),
        (LX_timer[_0x5cdd36(0xcb)][_0x5cdd36(0xad)] =
          _0xa71f91[_0x5cdd36(0xbe)] - LX_timer["clientWidth"] / 0x2),
        (LX_slider_progress_see[_0x5cdd36(0xcb)][_0x5cdd36(0xf7)] =
          _0xa71f91[_0x5cdd36(0xbe)] + "px"),
        getTimer(_0xa71f91);
      let _0x138dc5 =
          (_0xa71f91[_0x5cdd36(0xbe)] * 0x64) / LX_slider[_0x5cdd36(0xa7)],
        _0x1948ff = (LX_video[_0x5cdd36(0xb9)] / 0x64) * _0x138dc5;
      (LX_mini_video[_0x5cdd36(0xbc)] = _0x1948ff), LX_mini_video["play"]();
    }
  }),
  LX_slider[_0x540858(0xcc)](_0x540858(0xf4), function (_0x4b30f4) {
    const _0x551d67 = _0x540858;
    if (videoLoad == 0x1) {
      let _0x1b571c =
        (_0x4b30f4[_0x551d67(0xbe)] * 0x64) / LX_slider[_0x551d67(0xa7)];
      (LX_video[_0x551d67(0xbc)] =
        (LX_video[_0x551d67(0xb9)] / 0x64) * _0x1b571c),
        (LX_slider_progress["style"][_0x551d67(0xf7)] =
          _0x4b30f4[_0x551d67(0xbe)] + "px");
    }
  });
function _0x57e5() {
  const _0x26a151 = [
    "display",
    "7119630jmLhNH",
    "offsetY",
    "none",
    "fullscreenElement",
    ".LX_control_fullscreen",
    "clientWidth",
    "LX_timer_change",
    "paused",
    ".LX_current_time",
    "floor",
    "stringify",
    "left",
    "opacity",
    "querySelector",
    "pointer",
    "212811fKhRhJ",
    "M0,11\x20L3,11\x20L3,14\x20L5,14\x20L5,9\x20L0,9\x20L0,11\x20L0,11\x20Z\x20M3,3\x20L0,3\x20L0,5\x20L5,5\x20L5,0\x20L3,0\x20L3,3\x20L3,3\x20Z\x20M9,14\x20L11,14\x20L11,11\x20L14,11\x20L14,9\x20L9,9\x20L9,14\x20L9,14\x20Z\x20M11,3\x20L11,0\x20L9,0\x20L9,5\x20L14,5\x20L14,3\x20L11,3\x20L11,3\x20Z",
    "top",
    ".LX_timer",
    ".LX_control_play_adjust",
    "mousedown",
    "LX_play_pause_svg",
    "LX_TimeSaves",
    "duration",
    ".LX_control_play_adjuster_container",
    ":root",
    "currentTime",
    "pause",
    "offsetX",
    "unshift",
    "mouseenter",
    ".LX_control_sound",
    ".LX_slider_progress_see",
    "M2,9\x20L0,9\x20L0,14\x20L5,14\x20L5,12\x20L2,12\x20L2,9\x20L2,9\x20Z\x20M0,5\x20L2,5\x20L2,2\x20L5,2\x20L5,0\x20L0,0\x20L0,5\x20L0,5\x20Z\x20M12,12\x20L9,12\x20L9,14\x20L14,14\x20L14,9\x20L12,9\x20L12,12\x20L12,12\x20Z\x20M9,0\x20L9,2\x20L12,2\x20L12,5\x20L14,5\x20L14,0\x20L9,0\x20L9,0\x20Z",
    "M8.286\x203.407A1.5\x201.5\x200\x200\x200\x206\x204.684v14.632a1.5\x201.5\x200\x200\x200\x202.286\x201.277l11.888-7.316a1.5\x201.5\x200\x200\x200\x200-2.555L8.286\x203.407z",
    ".LX_control_play_adjuster",
    ".LX_thumbnail",
    "1245eqpzhq",
    "1468416LgOYSB",
    "getItem",
    ".LX_container",
    "style",
    "addEventListener",
    "78WgBWTx",
    "setItem",
    "LX_control_sound_icon",
    "error",
    "LXID",
    "setAttribute",
    "length",
    "mousemove",
    "LX_mini_video",
    "innerHTML",
    "findIndex",
    "exitFullscreen",
    "mouseup",
    "preventDefault",
    "LX_control_fullscreen_svg",
    "getElementById",
    "parse",
    "height",
    "443569xOMmtA",
    "3534600FoMCbn",
    "flex",
    "LX_contextmenu",
    ".LX_thumbnail_play",
    "46XZJhJc",
    ".LX_slider_progress",
    "volume",
    "mouseleave",
    "148806MPrBcx",
    ".LX_control",
    "128SxliNS",
    ".LX_controls_error",
    "cursor",
    "M5.163\x203.819C5\x204.139\x205\x204.559\x205\x205.4v13.2c0\x20.84\x200\x201.26.163\x201.581a1.5\x201.5\x200\x200\x200\x20.656.655c.32.164.74.164\x201.581.164h.2c.84\x200\x201.26\x200\x201.581-.163a1.5\x201.5\x200\x200\x200\x20.656-.656c.163-.32.163-.74.163-1.581V5.4c0-.84\x200-1.26-.163-1.581a1.5\x201.5\x200\x200\x200-.656-.656C8.861\x203\x208.441\x203\x207.6\x203h-.2c-.84\x200-1.26\x200-1.581.163a1.5\x201.5\x200\x200\x200-.656.656zm9\x200C14\x204.139\x2014\x204.559\x2014\x205.4v13.2c0\x20.84\x200\x201.26.164\x201.581a1.5\x201.5\x200\x200\x200\x20.655.655c.32.164.74.164\x201.581.164h.2c.84\x200\x201.26\x200\x201.581-.163a1.5\x201.5\x200\x200\x200\x20.655-.656c.164-.32.164-.74.164-1.581V5.4c0-.84\x200-1.26-.163-1.581a1.5\x201.5\x200\x200\x200-.656-.656C17.861\x203\x2017.441\x203\x2016.6\x203h-.2c-.84\x200-1.26\x200-1.581.163a1.5\x201.5\x200\x200\x200-.655.656z",
    "filter",
    ".LX_full_time",
    "timeupdate",
    "0px",
    "requestFullscreen",
    "play",
    "click",
    "setProperty",
    "default",
    "width",
    "clientHeight",
    "target",
    ".LX_control_play",
  ];
  _0x57e5 = function () {
    return _0x26a151;
  };
  return _0x57e5();
}
function timerUpdate() {
  const _0x2d39ce = _0x540858;
  let _0x4e9ff8 = LX_video["currentTime"],
    _0x99a17a =
      Math["floor"](_0x4e9ff8 % 0x3c) < 0xa
        ? "0" + Math["floor"](_0x4e9ff8 % 0x3c)
        : Math[_0x2d39ce(0xab)](_0x4e9ff8 % 0x3c),
    _0x413217 =
      Math["floor"](_0x4e9ff8 / 0x3c) < 0xa
        ? "0" + Math[_0x2d39ce(0xab)](_0x4e9ff8 / 0x3c)
        : Math[_0x2d39ce(0xab)](_0x4e9ff8 / 0x3c);
  LX_current_time[_0x2d39ce(0xd6)] = _0x413217 + ":" + _0x99a17a;
}
LX_container[_0x540858(0xcc)]("contextmenu", function (_0x1d3031) {
  const _0x261e69 = _0x540858;
  _0x1d3031[_0x261e69(0xda)](),
    (LX_contextmenu[_0x261e69(0xcb)][_0x261e69(0xa1)] = _0x261e69(0xe1)),
    (LX_container[_0x261e69(0xcb)][_0x261e69(0xec)] = "default"),
    (LX_contextmenu[_0x261e69(0xcb)]["left"] = _0x1d3031[_0x261e69(0xbe)]),
    (LX_contextmenu[_0x261e69(0xcb)][_0x261e69(0xb3)] =
      _0x1d3031[_0x261e69(0xa3)]);
}),
  LX_container[_0x540858(0xcc)](_0x540858(0xd4), function () {
    videoLoad == 0x1 &&
      (getHideControls(), clearTimeout(j), (j = setTimeout(() => {}, 0x3e8)));
  });
function startPlay() {
  const _0x46d21c = _0x540858;
  LX_startF == 0x0 &&
    ((LX_thumbnail[_0x46d21c(0xcb)][_0x46d21c(0xae)] = 0x0),
    (LX_thumbnail[_0x46d21c(0xcb)][_0x46d21c(0xec)] = _0x46d21c(0xf6)),
    (LX_thumbnail_play[_0x46d21c(0xcb)][_0x46d21c(0xae)] = 0x0),
    (LX_thumbnail_play[_0x46d21c(0xcb)][_0x46d21c(0xec)] = _0x46d21c(0xf6)),
    setTimeout(() => {
      const _0x2a300f = _0x46d21c;
      LX_video[_0x2a300f(0xf3)](),
        LX_play_pause_svg["setAttribute"]("d", _0x2a300f(0xed)),
        (LX_thumbnail["style"][_0x2a300f(0xa1)] = _0x2a300f(0xa4));
    }, 0xc8)),
    (LX_startF = 0x1);
}
function playButton() {
  const _0x2c8851 = _0x540858;
  (LX_container[_0x2c8851(0xcb)][_0x2c8851(0xec)] = _0x2c8851(0xf6)),
    (LX_control[_0x2c8851(0xcb)][_0x2c8851(0xa1)] = "flex"),
    setTimeout(() => {
      const _0x419a49 = _0x2c8851;
      LX_control["style"][_0x419a49(0xae)] = 0x1;
    }, 0xa),
    LX_video[_0x2c8851(0xa9)]
      ? ((LX_thumbnail_play[_0x2c8851(0xcb)][_0x2c8851(0xae)] = 0x0),
        (LX_thumbnail_play[_0x2c8851(0xcb)][_0x2c8851(0xec)] = _0x2c8851(0xf6)),
        LX_video[_0x2c8851(0xf3)](),
        LX_play_pause_svg["setAttribute"]("d", _0x2c8851(0xed)))
      : (LX_video[_0x2c8851(0xbd)](),
        (LX_thumbnail_play["style"][_0x2c8851(0xec)] = _0x2c8851(0xb0)),
        (LX_thumbnail_play["style"][_0x2c8851(0xae)] = 0x1),
        LX_play_pause_svg[_0x2c8851(0xd2)]("d", _0x2c8851(0xc4)));
}
function getTimer(_0x31ec12) {
  const _0xfef29a = _0x540858;
  let _0x4edc8e = (_0x31ec12["offsetX"] * 0x64) / LX_slider[_0xfef29a(0xa7)],
    _0x47ce5f = (LX_video[_0xfef29a(0xb9)] / 0x64) * _0x4edc8e,
    _0x5ca19c =
      Math["floor"](_0x47ce5f % 0x3c) < 0xa
        ? "0" + Math[_0xfef29a(0xab)](_0x47ce5f % 0x3c)
        : Math[_0xfef29a(0xab)](_0x47ce5f % 0x3c),
    _0x3da3b2 =
      Math[_0xfef29a(0xab)](_0x47ce5f / 0x3c) < 0xa
        ? "0" + Math[_0xfef29a(0xab)](_0x47ce5f / 0x3c)
        : Math[_0xfef29a(0xab)](_0x47ce5f / 0x3c);
  LX_timer_change[_0xfef29a(0xd6)] = _0x3da3b2 + ":" + _0x5ca19c;
}
let mt;
function getHideControls() {
  const _0x1d829b = _0x540858;
  !LX_video[_0x1d829b(0xa9)] &&
    mousedownget == 0x0 &&
    (clearTimeout(mt),
    over_slider == 0x0 &&
      (mt = setTimeout(() => {
        const _0x2b9bc3 = _0x1d829b;
        (LX_control_play_adjust[_0x2b9bc3(0xcb)][_0x2b9bc3(0xa1)] = "none"),
          (LX_control_play_adjust[_0x2b9bc3(0xcb)]["opacity"] = 0x0),
          (LX_contextmenu[_0x2b9bc3(0xcb)][_0x2b9bc3(0xa1)] = "none"),
          (LX_control[_0x2b9bc3(0xcb)]["opacity"] = 0x0),
          setTimeout(() => {
            const _0x447b41 = _0x2b9bc3;
            LX_control[_0x447b41(0xcb)][_0x447b41(0xa1)] = _0x447b41(0xa4);
          }, 0x64),
          (LX_container[_0x2b9bc3(0xcb)]["cursor"] = _0x2b9bc3(0xa4));
      }, 0x5dc))),
    (LX_container[_0x1d829b(0xcb)]["cursor"] = _0x1d829b(0xf6)),
    (LX_control[_0x1d829b(0xcb)][_0x1d829b(0xa1)] = _0x1d829b(0xe1)),
    setTimeout(() => {
      const _0x1ec673 = _0x1d829b;
      LX_control[_0x1ec673(0xcb)][_0x1ec673(0xae)] = 0x1;
    }, 0xa);
}
