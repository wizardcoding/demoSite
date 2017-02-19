$( document ).ready(function() {
    $( "#ShowServices" ).on( "click", function() {
        $( "#imageRevel" ).toggleClass( "imageToggle", 1000 );
        $( "#ShowServices" ).hide( "scale", 1000).queue(function(){
            $("#MainMenuContainer").show("fade", 2000).dequeue();
            $("#SubMenuContainer").show();
        });
    });

    $("#CancunServices").on("click", function() {
        $("#mainContent").hide();
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#CancunSubMenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/cancun.html");
    });

    $("#CancunDaddyO").on("click", function() {
        $("#mainContent").hide();
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#CancunSubMenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/cancunClubs/cancunDaddyo.html");
    });

    $("#CancunMandala").on("click", function() {
        $("#mainContent").hide();
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#CancunSubMenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/cancunClubs/cancunMandala.html");
    });

    $("#CancunPalazzo").on("click", function() {
        $("#mainContent").hide();
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#CancunSubMenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/cancunClubs/cancunPalazzo.html");
    });

    $("#CancunCityClub").on("click", function() {
        $("#mainContent").hide();
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#CancunSubMenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/cancunClubs/cancunCityClub.html");
    });

    $("#CancunMandalaBeachClub").on("click", function() {
        $("#mainContent").hide();
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#CancunSubMenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/cancunClubs/cancunMandalaBeach.html");
    });

    $("#CancunSenorFrogs").on("click", function() {
        $("#mainContent").hide();
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#CancunSubMenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/cancunClubs/cancunSenorFrogs.html");
    });

    $("#CancunLaVaquita").on("click", function() {
        $("#mainContent").hide();
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#CancunSubMenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/cancunClubs/cancunVaquita.html");
    });

    $("#PlayaDelCarmenServices").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/playaDelCarmen.html");
    });

    $("#PlayaDelCarmenMandala").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/playaDelCarmenClubs/playaDelCarmenMandala.html");
    });

    $("#PlayaDelCarmenPalazzo").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/playaDelCarmenClubs/playaDelCarmenPalazzo.html");
    });

    $("#PlayaDelCarmenLaVaquita").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/playaDelCarmenClubs/playaDelCarmenVaquita.html");
    });

    $("#PuertoVallartaServices").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#PuertoVallartaSubmenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/puertoVallarta.html");
    });

    $("#PuertoVallartaSky").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#PuertoVallartaSubmenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/puertoVallartaClubs/puertoVallartaSky.html");
    });

    $("#PuertoVallartaMandala").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#PuertoVallartaSubmenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/puertoVallartaClubs/puertoVallartaMandala.html");
    });

    $("#PuertoVallartaLaSanta").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#PuertoVallartaSubmenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/puertoVallartaClubs/puertoVallartaSanta.html");
    });

    $("#PuertoVallartaXtine").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#PuertoVallartaSubmenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/puertoVallartaClubs/puertoVallartaXtine.html");
    });

    $("#PuertoVallartaLaVaquita").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#PuertoVallartaSubmenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/puertoVallartaClubs/puertoVallartaVaquita.html");
    });


    $("#Contacto").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#mainContent").delay(1000).show("fade", 1000).load( "content/contacto.html");
    });

    $("#TourServices").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(1000).show("fade", 1000).load( "content/contacto.html");
    });

    $("#TourMiami").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/liveTours/miamiTour.html");
    });

    $("#TourCancun").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/liveTours/cancunTour.html");
    });

    $("#TourEuropa").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/liveTours/europaTour.html");
    });

    $("#TourCanada").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/liveTours/canadaTour.html");
    });

    $("#TourBusiness").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/liveTours/businessTrip.html");
    });

    $("#TourHabana").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/liveTours/habanaTour.html");
    });

    $("#TourDisney").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").delay(1000).show("fade", 1000);
        $("#mainContent").delay(2500).show("fade", 1000).load( "content/liveTours/disneyTour.html");
    });

    $("#QuienesSomos").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#mainContent").delay(1000).show("fade", 1000).load( "content/quienesSomos.html");
    });

    $("#VipZone").on("click", function() {
        $("#mainContent").hide();
        $("#CancunSubMenu").hide("fade");
        $("#PlayaDelCarmenSubMenu").hide("fade");
        $("#PuertoVallartaSubmenu").hide("fade");
        $("#ToursSubmenu").hide("fade");
        $("#mainContent").delay(1000).show("fade", 1000).load( "content/vipContent.html");
    });
});
