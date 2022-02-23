
module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define('book', {
        bookId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        bookName: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        isbn: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        authorId: {
            type: Sequelize.INTEGER,
            refrences: 'author',
            refrencesKey: 'authorId'
        }
    });
  
    return Book;
};
