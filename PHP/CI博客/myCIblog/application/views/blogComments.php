<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xml:lang="zh-CN" xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN"><head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta http-equiv="Content-Language" content="zh-CN">
  <title>Johnny的博客 - SYSIT个人博客</title>
	<base href="<?php echo site_url(); ?>">
      <link rel="stylesheet" href="css/space2011.css" type="text/css" media="screen">
  <link rel="stylesheet" type="text/css" href="css/jquery.css" media="screen">
  <script type="text/javascript" src="javascripts/jquery-1.js"></script>
  <script type="text/javascript" src="javascripts/jquery.js"></script>
  <script type="text/javascript" src="javascripts/jquery_002.js"></script>
  <script type="text/javascript" src="javascripts/oschina.js"></script>
  <style type="text/css">
    body,table,input,textarea,select {font-family:Verdana,sans-serif,宋体;}	
  </style>
</head>
<body>
<!--[if IE 8]>
<style>ul.tabnav {padding: 3px 10px 3px 10px;}</style>
<![endif]-->
<!--[if IE 9]>
<style>ul.tabnav {padding: 3px 10px 4px 10px;}</style>
<![endif]-->
<div id="OSC_Screen"><!-- #BeginLibraryItem "/Library/OSC_Banner.lbi" -->
<div id="OSC_Banner">
    <div id="OSC_Slogon">Johnny's Blog</div>
    <div id="OSC_Channels">
        <ul>
        <li><a href="#" class="project">心情 here...</a></li>
        </ul>
    </div>
    <div class="clear"></div>
</div><!-- #EndLibraryItem --><div id="OSC_Topbar">
	  <div id="VisitorInfo">
		当前访客身份：
		  <?php
		  echo $this->session->userdata("username")->username;
		  ?>
				 [ <a href="#">退出</a> ]
				<span id="OSC_Notification">
			<a href="#" class="msgbox" title="进入我的留言箱">你有<em>0</em>新留言</a>
																				</span>
    </div>
		<div id="SearchBar">
    		<form action="#">
								<input name="user" value="154693" type="hidden">
																								<input id="txt_q" name="q" class="SERACH" value="在此空间的博客中搜索" onblur="(this.value=='')?this.value='在此空间的博客中搜索':this.value" onfocus="if(this.value=='在此空间的博客中搜索'){this.value='';};this.select();" type="text">
				<input class="SUBMIT" value="搜索" type="submit">
    		</form>
		</div>
		<div class="clear"></div>
	</div>
	<div id="OSC_Content">
<div id="AdminScreen">
    <div id="AdminPath">
        <a href="index_logined.htm">返回我的首页</a>&nbsp;»
    	<span id="AdminTitle">管理首页</span>
    </div>
    <div id="AdminMenu"><ul>
	<li class="caption">个人信息管理		
		<ol>
			<li><a href="user/inbox">站内留言(0/1)</a></li>
			<li><a href="user/profile">编辑个人资料</a></li>
			<li><a href="user/chpwd">修改登录密码</a></li>
			<li><a href="user/userSettings">网页个性设置</a></li>
		</ol>
	</li>		
</ul>
<ul>
	<li class="caption">博客管理	
		<ol>
			<li><a href="user/newBlog">发表博客</a></li>
			<li><a href="user/showType">博客设置/分类管理</a></li>
			<li><a href="user/blogList">文章管理</a></li>
			<li class="current"><a href="user/blogComments">博客评论管理</a></li>
		</ol>
	</li>
</ul>
</div>
    <div id="AdminContent">
