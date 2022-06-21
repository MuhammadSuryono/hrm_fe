<template>
  <div>
    <div class="alert alert-warning" role="alert" v-if="image === ''">
      Anda perlu mengunggah Dokumen KK anda untuk dokumen valid keluarga anda
    </div>
    <div class="alert alert-primary" role="alert" v-if="image !== ''">
      Anda telah mengunggah Dokumen KK anda. Klik
      <button class="btn btn-outline-dark btn-sm" data-toggle="modal" data-target="#imageModal"><i class="fa fa-image"/> Lihat</button> untuk melihat KK Anda<br/>
      Klik <NuxtLink :to="{path: '/user/detail', query: {active: 'document'}}" class="btn btn-outline-dark btn-sm"><i class="fa fa-file"/> Ganti KK</NuxtLink> untuk mengubah dokumen anda
    </div>
    <h4 class="sub-title">Data Keluarga</h4>
    <button class="btn btn-primary btn-sm mb-3" data-toggle="modal" data-target="#formFamily"><i class="fa fa-plus"/> Tambah Data Keluarga</button>
    <div class="row">
      <div class="col-12">
        <div class="table-responsive">
          <table class="table table-striped table-hover">
            <thead>
              <th>No</th>
              <th>Nama Lengkap</th>
              <th>Status</th>
              <th>Tempat, Tanggal Lahir</th>
              <th>Pekerjaan</th>
              <th>Alamat</th>
              <th>Aksi</th>
            </thead>
          </table>
        </div>
      </div>
    </div>
    <div class="modal fade" id="imageModal" tabindex="-1" role="dialog" aria-labelledby="imageModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="imageModalLabel">Kartu Keluarga</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="image" style="width: 100%">
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="formFamily" tabindex="-1" role="dialog" aria-labelledby="formFamilyLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="formFamilyLabel">Data Keluarga</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form>
            <div class="modal-body">
              <div class="form-group">
                <label>Nama Lengkap</label>
                <input type="text" class="form-control" name="full_name" required>
              </div>
              <div class="form-group">
                <label>Status Yang Bersangkutan</label>
                <select class="form-control" name="status-family" required>
                  <option v-for="(family, iFamily) in statusFamily" :key="iFamily" :value="family.value">{{family.label}}</option>
                </select>
              </div>
              <div class="form-group">
                <label>Tempat Lahir</label>
                <input type="text" class="form-control" name="place_of_birth" required>
              </div>
              <div class="form-group">
                <label>Tanggal Lahir</label>
                <input type="date" class="form-control" name="date_of_birth" required>
              </div>
              <div class="form-group">
                <label>Pekerjaan</label>
                <input type="text" class="form-control" name="profession" required>
              </div>
              <div class="form-group">
                <label>Alamat</label>
                <input type="text" class="form-control" name="address" required>
              </div>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-outline-secondary btn-sm" data-dismiss="modal"><i class="fa fa-times"/> Close</button>
              <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-save"/> Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Family",
  components: {},
  data() {
    return {
      image: 'https://image.cermati.com/q_70,w_1200,h_800,c_fit/zdcr9hzn2q8y2p0f744f',
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
    }
  },
  async mounted() {
  }
}
</script>

<style scoped>

</style>
