
$(document).ready(function () {


    $('#git3').hover(function(){
        $('#git4').css({
            'bottom': '2.9vw'
        })
    })

    $('#git3').mouseleave(function () {
        $('#git4').css({
            'bottom': '2.7vw'
        })
    })

    $('#me').animate({
        opacity: "1"
    }, 5000)



    $('.wrapper').animate({
        opacity: "1"
    }, 1500)


    // References to DOM Elements

    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    //const autoPrev = document.getElementById("auto-prev");
    const autoForward = document.getElementById("auto-next");
    const pause = document.getElementById("pause");

    const book = document.getElementById("book");
    const paper1 = document.getElementById("p1");
    const paper2 = document.getElementById("p2");
    const paper3 = document.getElementById("p3");
    const paper4 = document.getElementById("p4");
    const paper5 = document.getElementById("p5");
    const paper6 = document.getElementById("p6");
    const paper7 = document.getElementById("p7");
    const paper8 = document.getElementById("p8");
    const paper9 = document.getElementById("p9");
    const paper10 = document.getElementById("p10");
    const paper11 = document.getElementById("p11");
    const paper12 = document.getElementById("p12");
    const paper13 = document.getElementById("p13");
    const paper14 = document.getElementById("p14");
    const paper15 = document.getElementById("p15");

    /*const paper16 = document.getElementById("p16");
    const paper17 = document.getElementById("p17");
    const paper18 = document.getElementById("p18");
    const paper19 = document.getElementById("p19");
    const paper20 = document.getElementById("p20");*/
    const progress = document.querySelector(".progress");
    const btn1 = document.querySelector('.btn1');
    const btn5 = document.querySelector('.btn5');
    const btn6 = document.querySelector('.btn6');
    const btn7= document.querySelector('.btn7');
    const btn8 = document.querySelector('.btn8');
    var back, next
    var duration = 50000
    var x = 0
    var y = 0

    prevBtn.addEventListener("click", manualBack);
    nextBtn.addEventListener("click", manualNext);
    pause.addEventListener("click", fullPause)
    //autoPrev.addEventListener("click", autoBack);
    autoForward.addEventListener("click", autoNext);

    let currentLocation = 1;
    let numOfPapers = 15;
    let maxLocation = numOfPapers + 1;
    let currentAudio = 0;
    let mute = 1;

    autoForward.classList.add("blinker");
    pause.style.pointerEvents = "none"
    btn1.style.pointerEvents = "none"
    prevBtn.style.pointerEvents = "none"

    function manualBack() {
        flipPause()
        goPrevPage()
    }





    function manualNext() {
        flipPause()
        goNextPage()
    }





    function fullPause() {
        flipPause()
        musicState('off')
        mute = 0;
        $('#vol-on').animate({
            opacity: "0"
        }, 500).hide()
        $('#vol-off').animate({
            opacity: "1"
        }, 500).show()
    }





    function flipPause() {
        autoForward.style.pointerEvents = "all"
        // autoPrev.style.pointerEvents = "all"
        clearInterval(next)
        clearInterval(back)
        progress.classList.remove("active" + duration);
        $('.progress').animate({
            opacity: "0"
        })
    }




    /*
    function autoBack() {
        autoForward.style.pointerEvents = "all"
       // autoPrev.style.pointerEvents = "none"
        clearInterval(next)
        y=0
        goPrevPage()
        $('.progress').animate({
            opacity: "100%"
        })
        progress.classList.add("active");
            back = setInterval(function () {
                goPrevPage()
                $('.progress').animate({
                    opacity: "100%"
                })
                progress.classList.add("active");
                if (x == 15 || currentLocation == 1) {
                    clearInterval(back)
                    x = 0
                    progress.classList.remove("active");
                    $('.progress').animate({
                        opacity: "0"
                })
            }
                clearInterval(back);
                autoBack();
        }, duration); 
    }*/





    function autoNext() {
        // autoPrev.style.pointerEvents = "all"
        autoForward.style.pointerEvents = "none"
        clearInterval(back)
        x = 0
        goNextPage()
        progress.classList.add("active" + duration);
        $('.progress').animate({
            opacity: "100%"
        })
        next = setInterval(function () {
            progress.classList.remove("active" + duration);
            $('.progress').animate({
                opacity: "100%"
            })
            if (y == 15 || currentLocation == 16) {
                clearInterval(next)
                y = 0
                progress.classList.remove("active" + duration);
                $('.progress').animate({
                    opacity: "0"
                })
            }
            clearInterval(next);
            autoNext();
        }, duration);
    }





    $('#vol-on').click(function () {
        mute = 0;
        musicState('off')
        $(this).animate({
            opacity: "0"
        }, 500).hide()
        $('#vol-off').animate({
            opacity: "1"
        }, 500).show()
    })





    $('#vol-off').click(function () {
        mute = 1;
        musicState('on')
        $(this).animate({
            opacity: "0"
        }, 500).hide()
        $('#vol-on').animate({
            opacity: "1"
        }, 500).show()
    })





    function openBook() {
        book.style.transform = "translateX(50%)";
        $('html,body').css({
            "overflow-x": "auto"
        })
        
        btn1.style.pointerEvents = "all"
        btn5.style.color = "#0094cf"
        prevBtn.style.pointerEvents = "all"
        btn6.style.color ="#0094cf"
        pause.style.pointerEvents = "all"
        btn7.style.color = "#0094cf";
        nextBtn.style.pointerEvents = "all"
        btn8.style.color = "#0094cf";
        autoForward.style.pointerEvents = "all"
        musicState('on')
        if (mute == 1) {
            $('#vol-inactive').animate({
                opacity: "0"
            }, 500).hide()
            $('#vol-off').animate({
                opacity: "0"
            }, 500).hide()
            $('#vol-on').animate({
                opacity: "1"
            }, 500).show()
        } else if (mute == 0) {
            $('#vol-inactive').animate({
                opacity: "0"
            }, 500).hide()
            $('#vol-on').animate({
                opacity: "0"
            }, 500).hide()
            $('#vol-off').animate({
                opacity: "1"
            }, 500).show()
        }
    }





    function closeBook(isAtBeginning) {
        
        if (isAtBeginning) {
            btn5.style.color = "#c9c9c9"
            prevBtn.style.pointerEvents ="none"
            book.style.transform = "translateX(0%)";
        } else {
            btn5.style.color = "#0094cf"
            prevBtn.style.pointerEvents = "all"
            btn7.style.color = "#c9c9c9";
            nextBtn.style.pointerEvents = "none"
            btn8.style.color = "#c9c9c9";
            autoForward.style.pointerEvents = "none"
            book.style.transform = "translateX(100%)";
          
                $('html,body').css({
                    "overflow-x": "hidden"
                })
         
        }
        
        btn1.style.pointerEvents = "none"
        btn6.style.color = "#c9c9c9"
        pause.style.pointerEvents = "none"
        musicState('off')
        if (mute == 0) {
            $('#vol-on').animate({
                opacity: "0"
            }, 500).hide()
            $('#vol-off').animate({
                opacity: "0"
            }, 500).hide()
            $('#vol-inactive').animate({
                opacity: "1"
            }, 500).show()
        } else if (mute == 1) {
            $('#vol-off').animate({
                opacity: "0"
            }, 500).hide()
            $('#vol-on').animate({
                opacity: "0"
            }, 500).hide()
            $('#vol-inactive').animate({
                opacity: "1"
            }, 500).show()
        }
    }





    function musicState(state) {
        if (state == 'off') {
            $('#music').get(0).pause();
            if (currentAudio >= 1) {
                $('#audio_' + currentAudio).get(0).pause();
            }
        } else
            if (state == 'on' && mute == 1) {
                $('#music').get(0).currentTime = 0;
                $('#music').get(0).play();
                if (currentAudio >= 1) {
                    $('#audio_' + currentAudio).get(0).currentTime = 0;
                    $('#audio_' + currentAudio).get(0).play();
                }
            }
    }




    function audioPlay(x) {
        if (mute == 1) {
            $('#audio_' + x).get(0).play();
        }
    }




    function goNextPage() {
        autoForward.classList.remove("blinker");
        if (currentLocation < maxLocation) {
            switch (currentLocation) {
                case 1:
                    duration = 7000;
                    openBook();
                    paper1.classList.add("flipped");
                    paper1.style.zIndex = 1;
                    paper1.style.pointerEvents = "none";
                    currentAudio = 1;
                    $('#audio_1').get(0).currentTime = 0;
                    audioPlay(1)
                    break;
                case 2:
                    duration = 30000;
                    paper2.classList.add("flipped");
                    paper2.style.zIndex = 2;
                    paper2.style.pointerEvents = "none";
                    $('#audio_1').get(0).pause();
                    currentAudio = 2;
                    $('#audio_2').get(0).currentTime = 0;
                    audioPlay(2)
                    $("#audio_2").on("ended", function () {
                        currentAudio = 3;
                        $('#audio_3').get(0).currentTime = 0;
                        audioPlay(3)
                    });
                    break;
                case 3:
                    duration = 36000;
                    paper3.classList.add("flipped");
                    paper3.style.zIndex = 3;
                    paper3.style.pointerEvents = "none";
                    $('#audio_2,#audio_3').get(0).pause();
                    currentAudio = 4;
                    $('#audio_4').get(0).currentTime = 0;
                    audioPlay(4)
                    $("#audio_4").on("ended", function () {
                        currentAudio = 5;
                        $('#audio_5').get(0).currentTime = 0;
                        audioPlay(5)
                    });
                    break;
                case 4:
                    duration = 34000;
                    paper4.classList.add("flipped");
                    paper4.style.zIndex = 4;
                    paper4.style.pointerEvents = "none";
                    $('#audio_4,#audio_5').get(0).pause();
                    currentAudio = 6;
                    $('#audio_6').get(0).currentTime = 0;
                    audioPlay(6)
                    $("#audio_6").on("ended", function () {
                        currentAudio = 7;
                        $('#audio_7').get(0).currentTime = 0;
                        audioPlay(7)
                    });
                    break;
                case 5:
                    duration = 22000;
                    paper5.classList.add("flipped");
                    paper5.style.zIndex = 5;
                    paper5.style.pointerEvents = "none";
                    $('#audio_6,#audio_7').get(0).pause();
                    currentAudio = 8;
                    $('#audio_8').get(0).currentTime = 0;
                    audioPlay(8)
                    $("#audio_8").on("ended", function () {
                        currentAudio = 9;
                        $('#audio_9').get(0).currentTime = 0;
                        audioPlay(9)
                    });
                    break;
                case 6:
                    duration = 21000;
                    paper6.classList.add("flipped");
                    paper6.style.zIndex = 6;
                    paper6.style.pointerEvents = "none";
                    $('#audio_8,#audio_9').get(0).pause();
                    currentAudio = 10;
                    $('#audio_10').get(0).currentTime = 0;
                    audioPlay(10)
                    $("#audio_10").on("ended", function () {
                        currentAudio = 11;
                        $('#audio_11').get(0).currentTime = 0;
                        audioPlay(11)
                    });
                    break;
                case 7:
                    duration = 22000;
                    paper7.classList.add("flipped");
                    paper7.style.zIndex = 7;
                    paper7.style.pointerEvents = "none";
                    $('#audio_10,#audio_11').get(0).pause();
                    currentAudio = 12;
                    $('#audio_12').get(0).currentTime = 0;
                    audioPlay(12)
                    $("#audio_12").on("ended", function () {
                        currentAudio = 13;
                        $('#audio_13').get(0).currentTime = 0;
                        audioPlay(13)
                    });
                    break;
                case 8:
                    duration = 29000;
                    paper8.classList.add("flipped");
                    paper8.style.zIndex = 8;
                    paper8.style.pointerEvents = "none";
                    $('#audio_12,#audio_13').get(0).pause();
                    currentAudio = 14;
                    $('#audio_14').get(0).currentTime = 0;
                    audioPlay(14)
                    $("#audio_14").on("ended", function () {
                        currentAudio = 15;
                        $('#audio_15').get(0).currentTime = 0;
                        audioPlay(15)
                    });
                    break;
                case 9:
                    duration = 29000;
                    paper9.classList.add("flipped");
                    paper9.style.zIndex = 9;
                    paper9.style.pointerEvents = "none";
                    $('#audio_14').get(0).pause();
                    $('#audio_15').get(0).pause();

                    currentAudio = 16;
                    $('#audio_16').get(0).currentTime = 0;
                    audioPlay(16)
                    $("#audio_16").on("ended", function () {
                        currentAudio = 17;
                        $('#audio_17').get(0).currentTime = 0;
                        audioPlay(17)
                    });
                    break;
                case 10:
                    duration = 35000;
                    paper10.classList.add("flipped");
                    paper10.style.zIndex = 10;
                    paper10.style.pointerEvents = "none";
                    $('#audio_16,#audio_17').get(0).pause();
                    currentAudio = 18;
                    $('#audio_18').get(0).currentTime = 0;
                    audioPlay(18)
                    $("#audio_18").on("ended", function () {
                        currentAudio = 19;
                        $('#audio_19').get(0).currentTime = 0;
                        audioPlay(19)
                    });
                    break;
                case 11:
                    duration = 15000;
                    paper11.classList.add("flipped");
                    paper11.style.zIndex = 11;
                    paper11.style.pointerEvents = "none";
                    currentAudio = 0;
                    $('#audio_18,#audio_19').get(0).pause();
                    break;
                case 12:
                    paper12.classList.add("flipped");
                    paper12.style.zIndex = 12;
                    paper12.style.pointerEvents = "none";
                    
                    break;
                case 13:
                    paper13.classList.add("flipped");
                    paper13.style.zIndex = 13;
                   // paper13.style.pointerEvents = "none";
                    

                    break;
                case 14:
                    paper14.classList.add("flipped");
                    paper14.style.zIndex = 14;
                    paper14.style.pointerEvents = "none";
                    $('#git3').css({opacity:0})
                    break;
                case 15:
                    paper15.classList.add("flipped");
                    paper15.style.zIndex = 15;
                    paper15.style.pointerEvents = "none";
                    closeBook(false);
                    break;
                /*    case 16:
                        paper16.classList.add("flipped");
                        paper16.style.zIndex = 16;
                        break; 
                    case 17:
                        paper17.classList.add("flipped");
                        paper17.style.zIndex = 17;
                        break;  
                    case 18:
                        paper18.classList.add("flipped");
                        paper18.style.zIndex = 18;
                        break;  
                    case 19:
                        paper19.classList.add("flipped");
                        paper19.style.zIndex = 19;
                        break;  
                    case 20:
                        paper20.classList.add("flipped");
                        paper20.style.zIndex = 20;
                        closeBook(false);
                        break;    */
                default:
                    throw new Error("unkown state");
            }
            currentLocation++;
        }
    }

















    function goPrevPage() {
        if (currentLocation > 1) {
            switch (currentLocation) {
                case 2:
                    closeBook(true);
                    paper1.classList.remove("flipped");
                    paper1.style.zIndex = 15;
                    paper1.style.pointerEvents = "all";
                    currentAudio = 0;
                    $('#audio_1').get(0).pause();
                    break;
                case 3:
                    duration = 7000;
                    paper2.classList.remove("flipped");
                    paper2.style.zIndex = 14;
                    paper2.style.pointerEvents = "all";
                    $('#audio_2,#audio_3').get(0).pause();
                    currentAudio = 1;
                    $('#audio_1').get(0).currentTime = 0;
                    audioPlay(1)
                    break;
                case 4:
                    duration = 30000;
                    paper3.classList.remove("flipped");
                    paper3.style.zIndex = 13;
                    paper3.style.pointerEvents = "all";
                    $('#audio_4,#audio_5').get(0).pause();
                    currentAudio = 2;
                    $('#audio_2').get(0).currentTime = 0;
                    audioPlay(2)
                    $("#audio_2").on("ended", function () {
                        currentAudio = 3;
                        $('#audio_3').get(0).currentTime = 0;
                        audioPlay(3)
                    });
                    break;
                case 5:
                    duration = 36000;
                    paper4.classList.remove("flipped");
                    paper4.style.zIndex = 12;
                    paper4.style.pointerEvents = "all";
                    $('#audio_6,#audio_7').get(0).pause();
                    currentAudio = 4;
                    $('#audio_4').get(0).currentTime = 0;
                    audioPlay(4)
                    $("#audio_4").on("ended", function () {
                        currentAudio = 5;
                        $('#audio_5').get(0).currentTime = 0;
                        audioPlay(5)
                    });
                    break;
                case 6:
                    duration = 34000;
                    paper5.classList.remove("flipped");
                    paper5.style.zIndex = 11;
                    paper5.style.pointerEvents = "all";
                    $('#audio_8,#audio_9').get(0).pause();
                    currentAudio = 6;
                    $('#audio_6').get(0).currentTime = 0;
                    audioPlay(6)
                    $("#audio_6").on("ended", function () {
                        currentAudio = 7;
                        $('#audio_7').get(0).currentTime = 0;
                        audioPlay(7)
                    });
                    break;
                case 7:
                    duration = 22000;
                    paper6.classList.remove("flipped");
                    paper6.style.zIndex = 10;
                    paper6.style.pointerEvents = "all";
                    $('#audio_10,#audio_11').get(0).pause();
                    currentAudio = 8;
                    $('#audio_8').get(0).currentTime = 0;
                    audioPlay(8)
                    $("#audio_8").on("ended", function () {
                        currentAudio = 9;
                        $('#audio_9').get(0).currentTime = 0;
                        audioPlay(9)
                    });
                    break;
                case 8:
                    duration = 21000;
                    paper7.classList.remove("flipped");
                    paper7.style.zIndex = 9;
                    paper7.style.pointerEvents = "all";
                    $('#audio_12,#audio_13').get(0).pause();
                    currentAudio = 10;
                    $('#audio_10').get(0).currentTime = 0;
                    audioPlay(10)
                    $("#audio_10").on("ended", function () {
                        currentAudio = 11;
                        $('#audio_11').get(0).currentTime = 0;
                        audioPlay(11)
                    });
                    break;
                case 9:
                    duration = 22000;
                    paper8.classList.remove("flipped");
                    paper8.style.zIndex = 8;
                    paper8.style.pointerEvents = "all";
                    $('#audio_14,#audio_15').get(0).pause();
                    currentAudio = 12;
                    $('#audio_12').get(0).currentTime = 0;
                    audioPlay(12)
                    $("#audio_12").on("ended", function () {
                        currentAudio = 13;
                        $('#audio_13').get(0).currentTime = 0;
                        audioPlay(13)
                    });
                    break;
                case 10:
                    duration = 29000;
                    paper9.classList.remove("flipped");
                    paper9.style.zIndex = 7;
                    paper9.style.pointerEvents = "all";
                    $('#audio_16,#audio_17').get(0).pause();
                    currentAudio = 14;
                    $('#audio_14').get(0).currentTime = 0;
                    audioPlay(14)
                    $("#audio_14").on("ended", function () {
                        currentAudio = 15;
                        $('#audio_15').get(0).currentTime = 0;
                        audioPlay(15)
                    });
                    break;
                case 11:
                    duration = 29000;
                    paper10.classList.remove("flipped");
                    paper10.style.zIndex = 6;
                    paper10.style.pointerEvents = "all";
                    $('#audio_18,#audio_19').get(0).pause();
                    currentAudio = 16;
                    $('#audio_16').get(0).currentTime = 0;
                    audioPlay(16)
                    $("#audio_17").on("ended", function () {
                        currentAudio = 17;
                        $('#audio_17').get(0).currentTime = 0;
                        audioPlay(17)
                    });
                    break;
                case 12:
                    duration = 35000;
                    paper11.classList.remove("flipped");
                    paper11.style.zIndex = 5;
                    paper11.style.pointerEvents = "all";
                    currentAudio = 18;
                    $('#audio_18').get(0).currentTime = 0;
                    audioPlay(18)
                    $("#audio_19").on("ended", function () {
                        currentAudio = 19;
                        $('#audio_19').get(0).currentTime = 0;
                        audioPlay(19)
                    });
                    break;
                case 13:
                    duration = 15000;
                    paper12.classList.remove("flipped");
                    paper12.style.zIndex = 4;
                    paper12.style.pointerEvents = "all";
                    break;
                case 14:
                    paper13.classList.remove("flipped");
                    paper13.style.zIndex = 3;
                    paper13.style.pointerEvents = "all";
                    
                    break;
                case 15:
                    paper14.classList.remove("flipped");
                    paper14.style.zIndex = 2;
                    paper14.style.pointerEvents = "all";
                    $('#git3').delay(500).animate({opacity:1})
                    break;
                case 16:
                    openBook();
                    paper15.classList.remove("flipped");
                    paper15.style.zIndex = 1;
                    paper15.style.pointerEvents = "all";
                    break;
                /*    case 17:
                        paper16.classList.remove("flipped");
                        paper16.style.zIndex = 5;
                        break;
                    case 18:
                        paper17.classList.remove("flipped");
                        paper17.style.zIndex = 4;
                        break;
                    case 19:
                        paper18.classList.remove("flipped");
                        paper18.style.zIndex = 3;
                        break;
                    case 20:
                        paper19.classList.remove("flipped");
                        paper19.style.zIndex = 2;
                        break;
                    case 21:
                        openBook();
                        paper20.classList.remove("flipped");
                        paper20.style.zIndex = 1;
                        break;*/
                default:
                    throw new Error("unkown state");
            }
            currentLocation--;
        }
    }

})

