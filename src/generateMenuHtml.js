import { getMenu } from './menu_scraper.js';

export async function generateMenuTable (mensaDictionary) {
	const menuTables = [];
	for (const mensa in mensaDictionary) {
		const mensaName = mensaDictionary[mensa]['name'];
		try {
			// call the scraper and get all menu HTML
			const menuDivComponent = await getMenu(mensaDictionary[mensa]['url']);
			const menuTable = `
			<!-- START CENTERED WHITE CONTAINER -->
			<table id="_${mensa}" name="_${mensa}" role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">
				<!-- START MAIN CONTENT AREA -->
				<tr>
					<td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
					  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
						<tr>
						  <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
						  	<a name="${mensa}" style="color:#000000; display: block">
								<h3 style="#000000">${mensaName}</h3>
							</a>
							<div id="${mensaName}" style="background-color:#f6f6f6; color:#000000; border-radius: 4px 4px 0px 0px; padding: 8px;">
								${menuDivComponent}
							<div>
						  </td>
						</tr>
					  </table>
					</td>
				  </tr>
				<!-- END MAIN CONTENT AREA -->
			</table>
			<!-- END START CENTERED WHITE CONTAINER -->
			`; 
			
			menuTables.push(menuTable);

		} catch(error) {
			console.log(error);
		}

	}

	return menuTables;
} 



