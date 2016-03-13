var GEngine = GEngine || {};

GEngine.App = function()
{
	GEngine.App.instance = this;

	var t_canvasRef = document.getElementById( 'demoInfoCanvas' );
	this.m_renderer = PIXI.autoDetectRenderer( 800, 600, { view: t_canvasRef,
														   autoResize: true } );
	this.m_mainCanvas = new PIXI.Container();
	this.m_appCanvas = new PIXI.Container();
	this.m_debugCanvas = new PIXI.Container();
	this.m_mainCanvas.addChild( this.m_appCanvas );
	this.m_mainCanvas.addChild( this.m_debugCanvas );
	this.m_timeBef = 0;
	this.m_timeNow = 0;
	this.m_timeDelta = 0;

	this.m_sceneManager = null;

	this.m_state = GEngine.App.ST_IDLE;

	this.init();
};

GEngine.App.instance = null;

GEngine.App.ST_IDLE  			= 0;
GEngine.App.ST_INITIAL_LOADING  = 1;
GEngine.App.ST_RUNNING 			= 2;
GEngine.App.ST_PAUSED  			= 3;

GEngine.App.prototype.init = function()
{
	/// Start loading all resources
	for ( var q = 0; q < window['Atlasses']['list'].length; q++ )
	{
		PIXI.loader.add( window['Atlasses']['RESOURCES_PATH'] +
						 window['Atlasses']['list'][q] );
	}
	PIXI.loader.load( this.onAtlassesLoaded );

	this.m_state = GEngine.App.ST_INITIAL_LOADING;

	console.info( 'App::init> started resources loading' );
};

GEngine.App.prototype.onAtlassesLoaded = function()
{
	console.info( 'App::onAtlassesLoaded> finished loading atlasses' );
	GEngine.App.instance.setState( GEngine.App.ST_RUNNING );
	GEngine.App.instance.onApplicationStarted();
};

GEngine.App.prototype.setState = function( p_state )
{
	this.m_state = p_state;
};

GEngine.App.prototype.getState = function()
{
	return this.m_state;
};

GEngine.App.prototype.onApplicationStarted = function()
{
	this.m_state = GEngine.App.ST_RUNNING;
	this.m_sceneManager = new GEngine.GSceneManager( this.m_appCanvas );
	console.info( 'App::onApplicationStarted> the application has just started' );
};

GEngine.App.prototype.onApplicationSuspended = function()
{
	console.info( 'App::onApplicationSuspended> the application has just been suspended' );
	this.m_state = GEngine.App.ST_PAUSED;
};

GEngine.App.prototype.onApplicationResumed = function()
{
	console.info( 'App::onApplicationResumed> the application has just been resumed' );
	this.m_state = GEngine.App.ST_RUNNING;
};

GEngine.App.prototype.onTick = function()
{
	this.m_timeNow = new Date();
	this.m_timeDelta = this.m_timeNow - this.m_timeBef;
	this.m_timeBef = this.m_timeNow;
	if ( this.m_state == GEngine.App.ST_RUNNING )
	{
		if ( this.m_sceneManager != null )
		{
			this.m_sceneManager.update( this.m_timeDelta );
		}
	}
};

GEngine.App.prototype.onRender = function()
{
	this.m_renderer.render( this.m_mainCanvas );
};