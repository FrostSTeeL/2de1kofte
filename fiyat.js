fiyat = {
    Corbalar: {
        Mercimek: 25,
        Ayran_Aşı: 40,
    },
    Yan_Ürünler: {
        Pilav: 30,
        Patates_Kızartma: 32,
        Yoğurt: 22,
        Cacık: 30,
        İçli_Köfte: 30,
    },
    Zeytinyağlılar: {
        Mücver: 50,
        Taze_Fasulye: 48,
        Köpoğlu: 45,
        Patlıcan_Kızartma: 40,
        Kereviz: 43,
        Yaprak_Sarma: 48,
        Pırasa: 43,
        Enginar: 50,
    },
    Salatalar: {
        Çoban: 36,
        Mevsim: 36,
        Piyaz: 42,
    },
    Ana_Yemekler: {
        Kuru_Fasulye: 48,
        Mantı: 58,
        Glutensiz_Mantı: 78,
        Glutensiz_PK_Mantı: 86,
        Vejeteryan_Mantı: 72,
    },
    Burgerler: {
        ikidebir_Burger: {
            Büyük: 96,
            Küçük: 80,
        },
        Cheese_Burger: {
            Büyük: 106,
            Küçük: 90,
        },
        Leo_Burger: {
            Büyük: 114,
            Küçük: 98,
        },
        Beğendi_Burger: {
            Büyük: 114,
            Küçük: 98,
        },
    },
    Izgaralar: {
        ikidebir_Köfte: 86,
        Cheddarlı_Köfte: 98,
        Kaşarlı_Köfte: 92,
        Karışık_Köfte: 96,
        Beğendili_Köfte: 98,
        Yoğurtlu_Köfte: 99,
        Tavuk_Pirzola: 80,
        Beğendili_Tavuk_Pirzola: 92,
        Sucuk_Izgara: 86,
        Karışık_Izgara: 114,
    },
    Tombik_Ekmek_Arası: {
        Ekmek: {
            Köfte: {
                Küçük: 60,
                Büyük: 86,
            },
            Tavuk: {
                Küçük: 54,
                Büyük: 80,
            },
            Sucuk: {
                Küçük: 60,
                Büyük: 86,
            },
        },
        Tombik: {
            Köfte: {
                Küçük: 60,
                Büyük: 86,
            },
            Sucuk: {
                Küçük: 60,
                Büyük: 86,
            },
            Tavuk: {
                Küçük: 54,
                Büyük: 80,
            },
        },
    },
    Dürümler: {
        Köfte: 54,
        Kaşarlı_Köfte: 62,
        Cheddarlı_Köfte: 72,
        Beğendili_Köfte: 68,
        Sucuk: 54,
        Kaşarlı_Sucuk: 62,
        Cheddarlı_Sucuk: 72,
        Tavuk: 51,
        Kaşarlı_Tavuk: 58,
        Cheddarlı_Tavuk: 68,
        Beğendili_Tavuk: 64,
        Cheddar_Beğendi_Köfte: 78,
        Cheddar_Beğendi_Tavuk: 70,
        Veggie: 57,
        ikidebir_Dürüm: 68,
    },
    Tatlılar: {
        İrmik: 35,
        Ç_İrmik: 42,
        Kabak_Tatlısı: 48,
        Tahin: 5,
        Kaymak: 18,
        Sütlaç: 45,
    },
    İçecekler: {
        Cola: 18,
        Fanta: 18,
        Sprite: 18,
        FuseTea: 18,
        Cappy: 15,
        Şalgam: 14,
        Soda: 9,
        Ayran: 14,
        Su: 5,
        Çay: 8,
        Türk_Kahvesi: 20,
    },
};

// Do not edit below ///////////////////////////////////////////////////////////////////////////////

// Çorbalar
try {
    document.getElementById("mercimek").innerHTML =
        fiyat.Corbalar.Mercimek + "₺";
} catch (error) {}

try {
    document.getElementById("ayran-asi").innerHTML =
        fiyat.Corbalar.Ayran_Aşı + "₺";
} catch (error) {}

// Yan Ürünler

try {
    document.getElementById("pilav").innerHTML = fiyat.Yan_Ürünler.Pilav + "₺";
} catch (error) {}

try {
    document.getElementById("p-kizartma").innerHTML =
        fiyat.Yan_Ürünler.Patates_Kızartma + "₺";
} catch (error) {}

try {
    document.getElementById("yogurt").innerHTML =
        fiyat.Yan_Ürünler.Yoğurt + "₺";
} catch (error) {}

