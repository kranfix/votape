var GEngine = GEngine || {};

GEngine.GEffectTypeWriter = function( p_parentText )
{
	/** @type {GEngine.GText} */
	this.m_parent = p_parentText;
	/** @type {number} */
	this.m_timer = 0;
	/** @type {number} */
	this.m_delta = 200;
	/** @type {string} */
	this.m_baseText = this.m_parent.getText();
	/** @type {string} */
	this.m_currentText = "";
	/** @type {number} */
	this.m_currentLength = 0;
	/** @type {number} */
	this.m_state = GEngine.GEffectTypeWriter.ST_IDLE;
};

GEngine.GEffectTypeWriter.ST_IDLE 		= 0;
GEngine.GEffectTypeWriter.ST_RUNNING 	= 1;

GEngine.GEffectTypeWriter.prototype.state = function()
{
	return this.m_state;
};

GEngine.GEffectTypeWriter.prototype.start = function( p_delta )
{
	this.m_state = GEngine.GEffectTypeWriter.ST_RUNNING;
	this.m_timer = 0;
	this.m_delta = p_delta;
	this.m_baseText = this.m_parent.getText();
	this.m_currentText = "";
	this.m_currentPos = 0;
	this.m_parent.setText( "" );
};

GEngine.GEffectTypeWriter.prototype.update = function( p_dt )
{
	if ( this.m_state === GEngine.GEffectTypeWriter.ST_RUNNING )
	{
		this.m_timer += p_dt;
		if ( this.m_timer > this.m_delta )
		{
			this.m_timer = 0;
			this.m_currentLength++;
			if ( this.m_currentLength > this.m_baseText.length )
			{
				this.m_state = GEngine.GEffectTypeWriter.ST_IDLE;
			}
			else
			{
				this.m_currentText = this.m_baseText.substr( 0, this.m_currentLength );
				this.m_parent.setText( this.m_currentText );
			}
		}
	}
};

GEngine.GEffectTypeWriter.prototype.skipEffect = function()
{
	this.m_delta = 20;
};

GEngine.GEffectTypeWriter.prototype.free = function()
{
	this.m_parent = null;
};