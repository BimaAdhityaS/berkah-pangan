<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Akun
 * 
 * @property int $ID_Akun
 * @property string $Username
 * @property string $Email
 * @property string $Password
 * @property string $Roles
 * 
 * @property Collection|TimRelawan[] $tim_relawans
 *
 * @package App\Models
 */
class Akun extends Model
{
	protected $table = 'akun';
	protected $primaryKey = 'ID_Akun';
	public $timestamps = false;

	protected $fillable = [
		'Username',
		'Email',
		'Password',
		'Roles'
	];

	public function tim_relawans()
	{
		return $this->hasMany(TimRelawan::class, 'ID_Akun');
	}
}
