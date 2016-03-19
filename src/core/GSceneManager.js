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
GEngine.GSceneManager.SCENE_CANDIDATE_INFO 		= "sceneCandidateInfo";
GEngine.GSceneManager.SCENE_SELECT_PILARS 		= "sceneSelectPilars";
GEngine.GSceneManager.SCENE_PROPOSALS 			= "sceneProposals";
GEngine.GSceneManager.SCENE_INCORRECT 			= "sceneIncorrect";
GEngine.GSceneManager.SCENE_CORRECT 			= "sceneCorrect";

GEngine.GSceneManager.prototype.init = function()
{
	/// Set the common bg of the application
	this.m_appBg = PIXI.Sprite.fromFrame( 'res_bg_app_palace.png' );
	this.canvas.addChild( this.m_appBg );
	
	this.m_appBg.scale.x = GEngine.App.APP_WIDTH / this.m_appBg.width;
	this.m_appBg.scale.y = this.m_appBg.scale.x;

	this.changeScene( GEngine.GSceneManager.SCENE_INTRO );
	///this.changeScene( GEngine.GSceneManager.SCENE_INCORRECT );
	///this.changeScene( GEngine.GSceneManager.SCENE_CORRECT );
};

GEngine.GSceneManager.prototype.changeScene = function( p_sceneId, p_params )
{
	if ( this.m_currentScene != null )
	{
		this.m_currentScene.free();
	}
	switch ( p_sceneId )
	{
		case GEngine.GSceneManager.SCENE_SELECT_CANDIDATE:
			this.m_currentScene = new SceneSelectCandidates( this.canvas );
			break;

		case GEngine.GSceneManager.SCENE_CANDIDATE_INFO:
			
			break;

		case GEngine.GSceneManager.SCENE_SELECT_PILARS:
			this.m_currentScene = new SceneSelectPilars( this.canvas );
			break;

		case GEngine.GSceneManager.SCENE_PROPOSALS:
			this.m_currentScene = new SceneQuestions( this.canvas, p_params );
			break;

		case GEngine.GSceneManager.SCENE_INTRO:
			this.m_currentScene = new SceneIntro( this.canvas );
			break;

		case GEngine.GSceneManager.SCENE_INCORRECT:
			this.m_currentScene = new SceneIncorrect( this.canvas, p_params );
			break;

		case GEngine.GSceneManager.SCENE_CORRECT:
			this.m_currentScene = new SceneCorrect( this.canvas, p_params );
			break;
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