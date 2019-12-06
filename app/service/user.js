const { Service } = require('egg');
class UserService extends Service {
    async getAll() {
        // return {
        //     name: 'jerry'
        // }
        // 操作数据库
        return await this.ctx.model.User.findAll();
    }
}
module.exports = UserService