// For Ajax testing
var json = [{
    "width": "230",
    "height": "300",
    "title": "hospital",
    "image": "images/2015/IMG_9363-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "",
    "image": "images/2015/IMG_9575-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/IMG_0975-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/IMG_9460-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/IMG_9478-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/IMG_9469-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/IMG_9754-s.jpg"
}, {

    "width": "230",
    "height": "300",
    "image": "images/2015/IMG_1037-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/IMG_9559-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/IMG_9447-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/IMG_1021-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/IMG_1006-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/IMG_0984-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/IMG_0981-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"

}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"

}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "image": "images/2015/"
}];


var APIURL = "http://www.wookmark.com/api/json?type=search&term=small";
var small_img = "http://www.appelsiini.net/projects/lazyload/img/grey.gif";
 

$(document).ready(function () {
    //
    // initialize at ready ;
    //
    $('#container').isotope({
        itemSelector: '.box',
        columnWidth: function (containerWidth) {
            return containerWidth / 12;
        },
        onLayout: function () {
            $(window).trigger("scroll");
        }
    });
    //
    // here i will be using data through api
    // For now I am using i am defining json manually
    // var json is defined at top of this code 
    // considering json return was success
    //$.getJSON(APIURL, function (json) {
    var newElements = "";
    $.each(json, function (key, value) {
 
        newElements +=
            '<div class="box">' +
            '<a href="' + value['image'] + ' " data-lightbox=" ' + value['image'] + ' "  data-title="' + value['title'] + ' "  >' +
            '<img class="lazy" src="' + small_img + '" data-original="' + value['image'] + '" width="' + value['width'] + '" height="' + value['height'] + '" style="width:'+value['width']+'px; height:'+value['height']+'px"/>' +
            '</div>' +
            '</a>';
    });

    var $newElems = $(newElements);

    $('#container').append($newElems).imagesLoaded(function () {

        $('#container').isotope('appended', $newElems);

        $("img.lazy").lazyload({ 
            effect : "fadeIn",
            skip_invisible : false
        });


    });
    //});
});