## Button 按钮组件 开发疑问
### 1.大小问题
&ensp; &ensp;antd-mobile的按钮大小是根据按钮内 字体大小 和 上下padding 来控制的；我们的UI图上的按钮大小是直接给的px值，这样会导致一个问题，如果直接按UI图的px值写死，若按钮内文字较多可能会导致换行，影响观感。如果采用和antd-mobile一样的方式控制按钮大小，则需要确定每个size的按钮的padding值（目前UI图上没有）
### 2.次按钮
&ensp; &ensp;次按钮下面还有一个主按钮和次按钮。