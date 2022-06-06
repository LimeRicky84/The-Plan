var dateEl = document.getElementById("todaysDate");
var monthEl = document.getElementById("month");
var prevMonthEl = document.getElementById("previousMonth");
var nextMonthEl = document.getElementById("nextMonth");

if (monthEl) {


  var calbox1 = document.getElementById('clbx01');
  var calbox2 = document.getElementById('clbx02');
  var calbox3 = document.getElementById('clbx03');
  var calbox4 = document.getElementById('clbx04');
  var calbox5 = document.getElementById('clbx05');
  var calbox6 = document.getElementById('clbx06');
  var calbox7 = document.getElementById('clbx07');
  var calbox8 = document.getElementById('clbx08');
  var calbox9 = document.getElementById('clbx09');
  var calbox10 = document.getElementById('clbx10');
  var calbox11 = document.getElementById('clbx11');
  var calbox12 = document.getElementById('clbx12');
  var calbox13 = document.getElementById('clbx13');
  var calbox14 = document.getElementById('clbx14');
  var calbox15 = document.getElementById('clbx15');
  var calbox16 = document.getElementById('clbx16');
  var calbox17 = document.getElementById('clbx17');
  var calbox18 = document.getElementById('clbx18');
  var calbox19 = document.getElementById('clbx19');
  var calbox20 = document.getElementById('clbx20');
  var calbox21 = document.getElementById('clbx21');
  var calbox22 = document.getElementById('clbx22');
  var calbox23 = document.getElementById('clbx23');
  var calbox24 = document.getElementById('clbx24');
  var calbox25 = document.getElementById('clbx25');
  var calbox26 = document.getElementById('clbx26');
  var calbox27 = document.getElementById('clbx27');
  var calbox28 = document.getElementById('clbx28');
  var calbox29 = document.getElementById('clbx29');
  var calbox30 = document.getElementById('clbx30');
  var calbox31 = document.getElementById('clbx31');
  var calbox32 = document.getElementById('clbx32');
  var calbox33 = document.getElementById('clbx33');
  var calbox34 = document.getElementById('clbx34');
  var calbox35 = document.getElementById('clbx35');
  var calbox36 = document.getElementById('clbx36');
  var calbox37 = document.getElementById('clbx37');
  var monthValue = 1;
  var calendarStart = moment("06.01.2022");
  var calendarFirstDay = moment("06.01.2022");


  /* set calendar month*/
  var calendarMonth = moment().format('MMMM');
  monthEl.textContent = calendarMonth
  function setDay() {
    var startDay1 = moment("06.01.2022").format('dddd')
    if (startDay1 === "Sunday") {
      calbox1.textContent = 1
    } else if (startDay1 === "Monday") {
      calbox2.textContent = 1
    } else if (startDay1 === "Tuesday") {
      calbox3.textContent = 1
    } else if (startDay1 === "Wednesday") {
      calbox4.textContent = 1
    } else if (startDay1 === "Thursday") {
      calbox5.textContent = 1
    } else if (startDay1 === "Friday") {
      calbox6.textContent = 1
    } else if (startDay1 === "Saturday") {
      calbox7.textContent = 1
    }

  }

  setDay();

  x = " "

  function sundayStart() {

    calbox1.textContent = 1
    calbox2.textContent = 2
    calbox3.textContent = 3
    calbox4.textContent = 4
    calbox5.textContent = 5
    calbox6.textContent = 6
    calbox7.textContent = 7
    calbox8.textContent = 8
    calbox9.textContent = 9
    calbox10.textContent = 10
    calbox11.textContent = 11
    calbox12.textContent = 12
    calbox13.textContent = 13
    calbox14.textContent = 14
    calbox15.textContent = 15
    calbox16.textContent = 16
    calbox17.textContent = 17
    calbox18.textContent = 18
    calbox19.textContent = 19
    calbox20.textContent = 20
    calbox21.textContent = 21
    calbox22.textContent = 22
    calbox23.textContent = 23
    calbox24.textContent = 24
    calbox25.textContent = 25
    calbox26.textContent = 26
    calbox27.textContent = 27
    calbox28.textContent = 28
    calbox29.textContent = 29
    calbox30.textContent = 30
    calbox31.textContent = 31
    calbox32.textContent = x
    calbox33.textContent = x
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }

  function mondayStart() {
    calbox1.textContent = x
    calbox2.textContent = 1
    calbox3.textContent = 2
    calbox4.textContent = 3
    calbox5.textContent = 4
    calbox6.textContent = 5
    calbox7.textContent = 6
    calbox8.textContent = 7
    calbox9.textContent = 8
    calbox10.textContent = 9
    calbox11.textContent = 10
    calbox12.textContent = 11
    calbox13.textContent = 12
    calbox14.textContent = 13
    calbox15.textContent = 14
    calbox16.textContent = 15
    calbox17.textContent = 16
    calbox18.textContent = 17
    calbox19.textContent = 18
    calbox20.textContent = 19
    calbox21.textContent = 20
    calbox22.textContent = 21
    calbox23.textContent = 22
    calbox24.textContent = 23
    calbox25.textContent = 24
    calbox26.textContent = 25
    calbox27.textContent = 26
    calbox28.textContent = 27
    calbox29.textContent = 28
    calbox30.textContent = 29
    calbox31.textContent = 30
    calbox32.textContent = 31
    calbox33.textContent = x
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }

  function tuesdayStart() {
    calbox1.textContent = x
    calbox2.textContent = x
    calbox3.textContent = 1
    calbox4.textContent = 2
    calbox5.textContent = 3
    calbox6.textContent = 4
    calbox7.textContent = 5
    calbox8.textContent = 6
    calbox9.textContent = 7
    calbox10.textContent = 8
    calbox11.textContent = 9
    calbox12.textContent = 10
    calbox13.textContent = 11
    calbox14.textContent = 12
    calbox15.textContent = 13
    calbox16.textContent = 14
    calbox17.textContent = 15
    calbox18.textContent = 16
    calbox19.textContent = 17
    calbox20.textContent = 18
    calbox21.textContent = 19
    calbox22.textContent = 20
    calbox23.textContent = 21
    calbox24.textContent = 22
    calbox25.textContent = 23
    calbox26.textContent = 24
    calbox27.textContent = 25
    calbox28.textContent = 26
    calbox29.textContent = 27
    calbox30.textContent = 28
    calbox31.textContent = 29
    calbox32.textContent = 30
    calbox33.textContent = 31
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }

  function wednesdayStart() {
    calbox1.textContent = x
    calbox2.textContent = x
    calbox3.textContent = x
    calbox4.textContent = 1
    calbox5.textContent = 2
    calbox6.textContent = 3
    calbox7.textContent = 4
    calbox8.textContent = 5
    calbox9.textContent = 6
    calbox10.textContent = 7
    calbox11.textContent = 8
    calbox12.textContent = 9
    calbox13.textContent = 10
    calbox14.textContent = 11
    calbox15.textContent = 12
    calbox16.textContent = 13
    calbox17.textContent = 14
    calbox18.textContent = 15
    calbox19.textContent = 16
    calbox20.textContent = 17
    calbox21.textContent = 18
    calbox22.textContent = 19
    calbox23.textContent = 20
    calbox24.textContent = 21
    calbox25.textContent = 22
    calbox26.textContent = 23
    calbox27.textContent = 24
    calbox28.textContent = 25
    calbox29.textContent = 26
    calbox30.textContent = 27
    calbox31.textContent = 28
    calbox32.textContent = 29
    calbox33.textContent = 30
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }

  function thursdayStart() {
    calbox1.textContent = x
    calbox2.textContent = x
    calbox3.textContent = x
    calbox4.textContent = x
    calbox5.textContent = 1
    calbox6.textContent = 2
    calbox7.textContent = 3
    calbox8.textContent = 4
    calbox9.textContent = 5
    calbox10.textContent = 6
    calbox11.textContent = 7
    calbox12.textContent = 8
    calbox13.textContent = 9
    calbox14.textContent = 10
    calbox15.textContent = 11
    calbox16.textContent = 12
    calbox17.textContent = 13
    calbox18.textContent = 14
    calbox19.textContent = 15
    calbox20.textContent = 16
    calbox21.textContent = 17
    calbox22.textContent = 18
    calbox23.textContent = 19
    calbox24.textContent = 20
    calbox25.textContent = 21
    calbox26.textContent = 22
    calbox27.textContent = 23
    calbox28.textContent = 24
    calbox29.textContent = 25
    calbox30.textContent = 26
    calbox31.textContent = 27
    calbox32.textContent = 28
    calbox33.textContent = 29
    calbox34.textContent = 30
    calbox35.textContent = 31
    calbox36.textContent = x
    calbox37.textContent = x
  }

  function fridayStart() {
    calbox1.textContent = x
    calbox2.textContent = x
    calbox3.textContent = x
    calbox4.textContent = x
    calbox5.textContent = x
    calbox6.textContent = 1
    calbox7.textContent = 2
    calbox8.textContent = 3
    calbox9.textContent = 4
    calbox10.textContent = 5
    calbox11.textContent = 6
    calbox12.textContent = 7
    calbox13.textContent = 8
    calbox14.textContent = 9
    calbox15.textContent = 10
    calbox16.textContent = 11
    calbox17.textContent = 12
    calbox18.textContent = 13
    calbox19.textContent = 14
    calbox20.textContent = 15
    calbox21.textContent = 16
    calbox22.textContent = 17
    calbox23.textContent = 18
    calbox24.textContent = 19
    calbox25.textContent = 20
    calbox26.textContent = 21
    calbox27.textContent = 22
    calbox28.textContent = 23
    calbox29.textContent = 24
    calbox30.textContent = 25
    calbox31.textContent = 26
    calbox32.textContent = 27
    calbox33.textContent = 28
    calbox34.textContent = 29
    calbox35.textContent = 30
    calbox36.textContent = 31
    calbox37.textContent = x

  }

  function saturdayStart() {
    calbox1.textContent = x
    calbox2.textContent = x
    calbox3.textContent = x
    calbox4.textContent = x
    calbox5.textContent = x
    calbox6.textContent = x
    calbox7.textContent = 1
    calbox8.textContent = 2
    calbox9.textContent = 3
    calbox10.textContent = 4
    calbox11.textContent = 5
    calbox12.textContent = 6
    calbox13.textContent = 7
    calbox14.textContent = 8
    calbox15.textContent = 9
    calbox16.textContent = 10
    calbox17.textContent = 11
    calbox18.textContent = 12
    calbox19.textContent = 13
    calbox20.textContent = 14
    calbox21.textContent = 15
    calbox22.textContent = 16
    calbox23.textContent = 17
    calbox24.textContent = 18
    calbox25.textContent = 19
    calbox26.textContent = 20
    calbox27.textContent = 21
    calbox28.textContent = 22
    calbox29.textContent = 23
    calbox30.textContent = 24
    calbox31.textContent = 25
    calbox32.textContent = 26
    calbox33.textContent = 27
    calbox34.textContent = 28
    calbox35.textContent = 29
    calbox36.textContent = 30
    calbox37.textContent = 31
  }


  /* progresses calendar to next month */
  nextMonthEl.addEventListener("click", nextClick);
  function nextClick() {
    var nextMonth = moment(calendarStart).add(monthValue, 'months').format("MMMM");
    monthEl.textContent = nextMonth;
    var startDay = moment(calendarFirstDay).add(monthValue, 'months').format('dddd')
    if (startDay === "Sunday") {
      sundayStart();
    } else if (startDay === "Monday") {
      mondayStart();
    } else if (startDay === "Tuesday") {
      tuesdayStart();
    } else if (startDay === "Wednesday") {
      wednesdayStart();
    } else if (startDay === "Thursday") {
      thursdayStart();
    } else if (startDay === "Friday") {
      fridayStart();
    } else if (startDay === "Saturday") {
      saturdayStart();
    }
    monthValue += 1;
    return;
  }

  /* returns calendar to previous month*/
  prevMonthEl.addEventListener("click", prevClick);
  function prevClick() {
    monthValue -= 2;
    nextClick();
  }

  /* set today's date for urgent task table */
  var todayEl = moment().format('MMM DD, YYYY');
  dateEl.textContent = todayEl
  wednesdayStart();

  /* set number of days in months with less than 31*/
  function febStartSun() {
    calbox29.textContent = x
    calbox30.textContent = x
    calbox31.textContent = x
    calbox32.textContent = x
    calbox33.textContent = x
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function febStartMon() {
    calbox30.textContent = x
    calbox31.textContent = x
    calbox32.textContent = x
    calbox33.textContent = x
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function febStartTue() {
    calbox31.textContent = x
    calbox32.textContent = x
    calbox33.textContent = x
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function febStartWed() {
    calbox32.textContent = x
    calbox33.textContent = x
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function febStartThu() {
    calbox33.textContent = x
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function febStartFri() {
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function febStartSat() {
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }

  function setFebLength() {
    if (monthEl.textContent === "February") {
      if (calbox1.textContent === "1") {
        febStartSun();
      } else if (calbox2.textContent === "1") {
        febStartMon();
      } else if (calbox3.textContent === "1") {
        febStartTue();
      } else if (calbox4.textContent === "1") {
        febStartWed();
      } else if (calbox5.textContent === "1") {
        febStartThu();
      } else if (calbox6.textContent === "") {
        febStartFri();
      } else if (calbox7.textContent === "1") {
        febStartSat();
      }
    }
  }
  nextMonthEl.addEventListener("click", setFebLength);
  prevMonthEl.addEventListener("click", setFebLength);

  function aprStartSun() {
    calbox31.textContent = x
    calbox32.textContent = x
    calbox33.textContent = x
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function aprStartMon() {
    calbox32.textContent = x
    calbox33.textContent = x
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function aprStartTue() {
    calbox33.textContent = x
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function aprStartWed() {
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function aprStartThu() {
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function aprStartFri() {
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function aprStartSat() {
    calbox37.textContent = x
  }
  function setAprLength() {
    if (monthEl.textContent === "April") {
      if (calbox1.textContent === "1") {
        aprStartSun();
      } else if (calbox2.textContent === "1") {
        aprStartMon();
      } else if (calbox3.textContent === "1") {
        aprStartTue();
      } else if (calbox4.textContent === "1") {
        aprStartWed();
      } else if (calbox5.textContent === "1") {
        aprStartThu();
      } else if (calbox6.textContent === "1") {
        aprStartFri();
      } else if (calbox7.textContent === "1") {
        aprStartSat();
      }
    }

  }
  prevMonthEl.addEventListener("click", setAprLength);
  nextMonthEl.addEventListener("click", setAprLength);

  function junStartSun() {
    calbox31.textContent = x
    calbox32.textContent = x
    calbox33.textContent = x
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function junStartMon() {
    calbox32.textContent = x
    calbox33.textContent = x
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function junStartTue() {
    calbox33.textContent = x
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function junStartWed() {
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function junStartThu() {
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function junStartFri() {
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function junStartSat() {
    calbox37.textContent = x
  }
  function setJunLength() {
    if (monthEl.textContent === "June") {
      if (calbox1.textContent === "1") {
        junStartSun();
      } else if (calbox2.textContent === "1") {
        junStartMon();
      } else if (calbox3.textContent === "1") {
        junStartTue();
      } else if (calbox4.textContent === "1") {
        junStartWed();
      } else if (calbox5.textContent === "1") {
        junStartThu();
      } else if (calbox6.textContent === "1") {
        junStartFri();
      } else if (calbox7.textContent === "1") {
        junStartSat();
      }
    }

  }
  prevMonthEl.addEventListener("click", setJunLength);
  nextMonthEl.addEventListener("click", setJunLength);

  function septStartSun() {
    calbox31.textContent = x
    calbox32.textContent = x
    calbox33.textContent = x
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function septStartMon() {
    calbox32.textContent = x
    calbox33.textContent = x
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function septStartTue() {
    calbox33.textContent = x
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function septStartWed() {
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function septStartThu() {
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function septStartFri() {
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function septStartSat() {
    calbox37.textContent = x
  }
  function setSeptLength() {
    if (monthEl.textContent === "September") {
      if (calbox1.textContent === "1") {
        septStartSun();
      } else if (calbox2.textContent === "1") {
        septStartMon();
      } else if (calbox3.textContent === "1") {
        septStartTue();
      } else if (calbox4.textContent === "1") {
        septStartWed();
      } else if (calbox5.textContent === "1") {
        septStartThu();
      } else if (calbox6.textContent === "1") {
        septStartFri();
      } else if (calbox7.textContent === "1") {
        septStartSat();
      }
    }

  }
  prevMonthEl.addEventListener("click", setSeptLength);
  nextMonthEl.addEventListener("click", setSeptLength);

  function novStartSun() {
    calbox31.textContent = x
    calbox32.textContent = x
    calbox33.textContent = x
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function novStartMon() {
    calbox32.textContent = x
    calbox33.textContent = x
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function novStartTue() {
    calbox33.textContent = x
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function novStartWed() {
    calbox34.textContent = x
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function novStartThu() {
    calbox35.textContent = x
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function novStartFri() {
    calbox36.textContent = x
    calbox37.textContent = x
  }
  function novStartSat() {
    calbox37.textContent = x
  }
  function setNovLength() {
    if (monthEl.textContent === "November") {
      if (calbox1.textContent === "1") {
        novStartSun();
      } else if (calbox2.textContent === "1") {
        novStartMon();
      } else if (calbox3.textContent === "1") {
        novStartTue();
      } else if (calbox4.textContent === "1") {
        novStartWed();
      } else if (calbox5.textContent === "1") {
        novStartThu();
      } else if (calbox6.textContent === "1") {
        novStartFri();
      } else if (calbox7.textContent === "1") {
        novStartSat();
      }
    }

  }
  prevMonthEl.addEventListener("click", setNovLength);
  nextMonthEl.addEventListener("click", setNovLength);

  function eventClickTest() {
    console.log("Success!")
  }
  calbox1.addEventListener("click", eventClickTest);
  calbox2.addEventListener("click", eventClickTest);
  calbox3.addEventListener("click", eventClickTest);
  calbox4.addEventListener("click", eventClickTest);
  calbox5.addEventListener("click", eventClickTest);
  calbox6.addEventListener("click", eventClickTest);
  calbox7.addEventListener("click", eventClickTest);
  calbox8.addEventListener("click", eventClickTest);
  calbox9.addEventListener("click", eventClickTest);
  calbox10.addEventListener("click", eventClickTest);
  calbox11.addEventListener("click", eventClickTest);
  calbox12.addEventListener("click", eventClickTest);
  calbox13.addEventListener("click", eventClickTest);
  calbox14.addEventListener("click", eventClickTest);
  calbox15.addEventListener("click", eventClickTest);
  calbox16.addEventListener("click", eventClickTest);
  calbox17.addEventListener("click", eventClickTest);
  calbox18.addEventListener("click", eventClickTest);
  calbox19.addEventListener("click", eventClickTest);
  calbox20.addEventListener("click", eventClickTest);
  calbox21.addEventListener("click", eventClickTest);
  calbox22.addEventListener("click", eventClickTest);
  calbox23.addEventListener("click", eventClickTest);
  calbox24.addEventListener("click", eventClickTest);
  calbox25.addEventListener("click", eventClickTest);
  calbox26.addEventListener("click", eventClickTest);
  calbox27.addEventListener("click", eventClickTest);
  calbox28.addEventListener("click", eventClickTest);
  calbox29.addEventListener("click", eventClickTest);
  calbox30.addEventListener("click", eventClickTest);
  calbox31.addEventListener("click", eventClickTest);
  calbox32.addEventListener("click", eventClickTest);
  calbox33.addEventListener("click", eventClickTest);
  calbox34.addEventListener("click", eventClickTest);
  calbox35.addEventListener("click", eventClickTest);
  calbox36.addEventListener("click", eventClickTest);
  calbox37.addEventListener("click", eventClickTest);


}

// set today info on today page
var timeEl = document.getElementById("time-display");
var timeDEl = moment().format('MMM DD, YYYY, h:mm A');
if (timeEl) {
  console.log(timeDEl)
  timeEl.textContent = "Today's Date: " + timeDEl

  // dropdown toggle functions
  function dropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show")
  };
  var dropdowns = document.getElementsByName("content")


  window.onclick = function (event) {
    console.log("clicked")
    if (event.target.matches('#dropdownButton')) {
      var dropdown = document.getElementByName("content")

      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      } else { dropdown.classList.add('show') }
    }
  }
}

