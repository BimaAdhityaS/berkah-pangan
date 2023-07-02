<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Relawan
 * 
 * @property int $ID_Relawan
 * @property int $ID_Tim
 * @property string $Nama_Lengkap
 * @property string $Jenis_Kelamin
 * @property int $Umur
 * @property string $Email
 * @property int $Telepon
 * @property string|null $Alasan
 * 
 * @property TimRelawan $tim_relawan
 *
 * @package App\Models
 */
class Relawan extends Model
{
	protected $table = 'relawan';
	protected $primaryKey = 'ID_Relawan';
	public $timestamps = false;

	protected $casts = [
		'ID_Tim' => 'int',
		'Umur' => 'int',
		'Telepon' => 'int'
	];

	protected $fillable = [
		'ID_Tim',
		'Nama_Lengkap',
		'Jenis_Kelamin',
		'Umur',
		'Email',
		'Telepon',
		'Alasan'
	];

	public function tim_relawan()
	{
		return $this->belongsTo(TimRelawan::class, 'ID_Tim');
	}
}
