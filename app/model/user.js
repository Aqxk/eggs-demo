module.exports = app => {
  const { STRING, DATE } = app.Sequelize;
  const User = app.model.define(
    'fruits',
    {
      name: STRING(30),
    },
    { timestamps: true }
  );
  // User.sync({ force: true });
  return User;
};