<div class="MainForm BlogCommentManage">
  <h3>共有 3 篇博客评论，每页显示 20 个，共 1 页</h3>
  <ul>
		<li id="cmt_24027_154693_261665734" class="row_1">
		<span class="portrait"><a href="#" target="_blank"><img src="images/portrait.gif" alt="Johnny" title="Johnny" class="SmallPortrait" user="154693" align="absmiddle"></a></span>
		<span class="comment">
		<div class="user"><b>Johnny</b> 评论了 <a href="viewPost_comment.htm" target="_blank">测试文章3</a></div>
		<div class="content"><p>hoho</p></div>
		<div class="opts">
			<span style="float:right;">
			<a href="javascript:delete_c_by_id(24027,154693,261665734)">删除</a> |
			<a href="javascript:delete_c_by_user(154693)">删除此人所有评论</a>
			</span>			
			2011-06-18 00:37
		</div>
		</span>
		<div class="clear"></div>
	</li>
		<li id="cmt_24026_154693_261665461" class="row_0">
		<span class="portrait"><a href="#" target="_blank"><img src="images/portrait.gif" alt="Johnny" title="Johnny" class="SmallPortrait" user="154693" align="absmiddle"></a></span>
		<span class="comment">
		<div class="user"><b>Johnny</b> 评论了 <a href="viewPost_logined.htm" target="_blank">测试文章2</a></div>
		<div class="content"><p>测试评论111</p></div>
		<div class="opts">
			<span style="float:right;">
			<a href="javascript:delete_c_by_id(24026,154693,261665461)">删除</a> |
			<a href="javascript:delete_c_by_user(154693)">删除此人所有评论</a>
			</span>			
			2011-06-18 00:15
		</div>
		</span>
		<div class="clear"></div>
	</li>
		<li id="cmt_24026_154693_261665458" class="row_1">
		<span class="portrait"><a href="#" target="_blank"><img src="images/portrait.gif" alt="Johnny" title="Johnny" class="SmallPortrait" user="154693" align="absmiddle"></a></span>
		<span class="comment">
		<div class="user"><b>Johnny</b> 评论了 <a href="viewPost_logined.htm" target="_blank">测试文章2</a></div>
		<div class="content"><p>测试评论</p></div>
		<div class="opts">
			<span style="float:right;">
			<a href="javascript:delete_c_by_id(24026,154693,261665458)">删除</a> |
			<a href="javascript:delete_c_by_user(154693)">删除此人所有评论</a>
			</span>			
			2011-06-18 00:14
		</div>
		</span>
		<div class="clear"></div>
	</li>
	  </ul>
</div>
<script type="text/javascript">
<!--
function delete_c_by_id(nid,uid,cid){
  if(confirm("您确认要删除此篇评论？")){
    var args = "cmt="+cid+"#"+uid+"#"+nid;
    ajax_post("/action/blog/delete_blog_comments?space=154693",args,function(){$("#cmt_"+nid+"_"+uid+"_"+cid).fadeOut();});
  }
}
function delete_c_by_user(uid){
  if(confirm("您确认要删除此人发表的所有评论？")){
    var args = "user="+uid;
    ajax_post("/action/blog/delete_blog_comments_by_user?space=154693",args,function(){location.reload();});
  }
}
function delete_c_by_ip(ip){
  if(confirm("您确认要删除来自IP地址："+ip+"发表的所有评论？")){
    var args = "ip="+ip;
    ajax_post("/action/blog/delete_blog_comments_by_ip?space=154693",args,function(){location.reload();});
  }
}
//-->
</script></div>
	<div class="clear"></div>
</div>
<script type="text/javascript">
<!--
$(document).ready(function() {
	$('#AdminTitle').text('管理首页');
});
$('.AutoCommitForm').ajaxForm({
    success: function(html) {	
		$('#error_msg').hide();
		if(html.length>0)
			$('#error_msg').html("<span class='error_msg'>"+html+"</span>");
		else
			$('#error_msg').html("<span class='ok_msg'>操作已成功完成</span>")
		$('#error_msg').show("fast");
    }
});
$('.AutoCommitJSONForm').ajaxForm({
	dataType: 'json',
    success: function(json) {	
		$('#error_msg').hide();
		if(json.error==0){
			if(json.msg)
				$('#error_msg').html("<span class='ok_msg'>"+json.msg+"</span>");
			else
				$('#error_msg').html("<span class='ok_msg'>操作已成功完成</span>");
		}
		else {
			if(json.msg)
				$('#error_msg').html("<span class='error_msg'>"+json.msg+"</span>");
			else
				$('#error_msg').html("<span class='error_msg'>操作已成功完成</span>");
		}
		$('#error_msg').show("fast");
    }
});
//-->
</script>
</div>
	<div class="clear"></div>
	<div id="OSC_Footer">© 赛斯特(WWW.SYSIT.ORG)</div>
</div>
<script type="text/javascript" src="javascripts/space.htm" defer="defer"></script>
<script type="text/javascript">
<!--
$(document).ready(function() {
	$('a.fancybox').fancybox({titleShow:false});
});

function pay_attention(pid,concern_it){
	if(concern_it){
		$("#p_attention_count").load("/action/favorite/add?mailnotify=true&type=3&id="+pid);
		$('#attention_it').html('<a href="javascript:pay_attention('+pid+',false)" style="color:#A00;">取消关注</a>');	
	}
	else{
		$("#p_attention_count").load("/action/favorite/cancel?type=3&id="+pid);
		$('#attention_it').html('<a href="javascript:pay_attention('+pid+',true)" style="color:#3E62A6;">关注此文章</a>');
	}
}
//-->
</script>
</body></html>