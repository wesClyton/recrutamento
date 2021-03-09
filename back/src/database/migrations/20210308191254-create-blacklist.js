module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('blacklists', {
      id_blacklist: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      motivo_entrada: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      motivo_saida: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      id_candidato: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'candidatos', key: 'id_candidato' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    });
  },

  down: async (queryInterface) => {
    queryInterface.dropTable('blacklists');
  },
};
