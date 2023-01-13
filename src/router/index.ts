import index from "../pages/index";
 
const routers = [
    {
        path: '/',
        name: 'Index',
        components: index    // 引入pages文件下的页面
    },
    
]
 
export default routers;    // 将数组导出