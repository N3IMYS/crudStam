

module.exports = (sequelize, Sequelize) => {
    const Author = sequelize.define('author', {
        authorId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: Sequelize.STRING,
            allowNulls: false,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNulls: false,
        },
        birthDay: {
            type: Sequelize.DATE,
            allowNulls: false,
        }
    });
    return Author;
};