try {
    document.getElementById("cacik").innerHTML = fiyat.Yan_Ürünler.Cacık + "₺";
} catch (error) {}

try {
    document.getElementById("icli-kofte").innerHTML =
        fiyat.Yan_Ürünler.İçli_Köfte + "₺";
} catch (error) {}

// Zeytinyağlılar

try {
    document.getElementById("mucver").innerHTML =
        fiyat.Zeytinyağlılar.Mücver + "₺";
} catch (error) {}

try {
    document.getElementById("fasulye").innerHTML =
        fiyat.Zeytinyağlılar.Taze_Fasulye + "₺";
} catch (error) {}

try {
    document.getElementById("kopoglu").innerHTML =
        fiyat.Zeytinyağlılar.Köpoğlu + "₺";
} catch (error) {}

try {
    document.getElementById("patlican-kizartma").innerHTML =
        fiyat.Zeytinyağlılar.Patlıcan_Kızartma + "₺";
} catch (error) {}

try {
    document.getElementById("kereviz").innerHTML =
        fiyat.Zeytinyağlılar.Kereviz + "₺";
} catch (error) {}

try {
    document.getElementById("yaprak-sarma").innerHTML =
        fiyat.Zeytinyağlılar.Yaprak_Sarma + "₺";
} catch (error) {}

try {
    document.getElementById("pirasa").innerHTML =
        fiyat.Zeytinyağlılar.Pırasa + "₺";
} catch (error) {}

try {
    document.getElementById("enginar").innerHTML =
        fiyat.Zeytinyağlılar.Enginar + "₺";
} catch (error) {}

// Salatalar

try {
    document.getElementById("coban").innerHTML = fiyat.Salatalar.Çoban + "₺";
} catch (error) {}

try {
    document.getElementById("mevsim").innerHTML = fiyat.Salatalar.Mevsim + "₺";
} catch (error) {}

try {
    document.getElementById("piyaz").innerHTML = fiyat.Salatalar.Piyaz + "₺";
} catch (error) {}

// Ana Yemekler
try {
    document.getElementById("kuru-fasulye").innerHTML =
        fiyat.Ana_Yemekler.Kuru_Fasulye + "₺";
} catch (error) {}

try {
    document.getElementById("manti").innerHTML = fiyat.Ana_Yemekler.Mantı + "₺";
} catch (error) {}

try {
    document.getElementById("glutensiz-manti").innerHTML =
        fiyat.Ana_Yemekler.Glutensiz_Mantı + "₺";
} catch (error) {}

try {
    document.getElementById("glutensiz-pancarlı-manti").innerHTML =
        fiyat.Ana_Yemekler.Glutensiz_PK_Mantı + "₺";
} catch (error) {}

try {
    document.getElementById("veje-manti").innerHTML =
        fiyat.Ana_Yemekler.Vejeteryan_Mantı + "₺";
} catch (error) {}

//Burgerler

try {
    document.getElementById("2de1-burger-s").innerHTML =
        fiyat.Burgerler.ikidebir_Burger.Küçük + "₺";
} catch (error) {}

try {
    document.getElementById("2de1-burger-l").innerHTML =
        fiyat.Burgerler.ikidebir_Burger.Büyük + "₺";
} catch (error) {}

try {
    document.getElementById("cheese-burger-s").innerHTML =
        fiyat.Burgerler.Cheese_Burger.Küçük + "₺";
} catch (error) {}

try {
    document.getElementById("cheese-burger-l").innerHTML =
        fiyat.Burgerler.Cheese_Burger.Büyük + "₺";
} catch (error) {}

try {
    document.getElementById("leo-burger-s").innerHTML =
        fiyat.Burgerler.Leo_Burger.Küçük + "₺";
} catch (error) {}

try {
    document.getElementById("leo-burger-l").innerHTML =
        fiyat.Burgerler.Leo_Burger.Büyük + "₺";
} catch (error) {}

try {
    document.getElementById("begendi-burger-s").innerHTML =
        fiyat.Burgerler.Beğendi_Burger.Küçük + "₺";
} catch (error) {}

try {
    document.getElementById("begendi-burger-l").innerHTML =
        fiyat.Burgerler.Beğendi_Burger.Büyük + "₺";
} catch (error) {}

// Izgaralar

try {
    document.getElementById("2de1-kofte").innerHTML =
        fiyat.Izgaralar.ikidebir_Köfte + "₺";
} catch (error) {}

