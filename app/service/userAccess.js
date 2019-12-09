const Service = require('egg').Service;

class userAccessService extends Service {
    /**
     * 
     * @param {*} payload 
     */
    async login(payload) {
        const { ctx, service} = this;
        const user = await ctx.service.user.findMobile(payload.name);
        if(!user){
            ctx.throw(400,'user not found');
        }
        
    }   
    /**
     * 
     */
    async current(){

    }
}
module.exports  = ActionTokenService;