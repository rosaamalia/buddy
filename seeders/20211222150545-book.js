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
        sampul : "https://www.google.com/",
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
        sampul : "https://www.google.com/search?q=sampul+puisi&sxsrf=AOaemvLehxVszhIfdXTFP81fpJAvbFQlMQ:1640187871901&source=lnms&tbm=isch&sa=X&ved=2ahUKEwixouD73_f0AhV2TWwGHW-dAgQQ_AUoAXoECAEQAw&biw=1517&bih=694&dpr=0.9#imgrc=M3lSQrMvs0dgUM",
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
        sampul : "https://www.google.com/search?q=sampul+puisi&sxsrf=AOaemvLehxVszhIfdXTFP81fpJAvbFQlMQ:1640187871901&source=lnms&tbm=isch&sa=X&ved=2ahUKEwixouD73_f0AhV2TWwGHW-dAgQQ_AUoAXoECAEQAw&biw=1517&bih=694&dpr=0.9#imgrc=M3lSQrMvs0dgUM",
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
        sampul : "https://www.google.com/search?q=sampul+puisi&sxsrf=AOaemvLehxVszhIfdXTFP81fpJAvbFQlMQ:1640187871901&source=lnms&tbm=isch&sa=X&ved=2ahUKEwixouD73_f0AhV2TWwGHW-dAgQQ_AUoAXoECAEQAw&biw=1517&bih=694&dpr=0.9#imgrc=M3lSQrMvs0dgUM",
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
        sampul : "https://www.google.com/search?q=sampul+puisi&sxsrf=AOaemvLehxVszhIfdXTFP81fpJAvbFQlMQ:1640187871901&source=lnms&tbm=isch&sa=X&ved=2ahUKEwixouD73_f0AhV2TWwGHW-dAgQQ_AUoAXoECAEQAw&biw=1517&bih=694&dpr=0.9#imgrc=M3lSQrMvs0dgUM",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 1 ,
        judul : "Nasehat-Nasehat Kecil Orang Tua" ,
        deskripsi : "Pada Anaknya Berangkat Dewasa",
        penulis : "Taufik Ismail" ,
        isi : `
        Pada Anaknya Berangkat Dewasa
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
        sampul : "https://www.google.com/search?q=sampul+puisi&sxsrf=AOaemvLehxVszhIfdXTFP81fpJAvbFQlMQ:1640187871901&source=lnms&tbm=isch&sa=X&ved=2ahUKEwixouD73_f0AhV2TWwGHW-dAgQQ_AUoAXoECAEQAw&biw=1517&bih=694&dpr=0.9#imgrc=M3lSQrMvs0dgUM",
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
        sampul : "https://www.google.com/search?q=sampul+puisi&sxsrf=AOaemvLehxVszhIfdXTFP81fpJAvbFQlMQ:1640187871901&source=lnms&tbm=isch&sa=X&ved=2ahUKEwixouD73_f0AhV2TWwGHW-dAgQQ_AUoAXoECAEQAw&biw=1517&bih=694&dpr=0.9#imgrc=M3lSQrMvs0dgUM",
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
        sampul : "https://www.google.com/search?q=sampul+puisi&sxsrf=AOaemvLehxVszhIfdXTFP81fpJAvbFQlMQ:1640187871901&source=lnms&tbm=isch&sa=X&ved=2ahUKEwixouD73_f0AhV2TWwGHW-dAgQQ_AUoAXoECAEQAw&biw=1517&bih=694&dpr=0.9#imgrc=M3lSQrMvs0dgUM",
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
        sampul : "https://www.google.com/search?q=sampul+puisi&sxsrf=AOaemvLehxVszhIfdXTFP81fpJAvbFQlMQ:1640187871901&source=lnms&tbm=isch&sa=X&ved=2ahUKEwixouD73_f0AhV2TWwGHW-dAgQQ_AUoAXoECAEQAw&biw=1517&bih=694&dpr=0.9#imgrc=M3lSQrMvs0dgUM",
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
        sampul : "https://www.google.com/search?q=sampul+puisi&sxsrf=AOaemvLehxVszhIfdXTFP81fpJAvbFQlMQ:1640187871901&source=lnms&tbm=isch&sa=X&ved=2ahUKEwixouD73_f0AhV2TWwGHW-dAgQQ_AUoAXoECAEQAw&biw=1517&bih=694&dpr=0.9#imgrc=M3lSQrMvs0dgUM",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id :2 ,
        judul : "Pantun Nasihat" ,
        deskripsi : "Pisang emas dibawa berlayar ...",
        penulis : "Chairil Anwar" ,
        isi : "Pisang emas dibawa berlayar \n Masak sebiji di dalam peti \n Hutang emas dapat dibayar \n Hutang budi dibawa mati",
        sampul : "https://www.google.com/search?q=gambar+sampul+pantun&tbm=isch&ved=2ahUKEwi0i-fo2ff0AhU9xnMBHWWHDpEQ2-cCegQIABAA&oq=gambar+sampul+pantun&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoFCAAQgAQ6BggAEAoQGDoICAAQgAQQsQM6CwgAEIAEELEDEIMBOggIABCxAxCDAToECAAQAzoGCAAQCBAeOgQIABAYUIkfWJ5NYKlUaABwAHgBgAG_AogBmiCSAQgyLjIzLjEuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=bUHDYfSgIb2Mz7sP5Y66iAk&bih=694&biw=1517#imgrc=0qkA35nmR7ANIM",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id :2 ,
        judul : "Pantun Nasihat" ,
        deskripsi : "Pulau nandan jauh di tengah ...",
        penulis : "Chairil Anwar" ,
        isi : "Pulau pandan jauh di tengah \n Di balik pulau angsa dua \n Hancur badan dikandung tanah \n Budi baik dikenang jua",
        sampul : "https://www.google.com/search?q=gambar+sampul+pantun&tbm=isch&ved=2ahUKEwi0i-fo2ff0AhU9xnMBHWWHDpEQ2-cCegQIABAA&oq=gambar+sampul+pantun&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoFCAAQgAQ6BggAEAoQGDoICAAQgAQQsQM6CwgAEIAEELEDEIMBOggIABCxAxCDAToECAAQAzoGCAAQCBAeOgQIABAYUIkfWJ5NYKlUaABwAHgBgAG_AogBmiCSAQgyLjIzLjEuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=bUHDYfSgIb2Mz7sP5Y66iAk&bih=694&biw=1517#imgrc=0qkA35nmR7ANIM",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id :2 ,
        judul : "Pantun Nasihat" ,
        deskripsi : "Kalau keladi sudah ditanam ...",
        penulis : "Asriadi" ,
        isi : "Kalau keladi sudah ditanam \n Janganlah lagi meminta talas \n Kalau budi sudah ditanam \n Janganlah lagi meminta balas",
        sampul : "https://www.google.com/search?q=gambar+sampul+pantun&tbm=isch&ved=2ahUKEwi0i-fo2ff0AhU9xnMBHWWHDpEQ2-cCegQIABAA&oq=gambar+sampul+pantun&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoFCAAQgAQ6BggAEAoQGDoICAAQgAQQsQM6CwgAEIAEELEDEIMBOggIABCxAxCDAToECAAQAzoGCAAQCBAeOgQIABAYUIkfWJ5NYKlUaABwAHgBgAG_AogBmiCSAQgyLjIzLjEuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=bUHDYfSgIb2Mz7sP5Y66iAk&bih=694&biw=1517#imgrc=0qkA35nmR7ANIM",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id :2 ,
        judul : "Pantun Jenaka" ,
        deskripsi : "Burueng haling tabang tinggi ...",
        penulis : "Dr. Rais Yatim" ,
        isi : "Burueng haling tabang tinggi \n Tabang mengirok ka talago lamo \n Kok hilang kama ka dicari \n Kok lalok bilo ka tajago ",
        sampul : "https://www.google.com/search?q=gambar+sampul+pantun&tbm=isch&ved=2ahUKEwi0i-fo2ff0AhU9xnMBHWWHDpEQ2-cCegQIABAA&oq=gambar+sampul+pantun&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoFCAAQgAQ6BggAEAoQGDoICAAQgAQQsQM6CwgAEIAEELEDEIMBOggIABCxAxCDAToECAAQAzoGCAAQCBAeOgQIABAYUIkfWJ5NYKlUaABwAHgBgAG_AogBmiCSAQgyLjIzLjEuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=bUHDYfSgIb2Mz7sP5Y66iAk&bih=694&biw=1517#imgrc=0qkA35nmR7ANIM",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id :2 ,
        judul : "Pantun Nasihat" ,
        deskripsi : "Jika anak berjiwa seni ...",
        penulis : "Irwan Prayitno" ,
        isi : "Jika anak berjiwa seni \n Bakatnya datang tidak menjelma \n Pendidikan dimulai Sejak Dini \n Orangtua dan guru harus seirama",
        sampul : "https://www.google.com/search?q=gambar+sampul+pantun&tbm=isch&ved=2ahUKEwi0i-fo2ff0AhU9xnMBHWWHDpEQ2-cCegQIABAA&oq=gambar+sampul+pantun&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoFCAAQgAQ6BggAEAoQGDoICAAQgAQQsQM6CwgAEIAEELEDEIMBOggIABCxAxCDAToECAAQAzoGCAAQCBAeOgQIABAYUIkfWJ5NYKlUaABwAHgBgAG_AogBmiCSAQgyLjIzLjEuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=bUHDYfSgIb2Mz7sP5Y66iAk&bih=694&biw=1517#imgrc=0qkA35nmR7ANIM",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id :2 ,
        judul : "Pantun Agama" ,
        deskripsi : "Kami datang dengan teman ...",
        penulis : "Anonim" ,
        isi : "Kami datang dengan teman \n Bawanya batu akik \n Al Quran adalah pedoman \n Menjadi pribadi lebih baik",
        sampul : "https://www.google.com/search?q=gambar+sampul+pantun&tbm=isch&ved=2ahUKEwi0i-fo2ff0AhU9xnMBHWWHDpEQ2-cCegQIABAA&oq=gambar+sampul+pantun&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoFCAAQgAQ6BggAEAoQGDoICAAQgAQQsQM6CwgAEIAEELEDEIMBOggIABCxAxCDAToECAAQAzoGCAAQCBAeOgQIABAYUIkfWJ5NYKlUaABwAHgBgAG_AogBmiCSAQgyLjIzLjEuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=bUHDYfSgIb2Mz7sP5Y66iAk&bih=694&biw=1517#imgrc=0qkA35nmR7ANIM",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id :2 ,
        judul : "Pantun Cinta" ,
        deskripsi : "Orang Cina berdagang kain...",
        penulis : "Hamzah Fansuri" ,
        isi : "Orang Cina berdagang kain \n kain dijual di tengah pekan \n Asal tidak cari yang lain \n nyawa dan badan saya serahkan.",
        sampul : "https://www.google.com/search?q=gambar+sampul+pantun&tbm=isch&ved=2ahUKEwi0i-fo2ff0AhU9xnMBHWWHDpEQ2-cCegQIABAA&oq=gambar+sampul+pantun&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoFCAAQgAQ6BggAEAoQGDoICAAQgAQQsQM6CwgAEIAEELEDEIMBOggIABCxAxCDAToECAAQAzoGCAAQCBAeOgQIABAYUIkfWJ5NYKlUaABwAHgBgAG_AogBmiCSAQgyLjIzLjEuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=bUHDYfSgIb2Mz7sP5Y66iAk&bih=694&biw=1517#imgrc=0qkA35nmR7ANIM",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id :2 ,
        judul : "Pantun Kiasan" ,
        deskripsi : "Wahai ananda cahaya mata ...",
        penulis : "Dr. Tenas Effendy" ,
        isi : "Wahai ananda cahaya mata \n Pantun melayu jangan dinista \n Isinya indah bagai permata \n Bila dipakai menjadi mahkota",
        sampul : "https://www.google.com/search?q=gambar+sampul+pantun&tbm=isch&ved=2ahUKEwi0i-fo2ff0AhU9xnMBHWWHDpEQ2-cCegQIABAA&oq=gambar+sampul+pantun&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoFCAAQgAQ6BggAEAoQGDoICAAQgAQQsQM6CwgAEIAEELEDEIMBOggIABCxAxCDAToECAAQAzoGCAAQCBAeOgQIABAYUIkfWJ5NYKlUaABwAHgBgAG_AogBmiCSAQgyLjIzLjEuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=bUHDYfSgIb2Mz7sP5Y66iAk&bih=694&biw=1517#imgrc=0qkA35nmR7ANIM",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id :2 ,
        judul : "Pantun Nasihat" ,
        deskripsi : "Wahai ananda kekasih ibu ...",
        penulis : "Dr. Tenas Effendy" ,
        isi : "Wahai ananda kekasih ibu \n Pakai olehmu pantun melayu \n Di dalamnya banyak mengandung ilmu \n Manfaatnya besar untuk bekalmu",
        sampul : "https://www.google.com/search?q=gambar+sampul+pantun&tbm=isch&ved=2ahUKEwi0i-fo2ff0AhU9xnMBHWWHDpEQ2-cCegQIABAA&oq=gambar+sampul+pantun&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoFCAAQgAQ6BggAEAoQGDoICAAQgAQQsQM6CwgAEIAEELEDEIMBOggIABCxAxCDAToECAAQAzoGCAAQCBAeOgQIABAYUIkfWJ5NYKlUaABwAHgBgAG_AogBmiCSAQgyLjIzLjEuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=bUHDYfSgIb2Mz7sP5Y66iAk&bih=694&biw=1517#imgrc=0qkA35nmR7ANIM",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id :2 ,
        judul : "Pantun Nasihat" ,
        deskripsi : "Wahai ananda dengarlah manat ...",
        penulis : "Dr. Tenas Effendy" ,
        isi : "Wahai ananda dengarlah manat \n Pantun memantun sudah teradat \n Di dalamnya banyak berisi nasehat \n Bila dipakai hidup selamat",
        sampul : "https://www.google.com/search?q=gambar+sampul+pantun&tbm=isch&ved=2ahUKEwi0i-fo2ff0AhU9xnMBHWWHDpEQ2-cCegQIABAA&oq=gambar+sampul+pantun&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoFCAAQgAQ6BggAEAoQGDoICAAQgAQQsQM6CwgAEIAEELEDEIMBOggIABCxAxCDAToECAAQAzoGCAAQCBAeOgQIABAYUIkfWJ5NYKlUaABwAHgBgAG_AogBmiCSAQgyLjIzLjEuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=bUHDYfSgIb2Mz7sP5Y66iAk&bih=694&biw=1517#imgrc=0qkA35nmR7ANIM",
        createdAt : new Date(),
        updatedAt : new Date()
      },
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
        sampul : "https://www.google.com/search?q=sampul+cerpen&tbm=isch&ved=2ahUKEwiY4v2A4Pf0AhVKhNgFHYeCDWMQ2-cCegQIABAA&oq=sampul+cerpe&gs_lcp=CgNpbWcQARgAMgUIABCABDIGCAAQBRAeMgYIABAIEB46BwgjEO8DECc6CAgAEIAEELEDOgsIABCABBCxAxCDAVCsBljRHmCHKmgAcAB4AIAB3AGIAZ8NkgEFMS43LjOYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=6kfDYZjFNMqI4t4Ph4W2mAY&bih=694&biw=1517#imgrc=xBARDCXv9dEEIM",
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
        sampul : "https://www.google.com/search?q=sampul+cerpen&tbm=isch&ved=2ahUKEwiY4v2A4Pf0AhVKhNgFHYeCDWMQ2-cCegQIABAA&oq=sampul+cerpe&gs_lcp=CgNpbWcQARgAMgUIABCABDIGCAAQBRAeMgYIABAIEB46BwgjEO8DECc6CAgAEIAEELEDOgsIABCABBCxAxCDAVCsBljRHmCHKmgAcAB4AIAB3AGIAZ8NkgEFMS43LjOYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=6kfDYZjFNMqI4t4Ph4W2mAY&bih=694&biw=1517#imgrc=xBARDCXv9dEEIM",
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
        sampul : "https://www.google.com/search?q=sampul+cerpen&tbm=isch&ved=2ahUKEwiY4v2A4Pf0AhVKhNgFHYeCDWMQ2-cCegQIABAA&oq=sampul+cerpe&gs_lcp=CgNpbWcQARgAMgUIABCABDIGCAAQBRAeMgYIABAIEB46BwgjEO8DECc6CAgAEIAEELEDOgsIABCABBCxAxCDAVCsBljRHmCHKmgAcAB4AIAB3AGIAZ8NkgEFMS43LjOYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=6kfDYZjFNMqI4t4Ph4W2mAY&bih=694&biw=1517#imgrc=xBARDCXv9dEEIM",
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
        sampul : "https://www.google.com/search?q=sampul+cerpen&tbm=isch&ved=2ahUKEwiY4v2A4Pf0AhVKhNgFHYeCDWMQ2-cCegQIABAA&oq=sampul+cerpe&gs_lcp=CgNpbWcQARgAMgUIABCABDIGCAAQBRAeMgYIABAIEB46BwgjEO8DECc6CAgAEIAEELEDOgsIABCABBCxAxCDAVCsBljRHmCHKmgAcAB4AIAB3AGIAZ8NkgEFMS43LjOYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=6kfDYZjFNMqI4t4Ph4W2mAY&bih=694&biw=1517#imgrc=xBARDCXv9dEEIM",
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
        sampul : "https://www.google.com/search?q=sampul+cerpen&tbm=isch&ved=2ahUKEwiY4v2A4Pf0AhVKhNgFHYeCDWMQ2-cCegQIABAA&oq=sampul+cerpe&gs_lcp=CgNpbWcQARgAMgUIABCABDIGCAAQBRAeMgYIABAIEB46BwgjEO8DECc6CAgAEIAEELEDOgsIABCABBCxAxCDAVCsBljRHmCHKmgAcAB4AIAB3AGIAZ8NkgEFMS43LjOYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=6kfDYZjFNMqI4t4Ph4W2mAY&bih=694&biw=1517#imgrc=xBARDCXv9dEEIM",
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
        sampul : "https://www.google.com/search?q=sampul+cerpen&tbm=isch&ved=2ahUKEwiY4v2A4Pf0AhVKhNgFHYeCDWMQ2-cCegQIABAA&oq=sampul+cerpe&gs_lcp=CgNpbWcQARgAMgUIABCABDIGCAAQBRAeMgYIABAIEB46BwgjEO8DECc6CAgAEIAEELEDOgsIABCABBCxAxCDAVCsBljRHmCHKmgAcAB4AIAB3AGIAZ8NkgEFMS43LjOYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=6kfDYZjFNMqI4t4Ph4W2mAY&bih=694&biw=1517#imgrc=xBARDCXv9dEEIM",
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
        sampul : "https://www.google.com/search?q=sampul+cerpen&tbm=isch&ved=2ahUKEwiY4v2A4Pf0AhVKhNgFHYeCDWMQ2-cCegQIABAA&oq=sampul+cerpe&gs_lcp=CgNpbWcQARgAMgUIABCABDIGCAAQBRAeMgYIABAIEB46BwgjEO8DECc6CAgAEIAEELEDOgsIABCABBCxAxCDAVCsBljRHmCHKmgAcAB4AIAB3AGIAZ8NkgEFMS43LjOYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=6kfDYZjFNMqI4t4Ph4W2mAY&bih=694&biw=1517#imgrc=xBARDCXv9dEEIM",
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
        sampul : "https://www.google.com/search?q=sampul+cerpen&tbm=isch&ved=2ahUKEwiY4v2A4Pf0AhVKhNgFHYeCDWMQ2-cCegQIABAA&oq=sampul+cerpe&gs_lcp=CgNpbWcQARgAMgUIABCABDIGCAAQBRAeMgYIABAIEB46BwgjEO8DECc6CAgAEIAEELEDOgsIABCABBCxAxCDAVCsBljRHmCHKmgAcAB4AIAB3AGIAZ8NkgEFMS43LjOYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=6kfDYZjFNMqI4t4Ph4W2mAY&bih=694&biw=1517#imgrc=xBARDCXv9dEEIM",
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
        sampul : "https://www.google.com/search?q=sampul+cerpen&tbm=isch&ved=2ahUKEwiY4v2A4Pf0AhVKhNgFHYeCDWMQ2-cCegQIABAA&oq=sampul+cerpe&gs_lcp=CgNpbWcQARgAMgUIABCABDIGCAAQBRAeMgYIABAIEB46BwgjEO8DECc6CAgAEIAEELEDOgsIABCABBCxAxCDAVCsBljRHmCHKmgAcAB4AIAB3AGIAZ8NkgEFMS43LjOYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=6kfDYZjFNMqI4t4Ph4W2mAY&bih=694&biw=1517#imgrc=xBARDCXv9dEEIM",
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
        sampul : "https://www.google.com/search?q=sampul+cerpen&tbm=isch&ved=2ahUKEwiY4v2A4Pf0AhVKhNgFHYeCDWMQ2-cCegQIABAA&oq=sampul+cerpe&gs_lcp=CgNpbWcQARgAMgUIABCABDIGCAAQBRAeMgYIABAIEB46BwgjEO8DECc6CAgAEIAEELEDOgsIABCABBCxAxCDAVCsBljRHmCHKmgAcAB4AIAB3AGIAZ8NkgEFMS43LjOYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=6kfDYZjFNMqI4t4Ph4W2mAY&bih=694&biw=1517#imgrc=xBARDCXv9dEEIM",
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
        sampul : "https://www.google.com/search?q=sampul+cerpen&tbm=isch&ved=2ahUKEwiY4v2A4Pf0AhVKhNgFHYeCDWMQ2-cCegQIABAA&oq=sampul+cerpe&gs_lcp=CgNpbWcQARgAMgUIABCABDIGCAAQBRAeMgYIABAIEB46BwgjEO8DECc6CAgAEIAEELEDOgsIABCABBCxAxCDAVCsBljRHmCHKmgAcAB4AIAB3AGIAZ8NkgEFMS43LjOYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=6kfDYZjFNMqI4t4Ph4W2mAY&bih=694&biw=1517#imgrc=xBARDCXv9dEEIM",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        kategori_id : 4,
        judul : "Pando Mencari Teman Berpetualang" ,
        deskripsi : "Pando adalah seekor anak beruang jantan...",
        penulis : "Anonim" ,
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
        sampul : "https://www.google.com/search?q=sampul+dongeng&tbm=isch&ved=2ahUKEwjbgOKO6vf0AhU4_zgGHemeDMUQ2-cCegQIABAA&oq=sampul+dongeng&gs_lcp=CgNpbWcQAzIFCAAQgAQyBggAEAUQHjIGCAAQCBAeOgcIIxDvAxAnOggIABCABBCxAzoLCAAQgAQQsQMQgwE6BAgAEBhQAFiPL2D7MmgAcAB4AoABiQaIAYQXkgENMi41LjIuMS4wLjEuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=hFLDYduuB7j-4-EP6b2yqAw&bih=694&biw=1517#imgrc=8dWB4CDH4gWz9M",
        createdAt : new Date(),
        updatedAt : new Date()
      },
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
