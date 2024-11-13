import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { Box } from '@mui/material';
// Data JSON laporan keuangan
const data = {
  tahun: 2024,
  bulan: "November",
  laporan_keuangan: {
    pendapatan: {
      total_pendapatan: 100000000,
      sumber_pendapatan: [
        { nama: "Penjualan Produk A", jumlah: 50000000 },
        { nama: "Penjualan Produk B", jumlah: 30000000 },
        { nama: "Layanan Jasa", jumlah: 20000000 },
      ],
    },
    pengeluaran: {
      total_pengeluaran: 60000000,
      rincian_pengeluaran: [
        { nama: "Gaji Karyawan", jumlah: 25000000 },
        { nama: "Biaya Operasional", jumlah: 15000000 },
        { nama: "Pemasaran", jumlah: 10000000 },
        { nama: "Pajak dan Iuran", jumlah: 10000000 },
      ],
    },
    laba_rugi: {
      laba_kotor: 40000000,
      biaya_bunga: 5000000,
      laba_bersih: 35000000,
    },
    neraca: {
      aset: {
        total_aset: 150000000,
        aset_lancar: 80000000,
        aset_tetap: 70000000,
      },
      kewajiban: {
        total_kewajiban: 50000000,
        utang_jangka_pendek: 20000000,
        utang_jangka_panjang: 30000000,
      },
      ekuitas: {
        total_ekuitas: 100000000,
      },
    },
  },
};

const FinancialReportTable = () => {
  return (
    <Box>     
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell><strong>Kategori</strong></TableCell>
                <TableCell align="right"><strong>Jumlah (IDR)</strong></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {/* Pendapatan */}
            <TableRow>
                <TableCell colSpan={2}><strong>Pendapatan</strong></TableCell>
            </TableRow>
            {data.laporan_keuangan.pendapatan.sumber_pendapatan.map((item, index) => (
                <TableRow key={index}>
                <TableCell>{item.nama}</TableCell>
                <TableCell align="right">{item.jumlah.toLocaleString()}</TableCell>
                </TableRow>
            ))}
            <TableRow>
                <TableCell><strong>Total Pendapatan</strong></TableCell>
                <TableCell align="right"><strong>{data.laporan_keuangan.pendapatan.total_pendapatan.toLocaleString()}</strong></TableCell>
            </TableRow>

            {/* Pengeluaran */}
            <TableRow>
                <TableCell colSpan={2}><strong>Pengeluaran</strong></TableCell>
            </TableRow>
            {data.laporan_keuangan.pengeluaran.rincian_pengeluaran.map((item, index) => (
                <TableRow key={index}>
                <TableCell>{item.nama}</TableCell>
                <TableCell align="right">{item.jumlah.toLocaleString()}</TableCell>
                </TableRow>
            ))}
            <TableRow>
                <TableCell><strong>Total Pengeluaran</strong></TableCell>
                <TableCell align="right"><strong>{data.laporan_keuangan.pengeluaran.total_pengeluaran.toLocaleString()}</strong></TableCell>
            </TableRow>

            {/* Laba Rugi */}
            <TableRow>
                <TableCell colSpan={2}><strong>Laba/Rugi</strong></TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Laba Kotor</TableCell>
                <TableCell align="right">{data.laporan_keuangan.laba_rugi.laba_kotor.toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Biaya Bunga</TableCell>
                <TableCell align="right">{data.laporan_keuangan.laba_rugi.biaya_bunga.toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell><strong>Laba Bersih</strong></TableCell>
                <TableCell align="right"><strong>{data.laporan_keuangan.laba_rugi.laba_bersih.toLocaleString()}</strong></TableCell>
            </TableRow>

            {/* Neraca */}
            <TableRow>
                <TableCell colSpan={2}><strong>Neraca</strong></TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Total Aset</TableCell>
                <TableCell align="right">{data.laporan_keuangan.neraca.aset.total_aset.toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Aset Lancar</TableCell>
                <TableCell align="right">{data.laporan_keuangan.neraca.aset.aset_lancar.toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Aset Tetap</TableCell>
                <TableCell align="right">{data.laporan_keuangan.neraca.aset.aset_tetap.toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Total Kewajiban</TableCell>
                <TableCell align="right">{data.laporan_keuangan.neraca.kewajiban.total_kewajiban.toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Utang Jangka Pendek</TableCell>
                <TableCell align="right">{data.laporan_keuangan.neraca.kewajiban.utang_jangka_pendek.toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Utang Jangka Panjang</TableCell>
                <TableCell align="right">{data.laporan_keuangan.neraca.kewajiban.utang_jangka_panjang.toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell><strong>Total Ekuitas</strong></TableCell>
                <TableCell align="right"><strong>{data.laporan_keuangan.neraca.ekuitas.total_ekuitas.toLocaleString()}</strong></TableCell>
            </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
    </Box>
  );
};

export default FinancialReportTable;