try {
    document.getElementById("cheddarli-kofte").innerHTML =
        fiyat.Izgaralar.Cheddarlı_Köfte + "₺";
} catch (error) {}

try {
    document.getElementById("kasarli-kofte").innerHTML =
        fiyat.Izgaralar.Kaşarlı_Köfte + "₺";
} catch (error) {}

try {
    document.getElementById("karisik-kofte").innerHTML =
        fiyat.Izgaralar.Karışık_Köfte + "₺";
} catch (error) {}

try {
    document.getElementById("begendili-kofte").innerHTML =
        fiyat.Izgaralar.Beğendili_Köfte + "₺";
} catch (error) {}

try {
    document.getElementById("yogurtlu-kofte").innerHTML =
        fiyat.Izgaralar.Yoğurtlu_Köfte + "₺";
} catch (error) {}

try {
    document.getElementById("tavuk-pirzola").innerHTML =
        fiyat.Izgaralar.Tavuk_Pirzola + "₺";
} catch (error) {}

try {
    document.getElementById("begendili-tavuk-pirzola").innerHTML =
        fiyat.Izgaralar.Beğendili_Tavuk_Pirzola + "₺";
} catch (error) {}

try {
    document.getElementById("sucuk-izgara").innerHTML =
        fiyat.Izgaralar.Sucuk_Izgara + "₺";
} catch (error) {}

try {
    document.getElementById("karisik-izgara").innerHTML =
        fiyat.Izgaralar.Karışık_Izgara + "₺";
} catch (error) {}

// Tombik & Yarım Ekmek Arası

try {
    document.getElementById("ekmek-arasi-kofte-s").innerHTML =
        fiyat.Tombik_Ekmek_Arası.Ekmek.Köfte.Küçük + "₺";
} catch (error) {}

try {
    document.getElementById("ekmek-arasi-kofte-l").innerHTML =
        fiyat.Tombik_Ekmek_Arası.Ekmek.Köfte.Büyük + "₺";
} catch (error) {}

try {
    document.getElementById("ekmek-arasi-tavuk-s").innerHTML =
        fiyat.Tombik_Ekmek_Arası.Ekmek.Tavuk.Küçük + "₺";
} catch (error) {}

try {
    document.getElementById("ekmek-arasi-tavuk-l").innerHTML =
        fiyat.Tombik_Ekmek_Arası.Ekmek.Tavuk.Büyük + "₺";
} catch (error) {}

try {
    document.getElementById("ekmek-arasi-sucuk-s").innerHTML =
        fiyat.Tombik_Ekmek_Arası.Ekmek.Sucuk.Küçük + "₺";
} catch (error) {}

try {
    document.getElementById("ekmek-arasi-sucuk-l").innerHTML =
        fiyat.Tombik_Ekmek_Arası.Ekmek.Sucuk.Büyük + "₺";
} catch (error) {}

try {
    document.getElementById("tombik-arasi-kofte-s").innerHTML =
        fiyat.Tombik_Ekmek_Arası.Tombik.Köfte.Küçük + "₺";
} catch (error) {}

try {
    document.getElementById("tombik-arasi-kofte-l").innerHTML =
        fiyat.Tombik_Ekmek_Arası.Tombik.Köfte.Büyük + "₺";
} catch (error) {}

try {
    document.getElementById("tombik-arasi-sucuk-s").innerHTML =
        fiyat.Tombik_Ekmek_Arası.Tombik.Sucuk.Küçük + "₺";
} catch (error) {}

try {
    document.getElementById("tombik-arasi-sucuk-l").innerHTML =
        fiyat.Tombik_Ekmek_Arası.Tombik.Sucuk.Büyük + "₺";
} catch (error) {}

try {
    document.getElementById("tombik-arasi-tavuk-s").innerHTML =
        fiyat.Tombik_Ekmek_Arası.Tombik.Tavuk.Küçük + "₺";
} catch (error) {}

try {
    document.getElementById("tombik-arasi-tavuk-l").innerHTML =
        fiyat.Tombik_Ekmek_Arası.Tombik.Tavuk.Büyük + "₺";
} catch (error) {}

// Dürümler

try {
    document.getElementById("kofte-durum").innerHTML =
        fiyat.Dürümler.Köfte + "₺";
} catch (error) {}

try {
    document.getElementById("kasarli-kofte-durum").innerHTML =
        fiyat.Dürümler.Kaşarlı_Köfte + "₺";
} catch (error) {}

