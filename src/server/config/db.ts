const mongoose = require('mongoose');

export const connectDB = async () => {
	const conn = await mongoose.connect(process.env.MONGO_URL);

	// Display MongoDB host that is connected
	console.log(`MongoDB Connected: ${conn.connection.host}`);
};
