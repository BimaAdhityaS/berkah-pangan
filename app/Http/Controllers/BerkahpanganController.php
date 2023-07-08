<?php

namespace App\Http\Controllers;

use App\Models\Individu;
use App\Models\KontakKami;
use App\Models\Restoran;
use App\Models\UsulanPenerima;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BerkahpanganController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Homepage', [
            'title' => 'Beranda',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->is('individu')){
        $individu = new Individu();
        $individu->Nama_Lengkap = $request->nama;
        $individu->Alamat = $request->alamat;
        $individu->Telepon = $request->telepon;
        $individu->Email = $request->email;
        $individu->Jenis_Makanan = $request->makanan;
        $individu->EXP_Date = $request->exp;
        $individu->Jumlah_Porsi = $request->porsi;
        $individu->Keterangan = $request->keterangan;
        $individu->STATUS = $request->status;
        $individu->save();
        return redirect()->back()->with('message', 'Data berhasil terkirim');
        }

        if ($request->is('restoran')){
        $restoran = new Restoran();
        $restoran->Nama_Restoran = $request->nama_restoran;
        $restoran->Alamat = $request->alamat_resto;
        $restoran->Nama_CP = $request->nama_cp;
        $restoran->Telepon = $request->telepon_resto;
        $restoran->Email = $request->email_resto;
        $restoran->Jenis_Makanan=$request->makanan_resto;
        $restoran->EXP_Date= $request->exp_resto;
        $restoran->Jumlah_Porsi= $request->porsi_resto;
        $restoran->Keterangan= $request->keterangan_resto;
        $restoran->STATUS= $request->status;
        $restoran->save();
        return redirect()->back()->with('message', 'Data berhasil terkirim');
        }
        
        if ($request->is('penerima')){
            $penerima = new UsulanPenerima();
            $penerima->Nama_Lokasi = $request->lokasi;
            $penerima->Alamat = $request->alamat;
            $penerima->Nama_CP = $request->cp;
            $penerima->Telepon = $request->telepon;
            $penerima->Email = $request->email;
            $penerima->Perkiraan_Jpenerima = $request->jpenerima;
            $penerima->Keterangan = $request->keterangan;
            $penerima->STATUS = $request->status;
            $penerima->save();
            return redirect()->back()->with('message', 'Data berhasil terkirim');
        }

        if ($request->is('kontakkami')){
            $kontakkami = new KontakKami();
            $kontakkami->Nama = $request->nama;
            $kontakkami->Email = $request->email;
            $kontakkami->Telepon = $request->telepon;
            $kontakkami->Pesan = $request->pesan;
            $kontakkami->save();
            return redirect()->back()->with('message', 'Data berhasil terkirim');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\berkahpangan  $berkahpangan
     * @return \Illuminate\Http\Response
     */
    public function show($berkahpangan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\berkahpangan  $berkahpangan
     * @return \Illuminate\Http\Response
     */
    public function edit($berkahpangan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\berkahpangan  $berkahpangan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $berkahpangan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\berkahpangan  $berkahpangan
     * @return \Illuminate\Http\Response
     */
    public function destroy($berkahpangan)
    {
        //
    }
}
