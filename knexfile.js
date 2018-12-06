
const dbName = 'mock_users';
const port = 5432;

module.exports = {
    developement: {
        client: "postgresql",
        connection: `postgres:localhost:${port}${dbName}`,
        migrations: {
            directory: __dirname + '/migrations'
        },
        seeds: {
            directory: __dirname + '/migrations'
        }
    }
}