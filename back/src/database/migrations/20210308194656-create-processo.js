module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('processos', {
      id_processo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      imagem: {
        type: Sequelize.STRING(250),
        allowNull: true,
      },
      data_inicio: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      data_final: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      palavras_chave: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      id_vaga: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'vagas', key: 'id_vaga' },
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
    queryInterface.dropTable('processos');
  },
};
