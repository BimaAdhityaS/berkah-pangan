<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Restoran
 * 
 * @property int $ID_Restoran
 * @property string $Nama_Restoran
 * @property string $Alamat
 * @property string $Nama_CP
 * @property int $Telepon
 * @property string $Email
 * @property string $Jenis_Makanan
 * @property Carbon $EXP_Date
 * @property int $Jumlah_Porsi
 * @property string|null $Keterangan
 * @property string $STATUS
 * 
 * @property Collection|TimRelawan[] $tim_relawans
 *
 * @package App\Models
 */
class Restoran extends Model
{
	protected $table = 'restoran';
	protected $primaryKey = 'ID_Restoran';
	public $timestamps = false;

	protected $casts = [
		'Jumlah_Porsi' => 'int'
	];

	protected $fillable = [
		'Nama_Restoran',
		'Alamat',
		'Nama_CP',
		'Telepon',
		'Email',
		'Jenis_Makanan',
		'EXP_Date',
		'Jumlah_Porsi',
		'Keterangan',
		'STATUS'
	];

	public function tim_relawans()
	{
		return $this->hasMany(TimRelawan::class, 'ID_Restoran');
	}
}
