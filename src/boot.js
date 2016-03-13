
var G_ROOT_PATH = 'src/';

var G_BOOT_FILES = 
[
	"core/GSprite.js",
	"core/GScene.js",
	"core/App.js",
	"core/GSceneManager.js"
]

function includeScript( p_script )
{
    var t_jsTag = document.createElement( 'script' );
    t_jsTag.type = 'text/javascript';
    t_jsTag.src  = p_script;

    document.head.appendChild( t_jsTag );
};


function includeAllRegisteredFiles()
{
	for ( var q = 0; q < G_BOOT_FILES.length; q++ )
	{
		includeScript( G_ROOT_PATH + G_BOOT_FILES[q] );
	}
};

includeAllRegisteredFiles();