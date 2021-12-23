'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('books', [
       // Puisi
      {
        kategori_id : 1 ,
        judul : "Doa" ,
        deskripsi : "Kepada pemeluk teguh",
        penulis : "Chairil Anwar" ,
        isi : `
        Kepada pemeluk teguh
        Tuhanku
        Dalam termangu
        Aku masih menyebut namamu
        Biar susah sungguh
        mengingat Kau penuh seluruh
        cayaMu panas suci
        tinggal kerdip lilin di kelam sunyi
        Tuhanku
        aku hilang bentuk
        remuk
        Tuhanku
        aku mengembara di negeri asing
        Tuhanku
        di pintuMu aku mengetuk
        aku tidak bisa berpaling

        `,
        sampul : "http://3.bp.blogspot.com/-6DW2p7NiDaM/UpWnM9Eb_KI/AAAAAAAAAQY/0Uf5NtawQT4/s1600/pix+2.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 1 ,
        judul : "Gumamku ya Allah" ,
        deskripsi : "Angin dan langit dalam diriku",
        penulis : "W.S. Rendra" ,
        isi : `
        Angin dan langit dalam diriku,
        gelap dan terang di alam raya,
        arah dan kiblat di ruang dan waktu,
        memesona rasa duga dan kira,
        adalah bayangan rahasia kehadiran-Mu, ya Allah!
        Serambut atau berlaksa hasta
        entah apa bedanya dalam penasaran pengertian.
        Musafir-musafir yang senantiasa mengembara.
        Umat manusia tak ada yang juara.
        Api rindu pada-Mu menyala di puncak yang sepi.
        Semua manusia sama tidak tahu dan sama rindu.
        `,
        sampul : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1366856795l/17847550.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 1 ,
        judul : "Ibuku Dahulu" ,
        deskripsi : "Ibuku dehulu marah padaku",
        penulis : "Amir Hamzah" ,
        isi : `
        Ibuku dehulu marah padaku
        diam ia tiada berkata
        aku pun lalu merajuk pilu
        tiada peduli apa terjadi.
        Matanya terus mengawas daku
        walaupun bibirnya tiada bergerak
        mukanya masam menahan sedan
        hatinya pedih kerana lakuku.
        Terus aku berkesal hati
        menurutkan setan, mengkacau-balau
        jurang celaka terpandang di muka
        kusongsong juga biar cedera.
        Bangkit ibu dipegangnya aku
        dirangkumnya segera dikucupnya serta
        dahiku berapi pancaran neraka
        sejuk sentosa turun ke kalbu.
        Demikian engkau;
        Ibu, bapa, kekasih pula
        berpadu satu dalam dirimu
        mengawas daku dalam dunia.

        `,
        sampul : "https://cdn.kibrispdr.org/data/puisi-karya-amir-hamzah-0.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 1 ,
        judul : "Guruku" ,
        deskripsi : "Ketika aku kecil dan menjadi muridnya",
        penulis : "Mustofa Bisri" ,
        isi : `
        Ketika aku kecil dan menjadi muridnya
        Dialah di mataku orang terbesar dan terpintar
        Ketika aku besar dan menjadi pintar
        Kulihat dia begitu kecil dan lugu
        Aku menghargainya dulu
        Karena tak tahu harga guru
        Ataukah kini aku tak tahu
        Menghargai guru?


        `,
        sampul : "https://cf.shopee.co.id/file/4c5c25d5a9becc213029bf98f0c27406",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 1 ,
        judul : "Guru" ,
        deskripsi : "Barang siapa mau menjadi guru",
        penulis : "Kahlil Gibran" ,
        isi : `
        Barang siapa mau menjadi guru
        Biarlah dia memulai mengajar dirinya sendiri
        Sebelum mengajar orang lain
        Dan biarkan pula dia mengajar dengan teladan
        Sebelum mengajar dengan kata-kata

        Sebab, mereka yang mengajar dirinya sendiri
        Dengan membenarkan perbuatan-perbuatan sendiri
        Lebih berhak atas penghormatan dan kemuliaan
        Daripada mereka yang hanya mengajar orang lain
        Dan membenarkan perbuatan-perbuatan orang lain

        `,
        sampul : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334545287l/3221508.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 1 ,
        judul : "Nasehat-Nasehat Kecil Orang Tua Pada Anaknya Berangkat Dewasa" ,
        deskripsi : "Pada Anaknya Berangkat Dewasa",
        penulis : "Taufik Ismail" ,
        isi : `
        Jika adalah yang harus kaulakukan
        Ialah menyampaikan kebenaran
        Jika adalah yang tidak bisa dijual-belikan

        Ialah ang bernama keyakinan
        Jika adalah yang harus kau tumbangkan
        Ialah segala pohon-pohon kezaliman
        Jika adalah orang yang harus kauagungkan

        Ialah hanya Rasul Tuhan
        Jika adalah kesempatan memilih mati
        Ialah syahid di jalan Ilahi.

        `,
        sampul : "https://sastra.perpusnas.go.id/home/preview/rubrik/nasihat_ti.pdf",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 1 ,
        judul : "Bintang" ,
        deskripsi : "Aku mencintai kelasmu",
        penulis : "Chairil Anwar" ,
        isi : `
        Aku mencintai kelasmu
        Kamu membantuku tuk melihat

        Bahwa untuk hidup bahagia
        Belajar adalah kuncinya

        Kamu memahami muridmu
        Kamu perhatian dan pandai

        Kamu guru terbaik yang pernah ada
        Aku tahu itu dari awal kita bertemu

        Aku memperhatikan kata-katamu
        Kata-kata dari seorang guru sejati
        Kamu lebih dari teladan terbaik
        Sebagai guru, kamu adalah bintang


        `,
        sampul : "http://3.bp.blogspot.com/-6DW2p7NiDaM/UpWnM9Eb_KI/AAAAAAAAAQY/0Uf5NtawQT4/s1600/pix+2.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 1 ,
        judul : "Anak Nakalku" ,
        deskripsi : "kemana saja kamu hingga kotor mukamu",
        penulis : "Unknown" ,
        isi : `
        kemana saja kamu hingga kotor mukamu,
        kesayanganku dengan muka yang kotor,
        aku mencarimu sampai ikut kotor,
        dan mencuci semua bajumu,
        aku menemukan permen karet di sepatumu,
        aku tahu itu permen karetmu,
        dan aku tahu kamu bermain di tempat sampah,
        aduuh, pusing rasanya,
        melihatmu,
        namun aku tak sanggup tidur tanpamu,
        anakku, dan kesayanganku


        `,
        sampul : "-",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 1 ,
        judul : "Pacar Senja" ,
        deskripsi : "Senja mengajak pacarnya duduk-duduk di pantai",
        penulis : "Joko Pinurbo" ,
        isi : `
        Senja mengajak pacarnya duduk-duduk di pantai. 
        Pantai sudah sepi dan tak akan ada yang peduli.
        Pacar senja sangat pendiam: ia senyum-senyum saja
        mendengarkan gurauan senja. Bila senja minta peluk, 
        setengah saja, pacar senja tersipu-sipu. 
        “Nanti saja kalau sudah gelap. Malu dilihat lanskap.”
        Cinta seperti penyair berdarah dingin 
        yang pandai menorehkan luka. 
        Rindu seperti sajak sederhana yang tak ada matinya. 
        Tak terasa senyap pun tiba: senja tahu-tahu 
        melengos ke cakrawala, meninggalkan pacar senja
        yang masih megap-megap oleh ci*man senja.
        “Mengapa kau tinggalkan aku sebelum sempat 
        kurapikan lagi waktu? Betapa lekas ci*m 
        menjadi bekas. Betapa curangnya rindu. 
        Awas, akan kupeluk habis kau esok hari.”
        Pantai telah gelap. Ada yang tak bisa lelap.
        `,
        sampul : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617601153l/1408021.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 1 ,
        judul : "Ingat Aku dalam Do'amu" ,
        deskripsi : "Ingat aku dalam do'amu: di depan makam Ibrahim",
        penulis : "Ajip Rosidi" ,
        isi : `
        Ingat aku dalam do'amu: di depan makam Ibrahim
        akan dikabulkan Yang Maha Rahim
        Hidupku di dunia ini, di alam akhir nanti
        lindungi dengan rahmat, limpahi dengan kurnia Gusti
        Ingat aku dalam do'amu: di depan makam Ibrahim
        di dalam solatmu, dalam sadarmu, dalam mimpimu

        Ya Robbi !
        Biarkan kasih-Mu mengalir abadi
        Ingat aku dalam do'a-Mu
        Ingat aku dalam firman-Mu
        Ingat aku dalam diam-Mu
        Ingat aku
        Ingat
        Amin


        `,
        sampul : "https://opac.perpusnas.go.id/uploaded_files/sampul_koleksi/original/Monograf/1241330.jpg?rnd=100241405",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id :2 ,
        judul : "Pantun Nasihat" ,
        deskripsi : "Pisang emas dibawa berlayar ...",
        penulis : "Chairil Anwar" ,
        isi : "Pisang emas dibawa berlayar \n Masak sebiji di dalam peti \n Hutang emas dapat dibayar \n Hutang budi dibawa mati",
        sampul : "http://2.bp.blogspot.com/-gmQAkEAIhPA/T5pvrzRB5LI/AAAAAAAAARg/KaLDv_W0wLw/s1600/220px-Buku_Chairil_Anwar_Deru_Tjampur_Debu_01.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },

      // Pantun
      {
        kategori_id :2 ,
        judul : "Pantun Nasihat" ,
        deskripsi : "Pulau nandan jauh di tengah ...",
        penulis : "Chairil Anwar" ,
        isi : "Pulau pandan jauh di tengah \n Di balik pulau angsa dua \n Hancur badan dikandung tanah \n Budi baik dikenang jua",
        sampul : "http://2.bp.blogspot.com/-gmQAkEAIhPA/T5pvrzRB5LI/AAAAAAAAARg/KaLDv_W0wLw/s1600/220px-Buku_Chairil_Anwar_Deru_Tjampur_Debu_01.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id :2 ,
        judul : "Pantun Nasihat" ,
        deskripsi : "Kalau keladi sudah ditanam ...",
        penulis : "Asriadi" ,
        isi : "Kalau keladi sudah ditanam \n Janganlah lagi meminta talas \n Kalau budi sudah ditanam \n Janganlah lagi meminta balas",
        sampul : "http://grahailmu.id/wp-content/uploads/2018/04/Pantun.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id :2 ,
        judul : "Pantun Jenaka" ,
        deskripsi : "Burueng haling tabang tinggi ...",
        penulis : "Dr. Rais Yatim" ,
        isi : "Burueng haling tabang tinggi \n Tabang mengirok ka talago lamo \n Kok hilang kama ka dicari \n Kok lalok bilo ka tajago ",
        sampul : "http://grahailmu.id/wp-content/uploads/2018/04/Pantun.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id :2 ,
        judul : "Pantun Nasihat" ,
        deskripsi : "Jika anak berjiwa seni ...",
        penulis : "Irwan Prayitno" ,
        isi : "Jika anak berjiwa seni \n Bakatnya datang tidak menjelma \n Pendidikan dimulai Sejak Dini \n Orangtua dan guru harus seirama",
        sampul : "http://grahailmu.id/wp-content/uploads/2018/04/Pantun.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id :2 ,
        judul : "Pantun Agama" ,
        deskripsi : "Kami datang dengan teman ...",
        penulis : "Anonim" ,
        isi : "Kami datang dengan teman \n Bawanya batu akik \n Al Quran adalah pedoman \n Menjadi pribadi lebih baik",
        sampul : "http://grahailmu.id/wp-content/uploads/2018/04/Pantun.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id :2 ,
        judul : "Pantun Cinta" ,
        deskripsi : "Orang Cina berdagang kain...",
        penulis : "Hamzah Fansuri" ,
        isi : "Orang Cina berdagang kain \n kain dijual di tengah pekan \n Asal tidak cari yang lain \n nyawa dan badan saya serahkan.",
        sampul : "http://grahailmu.id/wp-content/uploads/2018/04/Pantun.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id :2 ,
        judul : "Pantun Kiasan" ,
        deskripsi : "Wahai ananda cahaya mata ...",
        penulis : "Dr. Tenas Effendy" ,
        isi : "Wahai ananda cahaya mata \n Pantun melayu jangan dinista \n Isinya indah bagai permata \n Bila dipakai menjadi mahkota",
        sampul : "http://grahailmu.id/wp-content/uploads/2018/04/Pantun.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id :2 ,
        judul : "Pantun Nasihat" ,
        deskripsi : "Wahai ananda kekasih ibu ...",
        penulis : "Dr. Tenas Effendy" ,
        isi : "Wahai ananda kekasih ibu \n Pakai olehmu pantun melayu \n Di dalamnya banyak mengandung ilmu \n Manfaatnya besar untuk bekalmu",
        sampul : "http://grahailmu.id/wp-content/uploads/2018/04/Pantun.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id :2 ,
        judul : "Pantun Nasihat" ,
        deskripsi : "Wahai ananda dengarlah manat ...",
        penulis : "Dr. Tenas Effendy" ,
        isi : "Wahai ananda dengarlah manat \n Pantun memantun sudah teradat \n Di dalamnya banyak berisi nasehat \n Bila dipakai hidup selamat",
        sampul : "http://grahailmu.id/wp-content/uploads/2018/04/Pantun.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },

      // Cerpen
      {
        kategori_id : 3,
        judul : "Gara-Gara Nenek Lupa" ,
        deskripsi : "Setiap akhir tahun, sekolah Rino libur...",
        penulis : "Sarah Nafisah" ,
        isi : `
        Setiap akhir tahun, sekolah Rino libur. Di saat itu, Rino, Ayah dan Ibu akan naik ke mobil dan berkunjung ke rumah Nenek Ida di desa. Nenek Ida mempunyai ladang. Rino suka sekali berlibur ke desa Nek Ida. Setiap pertengahan tahun, sekolah Rino juga libur. Namun di saat itu, giliran Nek Ida yang berkunjung ke rumah Rino. Begitulah cara keluarga Rino mengatur liburan. Agar tidak bosan, kadang mereka liburan di kota, kadang di desa pertanian. Akan tetapi, di tahun ini, Nenek Ida membuat kesalahan. “Aku yakin, saat ini, giliranku untuk liburan ke kota,” gumam Nek Ida yang mulai pelupa. Pelan-pelan, ia lalu mengemasi baju-bajunya dan memasukkannya ke dalam koper.
        Pada saat yang sama, ibu Rino juga sedang mengemasi tas. Ibu tampak tidak bersemangat. Sambil menutup tasnya, ibu Rino berkata, “Ibu sebetulnya ingin sekali bisa liburan ke pantai. Sekaliii saja supaya tidak sama dengan tahun-tahun sebelumnya.” Rino dan adiknya langsung berseru setuju. “Aku juga ingin ke pantai, Bu! Jangan ke rumah Nek Ida terus atau cuma berkeliling kota ini. Bosan. Kalau liburan ke laut, kita kan bisa berenang dan menggali pasir. Yah, Ayah, tahun ini kita liburan ke pantai, saja ya?” seru Rino bersemangat. “Tentu saja tidak bisa, sayang,” kata ayah Rino. “Akhir tahun ini, kita akan mengunjungi Nenek seperti biasa. Jangan sampai Nenek kecewa dan bertanya-tanya kalau kita tidak datang. Tahun depan saja kalau mau ke pantai. Supaya Nenek juga sudah diberitahu jauh-jauh hari.” Rino jadi lesu. Namun, kata-kata ayahnya ada benarnya. Nek Ida pasti sedih kalau mereka tidak datang ke pertaniannya. Rino tak ingin membuat neneknya yang baik hati itu jadi sedih. Keesokan harinya, cuaca sangat cerah. Rino, Ayah dan Ibu naik ke mobil. Tak lama kemudian, mereka sudah ada dalam perjalanan menuju peternakan Nek Ida. Di sepanjang jalan yang agak macet dan panas, Rino masih berharap andai mereka bisa berlibur ke pantai. Karena ayah Rino mulai kehausan, ia menepikan mobil di dekat kafe pinggir jalan. Mereka bertiga turun dari mobil. Tiba-tiba, wajah ibu Rino tampak kaget, gembira dan dengan bersemangat menunjuk ke parkiran. “Lihat! Mobil itu mirip mobil Nenek!” Rino dan ayah menengok. Mereka bertiga lalu melangkah pelan mendekati mobil itu. Astaga, itu memang mobil Nek Ida. Nenek bersandar di pintu mobil dan sedang menyeruput jus jeruk. Seketika itu juga, Rino berlari dan memeluk neneknya. Ayah dan Ibu juga memeluk Nenek dan bertanya heran.
        “Ibu mau ke mana?” tanya Ayah.
        “Tentu saja mau ke rumah kalian!” kata Nek Ida heran. Namun ia lalu menyadari kesalahannya. “Astaga, harusnya, ini giliran kalian berlibur di pertanian, ya?” serunya.
        Ibu Rino tersenyum cerah.
        “Tidak apa, Bu! Sekarang, kita buat rencana baru saja. Bagaimana kalau tahun ini kita bikin perubahan. Ibu mau kalau kita berlibur ke pantai?” tanya ibu Rino penuh harap. Wah, tak disangka, wajah Nek Ida berubah sangat ceria.
        “Tentu saja Nenek mau! Nenek mau bermain air laut!” kata Nek Ida penuh semangat.
        “Yieeeey… Nanti aku temani Nenek main air!” teriak Rino tak kalah girang.
        Rino, Ayah dan Ibu tertawa geli melihat Nenek dan cucunya yang bersemangat. Kini, ayah Rino sibuk melihat peta jalannya.
        “Hmmm! Sekarang ini, kita hanya berjarak sembilan mil dari pantai. Jadi, ayo kita ke sana sekarang!” ajak ayah Rino. Di mobil, Nek Ida tertawa dan berkata,
        “Liburan kita mungkin sudah mulai membosankan dan tercampur aduk. Makanya Nenek sampai lupa harus tetap di pertanian atau mengunjungi kalian! Syukurlah, Nenek membuat sedikit kesalahan!”
        “Semua orang pernah berbuat kesalahan, Nek. Tapi, kesalahan Nenek ini sungguh menyenangkan!” kata Rino.
        Mereka semua tertawa lagi. Dan ketika udara pantai yang asin mulai tercium, hati mereka semakin gembira.


        `,
        sampul : "https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/2019/04/27/2383550649.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 3,
        judul : "Kelinci dan Kura-Kura" ,
        deskripsi : "Dahulu kala ada seekor kelinci yang memiliki kaki kuat...",
        penulis : "Aesop" ,
        isi : `
        Dahulu kala ada seekor kelinci yang memiliki kaki kuat sehingga larinya bisa sangat cepat. Karena kemampuan larinya yang sangat cepat ia pun jadi kelinci yang congkak dan sombong. Suatu hari karena tidak suka dengan sifat sombong yang dimiliki si kelinci, seekor kura-kura pun menantang kelinci untuk lomba lari.
        Padahal, kura-kura adalah hewan yang jalannya lambat karena kakinya kecil dan ia pun harus menggendong rumahnya kemanapun ia pergi. Kelinci yang sombong pun setuju untuk berlomba lari dengan kura-kura. “Bagaimana bisa ia mengalahkanku dengan jalannya yang lambat begitu”, pikir kelinci. Akhirnya mereka pun sepakat menentukan jalan yang akan digunakan untuk berlari.
        Perlombaan lari pun dimulai, banyak hewan yang penasaran ingin melihat hasil perlombaan unik tersebut, banyak juga yang mendukung kura-kura karena mereka juga tidak suka dengan sifat kelinci yang sombong. Si monyet pun ditunjuk untuk jadi wasitnya. Begitu lomba lari dimulai, kelinci pun langsung melesat jauh meninggalkan kura-kura.
        Karena merasa masih punya banyak waktu dan jarak yang cukup jauh, belum sampai garis finish si kelinci memutuskan untuk tidur siang dulu di pinggir jalan. Di sisi lain, kura-kura terus sekuat tenaga untuk berlari sampai ke garis finish dan kelinci pun tidak sadar kalau dirinya sudah disalip kura-kura karena keasikan tidur. Akhirnya kura-kura pun memenangkan perlombaan dan membuat kelinci kaget minta ampun. Kura-kura yang menang mendapat sorak sorai dari hewan yang lain sedangkan kelinci pulang dengan tertunduk malu.
        Contoh cerita pendek anak sekolah dasar di atas merupakan fabel yang memiliki pesan moral bahwa menjadi orang tidak boleh sombong dan menyepelekan lawan hanya karena memiliki satu keunggulan dibandingkan yang lainnya. Selain itu pesan moral yang juga bisa diambil adalah dari sisi kura-kura dimana meski ia sadar ia tidak bisa mengalahkan kelinci dalam hal kecepatan namun ia tidak gentar dalam menghadapi tantangan dan tidak mudah menyerah meski sejak awal hasilnya lari si kelinci bisa membuat jarak antara mereka jadi sangat jauh. Akhirnya, kerja keras dan sikap pantang menyerah yang bisa menang dan bukannya kesombongan.

        `,
        sampul : "https://assets-a1.kompasiana.com/items/album/2020/07/18/penulis-kelinci-dan-kura-kura-5f12fa51d541df044f0b6e53.jpg?t=o&v=1200",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 3,
        judul : "Anak Gembala yang Nakal" ,
        deskripsi : "Di sebuah desa ada seorang anak gembala yang mendapatkan tugas dari seorang...",
        penulis : "Ninik Chaironi" ,
        isi : `
        Di sebuah desa ada seorang anak gembala yang mendapatkan tugas dari seorang saudagar kaya untuk menggembalakan domba-dombanya. Ia mendapatkan pesan dari sang majikan untuk menjaga dombanya dengan baik dan berteriak minta tolong jika ada serigala yang datang. Ketika menggembala di padang rumput anak tersebut merasa bosan.
        Ia pun berbuat jahil dengan berteriak minta tolong padahal tidak ada serigala yang mendatanginya. Mendengar suara teriakan anak gembala, para warga pun berdatangan hendak menolong tapi bukan serigala yang ditemukan malah anak gembala yang tertawa terbahak-bahak karena berhasil menipu warga desa.
        Kenakalan  anak gembala tersebut pun dilakukan beberapa kali. Dan setiap kali warga mendatangi teriakan anak gembala, lagi-lagi si anak gembala hanya tertawa saja. Sampai pada suatu hari benar-benar datang segerombolan serigala hendak memangsa domba yang digembalakan.
        Karena panik si anak gembala pun  berteriak minta tolong tapi tidak ada warga yang mau menolongnya karena mereka menduga si anak hanya bermain-main saja. Alhasil semua domba berhasil dimangsa oleh kawanan serigala dan si anak gembala pun dimarahi oleh majikannya.
        Contoh cerita pendek anak sekolah di atas menggambarkan betapa pentingnya untuk bersikap jujur kapan saja dan di mana saja karena jika sudah tidak bersikap jujur maka akan sulit untuk mendapatkan kepercayaan dari orang lain. Jika tidak dipercaya orang lain maka ketika kita membutuhkan bantuan orang, akan sulit mendapatkannya karena kebiasaan berbohongnya.
 

        `,
        sampul : "https://3.bp.blogspot.com/-GBw_l_H9xJg/WpzK_tN8TcI/AAAAAAAAAMo/VCp5KJj_7TE31T-_gRrZ2k1HMyLue0vgwCLcBGAs/s1600/penggembala-dan-srigala-5a0eac5a2599ec7372017322.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 3,
        judul : "Dua Sahabat" ,
        deskripsi : "Dua orang sahabat melakukan perjalanan bersama-sama....",
        penulis : "Shendiane Rimandani" ,
        isi : `
        Dua orang sahabat melakukan perjalanan bersama-sama. Di tengah perjalanan keduanya bertengkar karena masalah yang sepele. Tapi karena kesal dan marah, salah seorang dari dua sahabat tersebut menampar temannya. Teman yang ditampar kemudian menuliskan pesan di atas pasir, “Hari ini sahabat baikku menamparku.” Kemudian melanjutkan perjalanan bersama dengan sahabatnya.
        Setibanya di sebuah sungai, sahabat yang ditampar tadi terjatuh dan hampir tenggelam. Melihat sahabatnya tenggelam, sahabat yang menampar langsung menolong temannya dengan sigap dan cepat. Kemudian teman yang jatuh tersebut menulis pesan di atas batu, “Hari ini sahabat baikku menyelamatkan hidupku.”
        Sahabat yang menampar temannya tadi bertanya kepada temannya,”Mengapa engkau menulis kesalahanku di atas pasir, sedangkan menulis kebaikanku di atas batu?” Si sahabat satunya menjawab,”Agar kesalahan yang kau lakukan bisa langsung hilang terhapus oleh angin, sedangkan kebaikanmu bisa terpahat selamanya di atas batu dan akan selalu diingat.” Keduanya pun berpelukan dan melanjutkan perjalanan dengan persahabatan yang lebih erat.
        Pesan moral yang bisa diambil dari contoh cerpen anak sekolah dasar di atas adalah bahwa ketika seseorang melakukan kesalahan maka cepat-cepatlah dimaafkan agar tidak diingat terus dan merusak hubungan dengan teman, sedangkan kebaikannya diingat selalu agar sesama sahabat punya kenangan yang indah satu sama lain. Pesan lainnya yang bisa dipetik adalah meski sedang marahan namun jika teman sedang membutuhkan bantuan maka bantulah sebisa mungkin agar tali persahabatan tidak putus.

        `,
        sampul : "http://asset-a.grid.id/crop/0x0:0x0/780x800/photo/bobofoto/original/5719_dua-orang-sahabat.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 3,
        judul : "Topan Anak yang Rajin" ,
        deskripsi : "Di sebuah desa tinggallah seorang anak bernama Topan dengan ibunya...",
        penulis : "Ninik Chaironi" ,
        isi : `
        Di sebuah desa tinggallah seorang anak bernama Topan dengan ibunya. Topan dan ibunya tidak punya banyak harta, ibunya bekerja sebagai pedagang sayur di pasar dan Topan membantu ibunya dengan menggembalakan kambing milik saudagar di desanya. Suatu hari ketika Topan menggembalakan kambing di padang rumput sambil membaca buku, datanglah seorang kakek tua yang terlihat kelelahan meminta izin pada Topan untuk menumpang duduk di bawah pohon. Topan pun mempersilahkan kakek tersebut untuk duduk bersamanya bahkan menawarkan bekal minuman yang ia bawa dari rumah.
        Kakek bertanya kepada Topan, “Apakah Kamu tidak sekolah?” Dengan sedih Topan menjawab bahwa keluarganya tidak punya uang untuk menyekolahkan Topan. Tapi meski begitu Topan tetap semangat dan rajin membaca dari buku-buku yang ia pinjam dari temannya.
        Keesokan harinya sepulangnya dari menggembalakan kambing, ibu Topan keluar dari rumah dan langsung memeluk Topan. Katanya, Topan mendapat undangan untuk masuk ke sekolah dengan biaya yang gratis. Alangkah kaget dan senangnya Topan ketika ia berangkat ke sekolah dan bertemu dengan si kakek yang duduk bersamanya waktu itu ternyata adalah kepala sekolah dari sekolah tempatnya ia akan belajar.
        Cerita cerpen anak sekolah dasar tersebut sangat cocok diceritakan kepada anak-anak sekolah agar tetap rajin belajar dan menggapai cita-cita meski banyak batasnya. Sifat Topan yang baik hati dan mau berbagi dengan sesama ketika bertemu dengan kakek tua yang terlihat lelah juga bisa jadi contoh yang baik agar anak bisa berbuat baik dengan siapa saja tidak memandang bulu dan tanpa mengharapkan kebaikan. Kebaikan yang dilakukan bisa dibalas dalam bentuk lain oleh orang lain.

        `,
        sampul : "http://asset-a.grid.id/crop/0x0:0x0/x/photo/2019/03/05/3193356479.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 3,
        judul : "Abu Nawas yang Mau Terbang" ,
        deskripsi : "Di sebuah negeri Timur  Tengah tempatnya 1001 malam terjadi...",
        penulis : "Aziz Mushoffa" ,
        isi : `
        Di sebuah negeri Timur  Tengah tempatnya 1001 malam terjadi, ada seorang pemuda bernama Abu Nawas yang membuat geger warga kerajaan. Ia mengaku mau terbang kepada orang-orang namun tidak ada yang percaya padanya. Karena kabar Abu Nawas yang mau terbang sangat heboh, berita ini pun sampai ke telinga Baginda Raja. Baginda kemudian memerintahkan rakyatnya untuk berkumpul di alun-alun untuk menyaksikan Abu Nawas yang mau terbang, jika ia tidak berhasil maka Abu akan dihukum karena berbohong.
        Abu Nawas kemudian naik ke menara yang tinggi dan mengepak-ngepakkan tangannya seperti mau terbang. Baginda Raja pun jenuh menunggu dan memanggil Abu Nawas turun ke bawah dan bertanya kenapa tidak kunjung terbang? Abu Nawas pun menjawab ia bilang hanya mau terbang, bukan bisa terbang. Mendengar hal ini pun Baginda tidak jadi menghukum Abu karena ia tidak 

        `,
        sampul : "https://1.bp.blogspot.com/-OD8zKEuQK88/XnDoVmyqjqI/AAAAAAAAADw/9C1oitDGuQobJvtBqz7uSiJY7DVieBxFQCLcBGAsYHQ/s400/Kisah%2BAbu%2BNAwas.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 3,
        judul : "Anak Sholehah" ,
        deskripsi : "Haura adalah anak yang pintar, sholehah, cantik, selalu menuruti perintah Allah...",
        penulis : "Hafshah Mufidah" ,
        isi : `
        Haura adalah anak yang pintar, sholehah, cantik, selalu menuruti perintah Allah dan menuruti perintah orang tuanya. Suatu hari…
        Haura bermain bersama teman-temannya, yang bernama Hasna, Nafa dan Aniq. Saat mereka sedang bermain di taman,
        “Eh kamu bawa uang gak…?” tanya Hasna.
        “Bawalah…!” kata Haura, Nafa dan Aniq bersamaan.
        “Jajan yuk…!” ajak Nafa.
        “Ayo…!” kata Haura, Hasna dan Aniq.
        Haura adalah anak yang pintar, sholehah, cantik, selalu menuruti perintah Allah dan menuruti perintah orang tuanya.
        Suatu hari…
        Haura bermain bersama teman-temannya, yang bernama Hasna, Nafa dan Aniq. Saat mereka sedang bermain di taman,
        “Eh kamu bawa uang gak…?” tanya Hasna.
        “Bawalah…!” kata Haura, Nafa dan Aniq bersamaan.
        “Jajan yuk…!” ajak Nafa.
        “Ayo…!” kata Haura, Hasna dan Aniq.

        `,
        sampul : "https://i.pinimg.com/736x/47/e9/a8/47e9a8dfec4a46fe233fe3b48873943e.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 3,
        judul : "Bye Teacher" ,
        deskripsi : "Pagi ini cuaca sangat berkabut, pagi yang seharusnya cerah malah berubah menjadi suram...",
        penulis : "Kim Shin" ,
        isi : `
        Pagi ini cuaca sangat berkabut, pagi yang seharusnya cerah malah berubah menjadi suram. “Danea sayang ini sudah jam 7! lekas berangkat!” ujar bunda memarahiku, segera kubawa tas dan mengayuh sepeda ke sekolah.
        Sesampai di sekolah aku mengobrol dengan teman sebangkuku hingga bel masuk berbunyi. “Anak-anak hari ini kalian pulang pagi!” ujar Bu Zahra. “Yeeayy!” semua bersorak dan mengemas barangnya namun, “Anak-anak sebenarnya sudah dari kemarin ibu menyembunyikan sesuatu dari kalian!” kata bu Zahra yang membuat seisi kelas menjadi hening. “Saya akan dipindahkan tugas ke sekolah lain dan menjabat sebagai kepala sekolah” lanjut bu Zahra, seisi kelas terkejut mendengarnya. “Iya jadi mulai besok saya tidak akan mengajar kalian lagi, seluruh uang tabungan dan kas sudah saya serahkan ke pak Adam!” lanjut bu Zahra “Jadi mulai besok kami tidak bisa bertemu ibu lagi?” tanyaku, air mata terurai deras dari mataku dan membasahi pipiku, Bu Zahra hanya menganggukkan kepalanya, seluruh kelas diam dan menangis.
        Selama ini bu Zahra lah satu-satunya guru yang merubah nilai kami, dulunya matematika hanya mendapat nilai 40 namun dengan kehadiran bu Zahra kami semua jadi semangat dan selalu memperoleh nilai 100, apa dayaku ini yang terlalu banyak berhutang pada Bu Zahra. “Bu tolong jangan tinggalkan kami! sebentar lagi kami akan menghadapi Ujian Nasional bu!” keluh Noval ketua kelas. “Anak-anak dengarkan saya, siapapun gurunya jika kamu rajin belajar pastilah kamu menjadi anak pintar! saya yakin kalian lulus kok!” balas bu Zahra, “Hiks hiks hiks” sekelas menangis.
        Akhirnya kami berkemas dan pulang, saat aku bersalaman dengan bu Zahra ia bilang kepadaku “Danea harus belajar ya!”, kata kata dari bu Zahra itu spontan membuatku makin sedih, aku mengangguk, tissue ku sudah basah untuk menyeka air mata. sampai saat ini berkat bisikan agar aku belajar hingga aku lulus dengan nilai memuaskan!
        Teman-teman cerpenmu.com jika kalian sama seperti Danea ingatlah bahwa: “Siapapun guru itu, biar baik atau tidak jika kita rajin belajar pasti hasilnya akan memuaskan!”

        `,
        sampul : "https://cdn.dribbble.com/users/2317423/screenshots/10622367/school_teacher_illustration_dr_4x.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 3,
        judul : "Persahabatan yang Runtuh" ,
        deskripsi : "Suatu ketika, dulu, waktu aku masih kesal 6 SD...",
        penulis : "Selin Setiawati" ,
        isi : `
        Suatu ketika, dulu, waktu aku masih kesal 6 SD, aku merasa sangat senang sekali karena ada sahabat-sahabat ku, yang sangat menyenangkan. Kami setiap hari selalu bermain dan kerja kelompok bersama.
        Suatu ketika, ada tugas dari wali guru kelas 6, beliau menyuruh kami untuk membuat kliping bersama-sama, kami pun mengerjakannya di tempat Murtin. Dia adalah salah satu temanku. Setelah itu kami pun berencana untuk mencari di Koran atau majalah di kantor desa, akhirnya kami pun menggunting dan menempelnya di buku gambar yang besar. Selama tiga hari akhirnya tugas selesai. Dan akhirnya kami pun menyerahkannya ke Pak guru kelas 6.
        Setelah berbulan-bulan akhirnya tiba, kami pun menghadapi ujian nasional, selama 4 hari kami menghadapi ujian tersebut akhirnya selesai, dan kami tinggal menunggu hasil nilai ujiannya. Karena takut tidak lulus, kami pun selalu gelisah dan malah ada salah satu teman kami yaitu Hempin yang berkata, “Pina, Sila, Murtin, tomi, Veri, aku takut, karena nilai aku, pasti di bawah standar”, setelah mendengar ucapan Hempin, aku pun berkata, “Hempin kamu tidak usah takut, kita semua pasti lulus, ok”. Setelah itu kami pun berusaha agar tetap senang.
        Setelah seminggu lamanya, akhirnya tiba pengumuman nilai ujian, kami semua merasa tegang. Dan tidak disangka, kami semua lulus. Kemudian kami pun libur khusus, libur ini dikarenakan kami harus mempersiapkan berbagai keperluan untuk mendaftar di SMP. Tapi sangat disayangkan, Hempin tidak bisa sekolah di SMP, akhirnya dia pun berhenti sekolah. Dan kami pun tetap bersekolah dan selama berbulan-bulan sekolah di SMP. Akhirnya Tomi pun juga berhenti sekolah. Tidak lama, Murtin pun juga berhenti sekolah.
        Dan sekarang hanya kami bertiga dan itu pun kami berbeda kelas. Setiap hari aku selalu mengingat semua sahabatku, karena sekarang kami tidak bersama lagi. Dan akhirnya aku pun sedih dan mengakibatkan masalah yang menimpa diriku. Aku pun selalu berdoa, “Ya tuhan, kenapa engkau tega memisahkan kami” Aku pun langsung sedih dan itulah kisah persahabatan yang runtuh.

        `,
        sampul : "https://previews.123rf.com/images/file404/file4041302/file404130200136/17954793-friends-illustration.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 3,
        judul : "Teman Jadi Sahabat" ,
        deskripsi : "Namaku Silvi Rima Debriyanti biasa dipanggil Silvi...",
        penulis : "Silvi Rahma Debriyanti" ,
        isi : `
        Namaku Silvi Rima Debriyanti biasa dipanggil Silvi. Saat itu aku masih kelas 6 SD, dan di belakang rumahku ada tetangga baru. Kelihatannya Mamaku sudah akrab sekali dengan tetangga baru itu, namun aku masih cuek. Di sore hari aku melihat seorang gadis yang sebaya denganku sedang duduk sendiri di rumah tetangga baruku itu. Sepertinya aku pernah melihatnya tapi entah kapan dan di mana.
        “Hayo lagi lihat siapa kamu?” tiba-tiba Mama mengagetkanku dari belakang. “Huft, Mama ngagetin aku saja”
        “Kamu lagi lihatin gadis itu yah?”
        “Hmm, iyah ma. Itu siapa sepertinya aku pernah melihatnya tapi entah dimana?”
        “Oh itu Devi, teman kamu waktu TK. Masa kamu lupa sih?”
        “Oh iyah ma aku baru ingat, hehe ”
        Langsung saja aku samperin dia.
        “Hey kamu Devi yah?”
        “Iyah, kamu Silvi kan?”
        “Ternyata kamu masih ingat yah sama aku”
        Setelah itu kami saling bercerita, bercanda dan tertawa bersama. Beberapa hari kita bersama aku mulai akrab sekali begitupun dia. Padahal waktu TK kami biasa-biasa saja cuma sekedar “Say Hello.” Setelah lulus SD kami memutuskan untuk bersekolah di SMP yang sama. Berangkat sekolah bareng pulangnya pun bareng. Walaupun aku beda kelas dengannya tapi kalau istirahat kami selalu ke kantin bareng. Bahkan ekstrakurikuler kami pun sama yaitu Paskibra. Pokoknya kemana-mana kami selalu berdua nggak bisa terpisah. Dimana ada aku pasti ada Devi, dimana ada Devi pasti ada aku. Aku sudah menganggapnya sebagai Sahabat begitupun dia. Kami saling curhat masalah masing-masing, nggak ada yang kami berdua tutup-tutupi dan harus saling terbuka.
        Devi senang aku juga senang, Devi sedih aku juga sedih. Pokoknya kita susah senang harus bersama. Karena aku 1 sekolah jadi kita nggak hanya main bareng dan curhat-curhat aja, kita juga sering belajar bareng. Kami itu termasuk anak yang pintar di kelas, jadi kami selalu masuk peringkat 3 besar. Kita juga saling tukar pikiran masalah pelajaran. Teman kelas aku sempat bilang kenapa sih kalau istirahat aku nggak pernah bareng mereka selalu sama Devi. Bahkan aku sampai dibilang Adik-Kakak sama Devi. Mungkin Karena kita kemana-mana bareng makin lama banyak yang bilang muka kita mirip. Aneh sih padahal kita beda Bapak beda Ibu. Setelah kurang lebih 3 tahun kita bersama, kita lulus SMP dan akan melanjutkan ke SMA.
        Namun aku sangat sedih sekali Karena Devi harus pindah rumah. Karena Kakaknya seorang polisi, dia dan keluarganya tinggal di asrama polisi. Sebenarnya Devi nggak mau ikut, tapi harus gimana lagi karena semua keluarganya di sana. Berat rasanya kami harus berpisah karena jarak. Pasti kami akan kangen masa-masa kita bersama. Walaupun kita pisah kita nggak pernah hilang komunikasi dan tetap menjadi sahabat sejati. Karena suatu saat nanti kita akan bisa bertemu dan bersama lagi.

        `,
        sampul : "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/97c8f295079573.5e8ecaf81dedc.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 3,
        judul : "Persahabatan yang Runtuh" ,
        deskripsi : "Suatu ketika, dulu, waktu aku masih kesal 6 SD...",
        penulis : "Selin Setiawati" ,
        isi : `
        Suatu ketika, dulu, waktu aku masih kesal 6 SD, aku merasa sangat senang sekali karena ada sahabat-sahabat ku, yang sangat menyenangkan. Kami setiap hari selalu bermain dan kerja kelompok bersama.
        Suatu ketika, ada tugas dari wali guru kelas 6, beliau menyuruh kami untuk membuat kliping bersama-sama, kami pun mengerjakannya di tempat Murtin. Dia adalah salah satu temanku. Setelah itu kami pun berencana untuk mencari di Koran atau majalah di kantor desa, akhirnya kami pun menggunting dan menempelnya di buku gambar yang besar. Selama tiga hari akhirnya tugas selesai. Dan akhirnya kami pun menyerahkannya ke Pak guru kelas 6.
        Setelah berbulan-bulan akhirnya tiba, kami pun menghadapi ujian nasional, selama 4 hari kami menghadapi ujian tersebut akhirnya selesai, dan kami tinggal menunggu hasil nilai ujiannya. Karena takut tidak lulus, kami pun selalu gelisah dan malah ada salah satu teman kami yaitu Hempin yang berkata, “Pina, Sila, Murtin, tomi, Veri, aku takut, karena nilai aku, pasti di bawah standar”, setelah mendengar ucapan Hempin, aku pun berkata, “Hempin kamu tidak usah takut, kita semua pasti lulus, ok”. Setelah itu kami pun berusaha agar tetap senang.
        Setelah seminggu lamanya, akhirnya tiba pengumuman nilai ujian, kami semua merasa tegang. Dan tidak disangka, kami semua lulus. Kemudian kami pun libur khusus, libur ini dikarenakan kami harus mempersiapkan berbagai keperluan untuk mendaftar di SMP. Tapi sangat disayangkan, Hempin tidak bisa sekolah di SMP, akhirnya dia pun berhenti sekolah. Dan kami pun tetap bersekolah dan selama berbulan-bulan sekolah di SMP. Akhirnya Tomi pun juga berhenti sekolah. Tidak lama, Murtin pun juga berhenti sekolah.
        Dan sekarang hanya kami bertiga dan itu pun kami berbeda kelas. Setiap hari aku selalu mengingat semua sahabatku, karena sekarang kami tidak bersama lagi. Dan akhirnya aku pun sedih dan mengakibatkan masalah yang menimpa diriku. Aku pun selalu berdoa, “Ya tuhan, kenapa engkau tega memisahkan kami” Aku pun langsung sedih dan itulah kisah persahabatan yang runtuh.

        `,
        sampul : "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/97c8f295079573.5e8ecaf81dedc.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },

      // Dongeng
      {
        kategori_id : 4,
        judul : "Pando Mencari Teman Berpetualang" ,
        deskripsi : "Pando adalah seekor anak beruang jantan...",
        penulis : "Sarah Nafisah" ,
        isi : `
        Pando adalah seekor anak beruang jantan. Ia tampan, gendut, dan pandai. Seperti induk-induk beruang lainnya, ibu Pando juga sering menasihatinya,

        “Jangan pergi jauh-jauh, Pando. Dekat-dekat saja sama ibu. Kamu masih kecil. Banyak bahaya jika kamu pergi jauh-jauh. Kamu bisa dimangsa hewan besar, masuk dalam perangkap, atau dipagut ular berbisa!”

        Akan tetapi, Panda ingin bertualang. Ia membayangkan senangnya berjalan-jalan di hutan bersama teman. Sayang, tak ada anak beruang lainnya yang mau menentang nasihat ibu mereka.

        Ketika ibunya lengah, Pando pun pergi sendiri. Mula-mula ia bertemu seekor anak rajawali. Ia mengajak anak rajawali itu bertualang bersamanya. Namun, anak rajawali itu berkata,

        “Aku tidak suka berjalan. Aku suka terbang tinggi. Kalau kamu bisa terbang, ayo kita bersama-sama mengarungi angkasa!”

        “Yaaa, aku tidak bisa terbang. Kata ibuku tulang kami padat, jadi kami tidak bisa terbang!” kata Pando sedih. “Lagi pula kami, kan, tidak punya sayap!”

        “Iya, kata ibuku, kami bangsa burung, bisa terbang karena tulang kami berongga dan punya sayap,” kata anak burung rajawali.

        Pando melanjutkan perjalanannya sendirian. Ia bertemu seekor anak zebra yang sedang makan rumput di dekat kawanannya.

        Ketika Pando mengajaknya bertualang, anak zebra berkata,

        “Wah, kuda zebra saja tidak berani berjalan sendiri meninggalkan kelompok. Kalau kami sendirian, musuh akan menerkam kami dengan mudah. Kalau berkelompok, musuh akan melihat kami sebagai kesatuan, seperti benda belang hitam putih yang besar sekali. Jadi, kami aman!”

        Pando pamit dan berjalan lagi. Setiba di sebuah gua besar ia melihat dua ekor anak harimau.

        Pando memperkenalkan namanya dan menyampaikan maksudnya. Salah seekor anak harimau itu berkata,

        “Ibu kami sedang berburu. Kami disuruh menunggu di sini karena ini gua yang aman. Kami tidak boleh keluar.”

        Pando menghela nafas. Susah amat, sih, mencari teman bertualang.

        “Sepertinya tidak ada yang mau ikut berpetualang bersamaku!” keluh Pando pada anak-anak harimau itu.

        “Saya mau, kok!” terdengar sebuah suara yang halus. Pando menoleh kea rah suara itu. Aaah! Seekor anak ular yang bersisik hitam kekuningan!
        “Saya juga sendirian, saya kesepian!”

        Waaaah, Pando berlari pergi. Itu, kan, ular berbisa!

        “Sana, sana, menjauh dariku. Ibumu pasti ada di dekat sini. Ibumu sangat berbahaya!” kata Pando panik.

        “Tidak, Pando,” anak ular menyahut mais. “Sejak lahir, ibuku tidak peduli padaku dan saudara-saudaraku. Malah aku tidak tahu ibuku ada di mana. Kami dibiarkan mencari makan dan berkelana sendiri. Semua saudaraku sudah mati dimangsa, diburu, kepanasan, kedinginan atau kelaparan. Aku mau menemanimu bertualang!”

        ”Ah, kasihan sekali kamu. Ibuku menjagaku baik-baik dan memberiku makanan enak!” kata Pando.

        Tiba-tiba saja ia teringat pada ibunya. Mungkin ibunya sekarang sedang bingung karena kehilangan dia.

        “Hei, hei, kalian berdua pergilah. Kalau ibu kami datang, kalian berdua dalam bahaya. Ibuku paling tidak suka kalau ada hewan lain berada di dekat anaknya!” tegur salah seekor anak harimau.

        Pando merasa tidak aman berteman dengan anak ular. Ia pun berlari pergi sambil berseru,

        “Maaf ya, teman. Ibuku pasti sedang mencariku. Aku harus pulang!” Tubuhnya yang gemuk pendek bergoyang-goyang ketika berlari.

        Tiba-tiba… BHUK! BHUK!

        Dua hantaman keras menghantam pantat Pando sampai ia terjatuh. Pando sangat terkejut dan kesakitan.

        “Mati aku!” pikir Pando.

        Dengan gemetar Pando bangkit dan menatap penyerangnya. Puuufh, Pando bernafas lega. Di hadapannya berdiri ibunya dan memandangnya dengan marah.

        “Anak nakal! Sudah Ibu bilang jangan pergi jauh-jauh. Ini malah mendekati anak harimau dan ngobrol dengan anak ular!” omel Ibu Pando.

        “Maafkan Pando, Bu!” ujar Pando tetap gembira walau dimarahi. “Bu, ibu ular itu tidak menjaga anak-anaknya. Semua saudara anak ular itu sudah mati!” kata Pando. “Tetapi ibu menjagaku dengan sangat baik!”

        “Iya, tetapi kamu malah bandel!” kata ibu Pando masih jengkel.

        “Bu, aku berjanji akan dekat-dekat ibu selamanya!” kata Pando sungguh-sungguh.

        “Iiih, tidak perlu selamanya!” kata ibu Pando. “Bila sudah dewasa seperti ayahmu, kamu boleh berpetualang ke mana saja. Pada waktu itu, kamu sudah bisa melindungi dirimu sendiri. Jadi, sabar saja sampai kamu dewasa!”

        Wah, Pando senang sekali mendengar penjelasan ibunya.

        “Sekarang, aku janji akan belajar dengan rajin, Bu,” ucap Pando manja. “Aku juga harus makan yang banyak ya, Bu, supaya cepat besar!”

        Ibu Pando tertawa.


        `,
        sampul : "https://asset-a.grid.id//crop/0x0:0x0/360x240/photo/2019/08/16/475886597.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 4,
        judul : "Raja yang Khawatir Tentang Kotanya" ,
        deskripsi : "Dahulu kala, kota Fes dipimpin oleh Raja Mulay. Ia sangat cinta dan bangga dengan kotanya. Namun ia khawatir......",
        penulis : "Sarah Nafisah" ,
        isi : `
        Dahulu kala, kota Fes dipimpin oleh Raja Mulay. Ia sangat cinta dan bangga dengan kotanya. Tetapi suatu malam Raja Mulay merasa khawatir tentang kotanya.
        
        "Istriku, Fes adalah kota yang indah. Pemandangan alamnya sangat cantik. Menara-menara masjid itu semakin menambah kecantikan kota ini. Kota Fes memang berada di tanah yang tandus. Namun sumber mata air selalu memancar untuk memenuhi kebutuhan hidup penduduknya. Walaupun begitu...aku tetap merasa khawatir," ujarnya pada istrinya.

        "Apa yang membuat engkau khawatir, suamiku?" tanya istrinya keheranan.

        "Fes memang kota yang indah," ucap Raja Mulay, "tetapi letaknya sangat jauh dengan kota-kota lain. Aku khawatir suatu saat nanti kota Fes akan dilupakan orang. Dan kota ini akan mati."

        Begitulah, kekhawatiran ini membuat Raja Mulay selalu termenung dan murung. Hingga pada suatu hari, istri Raja Mulay berkata,

        "Suamiku, mengapa engkau tidak membagi rasa khawatirmu ini pada rakyatmu? Caranya, dengan membuat sayembara!"

        "Sayembara? Apa maksudmu, istriku?"

        Kota Fes dipimpin oleh Raja Mulay. Ia sangat cinta dan bangga dengan kotanya. Tetapi suatu malam Raja Mulay merasa khawatir tentang kotanya.

        "Istriku, Fes adalah kota yang indah. Pemandangan alamnya sangat cantik. Menara-menara masjid itu semakin menambah kecantikan kota ini. Kota Fes memang berada di tanah yang tandus. Namun sumber mata air selalu memancar untuk memenuhi kebutuhan hidup penduduknya. Walaupun begitu... aku tetap merasa khawatir," ujarnya pada istrinya.

        "Apa yang membuat engkau khawatir, suamiku?" tanya istrinya keheranan.

        "Fes memang kota yang indah," ucap Raja Mulay, "tetapi letaknya sangat jauh dengan kota-kota lain. Aku khawatir suatu saat nanti kota Fes akan dilupakan orang. Dan kota ini akan mati."

        Begitulah, kekhawatiran ini membuat Raja Mulay selalu termenung dan murung. Hingga pada suatu hari, istri Raja Mulay berkata,

        "Suamiku, mengapa engkau tidak membagi rasa khawatirmu ini pada rakyatmu? Caranya, dengan membuat sayembara!"

        "Sayembara? Apa maksudmu, istriku?"

        "Umumkanlah kepada rakyat. Siapa saja yang punya cara untuk membuat kota Fes terkenal ke seluruh dunia dan diingat orang seiamanya, akan mendapatkan hadiah 4 kantong emas."

        "Oh...itu ide yang bagus," seru Raja Mulay ceria. Raja Mulay segera mengumumkan sayembara itu di alun-alun kota. Setiap orang di kota Fes berpikir keras untuk memenangkan sayembara. Raja Mulay menerima banyak jawaban dari rakyatnya. Namun tak satu pun cara yang diajukan oleh rakyatnya berkenan di hati Raja Mulay. Raja Mulay pun kecewa dan kembali murung.

        Tiba-tiba pada suatu hari, seorang pelayan Raja Mulay datang menghadap.

        "Paduka Raja, ada seorang anak laki-laki bernama Abu ingin bertemu Paduka."

        "Bawa dia kemari," jawab Raja Mulay. "Barangkali dia bisa memenangkan sayembaraku."

        Tak lama kemudian, datanglah Abu menghadap Raja. Alangkah terkejutnya Raja Mulay melihat penampilan Abu yang kurus, kotor dan berpakaian compang camping. Tangan kanannya disembunyikan di balik tubuhnya.

        "Apa kau punya ide untuk membuat kota Fes terkenal, hai Abu?" tanya Raja Mulay.

        "Benar Paduka. Hamba membawa ini," jawab Abu sambil menunjukkan barang yang dibawa dengan tangan kanannya.

        Abu mengeluarkan topi berbentuk bundar seperti peci. Terbuat dari bulu, berwarna merah dan mempunyai rumbai-rumbai di atasnya.

        "Apa istimewanya topi itu? Apakah kau bercanda, hai anak kecil?"

        "Sama sekali tidak, Paduka. Topi ini akan membuat kota Fes terkenal dan akan diingat orang selamanya."

        "Bagaimana bisa?" tanya Raja Mulay keheranan.

        "Jika Paduka memakai topi ini sebagai pengganti sorban, semua laki-laki di kota Fes akan ikut memakainya pula. Mereka akan memakai apa pun yang dipakai rajanya."

        "Benar. Tetapi bagaimana bisa membuat kota Fes terkenal?"

        "Pengunjung kota Fes akan melihat topi ini dipakai oleh setiap laki-laki kota Fes. Mereka tentu akan membeli dan turut memakai."

        Raja Mulay berpikir sejenak dan berkata, "Benar, tetapi bagaimana bisa membuat kota Fes terkenal? Kau semakin membuatku bingung."

        "Maafkan hamba, Paduka," Abu melanjutkan, "Lama-kelamaan, orang-orang di kota lain juga akan tertarik memakainya. Sebab topi ini sangat nyaman dipakai. Silakan Paduka mencobanya. Topi ini akan melindungi Paduka dari terik sinar matahari. Lebih ringan dari sorban dan rumbai-rumbai di atasnya untuk membersihkan debu yang menempel pada topi."

        Raja Mulay pun tertarik ingin mencoba. Sambil bercermin Raja Mulay bergaya, "Oh...bagus sekali. Tetapi, jika seluruh laki-laki di Maroko memakai topi seperti ini, bagaimana kota Fes bisa terkenal?" masih saja Raja Mulay bertanya.

        "Paduka, setiap orang yang menyebut nama topi ini, berarti dia menyebut kota Fes. Karena hamba menamai topi ini Fes."

        Raja tercengang sesaat dan berkata, "Abu, aku percaya bahwa kau akan memenangkan sayembaraku. Tetapi jawablah satu pertanyaanku dulu. Bagaimana jika penduduk kota lain membuat topi seperti ini. Lalu mereka memberi nama dengan nama lain?"

        Abu menjawab," Warna merah yang hamba pakai untuk mewarnai topi ini berasal dari getah pohon yang hanya tumbuh di kota Fes. Jadi hanya penduduk kota Fes-lah yang bisa membuat topi Fes yang asli."

        Raja Mulay berseru," Kau memang anak yang cerdik, Abu! Aku akan memakai topi ini agar semua laki-laki di kota Fes tahu.

        Kemudian mereka akan ikut memakai sekaligus membuat dan menjualnya. Dan kota Fes akan selalu diingat orang. Kau memenangkan sayembaraku, Abu."

        Dengan gembira Raja Mulay menyerahkan 4 kantong emas kepada Abu, si anak kecil yang miskin.

        Tahun demi tahun pun berlalu. Nama kota Fes menjadi terkenal. Sekarang ini, pengunjung negeri Maroko akan menjumpai banyak laki-laki yang memakai topi Fes. "Fes" telah menjadi topi khas sekaligus kebanggaan rakyat Maroko.
        `,
      sampul : "https://asset-a.grid.id//crop/0x0:0x0/360x240/photo/2019/09/16/461333701.jpg",
      createdAt : new Date(),
      updatedAt : new Date()  
      },
      {
        kategori_id : 4,
        judul : "Serunai Batang Padi" ,
        deskripsi : "Negeri Tanah Hijau yang diperintah Raja Tan Sati adalah negeri yang subuh. Dimana-mana terdapat hamparan kebun dan sawah. Namun, ada hal mengenaskan di balik negeri subur ini.....",
        penulis : "Sarah Nafisah" ,
        isi : `
        Negeri Tanah Hijau yang diperintah Raja Tan Sati adalah negeri yang subur. Di mana-mana terdapat hamparan kebun dan sawah. Negeri-negeri tetangga bahkan mendapat beras dari Negeri Tanah Hijau ini. Namun sayang, di negeri yang subur ini justru banyak terdapat pengemis dan gelandangan. Penduduk yang kaya lebih senang berhura-hura dan mengadakan pesta. Tidak ada yang mempedulikan orang miskin di sekitar mereka. Keadaan demikian berlangsung terus bertahun-tahun.

        Malin adalah salah satu penduduk miskin di Negeri Tanah Hijau. Kerjanya menjual kayu bakar. Pada suatu hari, Malin datang ke rumah Pak Lodan yang kaya raya.
        
        "Pak Lodan, apa Bapak mau membeli kayu-kayu bakarku ini?" ujar Malin.
        
        "Hmm, bagaimana kalau kutukar dengan dua genggam beras? Kalau kau tak mau, bawa saja lagi kayu bakar itu. Aku bisa menyuruh pembantuku mencarinya sendiri ke hutan!" ketus Pak Lodan angkuh.
        
        "Baiklah. Tak apa ditukar dengan dua genggam beras," kata Malin mengalah.
        
        Pak Lodan lalu menyuruh pembantunya memberikan dua genggam beras yang buruk.
        
        Malin adalah tukang kayu yang rajin. Walau kakinya pincang sebelah, dia mencari kayu bakar di hutan. Kadang ia menyabit rumput untuk makanan ternak, atau menjaga padi di sawah dari gangguan burung-burung. Ia kemudian menerima upah berupa beras.
        
        Namun upah yang diterimanya biasanya sangat sedikit. Ada-ada saja alasan orang-orang kaya itu.
        
        "Aku bisa saja melepas temakku di padang yang berumput subur! Tak perlu ada yang menjaga," kata pemilik ternak sambil memberi segenggam beras.
        
        "Burung-burung itu tak akan bisa menghabiskan semua padi di sawahku! Tak ada yang menjaga juga tak apa-apa!" alasan pemilik sawah sambil memberi segenggam beras. Malin menerimanya dengan ikhlas.
        
        Siang itu Malin pulang ke gubuknya di tepi hutan besar. Hari itu Malin mendapatkan beberapa genggam beras. Perutnya sudah lapar. Tiba-tiba Malin melihat seorang tua tergeletak di pinggir jalan setapak. Malin mendekat untuk menolongnya.
        
        "Siapakah engkau, Pak Tua?." Tanya Malin.
        
        "Aku pengembara miskin. Aku kehabisan bekal. Berhari-hari aku tidak makan. Aku sudah mencoba memintanya pada orang-orang kaya itu. Tidak ada yang sudi memberikan makanan sisa sedikit pun," jawab pengembara tua itu lemah.
        
        "Sudahlah Pak Tua. Aku punya sedikit beras. Mari ke gubukku," ucap Malin tulus. Kemudian tubuh Malin yang kurus itu memapah pengembara tua ke gubuknya. Langkah mereka pelan dan tertatih-tatih.
        
        Sesampai di gubuknya, Malin memasak beras yang didapatnya hari itu.
        
        "Jangan dimasak semuanya. Sisakan segenggam untuk persediaan nanti," nasihat pengembara tua. Malin mematuhinya walau sedikit heran. Setelah itu mereka makan dengan nikmat meskipun seadanya.
        
        "Pak Tua, hanya ini yang dapat aku suguhkan. Aku tidak dapat memberimu lebih banyak. Aku tidak kuat bekerja keras. Tubuhku lemah dan kakiku pincang," kata Malin.
        
        "Aku bersyukur masih ada yang mau menolongku. Tapi aneh! Negeri ini sangat subur dan makmur. Namun tak ada yang peduli pada orang-orang miskin. Anak muda, sudah saatnya aku melanjutkan perjalanan. Tenagaku sudah pulih kembali. Terimalah serunai ini sebagai tanda terima kasihku."
        
        Pengembara tua itu memberikan sebuah seruling kecil yang terbuat dari batang padi kepada Malin. Orang-orang di Negeri Tanah Hijau menyebutnya serunai.
        
        "Gunakanlah untuk 'mengusir dan memanggil," nasihat pengembara tua itu. Tiba-tiba pengembara tua itu lenyap sebelum Malin sempat mengucapkan terima kasih.
        
        Beberapa saat kemudian, Negeri Tanah Hijau dilanda bencana kekeringan. Berbulan-bulan hujan tidak turun. Sungai dan danau kering kerontang. Tanaman padi di sawah diserang hama belalang dan mati kekeringan. Persediaan padi di lumbung-lumbung penduduk kaya dimakan hama tikus. Persediaan beras kerajaan pun sudah habis. Hewan ternak banyak yang mati terserang wabah penyakit aneh. Dalam sekejap wabah kelaparan melanda Negeri Tanah Hijau. Penduduk kaya menjadi miskin dan kelaparan. Mereka menangisi harta benda, sawah ladang, dan hewan ternak mereka.
        
        "Malapetaka ini disebabkan perbuatan kita sendiri. Kita terlalu kikir dan tidak mempedulikan orang-orang miskin di sekitar kita," ujar Penasihat Kerajaan. "Tapi aku melihat dalam mimpiku. Ada seorang berkaki lumpuh yang akan menyelamatkan negeri ini." Tidak sulit untuk menemukan pemuda berkaki lumpuh di Negeri Tanah Hijau. Malin dipangggil ke istana. Selama wabah kelaparan melanda, Malin tidak pernah kehabisan bahan makanan. Karena secara ajaib beras yang disisakannya waktu itu tidak pernah habis dimasak.
        
        Malin teringat nasihat dan serunai yang diberikan pengembara tua itu. Malin meniup serunai itu.
        
        Terdengar suara merdu mengalun ke seluruh pelosok negeri. Tiba-tiba muncul ribuan ekor burung pemangsa belalang. Tikus-tikus di lumbung berlarian masuk hutan. Tak lama kemudian hujan pun turun dengan lebatnya. Penduduk bersorak bahagia. Negeri Tanah Hijau telah bebas dari bencana.
        
        Penduduk kaya kini berjanji tidak akan kikir lagi. Malin diangkat menjadi Penasihat Pertanian Kerajaan. Negeri Tanah Hijau kembali subur. Penduduknya hidup makmur dan saling menyayangi.
        `,
        sampul : "https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/2019/11/02/417722887.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 4,
        judul : "Kekeran" ,
        deskripsi : "Ayah Najib bernama Pak Budi. Beliau seorang Perwira Polisi yang pernah mendapat penghargaan atas keberaniannya selama bertugas....",
        penulis : "Sarah Nafisah" ,
        isi : `
        Ayah Najib bernama Pak Budi. Beliau seorang Perwira Polisi yang pernah mendapat penghargaan atas keberaniannya selama bertugas. Terakhir Pak Budi dikirim ke Ambon yang sedang dilanda kerusuhan.

        "Sebagai tentara, Ayah harus siap ditugaskan kapanpun dan di mana pun," begitu kata Pak Budi pada Najib saat akan bertugas ke Ambon. Namun, walau mereka tidak bertemu selama 6 bulan, seminggu sekali ayah Najib menelepon Najib dan ibunya.

        Kemarin sore Pak Budi menelepon. Ia memberitahu bahwa masa bertugasnya Sudah selesai. Pasukannya akan digantikan oleh pasukan dari Jakarta. Najib dan ibunya diminta menunggu di Stasiun Gambir jam 07.00 pagi.

        Dari Ambon, ayah Najib naik kapal laut TNI AL ke Surabaya. Kemudian dilanjutkan dengan kereta api ke Jakarta.

        "Mana Ayah, Bu? Jangan-jangan Ayah tidak jadi pulang," keluh Najib setelah hampir satu jam mereka menunggu di stasiun Gambir.

        "Mungkin keretanya terlambat karena ada perubahan jadwal," ibu Najib menenangkan putra tunggalnya yang duduk di kelas III SD.

        Tak lama kemudian kereta yang ditunggu pun tiba. Najib dan ibunya berdiri di pinggir peron sambil melihat ke setiap gerbong. "Itu Ayah, Bu!" seru Najib sambil menunjuk ke pria tinggi besar yang berseragam anggota Brimob. Mereka segera menghampiri pria yang menggendong ransel besar itu.

        "Kok, lama sekali, Yah," tanya Ibu.

        "lya Tadi di Stasiun Cirebon keretanya berhenti cukup lama. Ada rel rusak yang harus diperbaiki dulu," jawab Ayah sambil menggendong Najib dan menciumnya.

        "Kenapa relnya bisa rusak, Yah?" tanya Najib heran.

        "Mungkin karena sudah terlalu tua. Atau ada orang iseng yang mengambili batu-batu di bantalan rel. Sehingga lama-kelamaan rel menjadi anjiok dan berbahaya untuk dilewati kereta," jawab Ayah. "Bagaimana sekolahmu, Jib? Dapat rangking apa, tidak?" tanya Ayah sambil menurunkan Najib dari gendongannya.

        "Rangking tiga, Ayah," jawab Najib angga.

        "Hebat. Kamu mau hadiah apa, Jib?" tanya Ayah.

        "Najib mau nonton pertandingan final sepakbola, Yah," jawab Najib, sambil mereka melangkah keluar dari stasiun.

        Setibanya di rumah, ayah Najib merapikan peralatannya.

        "Apa itu Yah?" tanya Najib.

        "Ini namanya kekeran. Gunanya untuk melihat benda atau musuh dari kejauhan," Pak Budi menerangkan. Najib mengambil dan mencobanya.

        "Wah, muka Ayah besar sekali"

        "Ini memang alat untuk melihat dari jarak jauh"

        "Kalau begitu, boleh dibawa uhtuk nonton pertandingan sepak bola nanti, Yah?" tanya Najib sambil terus-mengeker benda-benda di dalam rumah.

        "Boleh. Supaya kamu bisa lebih jelas melihat pemain bola favoritmu," jawab Ayah percanda.

        "Benar, sudah lama Najib ingin melihat wajah asli Ronaldo."

        "Husss! Itu pemain bola luar negeri," kata Ayah sambil tertawa. Najib tersenyum senang, pancingannya berhasil.

        Akhirnya hari Minggu yang ditunggu-tunggu Najib tiba. Ya, hari itu ia dan ayahnya akan menonton pertandingan sepakbola. Pagi-pagi sekali Najib sudah bangun dan mandi. Ia takut terlambat sampai di Stadion Utama Senayan, tempat pertandingan itu berlangsung nanti.

        Najib dan ayahnya akhirnya tiba di stadion. Di dalam, sudah banyak orang duduk dan bergerombol sesuai dengan tim favoritnya masing-masing. Pertandingan pun mulai.

        "Mana kekerannya, Yah?" Tanya Najib penasaran. Tim andalannya sedang membawa bola dan mengiringnya ke depan gawang lawan. Najib meraih kekeran yang disodorkan ayahnya. Lalu mulai mengeker.

        "Ya, payah! Masa bola sudah di depan gawang, masih tidak masuk!"

        "Kalau cuma nonton, memang kelihatan gampang. Tapi coba kalau kamu yang main, belum tentu bisa dapat bola," sahut Ayah menasihati. Najib hanya tersenyum mendengar sindiran ayahnya. Ia terus memainkan kekerannya ke segala penjuru. Termasuk ke arah penonton di bawahnya.

        “Wah! Itu kan si Agus," kata Najib kaget. Ternyata di kelas VIP, ada Agus, teman sekelasnya. Namun jarak Agus cukup jauh. Tak mungkin ia mendengar panggilan walau Najib berteriak. Dan, ah, tiba-tiba Najib mendapat akal. Ia mengarahkan kekeran ke wajah temannya itu. Wajah Agus kini tampak dekat sekali.

        Lalu, "Hei, Agus! Sombong sekali! Kupanggil, tidak menyahut!" Najib setengah berbisik. Pak Budi tertawa  terbahak-bahak melihat tingkah anaknya.

        "Aduh, Jib! Mana mungkin temanmu bisa dengar. Kamu teriak kencang saja, dia tidak dengar. Apalagi berbisik."

        "Tapi kata Ayah, kalau memakai kekeran, kita bisa melihat yang jauh menjadi dekat. Najib kan berbisik pas di telinga Agus!" jawab Najib.

        "Memang. Yang jauh bisa kelihatan jadi dekat, yang kecil bisa jadi besar. Itu karena di dalam teropong ini, ada semacam kaca pembesar. Kaca itu membuat jarak pandang kita jadi lebih jauh. Tapi, kekeran atau teropong ini gunanya hanya untuk melihat. Tidak bisa untuk berbicara dengan orang yang jauh jaraknya," sambung Pak Budi menjelaskan.

        "Oh....begitu. Pantas Agus tidak menengok-nengok waktu dipanggil," sambung Najib sambil tersenyum malu. Apalagi orang di sebelahnya ikut tertawa.

        "Dik, boleh pinjam kekerannya, tidak?" tanya pemuda itu. "Buat apa, Mas?" Najib balik bertanya.

        "Buat kasih tahu ke kiper tim biru. Supaya jangan duduk terus. Nanti kalau ada tendangan bola jarak jauh, bagaimana?" ledek pria itu. Pak Budi dan yang lainnya ikut tertawa. Semakin merahlah wajah Najib menahan malu.
        `,
        sampul : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nA2cnZedmqu27ekPwqb-dNC60CRYQxcCtaoujzUO1l1UM22hZ2ON3sPEJF8_n8nMuAs&usqp=CAU",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 4,
        judul : "Seorang Nenek dengan Sarang Semut di Kakinya" ,
        deskripsi : `"Jangan Didi! Kembalikan! Itu kalung pemberian ibuku", suaraku serak karena menahan tangis. Didi, Hari, dan Ano tertawa terbahak-bahak. Senang sekali melihatku kebingungan.`,
        penulis : "Yuniar Khairani" ,
        isi : `
        “Jangan Didi! Kembalikan! Itu kalung pemberian ibuku", suaraku serak karena menahan tangis. Didi, Hari, dan Ano tertawa terbahak-bahak. Senang sekali melihatku kebingungan.

        "Nanti pasti kami kembalikan, Mita. Yah, barangkali kami ingin bermain lempar-lemparan kalung dulu di sungai," kata Ano tenang. Mereka kembali tertawa terpingkal. Oh, aku panik sekali. Ibu pasti marah kalau kalung mahal hadiah darinya hanyut di sungai.

        "Beraninya hanya dengan anak perempuan. Awas kalau..?'

        "Hoaak...ak...ak...huk!"

        Suara batuk itu membuat kata-kataku terhenti. Jantungku terasa berhenti berdetak karena kaget. Keringat dingin mulai membasahi telapak tanganku. Karena sibuk melarikan kalungku, mereka tak sadar telah memilih jalan ke arah gubuk Nenek Rat. Melihat pucatnya wajah Didi, Hari, dan Ano kurasa mereka tak kalah cemasnya dengan aku.

        "Kalian dengar?" bisik Hari dengan suara hampir tercekik, "Si Pemakan Anak itu barangkali mendengar suara kita..." Kami memandang dengan takut gubuk bambu yang terlindung dibalik semak. Sejenak aku merasa senang karena aku tidak merasa melakukan hal yang salah. Tapi kata-kata Didi membuat kelegaanku tak bertahan lama.

        "Dia jahat sekali! Nenek tua itu akan menginjak kita dengan kakinya yang besar. Lalu kita dijadikan gulai. Kau tahu, kakinya itu adalah sarang semut."

        "Jangan main-main kau, Didi!" tukas Ano sengit. Aku menelan ludah dengan susah payah. Perutku geli dan mual membayangkan sarang semut di kaki nenek Rat.

        "Ayo pulang," ajakku lirih, "barangkali benar, kalau kita terlalu lama di sini, Nenek Rat akan membuat gulai sayur Didi", kataku mencoba melucu.

        "Mita benar, kita memang harus . pulang" ujar Ano. Aku menarik napas lega diam-diam.

        "Benar, Ano! Sekarang kembalikan kalungku. Lalu kita akan pulang ke rumah masing-masing", kataku sambil mengulurkan tangan.

        Didi dan Hari terkekeh geli, "Hanya kami yang pulang. Kau tetap disini!" Aku terperanjat, "Apa maksudmu?" tukasku sengit.

        "Maksudku, kalau kau ingin kalungmu kembali, buktikan dulu kau berani masuk ke gubuk Si Pemakan Anak itu!" seringai Didi sambil menggoyangkan kalung berbandul huruf M itu.

        Aku menggeretakkan gigi kesal. Tadinya aku ingin menangis keras-keras. Tapi kurasa itu akan semakin membuat mereka merasa menang. Karena itu aku menarik napas dengan tenang dan berkata, "Baiklah." Kemudian kulangkahkan kakiku perlahan ke arah gubuk Nenek Rat. Sambil terus berdoa dan memejamkan mata. Semakin dekat dengan pintu gubuk, perutku semakin mual membayangkan sarang semut di kaki Nenek Rat.

        Duk! Duk! Duk! Kuketuk pintunya dengan hati berdebar.

        "SIAPA KAU?" bentak Nenek Rat begitu pintu terbuka dengan suara keras. Di tangannya tergenggam sebuah pisau daging yang sangat besar. Kudengar Didi, Hari, dan Ano berteriak ketakutan dan lari terbirit-birit meninggalkan kami.

        "Ehm, ss... saya.... Mita," jawabku tergagap. Nenek Rat memicingkan sebelah matanya sambil mencibir. Aku memandangnya takut-takut, "Saya dengar Nenek tadi batuk-batuk. Saya pikir, Nenek tentu perlu bantuan. Saya selalu membawa obat-obatan di tas." Kuraba dasar tas sekolahku. Aku sedikit lega karena kantung obat yang selalu kubawa tidak tertinggal di meja belajarku.

        "Betul begitu?" tanya Nenek Rat ragu. Aku mengangguk memastikan. "Masuklah, Nak!" ujarnya pelan. Aku menahan senyum. Sungguh baru kali ini aku merasa bersyukur karena memiliki Ayah seorang dokter. Ayah setiap hari memaksaku membawa obat-obatan untuk pertolongan pertama.

        'Tadinya kukira kau seperti anak-anak lain yang sering mengganggu dan melempari rumahku. Ternyata tidak," katanya lirih. Aku tersenyum iba mendengarnya. Mataku menyapu ruangan dingin dan lembab. Perabotnya hanya sebuah meja reot dan dipan bambu usang.

        "Nenek sendihan?" tanyaku bodoh, karena sesungguhnya aku tahu kalau dia hidup sendiri di gubuk reot ini. Tapi Nenek Rat mengangguk juga mengiyakan. Kulirik kakinya yang besar. Tapi tidak berlubang dan menjadi sarang semut seperti yang kubayangkan.

        "Kata teman-teman, kaki Nenek Rat menjadi sarang semut," kataku takut-takut. Nenek Rat tertawa. Aku menatapnya bingung.

        "Nenek tak pernah punya sarang semut di kaki. Lihat ini!" ujarnya sambil mengangkat sebelah kakinya ke arahku. 'Tapi Nenek sendiri heran, kenapa semut suka sekali dekat-dekat di tubuh Nenek.
        Pakaian-pakaian kotor selalu dirubung semut," katanya sambil menggelengkan kepala bingung.

        "Barangkali Nenek sakit gula", jawabku. Tiba-tiba aku mendapat akal. "Nek, bagaimana kalau Nenek Rat ke rumah Mita hari ini. Agak jauh, memang. Di ujung desa. Tapi Ayah Mita seorang dokter. Ayah pasti tahu apa yang bisa dilakukan untuk Nenek!" Kuraih tangan besar, dekil, dan keriput itu sambil tersenyum. "Khusus Nenek Rat, gratis!" bisikku sambil mengedipkan mata.

        "Sekarang juga?" seru Nenek Rat senang. Aku mengangguk. Bangga juga membayangkan ketakutan telah kukalahkan. Dan tentunya Didi, Hari, dan Ano akan mengembalikan kalungku sambil tertunduk malu.
        `,
        sampul : "http://asset-a.grid.id/crop/0x0:0x0/x/photo/2019/09/24/3626128115.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 4,
        judul : "Peri Kecil yang Rajin" ,
        deskripsi : `Di sebuah rumah mungil, tinggallah kakak beradik Tomi dan Meri serta ayah dan nenek mereka. Setiap hari Meri selalu berkata, "Aku ingin rumah kita kelihatan sebagus rumah orang lain." Dan Tomi selalu menjawab, "Aku juga ingin begitu."`,
        penulis : "Sarah Nafisah" ,
        isi : `
        Di sebuah rumah mungil, tinggallah kakak beradik Tomi dan Meri serta ayah dan nenek mereka. Setiap hari Meri selalu berkata, "Aku ingin rumah kita kelihatan sebagus rumah orang lain." Dan Tomi selalu menjawab, "Aku juga ingin begitu."

        Tetapi mereka tidak pernah bekerja membersihkan rumah itu. Mereka tidak pernah mengatur perabotan, menyirami tanaman... Mereka juga tidak pernah membantu ayah dan nenek mereka yang sudah tua.

        Suatu hari Meri berkata kepada neneknya,

        "Nek, mengapa rumah orang lain bisa tampak bagus dan rapi sepanjang waktu? Apa sebabnya?"

        "Itu karena Brownie tinggal di rumah-rumah yang rapi itu," kata Nenek. "Brownie-Brownie melakukan apa saja agar rumah yang ditinggalinya kelihatan bagus."

        "Brownie itu apa, Nek?" Tanya Tomi.

        "Brownie adalah peri-peri kecil yang suka membantu apa saja. Senang sekali jika ada Brownie di dalam rumah," jawab Nenek.

        "Aku ingin kita punya satu Brownie!" seru Meri.

        "Seperti apa mereka, Nek?"

        "Rupa mereka seperti gadis kecil," kata Nenek.

        "Dimana kita harus mencari mereka, Nek?" Tanya Meri lagi.

        "Tanya saja pada seorang kakek bijaksana yang tinggal dekat danau. Mungkin ia dapat memberitahukanmu," kata Nenek.

        Meri kemudian pergi ke danau yang tidak terlalu jauh dari rumahnya. Ia akhirnya berjumpa dengan Kakek Bijaksana.

        "Kek, kata nenekku, Brownie mail bekerja apa saja agar rumah kami bisa kelihatan bagus. Maukah Kakek membantuku untuk menemukan satu Brownie saja, Kek?"

        "Boleh saja," kata Kakek Bijaksana. "Kamu harus pergi ke danau. Lalu putar tubuhmu tiga kali, dan katakan inl,

        'Putar saya dan balikkan saya dan perlihatkan saya peri kecil. Saya melihat ke dalam air dan saya melihatnya....'

        Nah, setelah syairmu selesai, lihatlah ke dalam air di danau. Kau akan melihat Brownie!"

        Setelah mengucapkan terima kasih, Meri berlari ke pinggir danau dan memutar tubuhnya tiga kali. Sambil berbalik, ia mengucapkan syairtadi,

        "Putar saya dan balikkan saya dan perlihatkan saya peri kecil. Saya melihat ke dalam air dan saya melihatnya…"

        Tetapi ketika Meri melihat ke dalam air, ia hanya melihat bayangan dirinya sendiri.

        "Mungkin aku salah membaca syair," piker Meri, lalu mengulang syair tadi. Tetapi seperti tadi, ia hanya melihat bayangan dirinya di dalam air.

        “Aku rasa aku melakukan kesalahan lagi," kata Meri.

        "Setiap kali kucoba yang bisa kulihat hanya diriku sendiri."

        Meri akhirnya berlari kembali menjumpai Kakek Bijaksana.

        "Kek, ketika aku mencari Brownie, yang kutemukan hanya diriku sendiri. Aku kan bukan Brownie, Kek," kata Meri.

        "Oh ya?" tanya Kakek Bijaksana. "Seperti apa Brownie yang kamu lihat itu?"

        "Ya...seperti gadis kecil, Kek," kata Meri.

        "Dan apa yang dilakukan oleh Brownie?" tanya si Kakek.

        ng Rajin
        “Aku rasa aku melakukan kesalahan lagi," kata Meri.

        "Setiap kali kucoba yang bisa kulihat hanya diriku sendiri."

        Meri akhirnya berlari kembali menjumpai Kakek Bijaksana.

        "Kek, ketika aku mencari Brownie, yang kutemukan hanya diriku sendiri. Aku kan bukan Brownie, Kek," kata Meri.

        "Oh ya?" tanya Kakek Bijaksana. "Seperti apa Brownie yang kamu lihat itu?"

        "Ya...seperti gadis kecil, Kek," kata Meri.

        "Dan apa yang dilakukan oleh Brownie?" tanya si Kakek.

        Baca Juga: Podcast Dongeng untuk Anak-Anak: Pangeran yang Sabar #MendongenguntukCerdas

        "Mereka membantu apa saja dan merawat rumah agar kelihatan indah," kata Meri.

        "Menurutmu, kau bisa melakukan semua pekerjaan Brownie itu?" tanya Kakek Bijaksana lagi.

        "Aku tidak ingin begitu, Kek!" kata Meri. "Aku mencari Brownie untuk mengerjakan semuanya untukku!"

        "Kau ingin seseorang melakukan pekerjaan untukmu. Sementara kau sendiri tidak pernah melakukannya?" tanya Kakek Bijaksana kembali. "Kau ingin menjadi seorang gadis yang tidak pernah mengatur perabotan? Gadis yang tidak pernah menyirami tanaman? Gadis yang tidak pernah sama sekali membantu Ayah dan Nenek yang sudah sangat tua?"

        "Oh tidak, Kek!" seru Meri. "Aku tidak sungguh-sungguh ingin seperti itu! Baiklah, aku ingin mencoba menjadi Brownie, Kek!"

        Meri lalu segera pulang sambil tak lupa berterimakasih pada Kakek Bijaksana.

        Ketika tahu Meri ingin mencoba menjadi Brownie, Tomi juga ingin melakukannya hal yang sama.

        "Kita bisa kembali menjadi Tomi dan Meri lagi, jika bosan menjadi Brownie," kata Tomi. Maksud Tomi, jika mereka malas bekerja, mereka bisa saja membiarkan rumah mereka berantakan lagi seperti dulu.

        Tetapi ternyata menjadi Brownie adalah hal yang menyenangkan. Setiap pagi kedua anak itu bangun di saat ayah dan nenek mereka masih tidur. Mereka melakukan semua pekerjaan rumah.

        Selama beberapa waktu, Ayah dan Nenek mengira Brownie-lah yang telah membersihkan rumah mereka. Tetapi suatu pagi mereka mendapati anak-anak itu tertawa ceria di saat bekerja.

        "Apa ini?" seru Ayah.

        Nenek hanya tertawa dan tertawa. Setelah melihat kedua cucunya, Nenek mengerti.

        "Betapa menyenangkan jika ada Brownie di dalam rumah," kata Nenek.
        `,
        sampul : "https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/2019/10/29/2617165300.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('books', null, {});
  }
};
