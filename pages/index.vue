<template>
  <div class="w-full">
    <div class="container mx-auto px-5">

      <div class="container mt-12">
        <h3 class="font-semibold text-2xl mt-10 mb-5">Jumlah Kasus di Ponorogo Saat Ini</h3>
        <div class="flex flex-col lg:flex-row justify-between mb-4 lg:mb-8">
          <div
            class="p-4 rounded text-center bg-white shadow lg:shadow-lg w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-8"
          >
            <div
              class="text-6xl font-bold text-orange-400 numeric"
            >{{ (dtPonorogo.ponorogo) ? dtPonorogo.ponorogo.positif: '_' }}
            </div>
            <div class="text-xl text-gray-800">Positif</div>
          </div>
          <div
            class="p-4 rounded text-center bg-white shadow lg:shadow-lg w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-8"
          >
            <div
              class="text-6xl font-bold text-green-400 numeric"
            >{{ (dtPonorogo.ponorogo) ? dtPonorogo.ponorogo.sembuh: '_' }}
            </div>
            <div class="text-xl">Sembuh</div>
          </div>
          <div
            class="p-4 rounded text-center bg-white shadow lg:shadow-lg w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-8"
          >
            <div
              class="text-6xl font-bold text-red-400 numeric"
            >{{ (dtPonorogo.ponorogo) ? dtPonorogo.ponorogo.meninggal: '_' }}
            </div>
            <div class="text-xl">Meninggal</div>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row justify-between">
          <div class="rounded shadow lg:shadow-lg bg-white lg:w-1/2 mb-4 lg:mb-0 lg:mr-8 p-6">
            <div
              class="text-5xl font-semibold text-blue-400 numeric"
            >{{ (dtPonorogo.ponorogo) ? dtPonorogo.ponorogo.odr: '_' }}
            </div>
            <div class="text-xl">Orang Dalam Resiko (ODR)</div>
          </div>
          <div class="rounded shadow lg:shadow-lg bg-white lg:w-1/2 mb-4 lg:mb-0 lg:mr-8 p-6">
            <div
              class="text-5xl font-semibold text-blue-400 numeric"
            >{{ (dtPonorogo.ponorogo) ? dtPonorogo.ponorogo.odp: '_' }}
            </div>
            <div class="text-xl">Orang Dalam Pemantauan (ODP)</div>
          </div>
          <div class="rounded shadow lg:shadow-lg bg-white lg:w-1/2 mb-4 lg:mb-0 lg:mr-8 p-6">
            <div
              class="text-5xl font-semibold text-blue-400 numeric"
            >{{ (dtPonorogo.ponorogo) ? dtPonorogo.ponorogo.pdp: '_' }}
            </div>
            <div class="text-xl">Pasien Dalam Pengawasan (PDP)</div>
          </div>
        </div>

        <div class="lg:my-4 text-sm">
          <p
            class="font-mono"
          >Pembaruan terakhir: {{(dtPonorogo.data) ? dtPonorogo.ponorogo.last_update: '_'}}</p>
          <p class="font-sans">
            Sumber:
            <span class="italic">Dinas Kesahatan Kabupaten Ponorogo</span>
          </p>
        </div>

        <h3
          class="font-semibold text-2xl mt-10 mb-5"
        >Jumlah Kasus di Indonesia dan Provinsi Jawa Timur</h3>
        <div class="flex flex-col lg:flex-row">
          <div class="w-full lg:w-1/3 bg-white lg:border-r lg:mb-0 mb-4 p-6">
            <div class="text-2xl font-semibold text-orange-400 my-2">Terkonfirmasi</div>
            <hr/>
            <div class="flex justify-between mt-4">
              <div class="font-semibold">Jawa Timur</div>
              <div
                class="text-2xl font-semibold text-gray-700 numeric"
              >{{ (dtProv.attributes) ? dtProv.attributes.Kasus_Posi : '_' }}
              </div>
            </div>
            <div class="flex justify-between">
              <div class="font-semibold">Indonesia</div>
              <div
                class="text-2xl font-semibold text-gray-700 numeric"
              >{{ (dtIndo) ? dtIndo.positif : '_' }}
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3 bg-white lg:border-r lg:mb-0 mb-4 p-6">
            <div class="text-2xl font-semibold text-green-500 my-2">Sembuh</div>
            <hr/>
            <div class="flex justify-between mt-4">
              <div class="font-semibold">Jawa Timur</div>
              <div
                class="text-2xl font-semibold text-gray-700 numeric"
              >{{ (dtProv.attributes) ? dtProv.attributes.Kasus_Semb : '_' }}
              </div>
            </div>
            <div class="flex justify-between">
              <div class="font-semibold">Indonesia</div>
              <div
                class="text-2xl font-semibold text-gray-700 numeric"
              >{{ (dtIndo) ? dtIndo.sembuh : '_' }}
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3 bg-white lg:mb-0 mb-4 p-6">
            <div class="text-2xl font-semibold text-red-500 my-2">Meninggal</div>
            <hr/>
            <div class="flex justify-between mt-4">
              <div class="font-semibold">Jawa Timur</div>
              <div
                class="text-2xl font-semibold text-gray-700 numeric"
              >{{ (dtProv.attributes) ? dtProv.attributes.Kasus_Meni : '_' }}
              </div>
            </div>
            <div class="flex justify-between">
              <div class="font-semibold">Indonesia</div>
              <div
                class="text-2xl font-semibold text-gray-700 numeric"
              >{{ (dtIndo) ? dtIndo.meninggal : '_' }}
              </div>
            </div>
          </div>
        </div>
        <div class="lg:my-4 text-sm">
          <p class="font-sans">
            Sumber:
            <span class="italic">
              <a href="https://kawalcorona.com/">https://kawalcorona.com/</a>
            </span>
          </p>
        </div>

      </div>

