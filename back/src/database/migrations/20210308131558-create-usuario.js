module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('usuarios', {
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      id_candidato: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'candidatos', key: 'id_candidato' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      id_administrador: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'administradores', key: 'id_administrador' },
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
    queryInterface.dropTable('usuarios');
  },
};
