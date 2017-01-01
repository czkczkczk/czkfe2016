<?php
class userModel extends CI_Model
{
    //登陆查询name，pwd
    public function get_by_name_pwd($un,$pwd)
    {
       return $this->db->get_where("t_user",array(
            "username"=>$un,
            "password"=>$pwd
        ))->row();
    }
    //注册添加email，name，pwd
    public function save($email,$un,$pwd)
    {
        $this->db->insert("t_user",array(
            "email"=>$email,
            "username"=>$un,
            "password"=>$pwd
        ));
        return $this->db->affected_rows();
    }
    //注册时检查name是否可用
    public function get_by_username($username)
    {
        return $this->db->get_where("t_user",array(
            "username"=>$username
        ))->result();
    }

    //展示所有类型，添加博客类型,先展示该用户的所有type
    public function showType($user_id)
    {
       return $this->db->get_where("t_blog_type",array(
            "user_id"=>$user_id
        ))->result();
    }
    public function saveType($typename,$user_id)
    {
        $this->db->insert("t_blog_type",array(
            "type_name"=>$typename,
            "user_id"=>$user_id
        ));
        return $this->db->affected_rows();
    }
    public function deleteType($type_id)
    {
     $this->db->delete("t_blog_type",array(
         "type_id"=>$type_id
     ));
        return $this->db->affected_rows();
    }
    //在修改页面确认修改
    public function update($id,$type_name)
    {
        $this->db->where("type_id",$id);
        $this->db->update("t_blog_type",array("type_name"=>$type_name));
        return $this->db->affected_rows();

    }
    //添加博客内容
    public function addBlog($title,$content,$user_id,$type_id)
    {
        $this->db->insert("t_blog",array(
            "title"=>$title,
            "content"=>$content,
            "user_id"=>$user_id,
            "type_id"=>$type_id
        ));
        return $this->db->affected_rows();
    }
    //文章管理，文章标题
    public function blogList($user_id)
    {
      $sql = "select t_blog.*, t_blog_type.type_name from t_blog left JOIN t_blog_type on t_blog.type_id = t_blog_type.type_id  where t_blog.user_id=? ";
      return $this->db->query($sql, array($user_id)) ->result();

    }

}