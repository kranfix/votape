
function DataPanels(){};

window['DataPanels'] = DataPanels;

DataPanels.panels = 
{
	'panelScene1':
		{
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 100,
			'yPos' : 50,
			'panelWidth' : 900,
			'panelHeight' : 500,
			'texts' :
				[
					{
						'xPos' : 380,
						'yPos' : 220,
						'textId' : 'STR_PANEL2_WARNING',
						'effect' : null//{ 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 400,
						'yPos' : 260,
						'textId' : 'STR_PANEL2_WARNING_INFO',
						'effect' : null//{ 'id' : 'typewriter', 'dt': 200 }
					},
				],
			'sprites' :
				[
					{ 'xPos' : 295, 'yPos' : 200, 'texture' : 'res_bg_panel_white.png', 'sx' : 4, 'sy' : 1.5, 'alpha' : 0.5 },
					{ 'xPos' : 220, 'yPos' : 200, 'texture' : 'res_warning_sign.png', 'sx' : 1, 'sy' : 1, 'alpha' : 1 },
				]
		},
	'panelScene2':
		{
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 100,
			'yPos' : 50,
			'panelWidth' : 900,
			'panelHeight' : 500,
			'texts' :
				[
					{
						'xPos' : 250,
						'yPos' : 200,
						'textId' : 'STR_TEAM_NAME_1',
						'effect' : null
					},
					{
						'xPos' : 450,
						'yPos' : 250,
						'textId' : 'STR_TEAM_NAME_2',
						'effect' : null
					},
				],
			'sprites' :
				[
					{ 'xPos' : 430, 'yPos' : 350, 'texture' : 'res_jne_logo.png', 'sx' : 0.5, 'sy' : 0.5, 'alpha' : 1 }
				]
		},
	'panelScene3':
		{
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 100,
			'yPos' : 50,
			'panelWidth' : 900,
			'panelHeight' : 500,
			'texts' :
				[
					{
						'xPos' : 450,
						'yPos' : 450,
						'textId' : 'STR_PATRIOTA',
						'effect' : null
					},
				],
			'sprites' :
				[
					{ 'xPos' : 430, 'yPos' : 150, 'texture' : 'res_team_logo.png', 'sx' : 0.75, 'sy' : 0.75, 'alpha' : 1 }
				]
		}
}