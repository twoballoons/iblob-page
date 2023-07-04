import{_ as n,r as a,o as p,c as l,a as t,b as e,d as o,e as d}from"./app-f078eaf8.js";const s={},h=t("h1",{id:"_01编辑本段替换技巧",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_01编辑本段替换技巧","aria-hidden":"true"},"#"),e(" 01编辑本段替换技巧")],-1),i=t("p",null,[t("strong",null,"实例目录")],-1),_=t("p",null,"【1】 正则表达式应用——替换指定内容到行尾",-1),u=t("p",null,"【2】 正则表达式应用——数字替换",-1),c={href:"http://baike.baidu.com/view/263416.htm",target:"_blank",rel:"noopener noreferrer"},b={href:"http://baike.baidu.com/view/517188.htm",target:"_blank",rel:"noopener noreferrer"},m=d("<p>【5】 正则表达式应用——删除空行</p><p>【6】 正则表达式应用——实例应用</p><p><strong>应用实例</strong></p><p>【1】正则表达式应用——替换指定内容到行尾</p><p>原始文本如下面两行</p><p>abc aaaaa</p><p>123 abc 444</p><p>希望每次遇到“abc”，则替换“abc”以及其后到行尾的内容为“abc efg”</p><p>即上面的文本最终替换为：</p><p>abc efg</p><p>123 abc efg</p><p>解决：</p><p>① 在替换对话框，查找内容里输入“abc.*”，替换内容输入为“abc efg”</p>",13),f={href:"http://baike.baidu.com/view/1143823.htm",target:"_blank",rel:"noopener noreferrer"},g=t("p",null,"其中，符号的含义如下：",-1),k={href:"http://baike.baidu.com/view/263416.htm",target:"_blank",rel:"noopener noreferrer"},q=t("p",null,"“*” =匹配0次或更多",-1),w=t("p",null,"注意：其实就是正则表达式替换，这里只是把一些曾经提出的问题加以整理，单纯从正则表达式本身来说，就可以引申出成千上万种特例。",-1),v=t("p",null,"【2】正则表达式应用——数字替换",-1),x=t("p",null,"希望把",-1),y=t("p",null,"asdadas123asdasdas456asdasdasd789asdasd",-1),z=t("p",null,"替换为:",-1),$=t("p",null,"asdadas[123]asdasdas[456]asdasdasd[789]asdasd",-1),A={href:"http://baike.baidu.com/view/1143823.htm",target:"_blank",rel:"noopener noreferrer"},R=t("p",null,"在查找内容里面输入“([0-9])([0-9])([0-9])”，不含引号",-1),S=t("p",null,"“替换为:”里面输入“[\\1\\2\\3]”，不含引号",-1),C=t("p",null,"####备注####：查找（[0-9]+） 替换：[\\1] 更简单通用些",-1),E=t("p",null,"范围为你所操作的范围，然后选择替换即可。",-1),I=t("p",null,"实际上这也是正则表达式的使用特例，“[0-9]”表示匹配0～9之间的任何特例，同样“[a-z]”就表示匹配a～z之间的任何特例",-1),Z=t("p",null,"上面重复使用了“[0-9]”，表示连续出现的三个数字",-1),B=t("p",null,"括号用来选择原型，进行分组，替换时要用",-1),T=t("p",null,"“\\1”代表第一个“[0-9]”对应的原型，“\\2”代表第二个“[0-9]”对应的原型，依此类推",-1),J={href:"http://baike.baidu.com/view/263416.htm",target:"_blank",rel:"noopener noreferrer"},L=t("p",null,"asdadas其它123其它asdasdas其它456其它asdasdasd其它789其它asdasd",-1),V=t("p",null,"功能增强：",-1),M=t("p",null,"如果将查找内容“[0-9][0-9][0-9]”改为“[0-9]*[0-9]”，对应1 或 123 或 12345 或 ...",-1),N=t("p",null,"大家根据需要定制",-1),U=t("p",null,"相关内容还有很多，可以自己参考正则表达式的语法仔细研究一下",-1),P={href:"http://baike.baidu.com/view/263416.htm",target:"_blank",rel:"noopener noreferrer"},W={href:"http://baike.baidu.com/view/263416.htm",target:"_blank",rel:"noopener noreferrer"},H=t("p",null,"比如",-1),F=t("p",null,"12345 1265345",-1),D=t("p",null,"2345",-1),K=t("p",null,"需要删除每行末尾的“345”",-1),Q=t("p",null,"这个也算正则表达式的用法，其实仔细看正则表达式应该比较简单，不过既然有这个问题提出，说明对正则表达式还得有个认识过程，解决方法如下",-1),X=t("p",null,"解决：",-1),G={href:"http://baike.baidu.com/view/1143823.htm",target:"_blank",rel:"noopener noreferrer"},j=t("p",null,"在查找内容里面输入“345$”",-1),O=t("p",null,"这里“$”表示从行尾匹配",-1),Y=t("p",null,"如果从行首匹配，可以用“^”来实现，不过 EditPlus 有另一个功能可以很简单的删除行首的字符串",-1),tt=t("p",null,"a. 选择要操作的行",-1),et=t("p",null,"b. 编辑－格式－删除行注释",-1),rt={href:"http://baike.baidu.com/view/263416.htm",target:"_blank",rel:"noopener noreferrer"},ot=t("p",null,"【4】正则表达式应用——替换带有半角括号的多行",-1),dt=t("p",null,"几百个网页中都有下面一段代码：",-1),nt=t("p",null,"我想把它们都去掉，可是找了很多search & replace的软件，都是只能对“一行”进行操作。",-1),at=t("p",null,"EditPlus 打开几百个网页文件还是比较顺畅的，所以完全可以胜任这个工作。",-1),pt={href:"http://baike.baidu.com/view/1091115.htm",target:"_blank",rel:"noopener noreferrer"},lt=t("p",null,"“\\n\\n\\n”",-1),st={href:"http://baike.baidu.com/view/263416.htm",target:"_blank",rel:"noopener noreferrer"},ht={href:"http://baike.baidu.com/view/517188.htm",target:"_blank",rel:"noopener noreferrer"},it=t("p",null,"\\\\n\\\\n\\\\n",-1),_t=t("p",null,"在替换对话框启用“正则表达式”选项，这时就可以完成替换了",-1),ut=t("p",null,"补充：",-1),ct=t("p",null,"对( ) 这样的特殊符号，应该用\\( \\)来表示，这也是很标准的regexp语法，可以写为",-1),bt=t("p",null,"\\\\n\\\\n\\\\n",-1),mt=t("p",null,"【5】正则表达式应用——删除空行",-1),ft=t("p",null,"启动EditPlus，打开待处理的文本类型文件。",-1),gt={href:"http://baike.baidu.com/view/102616.htm",target:"_blank",rel:"noopener noreferrer"},kt={href:"http://baike.baidu.com/view/893270.htm",target:"_blank",rel:"noopener noreferrer"},qt={href:"http://baike.baidu.com/view/1143823.htm",target:"_blank",rel:"noopener noreferrer"},wt={href:"http://baike.baidu.com/view/1091115.htm",target:"_blank",rel:"noopener noreferrer"},vt={href:"http://baike.baidu.com/view/4356266.htm",target:"_blank",rel:"noopener noreferrer"},xt={href:"http://baike.baidu.com/view/1436669.htm",target:"_blank",rel:"noopener noreferrer"},yt={href:"http://baike.baidu.com/view/2159122.htm",target:"_blank",rel:"noopener noreferrer"},zt={href:"http://baike.baidu.com/view/1138182.htm",target:"_blank",rel:"noopener noreferrer"},$t={href:"http://baike.baidu.com/view/2159122.htm",target:"_blank",rel:"noopener noreferrer"},At={href:"http://baike.baidu.com/view/1436669.htm",target:"_blank",rel:"noopener noreferrer"},Rt={href:"http://baike.baidu.com/view/300107.htm",target:"_blank",rel:"noopener noreferrer"},St={href:"http://baike.baidu.com/view/263416.htm",target:"_blank",rel:"noopener noreferrer"},Ct={href:"http://baike.baidu.com/view/1245723.htm",target:"_blank",rel:"noopener noreferrer"},Et={href:"http://baike.baidu.com/view/263416.htm",target:"_blank",rel:"noopener noreferrer"},It={href:"http://baike.baidu.com/view/559836.htm",target:"_blank",rel:"noopener noreferrer"},Zt={href:"http://baike.baidu.com/view/2159122.htm",target:"_blank",rel:"noopener noreferrer"},Bt={href:"http://baike.baidu.com/view/2159122.htm",target:"_blank",rel:"noopener noreferrer"},Tt={href:"http://baike.baidu.com/view/1138182.htm",target:"_blank",rel:"noopener noreferrer"},Jt={href:"http://baike.baidu.com/view/236729.htm",target:"_blank",rel:"noopener noreferrer"},Lt={href:"http://baike.baidu.com/view/1245723.htm",target:"_blank",rel:"noopener noreferrer"},Vt={href:"http://baike.baidu.com/view/2159122.htm",target:"_blank",rel:"noopener noreferrer"},Mt={href:"http://baike.baidu.com/view/1138182.htm",target:"_blank",rel:"noopener noreferrer"},Nt=t("p",null,"（6）选择“换行符”，插入“\\n”，表示回车符。",-1),Ut={href:"http://baike.baidu.com/view/1436669.htm",target:"_blank",rel:"noopener noreferrer"},Pt=d("<p>【6】 正则表达式应用——实例应用</p><p>1.验证用户名和密码：（&quot;^[a-zA-Z]\\w{5,15}$&quot;）正确格式：&quot;[A-Z][a-z]_[0-9]&quot;组成,并且第一个字必须为字母6~16位；</p><p>2.验证电话号码：（&quot;^(\\d{3,4}-)\\d{7,8}$&quot;）正确格式：xxx/xxxx-xxxxxxx/xxxxxxxx；</p><p>3.验证身份证号（15位或18位数字）：（&quot;^\\d{15}|\\d{18}$&quot;）；</p><p>4.验证Email地址：(&quot;^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$&quot;)；</p><p>5.只能输入由数字和26个英文字母组成的字符串：(&quot;^[A-Za-z0-9]+$&quot;) ;</p><p>6.整数或者小数：^[0-9]+\\.{0,1}[0-9]{0,2}$</p><p>7.只能输入数字：&quot;^[0-9]*$&quot;。</p><p>8.只能输入n位的数字：&quot;^\\d{n}$&quot;。</p><p>9.只能输入至少n位的数字：&quot;^\\d{n,}$&quot;。</p><p>10.只能输入m~n位的数字：。&quot;^\\d{m,n}$&quot;</p><p>11.只能输入零和非零开头的数字：&quot;^(0|[1-9][0-9]*)$&quot;。</p><p>12.只能输入有两位小数的正实数：&quot;^[0-9]+(.[0-9]{2})?$&quot;。</p><p>13.只能输入有1~3位小数的正实数：&quot;^[0-9]+(.[0-9]{1,3})?$&quot;。</p><p>14.只能输入非零的正整数：&quot;^\\+?[1-9][0-9]*$&quot;。</p><p>15.只能输入非零的负整数：&quot;^\\-[1-9][]0-9&quot;*$。</p><p>16.只能输入长度为3的字符：&quot;^.{3}$&quot;。</p><p>17.只能输入由26个英文字母组成的字符串：&quot;^[A-Za-z]+$&quot;。</p><p>18.只能输入由26个大写英文字母组成的字符串：&quot;^[A-Z]+$&quot;。</p><p>19.只能输入由26个小写英文字母组成的字符串：&quot;^[a-z]+$&quot;。</p><p>20.验证是否含有^%&amp;&#39;,;=?$\\&quot;等字符：&quot;[^%&amp;&#39;,;=?$\\x22]+&quot;。</p><p>21.只能输入汉字：&quot;^[\\u4e00-\\u9fa5]{0,}$&quot;</p><p>22.验证URL：&quot;^http://([\\w-]+\\.)+[\\w-]+(/[\\w-./?%&amp;=]*)?$&quot;。</p><p>23.验证一年的12个月：&quot;^(0?[1-9]|1[0-2])$&quot;正确格式为：&quot;01&quot;～&quot;09&quot;和&quot;1&quot;～&quot;12&quot;。</p><p>24.验证一个月的31天：&quot;^((0?[1-9])|((1|2)[0-9])|30|31)$&quot;正确格式为；&quot;01&quot;～&quot;09&quot;和&quot;1&quot;～&quot;31&quot;。</p><p>25.获取日期正则表达式：\\d{4}[年|\\-|\\.]\\d{\\1-\\12}[月|\\-|\\.]\\d{\\1-\\31}日?</p><p>评注：可用来匹配大多数年月日信息。</p>",27),Wt={href:"http://baike.baidu.com/view/60408.htm",target:"_blank",rel:"noopener noreferrer"},Ht={href:"http://baike.baidu.com/view/263416.htm",target:"_blank",rel:"noopener noreferrer"},Ft={href:"http://baike.baidu.com/view/263416.htm",target:"_blank",rel:"noopener noreferrer"},Dt={href:"http://baike.baidu.com/view/60408.htm",target:"_blank",rel:"noopener noreferrer"},Kt=t("p",null,"27.匹配空白行的正则表达式：\\n\\s*\\r",-1),Qt=t("p",null,"评注：可以用来删除空白行",-1),Xt=t("p",null,"28.匹配HTML标记的正则表达式：<(\\S*?)[^>]*>.*?</>|<.*? />",-1),Gt=t("p",null,"评注：网上流传的版本太糟糕，上面这个也仅仅能匹配部分，对于复杂的嵌套标记依旧无能为力",-1),jt={href:"http://baike.baidu.com/view/263416.htm",target:"_blank",rel:"noopener noreferrer"},Ot={href:"http://baike.baidu.com/view/263416.htm",target:"_blank",rel:"noopener noreferrer"},Yt={href:"http://baike.baidu.com/view/1138182.htm",target:"_blank",rel:"noopener noreferrer"},te=t("p",null,"30.匹配网址URL的正则表达式：[a-zA-z]+://[^\\s]*",-1),ee=t("p",null,"评注：网上流传的版本功能很有限，上面这个基本可以满足需求",-1),re={href:"http://baike.baidu.com/view/60408.htm",target:"_blank",rel:"noopener noreferrer"},oe=d('<p>评注：表单验证时很实用</p><p>32.匹配腾讯QQ号：[1-9][0-9]\\{4,\\}</p><p>评注：腾讯QQ号从000 0 开始</p><p>33.匹配中国邮政编码：[1-9]\\d{5}(?!\\d)</p><p>评注：中国邮政编码为6位数字</p><p>34.匹配ip地址：((2[0-4]\\d|25[0-5]|[01]?\\d\\d?)\\.){3}(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)。</p><p>评注：提取ip地址时有用</p><p>Function IsRegu(Regu,s)</p><p>&#39;正则表达式校验</p><p>If Regu=&quot;&quot; Then</p><p>Exit Function</p><p>End if</p><p>Dim Re,Sre</p><p>Set Re = New RegExp</p><p>Re.Pattern = Regu</p><p>Sre = Re.Test(s)</p><p>If Sre = True Then</p><p>IsRegu = True</p><p>Else</p><p>IsRegu = False</p><p>End If</p><p>End Function</p><p>tmp=&quot; &quot;</p><p>if (IsRegu(&quot;\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*&quot;,tmp )) =false then</p><p>msgbox &quot;E-mail地址不合法 ！&quot;</p><p>FieldCheck#N=false</p><p>end if</p><p>不同的语言（如PHP和JAVA）、相同语言的不同类库（如来自Sun的Java Regular Expression类库跟Apache Jakarta的正则表达式类库）间，用法会有所差别，在使用的时候，要注意这些差别。</p><p><strong>验证URL</strong></p><p>function IsValidUrl(str) {[5]</p><p>var regu = &quot;^(https?😕/)&quot;</p><ul><li>&quot;?(([0-9a-z_!<s>*&#39;().&amp;=+$%-]+: )?[0-9a-z_!</s>*&#39;().&amp;=+$%-]+@)?&quot;</li><li>&quot;(([0-9]{1,3}\\.){3}[0-9]{1,3}&quot;</li><li>&quot;|&quot;</li><li>&quot;([0-9a-z_!<s>*&#39;()-]+\\.)*&quot;</s>~~　　+ &quot;([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\\.&quot;~~ ~~　　+ &quot;[a-z]{2,6})&quot;~~ ~~　　+ &quot;(:[0-9]{1,4})?&quot;~~ ~~　　+ &quot;((/?)|&quot;~~ ~~　　+ &quot;(/[0-9a-z_!~~*&#39;().;?😡&amp;=+$,%#-]+)+/?)$&quot;;[5]　　var re = new RegExp(regu); 　　if (!re.test(str)) { 　　return false; 　　} 　　return true; 　　}</li></ul><h1 id="_02编辑本段启示" tabindex="-1"><a class="header-anchor" href="#_02编辑本段启示" aria-hidden="true">#</a> 02编辑本段启示</h1><p>（1） 心中时刻保持新颖想法，尝试用各种新办法来解决遇到的问题。对于遇到的问题，在用常规的解决思路无法解决或不能很好解决的时候，可以大胆探索尝试采用新的方法或思路来解决问题，说大点就是创新！没有新思路估计今天的正则表达式还要等几百年才能露现人间。</p><p>（2） 善于学习和借鉴前人的经验和成果，UNIX鼻祖Ken Thompson是什么样子的人？是被计算机界尊称为“UNIX之父”的大师级别的人物，大师都在不断思考从其它学科、其它知识领域的工作成果，来改进自己的工作或程序，事实也证明这样做取得巨大结果和后来的深远影响是事先谁也无法预估到的，我们在做一些事情或研究的时间，是否也考虑学习大师的优秀习惯？</p>',35),de={href:"http://baike.baidu.com/view/5446025.htm",target:"_blank",rel:"noopener noreferrer"},ne=d('<p>（4） 养成独立思考的习惯。上学时候老师经常说人与动物的最大区别是人能思考。拉美洲有句关于“思考”的谚语是，不会思考的人是白痴，不肯思考的人是懒汉，不敢思考的人是奴隶。我想大家和我一样，既不愿做懒汉、奴隶，更不愿做白痴。所以相信正则分享网的朋友们一定会选择做一个“会思、肯思、敢思”的人。</p><p>（5） 当正则表达式和字符串函数都能解决问题时，一定要使用字符串函数，这样不容易出错，最重要的是字符串函数比正则表达式实现性能上要好得多。[1]</p><h1 id="_03编辑本段教程" tabindex="-1"><a class="header-anchor" href="#_03编辑本段教程" aria-hidden="true">#</a> 03编辑本段教程</h1><p><strong>正则表达式教程</strong>chm完整版是一本详细介绍了正则表达式的电子书教程，全书共分为8个小节，详细的讲述了正则表达式的定义，各种操作符的运算优先级，全部符号解释，正则表达式匹配规则，参考文献以及相关实例等，全书简明呃要，能够很好的帮助读者们正确常握学习好正则表达式，从而在软件编程中得到更好的发挥。[6]</p><h1 id="正则" tabindex="-1"><a class="header-anchor" href="#正则" aria-hidden="true">#</a> 正则</h1><table><thead><tr><th>元字符</th><th>描述</th></tr></thead><tbody><tr><td>\\</td><td>将下一个字符标记为一个特殊字符、或一个原义字符、或一个向后引用、或一个八进制转义符。例如，“\\n”匹配字符“n”。“\\\\n”匹配一个换行符。序列“\\\\”匹配“\\”而“\\(”则匹配“(”。</td></tr><tr><td>^</td><td>匹配输入字符串的开始位置。如果设置了RegExp对象的Multiline属性，^也匹配“\\n”或“\\r”之后的位置。</td></tr><tr><td>$</td><td>匹配输入字符串的结束位置。如果设置了RegExp对象的Multiline属性，$也匹配“\\n”或“\\r”之前的位置。</td></tr><tr><td>*</td><td>匹配前面的子表达式零次或多次。例如，zo*能匹配“z”以及“zoo”。*等价于{0,}。</td></tr><tr><td>+</td><td>匹配前面的子表达式一次或多次。例如，“zo+”能匹配“zo”以及“zoo”，但不能匹配“z”。+等价于{1,}。</td></tr><tr><td>?</td><td>匹配前面的子表达式零次或一次。例如，“do(es)?”可以匹配“does”或“does”中的“do”。?等价于{0,1}。</td></tr><tr><td>{n}</td><td>n是一个非负整数。匹配确定的n次。例如，“o{2}”不能匹配“Bob”中的“o”，但是能匹配“food”中的两个o。</td></tr><tr><td>{n,}</td><td>n是一个非负整数。至少匹配n次。例如，“o{2,}”不能匹配“Bob”中的“o”，但能匹配“foooood”中的所有o。“o{1,}”等价于“o+”。“o{0,}”则等价于“o*”。</td></tr><tr><td>{n,m}</td><td>m和n均为非负整数，其中n&lt;=m。最少匹配n次且最多匹配m次。例如，“o{1,3}”将匹配“fooooood”中的前三个o。“o{0,1}”等价于“o?”。请注意在逗号和两个数之间不能有空格。</td></tr><tr><td>?</td><td>当该字符紧跟在任何一个其他限制符（*,+,?，{n}，{n,}，{n,m}）后面时，匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。例如，对于字符串“oooo”，“o+?”将匹配单个“o”，而“o+”将匹配所有“o”。</td></tr><tr><td>.点</td><td>匹配除“\\n”之外的任何单个字符。要匹配包括“\\n”在内的任何字符，请使用像“[\\s\\S]”的模式。</td></tr><tr><td>(pattern)</td><td>匹配pattern并获取这一匹配。所获取的匹配可以从产生的Matches集合得到，在VBScript中使用SubMatches集合，在JScript中则使用$0…$9属性。要匹配圆括号字符，请使用“\\(”或“\\)”。</td></tr><tr><td>(?:pattern)</td><td>匹配pattern但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用。这在使用或字符“(</td></tr><tr><td>(?=pattern)</td><td>正向肯定预查，在任何匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如，“Windows(?=95</td></tr><tr><td>(?!pattern)</td><td>正向否定预查，在任何不匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如“Windows(?!95</td></tr><tr><td>(?&lt;=pattern)</td><td>反向肯定预查，与正向肯定预查类似，只是方向相反。例如，“(?&lt;=95</td></tr><tr><td>(?&lt;!pattern)</td><td>反向否定预查，与正向否定预查类似，只是方向相反。例如“(?&lt;!95</td></tr><tr><td>x</td><td>y</td></tr><tr><td>[xyz]</td><td>字符集合。匹配所包含的任意一个字符。例如，“[abc]”可以匹配“plain”中的“a”。</td></tr><tr><td>[^xyz]</td><td>负值字符集合。匹配未包含的任意字符。例如，“[^abc]”可以匹配“plain”中的“plin”。</td></tr><tr><td>[a-z]</td><td>字符范围。匹配指定范围内的任意字符。例如，“[a-z]”可以匹配“a”到“z”范围内的任意小写字母字符。<br>注意:只有连字符在字符组内部时,并且出现在两个字符之间时,才能表示字符的范围; 如果出现在字符组的开头,则只能表示连字符本身.</td></tr><tr><td>[^a-z]</td><td>负值字符范围。匹配任何不在指定范围内的任意字符。例如，“[^a-z]”可以匹配任何不在“a”到“z”范围内的任意字符。</td></tr><tr><td>\\b</td><td>匹配一个单词边界，也就是指单词和空格间的位置。例如，“er\\b”可以匹配“never”中的“er”，但不能匹配“verb”中的“er”。</td></tr><tr><td>\\B</td><td>匹配非单词边界。“er\\B”能匹配“verb”中的“er”，但不能匹配“never”中的“er”。</td></tr><tr><td>\\cx</td><td>匹配由x指明的控制字符。例如，\\cM匹配一个Control-M或回车符。x的值必须为A-Z或a-z之一。否则，将c视为一个原义的“c”字符。</td></tr><tr><td>\\d</td><td>匹配一个数字字符。等价于[0-9]。</td></tr><tr><td>\\D</td><td>匹配一个非数字字符。等价于[^0-9]。</td></tr><tr><td>\\f</td><td>匹配一个换页符。等价于\\x0c和\\cL。</td></tr><tr><td>\\n</td><td>匹配一个换行符。等价于\\x0a和\\cJ。</td></tr><tr><td>\\r</td><td>匹配一个回车符。等价于\\x0d和\\cM。</td></tr><tr><td>\\s</td><td>匹配任何空白字符，包括空格、制表符、换页符等等。等价于[ \\f\\n\\r\\t\\v]。</td></tr><tr><td>\\S</td><td>匹配任何非空白字符。等价于[^ \\f\\n\\r\\t\\v]。</td></tr><tr><td>\\t</td><td>匹配一个制表符。等价于\\x09和\\cI。</td></tr><tr><td>\\v</td><td>匹配一个垂直制表符。等价于\\x0b和\\cK。</td></tr><tr><td>\\w</td><td>匹配包括下划线的任何单词字符。等价于“[A-Za-z0-9_]”。</td></tr><tr><td>\\W</td><td>匹配任何非单词字符。等价于“[^A-Za-z0-9_]”。</td></tr><tr><td>\\xn</td><td>匹配n，其中n为十六进制转义值。十六进制转义值必须为确定的两个数字长。例如，“\\x41”匹配“A”。“\\x041”则等价于“\\x04&amp;1”。正则表达式中可以使用ASCII编码。</td></tr><tr><td>\\num</td><td>匹配num，其中num是一个正整数。对所获取的匹配的引用。例如，“(.)\\1”匹配两个连续的相同字符。</td></tr><tr><td>\\n</td><td>标识一个八进制转义值或一个向后引用。如果\\n之前至少n个获取的子表达式，则n为向后引用。否则，如果n为八进制数字（0-7），则n为一个八进制转义值。</td></tr><tr><td>\\nm</td><td>标识一个八进制转义值或一个向后引用。如果\\nm之前至少有nm个获得子表达式，则nm为向后引用。如果\\nm之前至少有n个获取，则n为一个后跟文字m的向后引用。如果前面的条件都不满足，若n和m均为八进制数字（0-7），则\\nm将匹配八进制转义值nm。</td></tr><tr><td>\\nml</td><td>如果n为八进制数字（0-3），且m和l均为八进制数字（0-7），则匹配八进制转义值nml。</td></tr><tr><td>\\un</td><td>匹配n，其中n是一个用四个十六进制数字表示的Unicode字符。例如，\\u00A9匹配版权符号（©）。</td></tr></tbody></table>',6),ae={href:"http://baike.baidu.com/view/1061241.htm",target:"_blank",rel:"noopener noreferrer"},pe={href:"http://baike.baidu.com/view/369708.htm",target:"_blank",rel:"noopener noreferrer"},le=t("p",null,"he is in a rut",-1),se=t("p",null,"the food is Rotten",-1),he=t("p",null,"I like root beer",-1),ie={href:"http://baike.baidu.com/view/1091115.htm",target:"_blank",rel:"noopener noreferrer"},_e=t("p",null,[t("em",null,"grep r.t test.txt")],-1),ue={href:"http://baike.baidu.com/view/369708.htm",target:"_blank",rel:"noopener noreferrer"},ce={href:"http://baike.baidu.com/view/263416.htm",target:"_blank",rel:"noopener noreferrer"},be={href:"http://baike.baidu.com/view/1061241.htm",target:"_blank",rel:"noopener noreferrer"},me={href:"http://baike.baidu.com/view/1091115.htm",target:"_blank",rel:"noopener noreferrer"},fe=t("p",null,"有时候指定“除了×××都匹配”会比较容易达到目的，当抑扬字符（^）出现在方括号中时，它表示“排除”，例如要匹配he ，但是排除前面是t or s的情形（也就是the和she），可以使用：[^st]he。",-1),ge={href:"http://baike.baidu.com/view/1061241.htm",target:"_blank",rel:"noopener noreferrer"},ke={href:"http://baike.baidu.com/view/1061241.htm",target:"_blank",rel:"noopener noreferrer"},qe={href:"http://baike.baidu.com/view/572694.htm",target:"_blank",rel:"noopener noreferrer"},we={href:"http://baike.baidu.com/view/1061241.htm",target:"_blank",rel:"noopener noreferrer"},ve=d("<p>这里有一些有代表性的、比较简单的例子。</p><table><thead><tr><th><strong>vi</strong> <strong>命令</strong></th><th><strong>作用</strong></th></tr></thead><tbody><tr><td>:%s/ */ /g</td><td>把一个或者多个空格替换为一个空格</td></tr><tr><td>:%s/ *$//</td><td>去掉行尾的所有空格</td></tr><tr><td>:%s/^/ /</td><td>在每一行头上加入一个空格</td></tr><tr><td>:%s/^[0-9][0-9]* //</td><td>去掉行首的所有数字字符</td></tr><tr><td>:%s/b[aeio]g/bug/g</td><td>将所有的bag、beg、big和bog改为bug。</td></tr><tr><td>:%s/t\\([aou]\\)g/h\\1t/g</td><td>将所有tag、tog和tug分别改为hat、hot和hut（注意用group的用法和使用\\1引用前面被匹配的字符）</td></tr></tbody></table><p><strong>例1</strong></p><p>将所有方法foo(a,b,c)的实例改为foo(b,a,c)。这里a、b和c可以是任何提供给方法foo()的参数。也就是说我们要实现这样的转换：</p><p>之前 之后</p><p>foo(10,7,2) foo(7,10,2)</p><p>foo(x+13,y-2,10) foo(y-2,x+13,10)</p><p>foo( bar(8), x+y+z, 5) foo( x+y+z, bar(8), 5)</p><p>下面这条替换命令能够实现这一魔法：</p><p><em>:%s/foo(\\([^,]*\\),\\([^,]*\\),\\([^)]*\\))/foo(\\2,\\1,\\3)/g</em></p><p>现在让我们把它打散来加以分析。写出这个表达式的基本思路是找出foo()和它的括号中的三个参数的位置。第一个参数是用这个表达式来识别的：：\\([^,]*\\)，我们可以从里向外来分析它：</p><p>[^,] 除了逗号之外的任何字符</p><p>[^,]* 0或者多个非逗号字符</p><p>\\([^,]*\\) 将这些非逗号字符标记为\\1，这样可以在之后的替换模式表达式中引用它</p>",14),xe={href:"http://baike.baidu.com/view/263416.htm",target:"_blank",rel:"noopener noreferrer"},ye={href:"http://baike.baidu.com/view/1091115.htm",target:"_blank",rel:"noopener noreferrer"},ze={href:"http://baike.baidu.com/view/126530.htm",target:"_blank",rel:"noopener noreferrer"},$e=t("p",null,[t("strong",null,"例2")],-1),Ae={href:"http://baike.baidu.com/view/1138182.htm",target:"_blank",rel:"noopener noreferrer"},Re=d("<p>这里有几行我们现在的数据：</p><p>Bill Jones, HI-TEK Corporation , CA, 95011</p><p>Sharon Lee Smith, Design Works Incorporated, CA, 95012</p><p>B. Amos , Hill Street Cafe, CA, 95013</p><p>Alexander Weatherworth, The Crafts Store, CA, 95014</p><p>...</p><p>我们希望把它变成这个样子：</p><p>Bill Jones,CA 95011,HI-TEK Corporation</p><p>Sharon Lee Smith,CA 95012,Design Works Incorporated</p><p>B. Amos,CA 95013,Hill Street Cafe</p><p>Alexander Weatherworth,CA 95014,The Crafts Store</p><p>...</p><p>我们将用两个正则表达式来解决这个问题。第一个移动列和合并列，第二个用来去掉空格。</p><p>下面就是第一个替换命令：</p><p><em>:%s/\\([^,]*\\),\\([^,]*\\),\\([^,]*\\),\\(.*\\)/\\1,\\3 \\4,\\2/</em></p><p>这里的方法跟例1基本一样，第一个列（姓名）用这个表达式来匹配：\\([^,]*\\)，即第一个逗号之前的所有字符，而姓名内容被用\\1标记下来。公司名和州名缩写字段用同样的方法标记为\\2和\\3，而最后一个字段用\\(.*\\)来匹配（&quot;匹配所有字符直到行末&quot;）。替换部分则引用上面标记的那些内容来进行构造。</p><p>下面这个替换命令则用来去除空格：</p><p><em>:%s/[ \\t]*,[ \\t]*/,/g</em></p>",18),Se={href:"http://baike.baidu.com/view/1138182.htm",target:"_blank",rel:"noopener noreferrer"},Ce=d("<p><strong>例3</strong></p><p>假设有一个多字符的片断重复出现，例如：</p><p>Billy tried really hard</p><p>Sally tried really really hard</p><p>Timmy tried really really really hard</p><p>Johnny tried really really really really hard</p><p>而你想把&quot;really&quot;、&quot;really really&quot;，以及任意数量连续出现的&quot;really&quot;字符串换成一个简单的&quot;very&quot;（simple is good!），那么以下命令：</p><p><em>:%s/\\(really \\)\\(really \\)*/very /</em></p><p>就会把上述的文本变成：</p><p>Billy tried very hard</p><p>Sally tried very hard</p><p>Timmy tried very hard</p><p>Johnny tried very hard</p><p>表达式\\(really \\)*匹配0或多个连续的&quot;really &quot;（注意结尾有个空格），而\\(really \\)\\(really \\)* 匹配1个或多个连续的&quot;really &quot;实例。</p><p><strong>正则表达式语法支持情况</strong></p><table><thead><tr><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td><strong>命令或环境</strong></td><td><strong>.</strong></td><td><strong>[ ]</strong></td><td><strong>^</strong></td><td><strong>$</strong></td><td><strong>\\( \\)</strong></td><td><strong>\\{ \\}</strong></td><td><strong>?</strong></td><td><strong>+</strong></td><td>**</td><td>**</td></tr><tr><td><strong>vi</strong></td><td>√</td><td>√</td><td>√</td><td>√</td><td>√</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td><strong>Visual C++</strong></td><td>√</td><td>√</td><td>√</td><td>√</td><td>√</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td><strong>awk</strong></td><td>√</td><td>√</td><td>√</td><td>√</td><td></td><td></td><td>√</td><td>√</td><td>√</td><td>√</td></tr><tr><td><strong>sed</strong></td><td>√</td><td>√</td><td>√</td><td>√</td><td>√</td><td>√</td><td></td><td></td><td></td><td></td></tr><tr><td><strong>Tcl</strong></td><td>√</td><td>√</td><td>√</td><td>√</td><td>√</td><td></td><td>√</td><td>√</td><td>√</td><td>√</td></tr><tr><td><strong>ex</strong></td><td>√</td><td>√</td><td>√</td><td>√</td><td>√</td><td>√</td><td></td><td></td><td></td><td></td></tr><tr><td><strong>grep</strong></td><td>√</td><td>√</td><td>√</td><td>√</td><td>√</td><td>√</td><td></td><td></td><td></td><td></td></tr><tr><td><strong>egrep</strong></td><td>√</td><td>√</td><td>√</td><td>√</td><td>√</td><td></td><td>√</td><td>√</td><td>√</td><td>√</td></tr><tr><td><strong>fgrep</strong></td><td>√</td><td>√</td><td>√</td><td>√</td><td>√</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td><strong>perl</strong></td><td>√</td><td>√</td><td>√</td><td>√</td><td>√</td><td></td><td>√</td><td>√</td><td>√</td><td>√</td></tr><tr><td><strong>C#</strong></td><td></td><td></td><td></td><td></td><td>√</td><td>√</td><td></td><td></td><td></td><td></td></tr></tbody></table>",16);function Ee(Ie,Ze){const r=a("ExternalLinkIcon");return p(),l("div",null,[h,i,_,u,t("p",null,[e("【3】 正则表达式应用——删除每一行行尾的指定"),t("a",c,[e("字符"),o(r)])]),t("p",null,[e("【4】 正则表达式应用——替换带有"),t("a",b,[e("半角"),o(r)]),e("括号的多行")]),m,t("p",null,[e("② 同时勾选“正则表达式”"),t("a",f,[e("复选框"),o(r)]),e("，然后点击“全部替换”按钮")]),g,t("p",null,[e("“.” =匹配任意"),t("a",k,[e("字符"),o(r)])]),q,w,v,x,y,z,$,t("p",null,[e("在替换对话框里面，勾选“正则表达式”"),t("a",A,[e("复选框"),o(r)]),e("；")]),R,S,C,E,I,Z,B,T,t("p",null,[e("“[”、“]”为单纯的"),t("a",J,[e("字符"),o(r)]),e("，表示添加“[”或“]”，如果输入“其它\\1\\2\\3其它”，则替换结果为：")]),L,V,M,N,U,t("p",null,[e("【3】正则表达式应用——删除每一行行尾的指定"),t("a",P,[e("字符"),o(r)])]),t("p",null,[e("因为这几个"),t("a",W,[e("字符"),o(r)]),e("在行中也是出现的,所以肯定不能用简单的替换实现")]),H,F,D,K,Q,X,t("p",null,[e("在替换对话框中，启用“正则表达式”"),t("a",G,[e("复选框"),o(r)])]),j,O,Y,tt,et,t("p",null,[e("c. 在弹出对话框里面输入要清除的行首"),t("a",rt,[e("字符"),o(r)]),e("，确定")]),ot,dt,nt,at,t("p",null,[e("具体解决方法，在 Editplus 中"),t("a",pt,[e("使用正则表达式"),o(r)]),e("，由于“(”、“)”被用做预设表达式（或者可以称作子表达式）的标志，所以查找")]),lt,t("p",null,[e("时会提示查找不到，所以也就无法进行替换了，这时可以把“(”、“)”使用任意"),t("a",st,[e("字符"),o(r)]),e("标记替代，即"),t("a",ht,[e("半角"),o(r)]),e("句号：“.”。替换内容为")]),it,_t,ut,ct,bt,mt,ft,t("p",null,[e("①、选择“查找”"),t("a",gt,[e("菜单"),o(r)]),e("的“替换”命令，弹出"),t("a",kt,[e("文本替换"),o(r)]),e("对话框。选中“正则表达式”"),t("a",qt,[e("复选框"),o(r)]),e("，表明我们要在查找、替换中"),t("a",wt,[e("使用正则表达式"),o(r)]),e("。然后，选中“替换范围”中的“"),t("a",vt,[e("当前文件"),o(r)]),e("”，表明对当前文件操作。")]),t("p",null,[e("②、单击“查找内容”"),t("a",xt,[e("组合框"),o(r)]),e("右侧的按钮，出现下拉菜单。")]),t("p",null,[e("③、下面的操作添加正则表达式，该表达式代表待查找的空行。（技巧提示：空行仅包括"),t("a",yt,[e("空格符"),o(r)]),e("、"),t("a",zt,[e("制表符"),o(r)]),e("、回车符，且必须以这三个符号之一作为一行的开头，并且以回车符结尾，查找空行的关键是构造代表空行的正则表达式）。")]),t("p",null,[e('直接在"查找"中输入正则表达式“^[ \\t]*\\n”，注意\\t前有'),t("a",$t,[e("空格符"),o(r)]),e("。")]),t("p",null,[e("（1）选择“从行首开始匹配”，“查找内容”"),t("a",At,[e("组合框"),o(r)]),e("中出现字符“^”，表示待查找字符串必须出现在"),t("a",Rt,[e("文本"),o(r)]),e("中一行的行首。")]),t("p",null,[e("（2）选择“"),t("a",St,[e("字符"),o(r)]),e("在范围中”，那么在“^”后会增加一对括号“[]”，当前"),t("a",Ct,[e("插入点"),o(r)]),e("在括号中。括号在正则表达式中表示，文本中的"),t("a",Et,[e("字符"),o(r)]),e("匹配括号中任意一个字符即符合查找条件。")]),t("p",null,[e("（3）按一下"),t("a",It,[e("空格键"),o(r)]),e("，添加"),t("a",Zt,[e("空格符"),o(r)]),e("。"),t("a",Bt,[e("空格符"),o(r)]),e("是空行的一个组成成分。")]),t("p",null,[e("（4）选择“"),t("a",Tt,[e("制表符"),o(r)]),e("”，添加代表制表符的“\\t”。")]),t("p",null,[e("（5）移动"),t("a",Jt,[e("光标"),o(r)]),e("，将当前"),t("a",Lt,[e("插入点"),o(r)]),e("移到“]”之后，然后选择“匹配 0 次或更多”，该操作会添加星号字符“*”。星号表示，其前面的括号“[]”内的"),t("a",Vt,[e("空格符"),o(r)]),e("或"),t("a",Mt,[e("制表符"),o(r)]),e("，在一行中出现0个或多个。")]),Nt,t("p",null,[e("④、“替换为”"),t("a",Ut,[e("组合框"),o(r)]),e("保持空，表示删除查找到的内容。单击“替换”按钮逐个行删除空行，或单击“全部替换”按钮删除全部空行（注意：EditPlus有时存在“全部替换”不能一次性完全删除空行的问题，可能是程序BUG，需要多按几次按钮）。")]),Pt,t("p",null,[e("26.匹配双"),t("a",Wt,[e("字节"),o(r)]),t("a",Ht,[e("字符"),o(r)]),e("(包括汉字在内)：[^\\x00-\\xff]")]),t("p",null,[e("评注：可以用来计算"),t("a",Ft,[e("字符"),o(r)]),e("串的长度（一个双"),t("a",Dt,[e("字节"),o(r)]),e("字符长度计2，ASCII字符计1）")]),Kt,Qt,Xt,Gt,t("p",null,[e("29.匹配首尾空白"),t("a",jt,[e("字符"),o(r)]),e("的正则表达式：^\\s*|\\s*$")]),t("p",null,[e("评注：可以用来删除行首行尾的空白"),t("a",Ot,[e("字符"),o(r)]),e("(包括空格、"),t("a",Yt,[e("制表符"),o(r)]),e("、换页符等等)，非常有用的表达式")]),te,ee,t("p",null,[e("31.匹配帐号是否合法(字母开头，允许5-16"),t("a",re,[e("字节"),o(r)]),e("，允许字母数字下划线)：^[a-zA-Z][a-zA-Z0-9_]{4,15}$")]),oe,t("p",null,[e("（3） 学好数学、英语并保持对数学、英语的兴趣，数学也是人类几千年积累的智慧结晶，学习数学知识可以培养和训练人的思维能力。看这篇文章的朋友，我想很多都是"),t("a",de,[e("计算机相关专业"),o(r)]),e("的朋友，至于数学和英语对于计算机学习和发展的重要性的道理，这里就不在多说，重在实践加持之以恒！")]),ne,t("p",null,[e("最简单的"),t("a",ae,[e("元字符"),o(r)]),e("是点，它能够匹配任何单个字符（注意不包括换行符）。假定有个文件test.txt包含以下几行内容：")]),t("p",null,[e("he is a"),t("a",pe,[e("rat"),o(r)])]),le,se,he,t("p",null,[e("我们可以使用grep命令来测试我们的正则表达式，grep命令"),t("a",ie,[e("使用正则表达式"),o(r)]),e("去尝试匹配指定文件的每一行，并将至少有一处匹配表达式的所有行显示出来。命令")]),_e,t("p",null,[e("在test.txt文件中的每一行中搜索正则表达式r.t，并打印输出匹配的行。正则表达式r.t匹配一个r接着任何一个字符再接着一个t。所以它将匹配文件中的"),t("a",ue,[e("rat"),o(r)]),e("和rut，而不能匹配Rotten中的Rot，因为正则表达式是大小写敏感的。要想同时匹配大写和小写字母，应该使用"),t("a",ce,[e("字符"),o(r)]),e("区间"),t("a",be,[e("元字符"),o(r)]),e("（方括号）。正则表达式[Rr]能够同时匹配R和r。所以，要想匹配一个大写或者小写的r接着任何一个字符再接着一个t就要使用这个表达式：[Rr].t。")]),t("p",null,[e('要想匹配行首的字符要使用抑扬字符（^）——有时也被叫做插入符。例如，想找到text.txt中行首"he"打头的行，你可能会先用简单表达式he，但是这会匹配第三行的the，所以要'),t("a",me,[e("使用正则表达式"),o(r)]),e("^he，它只匹配在行首出现的h。")]),fe,t("p",null,[e("可以使用方括号来指定多个字符区间。例如正则表达式[A-Za-z]匹配任何字母，包括大写和小写的；正则表达式[A-Za-z][A-Za-z]* 匹配一个字母后面接着0或者多个字母（大写或者小写）。当然我们也可以用"),t("a",ge,[e("元字符"),o(r)]),e("+做到同样的事情，也就是：[A-Za-z]+ ，和[A-Za-z][A-Za-z]*完全等价。但是要注意"),t("a",ke,[e("元字符"),o(r)]),e("+ 并不是所有支持正则表达式的程序都支持的。关于这一点可以参考后面的正则表达式语法支持情况。")]),t("p",null,[e("要指定特定数量的匹配，要使用大括号（注意必须使用"),t("a",qe,[e("反斜杠"),o(r)]),e("来转义）。想匹配所有10和100的实例而排除1和 1000，可以使用：10\\{1,2\\}，这个正则表达式匹配数字1后面跟着1或者2个0的模式。在这个"),t("a",we,[e("元字符"),o(r)]),e("的使用中一个有用的变化是忽略第二个数字，例如正则表达式0\\{3,\\} 将匹配至少3个连续的0。")]),ve,t("p",null,[e("\\([^,]*\\), 我们必须找到0或者多个非逗号"),t("a",xe,[e("字符"),o(r)]),e("后面跟着一个逗号，并且非逗号字符那部分要标记出来以备后用。")]),t("p",null,[e("现在正是指出一个"),t("a",ye,[e("使用正则表达式"),o(r)]),e('常见错误的最佳时机。为什么我们要使用[^,]*这样的一个表达式，而不是更加简单直接的写法，例如：.*，来匹配第一个参数呢？设想我们使用模式.*来匹配字符串"10,7,2"，它应该匹配"10,"还是"10,7,"？为了解决这个两义性（ambiguity），正则表达式规定一律按照最长的串来，在上面的例子中就是"10,7,"，显然这样就找出了两个参数而不是我们期望的一个。所以，我们要使用[^,]*来强制取出第一个逗号之前的部分。')]),t("p",null,[e("这个表达式我们已经分析到了：foo(\\([^,]*\\)，这一段可以简单的翻译为“当你找到foo(就把其后直到第一个逗号之前的部分标记为\\1”。然后我们使用同样的办法标记第二个参数为\\2。对第三个参数的标记方法也是一样，只是我们要搜索所有的字符直到右括号。我们并没有必要去搜索第三个参数，因为我们不需要调整它的位置，但是这样的模式能够保证我们只去替换那些有三个参数的foo()方法调用，在foo()是一个"),t("a",ze,[e("重载"),o(r)]),e("（overloading）方法时这种明确的模式往往是比较保险的。然后，在替换部分，我们找到foo()的对应实例，然后利用标记好的部分进行替换，是把第一和第二个参数交换位置。")]),$e,t("p",null,[e("假设有一个CSV（comma separated value）文件，里面有一些我们需要的信息，但是格式却有问题，目前数据的列顺序是：姓名，公司名，州名缩写，邮政编码，现在我们希望将这些数据重新组织，以便在我们的某个软件中使用，需要的格式为：姓名，州名缩写-邮政编码，公司名。也就是说，我们要调整列顺序，还要合并两个列来构成一个新列。另外，我们的软件不能接受逗号前后有任何空格（包括空格和"),t("a",Ae,[e("制表符"),o(r)]),e("）所以我们还必须要去掉逗号前后的所有空格。")]),Re,t("p",null,[e("我们还是分解来看：[ \\t]匹配空格/"),t("a",Se,[e("制表符"),o(r)]),e("，[ \\t]* 匹配0或多个空格/制表符，[ \\t]*,匹配0或多个空格/制表符后面再加一个逗号，最后，[ \\t]*,[ \\t]*匹配0或多个空格/制表符接着一个逗号再接着0或多个空格/制表符。在替换部分，我们简单的我们找到的所有东西替换成一个逗号。这里我们使用了结尾的可选的g参数，这表示在每行中对所有匹配的串执行替换（而不是缺省的只替换第一个匹配串）。")]),Ce])}const Te=n(s,[["render",Ee],["__file","zhengzebiaodashi.html.vue"]]);export{Te as default};
