<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'company_id',
        'name',
        'category',
        'description',
        'image',
        'sku',
        'hsn',
        'unit',
        'default_quantity',
        'purchase_price',
        'sales_price',
        'tax',
    ];
}

