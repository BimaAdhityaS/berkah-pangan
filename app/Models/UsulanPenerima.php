<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class UsulanPenerima
 * 
 * @property int $ID_Penerima
 * @property string $Nama_Lokasi
 * @property string $Alamat
 * @property string $Nama_CP
 * @property int $Telepon
 * @property string $Email
 * @property int $Perkiraan_Jpenerima
 * @property string|null $Keterangan
 * @property string $STATUS
 * 
 * @property Collection|TimRelawan[] $tim_relawans
 *
 * @package App\Models
 */
class UsulanPenerima extends Model
{
	protected $table = 'usulan_penerima';
	protected $primaryKey = 'ID_Penerima';
	public $timestamps = false;

	protected $casts = [
		'Perkiraan_Jpenerima' => 'int'
	];

	protected $fillable = [
		'Nama_Lokasi',
		'Alamat',
		'Nama_CP',
		'Telepon',
		'Email',
		'Perkiraan_Jpenerima',
		'Keterangan',
		'STATUS'
	];

	public function tim_relawans()
	{
		return $this->hasMany(TimRelawan::class, 'ID_Penerima');
	}
}
