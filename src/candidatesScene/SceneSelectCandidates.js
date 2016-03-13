

function SceneSelectCandidates( p_canvas )
{
	GEngine.GScene.call( this, p_canvas );
};

SceneSelectCandidates.prototype = Object.create( GEngine.GScene );

SceneSelectCandidates.GRID_ROWS = 3;
SceneSelectCandidates.GRID_COLS = 3;

SceneSelectCandidates.INIT_OFF_X = 100;
SceneSelectCandidates.INIT_OFF_Y = 100;

SceneSelectCandidates.DX = 80;
SceneSelectCandidates.DY = 80;
SceneSelectCandidates.BUTTONS_BASE_ID = "btnsPlayer_";

SceneSelectCandidates.prototype.createScene = function()
{
	GEngine.GScene.prototype.createScene.call( this );

	// For now, create a hardcoded grid of choices
	for ( var t_row = 0; t_row < SceneSelectCandidates.GRID_ROWS; t_row++ )
	{
		for ( var t_col = 0; t_col < SceneSelectCandidates.GRID_COLS; t_col++ )
		{
			/*
			var t_canvas = new PIXI.Container();
			this.m_canvas.addChild()
			var t_px = SceneSelectCandidates.INIT_OFF_X + t_col * DW;
			var t_py = SceneSelectCandidates.INIT_OFF_Y + t_row * DH;
			var t_id = SceneSelectCandidates.BUTTONS_BASE_ID + 
					   t_row * SceneSelectCandidates.GRID_COLS + 
					   t_col;
			var t_newControl = new CandidateInteractiveUI( t_px, t_py, 
														   t_id )
														   */
		}
	}
};

