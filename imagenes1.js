/* =========================================================
   BOTICA EMANUEL FARMA
   SISTEMA MEJORADO DE IMÁGENES POR ID
   ========================================================= */

   "use strict";


   /* =========================================================
      BASE DE DATOS DE IMÁGENES
   ========================================================= */
   
   /*
      Cada ID puede tener:
   
      "URL"
   
      o varias alternativas:
   
      [
          "URL PRINCIPAL",
          "URL DE RESPALDO"
      ]
   
      Así NO perdemos enlaces.
   */
   
   window.imagenesProductosPorId = {
   
       1: "https://www.hogarysalud.com.pe/wp-content/uploads/2024/10/81621-c1.webp",
   
       2: "https://storage.googleapis.com/upload-tiendada-prod/public/file-storage/im/product/b2a6fc05-798c-452b-80e8-ce668542df3a.0lv081-1696271589609",
   
       3: "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_ie/ireland-products/panadol-tablets/MGK5158-GSK-Panadol-Tablets-455x455.png?auto=format",
   
       5: "https://res.cloudinary.com/riqra/image/upload/v1761235322/sellers/salud-farma/products/wqrjlnumoo8cdubutdze.jpg",
   
       6: "https://www.redoxon.com.py/sites/g/files/vrxlpx48216/files/2024-01/Tubo-Redoxon-1%20%281%29.png",
   
       7: "https://media.falabella.com/tottusPE/43526460_1/w=800,h=800,fit=pad",
   
       8: "https://masonnatural.pe/wp-content/uploads/2020/04/Calcium-Citrate-Front-2.png",
   
       9: "https://i5.walmartimages.com/seo/Spring-Valley-Brain-Omega-3-from-Algal-Oil-Gummy-60-Count_70177a29-e0be-43aa-a5c3-746fa590a78f.16c8e0e845f74a456eafbfe7008315f4.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
   
       11: "https://unomasuno.pe/wp-content/uploads/2020/07/pro-961504-510x510.png",
   
       12: "https://promart.vteximg.com.br/arquivos/ids/8714692-1000-1000/imageUrl_1.jpg?v=638781359509800000",
   
       13: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/037390L.jpg",
   
       14: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/424443L.jpg",
   
       15: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/427419L.jpg",
   
       16: "https://media.falabella.com/falabellaPE/125249323_01/w=1500,h=1500,fit=cover",
   
       17: "https://promart.vteximg.com.br/arquivos/ids/651306-1000-1000/image-43f3a7fed40249608ff523624f578b61.jpg?v=637455776594770000",
   
       18: "https://promart.vteximg.com.br/arquivos/ids/1445810/image-0e13a1151f6145179950280e6f4e7787.jpg?v=637623033315630000",
   
       19: "https://www.boticasperu.pe/dw/image/v2/BLZT_PRD/on/demandware.static/-/Sites-boticasperu-master-catalog/default/dw3ad61c70/images/31068.jpg?sw=400&sh=400",
   
       21: "https://assets.bo-management.cord.pe/public/images/afed073e-eddc-4b7f-945a-5c0d4efa2fa5-20038923_0.jpeg",
   
       22: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRganAyIRPkBpNIFWyBZYRhQYrQ3b9hO9I1Ofp-ZscGDftr6LywTxpRM-U1&s=10",
   
       23: "https://hiraoka.com.pe/media/catalog/product/1/3/133837_hem-7144t1_1.jpg?quality=85&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560",
   
       24: "https://http2.mlstatic.com/D_NQ_NP_615836-MLU71098524876_082023-O.webp",
   
       26: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-qL4obzonoYfoXM9uNQQKV94TCANzz-7aFIlIxpT91UnImaKTBSGF8x0&s=10",
   
       27: "https://oechsle.vteximg.com.br/arquivos/ids/6947193-1000-1000/image-fe655f3760c24ca68116047acdad5d4a.jpg?v=637789091421270000",
   
       28: "https://res.cloudinary.com/riqra/image/upload/w_656,h_656,c_limit,q_auto,f_auto/v1640883559/sellers/1/pcxpbuu00zm69mgc75m7.png",
   
       29: "https://aapharmacy.com.my/cdn/shop/files/Slide3_7d688fba-d4bf-4bb4-9ea0-bc246b4c4364.jpg?v=1775610859&width=1920",
   
       31: "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol-reskin/es_PE/2025-11/PANADOL-RT-455.png?auto=format",
   
       32: "https://www.naturalcenter.pe/wp-content/uploads/2023/03/vitamin_c_1000mg.png",
   
       33: "https://http2.mlstatic.com/D_NQ_NP_2X_757420-MLA107773405255_022026-F.webp",
   
       36: "https://i0.wp.com/fertisem.pe/wp-content/uploads/2026/03/inpro-calcio-1.webp?resize=300%2C300&ssl=1",
   
       38: "https://farmaciauniversalpe.vtexassets.com/arquivos/ids/157811/17422-Alcohol-Medicinal-70%C2%B0_1000ml-farmacia-universal.jpg?v=638428720495900000",
   
       40: "https://www.acofarma.com/catalogo/wp-content/uploads/sites/2/2019/07/1845559_venda_elastica_adhesiva-1.jpg",
   
       41: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTB7D7XFEltlLfEYfEDwr58-LT07rj1D4u8KWW24Wq31Fdg6Z1nOaTKAgwKqj67ToVoMpAiyAS_k5GooEMnzcSpjcxftjfmlcgfF1eYMVLjsFjEjdJ8UkVdpx-_LBI6auSCv6S26bvX&usqp=CAc",
   
       45: "https://media.falabella.com/tottusPE/42857865_1/w=1500,h=1500,fit=cover",
   
       46: "https://plazavea.vteximg.com.br/arquivos/ids/29522389-418-418/20146113.jpg",
   
       48: "https://wongfood.vtexassets.com/arquivos/ids/723382/Crema-Hidratante-Johnson-s-Baby-Original-400ml-2-39768.jpg?v=638611762907300000",
   
       51: "https://daryza.com/wp-content/uploads/2022/12/30899.jpg",
   
       52: "https://www.farmaciaslider.pe/my-assets/image/product/ae300f523d39a8977794dee87b4fdbb6.png",
   
       54: "https://cdn.batitienda.com/baticloud/images/product_picture_4514a7cc703545179f70e1d9bc4c2cf6_637873249307272149_0_m.png",
   
       57: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/037713M.jpg",
   
       58: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/mav/mav05171/y/62.jpg",
   
       59: "https://aapharmacy.com.my/cdn/shop/files/Slide3_7d688fba-d4bf-4bb4-9ea0-bc246b4c4364.jpg?v=1775610859&width=1920",
   
       63: "https://www.hogarysalud.com.pe/wp-content/uploads/2024/10/00211538.jpg",
   
       64: "https://www.homecare.com.pe/wp-content/uploads/2024/10/Alcohol-Medicinal-70%C2%B0-120ml.jpg",
   
       68: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036373L.jpg",
   
       69: "https://medmedic.pe/wp-content/uploads/2022/11/Oximetro-de-Pulso-Saturometro-Digital-Pediatrico-y-Ninos-Yonker-Amarillo-1.jpg.webp",
   
       71: "https://wongfood.vtexassets.com/arquivos/ids/708147/Shampoo-Head-Shoulders-Anti-Comez-n-1L-1-351671552.jpg?v=638514022703530000",
   
       72: "https://dojiw2m9tvv09.cloudfront.net/53648/product/jabon-liquido-antibacterial-aval-frutos-rojos-frasco-c-dosificador-400-ml-3684400031694.jpg",
   
       73: "https://assets.unileversolutions.com/v1/74042555.png?im=AspectCrop=(540,540);Resize=(540,540)",
   
       74: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/023735L.jpg",
   
       76: "https://www.hogarysalud.com.pe/wp-content/uploads/2025/03/00213263.webp",
   
       79: "https://farmaciauniversalpe.vtexassets.com/arquivos/ids/157932-800-auto?v=638428792185830000&width=800&height=auto&aspect=true",
   
       80: "https://openmed-prod-public.s3.us-east-2.amazonaws.com/products/ibuprofeno-100mg-5ml-x60-ml.png",
   
       81: "https://shop.doctoroncall.com/wp-content/uploads/2025/03/panadolchildren60ml.jpg",
   
       82: "https://farmaciauniversalpe.vtexassets.com/arquivos/ids/159754/22598_1.jpg?v=638591217736430000",
   
       83: "https://farmaciauniversalpe.vtexassets.com/arquivos/ids/156251/00887_1.jpg?v=638417256329530000",
   
       86: "https://laboratoriosifa.com/wp-content/uploads/Gluconato-de-Calcio-10-600x600.jpg",
   
       88: "https://www.sunvitlife.com/wp-content/uploads/2021/10/SV-MAGNESIUM-500-MG.png",
   
       89: "https://media.falabella.com/tottusPE/41150945_1/w=1200,h=1200,fit=pad",
   
       91: "https://multimedia.3m.com/mws/media/1572898J/nexcare-sterile-gauze-colombia-pack.jpg?width=506",
   
       92: "https://www.boticasperu.pe/on/demandware.static/-/Sites-boticasperu-master-catalog/default/dw6f0b97ee/images/09196.png",
   
       93: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/427421L.jpg",
   
       94: "https://www.farmaciaslider.pe/my-assets/image/product/d14bdc11d95a642787181e79bdd6195f.png",
   
       95: "https://media.falabella.com/tottusPE/43337010_1/w=1200,h=1200,fit=pad",
   
       96: "https://media.falabella.com/tottusPE/42314355_2/w=1500,h=1500,fit=cover",
   
       97: "https://vegaperu.vtexassets.com/arquivos/ids/168682/709096.jpg?v=638798146766470000",
   
       98: "https://media.falabella.com.pe/tottusPE/42983495_01/width=170,height=170,quality=70,format=webp,fit=pad",
   
       99: "https://corporacionliderperu.com/48024-large_default/old-spice-desodorante-spray-x-150-ml-fresh.jpg",
   
       101: "https://media.falabella.com/tottusPE/42588391_1/w=1200,h=1200,fit=pad",
   
       102: "https://vegaperu.vtexassets.com/arquivos/ids/167747/331146.jpg?v=638675463785570000",
   
       103: "https://favisago.com/wp-content/uploads/2025/08/sku-4974.webp",
   
       105: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/073223L.jpg",
   
       106: "https://farmaciauniversalpe.vtexassets.com/arquivos/ids/163797-800-auto?v=638948627425930000&width=800&height=auto&aspect=true",
   
       123: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBMEA9Mz2B7q1oD7B8X3BxrSNRJg-Yc2MU4XxjHoHphUlDmuc0Rr8Ly5q&s=10",
   
       143: "https://fyfproductos.com.pe/wp-content/uploads/2025/03/GASA-FRACCIONADA-ESTERIL-10-CM-x-10-CM-x-16-PLIEGUES.jpg.webp",
   
       155: "https://www.martellsac.com.pe/wp-content/uploads/2023/04/PLT0035.webp",
   
       161: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/016797M.jpg",
   
       1004: "https://medias.watsons.com.sg/publishing/WTCSG-88726-side-thumbnail.jpg?version=1758130816",
   
       1012: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/026340M.jpg",
   
       3001: [
           "https://oechsle.vteximg.com.br/arquivos/ids/7137091-1000-1000/image-acc57f5cbb2a4efaa4992e59871e20ab.jpg?v=637799646938430000",
           "https://www.mercadonegro.pe/wp-content/uploads/2017/08/20819440_1649590315064570_5530750559586111578_o-1024x683.jpg"
       ],
   
       3002: "https://oechsle.vteximg.com.br/arquivos/ids/18406033-1000-1000/image-0643e2ac8520492cb3dd8107432a2e65.jpg?v=638570413579730000",
   
       3004: "https://oechsle.vteximg.com.br/arquivos/ids/21716426-1000-1000/NINET_DUMMIE_PANAL_NARANJA_L_60-UND_CMYK_FLATpsd%20-1-.png?v=638884523820630000",
   
       3006: "https://oechsle.vteximg.com.br/arquivos/ids/18406042-1000-1000/image-6fdf473c7dd94061b0e22921bf93a387.jpg?v=638570413692870000",
   
       3007: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToGPmQLhHpV3mdhgj2cW8Y_kLFjbD3sj2QAwO5Qr2RyeYXM8gGsf9HVDeZ&s=10",
   
       3011: "https://oechsle.vteximg.com.br/arquivos/ids/7816182-1000-1000/image-83c5356772f44a45a83787ae906b3363.jpg?v=637837517080800000",
   
       3040: "https://media.falabella.com/tottusPE/43330181_2/w=1500,h=1500,fit=cover",
   
       3041: "https://media.falabella.com/tottusPE/42504394_2/w=1500,h=1500,fit=cover",
   
       3042: "https://vegaperu.vtexassets.com/arquivos/ids/171786/110316.jpg?v=639144838789430000",
   
       3043: "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/3858/PMP20000501513/full_image-1.jpeg",
   
       3044: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnXVaVKCjzp8d8OlG2aw1V1exWqTE9DL6Nrf1PE-uUiQa_IwmjUIuCPZkL&s=10",
   
       3045: "https://media.falabella.com/tottusPE/42504398_1/w=800,h=800,fit=pad",
   
       3046: "https://clubsoftyspe.vtexassets.com/arquivos/ids/161817-800-auto?v=638869039558400000&width=800&height=auto&aspect=true",
   
       3047: "https://oechsle.vteximg.com.br/arquivos/ids/25541629-1000-1000/imageUrl_1.jpg?v=639164955572470000",
   
       3048: "https://oechsle.vteximg.com.br/arquivos/ids/25541624-1000-1000/imageUrl_1.jpg?v=639164955541430000",
   
       3049: "https://www.hogarysalud.com.pe/wp-content/uploads/2024/10/00213306.jpg",
   
       3050: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_TyM6ZACmIn_1AVur4kGrxsRw-M1DCv8uOx5c7uzsQ&s=10",
   
       3051: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwLpWDWlQk4DJx5VOMBDtRm3opu9EYmgmaWDtHd-K4Hg&s",
   
       3052: "https://www.babysec.com.pe/assets/uploads/product/image/480ab-babysec_recien_nacido.png",
   
       3053: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7P_pLZgh09OZVKeHYSvqIhtJTEdHFpCqFUuJtaqEF56euXaZIf-_cFsH1&s=10",
   
       3054: "https://media.falabella.com/tottusPE/41881742_1/w=800,h=800,fit=pad",
   
       3055: "https://media.falabella.com/tottusPE/41881743_1/public",
   
       3056: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbU3n9oQgUVS6lfkPuF68FDGTyUeH460AkRv45ZsKA2A&s",
   
       3057: "https://media.falabella.com/tottusPE/41881745_1/w=800,h=800,fit=pad",
   
       3058: "https://http2.mlstatic.com/D_NQ_NP_663143-MLA90224606172_082025-O.webp",
   
       3059: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vAI4SkGnw072JZBFOyS_ujlL5WYSqLzSPJG_6cG2pGeYRjW97i0MeF9U&s=10",
   
       3060: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSMxJLK8PRhXnEUo2pGhhkmO9FIrFEHacumJy30n04fw&s",
   
       3061: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUPgef5UuInUhvAtbrlBargrLTHGs0UnBD-WS9KCGBg&s=10",
   
       3062: "https://oechsle.vteximg.com.br/arquivos/ids/25817704-1000-1000/20110687.jpg?v=639177931583070000",
   
       3063: "https://oechsle.vteximg.com.br/arquivos/ids/25819023-1000-1000/20253983.jpg?v=639177937146900000",
   
       3064: "https://corporacionliderperu.com/51415-large_default/huggies-panales-natural-care-unisex-x-42-un-talla-xg.jpg",
   
       3095: "https://corporacionliderperu.com/53471-large_default/suave-p-h-verde-cuidado-completo-x-4-un.jpg",
   
       3099: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkJMX13G6wxZri6UOEYSgMq6bqfdHrYs9SzGJ8Ak5IzQ&s=10",
   
       3111: "https://plazavea.vteximg.com.br/arquivos/ids/31352484-450-450/1938419002.jpg?v=638835378082800000",
   
       3130: "https://disquinsa.com/wp-content/uploads/40290_01.webp",
   
       3131: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk2Or1JLhbSnkpak6A5aNQh27rGr3yb1X8WbxGLxsgIg&s=10",
   
       3132: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/084554L.jpgc",
   
       3133: "https://oechsle.vteximg.com.br/arquivos/ids/10189940-1000-1000/image-95f382a65c284a5fa1e5107f590cba45.jpg?v=637951543212670000",
   
       3134: "https://walmartni.vtexassets.com/arquivos/ids/654000/12356_01.jpg?v=638846640076670000",
   
       3135: "https://farmaciauniversalpe.vtexassets.com/arquivos/ids/161975-800-auto?v=638757669314670000&width=800&height=auto&aspect=true",
   
       3138: "https://media.falabella.com/tottusPE/41881743_1/public",
   
       3139: "https://freshmart.pe/images/productos/99973.png",
   
       3146: "https://farmaciauniversalpe.vtexassets.com/arquivos/ids/161975-800-auto?v=638757669314670000&width=800&height=auto&aspect=true"
   
       
   };
   
   
   /* =========================================================
      COMPATIBILIDAD CON TU CÓDIGO ANTERIOR
   ========================================================= */
   
   /*
      Tu página puede seguir usando:
   
      window.imagenesPorId[id]
   
      como antes.
   */
   
   window.imagenesPorId = {};
   
   
   Object.entries(
       window.imagenesProductosPorId
   ).forEach(([id, valor]) => {
   
       if (Array.isArray(valor)) {
   
           window.imagenesPorId[id] =
               valor[0];
   
       } else {
   
           window.imagenesPorId[id] =
               valor;
       }
   
   });
   
   
   /* =========================================================
      OBTENER TODAS LAS IMÁGENES DE UN PRODUCTO
   ========================================================= */
   
   function obtenerImagenesProducto(id) {
   
       const valor =
           window.imagenesProductosPorId[
               Number(id)
           ];
   
   
       if (!valor) {
   
           return [];
       }
   
   
       if (Array.isArray(valor)) {
   
           return valor.filter(Boolean);
       }
   
   
       return [valor];
   
   }
   
   
   /* =========================================================
      OBTENER IMAGEN PRINCIPAL
   ========================================================= */
   
   function obtenerImagenProducto(id) {
   
       const imagenes =
           obtenerImagenesProducto(id);
   
   
       if (
           imagenes.length === 0
       ) {
   
           return null;
       }
   
   
       return imagenes[0];
   
   }
   
   
   /* =========================================================
      APLICAR IMÁGENES AL INVENTARIO
   ========================================================= */
   
   function aplicarImagenesAlInventario() {
   
       if (
           typeof inventario ===
           "undefined"
       ) {
   
           console.warn(
               "⚠️ El inventario todavía no existe."
           );
   
           return;
       }
   
   
       let aplicadas = 0;
   
   
       inventario.forEach(producto => {
   
           const imagen =
               obtenerImagenProducto(
                   producto.id
               );
   
   
           if (imagen) {
   
               producto.imagen =
                   imagen;
   
               aplicadas++;
           }
   
       });
   
   
       console.log(
           `✅ ${aplicadas} imágenes personalizadas aplicadas.`
       );
   
   }
   
   
   /* =========================================================
      SISTEMA DE RESPALDO SI UNA URL FALLA
   ========================================================= */
   
   /*
      Uso opcional:
   
      prepararImagenConFallback(
          elementoImg,
          producto.id
      );
   
      Si hay más de un enlace para ese ID
      probará automáticamente el siguiente.
   */
   
   function prepararImagenConFallback(
       elementoImg,
       idProducto
   ) {
   
       if (!elementoImg) {
   
           return;
       }
   
   
       const imagenes =
           obtenerImagenesProducto(
               idProducto
           );
   
   
       if (
           imagenes.length === 0
       ) {
   
           return;
       }
   
   
       let posicion = 0;
   
   
       elementoImg.src =
           imagenes[posicion];
   
   
       elementoImg.onerror =
           function () {
   
               posicion++;
   
   
               if (
                   posicion <
                   imagenes.length
               ) {
   
                   this.src =
                       imagenes[posicion];
   
               } else {
   
                   /*
                      Ya probamos todos los enlaces.
                      Permitimos que script.js coloque
                      su imagen automática.
                   */
   
                   this.onerror =
                       null;
   
               }
   
           };
   
   }
   
   
   /* =========================================================
      AGREGAR O CAMBIAR UNA IMAGEN FÁCILMENTE
   ========================================================= */
   
   function agregarImagenProducto(
       id,
       url
   ) {
   
       const numeroId =
           Number(id);
   
   
       if (
           !numeroId ||
           !url
       ) {
   
           console.error(
               "ID o URL inválidos."
           );
   
           return;
       }
   
   
       window.imagenesProductosPorId[
           numeroId
       ] = url;
   
   
       window.imagenesPorId[
           numeroId
       ] = url;
   
   
       const producto =
           typeof inventario !==
           "undefined"
           ?
           inventario.find(
               p =>
                   Number(p.id) ===
                   numeroId
           )
           :
           null;
   
   
       if (producto) {
   
           producto.imagen =
               url;
       }
   
   
       console.log(
           `✅ Imagen agregada al producto ${numeroId}`
       );
   
   }
   
   
   /* =========================================================
      AGREGAR IMAGEN DE RESPALDO
   ========================================================= */
   
   function agregarImagenRespaldo(
       id,
       url
   ) {
   
       const numeroId =
           Number(id);
   
   
       if (
           !numeroId ||
           !url
       ) {
   
           return;
       }
   
   
       const actuales =
           obtenerImagenesProducto(
               numeroId
           );
   
   
       if (
           !actuales.includes(url)
       ) {
   
           actuales.push(url);
       }
   
   
       window.imagenesProductosPorId[
           numeroId
       ] = actuales;
   
   
       if (
           actuales.length
       ) {
   
           window.imagenesPorId[
               numeroId
           ] = actuales[0];
       }
   
   }
   
   
   /* =========================================================
      EJECUTAR
   ========================================================= */
   
   aplicarImagenesAlInventario();
   
   
   console.log(
       "✅ Sistema mejorado de imágenes cargado."
   );

