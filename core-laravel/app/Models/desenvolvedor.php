<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class desenvolvedor extends Model
{
    use HasFactory;
    protected $table = 'desenvolvedors';

    protected $fillable = [
        'id','nome', 'sexo', 'datanascimento'
    ];
}
