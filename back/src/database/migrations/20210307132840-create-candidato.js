module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('candidatos', {
      id_candidato: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true,
      },
      endereco: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      genero: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      escolaridade: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      horario_custume: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      pretensao_salarial_de: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      pretensao_salarial_ate: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      cadastro_simples: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
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

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('candidato');
  },
};
