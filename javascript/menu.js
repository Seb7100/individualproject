$(document).ready(function () {
  //Load når dokumentet er klar, for at forhindre jquery kører inden dokumentet er klar, det kan være f.eks. hvis den vil prøve at gemme et element som ikke er der endnu, så er det en god ide at først køre jquery når det er loadet
  $(".btn1").click(function () {
    //Klik på knap der ligger i menu-skift i html
    const value = $(this).attr("data-filter");
    if (value == "all") {
      //Hvis værdien står på 'all' i data-filter i html --->
      $(".item").show("1000"); //Her viser vi alle items med 1000ms i hastighed som defineres i parentesen .show, der kan også bruges "slow" og "fast".
    } else {
      $(".item") //Definer element
        .not("." + value) //Her definerer vi, at den ikke skal røre datafilter som er i value
        .hide("1000"); // magen til display:none i css
      $(".item")
        .filter("." + value)
        .show("1000");
    }

    //Slet aktiv class på det trykkede element
    $(".btn1").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  });
});
