
function DataPanels(){};

window['DataPanels'] = DataPanels;

DataPanels.panels = 
{
	'panelScene1':
		{
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 100,
			'yPos' : 100,
			'panelWidth' : 700,
			'panelHeight' : 400,
			'texts' :
				[
					{
						'xPos' : 360,
						'yPos' : 150,
						'textId' : 'STR_TEAM_NAME',
						'effect' : null
					},				
				],
			'sprites' :
				[
					{ 'xPos' : 430, 'yPos' : 350, 'texture' : 'res_jne_logo.png', 'sx' : 0.5, 'sy' : 0.5 }
				]
		},
	'panelScene2':
		{
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 50,
			'yPos' : 50,
			'panelWidth' : 600,
			'panelHeight' : 500,
			'texts' :
				[
					{
						'xPos' : 100,
						'yPos' : 40,
						'textId' : 'STR_PANEL1_SCENE_INFO',
						'effect' : null//{ 'id' : 'typewriter', 'dt': 200 }
					},
				],
			'sprites' :
				[
					{ 'xPos' : 20, 'yPos' : 20, 'texture' : 'res_warning_sign.png', 'sx' : 1, 'sy' : 1 }
				]
		},
	'panelScene3':
		{
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 50,
			'yPos' : 50,
			'panelWidth' : 600,
			'panelHeight' : 500,
			'texts' :
				[
					{
						'xPos' : 100,
						'yPos' : 40,
						'textId' : 'STR_TEAM_NAME',
						'effect' : null
					},
				],
			'sprites' :
				[
				]
		},
	'panelScene4':
		{
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 50,
			'yPos' : 50,
			'panelWidth' : 600,
			'panelHeight' : 500,
			'texts' :
				[
				],
			'sprites' :
				[
					{ 'xPos' : 200, 'yPos' : 200, 'texture' : 'res_gamename.png', 'sx' : 1, 'sy' : 1 }
				]
		}


}