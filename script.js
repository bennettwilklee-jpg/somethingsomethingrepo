$(document).ready(function(){
    var caterpillar_tail = $("#tail")

    var caterpillar_head = $("#head")

    var caterpillar = $("#caterpillar")

    function animate() {
        for (var i = 1; i < 21; i++) {
            caterpillar.animate(
                {width: '100px'},
            'fast'


            ).animate(
                {width: '50px', 'margin-left': 50 * i + 'px'},
                'fast'
            )
            

        }
    }

var animate_button = $("#animator")

animate_button.click(function() {animate()})
  

});