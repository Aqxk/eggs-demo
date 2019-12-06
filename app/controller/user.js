const { Controller } = require('egg');

class UserController extends Controller {
    async index() {
        const { ctx } = this;
        // ctx.body = {
        //     name: 'jerry',
        //     age: 19
        // }
        // 使用service获取 处理复杂业务逻辑
        ctx.body = await ctx.service.user.getAll();
    }
}
module.exports = UserController;