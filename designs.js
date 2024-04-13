import {Tile, Tilestream} from "./tilestream.js";

let axonTiles = [
    new Tile('img/pawpals/splash.png', '', ''),
    new Tile('img/pawpals/SignUp_500px.png', '', ''),
    new Tile('img/pawpals/Recovery_800px.png', '', ''),
    new Tile('img/ui/AUDIT_OL.jpg', '', ''),
    new Tile('img/ui/ms/hard.png', '', ''),
    new Tile('img/ui/ms/help.png', '', ''),
    new Tile('img/pawpals/AppFlowChart5.png', '', ''),
    new Tile('img/pawpals/TechStack.png', '', ''),
    new Tile('img/axon/axon_12.png', '', ''),
    new Tile('img/axon/axon_2.png', '', ''),
    new Tile('img/lg/AXON_COMP.png', '', ''),
    new Tile('img/lg/LG_WALL2.png', '', ''),
    new Tile('img/lg/LG_WALL3.png', '', ''),
    new Tile('img/lg/LG_VIK.png', '', ''),
    new Tile('img/axon/axon_3.png', '', ''),
    new Tile('img/axon/axon_4.png', '', ''),
    new Tile('img/axon/axon_11.png', '', ''),
    new Tile('img/axon/AXON_FA.png', '', ''),
    new Tile('img/axon/AXON_BBC.png', '', ''),
    new Tile('img/axon/axon_10.png', '', ''),
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
stream.desktop(6, 14, 5);
stream.tablet(1750, 4, 8, 5);
stream.mobile(800, 3, 5, 5);


stream.render(document.getElementById('tilestream'));