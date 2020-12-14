var express = require("express");
var router = express.Router();

const myDB = require("../db/jobmongodb.js");

router.get("/getListings", async (req, res, next) => {
	const allData = await myDB.getAllData({ "_id": -1 });
	res.json(allData);
});

router.get("/getSortAsc", async (req, res, next) => {
	const allData = await myDB.getAllData({ "result-price": 1 });
	res.json(allData);
});

router.get("/getSortDesc", async (req, res, next) => {
	const allData = await myDB.getAllData({ "result-price": -1 });
	res.json(allData);
});

router.get("/getCount", async (req, res, next) => {
	const allData = await myDB.getCount();
	res.json(allData);
});

// router.get("/applications", async (req, res, next) => {
// 	const appData = await myDB.getAppDetails();
// 	console.log(next);
// 	res.json(appData);
// });

// router.post("/appform", async (req, res) => {
// 	const post = req.body;
// 	await myDB.createAppPost(post);
// 	res.redirect("/appliedHistory");
// 	res.send({message: "Application Added"});
// });

// router.post("/updateApplication", async (req, res) => {
// 	const post = req.body;
// 	await myDB.editAppPost(post);
// 	res.redirect("/appliedHistory");
// 	res.send({message: "Application Edited"});
// });

// router.post("/createappevent", async (req, res) => {
// 	const post = req.body;
// 	await myDB.createAppEvent(post);
// 	res.redirect("/");
// 	res.send({message: "Event Created"});
// });


// router.post("/delappevent", async (req, res) => {
// 	const post = req.body;
// 	await myDB.delAppEvent(post);
// 	res.redirect("/");
// 	res.send({message: "Event Deleted"});
// });

// router.post("/delAppPost", async (req, res) => {
// 	const post = req.body;
// 	const dbResponse = await myDB.delApplication(post);
// 	res.send(dbResponse);
// });


// router.post("/updateappevent", async (req, res) => {
// 	const post = req.body;
// 	await myDB.updateAppEvent(post);
// 	res.redirect("/");
// 	res.send({message: "Event Updated"});
// });


module.exports = router;
