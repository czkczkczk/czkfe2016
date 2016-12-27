<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {

    public function __construct()
	{
		parent::__construct();
		$this -> load ->model("userModel");
	}

	public function index()
	{
		$this->load->view('login');
	}

	public function login()
	{
		$login = $this -> input -> post("login");
		$regist = $this -> input -> post("regist");
			if($login){//登陆
				$username = $this -> input -> post("username");
				$password = $this -> input -> post("password");
				$row = $this -> userModel -> get_by_username_pwd($username,$password);

				if($row){//登陆成功
					redirect("user/user_list");
				}else{//登陆失败
					echo "fail";
				}
			}else{//注册
				$this -> load -> view("regist");
			}
	}
	public function user_list()
	{
		$user_list = $this -> userModel -> get_all();
		$this ->load ->view("list",array("list"=>$user_list));
	}
	//点击修改执行的查询user_id的方法
	public function  change()
	{
		$user_id = $this->input->get("user_id");
		$user =$this->userModel->get_by_id($user_id);
		$this->load->view("change",array("user"=>$user));

	}
	//跳到更改页面执行的更改方法
	public function update_user()
	{
		$user_id = $this->input->post("user_id");
		$username = $this->input->post("username");
		$password = $this->input->post("password");

		$rows = $this->userModel->update_user($user_id, $username, $password);

		if($rows>0){
			redirect("user/user_list");
		}else{
			echo "fail";
		}
	}
	//删除
	public function del()
	{
		$user_id = $this -> input ->get("user_id");
		$rows =$this -> userModel ->del_user($user_id);
		if($rows>0){
			redirect("user/user_list");
		}else{
			echo "fail";
		}
	}
//注册
	public function check_name()
	{
		$username = $this->input->get("username");
		$row = $this->userModel->get_by_username($username);
		if($row){
			echo "fail";
		}else{
			echo "success";
		}
	}
	public function regist()
	{
		$username = $this->input->post("username");
		$password = $this->input->post("password");
		$rows = $this->userModel->save($username,$password);
		if($rows>0){
			redirect("user/index");
		}else{
			echo "fail";
		}
	}

}
