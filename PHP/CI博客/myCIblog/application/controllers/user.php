<?php
class user extends CI_Controller{
    public function __construct()
    {
        parent::__construct();
        $this->load->model("userModel");
    }

    public function index()
    {
        $this->load->view("index");

    }
    //登陆
    public function login()
    {
          $this->load->view("login");
        $login = $this->input->post("login");
        if($login){//登陆页面
            $un = $this->input->post("username");
            $pwd = $this->input->post("password");
            $row = $this->userModel->get_by_name_pwd($un,$pwd);
           if($row){//登陆成功
               $this->session->set_userdata(array(
                   "username"=>$row
               ));
              redirect("user/adminIndex");
           }
        }
    }
    //登陆成功跳转的个人管理
    public function adminIndex()
    {
        $this->load->view("adminIndex");
    }
    //注册
    public function reg()
    {
        $this->load->view("reg");
        $reg = $this->input->post("regist");
        if($reg){
            $email = $this->input->post('email');
            $name = $this->input->post('name');
            $pwd = $this->input->post('pwd');
            $pwd2 = $this->input->post('pwd2');
            $rows = $this->userModel->save($email,$name,$pwd);
                if($rows){
                    redirect("user/index");
                }

        }
    }
    //注册时检查name是否可用
    public function checkName()
    {
        $un = $this->input->get("username");
        $row = $this->userModel->get_by_username($un);
        if($row){
            echo "fail";
        }else{
            echo "success";
        }
    }
//博客管理页面
    public function newBlog()
    { $user_id = $this->session->userdata("username")->user_id;
        $row = $this->userModel->showType($user_id);
        if($row){
            $this->load->view("newblog",array("blogType"=>$row));
        }
    }
    //添加博客内容
    public function addBlog()
    {
        $submit = $this->input->post("submit");
        if($submit) {
            $name = $this->input->post("title");
            $content =$this->input->post("content");
            $user_id = $this->session->userdata("username")->user_id;
            $type_id =$this->input->post("type_id");
            $row = $this->userModel->addBlog($name,$content,$user_id,$type_id);
            if($row>0){
                redirect("user/showType");//那句话大叔控巨大的那的
            }
        }

    }
    //
    public function blogs()
    {
        $this->load->view("blogs");
    }
    public function blogComments()
    {
        $this->load->view("blogComments");
    }
    //添加博客类型,先展示该用户的所有type
        public function showType()
    {
        $user_id = $this->session->userdata("username")->user_id;
        $row = $this->userModel->showType($user_id);
        if($row){
            $this->load->view("blogCatalogs",array("blogType"=>$row));
        }
    }
    //添加类型
    public function saveType()
    {
        $submit= $this->input->post("submit");
        if($submit){
            $user_id = $this->session->userdata("username")->user_id;
            $name = $this->input->post("name");
            $row = $this->userModel->saveType($name,$user_id);

            if($row>0){

                redirect("user/showType");
            }
        }
    }
    //删除类型
    public function deleteType()
    {
        $type_id= $this->input->get("typeid");
        $row = $this->userModel->deleteType($type_id);
        if($row>0){
            redirect("user/showType");
        }
    }
    //点击修改，跳转页面
    public function editCatalog()
    {
        $user_id = $this->session->userdata("username")->user_id;
        $type_name = $this->input->get("typename");
        $type_id= $this->input->get("typeid");
        $row = $this->userModel->showType($user_id);
        if($row){
            $this->load->view("editCatalog",array(
                "blogType"=>$row,
                "type_name"=> $type_name,
                "type_id"=> $type_id));
        }
    }
    //在修改页面确认修改
    public function update()
    {
        $submit = $this->input->post("submit");
        if($submit){
            $name =  $this->input->post("name");
            $id = $this->input->post("sort_order");
            $row = $this->userModel->update($id,$name);
            if($row>0){
                redirect("user/showType");
            }
        };

    }
    //文章管理
    public function blogList()
    {
        $user_id= $this->session->userdata("username")->user_id;
        $row = $this->userModel->blogList($user_id);
//        var_dump($row);
//        die();
        if($row){
            $this->load->view("blogs",array("blogList"=>$row));
        }
    }

}