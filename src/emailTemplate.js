import {generateMenuTable} from './generateMenuHtml.js';
import {eurToCnyCurrencyRate} from './exchangeRate_scraper.js';

const mensaMap = {
	'sued': {name: 'Mensa TechFak', url: 'https://www.werkswelt.de/index.php?id=sued&setlang=en'},
	'lmpl': {name: 'Mensa Langemarckplatz Erlangen', url: 'https://www.werkswelt.de/index.php?id=lmpl&setlang=en'},
	'mohm': {name: 'Mensa Ohm Nürnberg', url: 'https://www.werkswelt.de/index.php?id=mohm&setlang=en'},
	'isch': {name: 'Mensa Insel Schütt', url: 'https://www.werkswelt.de/index.php?id=isch&setlang=en'},
}

export async function emailHTML () {

	try {
		// get mensa menu html
		const allMenuTablesArray = await generateMenuTable(mensaMap);
		const allMenuTables = allMenuTablesArray.join('');

		// get EUR-CNY exchange rate 
		const eurToCnyData = await eurToCnyCurrencyRate();

		return `
		<!DOCTYPE html>
		<html>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
				<title>You everday menu board!</title>
				<style>
					@media only screen and (max-width: 620px) {
						table.body h1 {
							font-size: 28px !important;
							margin-bottom: 10px !important;
						}

						table.body p,
						table.body ul,
						table.body ol,
						table.body td,
						table.body span,
						table.body a {
							font-size: 16px !important;
						}

						table.body .wrapper,
						table.body .article {
							padding: 10px !important;
						}

						table.body .content {
							padding: 0 !important;
						}

						table.body .container {
							padding: 0 !important;
							width: 100% !important;
						}

						table.body .main {
							border-left-width: 0 !important;
							border-radius: 0 !important;
							border-right-width: 0 !important;
						}

						table.body .btn table {
							width: 100% !important;
						}

						table.body .btn a {
							width: 100% !important;
						}

						table.body .img-responsive {
							height: auto !important;
							max-width: 100% !important;
							width: auto !important;
						}
					}
					@media all {
						.ExternalClass {
							width: 100%;
						}

						.ExternalClass,
						.ExternalClass p,
						.ExternalClass span,
						.ExternalClass font,
						.ExternalClass td,
						.ExternalClass div {
							line-height: 100%;
						}

						.apple-link a {
							color: inherit !important;
							font-family: inherit !important;
							font-size: inherit !important;
							font-weight: inherit !important;
							line-height: inherit !important;
							text-decoration: none !important;
						}

						#MessageViewBody a {
							color: inherit;
							text-decoration: none;
							font-size: inherit;
							font-family: inherit;
							font-weight: inherit;
							line-height: inherit;
						}

						.btn-primary table td:hover {
							background-color: #34495e !important;
						}

						.btn-primary a:hover {
							background-color: #34495e !important;
							border-color: #34495e !important;
						}
					}
				</style>
			</head>
			<body
				style="
					background-color: #f6f6f6;
					font-family: sans-serif;
					-webkit-font-smoothing: antialiased;
					font-size: 14px;
					line-height: 1.4;
					margin: 0;
					padding: 0;
					-ms-text-size-adjust: 100%;
					-webkit-text-size-adjust: 100%;
				"
			>
				<span
					class="preheader"
					style="
						color: transparent;
						display: none;
						height: 0;
						max-height: 0;
						max-width: 0;
						opacity: 0;
						overflow: hidden;
						mso-hide: all;
						visibility: hidden;
						width: 0;
					"
					>Check out all mensa menu here!</span
				>
				<table
					role="presentation"
					border="0"
					cellpadding="0"
					cellspacing="0"
					class="body"
					style="
						border-collapse: separate;
						mso-table-lspace: 0pt;
						mso-table-rspace: 0pt;
						background-color: #ffffff;
						width: 100%;
					"
					width="100%"
					bgcolor="#f6f6f6"
				>
					<tr>
						<!-- left blank space -->
						<td
							style="
								font-family: sans-serif;
								font-size: 14px;
								vertical-align: top;
							"
							valign="top"
						>
							&nbsp;
						</td>
						<!-- end of left blank space-->
						<!-- white container in the middle -->
						<td
							class="container"
							style="
								font-family: sans-serif;
								font-size: 14px;
								vertical-align: top;
								display: block;
								max-width: 580px;
								padding: 10px;
								width: 580px;
								margin: 0 auto;
							"
							width="580"
							valign="top"
						>
							<div
								class="content"
								style="
									box-sizing: border-box;
									display: block;
									margin: 0 auto;
									max-width: 580px;
									padding: 10px;
								"
							>

								<!-- START CURRENY RATE -->
							<table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">
								<!-- START MAIN CONTENT AREA -->
								<tr>
									<td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
									  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
										<tr>
										  <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
											<div style="background-color:#f6f6f6; color:#000000; border-radius: 4px 4px 0px 0px; padding: 8px;">
											EUR/CNY Exchange Rate:	${eurToCnyData}
											<div>
										  </td>
										</tr>
									  </table>
									</td>
								  </tr>
							</table>
								<!-- END CURRENY RATE -->

								<!-- START MENU -->
								${allMenuTables}
								<!-- END MENU -->

								<!-- START FOOTER -->
								<div
									class="footer"
									style="
										clear: both;
										margin-top: 10px;
										text-align: center;
										width: 100%;
									"
								>
									<table
										role="presentation"
										border="0"
										cellpadding="0"
										cellspacing="0"
										style="
											border-collapse: separate;
											mso-table-lspace: 0pt;
											mso-table-rspace: 0pt;
											width: 100%;
										"
										width="100%"
									>
										<tr>
											<td
												class="content-block"
												style="
													font-family: sans-serif;
													vertical-align: top;
													padding-bottom: 10px;
													padding-top: 10px;
													color: #999999;
													font-size: 12px;
													text-align: center;
												"
												valign="top"
												align="center"
											>
												<span
													class="apple-link"
													style="
														color: #999999;
														font-size: 12px;
														text-align: center;
													"
													>Menu Letter v1.0.0 Created by
													Ziqi</span
												>
												<br />
												Any feedback?
												<a
													href="mailto:1006577139@qq.com?subject=Feedback of your menu letter"
													style="
														text-decoration: underline;
														color: #999999;
														font-size: 12px;
														text-align: center;
													"
													>Send Feedback</a
												>
											</td>
										</tr>
										<tr>
											<td
												class="content-block powered-by"
												style="
													font-family: sans-serif;
													vertical-align: top;
													padding-bottom: 10px;
													padding-top: 10px;
													color: #999999;
													font-size: 12px;
													text-align: center;
												"
												valign="top"
												align="center"
											>
												Have a lovely day!  :)
											</td>
										</tr>
									</table>
								</div>
								<!-- END FOOTER -->
							</div>
						</td>
						<!-- end of white container in the middle -->
						<!-- right blank space-->
						<td
							style="
								font-family: sans-serif;
								font-size: 14px;
								vertical-align: top;
							"
							valign="top"
						>
							&nbsp;
						</td>
						<!-- end of right blank space -->
					</tr>
				</table>

				<script src="./app.js"></script>
			</body>
		</html>`;
	} catch(error) {
		console.log(error);
	}

}

