<?php
namespace App\Http\Controllers\Api;
use App\File;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public function __construct(File $file){
		response();
		$this->file = $file;
    }
    public function upload(Request $request){
        $image = $request->file('image');

        $fileName = time().'.'.$image->getClientOriginalExtension();
        $path = $request->file('image')->move(public_path("/uploads"),$fileName);
        $photoURL = url('/uploads/'.$fileName);
        return response()->json(['url'=>$photoURL],200);
    }
    public function UploadNewsPhoto(Request $request){
        $fileFormat = $request->file('file')->getClientOriginalExtension();
        $PhotoValidFormat = array('jpg', 'png', 'gif', 'jpeg', 'bmp');
        if (in_array(strtolower($fileFormat), $PhotoValidFormat) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
            $PhotoName = uniqid() . '.' . $request->file('file')->getClientOriginalExtension();
        $fileSize = number_format($_FILES['file']['size'] / 1048576, 2);//to mb
        if ($fileSize <= 50) {
            if ($request->file('file')->move(base_path() . env('Photo_News_UPLOAD_PATH'), $PhotoName)) {
               return json_encode(array(
                 'location'=>'/posts/images/'.$PhotoName

             ));


           } else
           $res = -1;
        } //bad format or size not allowed for php.ini
        else {
            if (isset($_FILES['file']['error']) && $_FILES['file']['error'] == 1)
                $res = -1;
            else
                $res = 0;
        }
        echo json_encode(array('res' => $res));
    }

}
    // public function upload(Request $request){
      
    // }
}
