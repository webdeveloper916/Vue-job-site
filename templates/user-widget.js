(function(document, window){
    // {# Sources for CSS below are in /src/user-widget. To build minified version use `npm run compress-widget-css` #}
    var css1 = ".JobdoneWidget__wrapper{background:#FFFFFF;position:relative;width:160px;height:auto;border:1px solid #e6e6e6;padding:2px 2px 4px 2px;display:flex;flex-direction:column;align-items:center}.JobdoneWidget__wrapper,.JobdoneWidget__wrapper *{box-sizing:border-box;outline:none}.JobdoneWidget__avatar{position:relative;width:154px;height:154px;overflow:hidden}.JobdoneWidget__avatar-image{position:absolute;top:0;left:0;z-index:2;width:100%;height:100%;background-repear:no-repeat;background-size:cover;color:#fff;display:flex;align-items:center;justify-content:center;text-transform:uppercase;font-size:110px;font-weight:400;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif}.JobdoneWidget__avatar-image-background{position:absolute;top:1px;left:1px;z-index:1;width:calc(100% - 2px);height:calc(100% - 2px);background:#0b83cd;color:#fff;display:flex;align-items:center;justify-content:center;text-transform:uppercase;font-size:110px;font-weight:400;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif}.JobdoneWidget__logo{position:absolute;top:138px;z-index:2;width:100%;height:35px;padding:5px 15px;border-radius:10px;background-color:#f2f2f2}.JobdoneWidget__logo-image{background-image:url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 247.18 48.53\"><defs><style>.cls-1{fill:#287fbf;}.cls-2{fill:#313749;}</style></defs><title>Asset 1</title><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Livello_1\" data-name=\"Livello 1\"><g id=\"logo\"><path class=\"cls-1\" d=\"M0,29.64H10.28v5.79a5,5,0,0,0,1.49,3.86,7.13,7.13,0,0,0,4.62,1.24A6.22,6.22,0,0,0,21,39q1.19-1.38,1.19-5.93V5a4.52,4.52,0,0,1,1.64-3.52A5.66,5.66,0,0,1,27.72,0h5.07V33.5a34.71,34.71,0,0,1-.45,6.62,10.52,10.52,0,0,1-1.94,3.72,13.24,13.24,0,0,1-5.51,3.58,30.39,30.39,0,0,1-8.35,1.1,22.72,22.72,0,0,1-7.75-1.1,11.15,11.15,0,0,1-5.51-3A9.54,9.54,0,0,1,.75,40.54,26.29,26.29,0,0,1,0,33.37Z\"/><path class=\"cls-1\" d=\"M39.34,44.55a13.53,13.53,0,0,1-4.47-6.69,28.64,28.64,0,0,1-1.34-8.76,25.77,25.77,0,0,1,1.12-7.45,15,15,0,0,1,3.5-6.2,15.88,15.88,0,0,1,10-4.9,24.75,24.75,0,0,1,11,.9,14.8,14.8,0,0,1,8.35,7.17A21.48,21.48,0,0,1,70,29.24a24.43,24.43,0,0,1-1,7.58,18.79,18.79,0,0,1-2.68,5.38,15,15,0,0,1-9.09,5.65,21.88,21.88,0,0,1-9.91.21A17.94,17.94,0,0,1,39.34,44.55ZM46.5,20.28q-3.13,3.17-2.83,9.44t2.53,8.76a6.73,6.73,0,0,0,3.13,1.86,7.66,7.66,0,0,0,4.55.14,7.54,7.54,0,0,0,4.1-3.1q1.79-2.48,1.94-8,0-5-1.71-7.45a7.63,7.63,0,0,0-3.95-3.17,7.8,7.8,0,0,0-4.47-.07A8,8,0,0,0,46.5,20.28Z\"/><path class=\"cls-2\" d=\"M209.92,48.53h-5.22a5.16,5.16,0,0,1-3.65-1.31,4.39,4.39,0,0,1-1.42-3.38V25.09a5.49,5.49,0,0,0-2.16-4.83,8.24,8.24,0,0,0-4.84-1.52,7.9,7.9,0,0,0-4.77,1.52,5.56,5.56,0,0,0-2.09,4.83V48.53H175.35V27q0-9.37,5.29-12.55A24.44,24.44,0,0,1,192.34,11a23.8,23.8,0,0,1,12.07,3.17q5.51,3.17,5.51,12.82Z\"/><path class=\"cls-2\" d=\"M239.13,36.54h7.45a15,15,0,0,1-6.26,8.82,20.07,20.07,0,0,1-11.62,3.17q-8.49,0-13.26-5.1t-4.77-14.2q0-8.82,4.62-13.79t13.26-5.1q8.94,0,13.86,5,4.77,5.1,4.77,14.2V31a2.22,2.22,0,0,1-.15,1H221.25q.15,4.28,2.24,6.34,1.94,2.21,5.81,2.21a9,9,0,0,0,4.32-1,2.1,2.1,0,0,0,.82-.48l.82-.76a3.09,3.09,0,0,1,1.12-1.1A4.71,4.71,0,0,1,239.13,36.54ZM221.25,25.78h15.2a8.55,8.55,0,0,0-2.09-5.52,7.48,7.48,0,0,0-5.51-1.93,7.59,7.59,0,0,0-5.36,1.93A7.59,7.59,0,0,0,221.25,25.78Z\"/><path class=\"cls-2\" d=\"M169.95,29.28l-.23.23-.51.58-1.41,1.59a12.77,12.77,0,0,1-2.2,5.65,10.17,10.17,0,0,1-5.55,3.9,11.12,11.12,0,0,1-6.16-.17,9.26,9.26,0,0,1-4.24-2.34q-3-3.12-3.43-11t3.83-11.89a11.15,11.15,0,0,1,4.44-2,11.34,11.34,0,0,1,6.05.09l.24.08c.89-.84,1.76-1.61,2.63-2.29l-.59-.24a24.75,24.75,0,0,0-11-.9,15.88,15.88,0,0,0-10,4.9,15,15,0,0,0-3.5,6.2,25.77,25.77,0,0,0-1.12,7.45,28.64,28.64,0,0,0,1.34,8.76A13.53,13.53,0,0,0,143,44.55a17.94,17.94,0,0,0,8,3.52,21.88,21.88,0,0,0,9.91-.21A15,15,0,0,0,170,42.2a18.79,18.79,0,0,0,2.68-5.38,24.43,24.43,0,0,0,1-7.58,25.8,25.8,0,0,0-.27-3.72C172.42,26.7,171.26,27.94,169.95,29.28Z\"/><path class=\"cls-1\" d=\"M157.87,24.35s-5.55-6.63-8.44-4.06,6.82,13.36,9,13.36S168,25,169.31,23.6c.58-.64,11.44-11.12,7.86-13.69C172.32,6.44,161.1,22.11,157.87,24.35Z\"/><path class=\"cls-1\" d=\"M103.82,14.83c-.27.28-.54.58-.8.89A19.94,19.94,0,0,0,98.68,27a18.75,18.75,0,0,1,.13,2.21q0,5.52-2.24,8.41a7.61,7.61,0,0,1-6.41,2.9,7.46,7.46,0,0,1-6.26-2.9Q81.81,35,81.81,29.23A12.55,12.55,0,0,1,84,21.37a7.77,7.77,0,0,1,6.41-2.76,7.3,7.3,0,0,1,6.11,2.9,8.36,8.36,0,0,1,.64.93,20.49,20.49,0,0,1,4-8c.32-.38.65-.74,1-1.09a15.59,15.59,0,0,0-15.64-1.65A12.17,12.17,0,0,0,81.81,16V5a4.36,4.36,0,0,0-1.49-3.31A5.09,5.09,0,0,0,76.75.28H71.68V31.85q0,9.79,6.11,13.24a26.53,26.53,0,0,0,13.26,3.45,25.48,25.48,0,0,0,7.53-1.17,12.57,12.57,0,0,0,6-3.79c3-3.58,3.72-8.23,3.72-13.93s-.74-10.34-3.72-13.93C104.36,15.41,104.09,15.11,103.82,14.83Z\"/><path class=\"cls-2\" d=\"M130.89.28a5.09,5.09,0,0,0-3.58,1.38A4.36,4.36,0,0,0,125.82,5V16a12.17,12.17,0,0,0-4.77-4.27,15.35,15.35,0,0,0-18,4q-4.47,5.38-4.47,13.93T103,43.57a11.14,11.14,0,0,0,.8.83,11.1,11.1,0,0,0,.8-.83,17.89,17.89,0,0,0,2.9-4.93,20.51,20.51,0,0,0,1.34-8.06c0-.41,0-.87,0-1.36q0-5,2.24-7.72a7.3,7.3,0,0,1,6.11-2.9,7.77,7.77,0,0,1,6.41,2.76,12.55,12.55,0,0,1,2.24,7.86q0,5.79-2.09,8.41a7.46,7.46,0,0,1-6.26,2.9,7.61,7.61,0,0,1-6.41-2.9,8.41,8.41,0,0,1-.61-.92,20.67,20.67,0,0,1-4.09,8.13c-.27.31-.55.61-.85.89a14.16,14.16,0,0,0,3.53,1.61,25.48,25.48,0,0,0,7.53,1.17,26.53,26.53,0,0,0,13.26-3.45Q136,41.64,136,31.85V.28Z\"/></g></g></g></svg>');background-repear:no-repeat;background-size:cover;width:100%;height:100%}.JobdoneWidget__title{color:#287fbf;font-family:Lato;font-size:14px;margin:20px 0 5px;text-transform:uppercase;height:35px;text-align:center;display:flex;align-items:center}.JobdoneWidget__rating{display:flex;width:80%;justify-content:space-between}.JobdoneWidget__rating-star{background-image:url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 19.17 18.15\"><defs><style>.cls-1{fill:#fbb03b;}</style></defs><title>Asset 6</title><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Livello_1\" data-name=\"Livello 1\"><polygon class=\"cls-1\" points=\"9.59 0 12.55 5.98 19.17 6.93 14.38 11.59 15.51 18.15 9.59 15.05 3.66 18.15 4.79 11.59 0 6.93 6.62 5.98 9.59 0\"/></g></g></svg>')}.JobdoneWidget__rating-none{background-image:url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 21.32 20.19\"><defs><style>.cls-1{fill:#fff;stroke:#e3e3e3;stroke-miterlimit:10;}</style></defs><title>Asset 6</title><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Livello_1\" data-name=\"Livello 1\"><polygon class=\"cls-1\" points=\"10.66 1.13 13.62 7.1 20.25 8.06 15.46 12.71 16.59 19.28 10.66 16.18 4.74 19.28 5.87 12.71 1.08 8.06 7.7 7.1 10.66 1.13\"/></g></g></svg>')}.JobdoneWidget__rating-star,.JobdoneWidget__rating-none{width:20px;height:20px;background-size:cover;background-repeat:no-repeat}.JobdoneWidget__hire-btn{background-color:#268aca;border:none;border-radius:5px;margin-top:10px;height:30px;width:100%;font-family:Lato;font-size:14px;color:#fff;font-weight:400;cursor:pointer}";

    function init() {
        try {
            var container = document.getElementById("jobdone-widget");
            addHtml(container);
        } catch (m) {
            console.log("Jobdone Badge Error: " + m.message)
        }
    }
    function addHtml(container) {
        var stars = "";

        rating = (rating == 0 ? 5 : rating);
        for (var i = 1; i <= 5; i++) {
            if(rating >= i) {
                stars += "<div class='JobdoneWidget__rating-star'></div>";
            } else {
                stars += "<div class='JobdoneWidget__rating-none'></div>";
            }
        }

        var inner = "";

        title = (title == '' ? 'freelancer' : title);
        inner =
          "<div class='JobdoneWidget__wrapper'>" +
          "<div class='JobdoneWidget__avatar'>" +
          "<div id='JobdoneWidget__avatar-image' class='JobdoneWidget__avatar-image'></div>" +
          "<div class='JobdoneWidget__avatar-image-background'>" + username.slice(0, 1) + "</div>" +
          "</div>" +
          "<div class='JobdoneWidget__logo'><div class='JobdoneWidget__logo-image'></div></div>" +
          "<a class='JobdoneWidget__title'>"+ title +"</a>" +
          "<div class='JobdoneWidget__rating'>"+ stars +"</div>" +
          "<a class='JobdoneWidget__hire-btn' href='http://jobdone.net/freelancer/" + username + ".html'>HIRE ME</a>" +
          "</div>";

        container.innerHTML = inner;
        addCss(container);
    }
    function addCss(container) {
        var head = document.getElementsByTagName("head")[0],
            version = Math.floor(1e3 * Math.random()) + 1,
            style = document.createElement("style");

        style.textContent = css1;

        style.textContent += ".JobdoneWidget__avatar-image { background-image: url(" + img_avatar + "); }";

        head.appendChild(style);
    }
    var rating = {{ user_rating_int }},
        title = '{{ user_headline }}',
        user_fullname = "@{{ user.username }}",
        user_email = "{{ user.email if widget_type == 1 else '' }}",
        user_phone = "{{ user.phone_number if widget_type == 1 and user.phone_number else '' }}",
        user_mobile = "",
        user_address = "",
        avatar_type = {{ avatar_type }}, // not used
        username = "{{ user.username }}",
        witget_type = {{ widget_type }}; // not used

    var show_img = true;

    var img_avatar = "{{ user.get_photo_url('p_up')}}";

    document.addEventListener("DOMContentLoaded", function() {
        console.info('Init Jobdone widget');
        init();
    });
}(document, window));