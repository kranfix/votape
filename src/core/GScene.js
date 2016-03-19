var GEngine = GEngine || {};



GEngine.GScene = function( p_canvas )
{
	/** @type {PIXI.Container} */
	this.m_canvas = new PIXI.Container();
	p_canvas.addChild( this.m_canvas );
	/** @type {Array.<GSprite>} */
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
			this.m_canvas.addChild( this.m_controls[q] );
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

GEngine.GScene.prototype.getControl = function( p_controlId )
{
	for ( var q = 0; q < this.m_controls.length; q++ )
	{
		if ( p_controlId == this.m_controls[q].gId )
		{
			return this.m_controls[q];
		}
	}
	return null;
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
			this.m_canvas.removeChild( this.m_controls[q] );
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

GEngine.GScene.prototype.onPointerDown = function( p_id )
{

};

GEngine.GScene.prototype.onPointerUp = function( p_id )
{

};

GEngine.GScene.prototype.onPointerOver = function( p_id )
{

};

GEngine.GScene.prototype.onPointerOut = function( p_id )
{

};