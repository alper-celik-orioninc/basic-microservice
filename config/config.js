module.exports = {
    getDatabaseConfig: () => {
        return process.env.DATABASE_URL || 'mongodb://localhost/mydb';
    }
};
