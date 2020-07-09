const { app, Menu } = require('electron');

const isMac = process.platform === 'darwin';

const template = [{
		label: 'Visualizar',
		submenu: [
			{ role: 'reload' },
		]}
	// { role: 'windowMenu' }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

module.exports = {
	menu
};
