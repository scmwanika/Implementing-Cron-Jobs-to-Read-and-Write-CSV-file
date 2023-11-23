module.exports = (sequelize, Sequelize) => {
  const schema = sequelize.define("business", {
    inCharge: {
      type: Sequelize.STRING,
    },
    label: {
      type: Sequelize.STRING,
    },
    account: {
      type: Sequelize.STRING,
    },
    amount: {
      type: Sequelize.DECIMAL,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
    balance: {
      type: Sequelize.DECIMAL,
    },
  });

  schema.sync({ force: false });
  return schema;
};
