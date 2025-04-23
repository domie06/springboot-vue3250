const base = {
    get() {
        return {
            url : "http://localhost:8080/chongwufuwu/",
            name: "chongwufuwu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/chongwufuwu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "宠物服务平台"
        } 
    }
}
export default base
