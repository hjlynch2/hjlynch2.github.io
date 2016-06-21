var ieRotate = new function () {
    var me = this,
        $rocket,
        initialPosition,
        radius = 150;
    
    /* 
     * Initialize the animation here.
     */
    me.init = function () {
        
        // Caches the jQuery object for performance reasons.
        $rocket = $('#rocket');
        
        // Stores the initial position of rocket.  Used later when calculating
        // the orbit animation.
        initialPosition = {
            x: parseInt($rocket.css('left')),
            y: parseInt($rocket.css('top'))
        };
        
        // starts the aniamtion.
        rotateOnce();
    }
    
   
/*
 * Replacement function for the one in the previous example where the
 * Enterprise always faces the way it is travelling.  
 */
function rotateOnce() {
    
    $enterprise.css('text-indent', 0);
    
    $enterprise.animate(
        {
            'text-indent': 2*Math.PI
        }, {
            step: function (now) {
                
                /* 
                 * Unlike the other example, we need to have the object
                 * (in this case the Enterprise) rotate while it is 
                 * travelling around the sun, so we use cssSandpaper to
                 * do this work.
                 */
                cssSandpaper.setTransform($enterprise[0], 
                    'rotate(' + now + 'rad) translateX(250px)');
            },
            
            duration: 20000,
            
            easing: 'linear',
            
            complete: rotateOnce
        }
    );
}

$(document).ready(ieRotate.init);