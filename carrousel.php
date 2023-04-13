<?php 
/**
 * 
 * Plugin Name: Carrousel
 * Author: Saadane Mohamedi
 * Author: https://github.com/SaadaneMohamedi/4w4-GR1
 * description: Permet d'afficher les images d'une galerie dans une boîte modale navigable
 */

function enfiler_script_css() {
    $version_css = filemtime(plugin_dir_path(__FILE__) . 'style.css');
    $version_js = filemtime(plugin_dir_path(__FILE__) . 'js/carrousel.js');
    wp_enqueue_style('style_carrousel', plugin_dir_url(__FILE__) . 'style.css', array(), $version_css);
    wp_enqueue_script('js_carrousel', plugin_dir_url(__FILE__) . 'js/carrousel.js', array(), $version_js, true);
}

add_action('wp_enqueue_scripts', 'enfiler_script_css');


function generer_boite(){
    return '<button class="carrousel__ouvrir">Ouvrir le carrousel</button>
            <div class="carrousel">
                <button class="carrousel__x">X</button>
                <figure class="carrousel__figure"></figure>
                <form class="carrousel__form"></form>
            </div>';
}

add_shortcode('carrousel', 'generer_boite');