<!--      <h3 class="font-semibold text-2xl mt-10 mb-5">Peta Persebaran di Ponorogo</h3>-->
<!--      <div class="list-article">-->
<!--        <iframe-->
<!--          style="width:100%;height:400px"-->
<!--          src="https://fierce-caverns-85065.herokuapp.com/maps"-->
<!--        ></iframe>-->
<!--      </div>-->

<!--      <h3 class="font-semibold text-2xl mt-10 mb-5">Peta Persebaran di Indonesia</h3>-->
<!--      <div class="list-article">-->
<!--        <iframe-->
<!--          style="width:100%;height:490px"-->
<!--          src="https://fierce-caverns-85065.herokuapp.com/maps-indo"-->
<!--        ></iframe>-->
<!--      </div>-->

<!--      <h3 class="font-semibold text-2xl mt-10 mb-5">Peta Persebaran di Dunia</h3>-->
<!--      <div class="list-article">-->
<!--        <iframe-->
<!--          style="width:100%;height:490px"-->
<!--          src="https://fierce-caverns-85065.herokuapp.com/maps-dunia"-->
<!--        ></iframe>-->
<!--      </div>-->

<!--      <div class="lg:my-4 text-sm">-->
<!--        <p class="font-sans">-->
<!--          *)Note:-->
<!--          <span-->
<!--            class="italic"-->
<!--          >Titik dipeta merupakan titik kordinat desa atau wilayah,bukan merupakan tempat penderita/pasien</span>-->
<!--        </p>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    layout: "home",
    data() {
      return {
        dtIndo: {},
        dtProv: {},
        dtPonorogo: {}
      };
    },
    created() {
      this.getDtIndo();
      this.getDtProv();
      this.getDtPonorogo();
    },
    methods: {
      async getDtIndo() {
        const response = await axios.get("https://api.kawalcorona.com/indonesia/");
        this.dtIndo = response.data[0];
      },
      async getDtProv() {
        const response = await axios.get(
          "https://api.kawalcorona.com/indonesia/provinsi/"
        );
        this.dtProv = response.data.find(pv => pv.attributes.Provinsi === "Jawa Timur");
      },
      async getDtPonorogo() {
        const response = await axios.get(
          "https://back-info-kopid19.herokuapp.com/api/ponorogo"
        );
        this.dtPonorogo = response.data;
      }
    }
  };
</script>

<style>
  .numeric {
    font-family: "Fjalla One";
  }
</style>
