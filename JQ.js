$(document).ready(function () {});

let text = $("#text-input");
let submitBtn = $("#btnSubmit");
let textDiv = $('<div id="text-div"></div>');
let ulText = $('<ul id="text-ul"></ul>')


submitBtn.click(function (e) {
  e.preventDefault();
  // alert(text.val())
  if (text.val() == '') {
    submitBtn.prop("disabled", true);
  } else {
    submitBtn.prop("disabled", false);
  }

  

ulText.append("<li>" + text.val() + "</li>")
$('li').click(function () {
    let colorR = Math.floor((Math.random() * 256));
    let colorG = Math.floor((Math.random() * 256));
    let colorB = Math.floor((Math.random() * 256));
    $(this).css('color', 'rgb(' + colorR + ',' + colorG + ',' + colorB + ')');

$('li').dblclick(function () {
    $(this).remove();
})

})

  //textDiv.append("<h2>" + text.val() + "</h2>");
  //textDiv.on("mouseover", function(){
      //$(this).css({'border-radius': 10, 'background-color':'grey'});
  });
//});

$("body").append(ulText);
$("body").append(textDiv);
