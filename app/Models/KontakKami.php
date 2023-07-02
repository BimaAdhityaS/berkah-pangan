<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class KontakKami
 * 
 * @property int $ID_Kontak
 * @property string $Nama
 * @property string|null $Email
 * @property int|null $Telepon
 * @property string|null $Pesan
 *
 * @package App\Models
 */
class KontakKami extends Model
{
	protected $table = 'kontak_kami';
	protected $primaryKey = 'ID_Kontak';
	public $timestamps = false;

	protected $casts = [
	];

	protected $fillable = [
		'Nama',
		'Email',
		'Telepon',
		'Pesan'
	];
}
