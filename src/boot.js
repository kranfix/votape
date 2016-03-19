
var G_ROOT_PATH = 'src/';

var G_BOOT_FILES = 
[
	"candidatesScene/Candidate.js",
	"AppSettings.js",
	"core/GSprite.js",
	"core/GScene.js",
	"core/ui/GEffectTypeWriter.js",
	"core/ui/GText.js",
	"core/App.js",
	"core/GSceneManager.js",
	"introScene/BasePanel.js",
	"introScene/IntroPanel.js",
	"introScene/SceneIntro.js",
	"candidatesScene/SceneSelectCandidates.js",
	"candidatesScene/SceneSelectPilars.js",
	"candidatesScene/SceneQuestions.js",
	"candidatesScene/SceneBaseResult.js",
	"candidatesScene/SceneIncorrect.js",
	"candidatesScene/SceneCorrect.js"
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