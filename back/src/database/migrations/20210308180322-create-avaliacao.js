module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('avaliacoes', {
      id_avaliacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nota: {
        type: Sequelize.DECIMAL(2, 1),
        allowNull: false,
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      id_administrador: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'administradores', key: 'id_administrador' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    queryInterface.dropTable('avaliacoes');
  },
};
