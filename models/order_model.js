module.exports = (sequelize, Sequelize) => {
  const orderSchema = sequelize.define("orders", {
    timestamp: {
      type: Sequelize.STRING,
    },
    itm_one: {
      type: Sequelize.STRING,
    },
    qty_one: {
      type: Sequelize.STRING,
    },
    itm_two: {
      type: Sequelize.STRING,
    },
    qty_two: {
      type: Sequelize.STRING,
    },
    itm_three: {
      type: Sequelize.STRING,
    },
    qty_three: {
      type: Sequelize.STRING,
    },
    total_cost: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  });

  orderSchema.sync({ force: false });
  return orderSchema;
};
