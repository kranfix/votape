

function CandidateInteractiveUI( p_x, p_y, p_id, p_canvas, p_textureId )
{
	GEngine.GuiControl.call( p_id, p_canvas, p_textureId );

	this.x = p_x;
	this.y = p_y;

	this.m_state = ST_NORMAL;
};

CandidateInteractiveUI.ST_NORMAL = 0;
CandidateInteractiveUI.ST_PRE_SELECT = 1;
CandidateInteractiveUI.ST_SELECTED 	 = 2;

CandidateInteractiveUI.prototype = Object.create( GEngine.GuiControl.prototype );

CandidateInteractiveUI.prototype.update = function( p_dt )
{
	GEngine.GuiControl.prototype.update.call( this, p_dt );
};