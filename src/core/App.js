var GEngine = GEngine || {};

GEngine.App = function()
{
	GEngine.App.instance = this;

	var t_canvasRef = document.getElementById( 'demoInfoCanvas' );
	t_canvasRef.width = window.innerWidth;	
	t_canvasRef.height = window.innerHeight;

	GEngine.App.APP_WIDTH 	= t_canvasRef.width;///window['config']['APP_WIDTH'];
	GEngine.App.APP_HEIGHT 	= t_canvasRef.height;///window['config']['APP_HEIGHT'];
	this.m_renderer = PIXI.autoDetectRenderer( GEngine.App.APP_WIDTH, 
											   GEngine.App.APP_HEIGHT,
											    { view: t_canvasRef,
												  autoResize: true,
												  backgroundColor: 0x000000 } 
											  );
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

GEngine.App.APP_WIDTH 	= 800;
GEngine.App.APP_HEIGHT 	= 600;

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

	/// resize for the first time
	window.addEventListener( 'resize', this.onResize );

	this.onResize();
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

GEngine.App.prototype.onResize = function()
{
	/// Simple resize
	/// Calculate the ratio of the dimensions
	///var x_ratio = window.innerWidth / GEngine.App.APP_WIDTH;
	///var y_ratio = window.innerHeight / GEngine.App.APP_HEIGHT;

	/// Resize the main canvas using the x_ratio ( we are asumming landscape mode )
	var t_renderer = GEngine.App.instance.renderer();
	var t_view = t_renderer.view;
	///t_renderer.width = t_view.width = GEngine.App.APP_WIDTH * x_ratio;
	///t_renderer.height = t_view.height = GEngine.App.APP_HEIGHT * x_ratio;

	/// Temporal resizing
	t_view.width  = window.innerWidth;
	t_view.height = window.innerHeight;
};

GEngine.App.prototype.renderer = function()
{
	return this.m_renderer;
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
	this.m_timeDelta = ( this.m_timeDelta > 50 ? 50 : this.m_timeDelta );
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