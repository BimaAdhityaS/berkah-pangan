<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Individu
 * 
 * @property int $ID_Individu
 * @property string $Nama_Lengkap
 * @property string $Alamat
 * @property int $Telepon
 * @property string $Email
 * @property string $Jenis_Makanan
 * @property string $EXP_Date
 * @property int $Jumlah_Porsi
 * @property string|null $Keterangan
 * @property string $STATUS
 * 
 * @property Collection|TimRelawan[] $tim_relawans
 *
 * @package App\Models
 */
class Individu extends Model
{
	protected $table = 'individu';
	protected $primaryKey = 'ID_Individu';
	public $timestamps = false;

	protected $casts = [
		'Jumlah_Porsi' => 'int'
	];

	protected $fillable = [
		'Nama_Lengkap',
		'Alamat',
		'Telepon',
		'Email',
		'Jenis_Makanan',
		'EXP_Date',
		'Jumlah_Porsi',
		'Keterangan',
		'Telepon',
		'STATUS'
	];

	public function tim_relawans()
	{
		return $this->hasMany(TimRelawan::class, 'ID_Individu');
	}
}
