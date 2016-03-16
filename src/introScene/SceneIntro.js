

function SceneIntro( p_canvas )
{
	GEngine.GScene.call( this, p_canvas );

	this.m_introPanels = [];

	this.m_currentPanel = null;
	this.m_panelIndx = -1;


	this.createPanels();
};

SceneIntro.prototype = Object.create( GEngine.GScene.prototype );

SceneIntro.prototype.createPanels = function()
{
	var t_panel1 = new IntroPanel( 'panelScene1',
								   this.m_canvas );
	this.m_introPanels.push( t_panel1 );

	this.m_panelIndx = 0;
	this.m_currentPanel = this.m_introPanels[this.m_panelIndx];
	this.m_currentPanel.onEnter();
};

SceneIntro.prototype.update = function( p_dt )
{
	GEngine.GScene.prototype.update.call( this, p_dt );

	if ( this.m_currentPanel != null )
	{
		this.m_currentPanel.update( p_dt );
	}
};
