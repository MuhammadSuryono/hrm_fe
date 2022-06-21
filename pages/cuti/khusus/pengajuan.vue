<template>
  <div class="row">
    <div class="col-lg-6 col-md-8 col-sm-12" style="margin-right: auto; margin-left: auto;">
      <div class="card">
        <div class="card-header">
          <h5><i class="fas fa-edit" /> Form Pengajuan Cuti Khusus</h5>
        </div>
        <div class="card-body">
            <form>
              <div class="form-group">
                <label>Pilih Jenis Cuti</label>
                <select class="form-control" @change="onSelectTypPaidLeave" name="jenis-cuti" required>
                  <option value="">Pilih Jenis Cuti</option>
                  <option v-for="(paidLeave, iPaidLeave) in typePaidLeave" :key="iPaidLeave" :value="paidLeave.value">{{paidLeave.label}}</option>
                </select>
              </div>
              <div class="form-group" v-if="showFamily">
                <label>Status Yang Bersangkutan</label>
                <select class="form-control" name="status-family" v-model="defaultStatusFamily" required>
                  <option v-for="(family, iFamily) in statusFamily" :key="iFamily" :value="family.value">{{family.label}}</option>
                </select>
              </div>
              <div class="alert alert-warning" role="alert" v-if="showFamily">
                Jika data keluarga anda tidak ada pada daftar dibawah ini. Silahkan klik <NuxtLink to="/user/detail?active=family" class="btn btn-sm btn-outline-dark">Data Keluarga <i class="fa fa-window-restore"/> </NuxtLink> untuk melengkapi data keluarga anda
              </div>
              <div class="form-group" v-if="showFamily">
                <label>Pilih Anggota Keluarga</label>
                <select class="form-control" name="member-family" required>
                  <option value="">Pilih Anggota Keluarga</option>
<!--                  <option v-for="(family, iFamily) in statusFamily" :key="iFamily" :value="family.value">{{family.label}}</option>-->
                </select>
              </div>
              <div class="form-group">
                <label>Lokasi Pelaksanaan Cuti</label>
                <select class="form-control" name="location" required>
                  <option :value="location.value" v-for="(location, iLocation) in locations">{{location.label}}</option>
                </select>
              </div>
              <div class="form-row mb-1">
                <div class="col-6">
                  <label>Dari Tanggal</label>
                  <input type="date" class="form-control" name="start-date" required>
                </div>
                <div class="col-6">
                  <label>Sampai Tanggal</label>
                  <input type="date" class="form-control" name="finish-date" readonly required>
                </div>
              </div>
              <div class="alert alert-warning" role="alert" v-if="isOutOfTown">
                Karena pelaksanaan cuti anda berada di luar kota maka cuti anda akan bertambah sebanyak +2 hari dari tanggal mulai cuti anda
              </div>
              <div class="form-group" >
                <label>Dokumen Pendukung Cuti</label>
                <input type="file" name="document" class="form-control" required>
                <small><i>Dokumen yang anda unggah, merupakan dokumen yang berkaitan dengan cuti anda</i> </small>
              </div>
              <div class="alert alert-info" role="alert" v-if="totalDayOfSelectedPaidLeave > 2">
                Dikarenakan cuti anda melebihi <strong>2 Hari</strong> maka anda harus mengunggah dokumen serah terima kerja
              </div>
              <div class="form-group" v-if="totalDayOfSelectedPaidLeave > 2">
                <label>Dokumen Serah Terima Pekerjaan</label>
                <input type="file" name="document" class="form-control" required>
                <small><i>Dokumen yang anda unggah, merupakan dokumen yang berkaitan dengan serah terima kerja</i> </small>
              </div>
              <div class="mt-2">
                <button class="btn btn-success btn-sm" style="float: right"><i class="fa fa-share" /> Ajukan Cuti</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pengajuan",
  data() {
    return {
      typePaidLeave: [
        {
          value: 'baptis',
          label: 'Cuti Baptis (2 Hari)',
          is_show_family_data: true,
          total_day: 2,
          default_status: 'child'
        },
        {
          value: 'marry',
          label: 'Cuti Menikah (3 Hari)',
          total_day: 3,
          is_show_family_data: false,
          default_status: ''
        },
        {
          value: 'give_birth',
          label: 'Cuti Melahirkan (3 Hari)',
          total_day: 3,
          is_show_family_data: false,
          default_status: ''
        },
        {
          value: 'wife_give_birth',
          label: 'Cuti Istri Melahirkan (3 Hari)',
          total_day: 3,
          is_show_family_data: true,
          default_status: 'wife'
        },
        {
          value: 'mortality',
          label: 'Cuti Kematian Keluarga - [Suami,Istri,Anak,Orang Tua,Mertua] (3 Hari)',
          total_day: 3,
          is_show_family_data: true,
          default_status: ''
        },
        {
          value: 'married_child',
          label: 'Cuti Anak Menikah (2 Hari)',
          total_day: 2,
          is_show_family_data: true,
          default_status: 'child'
        },
        {
          value: 'khitanan',
          label: 'Cuti Khitanan (2 Hari)',
          total_day: 2,
          is_show_family_data: true,
          default_status: 'child'
        },
        {
          value: 'graduation',
          label: 'Cuti Wisuda (1/2 Hari)',
          total_day: 0.5,
          is_show_family_data: false,
          default_status: ''
        },
        {
          value: 'pilgrimage',
          label: 'Ibadah Naik Haji Pertama',
          total_day: 0,
          is_show_family_data: false,
          default_status: ''
        },
        {
          value: 'legal_summons',
          label: 'Pemanggilan Pihak Berwajib',
          total_day: 0,
          is_show_family_data: false,
          default_status: ''
        }
      ],
      statusFamily: [
        {
          value: 'child',
          label: 'Anak',
        },
        {
          value: 'wife',
          label: 'Istri',
        },
        {
          value: 'husband',
          label: 'Suami',
        },
        {
          value: 'parents',
          label: 'Orang Tua',
        },
        {
          value: 'parents_in_law',
          label: 'Mertua',
        }
      ],
      locations: [
        {
          value: 'in_the_city',
          label: 'Dalam Kota (Jabodetabek)'
        },
        {
          value: 'out_of_thown',
          label: 'Luar Kota (Luar Jabodetabek)'
        }
      ],
      showFamily: false,
      defaultStatusFamily: '',
      totalDayOfSelectedPaidLeave: 0,
      isOutOfTown: false
    }
  },
  methods: {
    onSelectTypPaidLeave: function (event) {
      let value = event.target.value
      let dataSelected = this.typePaidLeave.filter((item) => item.value === value)
      console.log(dataSelected.length > 0)
      if (dataSelected.length > 0) {
        this.showFamily = dataSelected[0].is_show_family_data
        this.defaultStatusFamily = dataSelected[0].default_status
        this.totalDayOfSelectedPaidLeave = dataSelected[0].total_day
      } else {
        this.showFamily = false
        this.defaultStatusFamily = ''
        this.totalDayOfSelectedPaidLeave = 0
      }
    }
  }

}
</script>

<style scoped>

</style>
