const { MongoClient, ObjectId } = require("mongodb");
if (process.env.NODE_ENV !== "production") require("dotenv").config();
function myDB() {
	const myDB = {};
	const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URI}`;

	myDB.getAllData = async (sorting) => {
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("renthouse");
		const propList = db.collection("propertieslist");
		const query = {};
		return propList.find(query).sort(sorting).limit(40).toArray().then(function (value) {
			// console.log(value);
			return value;
		});
	}

	myDB.getCount = async () => {
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("renthouse");
		const propList = db.collection("propertieslist");
		const query = {};
		return propList.count(query).then(function (value) {
			return value;
		});
	}

	myDB.createUser = async (user) => {
		console.log("created user:", user);
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("renthouse");
		const users = db.collection("users");
		return await users.insertOne(user);
	};

	myDB.getUser = async (user) => {
		console.log("Login User", user);
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("renthouse");
		const users = db.collection("users");
		var query = { email: user.email };
		return await users.find(query).toArray();
	};

	return myDB;
}

module.exports = myDB();

