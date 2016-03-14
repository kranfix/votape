

function SceneIntro( p_canvas )
{
	GEngine.GScene.call( this, p_canvas );

	this.m_introPanels = [];

	this.createPanels();
};

SceneIntro.prototype = Object.create( GEngine.GScene.prototype );

SceneIntro.prototype.createPanels = function()
{
	var t_panel1 = new BasePanel( 'introPanel1',
								  this.m_canvas );
	this.m_introPanels.push( t_panel1 );
};

SceneIntro.prototype.update = function( p_dt )
{
	GEngine.GScene.prototype.update.call( this, p_dt );

	for ( var q = 0; q < this.m_introPanels.length; q++ )
	{
		this.m_introPanels[q].update( p_dt );
	}
};
