let LX_Player = {
  name: "LX Player",
  version: 2.2,
};
let LX_setColor = document.querySelector(":root");
let LX_container = document.querySelector(".LX_container");

let LX_control = document.querySelector(".LX_control");

let LX_video = document.getElementById("LX_video");
let LX_mini_video = document.getElementById("LX_mini_video");
let LX_controls_error = document.querySelector(".LX_controls_error");

let LX_play_pause_svg = document.getElementById("LX_play_pause_svg");

let LX_current_time = document.querySelector(".LX_current_time");
let LX_full_time = document.querySelector(".LX_full_time");

let LX_thumbnail = document.querySelector(".LX_thumbnail");
let LX_thumbnail_image = document.getElementById(".LX_thumbnail_image");
let LX_thumbnail_play = document.querySelector(".LX_thumbnail_play");

let LX_control_play_adjuster_container = document.querySelector(
  ".LX_control_play_adjuster_container"
);
let LX_control_play_adjuster = document.querySelector(
  ".LX_control_play_adjuster"
);
let LX_control_play_adjust = document.querySelector(".LX_control_play_adjust");
let LX_control_fullscreen = document.querySelector(".LX_control_fullscreen");
let LX_control_fullscreen_svg = document.querySelector(
  ".LX_control_fullscreen_svg"
);
let getN = LX_Player.name + " v" + LX_Player.version;

let LX_control_play = document.querySelector(".LX_control_play");
let LX_control_sound = document.querySelector(".LX_control_sound");
let LX_control_sound_icon = document.getElementById("LX_control_sound_icon");

let LX_contextmenu = document.querySelector(".LX_contextmenu");

let LX_timer = document.querySelector(".LX_timer");
let LX_timer_change = document.getElementById("LX_timer_change");

let LX_contextmenu_option = document.querySelector(".LX_contextmenu_option");

let LX_slider = document.querySelector(".LX_slider");
let LX_slider_progress = document.querySelector(".LX_slider_progress");
let LX_slider_progress_see = document.querySelector(".LX_slider_progress_see");

