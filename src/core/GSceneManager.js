var GEngine = GEngine || {};

GEngine.GSceneManager = function( p_mainCanvas )
{
	GEngine.GSceneManager.instance = this;

	this.canvas = new PIXI.Container();
	p_mainCanvas.addChild( this.canvas );
	this.m_currentScene = null;

	this.init();
};

GEngine.GSceneManager.instance = null;
GEngine.GSceneManager.SCENE_INTRO 				= "sceneIntro";
GEngine.GSceneManager.SCENE_SELECT_CANDIDATE 	= "sceneSelectCandidate";
GEngine.GSceneManager.SCENE_SELECT_CANDIDATE 	= "sceneSelectCandidate";
GEngine.GSceneManager.SCENE_CANDIDATE_INFO 		= "sceneCandidateInfo";

GEngine.GSceneManager.prototype.init = function()
{
	this.changeScene( GEngine.GSceneManager.SCENE_INTRO );
};

GEngine.GSceneManager.prototype.changeScene = function( p_sceneId )
{
	switch ( p_sceneId )
	{
		case GEngine.GSceneManager.SCENE_SELECT_CANDIDATE:

		case GEngine.GSceneManager.SCENE_CANDIDATE_INFO:

		case GEngine.GSceneManager.SCENE_INTRO:
			this.m_currentScene = new SceneIntro( this.canvas );
	}
};

GEngine.GSceneManager.prototype.update = function( p_dt )
{
	///console.log( "GSceneManager::update> tick - " + p_dt );
	if ( this.m_currentScene )
	{
		this.m_currentScene.update( p_dt );
	}
};

GEngine.GSceneManager.prototype.free = function()
{
	if ( this.canvas != null )
	{
		this.canvas.parent.removeChild( this.canvas );
		this.canvas = null;
	}
};