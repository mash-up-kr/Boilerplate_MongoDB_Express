import mongoose from 'mongoose';

const connect = () => {
	if (process.env.NODE_ENV !== 'production') {
		mongoose.set('debug', true);
	}
}
mongoose.connect(`mongodb://${process.env.MONGO_ID}:${process.env.MONGO_PWD}@${process.env.MONGO_IP}:27017/${process.env.MONGO_DB}`, {
	dbName: 'boiler',
	useNewUrlParser: true,
	useCreateIndex: true
}, (err) => {
	if (err) {
		console.log('connetction error: ', err);
	} else {
		console.log('connection success!');
	}
});

mongoose.connection.on('error', (err) => {
	console.error('connection error: ', err);
});

mongoose.connection.on('disconnected', () => {
	console.error('connection disconnected');
	connect();
});

export default connect;
