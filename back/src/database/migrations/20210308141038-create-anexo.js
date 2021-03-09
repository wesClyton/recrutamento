module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('anexos', {
      id_anexo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tipo: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      anexo: {
        type: Sequelize.STRING(150),
        allowNull: false,
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
    queryInterface.dropTable('anexos');
  },
};