/*

export const emailHTML = generateMenuTable(mensaMap).then((data) => {
	const allMenuTables = data.join('');
	const eurToCnyCurrencyResult = eurToCnyCurrencyRate();
	eurToCnyCurrencyResult.then((data) => {
		var eurToCnyData = data;
		console.log(eurToCnyData);
	}).catch((err) => {
		console.log(err);
	})
	console.log(eurToCnyData);
	
	return `
	<!DOCTYPE html>
	<html>
		<head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
			<title>Simple Transactional Email</title>
			<style>
				@media only screen and (max-width: 620px) {
					table.body h1 {
						font-size: 28px !important;
						margin-bottom: 10px !important;
					}

					table.body p,
					table.body ul,
					table.body ol,
					table.body td,
					table.body span,
					table.body a {
						font-size: 16px !important;
					}

					table.body .wrapper,
					table.body .article {
						padding: 10px !important;
					}

					table.body .content {
						padding: 0 !important;
					}

					table.body .container {
						padding: 0 !important;
						width: 100% !important;
					}

					table.body .main {
						border-left-width: 0 !important;
						border-radius: 0 !important;
						border-right-width: 0 !important;
					}

					table.body .btn table {
						width: 100% !important;
					}

					table.body .btn a {
						width: 100% !important;
					}

					table.body .img-responsive {
						height: auto !important;
						max-width: 100% !important;
						width: auto !important;
					}
				}
				@media all {
					.ExternalClass {
						width: 100%;
					}

					.ExternalClass,
					.ExternalClass p,
					.ExternalClass span,
					.ExternalClass font,
					.ExternalClass td,
					.ExternalClass div {
						line-height: 100%;
					}

					.apple-link a {
						color: inherit !important;
						font-family: inherit !important;
						font-size: inherit !important;
						font-weight: inherit !important;
						line-height: inherit !important;
						text-decoration: none !important;
					}

					#MessageViewBody a {
						color: inherit;
						text-decoration: none;
						font-size: inherit;
						font-family: inherit;
						font-weight: inherit;
						line-height: inherit;
					}

					.btn-primary table td:hover {
						background-color: #34495e !important;
					}

					.btn-primary a:hover {
						background-color: #34495e !important;
						border-color: #34495e !important;
					}
				}
			</style>
		</head>
		<body
			style="
				background-color: #f6f6f6;
				font-family: sans-serif;
				-webkit-font-smoothing: antialiased;
				font-size: 14px;
				line-height: 1.4;
				margin: 0;
				padding: 0;
				-ms-text-size-adjust: 100%;
				-webkit-text-size-adjust: 100%;
			"
		>
			<span
				class="preheader"
				style="
					color: transparent;
					display: none;
					height: 0;
					max-height: 0;
					max-width: 0;
					opacity: 0;
					overflow: hidden;
					mso-hide: all;
					visibility: hidden;
					width: 0;
				"
				>Check out all mensa menu here!</span
			>
			<table
				role="presentation"
				border="0"
				cellpadding="0"
				cellspacing="0"
				class="body"
				style="
					border-collapse: separate;
					mso-table-lspace: 0pt;
					mso-table-rspace: 0pt;
					background-color: #ffffff;
					width: 100%;
				"
				width="100%"
				bgcolor="#f6f6f6"
			>
				<tr>
					<!-- left blank space -->
					<td
						style="
							font-family: sans-serif;
							font-size: 14px;
							vertical-align: top;
						"
						valign="top"
					>
						&nbsp;
					</td>
					<!-- end of left blank space-->
					<!-- white container in the middle -->
					<td
						class="container"
						style="
							font-family: sans-serif;
							font-size: 14px;
							vertical-align: top;
							display: block;
							max-width: 580px;
							padding: 10px;
							width: 580px;
							margin: 0 auto;
						"
						width="580"
						valign="top"
					>
						<div
							class="content"
							style="
								box-sizing: border-box;
								display: block;
								margin: 0 auto;
								max-width: 580px;
								padding: 10px;
							"
						>

							<!-- MENSA NAV -->

							<!-- <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">
								<!-- START MAIN CONTENT AREA -->
								<tr>
									<td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
									  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
										<tr>
										  <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
											<div style="background-color:#ecf0f1; color:#000000; border-radius: 4px 4px 0px 0px; padding: 8px;">
											
											<a href="#sued"><h4 style="color:#000000;"> Mensa TechFak</h3></a>
											<a href="#lmpl"><h4 style="color:#000000;"> Mensa Langemarckplatz Erlangen</h3></a>
											<a href="#mohm"><h4 style="color:#000000;"> Mensa Ohm Nürnberg</h3></a>
											<a href="#isch"><h4 style="color:#000000;"> Mensa Insel Schütt</h3></a>
											<div>
										  </td>
										</tr>
									  </table>
									</td>
								  </tr>
								<!-- END MAIN CONTENT AREA -->
							</table> -->
							<!-- END MENSA NAV -->
							
							<!-- START CURRENY RATE -->
							<div style="background-color: #f6f6f6; color: #ffffff">
								1 EUR-CNY curreny exchange rate ${eurToCnyData}
							</div>

							<!-- END CURRENY RATE -->

							<!-- START MENU -->
							${allMenuTables}
							<!-- END MENU -->

							<!-- START FOOTER -->
							<div
								class="footer"
								style="
									clear: both;
									margin-top: 10px;
									text-align: center;
									width: 100%;
								"
							>
								<table
									role="presentation"
									border="0"
									cellpadding="0"
									cellspacing="0"
									style="
										border-collapse: separate;
										mso-table-lspace: 0pt;
										mso-table-rspace: 0pt;
										width: 100%;
									"
									width="100%"
								>
									<tr>
										<td
											class="content-block"
											style="
												font-family: sans-serif;
												vertical-align: top;
												padding-bottom: 10px;
												padding-top: 10px;
												color: #999999;
												font-size: 12px;
												text-align: center;
											"
											valign="top"
											align="center"
										>
											<span
												class="apple-link"
												style="
													color: #999999;
													font-size: 12px;
													text-align: center;
												"
												>Menu Letter v1.0.0 Created by
												Ziqi</span
											>
											<br />
											Any feedback?
											<a
												href="mailto:1006577139@qq.com?subject=Feedback of your menu letter"
												style="
													text-decoration: underline;
													color: #999999;
													font-size: 12px;
													text-align: center;
												"
												>Send Feedback</a
											>
										</td>
									</tr>
									<tr>
										<td
											class="content-block powered-by"
											style="
												font-family: sans-serif;
												vertical-align: top;
												padding-bottom: 10px;
												padding-top: 10px;
												color: #999999;
												font-size: 12px;
												text-align: center;
											"
											valign="top"
											align="center"
										>
											Have a lovely day! :)
										</td>
									</tr>
								</table>
							</div>
							<!-- END FOOTER -->
						</div>
					</td>
					<!-- end of white container in the middle -->
					<!-- right blank space-->
					<td
						style="
							font-family: sans-serif;
							font-size: 14px;
							vertical-align: top;
						"
						valign="top"
					>
						&nbsp;
					</td>
					<!-- end of right blank space -->
				</tr>
			</table>

			<script src="./app.js"></script>
		</body>
	</html>`;
}).catch((err) => {
	console.log(err);
});
*/

/* export function giveMeHtml() {
	emailHTML.then((data) => {
		return data;
	}).catch((err) => {
		console.log(err);
	});
}
*/
