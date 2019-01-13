var http = require('http');                              //加载http,因为我们用的是http.request，这个理所当然要加载

　　　　　　　　　　　　　　　　　　　　　　          　　　//创建匿名函数，直接运行　　
     var options={  
            host:"api.douban.com",                   //host是要访问的域名，别加http或https
            path:"/v2/movie/in_theaters",       //请求的路径或参数，参数怎么写我不用说了吧？
            method:'get',                             //请求类型，这里是get
            data:{
              apikey:'0b2bdeda43b5688921839c8ecb20399b',
              city:'北京',
              start:1,
              count:10,
              client:null,
              udid:null
            }
           }  
       var sendmsg='';                                //创建空字符串，用来存放收到的数据
       req = http.request(options, function(req) { 
                //发出请求，加上参数，然后有回调函数
         req.on("data", function(chunk) {               //监听data,接受数据
               sendmsg += chunk;                         //把接受的数据存入定放的sendmsg
            });        
         req.on("end", function(d) {                     //监听end事件，请求结束后调用
             var list=JSON.parse(sendmsg);            //对接受到的数据流进行编码
                   console.log(list)                  //打印出结果
         }); 
 
        });
    req.end();                                      //记住，用request一定要有始有终，如果不结束，程序会一直运行。
 