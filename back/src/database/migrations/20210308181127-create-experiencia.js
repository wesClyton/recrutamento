module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('experiencias', {
      id_experiencia: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cargo: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      tipo_emprego: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      empresa: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      localidade: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      horario: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      inicio: {
        type: Sequelize.STRING(10), // 07/2020
        allowNull: false,
      },
      saida: {
        type: Sequelize.STRING(10), // 07/2020
        allowNull: true,
      },
      emprego_atual: {
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
    queryInterface.dropTable('experiencias');
  },
};
