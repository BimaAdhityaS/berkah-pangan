<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class TimRelawan
 * 
 * @property int $ID_Tim
 * @property int|null $ID_Individu
 * @property int|null $ID_Restoran
 * @property int $ID_Penerima
 * @property int $ID_Akun
 * @property Carbon $Tggl_Mulai
 * @property Carbon $Tggl_Selesai
 * 
 * @property Akun $akun
 * @property Individu|null $individu
 * @property UsulanPenerima $usulan_penerima
 * @property Restoran|null $restoran
 * @property Collection|Relawan[] $relawans
 *
 * @package App\Models
 */
class TimRelawan extends Model
{
	protected $table = 'tim_relawan';
	protected $primaryKey = 'ID_Tim';
	public $timestamps = false;

	protected $casts = [
		'ID_Individu' => 'int',
		'ID_Restoran' => 'int',
		'ID_Penerima' => 'int',
		'ID_Akun' => 'int',
		'Tggl_Mulai' => 'datetime',
		'Tggl_Selesai' => 'datetime'
	];

	protected $fillable = [
		'ID_Individu',
		'ID_Restoran',
		'ID_Penerima',
		'ID_Akun',
		'Tggl_Mulai',
		'Tggl_Selesai'
	];

	public function akun()
	{
		return $this->belongsTo(Akun::class, 'ID_Akun');
	}

	public function individu()
	{
		return $this->belongsTo(Individu::class, 'ID_Individu');
	}

	public function usulan_penerima()
	{
		return $this->belongsTo(UsulanPenerima::class, 'ID_Penerima');
	}

	public function restoran()
	{
		return $this->belongsTo(Restoran::class, 'ID_Restoran');
	}

	public function relawans()
	{
		return $this->hasMany(Relawan::class, 'ID_Tim');
	}
}
