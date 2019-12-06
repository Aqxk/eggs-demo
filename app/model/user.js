module.exports = app => {
  const { STRING, DATE } = app.Sequelize;
  const User = app.model.define(
    'fruits',
    {
      name: STRING(30),
    },
    { timestamps: true }
  );
  // force // false 为不覆盖 true会删除再创建(慎用) alter // true可以 添加或删除字段
  User.sync({ force: false, alter: true });
  return User;
};
