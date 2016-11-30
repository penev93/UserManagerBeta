<?php 
//Objects
class PDF
	{
		public $id_pdf;
		public $name;
		public $pdf_src;
		public $html_id;

		public function __construct($id_pdf, $name, $pdf_src, $html_id)
		{
			$this->id_pdf=$id_pdf;
			$this->name=$name;
			$this->pdf_src=$pdf_src;
			$this->html_id=$html_id;
		}
		
		  public function jsonSerialize()
    {
        return get_object_vars($this);
    }
	}
?>