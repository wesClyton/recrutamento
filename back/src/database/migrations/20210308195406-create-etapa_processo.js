module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('etapas_processos', {
      id_etapa_processo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      avaliacao: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      nota: {
        type: Sequelize.DECIMAL(2, 1),
        allowNull: false,
      },
      id_processo: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'processos', key: 'id_processo' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      id_etapa: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'etapas', key: 'id_etapa' },
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
    queryInterface.dropTable('etapas_processos');
  },
};
