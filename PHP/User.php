<?php 
//Objects
class User
	{
		public $user_id;
		public $username;
		public $password;
		public $role;
		
		public function __construct($user_id,$username, $password, $role)
		{
			$this->user_id=$user_id;
			$this->username=$username;
			$this->password=$password;
			$this->role=$role;
		}
		
		  public function jsonSerialize()
    {
        return get_object_vars($this);
    }
	}
?>