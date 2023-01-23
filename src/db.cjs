const sqlite3 = require("sqlite3").verbose();
const filepath = '../db/mensaMenus.sqlite3';

function createDbConnection() {
	const db = new sqlite3.Database(filepath, (err) => {
		if (err) {
			return console.error(err.message);
		}
	});
	console.log('Connection with database has been estalished!');
	return db;
}

function selectRows(db, mensaName, date) {
	return new Promise((resolve, reject) => {
		db.serialize(() => {
			db.all(`SELECT * FROM menus WHERE mensa_name=? AND date=?`, 
				[mensaName, date],
				(error, rows) => {
					if (error) {
						console.error(error.message);
					}
					resolve(rows);
				});
			});
		});
}

function insertRow(db, mensaName, date, menu) {
	db.run(
		`INSERT INTO menus (mensa_name, date, menu) VALUES (?, ?, ?)`, 
		[mensaName, date, menu],
		(error) => {
			if(error) {
				console.error(error.message);
			}
		}
	);
	console.log("Inserted sucessfully!");
}

function closeDb(db) {
	db.close((err) => {
		if (err) {
			console.error(err.message);
		}
	});
} 

exports.connectDb = createDbConnection;
exports.selectRows = selectRows;
exports.insertRow = insertRow;
exports.closeDb = closeDb;
exports.dbFilePath = filepath;
