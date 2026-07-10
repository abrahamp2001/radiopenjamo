const player = document.getElementById("radioPlayer");
const playButton = document.getElementById("playButton");

let reproduciendo = false;

playButton.addEventListener("click", function () {

    if (!reproduciendo) {

        player.play();

        playButton.innerHTML = '<i class="fa-solid fa-pause"></i> <span>Pausar Radio</span>';

        reproduciendo = true;

    } else {

        player.pause();

        playButton.innerHTML = '<i class="fa-solid fa-radio"></i> <span>Escuchar Radio</span>';

        reproduciendo = false;

    }

});

// Si el stream se detiene solo
player.addEventListener("ended", function () {

    playButton.innerHTML = '<i class="fa-solid fa-radio"></i> <span>Escuchar Radio</span>';

    reproduciendo = false;

});
// ===============================
// TV EN VIVO - HLS
// ===============================

const tvModal = document.getElementById('tvModal');
const video = document.getElementById('tvPlayer');

const streamTV = "https://e46fa4a445464f8a9150fa7d510eb85c.mediatailor.us-west-2.amazonaws.com/v1/master/2d2d0d97b0e548f025b2598a69b55bf30337aa0e/npp/M1TPUUHDPEDU1ZZW8Y1T/hls3/now,-1m/m.m3u8?ads.app_bundle=https%3A%2F%2Fwatchdingo.com&ads.app_name=WatchDingo&ads.app_store_url=https%3A%2F%2Fwatchdingo.com&ads.channel_name=HITS+MEXICANOS&ads.content_cat=IAB1-6&ads.content_genre=Music&ads.content_id=SKL104&ads.content_language=Spanish&ads.content_title=solo+hits+-+%2822%29&ads.coppa=0&ads.did=wEPwqaTEw2tikZhDZQbVjcOsKf9j5SnE&ads.gdpr=0&ads.gdpr_consent=&ads.h=1080&ads.ic=IAB1-7&ads.livestream=1&ads.lmt=0&ads.provider=Klasko&ads.rating=TVG&ads.schain=&ads.url=https%3A%2F%2Fwatchdingo.com&ads.us_privacy=1---&ads.w=190";

tvModal.addEventListener('shown.bs.modal', function () {

    if (Hls.isSupported()) {

        const hls = new Hls();

        hls.loadSource(streamTV);

        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, function () {

            video.play();

        });

    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {

        video.src = streamTV;

        video.play();

    }

});
// ===============================
// FACEBOOK
// ===============================

const facebookButton = document.getElementById("facebookButton");

facebookButton.addEventListener("click", function () {

    window.open(
        "https://www.facebook.com/abraham.blancho.gonzalez",
        "_blank"
    );

});
// ===============================
// WHATSAPP
// ===============================

const whatsappButton = document.getElementById("whatsappButton");

whatsappButton.addEventListener("click", function () {

    const mensaje = encodeURIComponent(
        "¡Hola Abraham! 👋 Estoy escuchando Radio Pénjamo 105.5 FM y me gustaría comunicarme contigo."
    );

    window.open(
        "https://wa.me/524691082066?text=" + mensaje,
        "_blank"
    );

});
// ===============================
// TARJETA AMIGO BLANCHO
// ===============================

const blanchoCard = document.getElementById("blanchoCard");

blanchoCard.addEventListener("click", function () {

    window.open(
        "https://radiopenjamo.webnode.mx",
        "_blank"
    );

});
// ===============================
// TARJETA LOS DESVELADOS
// ===============================

// ===============================
// TARJETA LOS DESVELADOS
// ===============================

const desveladosCard = document.getElementById("desveladosCard");

if (desveladosCard) {

    desveladosCard.addEventListener("click", function () {

        window.open(
            "https://www.facebook.com/share/v/1947whUKFc/",
            "_blank"
        );

    });

}
// ===============================
// TARJETA HISTORIAS DE TERROR
// ===============================

// ===============================
// TARJETA HISTORIAS DE TERROR
// ===============================

const terrorCard = document.getElementById("terrorCard");

if (terrorCard) {

    terrorCard.addEventListener("click", function () {

        window.open(
            "https://www.facebook.com/share/v/1AC3bkaXZR/",
            "_blank"
        );

    });

}
//====================================
// BOTÓN RADIO (SECCIÓN RADIO)
//====================================

const playButton2 = document.getElementById("playButton2");

if(playButton2){

playButton2.addEventListener("click",function(){

    playButton.click();

});

}