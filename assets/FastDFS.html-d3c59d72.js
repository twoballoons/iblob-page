const l=JSON.parse('{"key":"v-31e083ca","path":"/docs/distributed_middleware/FastDFS.html","title":"FastDFS","lang":"en-US","frontmatter":{"title":"FastDFS","date":"2023/6/28"},"headers":[{"level":2,"title":"1，FASTDFS概述","slug":"_1-fastdfs概述","link":"#_1-fastdfs概述","children":[]},{"level":2,"title":"2，系统结构图","slug":"_2-系统结构图","link":"#_2-系统结构图","children":[]},{"level":2,"title":"3，工作流程详解","slug":"_3-工作流程详解","link":"#_3-工作流程详解","children":[]},{"level":2,"title":"1，安装gcc(编译时需要)","slug":"_1-安装gcc-编译时需要","link":"#_1-安装gcc-编译时需要","children":[]},{"level":2,"title":"3，安装创建目录上传所有文件","slug":"_3-安装创建目录上传所有文件","link":"#_3-安装创建目录上传所有文件","children":[]},{"level":2,"title":"4，安装libfastcommon","slug":"_4-安装libfastcommon","link":"#_4-安装libfastcommon","children":[]},{"level":2,"title":"5、安装fastdfs","slug":"_5、安装fastdfs","link":"#_5、安装fastdfs","children":[{"level":3,"title":"5.1，下载","slug":"_5-1-下载","link":"#_5-1-下载","children":[]},{"level":3,"title":"5.2，安装相关依赖库","slug":"_5-2-安装相关依赖库","link":"#_5-2-安装相关依赖库","children":[]},{"level":3,"title":"5.3，安装fastdfs","slug":"_5-3-安装fastdfs","link":"#_5-3-安装fastdfs","children":[]},{"level":3,"title":"5.5，准备配置文件  默认在/etc/fdfs/下面","slug":"_5-5-准备配置文件-默认在-etc-fdfs-下面","link":"#_5-5-准备配置文件-默认在-etc-fdfs-下面","children":[]}]},{"level":2,"title":"6、配置和启动tracker","slug":"_6、配置和启动tracker","link":"#_6、配置和启动tracker","children":[{"level":3,"title":"6.1，切换目录到： /etc/fdfs/ 目录下；","slug":"_6-1-切换目录到-etc-fdfs-目录下","link":"#_6-1-切换目录到-etc-fdfs-目录下","children":[]},{"level":3,"title":"6.2，修改tracker.conf","slug":"_6-2-修改tracker-conf","link":"#_6-2-修改tracker-conf","children":[]},{"level":3,"title":"6.3，启动tracker，运行如下命令：","slug":"_6-3-启动tracker-运行如下命令","link":"#_6-3-启动tracker-运行如下命令","children":[]}]},{"level":2,"title":"7、配置和启动storage","slug":"_7、配置和启动storage","link":"#_7、配置和启动storage","children":[{"level":3,"title":"7.1，切换目录到： /etc/fdfs/ 目录下；","slug":"_7-1-切换目录到-etc-fdfs-目录下","link":"#_7-1-切换目录到-etc-fdfs-目录下","children":[]},{"level":3,"title":"7.2，修改storage.conf ; vim storage.conf","slug":"_7-2-修改storage-conf-vim-storage-conf","link":"#_7-2-修改storage-conf-vim-storage-conf","children":[]},{"level":3,"title":"7.3，创建/home/leige/fastdfs/storage 目录","slug":"_7-3-创建-home-leige-fastdfs-storage-目录","link":"#_7-3-创建-home-leige-fastdfs-storage-目录","children":[]},{"level":3,"title":"7.4，启动storage， 运行命令如下：","slug":"_7-4-启动storage-运行命令如下","link":"#_7-4-启动storage-运行命令如下","children":[]}]},{"level":2,"title":"8、使用FastDFS自带工具测试","slug":"_8、使用fastdfs自带工具测试","link":"#_8、使用fastdfs自带工具测试","children":[{"level":3,"title":"8.1，切换目录到 /etc/fdfs/ 目录下；","slug":"_8-1-切换目录到-etc-fdfs-目录下","link":"#_8-1-切换目录到-etc-fdfs-目录下","children":[]},{"level":3,"title":"8.2，修改client.conf ; vim client.conf，","slug":"_8-2-修改client-conf-vim-client-conf","link":"#_8-2-修改client-conf-vim-client-conf","children":[]},{"level":3,"title":"8.3，拷贝一张图片baobao.png到Centos服务器上的 /root/目录下；","slug":"_8-3-拷贝一张图片baobao-png到centos服务器上的-root-目录下","link":"#_8-3-拷贝一张图片baobao-png到centos服务器上的-root-目录下","children":[]}]},{"level":2,"title":"9、FastDFS 和nginx整合","slug":"_9、fastdfs-和nginx整合","link":"#_9、fastdfs-和nginx整合","children":[{"level":3,"title":"9.1 在tracker上安装 nginx","slug":"_9-1-在tracker上安装-nginx","link":"#_9-1-在tracker上安装-nginx","children":[]},{"level":3,"title":"9.2 在storage 上安装nginx","slug":"_9-2-在storage-上安装nginx","link":"#_9-2-在storage-上安装nginx","children":[]},{"level":3,"title":"9.3 进入之前解压的fastdfs目录下，把http.conf、mime.conf移动至/etc/fdfs","slug":"_9-3-进入之前解压的fastdfs目录下-把http-conf、mime-conf移动至-etc-fdfs","link":"#_9-3-进入之前解压的fastdfs目录下-把http-conf、mime-conf移动至-etc-fdfs","children":[]}]},{"level":2,"title":"10， Nginx的安装","slug":"_10-nginx的安装","link":"#_10-nginx的安装","children":[{"level":3,"title":"10.1，上传 nginx-1.15.2.tar.gz 到Centos服务器上；","slug":"_10-1-上传-nginx-1-15-2-tar-gz-到centos服务器上","link":"#_10-1-上传-nginx-1-15-2-tar-gz-到centos服务器上","children":[]},{"level":3,"title":"10.2，解压 nginx-1.15.2.tar.gz","slug":"_10-2-解压-nginx-1-15-2-tar-gz","link":"#_10-2-解压-nginx-1-15-2-tar-gz","children":[]},{"level":3,"title":"10.3，进入nginx解压的目录下","slug":"_10-3-进入nginx解压的目录下","link":"#_10-3-进入nginx解压的目录下","children":[]},{"level":3,"title":"10.4，加入模块命令配置","slug":"_10-4-加入模块命令配置","link":"#_10-4-加入模块命令配置","children":[]},{"level":3,"title":"10.5，编译并安装","slug":"_10-5-编译并安装","link":"#_10-5-编译并安装","children":[]},{"level":3,"title":"10.6，修改nginx配置","slug":"_10-6-修改nginx配置","link":"#_10-6-修改nginx配置","children":[]},{"level":3,"title":"10.7，启动nginx","slug":"_10-7-启动nginx","link":"#_10-7-启动nginx","children":[]}]},{"level":2,"title":"11、在浏览器中访问上传到fastDFS的图片","slug":"_11、在浏览器中访问上传到fastdfs的图片","link":"#_11、在浏览器中访问上传到fastdfs的图片","children":[]},{"level":2,"title":"1，拉取镜像并启动","slug":"_1-拉取镜像并启动","link":"#_1-拉取镜像并启动","children":[]},{"level":2,"title":"2，测试上传","slug":"_2-测试上传","link":"#_2-测试上传","children":[]},{"level":2,"title":"3，配置端口","slug":"_3-配置端口","link":"#_3-配置端口","children":[]},{"level":2,"title":"4，测试访问","slug":"_4-测试访问","link":"#_4-测试访问","children":[]},{"level":2,"title":"1，创建java项目","slug":"_1-创建java项目","link":"#_1-创建java项目","children":[]},{"level":2,"title":"2，加入依赖","slug":"_2-加入依赖","link":"#_2-加入依赖","children":[]},{"level":2,"title":"3，创建fdfs_client.conf客户端配置文件","slug":"_3-创建fdfs-client-conf客户端配置文件","link":"#_3-创建fdfs-client-conf客户端配置文件","children":[]},{"level":2,"title":"4，测试类","slug":"_4-测试类","link":"#_4-测试类","children":[]},{"level":2,"title":"1，创建springboot web项目","slug":"_1-创建springboot-web项目","link":"#_1-创建springboot-web项目","children":[]},{"level":2,"title":"2，修改pom.xml加入依赖","slug":"_2-修改pom-xml加入依赖","link":"#_2-修改pom-xml加入依赖","children":[]},{"level":2,"title":"3，修改yml","slug":"_3-修改yml","link":"#_3-修改yml","children":[]},{"level":2,"title":"4，创建文件上传工具类","slug":"_4-创建文件上传工具类","link":"#_4-创建文件上传工具类","children":[]},{"level":2,"title":"5，创建index.html页面测试","slug":"_5-创建index-html页面测试","link":"#_5-创建index-html页面测试","children":[]},{"level":2,"title":"1，创建项目加入依赖","slug":"_1-创建项目加入依赖","link":"#_1-创建项目加入依赖","children":[]},{"level":2,"title":"2，修改yml","slug":"_2-修改yml","link":"#_2-修改yml","children":[]},{"level":2,"title":"3，创建配置属性类","slug":"_3-创建配置属性类","link":"#_3-创建配置属性类","children":[]},{"level":2,"title":"4，创建服务类","slug":"_4-创建服务类","link":"#_4-创建服务类","children":[]},{"level":2,"title":"5，创建UploadController","slug":"_5-创建uploadcontroller","link":"#_5-创建uploadcontroller","children":[]}],"git":{"createdTime":1688020466000,"updatedTime":1688436100000,"contributors":[{"name":"xingenhi","email":"xingenhi@163.com","commits":2}]},"filePathRelative":"docs/distributed_middleware/FastDFS.md"}');export{l as data};
