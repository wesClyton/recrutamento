module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('formacoes', {
      id_formacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      grau: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      nome_curso: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      instituicao: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      inicio: {
        type: Sequelize.STRING(10), // 11/2020
        allowNull: false,
      },
      conclusao: {
        type: Sequelize.STRING(10), // 11/2020
        allowNull: true,
      },
      cursando: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      descricao: {
        type: Sequelize.TEXT,
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
    queryInterface.dropTable('formacoes');
  },
};
