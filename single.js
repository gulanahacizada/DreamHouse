let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "block";
  
}
let tabs=document.querySelectorAll(".tabs button")
let info1=document.querySelector(".info1")
let info2=document.querySelector(".info2")
let info3=document.querySelector(".info3")
let info4=document.querySelector(".info4")

tabs.forEach((tab)=>{
    tab.addEventListener("click",()=>{
        if(tab.innerText=="What’s Included?"){
            info1.style.display="block"
            info2.style.display="none"
            info3.style.display="none"
            info4.style.display="none"
        } else if(tab.innerText=="Delivery"){
            info1.style.display="none"
            info2.style.display="block"
            info3.style.display="none"
            info4.style.display="none"
        } else if(tab.innerText=="Dimensions"){
            info1.style.display="none"
            info2.style.display="none"
            info3.style.display="block"
            info4.style.display="none"
        } else if(tab.innerText=="Finance"){
            info1.style.display="none"
            info2.style.display="none"
            info3.style.display="none"
            info4.style.display="block"
        }   
    })
})
let one=document.querySelector(".one")
let two=document.querySelector(".two")
let three=document.querySelector(".three")
let four=document.querySelector(".four")
let five=document.querySelector(".five")
let starpoint=document.createElement("p")

one.addEventListener("click", () => {
    if ((one.classList.contains("rating-select")) == true) {
    two.classList.remove("rating-select");
    three.classList.remove("rating-select");
    four.classList.remove("rating-select");
    five.classList.remove("rating-select");}
    else{
        one.classList.add("rating-select");
        localStorage.setItem("star","★")
    
    }
});

two.addEventListener("click", () => {
    if ((two.classList.contains("rating-select")) == true) {
    three.classList.remove("rating-select");
    four.classList.remove("rating-select");
    five.classList.remove("rating-select");}
    else{
        two.classList.add("rating-select");
        one.classList.add("rating-select");
        localStorage.setItem("star","★★")
    }
});
three.addEventListener("click", () => {
    if ((three.classList.contains("rating-select")) == true) {
    three.classList.add("rating-select");
    four.classList.remove("rating-select");
    five.classList.remove("rating-select");
    }else{
        three.classList.add("rating-select");
        two.classList.add("rating-select");
        one.classList.add("rating-select");
        localStorage.setItem("star","★★★")
    }
});
four.addEventListener("click", () => {
    if ((four.classList.contains("rating-select")) == true) {
    five.classList.remove("rating-select");}
    else{
        four.classList.add("rating-select");
        three.classList.add("rating-select");
        two.classList.add("rating-select");
        one.classList.add("rating-select");
        localStorage.setItem("star","★★★★")
    }
});
five.addEventListener("click", () => {
    five.classList.add("rating-select");
    four.classList.add("rating-select");
        three.classList.add("rating-select");
        two.classList.add("rating-select");
        one.classList.add("rating-select");
        localStorage.setItem("star","★★★★★")
        
});



let write=document.querySelector(".write")
let send=document.querySelector(".send")
let need=document.querySelector(".need")
let yes=document.querySelector(".yes")
let reviewStar=document.querySelector(".review-star")
let add=document.querySelector(".add")
write.addEventListener("click",()=>{
    
    write.style.display="none"
    need.style.display="block"
    yes.style.display="block"
}  
)
yes.addEventListener("click",()=>{
    need.style.display="none"
    yes.style.display="none"
    reviewStar.style.display="block"
    add.style.display="block"
    send.style.display="block"
    one.classList.remove("rating-select");
    two.classList.remove("rating-select");
    three.classList.remove("rating-select");
    four.classList.remove("rating-select");
    five.classList.remove("rating-select");
    add.value=""
})
let reviews=document.querySelector(".reviews")
send.addEventListener("click",()=>{
    write.style.display="block"
    send.style.display="none"
    reviewStar.style.display="none"
    add.style.display="none"
    let div=document.createElement("div")
    let span=document.createElement("span")
    let p=document.createElement("p")
    starpoint.innerText=localStorage.getItem("star")
    starpoint.style.color="gold"
    starpoint.style.fontSize="25px"
    starpoint.style.marginLeft="15px"
    p.innerText=add.value
    span.classList.add("user");
    let user=localStorage.getItem("user")
    span.append(user)
    span.append(starpoint)
    div.append(span)
    div.append(p)
    reviews.prepend(div)
})

