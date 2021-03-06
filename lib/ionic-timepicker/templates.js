! function(t) {
  try {
    t = angular.module("ionic-timepicker.templates")
  } catch (o) {
    t = angular.module("ionic-timepicker.templates", [])
  }
  t.run(["$templateCache", function(t) {
    t.put("time-picker-12-hour.html", '<div class=12HourTimePickerChildDiv><div class=row><span class="button-small col-25"><button class="button button-clear button-small button-dark timePickerArrows marginBottom10" ng-click=increaseHours()><i class="icon ion-chevron-up"></i></button> <input type=text ng-model=time.hours class="ipBoxes timePickerBoxText" disabled> <button class="button button-clear button-small button-dark timePickerArrows marginTop10" ng-click=decreaseHours()><i class="icon ion-chevron-down"></i></button></span> <label class="col-10 timePickerColon">:</label> <span class="button-small col-25"><button class="button button-clear button-small button-dark timePickerArrows marginBottom10" ng-click=increaseMinutes()><i class="icon ion-chevron-up"></i></button> <input type=text ng-model=time.minutes class="ipBoxes timePickerBoxText" disabled> <button class="button button-clear button-small button-dark timePickerArrows marginTop10" ng-click=decreaseMinutes()><i class="icon ion-chevron-down"></i></button></span> <label class="col-10 timePickerColon">:</label> <span class="button-small col-25"><button class="button button-clear button-small button-dark timePickerArrows marginBottom10" ng-click=changeMeridian()><i class="icon ion-chevron-up"></i></button> <input type=text ng-model=time.meridian class="ipBoxes timePickerBoxText" disabled> <button class="button button-clear button-small button-dark timePickerArrows marginTop10" ng-click=changeMeridian()><i class="icon ion-chevron-down"></i></button></span></div></div>')
  }])
}(),
function(t) {
  try {
    t = angular.module("ionic-timepicker.templates")
  } catch (o) {
    t = angular.module("ionic-timepicker.templates", [])
  }
  t.run(["$templateCache", function(t) {
    t.put("time-picker-24-hour.html", '<div class=24HourTimePickerChildDiv><div class=row><span class="button-small col-offset-20 col-25"><button class="button button-clear button-small button-dark timePickerArrows marginBottom10" ng-click=increaseHours()><i class="icon ion-chevron-up"></i></button> <input type=text ng-model=time.hours class="ipBoxes timePickerBoxText" disabled> <button class="button button-clear button-small button-dark timePickerArrows marginTop10" ng-click=decreaseHours()><i class="icon ion-chevron-down"></i></button></span> <label class="col-10 timePickerColon">:</label> <span class="button-small col-25"><button class="button button-clear button-small button-dark timePickerArrows marginBottom10" ng-click=increaseMinutes()><i class="icon ion-chevron-up"></i></button> <input type=text ng-model=time.minutes class="ipBoxes timePickerBoxText" disabled> <button class="button button-clear button-small button-dark timePickerArrows marginTop10" ng-click=decreaseMinutes()><i class="icon ion-chevron-down"></i></button></span></div></div>')
  }])
}();
