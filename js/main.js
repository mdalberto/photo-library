// For Ajax testing
var json = [{
    "width": "230",
    "height": "300",
    "title": "1/31/15 - 2",
    "image": "images/2015/IMG_9360-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "1",
    "image": "images/2015/IMG_9363-s.jpg"
}, {   
    "width": "230",
    "height": "300",
    "title": "3",
    "image": "images/2015/IMG_0975-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "4",
    "image": "images/2015/IMG_9460-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "2",
    "image": "images/2015/IMG_9575-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "5",
    "image": "images/2015/IMG_9478-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "7",
    "image": "images/2015/IMG_9754-s.jpg"
}, {

    "width": "230",
    "height": "300",
    "title": "8",
    "image": "images/2015/IMG_1037-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "9",
    "image": "images/2015/IMG_9559-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "10",
    "image": "images/2015/IMG_9447-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "11",
    "image": "images/2015/IMG_1021-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "6",
    "image": "images/2015/IMG_9469-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "12",
    "image": "images/2015/IMG_1006-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "13",
    "image": "images/2015/IMG_0984-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "14",
    "image": "images/2015/IMG_0981-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "15",
    "image": "images/2015/IMG_0053-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "16",
    "image": "images/2015/IMG_0054-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "17",
    "image": "images/2015/IMG_0179-s.jpg"

}, {
    "width": "230",
    "height": "300",
    "title": "18",
    "image": "images/2015/IMG_0196-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "19",
    "image": "images/2015/IMG_0199-s.jpg"

}, {
    "width": "230",
    "height": "300",
    "title": "20",
    "image": "images/2015/IMG_0200-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "21",
    "image": "images/2015/IMG_0204-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "22",
    "image": "images/2015/IMG_0212-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "23",
    "image": "images/2015/IMG_0214-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "24",
    "image": "images/2015/IMG_0215-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "25",
    "image": "images/2015/IMG_0223-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "26",
    "image": "images/2015/IMG_0224-s.jpg"
}, {
    "width": "230",
    "height": "300",
    "title": "27",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "title": "28",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "title": "29",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "title": "30",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "title": "31",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "title": "32",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "title": "33",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "title": "34",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "title": "35",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "title": "36",
    "image": "images/2015/"
}, {
    "width": "230",
    "height": "300",
    "title": "37",
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