let img1=document.querySelector(".first")
let img2=document.querySelector(".second")
let img3=document.querySelector(".third")
let h1=document.querySelector("h1")
let rating=document.querySelector(".rating")
let price=document.querySelector(".price")
let preprice=document.querySelector(".preprice")
let red=document.querySelector(".red")
let star=document.querySelector(".star")
let mark=document.createElement("div")
mark.innerText=localStorage.getItem("name")
if(mark.innerHTML=="Nelson corner sofa"){
    h1.innerText="Nelson corner sofa"
    rating.innerText="Rating:5";
    price.innerText="$1050"
    preprice.innerText="$1500"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★★"
    img1.src="./image/img1.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Sofa%20set/Nelson/embawood_yumsaq_mebel_desti_kunc_divani_acilan_qehveyi_paxlava_taxta_ayaqli_kreslo_yataq_yastiq_8-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Sofa%20set/Nelson/embawood_yumsaq_mebel_desti_kunc_divani_acilan_qehveyi_paxlava_taxta_ayaqli_kreslo_yataq_yastiq_5-900x600.jpg"
}else if(mark.innerHTML=="Sofa set Rio"){
    h1.innerText="Sofa set Rio"
    rating.innerText="Rating:5"
    price.innerText="$1610"
    preprice.innerText="$2300"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★★"
    img1.src="./image/img2.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Yum%C5%9Faq%20mebel/Rio%20/IMG_2323-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Yum%C5%9Faq%20mebel/Rio%20/IMG_2322-900x600.jpg"
}else if(mark.innerHTML=="Sofa set Torino"){
    h1.innerText="Sofa set Torino"
    rating.innerText="Rating:4"
    price.innerText="$1120"
    preprice.innerText="$1600"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★"
    img1.src="./image/img3.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Sofa%20set/Torino/torino_divan_desti_mebeli_acilan_3_uc_yerli_4-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Sofa%20set/Torino/torino_divan_desti_mebeli_acilan_3_uc_yerli_1-900x600.jpg"
}else if(mark.innerHTML=="Sofa Set Rozaline"){
    h1.innerText="Sofa Set Rozaline"
    rating.innerText="Rating:4"
    price.innerText="$1260"
    preprice.innerText="$1800"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★"
    img1.src="./image/img4.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Sofa%20set/Rosaline/embawood_acilan_yataq_divan_yumsaq_mebel_destleri_desti_mebel_divan_kreslo_5-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Sofa%20set/Rosaline/embawood_acilan_yataq_divan_yumsaq_mebel_destleri_desti_mebel_divan_kreslo_acilan_yataq_divan_1-900x600.jpg"
}else if(mark.innerHTML=="Corner Sofa Hermes"){
    h1.innerText="Corner Sofa Hermes"
    rating.innerText="Rating:4"
    price.innerText="$1540"
    preprice.innerText="$2200"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★"
    img1.src="./image/img5.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Sofa%20set/Hermes/embawood_yumsaq_mebel_qonaq_destleri_hermes_divan_kunc_acilan_kreslo_boz_grey_10-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Sofa%20set/Hermes/embawood_yumsaq_mebel_qonaq_destleri_hermes_divan_kunc_acilan_kreslo_boz_grey_6-900x600.jpg"
}else if(mark.innerHTML=="Sofa Set Novella cremi"){
    h1.innerText="Sofa Set Novella cremi"
    rating.innerText="Rating:4"
    price.innerText="$1190"
    preprice.innerText="$1700"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★"
    img1.src="./image/img6.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Yum%C5%9Faq%20mebel/Novella%20crem/_MG_9842-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Yum%C5%9Faq%20mebel/Novella%20crem/_MG_9985-900x600.jpg"
}else if(mark.innerHTML=="Sofa set Solo"){
    h1.innerText="Sofa set Solo"
    rating.innerText="Rating:3"
    price.innerText="$1650"
    price.style.color="black"
    preprice.innerText=""
    red.innerHTML=""
    star.innerHTML="★★★"
    img1.src="./image/img7.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Yum%C5%9Faq%20mebel/Solo%20dest/IMG_6982-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Yum%C5%9Faq%20mebel/Solo%20dest/IMG_6989-900x600.jpg"
}else if(mark.innerHTML=="Sofa Set Vivaldi"){
    h1.innerText="Sofa Set Vivaldi"
    rating.innerText="Rating:4"
    price.innerText="$1680"
    preprice.innerText="$2400"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★"
    img1.src="./image/img8.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Sofa%20set/Vivaldi/embawood_yumsaq_mebeli_desti_divan_kreslo_uc_yerli_11-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Sofa%20set/Vivaldi/embawood_yumsaq_mebeli_desti_divan_kreslo_uc_yerli_22-900x600.jpg"
}else if(mark.innerHTML=="Chairs Lena"){
    h1.innerText="Chairs Lena"
    rating.innerText="Rating:4"
    price.innerText="$480"
    preprice.innerText="$600"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★"
    img1.src="./image/img9.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Sofa%20set/Lena/embawood_brendi_lena_yumsaq_desti_mebeli_kreslo_divan_3_yerli_boz_modern_yeni_qizili_acilan_17-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Sofa%20set/Lena/embawood_brendi_lena_yumsaq_desti_mebeli_kreslo_divan_3_yerli_boz_modern_yeni_qizili_acilan_5-900x600.jpg"
}else if(mark.innerHTML=="Chairs Vivaldi"){
    h1.innerText="Chairs Vivaldi"
    rating.innerText="Rating:4"
    price.innerText="$700"
    price.style.color="black"
    preprice.innerText=""
    red.innerHTML=""
    star.innerHTML="★★★★"
    img1.src="./image/img10.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Sofa%20set/Vivaldi/embawood_yumsaq_mebeli_desti_divan_kreslo_uc_yerli_24-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Sofa%20set/Vivaldi/embawood_yumsaq_mebeli_desti_divan_kreslo_uc_yerli_11-900x600.jpg"
}else if(mark.innerHTML=="Solo Chairs"){
    h1.innerText="Solo Chairs"
    rating.innerText="Rating:5"
    price.innerText="$630"
    preprice.innerText="$900"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★★"
    img1.src="./image/img11.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Yum%C5%9Faq%20mebel/Solo%20dest/IMG_7020-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Yum%C5%9Faq%20mebel/Solo%20dest/IMG_6982-900x600.jpg"
}else if(mark.innerHTML=="Palmira Chairs"){
    h1.innerText="Palmira Chairs"
    rating.innerText="Rating:3"
    price.innerText="$665"
    preprice.innerText="$950"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★"
    img1.src="./image/img12.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Yum%C5%9Faq%20mebel/Palmira/_C3A2233-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Yum%C5%9Faq%20mebel/Palmira/_C3A2229-900x600.jpg"
}else if(mark.innerHTML=="Garcia Chairs"){
    h1.innerText="Garcia Chairs"
    rating.innerText="Rating:5"
    price.innerText="$810"
    preprice.innerText="$1300"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★★"
    img1.src="./image/img13.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Yum%C5%9Faq%20mebel/Garsiya/_MG_9600-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Yum%C5%9Faq%20mebel/Garsiya/_MG_9556-900x600.jpg"
}else if(mark.innerHTML=="Chairs Lizbon"){
    h1.innerText="Chairs Lizbon"
    rating.innerText="Rating:5"
    price.innerText="$483"
    preprice.innerText="$690"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★★"
    img1.src="./image/img14.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Sofa%20set/LizboN/embawood_embavood_embavud_divan_lizbon_uc_yerli_yumsaq_desti_mebeli_qehveyi_acilan_butun_mebeller_yataq_qonaq_lizbon_16-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Sofa%20set/LizboN/embawood_embavood_embavud_divan_lizbon_uc_yerli_yumsaq_desti_mebeli_qehveyi_acilan_butun_mebeller_yataq_qonaq_lizbon_3-900x600.jpg"
}else if(mark.innerHTML=="California Bedroom Set"){
    h1.innerText="California Bedroom Set"
    rating.innerText="Rating:5"
    price.innerText="$2100"
    preprice.innerText="$3000"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★★"
    img1.src="./image/img15.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Bedroom/California/Colifornia-yataq_dolab2-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Bedroom/California/Colifornia-yataq_tumba-900x600.jpg"
}else if(mark.innerHTML=="Toskana Bedroom Set"){
    h1.innerText="Toskana Bedroom Set"
    rating.innerText="Rating:4"
    price.innerText="$1750"
    preprice.innerText="$2500"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★"
    img1.src="./image/img16.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Toskana%20dest/Toskana%20yataq/toskana-3a-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Toskana%20dest/Toskana%20yataq/toskana-7-900x600.jpg"
}else if(mark.innerHTML=="Eyforia Bedroom set"){
    h1.innerText="Eyforia Bedroom set"
    rating.innerText="Rating:4"
    price.innerText="$1470"
    preprice.innerText="$2100"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★"
    img1.src="./image/img17.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Yataq%20mebeli/Nirvana/nirvana-13-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Yataq%20mebeli/Nirvana/nirvana-5-900x600.jpg"
}else if(mark.innerHTML=="Yildiz Bedroom set"){
    h1.innerText="Yildiz Bedroom set"
    rating.innerText="Rating:3"
    price.innerText="$2600"
    price.style.color="black"
    preprice.innerText=""
    red.innerHTML=""
    star.innerHTML="★★★"
    img1.src="./image/img18.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Bedroom/Yildiz/embawood_yataq_desti_mebeli_carpayi_divan_kamod_komod_guzgu_paltar_dolabi_qapili_tumba_parca_basliqli_ag_boz_sandiqli_19-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Bedroom/Yildiz/embawood_yataq_desti_mebeli_carpayi_divan_kamod_komod_guzgu_paltar_dolabi_qapili_tumba_parca_basliqli_ag_boz_sandiqli_18-900x600.jpg"
}else if(mark.innerHTML=="Arizona Bedroom set"){
    h1.innerText="Arizona Bedroom set"
    rating.innerText="Rating:5"
    price.innerText="$2170"
    preprice.innerText="$3100"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★★"
    img1.src="./image/img19.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Bedroom/Arizona/Embawood_arizona_yataq_mebeli_desti_carpayi_tumba_2-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Bedroom/Arizona/Embawood_arizona_yataq_mebeli_desti_paltar_dolabi_3-900x600.jpg"
}else if(mark.innerHTML=="Florida Bedroom set"){
    h1.innerText="Florida Bedroom set"
    rating.innerText="Rating:1"
    price.innerText="$1500"
    preprice.innerText="$2150"
    red.innerHTML="30% OFF"
    star.innerHTML="★"
    img1.src="./image/img20.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Bedroom/Florida/embawood_florida_yataq_mebeli_desti_carpayi_mebelleri_dolab_6_qapili_tumba_kamod_komod_guzgu_grey_online_al_sifaris_et_qonaq_yumsaq_1-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Bedroom/Florida/embawood_florida_yataq_mebeli_desti_carpayi_mebelleri_dolab_6_qapili_tumba_kamod_komod_guzgu_grey_online_al_sifaris_et_qonaq_yumsaq_19-900x600.jpg"
}else if(mark.innerHTML=="Vivaldi Bedroom set"){
    h1.innerText="Vivaldi Bedroom set"
    rating.innerText="Rating:2"
    price.innerText="$2590"
    price.style.color="black"
    preprice.innerText=""
    red.innerHTML=""
    star.innerHTML="★★"
    img1.src="./image/img21.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Bedroom/Vivaldi/embawood_yataq_desti_mebelleri_carpayi_kravat_skaf_paltar%20dolabi_tumba_kamod_komod_dolab_4-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Bedroom/Vivaldi/embawood_yataq_desti_mebelleri_carpayi_kravat_skaf_paltar%20dolabi_tumba_kamod_komod_dolab_10-900x600.jpg"
}else if(mark.innerHTML=="Richmond Bedroom set"){
    h1.innerText="Richmond Bedroom set"
    rating.innerText="Rating:4"
    price.innerText="$2331"
    preprice.innerText="$3330"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★"
    img1.src="./image/img22.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Bedroom/Richmond%20white/embawood_richmond_ag_white_yataq_mebeli_desti_carpayi_dolab_modern_tumba_paltar_dolabi_1-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Bedroom/Richmond%20white/embawood_richmond_ag_white_yataq_mebeli_desti_paltar_dolabi_kupe_surusken_qapi_42-900x600.jpg"
}else if(mark.innerHTML=="Fenomen guest set"){
    h1.innerText="Fenomen guest set"
    rating.innerText="Rating:4"
    price.innerText="$1631"
    preprice.innerText="$2331"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★"
    img1.src="./image/img23.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Qonaq%20mebeli/Richmond/CM7A3051-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Qonaq%20mebeli/Richmond/CM7A3064-900x600.jpg"
}else if(mark.innerHTML=="Nirvana guest set"){
    h1.innerText="Nirvana guest set"
    rating.innerText="Rating:5"
    price.innerText="$1715"
    preprice.innerText="$2450"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★★"
    img1.src="./image/img24.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Qonaq%20mebeli/Nirvana/nirvana-qd-9-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Qonaq%20mebeli/Nirvana/nirvana-qd-5-900x600.jpg"
}else if(mark.innerHTML=="Melen guest set"){
    h1.innerText="Melen guest set"
    rating.innerText="Rating:3"
    price.innerText="$1666"
    preprice.innerText="$2380"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★"
    img1.src="./image/img25.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Fenomen%20dest/Fenomen%20qonaq/CM7A0344-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Fenomen%20dest/Fenomen%20qonaq/CM7A0239-900x600.jpg"
}else if(mark.innerHTML=="Tiffany guest set"){
    h1.innerText="Tiffany guest set"
    rating.innerText="Rating:2"
    price.innerText="$1484"
    preprice.innerText="$2120"
    red.innerHTML="30% OFF"
    star.innerHTML="★★"
    img1.src="./image/img26.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Livingroom/Tiffany/tiffany_qonaq_dest_mebeli_tv_alti_ag-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Livingroom/Tiffany/tiffany_qonaq_dest_mebeli_vitrin_kamod_guzgu_ag-900x600.jpg"
}else if(mark.innerHTML=="Gloria guest set"){
    h1.innerText="Gloria guest set"
    rating.innerText="Rating:1"
    price.innerText="$1365"
    preprice.innerText="$1950"
    red.innerHTML="30% OFF"
    star.innerHTML="★"
    img1.src="./image/img27.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Livingroom/Gloria/embawood_qonaq_desti_mebelleri_stul_masa_tv_alti_stul_stol_acilan_vitrin_2_qapili_tv_alti_stend_kamod_komod_guzgu_online_stais_1-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Livingroom/Gloria/embawood_qonaq_desti_mebelleri_stul_masa_tv_alti_stul_stol_acilan_vitrin_2_qapili_tv_alti_stend_kamod_komod_guzgu_online_stais_7-900x600.jpg"
}else if(mark.innerHTML=="Vivaldi guest set"){
    h1.innerText="Vivaldi guest set"
    rating.innerText="Rating:4"
    price.innerText="$1596"
    preprice.innerText="$2280"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★"
    img1.src="./image/img28.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Livingroom/Vivaldi/embawood_qonaq_desti_mebeli_vivaldi_masa_mexanizm_stul_vitrin_kamod_komod_guzgu_1-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Livingroom/Vivaldi/embawood_qonaq_desti_mebeli_vivaldi_vitrin_2_qapili_suseli_1-900x600.jpg"
}else if(mark.innerHTML=="Samanta guest set"){
    h1.innerText="Samanta guest set"
    rating.innerText="Rating:3"
    price.innerText="$1599"
    preprice.innerText="$2285"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★"
    img1.src="./image/img29.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Livingroom/Samanta/embawood_samanta_qonaq_desti_mebelleri_stul_masa_tv_alti_stul_stol_acilan_vitrin_2_qapili_tv_alti_stend_kamod_komod_guzgu_online_stais_2-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Livingroom/Samanta/embawood_samanta_qonaq_desti_mebelleri_stul_masa_tv_alti_stul_stol_acilan_vitrin_2_qapili_tv_alti_stend_kamod_komod_guzgu_online_stais_11-900x600.jpg"
}else if(mark.innerHTML=="İzmir Young set"){
    h1.innerText="İzmir Young set"
    rating.innerText="Rating:5"
    price.innerText="$1788"
    preprice.innerText="$2555"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★★"
    img1.src="./image/img30.jpg"
    img2.src="https://perla.az/imageg_700_700_katalog_855_3.jpg_katalog_40.jpg"
    img3.src="https://perla.az/imageg_700_700_katalog_855_4.jpg_katalog_40.jpg"
}else if(mark.innerHTML=="Lora Young set"){
    h1.innerText="Lora Young set"
    rating.innerText="Rating:3"
    price.innerText="$1286"
    preprice.innerText="$1838"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★"
    img1.src="./image/img31.jpg"
    img2.src="https://perla.az/imageg_700_700_katalog_779_2.jpg_katalog_40.jpg"
    img3.src="https://perla.az/imageg_700_700_katalog_779_3.jpg_katalog_40.jpg"
}else if(mark.innerHTML=="Stil Child set"){
    h1.innerText="Stil Child set"
    rating.innerText="Rating:4"
    price.innerText="$1141"
    preprice.innerText="$1630"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★"
    img1.src="./image/img32.jpg"
    img2.src="https://perla.az/imageg_700_700_katalog_423_2.jpg_katalog_40.jpg"
    img3.src="https://perla.az/imageg_700_700_katalog_423_3.jpg_katalog_40.jpg"
}else if(mark.innerHTML=="Melodiya Child set"){
    h1.innerText="Melodiya Child set"
    rating.innerText="Rating:4"
    price.innerText="$1372"
    preprice.innerText="$1960"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★"
    img1.src="./image/img34.webp"
    img2.src="https://madeyra.com/image/cache/catalog/Melodiya/_MG_2558-1067x600.webp"
    img3.src="https://madeyra.com/image/cache/catalog/Melodiya/_MG_2564-1067x600.webp"
}else if(mark.innerHTML=="Roman Child set"){
    h1.innerText="Roman Child set"
    rating.innerText="Rating:3"
    price.innerText="$1640"
    price.style.color="black"
    star.innerHTML="★★★"
    preprice.innerText=""
    red.innerHTML=""
    img1.src="./image/img35.PNG"
    img2.src="https://madeyra.com/image/cache/catalog/roman%20u%C5%9Faq/2664-1067x600.webp"
    img3.src="https://madeyra.com/image/cache/catalog/roman%20u%C5%9Faq/_MG_2691-1067x600.webp"
}else if(mark.innerHTML=="Class Young set"){
    h1.innerText="Class Young set"
    rating.innerText="Rating:4"
    price.innerText="$812"
    preprice.innerText="$1160"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★"
    img1.src="./image/img33.webp"
    img2.src="https://madeyra.com/image/cache/catalog/class%20g%C9%99nc/4044-1067x600.webp"
    img3.src="https://madeyra.com/image/cache/catalog/class%20g%C9%99nc/4058-1067x600.webp"
}else if(mark.innerHTML=="Royal Young Set"){
    h1.innerText="Royal Young Set"
    rating.innerText="Rating:1"
    price.innerText="$756"
    preprice.innerText="$1080"
    red.innerHTML="30% OFF"
    star.innerHTML="★"
    img1.src="./image/img36.webp"
    img2.src="https://madeyra.com/image/cache/catalog/Child-Young/Royal/madeyra_genc_royal_usaq_yataq_desti_carpayi_paltar_dolab_tumba_yazi_komputer_masa_11-1067x600.webp"
    img3.src="https://madeyra.com/image/cache/catalog/Child-Young/Royal/madeyra_genc_royal_usaq_yataq_desti_carpayi_paltar_dolab_tumba_yazi_komputer_masa_14-1067x600.webp"
}else if(mark.innerHTML=="Luna Blue Young Set"){
    h1.innerText="Luna Blue Young Set"
    rating.innerText="Rating:5"
    price.innerText="$1680"
    preprice.innerText="$2400"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★★"
    img1.src="./image/img37.webp"
    img2.src="https://madeyra.com/image/cache/catalog/Child-Young/Luna/Luna%20goy%20W900/madeyra_genc_luna_usaq_yataq_desti_carpayi_paltar_dolab_tumba_yazi_komputer_masa_goy10-1067x600.webp"
    img3.src="https://madeyra.com/image/cache/catalog/Child-Young/Luna/Luna%20goy%20W900/madeyra_genc_luna_usaq_yataq_desti_carpayi_paltar_dolabi_tumba_yazi_komputer_masa_goy4-1067x600.webp"
}else if(mark.innerHTML=="Oscar wardrobe"){
    h1.innerText="Oscar wardrobe"
    rating.innerText="Rating:4"
    price.innerText="$450"
    price.style.color="black"
    preprice.innerText=""
    red.innerHTML=""
    star.innerHTML="★★★★"
    img1.src="./image/img38.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Usaq%20v%C9%99%20genc/Oscar/oskar-2a-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Usaq%20v%C9%99%20genc/Oscar/oskar-6a-900x600.jpg"
}else if(mark.innerHTML=="Angel wardrobe"){
    h1.innerText="Angel wardrobe"
    rating.innerText="Rating:5"
    price.innerText="$441"
    preprice.innerText="$630"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★★"
    img1.src="./image/img39.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Usaq%20v%C9%99%20genc/Angel/CM7A2461-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Usaq%20v%C9%99%20genc/Angel/CM7A2400-900x600.jpg"
}else if(mark.innerHTML=="Enjoy wardrobe"){
    h1.innerText="Enjoy wardrobe"
    rating.innerText="Rating:4"
    price.innerText="$336"
    preprice.innerText="$480"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★"
    img1.src="./image/img40.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Usaq%20v%C9%99%20genc/Enjoy/_C3A0408-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Usaq%20v%C9%99%20genc/Enjoy/_C3A0457-900x600.jpg"
}else if(mark.innerHTML=="Sunrise wardrobe"){
    h1.innerText="Sunrise wardrobe"
    rating.innerText="Rating:5"
    price.innerText="$371"
    preprice.innerText="$530"
    red.innerHTML="30% OFF"
    star.innerHTML="★★★★★"
    img1.src="./image/img41.jpg"
    img2.src="https://embawood.az/image/cache/catalog/Child-Young/Sunrise/embawood_sunrise_ushaq_genc_mebeli_tumba_carpayi_yazi_masasi_komputer_stolu_paltar_dolabi_qapili_10-900x600.jpg"
    img3.src="https://embawood.az/image/cache/catalog/Child-Young/Sunrise/embawood_sunrise_ushaq_genc_mebeli_tumba_carpayi_yazi_masasi_komputer_stolu_paltar_dolabi_14-900x600.jpg"
}