let over_slider = 0;
let LX_VideoID = 1;
let LX_startF = 0;
if (LX_contextmenu_option.innerHTML.trim() == getN.trim()) {
  let G_p = 1;
  let mt;

  LX_control_sound_icon.addEventListener("click", function () {
    getHideControlsForce();

    LX_control_play_adjust.style.display = "flex";
    if (LX_control_play_adjust.style.opacity == 0) {
      setTimeout(() => {
        LX_control_play_adjust.style.opacity = 1;
      }, 10);
    } else {
      LX_control_play_adjust.style.opacity = 0;

      setTimeout(() => {
        LX_control_play_adjust.style.display = "none";
      }, 100);
    }
  });

  LX_control_fullscreen.addEventListener("click", function () {
    if (document.fullscreenElement == null) {
      LX_container.requestFullscreen();
      LX_control_fullscreen_svg.setAttribute(
        "d",
        "M0,11 L3,11 L3,14 L5,14 L5,9 L0,9 L0,11 L0,11 Z M3,3 L0,3 L0,5 L5,5 L5,0 L3,0 L3,3 L3,3 Z M9,14 L11,14 L11,11 L14,11 L14,9 L9,9 L9,14 L9,14 Z M11,3 L11,0 L9,0 L9,5 L14,5 L14,3 L11,3 L11,3 Z"
      );
    } else {
      document.exitFullscreen();
      LX_control_fullscreen_svg.setAttribute(
        "d",
        "M2,9 L0,9 L0,14 L5,14 L5,12 L2,12 L2,9 L2,9 Z M0,5 L2,5 L2,2 L5,2 L5,0 L0,0 L0,5 L0,5 Z M12,12 L9,12 L9,14 L14,14 L14,9 L12,9 L12,12 L12,12 Z M9,0 L9,2 L12,2 L12,5 L14,5 L14,0 L9,0 L9,0 Z"
      );
    }
  });

  let j;

  document.addEventListener("click", function (e) {
    if (e.target.id !== "LX_contextmenu") {
      LX_contextmenu.style.display = "none";
    }
  });

  function LX_Color(color) {
    LX_setColor.style.setProperty("--LX_Main_Color", color);
  }
  // WHEN VIDEO LOADS
  let videoLoad = 1;
  LX_video.addEventListener("error", function () {
    LX_controls_error.style.display = "flex";
    videoLoad = 0;
  });

  LX_video.addEventListener("loadeddata", function () {
    if (localStorage.getItem("LX_TimeSaves") !== null) {
      let getTimes = JSON.parse(localStorage.getItem("LX_TimeSaves"));
      let getTime = getTimes.filter((x) => x.LXID == LX_VideoID);
      if (getTime.length !== 0) {
        LX_video.currentTime = getTime[0].duration;
      }
    }
    setInterval(() => {
      if (videoFullTime.paused !== false) {
        let saveWatch = { LXID: LX_VideoID, duration: LX_video.currentTime };

        if (localStorage.getItem("LX_TimeSaves") !== null) {
          let getTimes = JSON.parse(localStorage.getItem("LX_TimeSaves"));
          let getTime = getTimes.filter((x) => x.LXID == LX_VideoID);
          let getIndex = getTimes.findIndex((x) => x.LXID == LX_VideoID);
          if (getTime.length !== 0) {
            getTimes[getIndex].duration = saveWatch.duration;
            localStorage.setItem("LX_TimeSaves", JSON.stringify(getTimes));
          } else {
            getTimes.unshift(saveWatch);
            localStorage.setItem("LX_TimeSaves", JSON.stringify(getTimes));
          }
        } else {
          let saveWatch = [{ LXID: 1, duration: LX_video.currentTime }];

          localStorage.setItem("LX_TimeSaves", JSON.stringify(saveWatch));
        }
      }
    }, 5000);
    let videoFullTime = Math.floor(LX_video.duration);
    let videoSeconds = Math.floor(videoFullTime % 60);
    let videoMinutes = Math.floor(videoFullTime / 60);
    LX_full_time.innerHTML = videoMinutes + ":" + videoSeconds;

    LX_video.addEventListener("timeupdate", function () {
      timerUpdate();
      if (over_slider == 0) {
        let videoCurrentTime = LX_video.currentTime;
        LX_slider_progress.style.width =
          (videoCurrentTime * 100) / videoFullTime + "%";
      }
    });
  });
  LX_control_play.addEventListener("click", playButton);
  LX_video.addEventListener("click", playButton);
  LX_thumbnail_play.addEventListener("click", playButton);
  LX_thumbnail_play.addEventListener("click", startPlay, { once: true });
  LX_thumbnail.addEventListener("click", startPlay, { once: true });
  let k;
  let t;
  LX_slider.addEventListener("mouseenter", function () {
    if (videoLoad == 1) {
      LX_timer.style.display = "flex";
      LX_timer.style.opacity = 1;
      clearTimeout(k);
      clearTimeout(t);
      over_slider = 1;
    }
  });
  LX_slider.addEventListener("mouseleave", function () {
    k = setTimeout(() => {
      LX_timer.style.opacity = 0;
    }, 500);
    t = setTimeout(() => {
      LX_timer.style.display = "none";
    }, 800);
    over_slider = 0;
    timerUpdate();
    LX_slider_progress_see.style.width = "0px";
  });
  let mousedownget = 0;
  LX_slider.addEventListener("mousedown", function (e) {
    if (videoLoad == 1) {
      LX_slider_progress.style.width = e.offsetX + "px";
      getTimer(e);
      mousedownget = 1;
      LX_slider.addEventListener("mousemove", function (r) {
        if (mousedownget == 1) {
          LX_video.pause();
          let getpr = (r.offsetX * 100) / LX_slider.clientWidth;
          let getTime = (LX_video.duration / 100) * getpr;
          LX_video.currentTime = getTime;
          LX_slider_progress.style.width = r.offsetX + "px";
          LX_slider.addEventListener("mouseleave", function () {
            if (mousedownget == 1) {
              LX_video.play();
              LX_play_pause_svg.setAttribute(
                "d",
                "M5.163 3.819C5 4.139 5 4.559 5 5.4v13.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C8.861 3 8.441 3 7.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zm9 0C14 4.139 14 4.559 14 5.4v13.2c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C17.861 3 17.441 3 16.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.655.656z"
              );
            }
            mousedownget = 0;
          });
        }
      });
    }
  });

  LX_slider.addEventListener("mouseup", function (e) {
    if (videoLoad == 1) {
      mousedownget = 0;
      LX_video.play();
      LX_play_pause_svg.setAttribute(
        "d",
        "M5.163 3.819C5 4.139 5 4.559 5 5.4v13.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C8.861 3 8.441 3 7.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zm9 0C14 4.139 14 4.559 14 5.4v13.2c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C17.861 3 17.441 3 16.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.655.656z"
      );
      LX_thumbnail_play.style.opacity = 0;
      LX_thumbnail_play.style.cursor = "default";
    }
  });

  //  SOUND ADJUSTER
  let mousedowngetsound;

  LX_control_play_adjuster_container.addEventListener(
    "mousedown",
    function (e) {
      mousedowngetsound = 1;

      LX_video.volume =
        ((LX_control_play_adjuster_container.clientHeight - e.offsetY) * 100) /
        LX_control_play_adjuster_container.clientHeight /
        100;
      LX_control_play_adjuster.style.height =
        LX_control_play_adjuster_container.clientHeight - e.offsetY + "px";
      LX_control_play_adjuster_container.addEventListener(
        "mousemove",
        function (r) {
          if (mousedowngetsound == 1) {
            LX_video.volume =
              ((LX_control_play_adjuster_container.clientHeight - r.offsetY) *
                100) /
              LX_control_play_adjuster_container.clientHeight /
              100;
            LX_video.volume < 0.05 ? (LX_video.volume = 0) : null;
            LX_control_play_adjuster.style.height =
              LX_control_play_adjuster_container.clientHeight -
              r.offsetY +
              "px";
            LX_control_play_adjuster_container.addEventListener(
              "mouseleave",
              function () {
                mousedowngetsound = 0;
              }
            );
          }
        }
      );
    }
  );
  LX_control_play_adjuster_container.addEventListener("mouseup", function (e) {
    mousedowngetsound = 0;
  });

  LX_slider.addEventListener("mousemove", function (e) {
    if (G_p === 1) {
      if (videoLoad == 1) {
        over_slider = 1;

        LX_timer.style.left = e.offsetX - LX_timer.clientWidth / 2;
        LX_slider_progress_see.style.width = e.offsetX + "px";
        getTimer(e);
        let getpr = (e.offsetX * 100) / LX_slider.clientWidth;
        let getTime = (LX_video.duration / 100) * getpr;
        LX_mini_video.currentTime = getTime;
        LX_mini_video.play();
      }
    }
  });
  LX_slider.addEventListener("click", function (e) {
    if (videoLoad == 1) {
      let getClickPercentage = (e.offsetX * 100) / LX_slider.clientWidth;
      LX_video.currentTime = (LX_video.duration / 100) * getClickPercentage;
      LX_slider_progress.style.width = e.offsetX + "px";
    }
  });
  function timerUpdate() {
    let videoCurrentTime = LX_video.currentTime;

    let videoCurrentSeconds =
      Math.floor(videoCurrentTime % 60) < 10
        ? "0" + Math.floor(videoCurrentTime % 60)
        : Math.floor(videoCurrentTime % 60);
    let videoCurrentMinutes =
      Math.floor(videoCurrentTime / 60) < 10
        ? "0" + Math.floor(videoCurrentTime / 60)
        : Math.floor(videoCurrentTime / 60);

    LX_current_time.innerHTML = videoCurrentMinutes + ":" + videoCurrentSeconds;
  }
  LX_container.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    LX_contextmenu.style.display = "flex";
    LX_container.style.cursor = "default";
    LX_contextmenu.style.left = e.offsetX;
    LX_contextmenu.style.top = e.offsetY;
  });

  LX_container.addEventListener("mousemove", function () {
    if (videoLoad == 1) {
      getHideControls();
    }
  });
  function startPlay() {
    if (G_p === 1) {
      if (LX_startF == 0) {
        LX_thumbnail.style.opacity = 0;
        LX_thumbnail.style.cursor = "default";
        LX_thumbnail_play.style.opacity = 0;
        LX_thumbnail_play.style.cursor = "default";
        setTimeout(() => {
          LX_video.play();
          LX_play_pause_svg.setAttribute(
            "d",
            "M5.163 3.819C5 4.139 5 4.559 5 5.4v13.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C8.861 3 8.441 3 7.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zm9 0C14 4.139 14 4.559 14 5.4v13.2c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C17.861 3 17.441 3 16.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.655.656z"
          );
          LX_thumbnail.style.display = "none";
        }, 200);
      }
      LX_startF = 1;
    }
  }
  function playButton() {
    if (G_p === 1) {
      LX_container.style.cursor = "default";
      LX_control.style.display = "flex";

      setTimeout(() => {
        LX_control.style.opacity = 1;
      }, 10);
      if (LX_video.paused) {
        LX_thumbnail_play.style.opacity = 0;
        LX_thumbnail_play.style.cursor = "default";

        LX_video.play();
        LX_play_pause_svg.setAttribute(
          "d",
          "M5.163 3.819C5 4.139 5 4.559 5 5.4v13.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C8.861 3 8.441 3 7.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zm9 0C14 4.139 14 4.559 14 5.4v13.2c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C17.861 3 17.441 3 16.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.655.656z"
        );
      } else {
        LX_video.pause();
        LX_thumbnail_play.style.cursor = "pointer";
        LX_thumbnail_play.style.opacity = 1;
        LX_play_pause_svg.setAttribute(
          "d",
          "M8.286 3.407A1.5 1.5 0 0 0 6 4.684v14.632a1.5 1.5 0 0 0 2.286 1.277l11.888-7.316a1.5 1.5 0 0 0 0-2.555L8.286 3.407z"
        );
      }
    }
  }

  function getTimer(e) {
    if (G_p === 1) {
      let getpr = (e.offsetX * 100) / LX_slider.clientWidth;
      let getTime = (LX_video.duration / 100) * getpr;
      let videoCurrentSeconds =
        Math.floor(getTime % 60) < 10
          ? "0" + Math.floor(getTime % 60)
          : Math.floor(getTime % 60);
      let videoCurrentMinutes =
        Math.floor(getTime / 60) < 10
          ? "0" + Math.floor(getTime / 60)
          : Math.floor(getTime / 60);
      LX_timer_change.innerHTML =
        videoCurrentMinutes + ":" + videoCurrentSeconds;
    }
  }
  function getTimerM(e) {
    if (G_p === 1) {
      let getpr = (e * 100) / LX_slider.clientWidth;
      let getTime = (LX_video.duration / 100) * getpr;
      let videoCurrentSeconds =
        Math.floor(getTime % 60) < 10
          ? "0" + Math.floor(getTime % 60)
          : Math.floor(getTime % 60);
      let videoCurrentMinutes =
        Math.floor(getTime / 60) < 10
          ? "0" + Math.floor(getTime / 60)
          : Math.floor(getTime / 60);
      LX_timer_change.innerHTML =
        videoCurrentMinutes + ":" + videoCurrentSeconds;
    }
  }
  function getHideControlsForce() {
    clearTimeout(mt);
    mt = setTimeout(() => {
      LX_mini_video.pause();

      LX_control_play_adjust.style.display = "none";
      LX_control_play_adjust.style.opacity = 0;
      LX_contextmenu.style.display = "none";

      LX_control.style.opacity = 0;
      setTimeout(() => {
        LX_control.style.display = "none";
      }, 100);
      LX_container.style.cursor = "none";
    }, 2000);
    LX_container.style.cursor = "default";
    LX_control.style.display = "flex";

    setTimeout(() => {
      LX_control.style.opacity = 1;
    }, 10);
  }
  function getHideControls() {
    if (G_p === 1) {
      if (!LX_video.paused && mousedownget == 0) {
        clearTimeout(mt);
        if (over_slider == 0) {
          mt = setTimeout(() => {
            LX_mini_video.pause();

            LX_control_play_adjust.style.display = "none";
            LX_control_play_adjust.style.opacity = 0;
            LX_contextmenu.style.display = "none";

            LX_control.style.opacity = 0;
            setTimeout(() => {
              LX_control.style.display = "none";
            }, 100);
            LX_container.style.cursor = "none";
          }, 1500);
        }
      }
      LX_container.style.cursor = "default";
      LX_control.style.display = "flex";

      setTimeout(() => {
        LX_control.style.opacity = 1;
      }, 10);
    }
  }

  //  MOBILE

  LX_control_play_adjuster_container.addEventListener(
    "touchstart",
    function (e) {
      var rect = e.target.getBoundingClientRect();
      var touchY = e.targetTouches[0].pageY - rect.top;
      mousedowngetsound = 1;

      LX_video.volume =
        ((LX_control_play_adjuster_container.clientHeight - touchY) * 100) /
        LX_control_play_adjuster_container.clientHeight /
        100;
      LX_control_play_adjuster.style.height =
        LX_control_play_adjuster_container.clientHeight - touchY + "px";
      LX_control_play_adjuster_container.addEventListener(
        "touchmove",
        function (r) {
          var rect = r.target.getBoundingClientRect();
          var touchY = r.targetTouches[0].pageY - rect.top;
          if (mousedowngetsound == 1) {
            var getV =
              ((LX_control_play_adjuster_container.clientHeight - touchY) *
                100) /
              LX_control_play_adjuster_container.clientHeight /
              100;
            if (getV >= 0 && getV <= 1) {
              LX_video.volume = getV;
              LX_video.volume < 0.05 ? (LX_video.volume = 0) : null;
              LX_control_play_adjuster.style.height =
                LX_control_play_adjuster_container.clientHeight - touchY + "px";
            }
            LX_control_play_adjuster_container.addEventListener(
              "touchend",
              function () {
                mousedowngetsound = 0;
              }
            );
          }
        }
      );
    }
  );
  let sliderW = LX_slider.clientWidth;
  LX_slider.addEventListener("touchmove", function (e) {
    var rect = e.target.getBoundingClientRect();
    var touchX = e.targetTouches[0].pageX - rect.left;

    if (G_p === 1) {
      if (videoLoad == 1) {
        over_slider = 1;

        LX_timer.style.left = touchX - LX_timer.clientWidth / 2;
        LX_slider_progress_see.style.width = touchX + "px";
        getTimerM(touchX);
        let getpr = (touchX * 100) / sliderW;
        let getTime = (LX_video.duration / 100) * getpr;
        LX_mini_video.currentTime = getTime.toFixed(6);
        LX_slider.addEventListener("touchend", function (e) {
          LX_mini_video.play();
        });
      }
    }
  });
  LX_slider.addEventListener("touchstart", function () {
    if (videoLoad == 1) {
      LX_timer.style.display = "flex";
      LX_timer.style.opacity = 1;
      clearTimeout(k);
      clearTimeout(t);
      over_slider = 1;
    }
  });

  LX_slider.addEventListener("touchstart", function (e) {
    if (videoLoad == 1) {
      var rect = e.target.getBoundingClientRect();
      var touchX = e.targetTouches[0].pageX - rect.left;
      LX_slider_progress.style.width = touchX + "px";
      getTimerM(touchX);
      mousedownget = 1;
      LX_slider.addEventListener("touchmove", function (r) {
        var rect = r.target.getBoundingClientRect();
        var touchX = r.targetTouches[0].pageX - rect.left;
        if (mousedownget == 1) {
          LX_video.pause();

          LX_slider_progress.style.width = touchX + "px";
          LX_slider.addEventListener("touchend", function () {
            if (mousedownget == 1) {
              LX_video.play();
              LX_play_pause_svg.setAttribute(
                "d",
                "M5.163 3.819C5 4.139 5 4.559 5 5.4v13.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C8.861 3 8.441 3 7.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zm9 0C14 4.139 14 4.559 14 5.4v13.2c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C17.861 3 17.441 3 16.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.655.656z"
              );
            }
            let getpr = (touchX * 100) / LX_slider.clientWidth;
            let getTime = (LX_video.duration / 100) * getpr;
            LX_video.currentTime = getTime.toFixed(5);
            mousedownget = 0;
            over_slider = 0;
            getHideControls();
          });
        }
      });
    }
  });
  LX_container.addEventListener("touchend", function () {
    if (videoLoad == 1) {
      mousedownget = 0;
      over_slider = 0;
      getHideControls();
    }
  });
  LX_container.addEventListener("touchmove", function () {
    if (videoLoad == 1) {
      getHideControls();
    }
  });
}
