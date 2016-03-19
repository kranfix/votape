

function SceneIntro( p_canvas )
{
	GEngine.GScene.call( this, p_canvas );

	this.m_introPanels = [];

	this.m_currentPanel = null;
	this.m_panelIndx = -1;

	this.m_state = SceneIntro.ST_RUNNING;

	AppSettings.instance.resetData();

	this.createPanels();
};

SceneIntro.prototype = Object.create( GEngine.GScene.prototype );

SceneIntro.NUM_INTRO_PANELS = 11;
SceneIntro.ST_RUNNING  = 0;
SceneIntro.ST_FINISHED = 1;

SceneIntro.prototype.createPanels = function()
{
	for ( var q = 0; q < SceneIntro.NUM_INTRO_PANELS; q++ )
	{
		var t_panel = new IntroPanel( 'panelScene' + ( q + 1 ),
									  this.m_canvas );
		this.m_introPanels.push( t_panel );
	}
	///var t_panel1 = new IntroPanel( 'panelScene1',
	///							   this.m_canvas );
	///this.m_introPanels.push( t_panel1 );

	this.m_panelIndx = 0;
	this.m_currentPanel = this.m_introPanels[this.m_panelIndx];
	this.m_currentPanel.onEnter();
};

SceneIntro.prototype.update = function( p_dt )
{
	GEngine.GScene.prototype.update.call( this, p_dt );

	if ( this.m_state != SceneIntro.ST_RUNNING )
	{
		return;
	}

	if ( this.m_currentPanel != null )
	{
		this.m_currentPanel.update( p_dt );
		if ( this.m_currentPanel.getState() == IntroPanel.ST_FINISHED )
		{
			this.m_panelIndx++;
			if ( this.m_panelIndx > this.m_introPanels.length - 1 )
			{
				this.m_state = SceneIntro.ST_FINISHED;
				GEngine.GSceneManager.instance.changeScene( GEngine.GSceneManager.SCENE_SELECT_CANDIDATE );
			}
			else
			{
				if ( this.m_currentPanel != null )
				{
					this.m_currentPanel.free();
				}
				this.m_currentPanel = this.m_introPanels[this.m_panelIndx];
				this.m_currentPanel.onEnter();
			}
		}
	}
};
