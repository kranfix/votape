var GEngine = GEngine || {};



GEngine.GScene = function( p_canvas )
{
	this.m_canvas = new PIXI.Container();
	p_canvas.addChild( p_canvas );

	this.m_controls = [];

	this.createScene();
	this.init();
};

GEngine.GScene.prototype.createScene = function()
{
	
};

GEngine.GScene.prototype.init = function()
{
	for ( var q = 0; q < this.m_controls.length; q++ )
	{
		if ( this.m_controls[q] != null )
		{
			this.m_controls[q].setOwner( this );
		}
	}
};

GEngine.GScene.prototype.update = function( p_dt )
{
	for ( var q = 0; q < this.m_controls.length; q++ )
	{
		if ( this.m_controls[q] != null )
		{
			this.m_controls[q].update( p_dt );
		}
	}
};

GEngine.GScene.prototype.free = function()
{
	if ( this.m_controls != null )
	{
		for ( var q = 0; q < this.m_controls.length; q++ )
		{
			if ( this.m_controls[q] == null )
			{
				continue;
			}
			this.m_controls[q].free();
			this.m_controls[q] = null;
		}
		this.m_controls = null;
	}


	if ( this.m_canvas != null )
	{
		this.m_canvas.parent.removeChild( this.m_canvas );
		this.m_canvas = null;
	}
};

GEngine.GScene.prototype.onPointerDown = function()
{

};

GEngine.GScene.prototype.onPointerUp = function()
{

};

GEngine.GScene.prototype.onPointerOver = function()
{

};

GEngine.GScene.prototype.onPointerOut = function()
{

};