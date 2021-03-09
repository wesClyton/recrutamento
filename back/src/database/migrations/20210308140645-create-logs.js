module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('logs', {
      id_log: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      modulo: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      tarefa: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      ip: {
        type: Sequelize.STRING(15),
        allowNull: true,
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'usuarios', key: 'id_usuario' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    });
  },

  down: async (queryInterface) => {
    queryInterface.dropTable('logs');
  },
};
