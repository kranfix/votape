var GEngine = GEngine || {};


GEngine.GSprite = function( p_textureId )
{
	PIXI.Sprite.call( this, p_textureId );

	this.m_owner = null;

	this.on( 'mousedown', onPointerDown );
	this.on( 'touchstart', onPointerDown );
	this.on( 'mouseup', onPointerUp );
	this.on( 'touchend', onPointerUp );
	this.on( 'mouseover', onPointerOver );
	this.on( 'mouseover', onPointerOut );
};

GEngine.GSprite.prototype = Object.create( PIXI.Sprite.prototype );

GEngine.GSprite.prototype.setOwner = function( p_owner )
{
	this.m_owner = p_owner;
};

GEngine.GSprite.prototype.getOwner = function()
{
	return this.m_owner;
};

GEngine.GSprite.prototype.onPointerDown = function()
{
	if ( this.m_owner == null )
	{
		return;
	}
	if ( this.m_owner['onPointerDown'] )
	{
		this.m_owner['onPointerDown']();
	}
};

GEngine.GSprite.prototype.onPointerUp = function()
{
	if ( this.m_owner == null )
	{
		return;
	}
	if ( this.m_owner['onPointerUp'] )
	{
		this.m_owner['onPointerUp']();
	}
};

GEngine.GSprite.prototype.onPointerOver = function()
{
	if ( this.m_owner == null )
	{
		return;
	}
	if ( this.m_owner['onPointerOver'] )
	{
		this.m_owner['onPointerOver']();
	}
};

GEngine.GSprite.prototype.onPointerOut = function()
{
	if ( this.m_owner == null )
	{
		return;
	}
	if ( this.m_owner['onPointerOut'] )
	{
		this.m_owner['onPointerOut']();
	}
};

GEngine.GSprite.prototype.free = function()
{
	this.m_owner = null;
};