try {
    document.getElementById("cheddarli-kofte-durum").innerHTML =
        fiyat.Dürümler.Cheddarlı_Köfte + "₺";
} catch (error) {}

try {
    document.getElementById("begendili-kofte-durum").innerHTML =
        fiyat.Dürümler.Beğendili_Köfte + "₺";
} catch (error) {}

try {
    document.getElementById("sucuk-durum").innerHTML =
        fiyat.Dürümler.Sucuk + "₺";
} catch (error) {}

try {
    document.getElementById("kasarli-sucuk-durum").innerHTML =
        fiyat.Dürümler.Kaşarlı_Sucuk + "₺";
} catch (error) {}

try {
    document.getElementById("cheddarli-sucuk-durum").innerHTML =
        fiyat.Dürümler.Cheddarlı_Sucuk + "₺";
} catch (error) {}

try {
    document.getElementById("tavuk-durum").innerHTML =
        fiyat.Dürümler.Tavuk + "₺";
} catch (error) {}

try {
    document.getElementById("kasarli-tavuk-durum").innerHTML =
        fiyat.Dürümler.Kaşarlı_Tavuk + "₺";
} catch (error) {}

try {
    document.getElementById("cheddarli-tavuk-durum").innerHTML =
        fiyat.Dürümler.Cheddarlı_Tavuk + "₺";
} catch (error) {}

try {
    document.getElementById("begendili-tavuk-durum").innerHTML =
        fiyat.Dürümler.Beğendili_Tavuk + "₺";
} catch (error) {}

try {
    document.getElementById("cheddar-begendi-kofte").innerHTML =
        fiyat.Dürümler.Cheddar_Beğendi_Köfte + "₺";
} catch (error) {}

try {
    document.getElementById("cheddar-begendi-tavuk").innerHTML =
        fiyat.Dürümler.Cheddar_Beğendi_Tavuk + "₺";
} catch (error) {}

try {
    document.getElementById("veggie-durum").innerHTML =
        fiyat.Dürümler.Veggie + "₺";
} catch (error) {}

try {
    document.getElementById("2de1-kofte-durum").innerHTML =
        fiyat.Dürümler.ikidebir_Dürüm + "₺";
} catch (error) {}

// Tatlılar

try {
    document.getElementById("irmik-helvasi").innerHTML =
        fiyat.Tatlılar.İrmik + "₺";
} catch (error) {}

try {
    document.getElementById("c-irmik-helvasi").innerHTML =
        fiyat.Tatlılar.Ç_İrmik + "₺";
} catch (error) {}

try {
    document.getElementById("c-kabak").innerHTML =
        fiyat.Tatlılar.Kabak_Tatlısı + "₺";
} catch (error) {}

try {
    document.getElementById("tahin").innerHTML = fiyat.Tatlılar.Tahin + "₺";
} catch (error) {}

try {
    document.getElementById("kaymak").innerHTML = fiyat.Tatlılar.Kaymak + "₺";
} catch (error) {}

try {
    document.getElementById("sutlac").innerHTML = fiyat.Tatlılar.Sütlaç + "₺";
} catch (error) {}

// İçecekler

try {
    document.getElementById("cola").innerHTML = fiyat.İçecekler.Cola + "₺";
} catch (error) {}

try {
    document.getElementById("fanta").innerHTML = fiyat.İçecekler.Fanta + "₺";
} catch (error) {}

try {
    document.getElementById("sprite").innerHTML = fiyat.İçecekler.Sprite + "₺";
} catch (error) {}

try {
    document.getElementById("fuse-tea").innerHTML =
        fiyat.İçecekler.FuseTea + "₺";
} catch (error) {}

try {
    document.getElementById("cappy").innerHTML = fiyat.İçecekler.Cappy + "₺";
} catch (error) {}

try {
    document.getElementById("salgam").innerHTML = fiyat.İçecekler.Şalgam + "₺";
} catch (error) {}

try {
    document.getElementById("soda").innerHTML = fiyat.İçecekler.Soda + "₺";
} catch (error) {}

try {
    document.getElementById("ayran").innerHTML = fiyat.İçecekler.Ayran + "₺";
} catch (error) {}

try {
    document.getElementById("su").innerHTML = fiyat.İçecekler.Su + "₺";
} catch (error) {}

try {
    document.getElementById("cay").innerHTML = fiyat.İçecekler.Çay + "₺";
} catch (error) {}

try {
    document.getElementById("kahve").innerHTML =
        fiyat.İçecekler.Türk_Kahvesi + "₺";
} catch (error) {}
