import {Tile, Tilestream} from "./tilestream.js";

let axonTiles = [
    new Tile('img/axon/axon_1.png', '', ''),
    new Tile('img/axon/axon_2.png', '', ''),
    new Tile('img/axon/axon_3.png', '', ''),
    new Tile('img/axon/axon_4.png', '', ''),
    new Tile('img/axon/axon_21.png', '', ''),
    new Tile('img/axon/axon_11.png', '', ''),
    new Tile('img/axon/AXON_FA.png', '', ''),
    new Tile('img/axon/AXON_BBC.png', '', ''),
    new Tile('img/axon/axon_12.png', '', ''),
    
    new Tile('img/axon/axon_6.png', '', ''),
    new Tile('img/axon/axon_13.png', '', ''),
    new Tile('img/axon/axon_8.png', '', ''),
    
    new Tile('img/axon/axon_10.png', '', ''),
    
    new Tile('img/axon/axon_7.png', '', ''),
    new Tile('img/axon/axon_14.png', '', ''),
    new Tile('img/axon/axon_15.jpg', '', ''),
    new Tile('img/axon/axon_16.png', '', ''),
    new Tile('img/axon/axon_17.png', '', ''),
    new Tile('img/axon/axon_18.png', '', ''),
    new Tile('img/axon/axon_19.png', '', ''),
    new Tile('img/axon/axon_20.png', '', ''),
    new Tile('img/axon/axon_22.gif', '', ''),
    new Tile('img/axon/AXON_AVI.png', '', ''),
    new Tile('img/axon/AXON_AVI2.png', '', ''),
    new Tile('img/axon/axon_5.png', '', ''),
    
    new Tile('img/axon/AXON_CLASSIFIED.png', '', ''),
    new Tile('img/axon/AXON_DOOZIIE.png', '', ''),
    new Tile('img/axon/AXON_HAZOD.png', '', ''),
    new Tile('img/axon/AXON_JERKY.png', '', ''),
    new Tile('img/axon/AXON_NY.png', '', ''),
    new Tile('img/axon/AXON_OUTCASTT.png', '', ''),
    new Tile('img/axon/AXON_SIRE.png', '', ''),
    new Tile('img/axon/AXON_SPLASH.png', '', ''),
    new Tile('img/axon/AXON_TOURNEYS.png', '', ''),
    new Tile('img/axon/AXON_VICARIOUS.png', '', ''),
    new Tile('img/axon/axon_9.png', '', ''),
]

let stream = new Tilestream(axonTiles);
stream.desktop(4, 6.5, 5);

// stream.render(document.getElementById('design'));