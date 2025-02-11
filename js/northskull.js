// search button
$(document).ready(function () {
    $(".search-button").click(function (e) {
        e.preventDefault();
        $(".quick-search").addClass("active");
    });

    $(".search-close").click(function (e) {
        e.preventDefault();
        $(".quick-search").removeClass("active");
    });
});

// sticky header
$(document).ready(function () {
    var $containerMenuSearch = $('.global-header');
    var headerHeight = $containerMenuSearch.outerHeight();

    $(window).scroll(function () {
        if ($(window).scrollTop() > headerHeight) {
            $containerMenuSearch.addClass('navigation-fixed');
        } else {
            $containerMenuSearch.removeClass('navigation-fixed');
        }
    });
});

// currencies
$(document).ready(function () {
    $(".icon-current").click(function () {
        if ($(".dropdown-holder").hasClass("active")) {
            $(".dropdown-holder").removeClass("active");
        } else {
            $(".dropdown-holder").addClass("active");
        }
    });
});
$(document).ready(function () {
    $(".content ul li a").click(function (event) {
        event.preventDefault();

        var selectedValue = $(this).attr("href");

        $(".currency-select").val(selectedValue);

        $(".current").text($(this).text());
        fn_change_selectbox_value_by_dh($(".currency-select")[0], selectedValue);
    });
});


// global-navigation
$(document).ready(function () {
    $(".has-sub-nav").hover(function () {
        $(this).addClass("active");
        $(".under-menu-free-shipping-banner, .top-free-shipping-banner").css("visibility", "hidden");
    }, function () {
        $(this).removeClass("active");
        $(".under-menu-free-shipping-banner, .top-free-shipping-banner").css("visibility", "visible");
        $(".subcategories").removeClass("active");
    });
});

// subcategories
$(document).ready(function () {
    $(".subcategories").removeClass("active");
    $(".toggle-subcategories").click(function (e) {
        e.preventDefault();

        $(".subcategories").removeClass("active");

        $(this).next(".subcategories").toggleClass("active");
    });
});

// basket-preview
$(document).ready(function () {
    $(".basket-button").click(function (event) {
        event.preventDefault();
        $(".preview").addClass("active");
    });
    $(".close-preview").click(function (event) {
        event.preventDefault();
        $(".preview").removeClass("active");
    });
});

// basket-preview not empty
// add matching item
$(document).ready(function () {
    $(".ecl-rec-products-cart-link").click(function () {
        var cartDiv = $(this).closest(".ecl-rec-products-cart");
        if (cartDiv.hasClass("open")) {
            cartDiv.removeClass("open");
        } else {
            cartDiv.addClass("open");
        }
    });
});
// quantity 
$(document).ready(function () {
    $(".decrement").click(function (e) {
        e.preventDefault();
        var inputField = $(this).closest(".quantity-widget").find(".quantity-input");
        var currentValue = parseInt(inputField.val());
        if (currentValue > 1) {
            inputField.val(currentValue - 1);
        }
    });

    $(".increment").click(function (e) {
        e.preventDefault();
        var inputField = $(this).closest(".quantity-widget").find(".quantity-input");
        var currentValue = parseInt(inputField.val());
        inputField.val(currentValue + 1);
    });
});

// back to top
$(document).ready(function () {
    const $backToTopButton = $('.back-to-top');
    $backToTopButton.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

// product
$(document).ready(function () {
    $(".ecl-cm-grid-product-link").hover(function () {
        $(this).find(".reverse").addClass("active");
    }, function () {
        $(this).find(".reverse").removeClass("active");
    });
});

// login
$(document).ready(function () {
    $(".i-forgot-password").click(function (event) {
        event.preventDefault();
        $(".tab.signin").addClass("recover-pw-active");
    });
    $(".i-forgot-password.close").click(function (event) {
        event.preventDefault();
        $(".tab.signin").removeClass("recover-pw-active");
    });
});
$(document).ready(function () {
    $(".create-an-account-btn").click(function (event) {
        event.preventDefault();
        $(".tab.register").addClass("register-form-active");
    });
    $(".create-an-account-btn.close").click(function (event) {
        event.preventDefault();
        $(".tab.register").removeClass("register-form-active");
    });
});

// more-details
$(document).ready(function () {
    $(".more-details-button").click(function (e) {
        e.preventDefault();
        var moreDetails = $(".more-details");
        if (moreDetails.height() === 260) {
            moreDetails.css("height", "0");
            $(this).text("More details...");
            $(".product-header").removeClass("hidden");
            $(".detail-sharing-wrapper").css("top", "415px");
        } else {
            moreDetails.css("height", "260px");
            $(this).text("Less details...");
            $(".product-header").addClass("hidden");
            $(".detail-sharing-wrapper").css("top", "181px");
        }
    });
});

// product-detail
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".standard-video-si").offset().top) {
            $(".detail-sharing-wrapper").hide();
            $(".product-header").hide();
            $(".product-form").hide();
        } else {
            $(".detail-sharing-wrapper").show();
            $(".product-header").show();
            $(".product-form").show();
        }
    });
});

$(document).ready(function () {
    $("ul.ecl-pd-products-group-feature-other-values.v1 li").click(function () {
        $("ul.ecl-pd-products-group-feature-other-values.v1 li").removeClass("active");

        $(this).addClass("active");
    });
});

$(document).ready(function () {
    $("ul.ecl-pd-products-group-feature-other-values.v2 li").click(function () {
        $("ul.ecl-pd-products-group-feature-other-values.v2 li").removeClass("active");

        $(this).addClass("active");
    });
});

// tab UI shop-our-insta
$(document).ready(function () {
    $('.link-wrapper-tabs a').click(function () {
        $('.tab-content').hide();

        $('.link-wrapper-tabs a').removeClass('active');

        var tabId = $(this).attr('href');

        $(tabId).show();

        $(this).addClass('active');

        return false;
    });
});

// tab UI Stockists
$(document).ready(function () {
    $('.view-navigation li').click(function () {
        $('.view-navigation li').removeClass('active');

        var tabId = $(this).find('a').attr('href');

        $('.views li').removeClass('active');

        $(this).addClass('active');
        $(tabId).addClass('active');

        return false;
    });
});

// tab UI Checkout
$(document).ready(function () {
    $('.tunnel-stages li').click(function () {
        $('.tunnel-stages li').removeClass('active');
        $('.tunnel-body').hide();

        var tabId = $(this).find('a').attr('href');

        $(this).addClass('active');
        $(tabId).show();

        return false;
    });
});

// checkout - Ship to my billing address
$(document).ready(function () {
    var isCheckboxChecked = $('#delivery-address').is(':checked');

    if (!isCheckboxChecked) {
        $('.delivery-form').addClass('active');
    }

    $('#delivery-address').change(function () {
        if (!$(this).is(':checked')) {
            $('.delivery-form').addClass('active');
        } else {
            $('.delivery-form').removeClass('active');
        }
    });
});