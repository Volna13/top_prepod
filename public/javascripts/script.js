$(window).on("load", function () {
    "use strict";
    try{
        jQuery("abbr.timeago").timeago();
    }catch(e){}
    $("#anwer1Range").change(function () {
        $("#answer1Label").text("Ваша оценка:" + $(this).val())
    });
    $("#anwer2Range").change(function () {
        $("#answer2Label").text("Ваша оценка:" + $(this).val())
    });
    $("#anwer3Range").change(function () {
        $("#answer3Label").text("Ваша оценка:" + $(this).val())
    });
    $("#anwer4Range").change(function () {
        $("#answer4Label").text("Ваша оценка:" + $(this).val())
    });
    $("#anwer5Range").change(function () {
        $("#answer5Label").text("Ваша оценка:" + $(this).val())
    });
    $("#anwer6Range").change(function () {
        $("#answer6Label").text("Ваша оценка:" + $(this).val())
    });
    $("#anwer7Range").change(function () {
        $("#answer7Label").text("Ваша оценка:" + $(this).val())
    });
    $("#anwer8Range").change(function () {
        $("#answer8Label").text("Ваша оценка:" + $(this).val())
    });
    $("#anwer9Range").change(function () {
        $("#answer9Label").text("Ваша оценка:" + $(this).val())
    });
    $("#anwer10Range").change(function () {
        $("#answer10Label").text("Ваша оценка:" + $(this).val())
    });
    try {
        getCurrentSearch();
        getCurrentSort();
        formCurrentFilterData();
        $('#sort-select').select2({
        });
        $('#region-select').select2({
            placeholder: "Выберите область",
        });
        $('#cities-select').select2({
            placeholder: "Выберите город",
        });
        $('#univer-select').select2({
            placeholder: "Выберите университет",
        });
        $('#science-select').select2({
            placeholder: "Выберите область наук",
        });
        $('#spec-select').select2({
            placeholder: "Выберите специализацию",
        });
        $('#prof-select').select2({
            placeholder: "Выберите профессию",
        });
    } catch (e) { }


    //  ============= POST PROJECT POPUP FUNCTION =========

    $(".post_project").on("click", function () {
        $(".post-popup.pst-pj").addClass("active");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".post-project > a").on("click", function () {
        $(".post-popup.pst-pj").removeClass("active");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    //  ============= POST JOB POPUP FUNCTION =========

    $(".post-jb").on("click", function () {
        $(".post-popup.job_post").addClass("active");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".post-project > a").on("click", function () {
        $(".post-popup.job_post").removeClass("active");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    //  ============= SIGNIN CONTROL FUNCTION =========

    $('.sign-control li').on("click", function () {
        var tab_id = $(this).attr('data-tab');
        $('.sign-control li').removeClass('current');
        $('.sign_in_sec').removeClass('current');
        $(this).addClass('current animated fadeIn');
        $("#" + tab_id).addClass('current animated fadeIn');
        return false;
    });

    //  ============= SIGNIN TAB FUNCTIONALITY =========

    $('.signup-tab ul li').on("click", function () {
        var tab_id = $(this).attr('data-tab');
        $('.signup-tab ul li').removeClass('current');
        $('.dff-tab').removeClass('current');
        $(this).addClass('current animated fadeIn');
        $("#" + tab_id).addClass('current animated fadeIn');
        return false;
    });

    //  ============= SIGNIN TAB FUNCTIONALITY =========

    $('.signin-tab ul li').on("click", function () {
        var tab_id = $(this).attr('data-tab');
        $('.signin-tab ul li').removeClass('current');
        $('.dff-tab').removeClass('current');
        $(this).addClass('current animated fadeIn');
        $("#" + tab_id).addClass('current animated fadeIn');
        return false;
    });

    //  ============= SIGNIN SWITCH TAB FUNCTIONALITY =========

    $('.tab-feed ul li').on("click", function () {
        var tab_id = $(this).attr('data-tab');
        $('.tab-feed ul li').removeClass('active');
        $('.product-feed-tab').removeClass('current');
        $(this).addClass('active animated fadeIn');
        $("#" + tab_id).addClass('current animated fadeIn');
        return false;
    });

    //  ============= COVER GAP FUNCTION =========

    var gap = $(".container").offset().left;
    $(".cover-sec > a, .chatbox-list").css({
        "right": gap
    });

    //  ============= OVERVIEW EDIT FUNCTION =========

    $(".overview-open").on("click", function () {
        $("#overview-box").addClass("open");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".close-box").on("click", function () {
        $("#overview-box").removeClass("open");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    //  ============= EXPERIENCE EDIT FUNCTION =========

    $(".exp-bx-open").on("click", function () {
        $("#experience-box").addClass("open");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".close-box").on("click", function () {
        $("#experience-box").removeClass("open");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    //  ============= EDUCATION EDIT FUNCTION =========

    $(".ed-box-open").on("click", function () {
        $("#education-box").addClass("open");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".close-box").on("click", function () {
        $("#education-box").removeClass("open");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    //  ============= LOCATION EDIT FUNCTION =========

    $(".lct-box-open").on("click", function () {
        $("#location-box").addClass("open");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".close-box").on("click", function () {
        $("#location-box").removeClass("open");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    //  ============= SKILLS EDIT FUNCTION =========

    $(".skills-open").on("click", function () {
        $("#skills-box").addClass("open");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".close-box").on("click", function () {
        $("#skills-box").removeClass("open");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    //  ============= ESTABLISH EDIT FUNCTION =========

    $(".esp-bx-open").on("click", function () {
        $("#establish-box").addClass("open");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".close-box").on("click", function () {
        $("#establish-box").removeClass("open");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    //  ============= CREATE PORTFOLIO FUNCTION =========

    $(".gallery_pt > a").on("click", function () {
        $("#create-portfolio").addClass("open");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".close-box").on("click", function () {
        $("#create-portfolio").removeClass("open");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    //  ============= EMPLOYEE EDIT FUNCTION =========

    $(".emp-open").on("click", function () {
        $("#total-employes").addClass("open");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".close-box").on("click", function () {
        $("#total-employes").removeClass("open");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    //  =============== Ask a Question Popup ============

    $(".ask-question").on("click", function () {
        $("#question-box").addClass("open");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".close-box").on("click", function () {
        $("#question-box").removeClass("open");
        $(".wrapper").removeClass("overlay");
        return false;
    });


    //  ============== ChatBox ============== 


    $(".chat-mg").on("click", function () {
        $(this).next(".conversation-box").toggleClass("active");
        return false;
    });
    $(".close-chat").on("click", function () {
        $(".conversation-box").removeClass("active");
        return false;
    });

    //  ================== Edit Options Function =================


    $(".ed-opts-open").on("click", function () {
        $(this).next(".ed-options").toggleClass("active");
        return false;
    });


    // ============== Menu Script =============

    $(".menu-btn > a").on("click", function () {
        $("nav").toggleClass("active");
        return false;
    });


    //  ============ Notifications Open =============

    $(".not-box-open").on("click", function () {
        $(this).next(".notification-box").toggleClass("active");
    });

    // ============= User Account Setting Open ===========

    $(".user-info").on("click", function () {
        $(this).next(".user-account-settingss").toggleClass("active");
    });

    //  ============= FORUM LINKS MOBILE MENU FUNCTION =========

    $(".forum-links-btn > a").on("click", function () {
        $(".forum-links").toggleClass("active");
        return false;
    });
    $("html").on("click", function () {
        $(".forum-links").removeClass("active");
    });
    $(".forum-links-btn > a, .forum-links").on("click", function () {
        e.stopPropagation();
    });

    //  ============= PORTFOLIO SLIDER FUNCTION =========

    $('.profiles-slider').slick({
        slidesToShow: 3,
        slck: true,
        slidesToScroll: 1,
        prevArrow: '<span class="slick-previous"></span>',
        nextArrow: '<span class="slick-nexti"></span>',
        autoplay: true,
        dots: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $("#make-mark-form").submit(function () {
        var data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: '/models/markprepod.php',
            data: data,
            success: function (data) {
                $('#btn-save-answers').text('Изменить');
                // $('#make-marks-model').modal('hide');
                // $(".modal-backdrop.fade.show").hide();
                // $('#make-marks-model').modal('toggle');
                // $('body').removeClass('modal-open');
            },
            error: function (xhr, str) {
                console.log(xhr, str)
            }
        });
    });

    $("#sort-select").on("change", function () {
        var searchVal = search();
        var filters = loadFilters();
        location.href = `/?filters=${filters}&search=${searchVal}&sort=${getSort()}`;
    });
    $("#region-select").on("change", function () {
        var selectedRegion = $(this).val();
        if (selectedRegion == null) {
            $("#cities-select").find('optgroup').remove();
            $("#cities-select").find('option').remove();
            $('#cities-select').prop('disabled', true);
            return;
        }
        var currentCityVal = $("#cities-select").val();
        $("#cities-select").find('optgroup').remove();
        $("#cities-select").find('option').remove();
        selectedRegion.forEach(element => {
            $("#cities-select").append(`<optgroup label="${element}">`);
            var citiesInRegion = availableCities[element];
            console.log(citiesInRegion);
            citiesInRegion.forEach(city => {
                $("#cities-select").append(`<option label="${city}">${city}</option>`);
            });
            $("#cities-select").append(`</optgroup>`);
        });
        $('#cities-select').prop('disabled', false);
        $("#cities-select").val(currentCityVal);
    });

    $("#cities-select").on("change", function () {
        var selectedCity = $(this).val();
        if (selectedCity == null) {
            $("#univer-select").find('optgroup').remove();
            $("#univer-select").find('option').remove();
            $('#univer-select').prop('disabled', true);
            return;
        }
        var currentUniverVal = $("#univer-select").val();
        $("#univer-select").find('optgroup').remove();
        $("#univer-select").find('option').remove();
        selectedCity.forEach(element => {
            $("#univer-select").append(`<optgroup label="${element}">`);
            console.log(element);
            var universInCity = availableUnivers[element];
            universInCity.forEach(univer => {
                $("#univer-select").append(`<option label="${univer}">${univer}</option>`);
            });
            $("#univer-select").append(`</optgroup>`);
        });
        $("#univer-select").val(currentUniverVal);
        $('#univer-select').prop('disabled', false);
    });

    $("#science-select").on("change", function () {
        var selectedScience = $(this).val();
        console.log(selectedScience);;
        if (selectedScience == null) {
            $("#spec-select").find('optgroup').remove();
            $("#spec-select").find('option').remove();
            $('#spec-select').prop('disabled', true);
            return;
        }
        var currentSpec = $("#spec-select").val();
        $("#spec-select").find('optgroup').remove();
        $("#spec-select").find('option').remove();
        selectedScience.forEach(element => {
            $("#spec-select").append(`<optgroup label="${element}">`);
            var specInScience = availableSciences[element];
            specInScience.forEach(spec => {
                $("#spec-select").append(`<option style="white-space:pre-line" label="${spec}">${spec}</option>`);
            });
            $("#spec-select").append(`</optgroup>`);
        });
        $("#spec-select").val(currentSpec);
        $('#spec-select').prop('disabled', false);
    });

    $("#btn-use-filters").click(function () {
        filtered = true;
        var json = loadFilters();
        var link = '/?filters=' + json;
        link += '&search=' + search() + '&sort=' + getSort();

        location.href = link;
    });
    $("#search-prepod-btn").click(function () {
        searched = true;
        var searchVal = search();
        var filters = loadFilters();
        location.href = `/?filters=${filters}&search=${searchVal}&sort=${getSort()}`;

    });
});

function search() {
    var searchVal = $("#search-prepod-input").val();
    return searchVal;
}

function loadFilters() {
    var selectedRegions = $("#region-select").val();
    var selectedCities = $("#cities-select").val();
    var selectedUnivers = $("#univer-select").val();
    var selectedSciences = $("#science-select").val();
    var selectedSpecs = $("#spec-select").val();
    var selectedProffesions = $("#prof-select").val();
    var selectedRating = $("#rating-input").val();
    var filterData = {};
    filtered = false;
    if (selectedRegions) {
        filterData.regions = selectedRegions;
        filtered = true;
    }
    if (selectedCities) {
        filterData.cities = selectedCities;

    }
    if (selectedUnivers) {
        filterData.univers = selectedUnivers;
    }
    if (selectedSciences) {
        filterData.sciences = selectedSciences;
        filtered = true;
    }
    if (selectedSpecs) {
        filterData.specs = selectedSpecs;
    }
    if (selectedProffesions) {
        filterData.professions = selectedProffesions;
        filtered = true;
    }
    if (selectedRating) {
        filterData.rating = selectedRating;
        filtered = true;
    }
    var json = JSON.stringify(filterData);
    return json;
}

function formCurrentFilterData() {
    var getFilters = window.location.search.substr(1);
    if (getFilters == "") return;
    console.log(getFilters);
    var currentFilters = JSON.parse(decodeURI(getFilters.split('&')[0].split('=')[1]));
    console.log(currentFilters);
    if (currentFilters.regions) {
        $("#region-select").val(currentFilters.regions);
        $('#cities-select').prop('disabled', false);
    }
    if (currentFilters.cities) {
        currentFilters.regions.forEach(element => {
            $("#cities-select").append(`<optgroup label="${element}">`);
            var citiesInRegion = availableCities[element];
            console.log(citiesInRegion);
            citiesInRegion.forEach(city => {
                $("#cities-select").append(`<option label="${city}">${city}</option>`);
            });
            $("#cities-select").append(`</optgroup>`);
        });
        $('#cities-select').prop('disabled', false);
        $('#univers-select').prop('disabled', false);
        $("#cities-select").val(currentFilters.cities);
    }
    if (currentFilters.univers) {
        currentFilters.cities.forEach(element => {
            $("#univer-select").append(`<optgroup label="${element}">`);
            var universInRegion = availableUnivers[element];
            universInRegion.forEach(univer => {
                $("#univer-select").append(`<option label="${univer}">${univer}</option>`);
            });
            $("#univer-select").append(`</optgroup>`);
        });
        $('#univer-select').prop('disabled', false);
        $('#univer-select').prop('disabled', false);
        $("#univer-select").val(currentFilters.univers);
    }
    if (currentFilters.sciences) {
        $("#science-select").val(currentFilters.sciences);
        $('#spec-select').prop('disabled', false);
    }
    if (currentFilters.specs) {
        $('#spec-select').prop('disabled', false);
        currentFilters.sciences.forEach(element => {
            $("#spec-select").append(`<optgroup label="${element}">`);
            var specInScience = availableSciences[element];
            specInScience.forEach(spec => {
                $("#spec-select").append(`<option style="white-space:pre-line" label="${spec}">${spec}</option>`);
            });
            $("#spec-select").append(`</optgroup>`);
        });
        $("#spec-select").val(currentFilters.specs);
    }
    if (currentFilters.professions) {
        console.log("prof");
        $("#prof-select").val(currentFilters.professions);
    }
    if (currentFilters.rating) {
        $("#rating-input").val(currentFilters.rating);
    }
}

function getCurrentSearch() {
    var getSearch = window.location.search.substr(1);
    if (getSearch == "") return;
    var currentSearch = decodeURI(getSearch.split('&')[1].split('=')[1]);
    $("#search-prepod-input").val(currentSearch);
}

function getSort() {
    var sort = $("#sort-select").val();
    return sort;
}
function getCurrentSort() {
    var currentSort = window.location.search.substr(1);
    if (currentSort == "") return;
    currentSort = decodeURI(currentSort.split('&')[2].split('=')[1]);
    $("#sort-select").val(currentSort);
}

function clearFilter(filterId) {
    $(`#${filterId}`).val(null).trigger('change')
}
